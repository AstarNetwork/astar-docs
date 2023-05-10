---
sidebar_position: 2
---

# SubQuery

## What is SubQuery?

SubQuery is an open source and universal blockchain data indexer for developers that provides fast, flexible, reliable, and decentralised APIs to power leading multi-chain apps. Our goal is to save developers' time and money by eliminating the need of building their own indexing solution and instead, fully focus on developing their applications. 

SubQuery's superior indexing capabilities supports Astar native, EVM and WASM based smart contracts all out of the box. (In reality a Docker container!) Starter projects are provided allowing developers to get up and running and indexing blockchain data in minutes. 

Another one of SubQuery's competitive advantage is the ability to aggregate data not only within a chain but  across blockchains all within a single project. This allows the creation of feature rich dashboard analytics or multi-chain block scanners.

Other advantages include superior performance with multiple RPC endpoint configuration, multi-worker capabilities and a configurable caching architecture. To find out more, visit our [documentation](https://academy.subquery).

## Prerequisites

Before you setup SubQuery for your platform, you will need:

[Docker] : Containerization platform for software solutions
[Subquery CLI] : Install this by running the following:

```bash
npm install -g @subql/cli
```

## Getting started

Initialise the SubQuery Starter Project with subql init and then choose Substrate as the network family, Astar as the networ and then select betwen native, evm or wasm based starter project.

```bash
~$ subql init astar-demo
? Select a network family Substrate
? Select a network Astar
? Select a template project (Use arrow keys or type to search)
❯ astar-evm-starter      Astar EVM project template tutorial 
  astar-wasm-starter     Astar WASM project template tutorial 
  astar-starter          Starter project for Astar 
  Other                  Enter a custom git endpoint 
```
Visit the [SubQuery quick start guide](https://academy.subquery.network/quickstart/quickstart.html) for more details.

Continue with the set up by following the prompt and customising the parameters or accepting the defaults. 

## Customizing the project in 3 simple steps

### 1. Customize the schema file





### Setup Entity for Storing Event Topics



### Setup Handler for Indexing


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
