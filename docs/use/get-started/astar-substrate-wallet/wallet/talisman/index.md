---
sidebar_position: 6
sidebar_label: Talisman
title: Create an Astar wallet on Talisman
---

import Figure from '/src/components/figure'

## 1. What is Talisman

[**Talisman**](https://talisman.xyz/) is a user-friendly crypto wallet and asset management hub built for **Ethereum** and **Polkadot**. Opening doors to an enriched web3 experience within the Polkadot and Kusama ecosystem, all while maintaining full EVM compatibility.

With the **Talisman browser extension**, you can securely store, send, and receive assets. The Talisman web app enhances your asset management experience, offering detailed oversight. Monitor your NFTs across diverse chains, delve into exciting dApps, and explore intriguing projects such as **Astar** effortlessly.

## 2. Onboard (Install)

The extension is available on Chrome, Brave, Edge and Firefox. Download and install the Talisman extension from https://www.talisman.xyz.

:::info Install tutorial

A download tutorial specific to your browser is also available → [**here**](https://docs.talisman.xyz/talisman/navigating-the-paraverse/account-management/download-the-extension).

:::

## 3. Create a new account

After installation, select “Get Started” at the onboarding screen.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-1.jpg').default} width="100%" />

Set a secure password.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-2.png').default} width="100%" />

Opt in/out of analytics and error reporting.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-3.png').default} width="100%" />

Select “New”.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-4.png').default} width="100%" />

Select either “Ethereum” to create an EVM compatible account, or “Polkadot” to create a substrate account. You can create additional accounts later, within the wallet.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-5.png').default} width="100%" />

Choose an account name and click “Create”.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-6.png').default} width="100%" />

You will be presented with your recovery phrase. Make sure to store this recovery phrase in a secure place. Click continue once you have completed backing up your recovery phrase.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-7.png').default} width="100%" />

You’re ready to use Talisman on Astar now.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-8.png').default} width="100%" />

## 4. Import account

### A. Using Polkadot.JS JSON file

Follow the same steps as creating a new account, but instead, select “Import” then “Import via JSON”.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-9.png').default} width="100%" />

Choose the JSON file that you exported from P.JS. Thereafter, enter the password that you used to encrypt this JSON file and select "Unlock JSON File". If you have locked accounts will multiple passwords, the JSON importer will prompt you for multiple passwords.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-10.png').default} width="100%" />

Click "Select all" to import all the accounts from the JSON file. You can also individually select the accounts that you want to import. Once you've chosen the accounts you wish to import, select "Unlock".
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-11.png').default} width="100%" />

The importer will cycle through all the accounts selected and attempt to unlock it with the password that you have provided. Continue to input all the passwords relevant to the selected accounts, then proceed by selecting "Unlock." Repeat until all accounts are successfully unlocked.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-12.png').default} width="100%" />

Now that you've unlocked each account, select "Import" to complete.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-13.png').default} width="100%" />

You are now ready to access all your newly imported accounts directly in Talisman.

### B. Using recovery phrase/private key

- Repeat steps 1 - 3 outlined above.
- Select import then select import via Recovery Phrase.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-14.png').default} width="100%" />

To import an EVM account, choose Ethereum as your account type (or import a Polkadot account).
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-15.png').default} width="100%" />

Select a name and enter your recovery phase or private key that you want to import.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-16.png').default} width="100%" />

Select “Import First Account” from the drop-down menu to import an individual account (there is also the option to import multiple accounts or choose a custom derivation path). Thereafter select “Import”.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-17.png').default} width="100%" />

Select “Enter Talisman”. You've now successfully imported your wallet.

## 5. Receive Astar

From popup, select receive.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-18.png').default} width="50%" />

You will be presented with a drop-down list, select the ASTR token on the network you will be receiving the tokens on ( such as Ethereum or Substrate). Make sure to select the correct network, indicated under the token name.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-19.png').default} width="50%" />

Select the account you will be receiving the tokens in.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-20.png').default} width="50%" />

Finally, copy your address.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-21.png').default} width="50%" />

## 6. Send ASTR

Open the popup, select send.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-22.png').default} width="50%" />

Select the correct token from the list (you can search the token or network name). Check that the token is on the correct network (located under the token name).
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-23.png').default} width="50%" />

Select the account you would like to send the tokens from.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-24.png').default} width="50%" />

Enter the destination address.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-25.png').default} width="50%" />

Enter the amount you would like to send and click review.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-26.png').default} width="50%" />

Review your transaction to ensure all details are correct. Once you have completed a review, click confirm.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-27.png').default} width="50%" />

## 7. Connect to dApp

Head to [Astar Portal](https://portal.astar.network/), you will be prompted to connect your wallet.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-28.png').default} width="100%" />

To connect an Ethereum account, select Talisman under EVM accounts.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-29.png').default} width="50%" />

To connect a Substrate account, select Talisman under Native accounts.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-30.png').default} width="50%" />

A window will open in your pop-up for you to approve the connection. Select the account(s) you would like to connect and select connect in the popup.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-31.png').default} width="50%" />

The Talisman connector will allow you to see which accounts are connected from here.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-32.png').default} width="50%" />

## 8. dApp Staking

From the popup, select “More Options” indicated by the three dots.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-33.png').default} width="50%" />

Select staking.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-34.png').default} width="50%" />

You will be taken to [app.talisman.xyz/staking](http://app.talisman.xyz/staking) (you can also access this portal directly). Scroll to Astr, and select stake from the staking dashboard.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-35.png').default} width="100%" />

Enter the amount you’d like to stake (minimum staking amount is 500 Astr) and choose the dApp from the dropdown menu. Thereafter, click “Stake” after you’ve reviewed your transaction.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-36.png').default} width="100%" />

:::info Unbonding period

Please note: there is an unbonding period aprox of 9 days on Astar.

:::

From the “positions” tab, you can see your staking position.
<Figure caption="" src={require('/docs/use/get-started/astar-substrate-wallet/wallet/talisman/images/image-37.png').default} width="100%" />