---
sidebar_position: 2
sidebar_label: From Soneium to Astar
title: Transfer from Soneium to Astar
description: Transfer tokens from Soneium to Astar Network.
---

import Figure from "/src/components/figure"

## 1. Overview

In this guide, you’ll learn how to transfer **ASTR** tokens from **Soneium (L2)** to **Astar Network** using the bridge on the **Astar Portal** and the [**Subwallet**](https://www.subwallet.app/) and [**Zerion**](https://zerion.io/) wallets. To complete this tutorial, you’ll need:

- A wallet that supports the **Substrate** format (we’ll use Subwallet)
- A wallet that supports the **EVM** format (we’ll use Zerion)
- ASTR tokens in your EVM wallet on Soneium

:::info Wallet Setup

To set up your wallet on Soneium, follow → [**this guide**](https://docs.soneium.org/docs/users/wallets), and use → [**this one**](/docs/use/get-started/index.md) for Astar Network.

:::
:::tip Get ASTR tokens

If you want to acquire ASTR tokens on the Soneium using your local currency, use [**Alchemy Pay**](https://ramp.alchemypay.org/#/index).

:::

This guide assumes you already:

- Have both **wallets** set up.
- Hold ASTR tokens in your **Soneium wallet**.
- Have some **ETH** to cover  gas fees.

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

Zerion uses a mode called Metamask mode, where every request made to Metamask is handled by Zerion first. That’s why we click on Metamask, as the Zerion logo doesn’t appear directly.

:::

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-4.png').default} width="100%" />

### Step 3: Go to Bridge to Soneium

Go to the **Bridge to Soneium** section by clicking the button.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-5.png').default} width="100%" />

### Step 4: Change source chain

There, you'll see the Bridge section, which by default has **Astar EVM** as the source chain and **Soneium** as the destination. We’ll change this by clicking the button.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-6.png').default} width="100%" />

Once we switch the network, a message will appear in our wallet confirming the change, and we’ll now see **Soneium** as the source chain.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-7.png').default} width="100%" />

### Step 5: Sign the Approve

Enter the amount you want to transfer and click the **Approve** button to sign the permission and enable the bridge.

:::info Max Amount

If you want to send your entire balance, check the **Approve Max Amount** box.

:::

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-8.png').default} width="100%" />

### Step 6: Make the bridge

Once you’ve signed the **Approve** transaction, the **Bridge** button will be enabled, allowing you to send your ASTR tokens from **Soneium** to **Astar EVM**.

:::info Fee costs

Pay close attention to the bridge fee and the time the transaction usually takes.

:::

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-9.png').default} width="100%" />

If everything is correct, you’ll see a message confirming that the transaction was successfully executed, and you’ll be able to view your transaction in the block explorer.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-10.png').default} width="100%" />

### Step 7: Send to Astar Substrate

You’ll now see your updated balance on the **Astar EVM** network instead of Soneium. Congratulations, you’ve successfully completed the first part of the bridge!

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-11.png').default} width="100%" />

Now let’s move on to sending your ASTR from Astar EVM to Astar L1 (Substrate). Click the Send button.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-12.png').default} width="100%" />

Here are 3 important steps to keep in mind:

1. Enter the **Astar Substrate address** you want to send the funds to.
2. Enter the **amount** you want to send.
3. Make sure you’re not sending your funds to a CEX or DEX that doesn’t support Astar EVM/Substrate.

Then submit the transaction by clicking the Confirm button.

Behind the scenes, the Astar protocol handles the bridge from EVM to Substrate automatically.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-13.png').default} width="100%" />

Once you sign, if everything is correct, you’ll see a message confirming the successful execution and a link to view the transaction in the block explorer.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-14.png').default} width="100%" />

Now that we’ve sent the funds to Astar L1, let’s connect our Substrate wallet to complete the final steps before your funds become available.

### Step 8: Connect to Substrate

Click on the Wallet button.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-15.png').default} width="100%" />

Then go to the Substrate wallets section and select the wallet you’re using, in this case, we’ll use **Subwallet**.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-16.png').default} width="100%" />

### Step 9: Withdraw the funds

Once connected, you’ll see a new section showing the amounts you transferred and a Withdraw button. Let’s move the transferred amount to your available balance. Click the **Withdraw button**.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-17.png').default} width="100%" />

Choose the gas fee you want to pay and sign the transaction.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-18.png').default} width="100%" />

Once you sign, if everything is correct, you’ll see a message confirming the successful execution and a link to view the transaction in the block explorer.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-19.png').default} width="100%" />

### Step 10: Complete the tutorial

After a few seconds, you’ll see your amount reflected in the **available** section on Astar L1. Great job! You’ve successfully transferred from **Soneium** to **Astar L1** with ease.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/soneium-to-astar/soneium-to-astar-20.png').default} width="100%" />

## 3. Video tutorial

To wrap up, here’s a video tutorial that will guide you through the step-by-step process in case anything wasn’t clear. Feel free to ask your questions in our [**official Astar Discord**](https://discord.com/invite/AstarNetwork).

<iframe
  width="100%"
  height="400"
  src="https://www.youtube-nocookie.com/embed/t31F7EC6PAg"
  title="Transfer ASTR from Soneium to Astar L1"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
  loading="lazy"
/>