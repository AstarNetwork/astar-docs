---
sidebar_position: 0
---

# Envio

[Envio](https://envio.dev/?utm_source=astar&utm_medium=partner-docs) builds custom blockchain APIs and analytics. Astar developers can use HyperIndex to choose the contracts and events to track, write TypeScript handlers and query the result through a GraphQL API, then run it themselves or deploy to Envio Cloud.

HyperIndex works with Astar's EVM networks using RPC as the data source, with dedicated guides for Astar zkEVM and Astar zKyoto.

## Features

- Works with Astar's EVM networks over RPC
- Real-time and historical data through a single GraphQL API
- Automatic indexer generation from a contract address with `pnpx envio init`
- TypeScript event handlers, with reorg support
- Managed hosting on Envio Cloud, or self-host your own deployment

## Indexing Astar with Envio

Envio provides dedicated guides for Astar's EVM networks:

- [Astar zkEVM](https://docs.envio.dev/docs/HyperIndex/astar-zkevm?utm_source=astar&utm_medium=partner-docs) (chain ID 3776)
- [Astar zKyoto](https://docs.envio.dev/docs/HyperIndex/astar-zkyoto?utm_source=astar&utm_medium=partner-docs) (testnet)

Astar uses RPC as the data source. Define it in your `config.yaml`:

```yaml
name: IndexerName # Specify indexer name
chains:
  - id: 3776 # Astar zkEVM
    rpc: https://rpc.startale.com/astar-zkevm
    start_block: START_BLOCK_NUMBER # Specify the starting block
    contracts:
      - name: ContractName
        address:
          - "0xYourContractAddress"
        events:
          - event: Event # Specify event
```

See the [RPC data source guide](https://docs.envio.dev/docs/HyperIndex/rpc-sync?utm_source=astar&utm_medium=partner-docs) and the [configuration guide](https://docs.envio.dev/docs/HyperIndex/configuration-file?utm_source=astar&utm_medium=partner-docs) for the full set of options. To request HyperSync for an Astar network, ask on [Discord](https://discord.gg/envio).

## Getting Started

1. Initialise your indexer and import your contract with `pnpx envio init`. See the [Quickstart](https://docs.envio.dev/docs/HyperIndex/quickstart?utm_source=astar&utm_medium=partner-docs).
2. Configure your Astar network and RPC in `config.yaml`.
3. Run your indexer locally with Docker, or deploy it with a git-based workflow on [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service-deployment?utm_source=astar&utm_medium=partner-docs).
4. Query your indexed data through the GraphQL API.

For help setting up your indexer, reach out on [Discord](https://discord.gg/envio).

[Website](https://envio.dev/?utm_source=astar&utm_medium=partner-docs) | [Docs](https://docs.envio.dev/?utm_source=astar&utm_medium=partner-docs) | [Supported Networks](https://docs.envio.dev/docs/HyperIndex/supported-networks?utm_source=astar&utm_medium=partner-docs) | [Discord](https://discord.gg/envio) | [X](https://twitter.com/envio_indexer) | [GitHub](https://github.com/enviodev)
