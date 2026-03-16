---
sidebar_position: 1
sidebar_label: How to Stake
title: How to Stake on Astar Network
description: What is the Move function in Astar dApp Staking?
---

import Figure from '/src/components/figure'

## 1. Overview

In this guide, you’ll learn how to stake **ASTR** on Astar Network (L1) using the [**Astar Portal**](https://portal.astar.network/astar/assets) and the [**Zerion**](https://zerion.io/) wallet on the EVM version, which works similarly to the Substrate version. To complete this tutorial, you’ll need:

- A wallet that supports the **EVM** format (we’ll use Zerion)
- ASTR tokens in your EVM wallet on Astar L1
- Minimum of 500 ASTR required to stake
- Bit of extra ASTR for the fees

:::info Wallet Setup

To set up your wallet on Astar Network, follow → [**this guide**](/docs/use/get-started/index.md).

:::
:::tip Get ASTR tokens

To acquire ASTR tokens through a DEX or CEX, follow [**this guides**](/docs/use/how-to-guides/layer-1/get-astr-token/index.md) in our documentation.

:::
:::warning Claim rewards

To earn rewards continuously, users have to vote and stake **every [new period](/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/index.md).**

:::

We’ll now walk through the full transfer process step by step.

## 2. Guide to Stake on Astar Network

:::important dApp Staking parameters

Before using dApp Staking, make sure you understand all the parameters described [**here**](/docs/learn/dapp-staking/#parameters).

At the protocol level, at most **16 dApps are reward-eligible per era** (across tiers).

An address can only stake on a maximum of 16 contracts (dApps).

:::

### Step 1: Access the Astar Portal

Go to our [**Astar Portal**](https://portal.astar.network/astar/assets), the site where you can manage your funds and accounts within **Astar ecosystem**.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-1.png').default} width="100%" />

Select the network, in this case, **Astar (L1)**.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-2.png').default} width="100%" />

### Step 2: Connect EVM wallet

Click on **Select wallet**.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-3.png').default} width="100%" />

Choose the wallet you use, in this case, it will be **Zerion**, so we’ll click on **Metamask** to open the modal and connect it.

:::info Metamask Mode

Zerion uses a mode called Metamask mode, where every request made to Metamask is handled by Zerion first. That’s why we click on Metamask, as the Zerion logo doesn’t appear directly.

:::

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-4.png').default} width="100%" />

### Step 3: Go to Staking Section

Then go to the **staking section** on the left sidebar.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-5.png').default} width="100%" />

There, you’ll see a panel with all the staking information: current period, APY, remaining days, etc.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-6.png').default} width="100%" />

You can start staking either by clicking the blue **"Choose dApps"** button or by scrolling down to view all the listed dApps.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-7.png').default} width="100%" />

:::tip Project cards

Click on the project cards for more information, access to their communities or to view team profiles. You can also find useful resources on our [**forum**](https://forum.astar.network/) or check [**DefilLama**](https://defillama.com/).

:::

### Step 4: Select dApp & amount

:::note Limit of support

You can choose up to 16 projects that you would like to support.

:::

Go back to the previous screen and click on **"Choose dApp".**

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-8.png').default} width="100%" />

Select the category and the dApp you want.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-9.png').default} width="100%" />

:::important Available balance

**Your available balance** represents the balance available for staking and includes tokens locked in governance.

:::

Then, enter the amount you want to stake.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-10.png').default} width="100%" />

Confirm, and sign the transaction.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-11.png').default} width="100%" />

:::tip Free tokens for gas

Make sure to always keep some tokens free for gas manage to claim your rewards.

:::

**If everything is correct**, you’ll see a message confirming that the transaction was successfully executed, and you’ll be able to view your transaction in the block explorer.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-12.png').default} width="100%" />

### Step 5: Check your staking

Finally, you’ll be able to see your balance. Go back to the **Assets** screen. In the **Staking** section, you’ll be able to view your staked balance and more.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-14.png').default} width="100%" />

If you go to the **My dApps** section, you’ll be able to see the different dApps you staked on and their respective amounts.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/stake-astar/stake-astar-13.png').default} width="100%" />

:::info Unstaked tokens

At the end of a Period, tokens are unstaked from all dApps, remain locked on the account but must be staked back on dApps for the new Period.

:::

## 3. Video tutorial

To wrap up, here’s a video tutorial that will guide you through the step-by-step process in case anything wasn’t clear. Feel free to ask your questions in our [**official Astar Discord**](https://discord.com/invite/AstarNetwork).

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