---
sidebar_position: 2
---

# SubQuery

## What is SubQuery?

SubQuery’s goal is to become an Omni-chain indexer for both EVM/Substrate-native smart contract infrastructure in the Polkadot ecosystem. Connecting directly to Substrate with WebSocket, developers can get an insight into their smart contracts from Subquery’s indexing mechanism by detecting smart contract events in a more native way without running separate RPC nodes for HTTP connection. The insights are often used for recent trades in DEXes, yield reserves tracking in money markets, NFT transfers, and many more. In this tutorial, we will look at how to set up a Substrate native indexer for frontier EVM tracking ERC20 token transfers.

SubQuery has an advantage over the Graph in that it requires Javascript or TypeScript, while each subgraph requires AssemblyScript, a more focused native-friendly language and may have unexpected behavior. It also tracks EVM calls so that developers can still make insight out of calls without adding event code. For deployment workflow, since Subgraph is made for the public, it requires developers to add Subgraphs one by one, but Subquery just needs one command to build a dedicated indexer.

## Prerequisites

[Docker]: https://docs.docker.com/get-docker/
[docker-compose]: https://docs.docker.com/compose/install/
[GraphQL]: https://graphql.org/

Before you setup SubQuery for your platform, you will need:

[Docker] : Containerization platform for software solutions
[docker-compose] : Used to automate interactions between docker containers
[GraphQL]: Simple knowledge on how to propose entity and query it is required

## Getting started

First, clone the boilerplate code for setting up the indexer:

```bash
git clone https://github.com/AstarNetwork/astar-evm-example.git
cd astar-evm-example
yarn
```

### Setting up typedef for Connecting to a Parachain

To connect to a parachain with websocket, type definitions, or typedef for short, are used to encode data for communication. `chainTypes.ts` manages the manifest of the types of data that will be shared between the parachain and the indexer. As Astar.js goes through an upgrade of type definitions, `chainTypes.ts` will need to be updated with the latest typedefs to be able to fully connect to parachains.

```ts
import type { OverrideBundleDefinition } from "@polkadot/types/types";

const definitions: OverrideBundleDefinition = {
    types: [
        {
            // on all versions
            minmax: [0, undefined],
            types: {
                Keys: "AccountId",
                Address: "MultiAddress",
                LookupSource: "MultiAddress",
                AmountOf: "Amount",
                Amount: "i128",
                SmartContract: {
                    _enum: {
                        Evm: "H160",
                        Wasm: "AccountId",
                    },
                },
                EraStakingPoints: {
                    total: "Balance",
                    stakers: "BTreeMap<AccountId, Balance>",
                    formerStakedEra: "EraIndex",
                    claimedRewards: "Balance",
                },
                EraRewardAndStake: {
                    rewards: "Balance",
                    staked: "Balance",
                },
                EraIndex: "u32",
            },
        },
    ],
};

export default { typesBundle: definitions };
```

### Setup Entity for Storing Event Topics

SubQuery indexer filters event topics from the connected parachain and stores them in its database for searchability. A topic is a unit of event data on a Solidity smart contract that is used for providing updates about its state. `Entity` declares the shape of data, and which event data is stored in the indexer database through the handler. To declare an entity to store event topics, you can edit `schema.graphql` in the root directory with GraphQL syntax.

```graphql
type Transfer @entity {
  id: ID! # Tx hash

  from: String!
  to: String!
  contractAddress: String!
  amount: BigInt!
  blockNumber: BigInt!
}
```

After declaring an entity, you can run the command `yarn codegen` to generate model types for handling events in the handler code. Then, the `src` directory will have types ready for the handler to add indexing logic. `types` is the directory which declares data entities as models for handler to manage.

```
src/
├── chaintypes.ts
├── index.ts
├── mappings
│   └── mappingHandlers.ts
**└── types
    ├── index.ts
    └── models
        ├── Transfer.ts
        └── index.ts**
```

### Setup Handler for Indexing

Now that storage has been declared, we can use the handler to declare how to add data on each event emission. The `mappings` directory stores handlers mapping solidity event topics, to a SubQuery data entity. In this tutorial, we will examine how an ERC20 transfer event is handled.

```ts
// import model from types
import { Transfer } from "../types"; 
// contract processor library
import {
  FrontierEvmEvent,
} from "@subql/contract-processors/dist/frontierEvm";
// uint256 in js
import { BigNumber } from "@ethersproject/bignumber";

// event data declaration 
//[ /*topic types in order address as string */ ] & {
// /*
//   mapping of event topic args and types
// */
type TransferEventArgs = [string, string, BigNumber] & {
  from: string;
  to: string;
  value: BigNumber;
};

// When event occurs
export async function handleERC20Transfer(
  event: FrontierEvmEvent<TransferEventArgs>
): Promise<void> {
  logger.warn("Calling handleERC20Transfer");
  // fill entity with event data
  const transfer = Transfer.create({
    amount: event.args.value.toBigInt(),
    from: event.args.from,
    to: event.args.to,
    contractAddress: event.address,
    blockNumber: BigInt(event.blockNumber),
    id: event.transactionHash,
  });
 // save it to indexer database
  await transfer.save();
}
```

SubQuery indexer can also track calls for Solidity precompiles, that are normally difficult to track.

```ts
import { Transfer } from "../types";
import {
  FrontierEvmCall
} from "@subql/contract-processors/dist/frontierEvm";
import { BigNumber } from "@ethersproject/bignumber";

type TransferCallArgs = [string, BigNumber] & {
  _to: string;
  _value: BigNumber;
};

export async function handleERC20TransferCall(
  call: FrontierEvmCall<TransferCallArgs>
): Promise<void> {
  logger.warn("Calling handleERC20TransferCall");

  const transfer = Transfer.create({
    amount: call.args._value.toBigInt(),
    from: call.from,
    to: call.args._to,
    contractAddress: call.to,
    id: call.hash,
    blockNumber: undefined,
  });

  await transfer.save();
}
```

Once the handler is built, run `yarn build` to compile the code into deployable format. You will want to confirm that the `dist` folder has been created under the root folder, as it is below:

```
astar-evm-example
├── LICENSE
├── README.md
**├── dist**
├── docker-compose.yml
├── erc20.abi.json
├── node_modules
├── package.json
├── project.yaml
├── schema.graphql
├── src
├── tsconfig.json
└── yarn.lock
```

### Deploy Indexer

SubQuery indexer is a multi-container solution that runs in three different containers.

- `postgres` : Database which stores data from the indexer.
- `subquery-node` : Event subscriber which detects EVM calls or events on the connected blockchain, and writes them in the database.
- `graphql-engine` : GraphQL engine which indexes data within the database.

The `docker-compose.yml` file handles specifics about how they are connected, but `project.yaml` will need to be edited to provide information to `subquery-node` about what to track in its container.

Here are the parameters in `project.yaml` that need to be configured:

```yaml
# metadata
specVersion: 0.2.0 
name: astar-evm 
version: 0.0.1
description: This SubQuery project can be use as a starting point for Astar network
repository: <https://github.com/subquery/astar-subql-starters>
# schema directory
schema:
  file: ./schema.graphql
# network 
network:
  # wss endpoint
  endpoint: wss://astar.api.onfinality.io/public-wss 
  # genesis hash of connecting blockchahin
  genesisHash: '0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6'
  # chain types directory
  chaintypes:
    file: ./dist/chaintypes.js
dataSources:
  # one kind per one contract to track
  - kind: substrate/FrontierEvm
    startBlock: 436282 # block to start tracking events

    assets:
    # Smart contract ABIs
      erc20: # declare ABI to refer within the file
        file: './erc20.abi.json' # abi file directory
    # Processor library for websocket data
    processor:
      file: './node_modules/@subql/contract-processors/dist/frontierEVM.js'
      options:
        abi: erc20
        address: '0x3d4dcfd2b483549527f7611ccfecb40b47d0c17b'
    # mapping for contract event
    mapping:
      file: ./dist/index.js
      handlers:
        - handler: handleFrontierEvmEvent
          kind: substrate/FrontierEvmEvent
          filter:
            ## Topics that follow Ethereum JSON-RPC log filters
            ## <https://docs.ethers.io/v5/concepts/events/>
            ## With a couple of added benefits:
            ##  - Values don't need to be 0 padded
            ##  - Event fragments can be provided and automatically converted to their id
            topics:
              ## Example valid values:
              # - '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
              # - Transfer(address,address,u256)
              # - Transfer(address from,address to,uint256 value)

              ## Example of OR filter, will capture Transfer or Approval events
              # - - 'Transfer(address indexed from,address indexed to,uint256 value)'
              #   - 'Approval(address indexed owner, address indexed spender, uint256 value)'

              - Transfer(address indexed from,address indexed to,uint256 value)
        - handler: handleFrontierEvmCall
          kind: substrate/FrontierEvmCall
          filter:
            ## The function can either be the method fragment or signature
            # function: '0x095ea7b3'
            # function: '0x7ff36ab500000000000000000000000000000000000000000000000000000000'
            # function: approve(address,uint256)
            function: approve(address to,uint256 value)
            ## The transaction sender
            from: '0x6bd193ee6d2104f14f94e2ca6efefae561a4334b'
```

After editing project.yaml , execute docker-compose to pull the latest containers, and deploy.

```sh
docker-compose pull && docker-compose up
```

### Exploring the Indexed Data

After you run `docker-compose`, SubQuery supports the GraphiQL playground to explore the indexed data. You can explore the data by sending GraphQL queries to `http://localhost:3000`

![4](img/4.png)

## Glossary

### Topic

A unit of event subscription data on a Solidity smart contract that's used for providing updates to its state.

### Entity

A distinctive data structure that is used to store event topics in the database of the SubQuery indexer.

### GraphQL

An indexing tool for aggregated data.
