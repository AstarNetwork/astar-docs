---
sidebar_position: 5
sidebar_label: Subwallet
title: Connecting SubWallet to Astar
---

import Figure from '/src/components/figure'

SubWallet is a comprehensive non-custodial wallet solution for Substrate & Ethereum ecosystems. Built on top of Polkadot.js, SubWallet focuses on improving UX & UI. We envision a crypto wallet as a Web3 multiverse gateway through which users can enjoy multi-chain services with utmost ease and absolute security. 

This guide will show you how to manage your accounts, your tokens, stake your tokens in-app, and connect to the Astar Portal using SubWallet!

## Install SubWallet

SubWallet is available on a range of platforms for you to choose from:

1. A **browser extension** which is available on [Google Chrome](https://chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn), [Brave](https://chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn), [MS Edge](https://chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/subwallet/).


2. A **mobile app** which is available on the [App Store](https://apps.apple.com/us/app/subwallet-polkadot-wallet/id1633050285) and [Google Play Store](https://play.google.com/store/apps/details?id=app.subwallet.mobile).

3. A web dashboard that does not require any downloading and can be accessed through https://web.subwallet.app

For this tutorial, we will walk you through the process of creating a wallet using the browser extension.

## Setup an account

Once you have installed the extension, you'll have the option to **create**, **import** or **attach an account** ([Ledger](https://docs.subwallet.app/main/extension-user-guide/account-management/connect-ledger-device), [Keystone](https://docs.subwallet.app/main/extension-user-guide/account-management/connect-keystone-device), [Polkadot Vault](https://docs.subwallet.app/main/extension-user-guide/account-management/attach-a-polkadot-vault-previously-parity-signer-account) and [Watch-only account](https://docs.subwallet.app/main/extension-user-guide/account-management/attach-a-watch-only-account))

<Figure caption="Browser extension create screen" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-1.png').default} width="100%" />

### Create a new account

To create a new account, click on **Create a new account**.

<Figure caption="Create new account" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-2.png').default} width="100%" />

You will then need to create your master password which keeps all of your accounts secure. Once you have entered the password and then confirmed it, click on **Continue**.

<Figure caption="Master password" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-3.png').default} width="100%" />

:::note
For each seed phrase created with SubWallet, you would have a Substrate account and an Ethereum account. 
    Substrate account would display your assets on Substrate-native blockchains (such as Polkadot, Kusama, and Astar), while Ethereum account would display your assets on Ethereum chains (such as Astar-EVM). 
:::

Now you will be shown a seed phrase together with the option to back it up. Once you have saved and stored it in a safe place, choose **I have kept it somewhere safe**.

<Figure caption="Create new seed phrase" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-4.png').default} width="100%" />

:::caution
You should never share your seed phrase (mnemonic) or private key with anyone. This gives them direct access to your funds.
:::

You have finished creating a new account! If you want to create additional accounts, follow these steps:
1. Choose the accounts tab on the top of the extension.


<Figure caption="Create additional accounts 1" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-5.png').default} width="100%" />

2. Click on **Create a new account** and repeat the steps above.

<Figure caption="Create additional accounts 2" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-6.png').default} width="100%" />

### Import an existing account

To import an account that you have already created, choose **Import an account**. 

<Figure caption="Browser extension home screen" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-7.png').default} width="100%" />

Then you can choose your preferred method of importing.

<Figure caption="Methods of importing" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-8.png').default} width="100%" />

After you have chosen a method, you will be prompted to create a master password. Enter your password and click on **Continue**.

<Figure caption="Master password" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-3.png').default} width="100%" />

:::caution
Please note that SubWallet is non-custodial, so you would be the only person who knows your password; we cannot help you restore your password once it is lost. Please make sure that your password is well-kept.
:::

#### Using seed phrase

You could choose between importing either a Substrate account or Ethereum account, or both. After choosing, click on **Import account**

<Figure caption="Methods of importing" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-9.png').default} width="100%" />

Enter your seed phrase in the text boxes. You can use either a 12-word seed phrase or a 24-word seed phrase to import your account. Click on **Import account** and your account has been imported!

<Figure caption="Import using seed phrase" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-10.png').default} width="100%" />


:::note
Incompatibility
In some cases, if you import an account from a seed phrase, problems can arise if the seed phrase of your original wallet is not compatible with SubWallet. **Trust Wallet** and **Safepal** are among the wallets not compatible with us. 
:::


#### Using Polkadot.js JSON file

You can import a Polkadot.js account after exporting the JSON backup file. Click on the **Import from Polkadot.js** field to upload a file from your device, or drag and drop your JSON file into the field.

<Figure caption="Upload JSON file" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-11.png').default} width="100%" />

You will then need to enter your JSON file password (created when you set up the wallet for the first time) and click **Import by JSON file**. 

<Figure caption="JSON file password" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-12.png').default} width="100%" />

:::note
If you want to import multiple accounts simultaneously from a JSON file, you are required to enter the password for each account you want to import.
:::

#### Using MetaMask private key

Once you have exported your private key, enter it into the text box then click on **Import account**.

<Figure caption="Import with private key" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-36.png').default} width="100%" />


#### Using QR code

<Figure caption="Import with private key" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-13.png').default} width="100%" />

Click on **Scan QR**. If you have not enabled camera access yet, a message will show up prompting you to **Go to settings**.

<Figure caption="Import with QR code" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-14.png').default} width="100%" />


 On the settings page, toggle on **Camera access for QR** then head back to the QR page, click on **Scan QR** and scan your accounts' QR code. After the successful import of your account by QR code, you will be directed to the Homepage. 


<Figure caption="Enable camera access" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-15.png').default} width="100%" />



#### Import additional accounts

You have finished importing your account! If you want to import additional accounts, follow these steps:
1. Choose the accounts tab on the top of the extension.

<Figure caption="Create additional accounts 1" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-5.png').default} width="100%" />


2. Click on the **Import** icon and repeat the steps above.

<Figure caption="Create additional accounts 2" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-16.png').default} width="100%" />



## Interacting with Astar

### Managing ASTR on SubWallet

To Manage ASTR on SubWallet, choose the **Customize asset display** icon next to the search icon.

<Figure caption="Customize asset display" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-17.png').default} width="100%" />


On the search bar, search for **Astar**. Toggle on the networks to enable them.

<Figure caption="Enable Astar" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-18.png').default} width="100%" />


Head back to the home screen. You should be able to see that Astar has been connected and all of the tokens available on the network should be displayed.

<Figure caption="Connected Astar" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-19.png').default} width="100%" />

## Receive token

From your home screen, choose the first blue icon under the eye. 

<Figure caption="Receive" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-20.png').default} width="100%" />

:::note 
**If you are in all-accounts mode**
You will be prompted to choose an account if you are in all-accounts mode.

<Figure caption="All accounts mode" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-21.png').default} width="100%" />
:::

Search for the token that you would like to receive, in this case, ASTR. You can either **Copy the address** or **View address QR**.

<Figure caption="Copy address" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-23.png').default} width="100%" />


:::note
ASTR is allowed to execute cross-chain transfer, so when choosing the token, make sure you are receiving ASTR on the correct chain by checking the network icon under the tokens.
<Figure caption="Cross-chain receive" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-35.png').default} width="100%" />
:::

Send the address or show the QR code to the sender and you'll be able to receive ASTR from them!

<Figure caption="QR code" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-37.png').default} width="100%" />

### Send a transaction

To get started with a simple token transfer to another address on Astar, you can click the send icon.

<Figure caption="Send transaction" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-24.png').default} width="100%" />

Next, you can take the following steps:

1. Specify the asset to send and the destination chain. 

    :::note 
    ASTR is allowed to execute cross-chain transfer, so when choosing the destination network, you can choose the drop-down menu to see the available options.
    :::

2. Enter the destination address
3. Enter the amount of tokens to send
4. Look over the transaction details, then press **Transfer**

<Figure caption="Transaction details" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-25.png').default} width="100%" />

On the next screen, you can review the transaction details and submit the transaction. If the transaction details look good, you can click **Approve** to send the transaction.

<Figure caption="Approve transaction" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-26.png').default} width="100%" />

After you send the transaction, you can review the transaction details.

### Connect to the Astar Portal

First, head to the [Astar Portal](https://portal.astar.network/astar/assets). Once you arrive at the portal, you will be prompted to connect your wallet. 

If you want to connect your Ethereum account, choose **SubWallet** under the **Ethereum accounts** section. 

<Figure caption="Connect EVM account" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-27.png').default} width="100%" />

A window will appear. Choose the account that you would like to connect then choose **Connect**. Approve the connection and you have successfully connected to the Astar portal!

<Figure caption="Choose accounts" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-28.png').default} width="100%" />

Otherwise, if you want to connect using your Substrate account, choose **SubWallet** under the **Native accounts** section. 

<Figure caption="Connect Polkadot account" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-29.png').default} width="100%" />

Afterward, the steps to connect are identical to that of connecting Ethereum accounts.

### dApp Staking

First, head to the **staking** tab on the navigation bar.

<Figure caption="Staking tab" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-30.png').default} width="100%" />

On the staking screen, choose the **+** icon on the top right of the screen.

<Figure caption="Choose bond" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-31.png').default} width="100%" />

Choose the **Nominate** tab in the "Add to Bond" screen and enter the staking information:

<Figure caption="Staking info" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-32.png').default} width="100%" />

1. Choose the account from which you would like to stake (if you are in all accounts mode)
2. Choose the token that you would like to stake, in this case, ASTR.
3. Enter the amount of tokens. The minimum active for dApp staking with ASTR is 500 ASTR.
4. Select a dApp.

A list of available dApps will be shown. It is suggested that you pay close attention to the dApp you are choosing. When selecting dApp, SubWallet supports you with the latest record of dApp details. Please click the three-dot icon on the right-hand side of each dApp to see the dApp details.

<Figure caption="DApp details" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-33.png').default} width="100%" />

In addition, you could use the sort function to find the most suitable dApp according to your needs. Click the sort icon on the upper right corner and choose your sorting criteria. 

<Figure caption="Sort dApp" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/subwallet/img/subwallet-34.png').default} width="100%" />

After all the staking information is entered, click on **Stake** then approve the transaction. 