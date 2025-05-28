---
sidebar_position: 2
sidebar_label: From Astar to Soneium
title: Transfer from Astar to Soneium
description: Transfer tokens from Astar Network to Soneium.
---

import Figure from "/src/components/figure"

## 1. Overview

In this guide, you’ll learn how to transfer **ASTR** tokens from **Astar Network** to **Soneium (L2)** using the bridge on the **Astar Portal** and the [**Subwallet**](https://www.subwallet.app/) and [**Zerion**](https://zerion.io/) wallets. To complete this tutorial, you’ll need:

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

## 2. Guide to Transfer ASTR from Astar to Soneium

### Step 1: Access the Astar Portal

Go to our [**Astar Portal**](https://portal.astar.network/astar/assets), the site where you can manage your funds and accounts within **Astar Network**.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/astar-to-soneium/astar-to-soneium-1.png').default} width="100%" />

Select the network, in this case, **Astar (L1)**.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/astar-to-soneium/astar-to-soneium-2.png').default} width="100%" />

### Step 2: Send ASTR from Substrate to EVM

Click the **"Send"** button to initiate a transfer from your Substrate account.

<Figure caption="" src={require('/docs/use/how-to-guides/soneium/transfer-tokens/images/astar-to-soneium/astar-to-soneium-3.png').default} width="100%" />

You’ll be redirected to the **Transfer Assets** section.

### Step 3: Set the EVM Destination

In the transfer form:
- The **"From"** field will be auto-filled with your Substrate address.
- Paste your **EVM wallet address** in the **"To"** field.

<!-- <Figure caption="Set destination EVM address" src={require('/docs/assets/screenshots/astar-transfer-destination.jpg').default} width="100%" /> -->

---

### Step 4: Enter Amount and Confirm

Enter the amount of ASTR to transfer, select your preferred gas fee, and click **"Confirm"**.

<!-- <Figure caption="Review transfer and confirm" src={require('/docs/assets/screenshots/astar-transfer-confirm.jpg').default} width="100%" /> -->

---

### Step 5: Sign the Transaction

Use your Substrate wallet to sign and broadcast the transaction.

<!-- <Figure caption="Sign transaction with Substrate wallet" src={require('/docs/assets/screenshots/astar-sign.jpg').default} width="100%" /> -->

---

### Step 6: Switch to EVM Wallet

After confirming the transfer:
- Disconnect your Substrate wallet
- Connect your **EVM wallet**

Once connected, you will see the ASTR balance reflected in your EVM account.

<!-- <Figure caption="ASTR in EVM wallet after transfer" src={require('/docs/assets/screenshots/astar-evm-balance.jpg').default} width="100%" /> -->

---

### Step 7: Bridge to Soneium

Click on **"Bridge to Soneium"** in the portal dashboard.

<!-- <Figure caption="Bridge to Soneium button" src={require('/docs/assets/screenshots/astar-bridge-button.jpg').default} width="100%" /> -->

---

### Step 8: Enter Amount and Approve

Specify the amount of ASTR you want to bridge to Soneium.  
Review the gas fee and bridge fee, then click **"Approve"**, followed by **"Bridge"**.

:::note Bridge Fees
Bridge transactions incur a fee and require gas. Ensure your wallet has sufficient balance to cover these costs.
:::

<!-- <Figure caption="Approve and bridge to Soneium" src={require('/docs/assets/screenshots/astar-bridge-approve.jpg').default} width="100%" /> -->

---

### Step 9: Sign the Transactions

Sign the bridging transactions from your EVM wallet. The process may take approximately 3 minutes.

<!-- <Figure caption="Sign bridge transaction" src={require('/docs/assets/screenshots/astar-bridge-sign.jpg').default} width="100%" /> -->

---

### Step 10: Confirm Transfer on Soneium

Check your **Soneium wallet** to verify that the ASTR tokens have been received successfully.

<!-- <Figure caption="ASTR received in Soneium wallet" src={require('/docs/assets/screenshots/soneium-wallet-received.jpg').default} width="100%" /> -->

---

## 3. Completion

You have now successfully transferred ASTR tokens from **Astar Network** to **Soneium** and are ready to interact with the growing ecosystem of applications built on Soneium.