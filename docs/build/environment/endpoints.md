---
sidebar_position: 2
---

# Network RPC endpoints

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## What is RPC Node?
* RPC nodes can be queried for information and used to initiate transactions.
* The purpose of RPC nodes is to allow decentralized applications and clients to communicate with a Blockchain network.
* RPC nodes listen for requests, respond with the necessary data, or execute the requested transaction. 
* Common usage of RPC nodes includes querying the Blockchain for information, sending transactions, and executing smart contract functions.
* RPC nodes are important for decentralized applications to function and interact with a Blockchain network, allowing for decentralized exchange and other use cases.

## Public Endpoints

:::info
The free endpoints below are dedicated to end users, they can be used to interact with dApps or deploy/call smart contracts.
<b>They limit the rate of API calls</b>, so they are not suitable for high demand, such as a dApp UI constantly scraping blockchain data or an indexer.
:::
:::tip
To meet the demands of a production dApp you can run an [archive node](/docs/build/nodes/archive-node/) **or** get your own API key from one of our [infrastructure partners](/docs/build/integrations/node-providers).
:::

<Tabs>
<TabItem value="astar" label="Astar Network" default>

|   | Public endpoint Astar |
| --- | --- |
| Network | Astar |
| Parent chain | Polkadot |
| ParachainID | 2006 |
| HTTPS | Astar Team: https://evm.astar.network |
|         | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|         | Dwellir: https://astar-rpc.n.dwellir.com |
|         | OnFinality: https://astar.api.onfinality.io/public |
|         | Automata 1RPC: https://1rpc.io/astr, get started [here](https://www.1rpc.io) |
| Websocket | Astar Team: wss://rpc.astar.network |
|           | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|           | Dwellir: wss://astar-rpc.n.dwellir.com |
|           | OnFinality: wss://astar.api.onfinality.io/public-ws |
|           | Automata 1RPC: wss://1rpc.io/astr, get started [here](https://www.1rpc.io) |
| chainID | 592 |
| Symbol | ASTR |

</TabItem>

<TabItem value="shiden" label="Shiden Network" default>

|   | Public endpoint Shiden |
| --- | --- |
| Network | Shiden |
| Parent chain | Kusama |
| ParachainID | 2007 |
| HTTPS | Astar Team: https://evm.shiden.astar.network |
|         | Dwellir: https://shiden-rpc.n.dwellir.com |
| Websocket |  Astar Team: wss://rpc.shiden.astar.network |
|           | Dwellir: wss://shiden-rpc.n.dwellir.com |
| chainID | 336 |
| Symbol | SDN |

</TabItem>

<TabItem value="shibuya" label="Shibuya Network" default>

|   | Public endpoint Shibuya |
| --- | --- |
| Network | Shibuya (parachain testnet) |
| Parent chain | Paseo |
| ParachainID | 2000 |
| HTTPS | Astar Team: https://evm.shibuya.astar.network (only EVM/Ethereum RPC available) |
|         | Dwellir: https://shibuya-rpc.n.dwellir.com |
| Websocket | Astar Team: wss://rpc.shibuya.astar.network |
|           | Dwellir: wss://shibuya-rpc.n.dwellir.com |
| chainID | 81 |
| Symbol | SBY |

</TabItem>
</Tabs>
