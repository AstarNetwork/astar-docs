---
sidebar_position: 2
sidebar_label: From Astar to Soneium
title: Transfer from Astar to Soneium
description: Transfer tokens from Astar Network to Soneium.
---

import Figure from "/src/components/figure"

## 1. Overview

To transfer ASTR tokens from **Astar Network (L1)** to **Soneium (L2)**, you’ll need two wallet formats:
- **Substrate Wallet**
- **EVM Wallet**

:::tip Wallet Setup
Use [this guide](#) from our documentation to create and configure both wallets properly.
:::

This guide assumes you already:
- Have both wallets set up
- Hold ASTR tokens in your **Astar Substrate wallet**

We’ll now walk through the full transfer process step by step.

---

## 2. Steps to Transfer ASTR from Astar Network to Soneium

### Step 1: Access the Astar Portal

Go to the [Astar Portal](https://portal.astar.network/astar/assets) and connect your **Substrate wallet**.  
You will see your token balance and available actions.

<!-- <Figure caption="Astar Portal with Substrate wallet connected" src={require('/docs/assets/screenshots/astar-portal-substrate.jpg').default} width="100%" /> -->

---

### Step 2: Convert ASTR from Substrate to EVM

Click the **"Send"** button to initiate a transfer from your Substrate account.

You’ll be redirected to the **Transfer Assets** section.

<!-- <Figure caption="Transfer Assets section in the Astar Portal" src={require('/docs/assets/screenshots/astar-transfer-send.jpg').default} width="100%" /> -->

---

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
