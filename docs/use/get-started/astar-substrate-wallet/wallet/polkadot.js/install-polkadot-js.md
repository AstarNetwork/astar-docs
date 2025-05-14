---
sidebar_position: 1
sidebar_label: Install Polkadot.Js
title: Create an Astar Wallet using Polkadot.Js
---

import Figure from '/src/components/figure'

## **[Polkadot.js](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en)** *(Recommended)*

The Polkadot\{.js\} plugin provides a reasonable balance of security and usability. It provides a separate local mechanism to generate your address and interact with Astar Network. We recommend users who are new to our ecosystem and want to create an Astar native address use this wallet. If you don't have the Polkadot JS extension you will receive a popup in our portal when you try to connect your wallet.

### Install the Browser Plugin

The browser plugin is available for both [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (and Chromium-based browsers like Brave) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension). After installing the plugin, you should see the orange and white Polkadot\{.js\} logo in your browser menu bar.

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_1.png').default } width="75%" /> 

### Create a new account

1. Open the Polkadot\{.js\} browser extension by clicking the logo on the top bar of your browser. You will see a browser popup;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_2.png').default } width="70%" /> 

2. Click the big plus button `Create new account`. The Polkadot\{.js\} plugin will then use system randomness to make a new seed for you and display it to you in the form of twelve words;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_3.png').default } width="75%" /> 

3. You should back up these words. Please, store the seed somewhere safe, secret, and secure.  
If you cannot access your account via Polkadot\{.js\} for some reason, you can re-enter your seed through the `Add account menu` by selecting `Import account from pre-existing seed`;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_4.png').default } width="75%" /> 

:::tip

Best to create an account that is allowed on any chain in the Polkadot ecosystem including Astar or Shiden Network. Your account will automatically change format when connected to a chain;

A **descriptive name** is arbitrary and for your use only. It is not stored on the blockchain and will not be visible to other users who look at your address via a block explorer. If you're juggling multiple accounts, it helps to make this as descriptive and detailed as needed.

The **password** will be used to encrypt this account's information. You will need to re-enter it when using the account for any kind of outgoing transaction or when using it to cryptographically sign a message.

:::

5. After clicking on `Add the account with the generated seed`, your account is created. We recommend also saving your account as json file somewhere safe.

## Setup Polkadot\{.js\} to connect to Astar Network

### Allow Polkadot\{.js\} to be used on Astar Network
1. Go to Polkadot\{.js\} browser extension;
2. Click on the `3 dots`;
3. On the dropdown menu, select `Allow use on any chain`;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_5.png').default } width="70%" /> 

### Allow Polkadot\{.js\} to access the portal
1. Go to Polkadot\{.js\} browser extension;
2. Click on the `Gear` icon;
3. Click on `Manage Website Access`;
4. Make sure `https://portal.astar.network` is allowed;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_6.png').default } width="70%" /> 

## Connect your wallet to Astar Portal

1. Visit the [Astar Portal](https://portal.astar.network/) and connect your Polkadot\{.js\} wallet. You'll get a popup indicating that  Polkadot\{.js\} must be authorized for use on our portal. Give the extension permission to do so!

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_7.png').default } width="60%" /> 

2. Once you've authorized the extension, connect the wallet. A popup window will appear showing all possible extensions. We've just created a new account with Polkadot\{.js\}, so let's select this extension;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_8.png').default } width="80%" /> 

Once you've clicked on Polkadot\{.js\}, you can select your newly created account. Select your account and press `Connect`;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_9.png').default } width="80%" /> 

You have now successfully connected an Astar wallet to our portal. 

:::note

You can use this wallet on all parachains in the Polkadot ecosystem.

:::

## Support

In case of problems. Join our community on [Discord](https://discord.com/invite/astarnetwork), the team and our agents will support you.  
Remember, we'll never send you a DM first! If you're approached by someone claiming to be part of the team, don't trust them.
