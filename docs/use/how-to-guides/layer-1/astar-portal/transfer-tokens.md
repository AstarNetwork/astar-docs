---
sidebar_position: 1
sidebar_label: Transfer tokens
title: Transfer tokens using the Astar Portal
---

import Figure from "/src/components/figure"

In this tutorial, you'll learn how to send and receive tokens using the Astar Portal on Astar network, as well as on Polkadot and its parachains using XCM.

:::tip
If you need to create an Astar wallet, you can refer to the following sections of the documentation:
- [Astar Substrate - Choose your wallet](/use/get-started/astar-substrate-wallet/index.md)
- [Astar EVM - Choose your wallet](/use/get-started/astar-evm-wallet/index.md)
:::

## Transfer ASTR on Astar Network

**Astar Network** (Layer 1) consists of two environments: **Astar Substrate** and **Astar EVM**. This tutorial will guide you on managing your assets in both environments, transferring them between the two, and vice versa.

### Receive ASTR tokens

Most Exchanges (CEX) only support Astar Network (Substrate) tokens, except Gate.io and MEXC which supports Astar EVM environment. You will need an Astar Substrate Account to receive ASTR tokens on Astar Network.

:::tip

Most centralized exchanges only list `Astar Network` as a destination, which means Astar Network (Substrate).

:::

:::danger

**Double check the supported network, if it says Astar (EVM) then you can only transfer tokens to Astar EVM accounts**.

:::

1. Visit the [Astar Portal](https://portal.astar.network/);

2. Select **Astar L1**;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_1.png').default } width="100%" />

3. Choose a wallet provider (*Polkadot\{.js\}, Talisman, Subwallet, Nova Wallet, etc.*) and select the Astar substrate account you want to connect;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_2.png').default } width="100%" />

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_3.png').default } width="100%" />

4. This is the Assets page of your Astar Substrate Account, where you will see your address near the top of the page.  
Copy the address;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_4.png').default } width="100%" />

5. Visit an exchange that supports ASTR token. Once you've obtained some ASTR, you will be able to initiate a withdrawal from your exchange account to the address above;

6. Once the withdrawal is complete, revisit the Portal and check your balance.

### Send ASTR tokens

:::tip

- Use an Astar Substrate account to send tokens to exchanges that support Astar Network;
- Use an Astar EVM account to send tokens to exchanges that support Astar EVM;
- DO NOT attempt to send from EVM to the exchange Substrate deposit address as this might result in the lost of funds.

:::

:::caution

In addition to the instructions below, please carefully read the instructions provided by the Exchange, as well (address type, format, and network selection).

:::

1. Copy the Astar substrate address or deposit address from an exchange you want to make a transfer to;

2. Visit the Astar [Portal](https://portal.astar.network/) and select **Astar L1**;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_1.png').default } width="100%" />

3. Choose a wallet provider (*Polkadot\{.js\}, Talisman, Subwallet, Nova Wallet, etc.*) and select the Astar substrate account you want to connect;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_2.png').default } width="100%" />

4. Press the transfer button symbolized by a paper plane icon;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_5.png').default } width="100%" />

5. Add the destination address and the amount you want to transfer, then press `Confirm`.

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_6.png').default } width="100%" />

### From Astar Substrate to Astar EVM

Most projects on Astar Network are deployed on Astar EVM, so you'll need to transfer your ASTR tokens and other assets from Astar Substrate to Astar EVM if you want to interact with these dApps.

1. Visit the [Astar Portal](https://portal.astar.network/), choose an EVM wallet provider (*Metamask, Talisman, Subwallet, WalletConnect, etc.*) and select the Astar EVM account you want to connect;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_7.png').default } width="100%" />

2. Copy the EVM address of your wallet;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_8.png').default } width="100%" />

3. Alternatively, open up your EVM wallet extension (Metamask, etc.) and copy your address;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_9.png').default } width="80%" />

4. Connect your Astar Substrate account to the [Astar Portal](https://portal.astar.network/);

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_2.png').default } width="100%" />

5. Press the transfer button symbolized by a paper plane icon;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_5.png').default } width="100%" />

6. You are now on the transfer page. Enter your Astar EVM address and the amount you want to transfer, then press `Confirm`.

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_10.png').default } width="100%" />

<br /> 

### From Astar EVM to Astar Substrate

Most external projects and third parties (CEX) only support the Astar substrate environment for token transfer. You will therefore need to transfer your ASTR tokens from Astar EVM to Astar Substrate before transferring them out of the network.

:::danger

**Please note that most exchanges support Astar Substrate addresses only, so do not use this method to transfer tokens to exchanges unless they specifically support Astar EVM.**

:::

:::caution

xcAssets (XCM tokens that are compatible with EVM networks) are non-transferrable to Astar Substrate accounts, even if at some point in time they originated from a Substrate account. To convert xcAssets to Astar Substrate, you would first need to perform a cross-chain transfer (XCM) back to the origin chain, and then another XCM transfer to Astar Substrate. If you'd like to know more, you can follow [the steps here](/docs/use/how-to-guides/layer-1/astar-portal/transfer-tokens.md#from--astar-network-to-polkadot-or-other-parachains).

:::

1. Visit the Astar [Portal](https://portal.astar.network/) and connect your Astar Substrate account to copy the address to which you want to receive your tokens;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_2.png').default } width="100%" />

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_4.png').default } width="100%" />

2. Choose an EVM wallet provider (*Metamask, Talisman, Subwallet, WalletConnect, etc.*) and select the Astar EVM account you want to connect;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_7.png').default } width="100%" />

3. Press the transfer button symbolized by a paper plane icon;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_11.png').default } width="100%" />

4. You are now on the transfer page. Enter the destination Astar Substrate address and the amount you want to transfer, then click on `Confirm`;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_12.png').default } width="100%" />

5. This transaction will transfer your tokens to an **Astar EVM Deposit** address. You will need to withdraw this EVM deposit before you can use the tokens;

6. Return to your Substrate account and press the `Withdraw` button in the Asset page;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_13.png').default } width="90%" />

7. The modal window appears and you can continue the withdrawal process by clicking on `Confirm`.

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_14.png').default } width="70%" />

## Cross-chain Transfer (XCM) on Polkadot

As a Polkadot parachain, Astar Network enables the transfer of assets between Polkadot and other parachains within its ecosystem. Likewise, assets, including the ASTR token, can be moved from Astar Network to Polkadot and other parachains.

For seamless transfers, we suggest using Astar Portal's cross-chain transfer function.

Before starting a transfer, there are a few key things you'll need to know.

:::note

- When transferring Substrate tokens back to origin chains (such as Polkadot or parachains), we recommend leaving a small amount in the account to avoid the potential for running out of gas for future transactions.
- The `Min.Balance` requirement is applicable to most Substrate networks for token transfers within the Polkadot Ecosystem. Astar Portal will only process transactions that exceed this minimum balance.

:::

### From Polkadot or other Parachains to Astar Network

1. Visit the Astar [Portal](https://portal.astar.network/) and connect your Astar Substrate Account;  
**(Deposit to Astar EVM is only possible through Astar Substrate account) **

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_2.png').default } width="100%" />

2. Choose the substrate token you want to transfer to Astar Network and press the transfer button symbolized by a paper plane icon;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_15.png').default } width="100%" />

3. Switch to the **Cross-chain Transfer** tab;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_16.png').default } width="100%" />

4. Enter the amount you would like to send to Astar Network, then click on `Confirm`. 

Polkadot.js and other Substrate wallet providers support all parachains, therefore you will be able to view all the assets of other parachains, including DOT. Any assets can be transferred over with just one click;

:::caution

Astar has set Polkadot’s DOT Min.balance to 1.1DOT and Min.Transfer Amount to 1.1, so users will need to have at least 2.2DOT + gas to make a minimum transfer. This is to protect user's funds from getting reaped by its Existential Deposit (ED) (more information about ED, please visit [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).)

:::

:::tip
If you would like tokens to be deposited to an Astar EVM account, then change the destination to Astar (EVM) and input the EVM address;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_17.png').default } width="100%" />
<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_18.png').default } width="100%" />
:::

### From  Astar Network to Polkadot or other Parachains

1. Visit the Astar [Portal](https://portal.astar.network/) and connect your Astar Substrate or EVM Account;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_19.png').default } width="100%" />

:::tip

If you wish to move cross-chain (XCM) assets to Astar Substrate accounts from Astar EVM accounts, you will first need to send tokens back to the origin chain and initiate another cross-chain (XCM) transfer back to your Astar Substrate account.

:::

2. Choose the substrate token you want to withdraw from Astar Network to another chain;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_15.png').default } width="100%" />

3. Switch to the **Cross-chain Transfer** tab and choose the network to which you want to send your tokens;

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_20.png').default } width="100%" />

a. If you are on Astar EVM, insert the destination address. You will need to use the [origin chain’s address](/docs/learn/interoperability/faq#q-where-can-i-find-other-chains-addresses).

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_21.png').default } width="100%" />

b. If you are on Astar Substrate and would like to transfer tokens to a different chain within the same account, you do not need to input the address. Otherwise, enter the address manually if you want to transfer to another address.

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_22.png').default } width="100%" />

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/transfer_23.png').default } width="100%" />

6. Enter the amount you would like to transfer, then click on `Confirm`.
