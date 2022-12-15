---
sidebar_position: 2
---

# Network endpoints

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Public Endpoints

:::note
The free endpoints below are dedicated to end users, they can be used to interact with dapps or deploy/call smart contracts.
They limit the rate of API calls, so they are not suitable for a dapp UI scraping blockchain data constantly or an indexer (like the Graph).
To deploy a production dapp, please refer to the [Run an archive node](/docs/nodes/archive-node/) section or get own API key for free/paid tier from one of our [infra partners](/docs/integrations/node-providers/)
:::

<Tabs>
<TabItem value="astar" label="Astar Network" default>

|   | Public endpoint Astar |
| --- | --- |
| Network | Astar |
| Parent chain | Polkadot |
| ParachainID | 2006 |
| HTTPS | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|         | BlastAPI: https://astar.public.blastapi.io |
|         | Dwellir: https://astar-rpc.dwellir.com |
|         | OnFinality: https://astar.api.onfinality.io/public |
|         | Pinknode: Get started [here](https://www.pinknode.io/) |
|         | Automata 1RPC: https://1rpc.io/astr, get started [here](https://www.1rpc.io) |
| Websocket | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|           | BlastAPI: wss://astar.public.blastapi.io |
|           | Dwellir: wss://astar-rpc.dwellir.com |
|           | OnFinality: wss://astar.api.onfinality.io/public-ws |
|           | Pinknode: Get started [here](https://www.pinknode.io/) |
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
| HTTPS | BlastAPI: https://shiden.public.blastapi.io |
|         | Dwellir: https://shiden-rpc.dwellir.com |
|         | OnFinality: https://shiden.api.onfinality.io/public |
|         | Pinknode: Get started [here](https://www.pinknode.io/) |
| Websocket | BlastAPI: wss://shiden.public.blastapi.io  |
|           | Dwellir: wss://shiden-rpc.dwellir.com |
|           | OnFinality: wss://shiden.api.onfinality.io/public-ws |
|           | Pinknode: Get started [here](https://www.pinknode.io/) |
| chainID | 336 |
| Symbol | SDN |

</TabItem>

<TabItem value="shibuya" label="Shibuya Network" default>

|   | Public endpoint Shibuya |
| --- | --- |
| Network | Shibuya (parachain testnet) |
| Parent chain | Tokyo relay chain (hosted by Stake Technologies) |
| ParachainID | 1000 |
| HTTPS | BlastAPI: https://shibuya.public.blastapi.io |
|         | Dwellir: https://shibuya-rpc.dwellir.com |
|         | Astar Team: https://evm.shibuya.astar.network (only EVM/Ethereum RPC available) |
| Websocket | BlastAPI: wss://shibuya.public.blastapi.io  |
|           | Dwellir: wss://shibuya-rpc.dwellir.com |
|           | Astar Team: wss://rpc.shibuya.astar.network |
| chainID | 81 |
| Symbol | SBY |

</TabItem>
</Tabs>