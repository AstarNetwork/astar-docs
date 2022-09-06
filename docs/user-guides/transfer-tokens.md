
---
sidebar_position: 4
---

# How to transfer tokens

In this tutorial we will navigate you how to transfer tokens using Portal and sending tokens to Portal.

- [Create Astar Accounts(Native and EVM)](#create-astar-accountsnative-and-evm)

- [Sending ASTR/SDN to Astar Network from Central Exchanges](#sending-astrsdn-to-astar-network-from-central-exchanges)

- [Sending ASTR/SDN to Central Exchanges from Astar Network](#sending-astrsdn-to-central-exchanges-from-astar-network)

- [Sending ASTR/SDN to Astar EVM from Astar Native](#sending-astrsdn-to-astar-evm-from-astar-native)

- [Sending ASTR/SDN to Astar Native from Astar EVM](#sending-astrsdn-to-astar-native-from-astar-evm)

- [Cross-chain Transfer(XCM)](#cross-chain-transferxcm)

- [Transferring cross-chain assets into Astar Network](#transferring-cross-chain-assets-into-astar-network)

- [Transferring cross-chain assets to other chains from Astar Network](#transferring-cross-chain-assets-to-other-chains-from-astar-network)

- How to find transaction ID


## Create Astar Accounts(Native and EVM)

Astar has two different addresses in different formats.

- An Astar Native address - to do dApps Staking and interact with WASM projects
- An Astar EVM address - to interact with EVM projects

If you need to create Astar Native account, [this page](@create-wallet) will help you to create the accounts.

If you need to create an Astar EVM account


## Sending ASTR/SDN to Astar Network from Central Exchanges

Most Exchanges support only Astar Network (Native) today except Gate.io who supports Astar (EVM). So you will need an Astar Native Account to receive ASTR tokens and you will send tokens to an Astar EVM account as you wish.

Note: Most Exchanges only mention Astar Network which means the network they support is Astar Native.

Alert: Make sure the supported network, if it says Astar (EVM) you can only transfer tokens to Astar EVM accounts


:::Note

Most Exchanges only mention Astar Network which means the network they support is Astar Native.

:::

:::danger

**Make sure the supported network, if it says Astar (EVM) you can only transfer tokens to Astar EVM accounts**.

:::

1. Go to our [Portal](https://portal.astar.network/)
2. Connect the network to Astar/Shiden (Astar Network is for ASTR and Shiden Network is for SDN token)

<image>

3. Connect your Poladot.js wallet - if you have not done it yet please go back to [Create Astar Accounts](https://docs.astar.network/docs/user-guides/create-wallet/#astar-accounts)

<image>

4. This is the asset page of your Astar Native Account. You will see the address on the top. Copy the address.

<image>

5. Go to the exchange where you got ASTR tokens and make a withdrawal to the address above. 

6. Once a transaction is made, go back to Portal and check the balance.


## Sending ASTR/SDN to Central Exchanges from Astar Network 

:::danger

- **Use Astar Native account to send tokens to exchanges who support Astar Network**
- **Use Astar EVM account to send tokens to exchanges who support Astar EVM**

:::

1. Copy an address from an exchange you wish to make a transfer to.

2. Go to [Portal](https://portal.astar.network/) and connect the network to Astar/Shiden (Astar Network is for ASTR and Shiden Network is for SDN token)

3. Connect your wallet (Native or EVM depends on the exchanges) - if you have not done it yet please go back to [Create Astar Accounts]

4. Click transfer button

5. Add the destination address of the exchange and the amount you wish to transfer.


## Sending ASTR/SDN to Astar EVM from Astar Native (or any tokens in the account)

As mentioned above, most exchanges only support Astar Native and you would need to transfer ASTR tokens to Astar EVM if you wish to interact with EVM projects.

1. Go to [Portal](https://portal.astar.network/) and copy the Astar EVM address. 

<image>

2. Or go check Metamask extension and copy the address.

<image>

3. Connect to Astar Native account.

4. Press the transfer button next to ASTR token.

<image>

5. You are in the transfer page and add the destination address and the amount you wish to transfer. Send.

<image>


## Sending ASTR/SDN to Astar Native from Astar EVM

Please follow the steps below when you would like to transfer ASTR/SDN tokens to Astar Native.

Note: xcAssets (XCM tokens that are compatible in ERC environment) are currently unable to transfer back to Native account (even you might have transferred from native account). You would need to cross-chain transfer(XCM) to the origin chains and make another XCM transfer to Astar Native. Please follow [the steps here](**link**)

:::danger

**Please note that most exchanges support only Astar Native addresses so do not use this method to transfer tokens to exchanges unless the exchange supports Astar EVM.**

:::

1. Go to [Portal](https://portal.astar.network/) and connect to Astar Native account to copy address you wish to use. 

<image>

2. Connect to Astar EVM account.

3. Press the transfer button next to the token you wish to send.

<image>

4. You are in the transfer page and add the destination Astar Native address and the amount you wish to transfer. Send. This transaction enable to send tokens to EVM Deposit.

<image>

5. You will  need to withdraw EVM deposit before you can use the tokens.

6. Go back to Native account and press Withdraw button.

<image>

7. Modal will come up and you can withdraw by signing.

<image>



## Cross-chain Transfer(XCM)

There are few points you have to prepare before transferring.

:::note

- When transferring native tokens for origin chains we recommend to leave some amount in the account otherwise you might need some gas tokens to make further transactions.

- Min.Balance is usually applied to tokens in the Polkadot Ecosystem and Astar Portal will only make transactions the amount greater than the Min.Balance.

:::



## Transferring cross-chain assets into Astar Network

1. Go to [Portal](https://portal.astar.network/)  and connect to Astar Native Account (Deposit to Astar EVM is only possible through Astar Native account)

2. Choose the token you wish to deposit to Astar Network.

3. Click Transfer and move to Transfer Page. Choose the Cross-chain Transfer tab.

<image>

With Astar Native Account which is made in Polkadot.js has all Polkadot and parachains corresponding addresses. Here we are in Astar Network account but you can see Polkadot chain’s DOT token balance. You can bring your asset in one click.

:::Note

Note: We set Polkadot’s DOT Min.balance of 1.1DOT and we set Min.Transfer Amount for 1.1. You will have to have at least 2.2DOT + gas to make a minimum transfer. This is to protect users funds getting reaped by it’s Existential Deposit(ED) (more infor for ED, please go to [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-)

:::

4. If you would like tokens to arrive in Astar EVM then change the destination to Astar(EVM) and input the EVM address.

<image>

<image>

5. Enter the amount you would like to bring to Astar Network. And confirm.

6. Finding transactions of XCM can be trickey, portal now has browser history so it will take you to the right transaction you have made.

<image history>



## Transferring cross-chain(XCM) assets to other chains from Astar Network

1. Go to [Portal](https://portal.astar.network/)  and connect to Native or EVM Account. 

:::Note

If you wish to move cross-chain(XCM) assets to Astar Native accounts from Astar EVM accounts, you will first need to send tokens back to the origin chains and make another cross-chain(XCM) transfer to Astar Native account 

:::

2. Choose the token you wish to withdraw from Astar Network to other chains.

3. Click Transfer and move to Transfer Page. Choose the Cross-chain Transfer(XCM) tab.

4. If you are on Astar EVM, place the destination address. You would need the [origin chain’s address](https://docs.astar.network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses). 

<image>

5. If you are on Astar Native and happy to transfer the token within the same account when you don’t need to change here but just reverse the order but you can manually input another account’s address.

<image>

<image>

6. Enter the amount you would like to bring to Astar Network. And confirm to sign.

