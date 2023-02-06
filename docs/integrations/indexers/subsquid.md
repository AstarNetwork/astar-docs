---
sidebar_position: 1
---

# Subsquid

[Subsquid]: https://subsquid.io/

## What is Subsquid?

[Subsquid] is a query node framework for Substrate-based blockchains. In very simple terms, Subsquid can be thought of as an ETL (Extract, Transform, and Load) tool, with a GraphQL server included. It enables comprehensive filtering, pagination, and even full-text search capabilities.

Subsquid has native and full support for both the Ethereum Virtual Machine and Substrate data. This allows developers to extract on-chain data from any of the Astar networks and process EVM logs as well as Substrate entities (events, extrinsics and storage items) in one single project, and serve the resulting data with one single GraphQL endpoint. With Subsquid, filtering by EVM topic, contract address, and block range are all possible.

This guide will explain how to create a Subsquid project (also known as a "*Squid*") that indexes ERC721 token transfers on the Astar network. As such, you'll be looking at the `Transfer` EVM event topics. This guide can be adapted for Shiden network and other types of tokens as well.

Prerequisites
For a Squid project to be able to run, you will need to have the following installed:

- [Node.js](https://nodejs.org/en/download/): version 16 or later
- Docker

## Getting Started

You can create a project by using the template repository made available by Subsquid. To get started, you can take the following steps:

1. Vist the [`squid-evm-template` repository on GitHub](https://github.com/subsquid/squid-evm-template)
2. Click the **Use this template** button
3. Select the account and repository name for your project
4. Clone the created repository (be careful of changing `account` with your own GitHub account):

```bash
git clone git@github.com:<account>/squid-evm-template.git
```

5. Then you can install the dependencies from within the project directory:

```bash
cd squid-evm-template && npm i
```

![1](img/1.gif)

The next sections will take the template and customize it, one aspect at a time, to obtain the right data and process it. To view the complete project, you can check out the [`squid-astar-example` repository on GitHub](https://github.com/subsquid/squid-astar-example).

## Define Entity Schema

The EVM template already contains a schema that defines the exact entities we need for the purpose of this guide. For this reason, changes are necessary, but it's still useful to explain what is going on.

To index ERC721 token transfers, we will need to track:

- Token transfers
- Ownership of tokens
- Contracts and their minted tokens

The `schema.graphql` file defines them like this:

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

It's worth noting a few things in this [schema definition](https://docs.subsquid.io/develop-a-squid/schema-file/):

- **@entity** - signals that this type will be translated into an ORM model that is going to be persisted in the database
- **@derivedFrom** - signals the field will not be persisted on the database, it will rather be derived
- **type references** (i.e. `from: Owner`) - establishes a relation between two entities

The template already has automatically generated TypeScript classes for this schema definition. They can be found under `src/model/generated`.
Whenever changes are made to the schema, new TypeScript entity classes have to be generated, and to do that you'll have to run the `codegen` tool:

```bash
npx sqd codegen
```

## ABI Definition and Wrapper

Subsquid offers support for automatically building TypeScript type-safe interfaces for Substrate data sources (events, extrinsics, storage items). Changes are automatically detected in the runtime.

This functionality has been extended to EVM indexing, with the release of an `evm-typegen` tool to generate TypeScript interfaces and decoding functions for EVM logs.

Once again, the template repository already includes interfaces for ERC721 contracts, which is the subject of this guide. But it is still important to explain what needs to be done, in case, for example, one wants to index a different type of contract.

First of all, it is necessary to obtain the definition of its Application Binary Interface (ABI). This can be obtained in the form of a JSON file, which will be imported into the project.

1. It is advisable to copy the JSON file in the `src/abis` subfolder.
2. To automatically generate TypeScript interfaces from an ABI definition, and decode event data, simply run this command from the project's root folder

```bash
npx squid-evm-typegen --abi src/abi/ERC721.json --output src/abi/erc721.ts
```

The `abi` parameter points at the JSON file previously created, and the output parameter is the name of the file that will be generated by the command itself.

This command will automatically generate a TypeScript file named `erc721.ts`, under the `src/abi` subfolder, that defines data interfaces to represent output of the EVM events defined in the ABI, as well as a mapping of the functions necessary to decode these events (see the events dictionary in the aforementione file).

:::info
The ERC721 ABI defines the signatures of all events in the contract. The `Transfer` event has three arguments, named: `from`, `to`, and `tokenId`. Their types are, respectively, `address`, `address`, and `uint256`. As such, the actual definition of the `Transfer` event looks like this: `Transfer(address, address, uint256)`.
:::

## Define and Bind Event Handler(s)

The Subsquid SDK provides users with a [processor](https://docs.subsquid.io/develop-a-squid/squid-processor/) class, named `SubstrateProcessor` or, in this specific case [`SubstrateEvmProcessor`](https://docs.subsquid.io/reference/evm-processor). The processor connects to the [Subsquid archive](https://docs.subsquid.io/key-concepts/architecture#archive) to get chain data. It will index from the configured starting block, until the configured end block, or until new data is added to the chain.

The processor exposes methods to "attach" functions that will "handle" specific data such as Substrate events, extrinsics, storage items, or EVM logs. These methods can be configured by specifying the event or extrinsic name, or the EVM log contract address, for example. As the processor loops over the data, when it encounters one of the configured event names, it will execute the logic in the "handler" function.

### Managing the EVM contract

It is worth pointing out, at this point, that some important auxiliary code like constants and helper functions to manage the EVM contract are defined in the `src/contracts.ts` file. Here's a summary of what is in it:

- Define the chain node endpoint (optional but useful)
- Create a contract interface to store information such as the address and ABI
- Define functions to fetch a contract entity from the database or create one
- Define the `processTransfer` EVM log handler, implementing logic to track token transfers

In order to adapt the template to the scope of this guide, we need to apply a few changes:

1. Edit the `CHAIN_NODE` constant to the endpoint URL of Astar network (e.g. `wss://astar.api.onfinality.io/public-ws`)
2. Edit the hexadecimal address used to create the `contract` constant (we are going to use [this token](https://blockscout.com/astar/token/0xd59fC6Bfd9732AB19b03664a45dC29B8421BDA9a/token-transfers) for the purpose of this guide)
3. Change the `name`, `symbol` and `totalSupply` values used in the `createContractEntity` function to their correct values (see link in the previous point)

In case someone wants to index an EVM event different from `Transfer`, they would also have to implement a different handler function from `processTransfer`, especially the line where the event "`Transfer(address,address,uint256)`" is decoded.

```ts
// src/contract.ts
import { assertNotNull, EvmLogHandlerContext, Store } from "@subsquid/substrate-evm-processor";
import { ethers } from "ethers";
import { Contract, Owner, Token, Transfer } from "./model";
import { events, abi } from "./abi/erc721"

export const CHAIN_NODE = "wss://astar.api.onfinality.io/public-ws";

export const contract = new ethers.Contract(
  "0xd59fC6Bfd9732AB19b03664a45dC29B8421BDA9a",
  abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
);

export function createContractEntity(): Contract {
  return new Contract({
    id: contract.address,
    name: "AstarDegens",
    symbol: "DEGEN",
    totalSupply: 10000n,
  });
}

let contractEntity: Contract | undefined;

export async function getContractEntity({
  store,
}: {
  store: Store;
}): Promise<Contract> {
  if (contractEntity == null) {
    contractEntity = await store.get(Contract, contract.address);
  }
  return assertNotNull(contractEntity);
}


export async function processTransfer(ctx: EvmLogHandlerContext): Promise<void> {
  const transfer =
    events["Transfer(address,address,uint256)"].decode(ctx);

  let from = await ctx.store.get(Owner, transfer.from);
  if (from == null) {
    from = new Owner({ id: transfer.from, balance: 0n });
    await ctx.store.save(from);
  }

  let to = await ctx.store.get(Owner, transfer.to);
  if (to == null) {
    to = new Owner({ id: transfer.to, balance: 0n });
    await ctx.store.save(to);
  }

  let token = await ctx.store.get(Token, transfer.tokenId.toString());
  if (token == null) {
    token = new Token({
      id: transfer.tokenId.toString(),
      uri: await contract.tokenURI(transfer.tokenId),
      contract: await getContractEntity(ctx),
      owner: to,
    });
    await ctx.store.save(token);
  } else {
    token.owner = to;
    await ctx.store.save(token);
  }

  await ctx.store.save(
    new Transfer({
      id: ctx.txHash,
      token,
      from,
      to,
      timestamp: BigInt(ctx.substrate.block.timestamp),
      block: ctx.substrate.block.height,
      transactionHash: ctx.txHash,
    })
  );
}
```

The "handler" function takes in a `Context` of the correct type (`EvmLogHandlerContext`, in this case). The context contains the triggering event and the interface to store data, and is used to extract and process data and save it to the database.

:::info
For the event handler, it is also possible to bind an arrow function to the processor.
:::

### Configure Processor and Attach Handler

The `src/processor.ts` file is where the template project instantiates the `SubstrateEvmProcessor` class, configures it for execution, and attaches the handler functions(s).
Luckily for us, most of the job is already done. It is important to note that, since the template was built for the `moonriver` network, there are a couple of things to change:

1. Change the name argument passed to `SubstrateEvmProcessor` constructor (not necessary, but good practice)
2. Change the archive parameter of the `setDataSource` function to fetch the Archive URL for Astar.
3. Change the argument passed to the `setTypesBundle` function to `"astar"`.

Look at this code snippet for the end result:

```ts
// src/processor.ts
import { SubstrateEvmProcessor } from "@subsquid/substrate-evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import {
  CHAIN_NODE,
  contract,
  createContractEntity,
  processTransfer,
} from "./contract";
import { events } from "./abi/erc721";

const processor = new SubstrateEvmProcessor("astar-substrate");

processor.setBatchSize(500);

processor.setDataSource({
  chain: CHAIN_NODE,
  archive: lookupArchive("astar")[0].url,
});

processor.setTypesBundle("astar");

processor.addPreHook({ range: { from: 0, to: 0 } }, async (ctx) => {
  await ctx.store.save(createContractEntity());
});

processor.addEvmLogHandler(
  contract.address,
  {
    filter: [events["Transfer(address,address,uint256)"].topic],
  },
  processTransfer
);

processor.run();
```

:::info
The `lookupArchive` function is used to consult the [archive registry](https://github.com/subsquid/archive-registry) and yield the archive address, given a network name. Network names should be in lowercase.
:::

## Launch and Set Up the Database

When running the project locally, as is the case for this guide, it is possible to use the `docker-compose.yml` file that comes with the template to launch a PostgreSQL container. To do so, run the following command in your terminal:

```bash
docker-compose up -d
```

![2](img/2.gif)

:::info
The `-d` parameter is optional, it launches the container in `daemon` mode so the terminal will not be blocked and no further output will be visible.
:::

Squid projects automatically manage the database connection and schema, via an [ORM abstraction](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping).

To set up the database, you can take the following steps:

1. Build the code

```bash
npm run build
```

2. Remove the template's default migration:

```bash
rm -rf db/migrations/*.js
```

3. Make sure the Postgres Docker container, `squid-evm-template_db_1`, is running

```bash
docker ps -a
```

4. Drop the current database (if you have never run the project before, this is not necessary), create a new database, create the initial migration, and apply the migration

```bash
npx sqd db drop
npx sqd db create
npx sqd db create-migration Init
npx sqd db migrate
```

## Launch the Project

To launch the processor (this will block the current terminal), you can run the following command:

```bash
node -r dotenv/config lib/processor.js
```

![3](img/3.gif)

Finally, in a separate terminal window, launch the GraphQL server:

```bash
npx squid-graphql-server
```

Visit [`localhost:4350/graphql`](http://localhost:4350/graphql) to access the [GraphiQl](https://github.com/graphql/graphiql) console. From this window, you can perform queries such as this one, to find out the account owners with the biggest balances:

```graphql
query MyQuery {
  owners(limit: 10, where: {}, orderBy: balance_DESC) {
    balance
    id
  }
}
```

Or this other one, looking up the tokens owned by a given address:

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

Have some fun playing around with queries, after all, it's a *playground*!

## Publish the Project

Subsquid offers a SaaS solution to host projects created by its community. Please refer to the [Deploy your Squid tutorial](https://docs.subsquid.io/tutorial/deploy-your-squid) on Subquid's documentation site for more information.

You can also check out other projects hosted there, by heading to the [Aquarium](https://app.subsquid.io/aquarium), because that's where Squids are!

## Example Project Repository

You can view the [finalized and complete project on GitHub](https://github.com/subsquid/squid-astar-example).

## What's next

Subsquid EVM template is the best starting point for EVM contract indexing. The template and this guide demonstrate how to index the `Transfer` event for ERC721 tokens, but the same process can be applied to ERC20 tokens as well. It is sufficient to import a new ABI interface, make the necessary changes to the `schema.graphql`, launch the `codegen` and `evm-typegen` tools, and finally adjust the helper and handler functions in `contract.ts`.

[Subsquid's documentation](https://docs.subsquid.io/) contains informative material and is the best place to start, if you are curious about any aspects of these examples that were not fully explained in this guide.

Finally, join the [Telegram SquidDev group](https://t.me/HydraDevs) and the [Subsquid Discord server](https://discord.gg/dxR4wNgdjV), to join the community of builders.
