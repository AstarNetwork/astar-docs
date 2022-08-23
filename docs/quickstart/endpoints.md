---
sidebar_position: 2
---

# Network endpoints

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Public Endpoints

There are public endpoints available for development on Shibuya (testnet) but for Astar or Shiden, you'll need to get your own endpoint from one of the supported providers. You can always run your own RPC nodes.

:::note
**We recommend building your own endpoints or using our infra partners to make sure you have full control over them.**
Astar is not responsible for your project downtime when using Astar free public endpoint for community.
Currently, endpoints provided by Astar team have rate limits 10 reqs/sec. There is a possibility that this value will be lowered.
:::

<Tabs>
<TabItem value="astar" label="Astar Network" default>

|   | Public endpoint Astar |
| --- | --- |
| Network | Astar |
| Parent chain | Polkadot |
| ParachainID | 2006 |
| EVM RPC | https://astar.public.blastapi.io |
|         | https://astar-rpc.dwellir.com |
|         | https://astar.api.onfinality.io/public |
|         | https://evm.astar.network (hosted by Astar team) |
| Native RPC | https://astar.public.blastapi.io |
|            | https://astar-rpc.dwellir.com |
|            | https://astar.api.onfinality.io/public |
| Native Websocket | wss://astar.public.blastapi.io |
|                  | wss://astar-rpc.dwellir.com |
|                  | wss://astar.api.onfinality.io/public-ws |
|                  | wss://rpc.astar.network (hosted by Astar team) |
| chainID | 592 |
| Symbol | ASTR |

</TabItem>

<TabItem value="shiden" label="Shiden Network" default>

|   | Public endpoint Shiden |
| --- | --- |
| Network | Shiden |
| Parent chain | Kusama |
| ParachainID | 2007 |
| EVM RPC | https://shiden.public.blastapi.io |
|         | https://shiden-rpc.dwellir.com |
|         | https://shiden.api.onfinality.io/public |
|         | https://evm.shiden.astar.network (hosted by Astar team) |
| Native RPC | https://shiden.public.blastapi.io |
|            | https://shiden-rpc.dwellir.com |
|            | https://shiden.api.onfinality.io/public |
| Native Websocket | wss://shiden.public.blastapi.io  |
|                  | wss://shiden-rpc.dwellir.com |
|                  | wss://shiden.api.onfinality.io/public-ws |
|                  | wss://rpc.shiden.astar.network (hosted by Astar team) |
| chainID | 336 |
| Symbol | SDN |

</TabItem>

<TabItem value="shibuya" label="Shibuya Network" default>

|   | Public endpoint Shibuya |
| --- | --- |
| Network | Shibuya (parachain testnet) |
| Parent chain | Tokyo relay chain (hosted by Stake Technologies) |
| ParachainID | 1000 |
| EVM RPC | https://shibuya.public.blastapi.io |
|         | https://shibuya-rpc.dwellir.com |
|         | https://evm.shibuya.astar.network (hosted by Astar team) |
| Native RPC | https://shibuya.public.blastapi.io |
|            | https://shibuya-rpc.dwellir.com |
| Native Websocket | wss://shibuya.public.blastapi.io  |
|                  | wss://shibuya-rpc.dwellir.com |
|                  | wss://rpc.shibuya.astar.network (hosted by Astar team) |
| chainID | 81 |
| Symbol | SBY |

</TabItem>
</Tabs>


## Endpoint providers

Create your own endpoint for development or production. We recommend using any of the following API providers:

- [Blast (Bware Labs)](./endpoints#bware-labs)
- [OnFinality](./endpoints#onfinality)

## Blast (Bware Labs)
The goal of Bware Labs is to build a decentralized platform where Full Node owners and Endpoint users such as developers and organizations are able to collaborate in a secure and trustful manner.

### Instructions
To get started, you'll need to head to [Bware Labs](https://app.bwarelabs.com/), and launch the app. You need to connect your wallet to get access to the platform. Once your wallet is connected you will be able to generate your own custom endpoint. To generate an endpoint click on **API Endpoints**:

1. Select a network for your endpoint. There are two options to choose from: Astar or Shiden Network. To get a custom endpoint for Shibuya, select Shiden and choose in the network dropdown for Shibuya.
2. Give your endpoint a name. 
3. Click **Create Endpoint.**
4. Sign with your MetaMask.

<center>
<img src="https://i.imgur.com/A6shINy.png" alt="BwareLabs" border="0"></img>
</center>

## OnFinality
[OnFinality](https://onfinality.io/) provides a free API key based endpoint for customers that provide higher rate limits and performance than the free public endpoint. You also receive more in depth analytics of the usage of your application.

### Instructions
To create a custom OnFinality endpoint, go to [OnFinality](https://onfinality.io/) and sign up, or if you already have signed up you can go ahead and log in. From the OnFinality **Dashboard**, you can:

1. Click on **API Service.**
2. Select the network from the dropdown.
3. Your custom API endpoint will be generated automatically.

<center>
<img src="https://i.imgur.com/SaoAQwt.png" alt="OnFinality" border="0"></img>
</center>
