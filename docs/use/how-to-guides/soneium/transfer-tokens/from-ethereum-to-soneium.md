---
sidebar_position: 3
sidebar_label: From Ethereum to Soneium
title: Transfer from Ethereum and L2s to Soneium
description: Transfer tokens from Ethereum to Soneium.
---

import Figure from "/src/components/figure"

## 1. Overview

In this guide, you'll learn how to transfer assets from **Ethereum** and **Layer 2 networks** to **Soneium**, a high-performance Layer 2 chain built with the **OP Stack** and developed by [**Sony Block Solutions Labs**](https://sonyblocksolutionslabs.com/en/).

We’ll explore three recommended bridge platforms for this purpose:

- **Stargate**: Fast and cost-efficient for ETH and stablecoins  
- **Rhino.fi**: Supports a wide range of tokens across multiple L2s  
- **Superbridge**: Ideal for Superchain-native transfers between L2s and Ethereum  

Before you begin, ensure you have:

- A wallet that supports **EVM** networks (e.g., [**Metamask**](https://metamask.io/), [**Zerion**](https://zerion.io/), etc.).
- **ETH** for gas fees on the source chain.
- Tokens in your wallet on **Ethereum** or another supported **L2** (Arbitrum, Base, OP Mainnet, etc.).

:::info Wallet Setup

Need help setting up your wallet on **Soneium**? Follow our [**wallet guide**](https://docs.soneium.org/docs/users/wallets) in the documentation.

:::

## 2. Bridge Options to Soneium

### Option 1: Using **Stargate**

[**Stargate**](https://stargate.finance/) is a fully composable cross-chain bridge protocol built on LayerZero that enables native asset transfers between different blockchain networks. It allows seamless transfers of ETH and stablecoins across chains.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/ethereum-to-soneium/stargate-x-soneium.jpeg').default} width="100%" />

#### Key Features

- Supports **ETH** and **USDC/USDT**
- Works with **Ethereum**, **Arbitrum**, **Optimism**, **Polygon**, and more
- Fast settlement and low fees
- Eliminates the need for wrapped tokens by enabling native asset transfers

#### How to Use

1. Go to [**stargate bridge**](https://stargate.finance/bridge)
2. Select the token and **chain** (e.g., Ethereum, Arbitrum)
3. Select **To** chain → **Soneium**
4. Approve and **Confirm Transfer**
5. Welcome to Soneium!

### Option 2: Using **Rhino.fi**

[**Rhino.fi**](https://app.rhino.fi/) is a powerful cross-rollup bridge that supports many assets and many L2s. It offers a seamless bridging experience with quick and secure transactions.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/ethereum-to-soneium/rhino-x-soneium.jpeg').default} width="100%" />

#### Key Features

- Supports **ETH, USDC, DAI, MATIC, and more**
- Bridges between **ZkSync, Arbitrum, Base, Optimism**, and others
- Excellent UX and low fees
- Transactions typically complete in under 60 seconds

#### How to Use

1. Go to [**app.rhino.fi**](https://app.rhino.fi)
2. Connect your wallet
3. Select **Source** and **Destination** (choose Soneium as destination)
4. Choose token and amount
5. Approve and confirm the bridge transaction

### Option 3: Using **Superbridge**

[**Superbridge**](https://superbridge.app/) is our most recommended option for bridging ETH and Superchain assets into Soneium. It's designed from the ground up for native bridging within the Superchain ecosystem.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/ethereum-to-soneium/superbridge-x-soneium.png').default} width="100%" />

#### Key Features

- Purpose-built for **OP Stack / Superchain** networks
- Ideal for transferring assets between **Base, OP Mainnet, Soneium, and Ethereum**
- Simple interface, fast confirmation
- No extra fees for bridging

#### How to Use

1. Visit [**superbridge.app**](https://superbridge.app/)
2. Connect your wallet
3. Select your **Source** chain (e.g., Ethereum or Base)
4. Select **Destination** → **Soneium**
5. Choose token (e.g., ETH)
6. Approve and confirm the transaction

:::info Final tip

Whether you’re moving funds to explore Soneium dApps or participate in a campaign, these tools will help you move assets safely and efficiently into the Soneium ecosystem. 

:::
:::tip Astar support

Feel free to ask your questions in our [**official Astar Discord**](https://discord.com/invite/AstarNetwork).

:::

## 3. Learn more

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>