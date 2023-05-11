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

[Docker](https://docs.docker.com/get-docker/): Containerization platform for software solutions.

Subquery CLI: Command line tool for creating SubQuery projects. Install this by running the following:

```bash
npm install -g @subql/cli
```

## Getting started

Initialise the SubQuery Starter Project with `subql init` and then choose `Substrate` as the network family, `Astar` as the network and then select betwen a native Substrate, EVM or WASM based starter project.

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
There are 3 important files that need to be modified. These are:

1. The GraphQL Schema in schema.graphql
2. The Project Manifest in project.yaml
3. The Mapping functions in src/mappings/ directory

### 1. Customize the schema file

The schema.graphql file determines the shape of your data from SubQuery due to the mechanism of the GraphQL query language. Hence, updating the GraphQL Schema file is the perfect place to start. It allows you to define your end goal right at the start.

The schema provided in the starter project creates a transaction entity and an approval entity indexing values such as value, addresses and block data.

Run `yarn codegen` to autogenerate the types. You will find the generated models in the /src/types/models directory.

### 2. Customize the project manifest file
The Project Manifest (project.yaml) file works as an entry point to your project. It defines most of the details on how SubQuery will index and transform the chain data. For Substrate/Polkadot chains, there are three types of mapping handlers; [block handlers, call handlers and event handlers](https://academy.subquery.network/quickstart/quickstart_chains/polkadot.html#_2-update-your-project-manifest-file).

For EVM/WASM chains, there are two types of mapping handlers; [call handlers and event handlers](https://academy.subquery.network/build/substrate-wasm.html#call-handlers)

It is also here where you can customise many parameters such as the startBlock as well as provide a smart contract address if required as well. 

### 3. Customize the mapping file

The mapping functions within the mapping file defines how chain data is transformed into the optimised GraphQL entities that we previously defined in the schema.graphql file. Navigate to the default mappingHandler.ts file in the src/mappings directory and customise the functions using Typescript.

The starter project contains example mapping functions that extract standard data such as block height, contract addresses along with other parameters specific to the contract being indexed.

## Build Your Project

Next, build your project by running `yarn build`.

## Run Your Project Locally with Docker

SubQuery provides a Docker container to run projects very quickly and easily for development purposes. 

The docker-compose.yml file defines all the configurations that control how a SubQuery node runs. For a new project, which you have just initialised, you won't need to change anything.

Run `yarn start:docker` to start the project. 

NB: `yarn dev` is a short cut that combines `yarn codegen`, `yarn build` and `yarn start:docker` all into one command saving even more time. 

## Query Your Project

Once the container is running, navigate to `http://localhost:3000` in your browser and run the sample GraphQL command provided in the README file. Below is an example query from the Astar-wasm-starter project. (https://astar.subscan.io/extrinsic/3281781-6)

![4](img/4.png)

## Next steps

SubQuery's indexing experience is designed to be as fast and as simple as possible allowing developers to index data from the blockchain in minutes with the help of the starter project and a docker environment. 

It is also flexible to enable indexing across different chains and filtering only the data relevant to your application making it light weight, fast and efficient. 

We are excited to help you on your indexing journey so please reach out to us at the various links below to see how we can help further. 

## Resources
* [SubQuery Network](https://subquery.network/)
* [SubQuery Documentation](https://academy.subquery.network/)
* [SubQuery Discord](https://discord.com/invite/subquery)
* [SubQuery Twitter](https://twitter.com/SubQueryNetwork)
* [SubQuery Blog](https://blog.subquery.network/)
