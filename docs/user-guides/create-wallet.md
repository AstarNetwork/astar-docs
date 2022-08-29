---
sidebar_position: 1
---

# Creating an Astar Wallet

## Astar Accounts

### Address Format

The address format used in Substrate-based chains like Astar is SS58. SS58 is a modification of Base-58-check from Bitcoin with some minor modifications. Notably, the format contains an address type prefix that identifies an address as belonging to a specific network. The Astar ecosystem is a special parachain in the Polkadot ecosystem because it's the only parachain that supports EVM as WASM smart contract. With the use of two different virtual machines come two different kinds of addresses.

- An Astar Native address or SS58 address
- An Astar EVM address or H160 address starts with 0x

![1](img/1.png)
<img width="800" alt="1-1" src="https://user-images.githubusercontent.com/77480847/187123614-dc821aed-9ce0-4a5f-afdc-48ac1df53b6a.png">
<img width="800" alt="1-2" src="https://user-images.githubusercontent.com/77480847/187123681-a377c898-6621-4c8d-ad8e-efad5a220a20.png">

To participate in the Stake2Earn Festival we will interact with our Astar native address. Using this address requires another extension then MetaMask. We recommend using the Polkadot JS extension if you are new to the ecosystem.

## Astar Portal

[Astar Portal]: https://portal.astar.network/

The [Astar Portal] is the place to be for doing anything in our ecosystem. The Astar developers created a one-stop-place for everyone who wants to interact in our ecosystem.

Through our portal, you can connect to different networks in the Astar ecosystem. To join our Stake2Earn festival you need to connect to **Astar Network**. Here is an overview of all our networks:

- **Astar Network**: parachain on Polkadot.
- **Shiden Network**: parachain on Kusama.
- **Shibuya**: parachain testnet

![2](img/2.png)

## Recommend: Polkadot{.js} Browser Plugin

The Polkadot{.js} plugin provides a reasonable balance of security and usability. It provides a separate local mechanism to generate your address and interact with the Astar portal. We recommend users who are new to our ecosystem and want to create an Astar native address use this wallet. If you don't have the Polkadot JS extension you will receive a popup in our portal when you try to connect your wallet.

### Install the Browser Plugin

The browser plugin is available for both [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (and Chromium-based browsers like Brave) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension). After installing the plugin, you should see the orange and white Polkadot{.js} logo in your browser menu bar.

![4](img/4.png)
![5](img/5.png)

### Create Account

Open the Polkadot{.js} browser extension by clicking the logo on the top bar of your browser. You will see a browser popup.

![6](img/6.png)

Click the big plus button - "Create new account". The Polkadot{.js} plugin will then use system randomness to make a new seed for you and display it to you in the form of twelve words.

![7](img/7.png)

You should back up these words. Please, store the seed somewhere safe, secret, and secure. If you cannot access your account via Polkadot{.js} for some reason, you can re-enter your seed through the "Add account menu" by selecting "Import account from pre-existing seed".

![8](img/8.png)

Best to create an account that is allowed on any chain in the Polkadot ecosystem. This account can then be used for Polkadot and Kusama. Your account will automatically change format when connected to a chain.

A **descriptive name** is arbitrary and for your use only. It is not stored on the blockchain and will not be visible to other users who look at your address via a block explorer. If you're juggling multiple accounts, it helps to make this as descriptive and detailed as needed.

The **password** will be used to encrypt this account's information. You will need to re-enter it when using the account for any kind of outgoing transaction or when using it to cryptographically sign a message.

:::danger
Note that this password does **NOT** protect your seed phrase. If someone knows the twelve words in your mnemonic seed, they still have control over your account even if they do not know the password.
:::

After clicking on "Add the account with the generated seed", your account is created. We recommend also saving your account as json file somewhere safe.

## Connect your wallet to Astar Portal

Return to [Astar Portal] and refresh the page. You will get a popup that Polkadot JS needs to be authorized to be used on our portal. Give the extension permission to do so!

![9](img/9.png)

When you have given the extension permission, let's connect the wallet. A popup will show with all possible extensions. We just create a new account with Polkadot JS, so let's select this extension.

![10](img/10.png)

Once you have clicked on Polkadot JS, you can select your newly created account. Select your account and press confirm.

![11](img/11.png)

You have now successfully connected an Astar wallet to our portal. Note that you can use this wallet on all parachains in the Dotsama ecosystem.

## Support

In case you have any problems. Join our community and our Ambassadors will support you. Please remember that we will never DM you first! If you get approached by someone pretending to be part of the team, do not trust them.
