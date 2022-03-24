---
sidebar_position: 2
---

# Network endpoints

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Public Endpoints

There are public endpoints available for development on Shibuya (testnet) but for Astar or Shiden, you'll need to get your own endpoint from one of the supported providers. You can always run your own RPC nodes.

**Astar is not responsible for your project downtime when using Astar public endpoint.**

|   | Public endpoint Shibuya |
| --- | --- |
| Network | Shibuya (parachain testnet) |
| Parent chain | Astar relay chain |
| ParachainID | 1000 |
| WSS | wss://rpc.shibuya.astar.network |
| RPC | https://rpc.shibuya.astar.network:8545 |
| chainID | 81 |
| Symbol | SBY |
| Block explorer | https://shibuya.subscan.io |
|   | https://blockscout.com/shibuya |


## Endpoint providers

Create your own endpoint for development or production. We recommend using any of the following API providers:

- [Bware Labs](./endpoints#bware-labs)
- [OnFinality](./endpoints#onfinality)

## Bware Labs
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
