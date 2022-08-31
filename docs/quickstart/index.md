# Quick Start

Astar is a collection of networks and tools providing:

- Native support for Wasm and EVM-compatable smart contracts
- Advanced cross-chain features through Polkadot's XCMP

The Astar ecosystem has two mainnets and a testnet:

- **Astar** - a parachain connected to the Polkadot Relay Chain
- **Shiden** - a parachain connected to the Kusama Relay Chain
- **Shibuya** - a standalone testnet

## Network Endpoints

Developers can connect and interact with the network via HTTPS or Websocket endpoints on the network nodes. Check out [Network Endpoints](endpoints) to get your own endpoint and API key from one of the supported providers.

## Faucet

Developers will want to use our testnet faucet to deploy and test their contracts before mainnet deployment. This faucet is accessable via the [Astar portal](https://portal.astar.network) and instructions can be found [here](faucet).

## Astar account scheme

Astar is the only smart-contract parachain in the Polkadot ecosystem that supports multi-virtual machines (Wasm and EVM). Resultingly, managing multiple types of accounts can be non-trivial. Read more about [Astar's account structure](https://astarnetwork.github.io/astar-docs/docs/quickstart/addresses) in our documentation.

---

## Ready?

If you want to start building WASM based dApps right away we encourage you to check out Swanky Suite - the all-in-one tool for WASM smart contract developers which self-contains a dev node ready to be run locally on your computer. 

If you are ready for developing on our testnet/mainet please check out following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
