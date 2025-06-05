---
sidebar_position: 1
title: Fearless Wallet
---

import Figure from '/src/components/figure'

# Fearless Wallet

**The DeFi Wallet for the Future**

[Fearless Wallet](https://fearlesswallet.io/) is a mobile wallet
designed for the decentralized future of multi-chain ecosystems, with
support for [iOS](https://apps.apple.com/us/app/fearless-wallet/id1537251089) and [Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.fearless) platforms, as well as a [Chrome browser plugin](https://chromewebstore.google.com/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc) developed by SORAMITSU. An awesome user experience, fast performance, and secure storage for your accounts.


# Connecting Fearles Wallet to Astar

This guide will show you how to manage your accounts and tokens, as
well as make in-app cross chain transfers using Fearless Wallet. 

## Installing Fearless Wallet Mobile App

The Fearless Wallet app is available as:

1.  A Mobile App on
- [iOS](https://apps.apple.com/us/app/fearless-wallet/id1537251089)
- [Android](https://play.google.com/store/apps/details?id=jp.co.soramitsu.fearless) 
2.  A browser extension on [Chrome](https://chromewebstore.google.com/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc)

In this tutorial we will walk you through the mobile account creation
process and the browser extension.

:::note
You can also import an account using a [passphrase (mnenomic)](https://wiki.fearlesswallet.io/accounts/walkthrough/exporting-and-importing-a-wallet-using-a-passphrase) or
[JSON file](https://wiki.fearlesswallet.io/accounts/walkthrough/exporting-and-importing-a-wallet-using-a-json-file).
:::

### Create a new wallet

If you don't have a wallet on the Polkadot network yet, tap "*Create a
new wallet*" on the initial screen. If you already have a wallet you'd
like to use with Fearless, tap "*I already have a wallet*":

<Figure caption="Mobile account creation screen"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/create-fw1.png').default}
width="25%" />

If you're creating a new wallet, you'll be prompted to choose a name for your wallet, you can enter any you like, this name will be used to distinguish your wallet from others on your device. Once you've entered the name you want, the app will generate a 12-word recovery phrase.

Right after that, you'll need to confirm your mnemonic passphrase by
clicking on each word in the correct order:

<Figure caption="Mnemonic Phrase Verification"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/create-fw2.png').default}
width="75%" />

:::note
Write down this phrase and store it in a safe place, as it can be used
to restore your wallet if you ever lose access to it. If you lose this
phrase, you won't be able to recover your wallet. Don't share this
phrase with anyone.
:::

If you’re an advanced user and would like to have a custom derivation path for your wallet, click on “**Advanced**” and paste your derivation path.

### Import an existing wallet

If you're importing an existing wallet, you'll be prompted to enter
your mnemonic phrase, Raw seed or JSON file. Make sure to enter this
information accurately to ensure that your wallet is imported
correctly:

<Figure caption="Mnemonic Phrase Input"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/create-fw3.png').default}
width="25%" />

If you have a custom derivation path for your wallet, click on “**Advanced**” and paste it there.

Once your wallet has been created or imported, you'll be able to view
your balances, send and receive crypto, as well as make cross-chain
transfers.

## Installing Fearless Wallet Browser Extension

Navigate to [this
page](https://chrome.google.com/webstore/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc)
and click on "**Add to Chrome**"

<Figure caption="Adding the Fearless Browser Extension"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install1.png').default}
width="75%" />

In the pop-up window, click "Add Extension" to confirm the
installation of the Fearless Wallet browser extension

<Figure caption="Browser Confirmation"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install2.png').default}
width="75%" />

## Creating/Importing Your Account

Click on the Fearless Wallet icon in the upper right corner

Decide whether you need to Create a new wallet or Import the existing
account and click on the corresponding button

### Creating a Wallet

If you're creating a new wallet, start by giving it a unique
**nickname.**

<Figure caption="Name your wallet"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install3.png').default}
width="50%" />

Then, backup the mnemonic passphrase for your new wallet (**make sure
to save it in a safe place and never share it with anyone**)

<Figure caption="Save your Seedphrase"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install4.png').default}
width="50%" />

Select and enter a password for your newly-created account

<Figure caption="Create a strong password"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install5.png').default}
width="50%" />

### Importing a Wallet

In case you already have a wallet, you can import it by clicking on
the corresponding button

<Figure caption="Tap Import Wallet to add your pre-existing wallet"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install6.png').default}
width="50%" />

Select the Source type for your private key and then paste it into the
field below. In our case it's going to be mnemonic passphrase

<Figure caption="Importing a wallet using a Mnemonic (seed) phrase"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install7.png').default}
width="50%" />

Give your wallet a nickname

<Figure caption="Name your imported wallet"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install8.png').default}
width="50%" />

And finally, assign it a password.

<Figure caption="Create a password for your imported wallet"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install9.png').default}
width="50%" />

Then enter it again and click Continue to confirm

<Figure caption="Confirm your password"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/fearless-browser-install10.png').default}
width="50%" />

That's it, you can use Fearless Wallet to manage your Astar Assets.

## Interacting with Astar

### Managing your Astar Tokens

You can use Fearless Wallet to manage your ASTR on Acala, Astar,
Pendulum and SORA. From the main wallet interface, navigate to the
Manage Assets button.

<Figure caption="Tap on Manage Assets"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/manage-astr1.png').default}
width="25%" />

Locate the ASTR token from the list and activate the networks you have
assets on. 

<Figure caption="Toggle the networks you want"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/manage-astr2.png').default}
width="50%" />

This will show the ASTR asset in your main wallet view. From there tap
on ASTR to manage your asset. Here you can send and receive (display
your wallet QR) tokens, or perform cross-chain transfers. 

<Figure caption="You can manage your ASTR here"
src={require('/docs/use/manage-wallets/wallet-providers/img/fearless/manage-astr3.png').default}
width="25%" />

:::note
**75 ASTR is the minimum amount for a cross-chain transfer** At the
moment you can only send your tokens to SORA.
:::

**Visit the [Fearless Wallet Wiki](https://wiki.fearlesswallet.io/) for more information on the features available.**
