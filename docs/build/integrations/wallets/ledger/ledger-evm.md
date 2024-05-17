---
sidebar_position: 1
sidebar_label: Ledger for Astar EVM
title: Interact with Ledger on Astar EVM using MetaMask
---

import Figure from '/src/components/figure'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

**Ledger devices** can be used on **Astar EVM Network** to perform and sign transactions using the Ledger default `Ethereum` application.  
This means that MetaMask users can now sign transactions for EVM accounts on Astar Network using Ledger Nano S (plus) or Ledger X devices.

This guide will show you how to set up **Astar EVM** on your Ledger hardware wallet and how to use it in combination with **MetaMask**.

:::info
Photos are taken using Nano S Plus device, and the example shows interaction with Ethereum app, but the process is the same with Nano S and Nano X devices.
:::

## Requirements

### Your Ledger device is ready for use

- [Make sure you have set up your Ledger device](https://support.ledger.com/hc/en-us/articles/360000613793?docs=true)
- Update your device to latest firmware
  - [Nano S](https://support.ledger.com/hc/en-us/articles/360002731113?docs=true)
  - [Nano S Plus](https://support.ledger.com/hc/en-us/articles/4445777839901?docs=true)
  - [Nano X](https://support.ledger.com/hc/en-us/articles/360013349800?docs=true)
- [Download and install Ledger Live app for your OS](https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true)
- [Download and install MetaMask for your browser](https://metamask.io/download/)

### Astar Network set up on Metamask

If you already have this, feel free to skip this part.

1. In the MetaMask menu, navigate to `Settings` → `Networks`, and click **Add a network**;
2. Enter following details:

<TabItem value="astar" label="Astar Network" default>
    |   | Public endpoint Astar |
    | --- | --- |
    | Network name | Astar Network |
    | New RPC URL | Astar Team: https://evm.astar.network |
    |         | BlastAPI: https://astar.public.blastapi.io |
    |         | Dwellir: https://astar-rpc.dwellir.com |
    |         | OnFinality: https://astar.api.onfinality.io/public |
    | Chain ID | 592 |
    | Currency symbol | ASTR |
    | Block Explorer URL | https://astar.blockscout.com/ |
</TabItem>
<br></br>

3. Close the `Settings` menu and, from the drop-down menu, select the network you wish to interact with.

### Install Ethereum app to your Ledger device

1. Open **My Ledger** in Ledger Live.
2. Connect and unlock your Ledger device.
    If asked, allow `My Ledger` to access your device.
3. Search for **Ethereum** in the app catalog.
4. Click Install. 

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-live-ethereum.png').default} width="80%" />

After this step, you should have the Ethereum app installed:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-ethereum-app.png').default} width="60%" />


## Connecting your Ledger device to MetaMask

1. In MetaMask menu, select **Connect Hardware wallet**;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-ethereum-app_2.png').default} width="70%" />

2. On the next screen select **Ledger** and click **Continue**;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-ethereum-app_3.png').default} width="70%" />

3. Pair and **Connect** your Device when prompted by the browser;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-ethereum-app_4.png').default} width="70%" />

4. Select an account you wish to connect and click **Unlock**;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-ethereum-app_5.png').default} width="70%" />

5. You should now see your account and balance:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-ethereum-app_6.png').default} width="70%" />

# Receiving tokens

To receive tokens, copy the address of your connected account by clicking your account name in MetaMask header, and send some tokens to that address from your preferred source.

# Sending tokens

1. In MetaMask, click **Send** button and enter the address you wish to send to;
2. Enter the amount to send and click **Next**;
3. Connect your Ledger device and unlock it;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/ledger-ethereum-app_7.png').default} width="80%" />

4. When your Ledger device screen is showing `Application is ready`, click **Confirm** in MetaMask;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/3-ApplicationIsReady.jpg').default} height='200px' />

5. Review the transaction on your Ledger device;

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/4-ReviewTransaction.jpg').default} height='200px' />

    a) Check amount:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/5-AmountASTR1.jpg').default} height='200px' />

    b) Check receiving address:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/6-Address.jpg').default} height='200px' />
    c) Check network:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/7-Network_Astar.jpg').default} height='200px' />

    d) Check Fees:

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/9-MaxFees_ASTR.jpg').default} height='200px' />

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/11-AcceptAndSend.jpg').default} height='200px' />

<Figure src={require('/docs/build/integrations/wallets/ledger/img/evm/12-Reject.jpg').default} height='200px' />

6. Check the transaction result in MetaMask `Activity` tab.

## Interacting with smart contracts

In order to interact with smart contracts, you need to enable blind signing in the Astar EVM app on your Ledger device:

1. Open the app;
2. Navigate to `Settings` and **Confirm**;
3. Confirm the `Blind signing` option, so it turns to `Enabled`;
4. Navigate to `Back` and **Confirm**.
