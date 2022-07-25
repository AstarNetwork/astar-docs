---
sidebar_position: 10
title: Ledger for Astar Native Accounts
---

## Using Astar Ledger app with polkadot.js browser extension

## Intro

Astar “ultralight” app is now available on Ledger hardware wallet devices. This means that polkadot.js browser extension users can now sign transactions for native Astar accounts using Ledger nano S (plus) or Ledger X devices.
Please keep in mind ultralight app can only sign transfers, and nothing else. (don’t send EVM assets to that account because you won’t be able to transfer them to native balance for example)
This guide will show you how to set up Astar app on your Ledger hardware wallet and how to use it in combination with polkadot.js browser extension.

> **Note**
>
> Photos are taken using the Nano S Plus device, but the process is the same with Nano S and Nano X devices.

## Requirements

### Your Ledger device is ready for use

- [Make sure you have set up your Ledger device](https://support.ledger.com/hc/en-us/articles/360000613793?docs=true)
- Update your device to latest firmware
  - [Nano S](https://support.ledger.com/hc/en-us/articles/360002731113?docs=true)
  - [Nano S Plus](https://support.ledger.com/hc/en-us/articles/4445777839901?docs=true)
  - [Nano X](https://support.ledger.com/hc/en-us/articles/360013349800?docs=true)
- [Download and install Ledger Live app for your OS](https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true)
- [Download and install Polkadot{.js} extension](https://polkadot.js.org/extension/)

## Install app to your Ledger device​

1. Open Ledger Live app and navigate to “Manager”
2. Connect your Ledger Device and unlock it
3. If asked, confirm Ledger Manager on your device
4. Search for “Astar” in the app catalog
5. Click install - After this step, you should have the app installed on your device:
<center>
<img src={require('./img/native/D00-installed.png').default} style={{height: "200px"}}/>
</center>

## Connecting your Ledger device to Polkadot{.js}

1. In Polkadot{.js} menu select “Open extension in new window” (this is needed because of an USB-extension communication issue)
<center>
<img src={require('./img/native/01-open_in_window.png').default} style={{height: "400px"}}/>
</center>

2. In the new window containing the extension interface, click options and select “Connect ledger device”
<center>
<img src={require('./img/native/02-connect_ledger.png').default} style={{height: "400px"}}/>
</center>

3. Pair and connect your Device when prompted by the browser
<center>
<img src={require('./img/native/03-device_connect.png').default} style={{height: "400px"}}/>
</center>

4. Make sure Astar App is running on your device. Select “Astar network” from the network dropdown list
<center>
<img src={require('./img/native/D01-ready.png').default} style={{height: "190px"}}/>
</center>
<center>
<img src={require('./img/native/04-select_network.png').default} style={{height: "400px"}}/>
</center>

5. Name your account and click “Import Account”:
<center>
<img src={require('./img/native/05-name_account.png').default} style={{height: "400px"}}/>
</center>

6. Your account should now be visible in Polkadot{.js} extension:
<center>
<img src={require('./img/native/06-account_imported.png').default} style={{height: "200px"}}/>
</center>

# Receiving tokens

To receive tokens, copy the address of your connected account by clicking the copy icon next to it, and send some tokens to that address from your preferred source.

# Sending tokens

Sending tokens can be done from any client that supports calling transfer extrinsic from the Balances pallet. (for example [https://polkadot.js.org/apps](https://polkadot.js.org/apps)), but we will show how to do it from the [Astar portal](https://portal.astar.network/):

1. In the portal interface, click “Connect” and select “Polkadot.js” from the “Native Account section
<center>
<img src={require('./img/native/07-connect_wallet.png').default} style={{height: "400px"}}/>
</center>

2. Select the account you imported
<center>
<img src={require('./img/native/08-pick_account.png').default} style={{height: "400px"}}/>
</center>

:::note
Because of the aforementioned issue with chromium browser extensions connecting to USB devices, you might need to switch the notifications type to “Window”
:::
<center>
<img src={require('./img/native/09-switch_to_window.png').default} style={{height: "400px"}}/>
</center>

3. Initiate the transfer by clicking “Transfer” button next to the balance
<center>
<img src={require('./img/native/10-initiate_transfer.png').default} style={{height: "400px"}}/>
</center>

4. Input the target address, enter the amount, and click “Confirm”
<center>
<img src={require('./img/native/11-confirm_transfer.png').default} style={{height: "400px"}}/>
</center>

5. In the newly opened window, click the “Sign on Ledger” button, and confirm your Ledger device for prompt
<center>
<img src={require('./img/native/12-sign_on_ledger.png').default} style={{height: "400px"}}/>
</center>

6. Your device’s screen should change from “Astar ready” to “Please review”

<figure>
<center>
<img src={require('./img/native/D02-review.png').default} style={{height: "200px"}}/>
</center>
</figure>

<figure>
<center>
<img src={require('./img/native/D03-extrinsic_name.png').default} style={{height: "200px"}}/>
<figcaption align = "center">Check extrinsic name</figcaption>
</center>
</figure>

<figure>
<center>
<img src={require('./img/native/D04-address.png').default} style={{height: "200px"}}/>
<figcaption align = "center">Check receiving address</figcaption>
</center>
</figure>

<figure>
<center>
<img src={require('./img/native/D05-amount.png').default} style={{height: "200px"}}/>
<figcaption align = "center">Check amount</figcaption>
</center>
</figure>

<figure>
<center>
<img src={require('./img/native/D06-tip.png').default} style={{height: "200px"}}/>
<figcaption align = "center">Check tip</figcaption>
</center>
</figure>

<figure>
<center>
<div style={{display: 'flex', justifyContent: 'center'}}>
<img src={require('./img/native/D07-approve.png').default} style={{height: '150px',margin: '1px'}}/>

<img src={require('./img/native/D08-reject.png').default} style={{height: '150px',margin: '1px'}}/>
</div>
<figcaption align = "center">Either approve or reject the transaction</figcaption>
</center>
</figure>

## Interacting with other extrinsics and smart contracts​

This version of the app only supports the Balances pallet, so no other extrinsic or smart contract call can be signed by it.
Support for those will come in the future versions.
