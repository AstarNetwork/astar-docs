# Quick Start

Astar has a collection of networks and tools providing:

- Native support for Wasm and EVM-compatable smart contracts
- Advanced cross-chain features through Polkadot's XCMP
- [**Swanky Suite**](../wasm/sc-dev/swanky) - the developer tool for writing Wasm smart contracts in ink! or ask!

## Our Networks

The Astar ecosystem has two mainnets and a testnet:

- **Astar** - a parachain connected to the Polkadot Relay Chain
- **Shiden** - a parachain connected to the Kusama Relay Chain
- **Shibuya** - a standalone testnet

You can connect and interact with our networks via HTTPS or Websocket endpoints on the network nodes. Check out [Network Endpoints](endpoints) to get your own endpoint and API key from one of the supported providers.

## Faucet

The faucet is accessable via the [Astar portal](https://portal.astar.network), instructions can be found [here](faucet). <br />
Developers can also use chaindrop faucet [here](https://chaindrop.org), instructions can be found [here](faucet).

## Astar account scheme

Astar is the only smart contract parachain in the Polkadot ecosystem that supports multi-virtual machines (Wasm and EVM). Managing multiple types of accounts is complex, and exciting. Read more about [Astar's account structure](https://docs.astar.network/docs/user-guides/create-wallet/#astar-accounts) in our documentation.

---

## Ready?

If this is your first time writing a Wasm smart contract, you need to set up an environment. We encourage you to begin with [Swanky Suite](../wasm/sc-dev/swanky), the tool for Wasm smart contract developers.

Now that you have an environment to build swanky dApps, check out these pages to learn how to connect and interact with our networks:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
