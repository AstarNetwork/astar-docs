import Figure from "/src/components/figure"

# Subsquid

## Overview 

[Subsquid](https://subsquid.io) is an indexing framework supporting both [Substrate](/docs/learn/polkadot_relay#substrate) and [EVM](/docs/learn/polkadot_relay#ethereum-virtual-machine-evm)-based chains. It is [extremely flexible and offers high syncing speeds](https://docs.subsquid.io/migrate/subsquid-vs-thegraph/). 

Subsquid indexer projects (or "squids") can be made from templates either manually or with [squid generation tools](https://docs.subsquid.io/basics/squid-gen/). The tools make ready-to-use indexer projects out of contracts' ABIs. The generated squids decode events and transactions of user-specified contracts, then serve the data over a GraphQL API or store it as a dataset on a filesystem. At the moment EVM/Solidity contracts are supported, with WASM/ink! contracts in the pipeline. Consider this route if your use case does not require any nontrivial transformations of blockchain data.

Please visit the [main integrations section](/docs/build/integrations/indexers/subsquid.md) for more information about using Subsquid on Astar zkEVM.