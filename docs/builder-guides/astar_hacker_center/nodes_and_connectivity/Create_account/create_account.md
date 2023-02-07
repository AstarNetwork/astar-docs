---
sidebar_position: 2
---

# Create Account

## Install Polkadot browser extension
While you can create an account in the Polkadot-JS UI, a more convenient and recommended method of keeping the accounts stored on your computer is using the [Polkadot browser extension](https://polkadot.js.org/extension/). This extension remembers your accounts and allows you to clear your browser cache without fear.
Polkadot browser extension will serve as your account wallet.

:::note 
Remember to back up the seed phrase used to generate your account. 
- if you lose access to this computer or the extension somehow crashes beyond repair, the seed phrase will come in handy.
:::

## New Account

Open the Polkadot{.js} browser extension by clicking the logo on the top bar of your browser. You will see a browser popup.

![6](../../../../user-guides/img/6.png)

Click the big plus button - "Create new account". The Polkadot{.js} plugin will then use system randomness to make a new seed for you and display it to you in the form of twelve words.

![7](../../../../user-guides/img/7.png)

You should back up these words. Please, store the seed somewhere safe, secret, and secure. If you cannot access your account via Polkadot{.js} for some reason, you can re-enter your seed through the "Add account menu" by selecting "Import account from pre-existing seed".

![8](../../../../user-guides/img/8.png)

Best to create an account that is allowed on any chain in the Polkadot ecosystem. This account can then be used for Polkadot and Kusama. Your account will automatically change format when connected to a chain.

A **descriptive name** is arbitrary and for your use only. It is not stored on the blockchain and will not be visible to other users who look at your address via a block explorer. If you're juggling multiple accounts, it helps to make this as descriptive and detailed as needed.

The **password** will be used to encrypt this account's information. You will need to re-enter it when using the account for any kind of outgoing transaction or when using it to cryptographically sign a message.

:::danger
Note that this password does **NOT** protect your seed phrase. If someone knows the twelve words in your mnemonic seed, they still have control over your account even if they do not know the password.
:::

After clicking on "Add the account with the generated seed", your account is created. We recommend also saving your account as json file somewhere safe.

## Connect your wallet to Astar Portal

Return to [Astar Portal] and refresh the page. You will get a popup that Polkadot JS needs to be authorized to be used on our portal. Give the extension permission to do so!

![9](../../../../user-guides/img/9.png)

When you have given the extension permission, let's connect the wallet. A popup will show with all possible extensions. We just create a new account with Polkadot JS, so let's select this extension.

<img width="500" alt="10" src="https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png" />

Once you have clicked on Polkadot JS, you can select your newly created account. Select your account and press confirm.

<img width="530" alt="11" src="https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png" />

You have now successfully connected an Astar wallet to our portal. Note that you can use this wallet on all parachains in the Polkadot/Kusama (Dotsama) ecosystem.

