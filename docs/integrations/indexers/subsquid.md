---
sidebar_position: 1
---

# Subsquid

[Subsquid]: https://subsquid.io/

## What is Subsquid?

[Subsquid](https://subsquid.io) is a full-stack blockchain indexing SDK and specialized data lakes (Archives) optimized for extraction of large volumes of historical on-chain data.

The SDK offers a highly customizable Extract-Transform-Load-Query stack and indexing speeds of up to and beyond 50,000 blocks per second when indexing events and transactions.

Subsquid has native and full support for both the Ethereum Virtual Machine and Substrate data. This allows developers to extract on-chain data from any of the Moonbeam networks and process EVM logs as well as Substrate entities (events, extrinsics and storage items) in one single project and serve the resulting data with one single GraphQL endpoint. With Subsquid, filtering by EVM topic, contract address, and block range are all possible.

The goal of this tutorial is to guide you through creating a simple blockchain indexer ("squid") using Squid SDK. The squid will be indexing the data from two contracts ([AstarDegens](https://blockscout.com/astar/address/0xd59fC6Bfd9732AB19b03664a45dC29B8421BDA9a) and [AstarCats](https://blockscout.com/astar/address/0x8b5d62f396Ca3C6cF19803234685e693733f9779)) deployed on the [Astar network](https://astar.network/). The objective will be to track ownership and transfers of all NFTs issued by these contracts. This guide can be adapted for Shiden network and other types of tokens as well.

## Pre-requisites

- Familiarity with Git 
- A properly set up [development environment](https://docs.subsquid.io/tutorials/create-a-wasm-processing-squid//tutorials/development-environment-set-up) consisting of Node.js and Docker
- [Squid CLI](https://docs.subsquid.io/squid-cli/installation)

:::info
This tutorial uses custom scripts defined in `commands.json`. The scripts are automatically picked up as `sqd` sub-commands.
:::

## Scaffold using `sqd init`

We will start with the [`frontier-evm` squid template](https://github.com/subsquid-labs/squid-frontier-evm-template/) available through [`sqd init`](https://docs.subsquid.io/squid-cli/init). It is built to index EVM smart contracts deployed on Astar/Shiden, but it is also capable of indexing Substrate events. To retrieve the template and install the dependencies, run

```bash
sqd init astar-evm-tutorial --template frontier-evm
cd astar-tutorial
npm ci
```

## Define Entity Schema

Next, we ensure that the data [schema](https://docs.subsquid.io/basics/schema-file) of the squid defines [entities](https://docs.subsquid.io/basics/schema-file/entities) that we would like to track. We are interested in:

* Token transfers
* Ownership of tokens
* Contracts and their minted tokens

Luckily, the EVM template already contains a schema file that defines the exact entities we need:

```graphql
type Token @entity {
  id: ID!
  owner: Owner
  uri: String
  transfers: [Transfer!]! @derivedFrom(field: "token")
  contract: Contract
}

type Owner @entity {
  id: ID!
  ownedTokens: [Token!]! @derivedFrom(field: "owner")
  balance: BigInt
}

type Contract @entity {
  id: ID!
  name: String
  symbol: String
  totalSupply: BigInt
  mintedTokens: [Token!]! @derivedFrom(field: "contract")
}

type Transfer @entity {
  id: ID!
  token: Token!
  from: Owner
  to: Owner
  timestamp: BigInt!
  block: Int!
  transactionHash: String!
}
```

It's worth noting a couple of things in this [schema definition](https://docs.subsquid.io/basics/schema-file):

* **`@entity`**: Signals that this type will be translated into an ORM model that is going to be persisted in the database.
* **`@derivedFrom`**: Signals that the field will not be persisted in the database. Instead, it will be [derived from](https://docs.subsquid.io/basics/schema-file/entity-relations) the entity relations.
* **type references** (e.g. `from: Owner`): When used on entity types, they establish a relation between two entities.

TypeScript entity classes have to be regenerated whenever the schema is changed, and to do that we use the `squid-typeorm-codegen` tool. The pre-packaged `commands.json` already comes with a `codegen` shortcut, so we can invoke it with `sqd`:

```bash
sqd codegen
```
The (re)generated entity classes can then be browsed at `src/model/generated`.

## ABI Definition and Wrapper

Subsquid maintains [tools](https://docs.subsquid.io/substrate-indexing/squid-substrate-typegen) for automated generation of TypeScript classes for handling Substrate data sources (events, extrinsics, storage items). Possible runtime upgrades are automatically detected and accounted for.

Similar functionality is available for EVM indexing through the [`squid-evm-typegen`](https://docs.subsquid.io/evm-indexing/squid-evm-typegen) tool. It generates TypeScript modules for handling EVM logs and transactions based on a [JSON ABI](https://docs.ethers.io/v5/api/utils/abi/) of the contract.

For our squid we will need such a module for the [ERC-721](https://eips.ethereum.org/EIPS/eip-721)-compliant part of the contracts' interfaces. Once again, the template repository already includes it, but it is still important to explain what needs to be done in case one wants to index a different type of contract.

The procedure uses an `sqd` script from the template that uses `squid-evm-typegen` to generate Typescript facades for JSON ABIs stored in the `abi` folder. Place any ABIs you require for interfacing your contracts there and run
```bash
sqd typegen
```
The results will be stored at `src/abi`. One module will be generated for each ABI file, and it will include constants useful for filtering and functions for decoding EVM events and functions defined in the ABI.

## Define and Bind Event Handler(s)

Subsquid SDK provides users with the [`SubstrateBatchProcessor` class](https://docs.subsquid.io/substrate-indexing). Its instances connect to chain-specific [Subsquid archives](https://docs.subsquid.io/archives/overview) to get chain data and apply custom transformations. The indexing begins at the starting block and keeps up with new blocks after reaching the tip.

`SubstrateBatchProcessor`s [exposes methods](https://docs.subsquid.io/substrate-indexing/configuration) to "subscribe" them to specific data such as Substrate events, extrinsics, storage items or, for EVM, logs and transactions. The actual data processing is then started by calling the `.run()` function. This will start generating requests to the Archive for [*batches*](https://docs.subsquid.io/basics/batch-processing) of data specified in the configuration, and will trigger the callback function, or *batch handler* (passed to `.run()` as second argument) every time a batch is returned by the Archive.

It is in this callback function that all the mapping logic is expressed. This is where chain data decoding should be implemented, and where the code to save processed data on the database should be defined.

### Managing the EVM contract

Before we begin defining the mapping logic of the squid, we are going to rewrite the `src/contracts.ts` utility module for managing the involved EVM contracts. It will export:

* Addresses of [astarDegens](https://blockscout.com/astar/address/0xd59fC6Bfd9732AB19b03664a45dC29B8421BDA9a) and [astarCats](https://blockscout.com/astar/address/0x8b5d62f396Ca3C6cF19803234685e693733f9779) contracts.
* A `Map` from the contract addresses to constructor arguments of the `Contract` [entity](https://docs.subsquid.io/basics/schema-file/entities). The arguments are hard-coded, but they could be fetched from the on-chain contracts
* A function that will create and save an instance of the `Contract` entity to the database, if one does not exist already. Either the already existing or the created entity instance will be returned on the first time the function is called on a given address. It will also be cached and on subsequent calls the cached version will be returned.

Here are the full file contents:

```typescript
// src/contract.ts
import { Store } from "@subsquid/typeorm-store";
import { Contract } from "./model";

export const astarDegensAddress = "0xd59fC6Bfd9732AB19b03664a45dC29B8421BDA9a".toLowerCase();
export const astarCatsAddress = "0x8b5d62f396Ca3C6cF19803234685e693733f9779".toLowerCase();

export const contractMapping: Map<string, Contract> = new Map<
  string,
  Contract
>();

contractMapping.set(astarDegensAddress, {
  id: astarDegensAddress,
  name: "AstarDegens",
  symbol: "DEGEN",
  totalSupply: 10000n,
  mintedTokens: [],
});

contractMapping.set(astarCatsAddress, {
  id: astarCatsAddress,
  name: "AstarCats",
  symbol: "CAT",
  totalSupply: 7777n,
  mintedTokens: [],
});

function createContractEntity(address: string): Contract {
  const contractObj = contractMapping.get(address);
  if (contractObj)
    return new Contract(contractObj);
  
  throw new Error("could not find a contract with that address");
}

const contractAddresstoModel: Map<string, Contract> = new Map<
string,
Contract
>();

export async function getContractEntity(
  store: Store,
  address: string
): Promise<Contract | undefined> {
  if (contractAddresstoModel.get(address) == null) {
    let contractEntity = await store.get(Contract, address);
    if (contractEntity == null) {
      contractEntity = createContractEntity(address);
      await store.insert(contractEntity);
      contractAddresstoModel.set(address, contractEntity)
    }
  }
  
  return contractAddresstoModel.get(address);
}
```

## Configure Processor and Attach Handler

The `src/processor.ts` file is where squids instantiate the processor (a `SubstrateBatchProcessor` in our case), configure it and attach the handler functions.

We adapt the template code to handle two contracts instead of one and change the logic of saving `Token`s in a way that avoids ID clashing. We also change the processor data source setting and point it the `astar` archive URL retrieved from the [archive registry](https://github.com/subsquid/archive-registry). Here is the end result:

```typescript
// src/processor.ts
import { lookupArchive } from "@subsquid/archive-registry";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import {
  BatchContext,
  BatchProcessorItem,
  EvmLogEvent,
  SubstrateBatchProcessor,
  SubstrateBlock,
} from "@subsquid/substrate-processor";
import { In } from "typeorm";
import { ethers } from "ethers";
import {
  astarDegensAddress,
  astarCatsAddress,
  contractMapping,
  getContractEntity,
} from "./contract";
import { Owner, Token, Transfer } from "./model";
import * as erc721 from "./abi/erc721";

const database = new TypeormDatabase();
const processor = new SubstrateBatchProcessor()
  .setBlockRange({ from: 442693 })
  .setDataSource({
    chain: process.env.RPC_ENDPOINT,
    archive: lookupArchive("astar"),
  })
  .setTypesBundle("astar")
  .addEvmLog(astarDegensAddress, {
    range: { from: 442693 },
    filter: [erc721.events.Transfer.topic],
  })
  .addEvmLog(astarCatsAddress, {
    range: { from: 800854 },
    filter: [erc721.events.Transfer.topic],
  });

type Item = BatchProcessorItem<typeof processor>;
type Context = BatchContext<Store, Item>;

processor.run(database, async (ctx) => {
  const transfersData: TransferData[] = [];

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === "EVM.Log") {
        const transfer = handleTransfer(block.header, item.event);
        transfersData.push(transfer);
      }
    }
  }

  await saveTransfers(ctx, transfersData);
});

type TransferData = {
  id: string;
  from: string;
  to: string;
  token: ethers.BigNumber;
  timestamp: bigint;
  block: number;
  transactionHash: string;
  contractAddress: string;
};

function handleTransfer(
  block: SubstrateBlock,
  event: EvmLogEvent
): TransferData {
  const { from, to, tokenId } = erc721.events.Transfer.decode(event.args);

  const transfer: TransferData = {
    id: event.id,
    token: tokenId,
    from,
    to,
    timestamp: BigInt(block.timestamp),
    block: block.height,
    transactionHash: event.evmTxHash,
    contractAddress: event.args.address,
  };

  return transfer;
}

async function saveTransfers(ctx: Context, transfersData: TransferData[]) {
  const tokensIds: Set<string> = new Set();
  const ownersIds: Set<string> = new Set();

  for (const transferData of transfersData) {
    tokensIds.add(transferData.token.toString());
    ownersIds.add(transferData.from);
    ownersIds.add(transferData.to);
  }

  const transfers: Set<Transfer> = new Set();

  const tokens: Map<string, Token> = new Map(
    (await ctx.store.findBy(Token, { id: In([...tokensIds]) })).map((token) => [
      token.id,
      token,
    ])
  );

  const owners: Map<string, Owner> = new Map(
    (await ctx.store.findBy(Owner, { id: In([...ownersIds]) })).map((owner) => [
      owner.id,
      owner,
    ])
  );

  for (const transferData of transfersData) {
    const contract = new erc721.Contract(
      ctx,
      { height: transferData.block },
      transferData.contractAddress
    );

    let from = owners.get(transferData.from);
    if (from == null) {
      from = new Owner({ id: transferData.from, balance: 0n });
      owners.set(from.id, from);
    }

    let to = owners.get(transferData.to);
    if (to == null) {
      to = new Owner({ id: transferData.to, balance: 0n });
      owners.set(to.id, to);
    }

    const tokenId = `${contractMapping.get(transferData.contractAddress)?.symbol || ""}-${transferData.token.toString()}`;
    let token = tokens.get(tokenId);
    if (token == null) {
      token = new Token({
        id: tokenId,
        uri: await contract.tokenURI(transferData.token),
        contract: await getContractEntity(ctx.store, transferData.contractAddress),
      });
      tokens.set(token.id, token);
    }
    token.owner = to;

    const { id, block, transactionHash, timestamp } = transferData;

    const transfer = new Transfer({
      id,
      block,
      timestamp,
      transactionHash,
      from,
      to,
      token,
    });

    transfers.add(transfer);
  }

  await ctx.store.save([...owners.values()]);
  await ctx.store.save([...tokens.values()]);
  await ctx.store.save([...transfers]);
}
```

:::info
Pay close attention to the line with the `const tokenId` definition, because this is how we avoid the clash while storing tokens from both collections. The contracts are using cardinal numbers to identify their own tokens, but now we are adding the IDs to the same table column. To identify tokens uniquely, we use a concatenation of the contract symbol and a string representation of the original ID.
:::

:::info
It is also worth pointing out that the `contract.tokenURI` call is accessing the **state** of the contract via a chain RPC endpoint. This is slowing down the indexing a little, but this data is only available this way. You'll find more information on accessing state in the [dedicated section of our docs](https://docs.subsquid.io/substrate-indexing/evm-support#access-the-contract-state).
:::

:::warning
This code expects to find a URL of a working Astar RPC endpoint in the `RPC_ENDPOINT` environment variable. Set it in the `.env` file and in [Aquarium secrets](https://docs.subsquid.io/deploy-squid/env-variables) if and when you deploy your squid there. We tested the code using a public endpoint available at `wss://astar.public.blastapi.io`; for production, we recommend using private endpoints.
:::

## Launch and Set Up the Database

When running the project locally it is possible to use the `docker-compose.yml` file that comes with the template to launch a PostgreSQL container. To do so, run `sqd up` in your terminal.

[comment]: # (Launch database container https://i.gyazo.com/907ef55371e1cdb1839d2fe7ff108ee7.gif)

Squid projects automatically manage the database connection and schema via an [ORM abstraction](https://en.wikipedia.org/wiki/Object%E2%80%93relational\_mapping). In this approach the schema is managed through migration files. Because we made changes to the schema, we need to remove the existing migration(s) and create a new one, then apply the new migration.

This involves the following steps:

1. Build the code:

    ```bash
    sqd build
    ```

2. Make sure you start with a clean Postgres database. The following commands drop-create a new Postgres instance in Docker:

    ```bash
    sqd down
    sqd up
    ```

3. Generate the new migration (this will wipe any old migrations):

    ```bash
    sqd migration:generate
    ```

4. Apply the migration, so that the tables are created in the database:

    ```bash
    sqd migration:apply
    ```

## Launch the Project

To launch the processor run the following command (this will block the current terminal):

```bash
sqd process
```

[comment]: # (Launch processor https://i.gyazo.com/66ab9c1fef9203d3e24b6e274bba47e3.gif)

Finally, in a separate terminal window, launch the GraphQL server:

```bash
sqd serve
```

Visit [`localhost:4350/graphql`](http://localhost:4350/graphql) to access the [GraphiQL](https://github.com/graphql/graphiql) console. From this window, you can perform queries such as this one, to find out the account owners with the biggest balances:

```graphql
query MyQuery {
  owners(limit: 10, where: {}, orderBy: balance_DESC) {
    balance
    id
  }
}
```

Or this other one, looking up the tokens owned by a given owner:

```graphql
query MyQuery {
  tokens(where: {owner: {id_eq: "0x1210F3eA18Ef463c162FFF9084Cee5B6E5ccAb37"}}) {
    uri
    contract {
      id
      name
      symbol
      totalSupply
    }
  }
}
```

Have fun playing around with queries, after all, it's a _playground_!

## Publish the Project

Subsquid offers a SaaS solution to host projects created by its community. All templates ship with a deployment manifest file named `squid.yml`, which can be used, in conjunction to the Squid CLI command `sqd deploy`.

Please refer to the [Deploy your Squid section](https://docs.subsquid.io/deploy-squid/quickstart/) on Subquid's documentation site for more information.

## Example Project Repository

You can view the [finalized and complete project on GitHub](https://github.com/subsquid/squid-astar-example/tree/astar-degens).

## What's next

Subsquid EVM template is the best starting point for EVM contract indexing. The template and this guide demonstrate how to index the `Transfer` event for ERC721 tokens, but the same process can be applied to ERC20 tokens as well. It is sufficient to import a new ABI interface, make the necessary changes to the `schema.graphql`, launch the `codegen` and `evm-typegen` tools, and finally adjust the helper and handler functions in `contract.ts`.

Furthermore, Subsquid SDK supports Ink! contracts and with it, you'll be able to index WASM smart contracts. Head over to the [related section of the official documentation](https://docs.subsquid.io/substrate-indexing/wasm-support/), for more information, and to find [a tutorial on this topic](https://docs.subsquid.io/tutorials/create-a-wasm-processing-squid/).

[Subsquid's documentation](https://docs.subsquid.io/) contains informative material and is the best place to start, if you are curious about any aspects of these examples that were not fully explained in this guide.

Finally, join the [Telegram SquidDevs group](https://t.me/HydraDevs) and the [Subsquid Discord server](https://discord.gg/dxR4wNgdjV), to join the community of builders.
