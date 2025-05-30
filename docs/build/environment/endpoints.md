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
|         | BlastAPI: https://astar.public.blastapi.io |
|         | Dwellir: https://astar-rpc.dwellir.com |
|         | OnFinality: https://astar.api.onfinality.io/public |
|         | RadiumBlock: https://astar.public.curie.radiumblock.co/http, get started [here](https://www.radiumblock.com) |
|         | Automata 1RPC: https://1rpc.io/astr, get started [here](https://www.1rpc.io) |
| Websocket | Astar Team: wss://rpc.astar.network |
|           | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|           | BlastAPI: wss://astar.public.blastapi.io |
|           | Dwellir: wss://astar-rpc.dwellir.com |
|           | OnFinality: wss://astar.api.onfinality.io/public-ws |
|           | RadiumBlock: wss://astar.public.curie.radiumblock.co/ws, get started [here](https://www.radiumblock.com) |
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
|         | BlastAPI: https://shiden.public.blastapi.io |
|         | Dwellir: https://shiden-rpc.dwellir.com |
|         | OnFinality: https://shiden.api.onfinality.io/public |
|         | RadiumBlock: https://shiden.public.curie.radiumblock.co/http, get started [here](https://www.radiumblock.com) |
| Websocket |  Astar Team: wss://rpc.shiden.astar.network |
|           | BlastAPI: wss://shiden.public.blastapi.io |
|           | Dwellir: wss://shiden-rpc.dwellir.com |
|           | OnFinality: wss://shiden.api.onfinality.io/public-ws |
|           | RadiumBlock: https://shiden.public.curie.radiumblock.co/ws, get started [here](https://www.radiumblock.com) |
| chainID | 336 |
| Symbol | SDN |

</TabItem>

<TabItem value="shibuya" label="Shibuya Network" default>

|   | Public endpoint Shibuya |
| --- | --- |
| Network | Shibuya (parachain testnet) |
| Parent chain | Tokyo relay chain (hosted by Astar Team) |
| ParachainID | 1000 |
| HTTPS | Astar Team: https://evm.shibuya.astar.network (only EVM/Ethereum RPC available) |
|         | BlastAPI: https://shibuya.public.blastapi.io |
|         | Dwellir: https://shibuya-rpc.dwellir.com |
| Websocket | Astar Team: wss://rpc.shibuya.astar.network |
|           | BlastAPI: wss://shibuya.public.blastapi.io |
|           | Dwellir: wss://shibuya-rpc.dwellir.com |
| chainID | 81 |
| Symbol | SBY |

</TabItem>
</Tabs>
