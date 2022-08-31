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
To deploy a production dapp, please refer to the [Run an archive node](/docs/nodes/archive-node/) section or get own api key for free/paid tier from one of our [infra partners](./endpoints#endpoint-providers).
:::

<Tabs>
<TabItem value="astar" label="Astar Network" default>

|   | Public endpoint Astar |
| --- | --- |
| Network | Astar |
| Parent chain | Polkadot |
| ParachainID | 2006 |
| HTTPS | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|         | Blast: https://astar.public.blastapi.io |
|         | Dwellier: https://astar-rpc.dwellir.com |
|         | OnFinality: https://astar.api.onfinality.io/public |
|         | Pinknode: Get started [here](https://www.pinknode.io/) |
| Websocket | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|           | Blast: wss://astar.public.blastapi.io |
|           | Dwellier: wss://astar-rpc.dwellir.com |
|           | OnFinality: wss://astar.api.onfinality.io/public-ws |
|           | Pinknode: Get started [here](https://www.pinknode.io/) |
| chainID | 592 |
| Symbol | ASTR |

</TabItem>

<TabItem value="shiden" label="Shiden Network" default>

|   | Public endpoint Shiden |
| --- | --- |
| Network | Shiden |
| Parent chain | Kusama |
| ParachainID | 2007 |
| HTTPS | Blast: https://shiden.public.blastapi.io |
|         | Dwellier: https://shiden-rpc.dwellir.com |
|         | OnFinality: https://shiden.api.onfinality.io/public |
|         | Pinknode: Get started [here](https://www.pinknode.io/) |
| Websocket | Blast: wss://shiden.public.blastapi.io  |
|           | Dwellier: wss://shiden-rpc.dwellir.com |
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
| HTTPS | Blast: https://shibuya.public.blastapi.io |
|         | Dwellier: https://shibuya-rpc.dwellir.com |
|         | Astar Team: https://evm.shibuya.astar.network (only EVM/Ethereum RPC available) |
| Websocket | Blast: wss://shibuya.public.blastapi.io  |
|           | Dwellier: wss://shibuya-rpc.dwellir.com |
|           | Astar Team: wss://rpc.shibuya.astar.network |
| chainID | 81 |
| Symbol | SBY |

</TabItem>
</Tabs>


## Endpoint providers

Create your own endpoint for development or production. We recommend using any of the following API providers:

- [Alchemy](./endpoints/#alchemy)
- [Blast (Bware Labs)](./endpoints#blast-bware-labs)
- [OnFinality](./endpoints#onfinality)

## Alchemy
[Alchemy](https://www.alchemy.com/) is widely known infra provider in entire crypto space. Alchemy provides variety of usuful products for DApps development in addition to network APIs.

### Instructions
Alchemy provides free API key for accessing thier endpoints. You need to go to [website](https://www.alchemy.com/) and follow instructions after signing up.
Once own Dashboard is prepared,

1. Click on **+Create App** button.
2. Name your app.
3. Select Chain and Network.
4. Your endpoint is generated, url and api key become available.

<center>
<img src="https://i.imgur.com/27KISSt.png" alt="Alchemy" border="0"></img>
</center>

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
