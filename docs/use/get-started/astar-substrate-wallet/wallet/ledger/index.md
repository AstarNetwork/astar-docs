---
sidebar_position: 2
sidebar_label: Ledger
title: Interact with Ledger using Astar Native Accounts
---
import Figure from "/src/components/figure"

## Introduction

**Polkadot (DOT)** and **Polkadot Migration** are Ledger-integrated apps that allow users to use a Ledger device as an account and sign transactions for substrate accounts.

- [Release Version `100.0.8` by Zondax](https://github.com/Zondax/ledger-polkadot/releases/tag/v100.0.8) 

**Ledger Live is not supported hence user will not be able to create Astar accounts with Ledger Live**.

This tutorial describes the process of configuring a Ledger device to manage assets, connect to the Astar portal and participate in dApp staking using native ASTR tokens. It also includes the initiation of the first interaction between the device and the network.

## Your Ledger device is ready for use

- [Make sure you have set up your Ledger device](https://support.ledger.com/hc/en-us/articles/360000613793?docs=true)
- Update your device to latest firmware
  - [Nano S](https://support.ledger.com/hc/en-us/articles/360002731113?docs=true)
  - [Nano S Plus](https://support.ledger.com/hc/en-us/articles/4445777839901?docs=true)
  - [Nano X](https://support.ledger.com/hc/en-us/articles/360013349800?docs=true)
- [Download and install Ledger Live app for your OS](https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true)
- [Download and install Polkadot.js extension for your browser](https://polkadot.js.org/extension/)

## Polkadot Migration App

:::info

Due to the new **Polkadot Generic Ledger** application, the **Astar Native Ledger** application is no longer supported by all wallet providers in the ecosystem, including the Polkadot.js extension, and is therefore unusable at the moment. 

To access Astar accounts created with the **Astar Native Ledger** app, users must use the **Polkadot Migration** application. 

:::

:::danger
At the time of this release, **XCM transfers** operations are **NOT SUPPORTED** on Ledger devices for **Polkadot Migration** app.

:::

### Install Polkadot Migration app to your Ledger device

1. Open **My Ledger** in Ledger Live;
2. Connect and unlock your Ledger device. If asked, allow `My Ledger` to access your device;
3. Search for **Polkadot Migration** (Version `100.0.8`) in the app catalog;
4. Click Install. 

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_migration_ledger.png').default} width="90%" />

After this step, you should have the **Polkadot Migration** app installed.


### Connect your Ledger device to Astar Network using Polkadot.js

1. Install **[Polkadot.js extension](https://polkadot.js.org/extension/)**;
2. Open the extenstion;
3. In Polkadot.js settings, select `Use the Ledger Migration App` in Ledger App setting;
4. Click on **Attach Ledger account** as shown below;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_migration_ledger_2.png').default} width="80%" />

5. Make sure your Ledger device is connected to your PC and the **Polkadot Migration** app is open;
6. Select **Astar Network** and enter a descriptive name;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_migration_ledger_3.png').default} width="70%" />

7. Click **Import Account**.

You successfully connected to Ledger Astar account.

**Configure the Ledger device connection method**

1. Go to the **[Astar settings page on the Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/settings)**;
2. Ensure **Attach Ledger via WebHID** is the preferred connection method listed under *account options* > *manage hardware connections*, as shown in the image below:

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/ledger-astar-app-4.png').default} width="80%" />

### Connect your Ledger device to the Astar Portal

1. Open your browser and visit the [Astar Portal](https://portal.astar.network);
2. Update the Metadata of your Polkadot.js extension wallet if necessary;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/Portal_1.png').default} width="80%" />

3. Connect the [Polkadot.js extension](https://polkadot.js.org/extension/) to the Portal;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/Portal_2.png').default} width="90%" />

4. Open the **Polkadot Migration** app on your Ledger device;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_migration_ledger_3.png').default} width="60%" />

5. Select the Ledger account that was imported during the last step;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_migration_ledger_6.png').default} width="90%" />

6. You successfully connected your Ledger Astar account using the Polkadot Migration app. 🎉

:::tip

If you can't see your wallet, open the Polkadot.js extension settings and allow the wallet to manage the Astar portal.  
Then refresh the Portal and connect your Astar ledger account.
    
<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_migration_ledger_5.png').default} width="90%" />
    
:::

### Talisman, Subwallet and Nova Wallet

For more detailed information on the migration process for specific wallets, you can check the following guides:

- **Talisman**: [Talisman migrate to the New Ledger Generic app](https://support.polkadot.network/support/solutions/articles/65000188075-talisman-migrate-to-the-new-ledger-generic-app)
    - *If you have an existing Astar Native Ledger account in your Talisman extension, you must first erase it in order to reimport it using the Polkadot Migration app.*
- **SubWallet**: [Subwallet migrate to the New Ledger Generic app](https://support.polkadot.network/support/solutions/articles/65000188081-subwallet-migrate-to-the-new-ledger-generic-app)
- **Nova Wallet**: [Nova wallet migrate to the New Ledger Generic app](https://support.polkadot.network/support/solutions/articles/65000188090-nova-wallet-migrate-to-the-new-ledger-generic-app)

## Polkadot Generic (DOT) App

:::info

The **Polkadot Generic** app is the standard Ledger application for the Polkadot ecosystem, supporting all Polkadot parachains. New Ledger account users should use the generic Polkadot application directly instead of the **Polkadot Migration** app for a more unified experience.

Now that you have access to your **Astar Ledger** accounts again, you should start thinking about transferring everything (assets, NFT, identities, staking, etc.) to new accounts created with the **Polkadot Generic** app. 

The **Polkadot Migration** app will remain available for an extended period, but it's advisable to migrate to the new generic Polkadot app for a more unified and improved ledger experience on both Polkadot and Astar Network.

:::

### Install Polkadot (DOT) to your Ledger device

1. Open **My Ledger** in Ledger Live;
2. Connect and unlock your Ledger device. If asked, allow `My Ledger` to access your device;
3. Search for **Polkadot (DOT)** (Version `100.0.8`) in the app catalog;
4. Click Install. 

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_ledger.png').default} width="90%" />

After this step, you should have the Polkadot (DOT) app installed.


### Connect your Ledger device to Astar Network using Polkadot.js

1. Install **[Polkadot.js extension](https://polkadot.js.org/extension/)**;
2. Open the extenstion;
3. In Polkadot.js settings, select `Use the Ledger Polkadot Generic App` in Ledger App setting;
4. Click on **Attach Ledger account** as shown below;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_ledger_2.png').default} width="80%" />

5. Make sure your Ledger device is connected to your PC and the Polkadot (DOT) is open;
6. Select **Astar Network** and enter a descriptive name;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_ledger_3.png').default} width="70%" />

7. Click **Import Account**.

You successfully connected to Ledger Astar account.

**Configure the Ledger device connection method**

1. Go to the **[Astar settings page on the Polkadot.js portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/settings)**;
2. Ensure **Attach Ledger via WebHID** is the preferred connection method listed under *account options* > *manage hardware connections*, as shown in the image below:

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/ledger-astar-app-4.png').default} width="80%" />

### Connect your Ledger device to the Astar Portal

1. Open your browser and visit the [Astar Portal](https://portal.astar.network);
2. Update the Metadata of your Polkadot.js extension wallet if necessary;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/Portal_1.png').default} width="80%" />

3. Connect the [Polkadot.js extension](https://polkadot.js.org/extension/) to the Portal;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/Portal_2.png').default} width="90%" />

4. Open the **Polkadot (DOT)** app on your Ledger device;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_ledger_3.png').default} width="60%" />

5. Select the Ledger account that was imported during the last step;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_ledger_6.png').default} width="90%" />

6. You successfully connected your Ledger Astar account using the Polkadot (DOT) app. 🎉

:::tip

If you can't see your wallet, open the Polkadot.js extension settings and allow the wallet to manage the Astar portal.  
Then refresh the Portal and connect your Astar ledger account.
    
<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/polkadot_ledger_5.png').default} width="90%" />
    
:::

### Talisman, Subwallet and Nova Wallet

For detailed instructions on creating new wallets with the **Polkadot Generic** app for specific wallet providers, please refer to the following guides:

- **Talisman**: [Talisman migrate to the New Ledger Generic app](https://support.polkadot.network/support/solutions/articles/65000188075-talisman-migrate-to-the-new-ledger-generic-app)
    - *If you have an existing Astar Native Ledger account in your Talisman extension, you must first erase it in order to reimport it using the Polkadot Migration app.*
- **SubWallet**: [Subwallet migrate to the New Ledger Generic app](https://support.polkadot.network/support/solutions/articles/65000188081-subwallet-migrate-to-the-new-ledger-generic-app)
- **Nova Wallet**: [Nova wallet migrate to the New Ledger Generic app](https://support.polkadot.network/support/solutions/articles/65000188090-nova-wallet-migrate-to-the-new-ledger-generic-app)

For detailed information about dApp staking or how to stake on the EVM side of Astar Portal using a Ledger device, please refer to the [Astar official documentation](/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/) or [Ledger EVM staking guide](/docs/use/get-started/astar-evm-wallet/wallet/ledger/index.md)


## Ledger Troubleshooting

:::tip
If you receive a **Ledger error: Failed to execute 'claimInterface' on 'USBDevice': Unable to claim interface** message during the dApp staking claim process, ensure you are performing the operation:
- Using a Chromium-based browser such as Chrome or Brave,
- The Ledger device connection method is WebHID, as outlined in the previous step
:::

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/ledger/img/ledger-astar-app-6.png').default} width="80%" />
