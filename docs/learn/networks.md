---
sidebar_position: 6
sidebar_label: Astar Networks
tags:
    - astar
    - users
    - devs
description: Page with the Astar Networks
---

# Networks

## Overview

Prior to commencing development, it's important to understand the **Astar Network family**, and choose an appropriate network based on what you would like to do. Currently, there are a number of networks available, including the Local network which runs exclusively within your *development environment*. All networks support **Substrate** and **EVM RPCs**.

## Local Networks

### 1. Substrate Node

You can clone the Astar repository and run the local node provided, or download the precompiled binary and run it, instead. 

:::tip[Local node]

Both methods are described in → [**Running Local Network**](/docs/build/environment/local-network.md) page.

:::

### 2. Zombienet

With Zombienet users can download arbitrary Relay Chain and parachain binaries (or use images) to setup a configurable local test network. Users will have access to all privileged actions on the Relay Chain and parachains, which simplifies testing. 

:::tip[Zombienet]

For more information about Zombienet, check out the → [**Build Environment**](https://docs.astar.network/docs/build/environment/zombienet-testing) chapter.

:::

## Testnets

### 1. Shibuya (Astar Network)

Shibuya has nearly the same *chain specifications* as **Shiden** & **Astar**, and provides an ideal environment for developers to *test and debug*, prior to launching their dApp on mainnet. Shibuya is running as a parachain of the **Tokio Relay Chain**, which is managed internally by the Astar team, and supports Shibuya, only, as test parachain.

:::info[Shibuya Token]

The Shibuya native token symbol is SBY.

:::
:::tip[Get SBY]

There are ways to get SBY for testing purposes. Check it out here → [**Get SBY tokens**](/docs/build/environment/faucet.md).

:::

### 2. Minato (Soneium)

Minato is the testnet version of **Soneium**, a layer-2 solution for Ethereum developed by **Sony Block Solutions Labs**. It serves as a public blockchain development environment that's accessible to all developers and creators interested in building applications. 

Through Minato you can create dApps and more that will be able to interact with the **superchain ecosystem**.

:::info[Minato Token]

The token used on Minato is ETH.

:::
:::tip[Get ETH]

There are ways to get ETH for testing purposes. Check it out here → [**Get ETH tokens**](https://www.alchemy.com/faucets/soneium-minato).

:::

## Mainnets

**Astar Collective**, with the ASTR token, supports two mainnets:

1. Astar Network (Parachain) 
2. Soneium (Ethereum L2)

:::warning[Astar zkEVM]

Astar zkEVM is still considered an Astar ecosystem network but will soon be deprecated. It is planned to be discontinued as of April 1st.

:::

### 1. Astar Network (Parachain)

Astar parachain is connected to **Polkadot Relay chain** supporting WASM & EVM smart contract deployments. The Astar native token symbol is **ASTR**.

### 2. Soneium (Ethereum L2)

Ethereum Rollup created with the **OP Stack** and connected to the **Superchain**. It is also directly connected to Astar Network through the **ASTR** token via **CCIP**.