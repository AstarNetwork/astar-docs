---
sidebar_position: 9
title: Ledger Astar/Shiden EVM on MetaMask
---

## Using Astar and Shiden EVM Ledger apps with MetaMask

## Intro

**Astar EVM** and **Shiden EVM** apps are now available on Ledger hardware wallet devices. This means that MetaMask users can now sign transactions for EVM accounts on those networks using Ledger Nano S (plus) or Ledger X devices.

This guide will show you how to set up Astar EVM and Shiden EVM on your Ledger hardware wallet and how to use it in combination with MetaMask.

:::info
Photos are taken using Nano S Plus device, and the example shows interaction with Astar EVM app, but the process is the same with Nano S and Nano X devices, as well as Shiden EVM app.
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

### Astar/Shiden network set up on Metamask

If you already have this, feel free to skip this part.

1. In the MetaMask menu navigate to Settings → Networks, and click “Add a network”
2. Enter following details for Astar:
   1. Network name: `Astar Network Mainnet`
   2. New RPC URL:<br />
  `https://astar.public.blastapi.io/`<br />
  `https://astar-rpc.dwellir.com/`<br />
  `https://astar.api.onfinality.io/public`
   3. Chain ID: `592`
   4. Currency Symbol: `ASTR`
   5. Block Explorer URL(Optional): `https://astar.subscan.io/`
3. Click the “Save” button
4. Repeat steps 1-3 for Shiden network with following details:
   1. Network name: `Shiden Network Mainnet`
   2. New RPC URL:<br />
    `https://shiden.public.blastapi.io`<br />
    `https://shiden-rpc.dwellir.com`<br />
    `https://shiden.api.onfinality.io/public`
   3. Chain ID: `336`
   4. Currency Symbol: `SDN`
   5. Block Explorer URL(Optional): `https://shiden.subscan.io/`
5. Close the Settings menu and from the dropdown select the network you wish to interact with

### Install apps to your Ledger device

1. Open Ledger Live app and navigate to “Manager”
2. Connect your Ledger Device and unlock it
   1. If asked, confirm Ledger Manager on your device
3. Search for “Astar EVM” or “Shiden EVM” in the app catalog
4. Click install

After this step, you should have one or both of these apps:

<center>
<div style={{display: 'flex', justifyContent: 'center'}}>
<img src={require('./img/evm/1-AstarEVM.jpg').default} style={{height: '200px',margin: '1px'}}/>

<img src={require('./img/evm/2-ShidenEVM.jpg').default} style={{height: '200px',margin: '1px'}}/>

</div>
</center>

## Connecting your Ledger device to MetaMask

1. In MetaMask menu select “Connect Hardware wallet:

<center>
<img src={require('./img/evm/connect_hw_wallet.png').default} style={{height: "400px"}}/>
</center>

2. On the next screen select “Ledger” and click “Continue:

<center>
<img src={require('./img/evm/select_ledger.png').default} style={{height: "400px"}}/>
</center>

3. Pair and connect your Device when prompted by the browser:

<center>
<img src={require('./img/evm/pair_hid.png').default} style={{height: "400px"}}/>
</center>

4. Select an account you wish to connect and click “Unlock”:

<center>
<img src={require('./img/evm/select_acc.png').default} style={{height: "400px"}}/>
</center>

5. You should now see your account and balance:

<center>
<img src={require('./img/evm/acc_balance.png').default} style={{height: "400px"}}/>
</center>

# Receiving tokens

To receive tokens, copy the address of your connected account by clicking your account name in MetaMask header, and send some tokens to that address from your preferred source.

# Sending tokens

1. In MetaMask click “Send” button and enter the address you wish to send to
2. Enter the amount to send and click “Next”
3. Connect your Ledger device and unlock it. Due to MetaMask limitations, it will prompt you to open Ethereum App. Ignore this and open Astar EVM app.

<center>
<img src={require('./img/evm/confirm_tx.png').default} style={{height: "400px"}}/>
</center>

4. When your Ledger device screen is showing “Application is ready”, click “Confirm” in MetaMask:

<center>
<img src={require('./img/evm/3-ApplicationIsReady.jpg').default} style={{height: '200px',margin: '1px'}}/>
</center>

5. Review the transaction on your Ledger device:

<center>
<img src={require('./img/evm/4-ReviewTransaction.jpg').default} style={{height: '200px',margin: '1px'}}/>
</center>

    a) Check amount:

<center>
<img src={require('./img/evm/5-AmountASTR1.jpg').default} style={{height: '200px',margin: '1px'}}/>
</center>

    b) Check receiving address:

<center>
<img src={require('./img/evm/6-Address.jpg').default} style={{height: '200px',margin: '1px'}}/>
</center>

    c) Check network:

<center>
<img src={require('./img/evm/7-Network_Astar.jpg').default} style={{height: '200px',margin: '1px'}}/>
</center>

    d) Check Fees:

<center>
<img src={require('./img/evm/9-MaxFees_ASTR.jpg').default} style={{height: '200px',margin: '1px'}}/>
</center>

    e) Either approve or reject the transaction:

<center>
<div style={{display: 'flex', justifyContent: 'center'}}>
<img src={require('./img/evm/11-AcceptAndSend.jpg').default} style={{height: '200px',margin: '1px'}}/>

<img src={require('./img/evm/12-Reject.jpg').default} style={{height: '200px',margin: '1px'}}/>

</div>
</center>

6. Check the transaction result in MetaMask “Activity” tab.

## Interacting with smart contracts

In order to interact with smart contracts, you need to enable blind signing in the Astar EVM app on your Ledger device:

1. Open the app
2. Navigate to “Settings” and confirm
3. Confirm the “Blind signing” option, so it turns to “Enabled”
4. Navigate to “Back” and confirm
