---
sidebar_position: 1
---

# Astar/Shiden Network Family

Before commencing development, it's important to understand the Astar/Shiden Network family, and choose an appropriate network based on what you would like to do. Currently, there are three networks available, Shiden, Shibuya, and the Local network which runs exclusively within your development environment. All networks support standard Substrate and EVM RPCs.

## Astar and Shiden

Astar has been a parachain on Polkadot network since winning a slot on December 17th, 2021, and Shiden its sister parachain network, on Kusama. Essentially, Astar and Shiden share the same code base, with the largest difference between them being economic impact, due to the sigificant difference in value between KSM and DOT, for which Astar and Shiden share the same relationship. Do note that Shiden has real economic value, so users need to pay for network resources in SDN, the network native token, when they execute transactions. ASTR and SDN tokens are available on cryptocurrency exchanges.

## Shibuya

Shibuya is the test network of Shiden, and is connected to our own Relay Chain, so it behaves in a similar way to Shiden. New features are deployed and tested on Shibuya first, and then deployed on Shiden. SBY, the native token of Shibuya, has no economic value and is available through our [faucet](../../quickstart/faucet.md). We recommend testing your smart contract on Shibuya first before deploying it on Shiden, to see whether it behaves as expected. 

## Local Network

Astar also offers a local network to allow smart contracts to be deployed and tested repeatedly in the local environment. We will explain how to run a local standalone development network in the following section.

:::info
If you would like to know the connection details for each network, they can be found [here](../../quickstart/endpoints.md).
:::
