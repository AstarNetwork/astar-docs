---
sidebar_position: 2
sidebar_label: Ledger for Astar Native
title: Interact with Ledger using Astar Native Accounts
---
import Figure from "/src/components/figure"

## Introduction

**Astar Native app** is an app integrated with Ledger that users can use a ledger device as an account and sign transactions for substrate accounts.  

- [Release Version `2.83.0` by Zondax](https://github.com/Zondax/ledger-astar/releases/tag/v2.83.0) 

**Ledger Live is not supported hence user will not be able to create an account with Ledger Live**.

:::danger
At the time of this release (Version `2.83.0`), the following operations are **NOT SUPPORTED** on Ledger devices:

- **EVM withdrawal**: It is not possible to claim tokens from the Astar EVM side.
- **XCM transfers**
- **Vesting**
:::

This tutorial describes the process of configuring a Ledger device to manage assets, connect to the Astar portal and participate in dApp staking using native ASTR tokens. It also includes the initiation of the first interaction between the device and the network.

## Your Ledger device is ready for use

- [Make sure you have set up your Ledger device](https://support.ledger.com/hc/en-us/articles/360000613793?docs=true)
- Update your device to latest firmware
  - [Nano S](https://support.ledger.com/hc/en-us/articles/360002731113?docs=true)
  - [Nano S Plus](https://support.ledger.com/hc/en-us/articles/4445777839901?docs=true)
  - [Nano X](https://support.ledger.com/hc/en-us/articles/360013349800?docs=true)
- [Download and install Ledger Live app for your OS](https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true)
- [Download and install Polkadot.js extension for your browser](https://polkadot.js.org/extension/)

## Install Astar app to your Ledger device

1. Open **My Ledger** in Ledger Live.
2. Connect and unlock your Ledger device.
    If asked, allow `My Ledger` to access your device.
3. Search for **Astar** (Version `2.83.0`) in the app catalog.
4. Click Install. 

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-live-astar-app.png').default} width="80%" />

After this step, you should have the Astar Native app installed:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-astar-app.png').default} width="60%" />

:::tip
Ledger NanoS users should install the Astar XL (Version `2.83.0`) of the app, shown in the image below:
:::

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-live-astar-app-2.png').default} width="80%" />

## Connect your Ledger device to Astar Network using Polkadot.js

1. Install **[Polkadot.js extension](https://polkadot.js.org/extension/)**;
2. Open extenstion;
3. Open the extension and select **Attach Ledger account** as shown below;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-astar-app-2.png').default} width="70%" />

4. Make sure your Ledger device is connected to your PC and Astar app is open;
5. Select **Astar Network** and name your **Astar** account;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-astar-app-3.png').default} width="70%" />

6. Click **Import Account**.

You successfully connected to Ledger Astar account.

**Configure the Ledger device connection method**

1. Go to the **[Astar settings page on the Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/settings)**;
2. Ensure **Attach Ledger via WebHID** is the preferred connection method listed under *account options* > *manage hardware connections*, as shown in the image below:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-astar-app-4.png').default} width="80%" />

## Connect your Ledger device to the Astar Portal

1. Open your browser and visit the [Astar Portal](https://portal.astar.network).
2. Connect the [Polkadot.js extension](https://polkadot.js.org/extension/) to the Portal.
3. Open the Astar Native app on your Ledger device;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-astar-app.png').default} width="60%" />

4. Select the Ledger account that was imported during the last step. Check the toggle to let Portal recognize the device as a ledger.

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-astar-app-5.png').default} width="80%" />

For detailed information about dApp staking or how to stake on the EVM side of Astar Portal using a Ledger device, please refer to the [Astar official documentation](/docs/use/dapp-staking/for-stakers/) or [Ledger EVM staking guide](./ledger-evm.md)

:::tip
If you receive a **Ledger error: Failed to execute 'claimInterface' on 'USBDevice': Unable to claim interface** message during the dApp staking claim process, ensure you are performing the operation:
- Using a Chromium-based browser such as Chrome or Brave,
- The Ledger device connection method is WebHID, as outlined in the previous step
- The Ledger device is correctly connected to the Portal with the toggle activated.
:::

<Figure src={require('/docs/build/integrations/wallets/ledger/img/native/ledger-astar-app-6.png').default} width="80%" />
