---
sidebar_position: 0
---

# Envio

[Envio](https://envio.dev/?utm_source=astar&utm_medium=partner-docs) is a high-performance indexing framework that turns smart contract events into a queryable GraphQL API, with managed hosting on Envio Cloud.

HyperIndex, Envio's indexing framework, natively supports indexing any EVM chain out of the box. That means you can index Astar's EVM environments today using RPC as the data source, with dedicated guides for Astar zkEVM and Astar zKyoto.

## Why Envio?

- Native support for any EVM chain, including Astar, out of the box
- Real-time and historical data through a single GraphQL API
- Automatic indexer generation from a contract address with `pnpx envio init`
- TypeScript, JavaScript, or ReScript event handlers, with reorg support
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

See the [RPC data source guide](https://docs.envio.dev/docs/HyperIndex/rpc-sync?utm_source=astar&utm_medium=partner-docs) and the [configuration guide](https://docs.envio.dev/docs/HyperIndex/configuration-file?utm_source=astar&utm_medium=partner-docs) for the full set of options. Want HyperSync speed for an Astar network? Request it on [Discord](https://discord.gg/envio).

## Getting Started

1. Initialise your indexer and import your contract with `pnpx envio init`. See the [Quickstart](https://docs.envio.dev/docs/HyperIndex/quickstart?utm_source=astar&utm_medium=partner-docs).
2. Configure your Astar network and RPC in `config.yaml`.
3. Run your indexer locally with Docker, or deploy it with a git-based workflow on [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service-deployment?utm_source=astar&utm_medium=partner-docs).
4. Query your indexed data through the GraphQL API.

Need help setting up your indexer? Reach out on [Discord](https://discord.gg/envio), where the team is always happy to help.

[Website](https://envio.dev/?utm_source=astar&utm_medium=partner-docs) | [Docs](https://docs.envio.dev/?utm_source=astar&utm_medium=partner-docs) | [Supported Networks](https://docs.envio.dev/docs/HyperIndex/supported-networks?utm_source=astar&utm_medium=partner-docs) | [Discord](https://discord.gg/envio) | [X](https://twitter.com/envio_indexer) | [GitHub](https://github.com/enviodev)
