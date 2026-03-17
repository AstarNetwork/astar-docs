---
sidebar_position: 1
sidebar_label: How to Stake
title: How to Stake on Astar Network
description: Step-by-step guide to stake ASTR on Astar dApp Staking using Talisman wallet.
---

import Figure from '/src/components/figure'

## I. Overview

In this guide, you'll learn how to stake **ASTR** on Astar Network (L1) using the [**Astar Portal**](https://portal.astar.network/astar/assets) and the [**Talisman**](https://talisman.xyz/) wallet on the **Astar Native (Substrate)** version. To complete this tutorial, you'll need:

- A wallet that supports the **Substrate** format, we'll use **Talisman**
- ASTR tokens in your Native wallet on Astar L1
- Minimum of **500 ASTR** required to stake
- A small amount of extra ASTR for transaction fees

:::info Wallet Setup

Don't have an Astar wallet yet? Follow → [**this guide**](/docs/use/get-started/index.md) to set one up on Astar Network.

:::

## II. Step-by-step Guide

:::warning dApp Staking Parameters

Before staking, make sure you understand all the parameters described [**here**](/docs/learn/dapp-staking/#parameters).

- At most **16 dApps are reward-eligible per era** (across tiers) at the protocol level.
- An address can stake on a **maximum of 16 contracts** (dApps).

:::

### 2.1. Step 1: Access the Astar Portal

Go to the [**Astar Portal**](https://portal.astar.network/astar/assets). A network selection modal will appear, choose **Astar (L1)** and click **Confirm**.

<Figure caption="Select the Astar (L1) network" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-1.png').default} width="100%" />

You'll land on the **Welcome to the Astar Portal** page, which lets you connect both an EVM and a Substrate wallet. Since we're using Talisman (Substrate), click **Connect** under the **Substrate wallet** panel.

<Figure caption="Welcome to the Astar Portal, connect your Substrate wallet" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-2.png').default} width="100%" />

### 2.2. Step 2: Connect Talisman Wallet

A **Connect Native Wallet** modal will appear listing all supported Substrate wallets. You'll see **Talisman** marked as **Detected**, click on it.

<Figure caption="Connect Native Wallet modal, Talisman detected" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-3.png').default} width="100%" />

:::tip Other Substrate Wallets

Polkadot.js, SubWallet, and OneKey are also supported. The steps are the same for all of them.

:::

Your Talisman accounts will appear. Select the account you want to use and click **Connect**.

<Figure caption="Select your Talisman account and connect" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-4.png').default} width="100%" />

### 2.3. Step 3: Verify Your Assets

After connecting, you'll be taken to the **Your Assets** page. Your **Astar Native** wallet will be shown with your current ASTR balance, confirm everything looks correct before proceeding.

<Figure caption="Your Assets page, Astar Native wallet connected" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-5.png').default} width="100%" />

### 2.4. Step 4: Navigate to the Stake Section

Click on **Stake** in the left sidebar to go to the dApp Staking section.

<Figure caption="Click Stake in the sidebar" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-6.png').default} width="100%" />

### 2.5. Step 5: Explore the Staking Section

The **Stake** page shows you a summary panel with your available balance, current rewards, and network stats (APR, remaining time). Below it, the **dApp Rankings** table lists all available projects to stake on.

<Figure caption="Stake page, overview with dApp Rankings" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-7.png').default} width="100%" />

You can start staking by clicking **Start Staking** in the top panel, or by clicking **Stake** next to any dApp in the rankings table. Use the **Search dapps** bar to quickly find a specific project.

:::tip Project Research

Click on any project card for more details, team profiles, community links, and resources. You can also check [**DeFiLlama**](https://defillama.com/) or our [**Forum**](https://forum.astar.network/) for additional context.

:::

### 2.6. Step 6: Select a dApp and Enter the Amount

:::note Maximum Supported dApps

You can support up to **16 projects** simultaneously from a single address.

:::

Click **Stake** next to the dApp you want to support. You'll be taken to its staking page. Enter the amount of ASTR you want to stake and review the summary.

<Figure caption="Enter staking amount for your chosen dApp" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-8.png').default} width="100%" />

:::info Available Balance

**Your available balance** includes tokens locked in governance. Make sure to keep some ASTR free for transaction fees.

:::

Click **Stake** and sign the transaction in your Talisman wallet popup.

### 2.7. Step 7: Check Your Staking Dashboard

Once the transaction is confirmed, go back to **Assets** and click **My Staking**. You'll see your total staked amount, locked balance, available rewards, and the list of dApps you've staked on.

<Figure caption="My Staking dashboard showing your active stake" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/how-to-stake-9.png').default} width="100%" />

:::info Token Unlock at Period End

At the end of each Period, tokens are automatically unstaked from all dApps. They remain **locked** on your account but must be **re-staked** for the new Period to keep earning rewards.

:::

{/* Video temporarily hidden — recorded on old Portal version. Will be updated.
## Video Tutorial

:::caution Outdated Video

This video was recorded using an older version of the Astar Portal. An updated version will be available soon. For now, follow the written steps above.

:::

<iframe
  width="100%"
  height="400"
  src="https://www.youtube-nocookie.com/embed/zEioVpgFXQ8"
  title="How to stake on Astar Portal"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
  loading="lazy"
/>
*/}

Have questions? Join us in the [**official Astar Discord**](https://discord.com/invite/AstarNetwork).