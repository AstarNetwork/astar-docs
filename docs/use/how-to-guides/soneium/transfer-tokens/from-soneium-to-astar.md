---
sidebar_position: 3
sidebar_label: From Soneium to Astar
title: Transfer from Soneium to Astar
description: Transfer tokens from Soneium to Astar Network.
---

import Figure from "/src/components/figure"

## 1. Overview

In this guide, you’ll learn how to transfer **ASTR** tokens from **Soneium (L2)** to **Astar Network** using the bridge on the **Astar Portal** and the [**Subwallet**](https://www.subwallet.app/) and [**Zerion**](https://zerion.io/) wallets. To complete this tutorial, you’ll need:

- A wallet that supports the **Substrate** format (we’ll use Subwallet)
- A wallet that supports the **EVM** format (we’ll use Zerion)
- ASTR tokens in your Substrate wallet

:::info Wallet Setup

To create and set up your wallets properly, use → [**this guide**](/docs/use/get-started/index.md) from our documentation.

:::
:::tip Get ASTR tokens

To acquire ASTR tokens through a DEX or CEX, follow [**this guides**](/docs/use/how-to-guides/layer-1/get-astr-token/index.md) in our documentation.

:::

This guide assumes you already:

- Have both wallets set up
- Hold ASTR tokens in your **Astar Substrate wallet**

We’ll now walk through the full transfer process step by step.

## 2. Guide to Transfer ASTR from Soneium to Astar

### Step 1: Access the Astar Portal

Go to our [**Astar Portal**](https://portal.astar.network/astar/assets), the site where you can manage your funds and accounts within **Astar Network**.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-1.png').default} width="100%" />

Select the network, in this case, **Astar (L1)**.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-2.png').default} width="100%" />

### Step 2: Connect EVM wallet

Click on **Select wallet**.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-3.png').default} width="100%" />

Choose the wallet you use, in this case, it will be **Zerion**, so we’ll click on **Metamask** to open the modal and connect it.

:::info Metamask Mode

Zerion uses a mode called Metamask mode, where every request made to Metamask is handled by Zerion first. That’s why we click on Metamask, as the Zerion logo doesn’t appear directly in the portal.

:::

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-4.png').default} width="100%" />

:::note 

Review this link to check your transactions: https://ccip.chain.link/

:::