---
sidebar_position: 7
sidebar_label: Fearless
title: Create an Astar wallet on Fearless
---

import Figure from '/src/components/figure'

## 1. What is Fearless Wallet

**The DeFi Wallet for the Future**.

[**Fearless Wallet**](https://fearlesswallet.io/) is a mobile wallet designed for the decentralized future of multi-chain ecosystems, with support for [**iOS**](https://apps.apple.com/us/app/fearless-wallet/id1537251089) and [**Android**](https://play.google.com/store/apps/details?id=jp.co.soramitsu.fearless) platforms, as well as a [**Chrome browser plugin**](https://chromewebstore.google.com/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc) developed by SORAMITSU. An awesome user experience, fast performance, and secure storage for your accounts.

## 2. Installing Fearless Wallet Mobile App

The Fearless Wallet app is available as:

A.  A Mobile App on:
- [**iOS**](https://apps.apple.com/us/app/fearless-wallet/id1537251089)
- [**Android**](https://play.google.com/store/apps/details?id=jp.co.soramitsu.fearless) 

B. A browser extension on [**Chrome**](https://chromewebstore.google.com/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc)

In this tutorial we will walk you through the mobile account creation process and the browser extension.

:::info Import an account

You can also import an account using a [**passphrase (mnenomic)**](https://wiki.fearlesswallet.io/accounts/walkthrough/exporting-and-importing-a-wallet-using-a-passphrase) or [**JSON file**](https://wiki.fearlesswallet.io/accounts/walkthrough/exporting-and-importing-a-wallet-using-a-json-file).

:::

### 1. Create a new wallet

If you don't have a wallet on the Polkadot network yet, tap "*Create a new wallet*" on the initial screen. If you already have a wallet you'd like to use with Fearless, tap "*I already have a wallet*":
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-1.png').default} width="40%" />

If you're creating a new wallet, you'll be prompted to choose a name for your wallet, you can enter any you like, this name will be used to distinguish your wallet from others on your device. Once you've entered the name you want, the app will generate a 12-word recovery phrase.

Right after that, you'll need to confirm your mnemonic passphrase by clicking on each word in the correct order:
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-2.png').default} width="100%" />

:::warning Attention

Write down this phrase and store it in a safe place, as it can be used to restore your wallet if you ever lose access to it. If you lose this phrase, you won't be able to recover your wallet. Don't share this phrase with anyone.

:::

If you’re an advanced user and would like to have a custom derivation path for your wallet, click on “**Advanced**” and paste your derivation path.

### 2. Import an existing wallet

If you're importing an existing wallet, you'll be prompted to enter your mnemonic phrase, Raw seed or JSON file. Make sure to enter this information accurately to ensure that your wallet is imported
correctly:
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-3.png').default} width="40%" />

If you have a custom derivation path for your wallet, click on “**Advanced**” and paste it there.

Once your wallet has been created or imported, you'll be able to view your balances, send and receive crypto, as well as make cross-chain transfers.

## 3. Installing Fearless Wallet Browser Extension

Navigate to [**this page**](https://chrome.google.com/webstore/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc) and click on "**Add to Chrome**".
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-4.png').default} width="100%" />

In the pop-up window, click "Add Extension" to confirm the installation of the Fearless Wallet browser extension.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-5.png').default} width="100%" />

### 1. Creating/Importing Your Account

Click on the Fearless Wallet icon in the upper right corner. Decide whether you need to Create a new wallet or Import the existing account and click on the corresponding button.

### 2. Creating a Wallet

If you're creating a new wallet, start by giving it a unique **nickname.**
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-6.png').default} width="50%" />

Then, backup the mnemonic passphrase for your new wallet (**make sure to save it in a safe place and never share it with anyone**).
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-7.png').default} width="50%" />

Select and enter a password for your newly-created account.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-8.png').default} width="50%" />

### 3. Importing a Wallet

In case you already have a wallet, you can import it by clicking on the corresponding button.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-9.png').default} width="50%" />

Select the Source type for your private key and then paste it into the field below. In our case it's going to be mnemonic passphrase.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-10.png').default} width="50%" />

Give your wallet a nickname.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-11.png').default} width="50%" />

And finally, assign it a password.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-12.png').default} width="50%" />

Then enter it again and click Continue to confirm.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-13.png').default} width="50%" />

That's it, you can use Fearless Wallet to manage your Astar Assets.

## 4. Interacting with Astar

### 1. Managing your Astar Tokens

You can use Fearless Wallet to manage your ASTR on Acala, Astar, Pendulum and SORA. From the main wallet interface, navigate to the Manage Assets button.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-14.png').default} width="40%" />

Locate the ASTR token from the list and activate the networks you have assets on. 
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-15.png').default} width="70%" />

This will show the ASTR asset in your main wallet view. From there tap on ASTR to manage your asset. Here you can send and receive (display your wallet QR) tokens, or perform cross-chain transfers. 
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/fearless/images/fearless-image-16.png').default} width="40%" />

**Visit the [Fearless Wallet Wiki](https://wiki.fearlesswallet.io/) for more information on the features available.**