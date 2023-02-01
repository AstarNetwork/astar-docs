---
sidebar_position: 1
---

# Astar/Shiden Network Family

Before starting the development, it's important to understand Astar/Shiden Network family. You should change the network based on what you want to do. Currently, we have 3 networks available, Shiden, Shibuya, and Local network. All networks support own standard Substrate RPC and EVM RPC.

## Astar and Shiden

Astar is the network that aims to be the parachain of Polkadot. Shiden is the sister network of Astar which is the parachain of Kusama. Basically, Astar and Shiden share the same code base. The biggest difference is the economic impact. As there is a huge difference in economic value between KSM and DOT, Astar and Shiden will have the same relationship. Astar has won Polkadot parachain slot on December 17, 2021 and is already available. Please note that Shiden has its real economic value. So you need to pay in SDN, the native token of Shiden, when you execute transactions. You can buy SDN on crypto exchanges.

## Shibuya

Shibuya is the test network of Shiden and is connected to our own Relaychain. So Shibuya behaves almost the same as Shiden. Any new features are tested on Shibuya first and then deployed on Shiden. SBY, the native token of Shibuya, has no economic value and is available through our [faucet](../../quickstart/faucet.md). So we recommend testing your smart contract on Shibuya before deploying it on Shiden to check whether your smart contract works well or not.

## Local Network

We, of course, offer a local network to allow you to check your smart contract repeatedly in the local environment. We will let you know how to run the local standalone development network in the following section.

:::info
If you want to know the network details, please check out [this page](../../quickstart/endpoints.md).
:::
