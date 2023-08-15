---
sidebar_position: 8
---

# How to transfer tokens

In this tutorial we will guide you through the process of sending and receiving tokens using the Portal.

<br />

- [How to transfer tokens](#how-to-transfer-tokens)
  - [How to Create Astar Accounts (Native and EVM)](#how-to-create-astar-accounts-native-and-evm)
  - [Sending ASTR/SDN to Astar Network from Centralized Exchanges](#sending-astrsdn-to-astar-network-from-centralized-exchanges)
  - [Sending ASTR/SDN to Centralized Exchanges from Astar Network](#sending-astrsdn-to-centralized-exchanges-from-astar-network)
  - [Sending ASTR/SDN to Astar EVM from Astar Native (or any tokens in the account)](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)
  - [Sending ASTR/SDN to Astar Native Accounts from Astar EVM](#sending-astrsdn-to-astar-native-accounts-from-astar-evm)
  - [Cross-chain Transfer (XCM)](#cross-chain-transfer-xcm)
  - [Transferring cross-chain (XCM) assets to Astar Network](#transferring-cross-chain-xcm-assets-to-astar-network)
  - [Transferring cross-chain (XCM) assets to other chains from Astar Network](#transferring-cross-chain-xcm-assets-to-other-chains-from-astar-network)
  - [Cross Virtual Machine Transfer Of ERC20 Tokens(XVM)](#cross-virtual-machine-transfer-of-erc20-tokensxvm)

<br />

## How to Create Astar Accounts (Native and EVM)

Astar Network supports addresses with two different formats:

- A Native address is used for dApp staking and interacting with Wasm projects
- An EVM address is used to interact with dApps on the Astar EVM


If you would like to create an Astar Native account, [this page](../Manage%20wallets/create-wallet.md) will guide you through the process.

If you have not added yet Astar Network to MetaMask, you can do it quickly and easily on our [Portal](https://portal.astar.network/) by choosing MetaMask from the Select Wallet menu, which should appear automatically. After selection, MetaMask will prompt you for permission to add Astar Network. Alternatively, you can visit [here](../EVM%20guides/setup-metamask.md) for details about how to add Astar Network to your wallet manually.


<br />

## Sending ASTR/SDN to Astar Network from Centralized Exchanges

Most Exchanges only support Astar Network (Native) tokens, except Gate.io which supports the Astar (EVM) version. You will need an Astar Native Account to receive ASTR tokens, and from there you can transfer them to an Astar EVM account, should you choose to do so.

:::tip

Most centralized exchanges only list 'Astar Network' as a destination, which means Astar Network (Native).

:::

:::danger

**Double check the supported network, if it says Astar (EVM) then you can only transfer tokens to Astar EVM accounts**.

:::

1. Visit the Astar [Portal](https://portal.astar.network/).

2. Connect the network to Astar/Shiden (Astar Network uses ASTR token, and Shiden Network uses SDN).

<img width="1000" alt="network" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png" />

3. Connect your Polkadot.js wallet - if you have not done it yet please go back to [Create Astar Accounts](#create-wallet/#astar-accounts).

<img width="1000" alt="wallet" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png" />　

4. This is the Assets page for your Astar Native Account, where you will see your address near the top of page. Copy the address.

<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png" />

5. Visit an exchange that supports ASTR token. Once you've obtained some ASTR, you will be able to initiate a withdrawal from your exchange account to the address above.

6. Once the withdrawal is complete, revisit the Portal and check your balance.

<br />

## Sending ASTR/SDN to Centralized Exchanges from Astar Network

:::tip

- **Use an Astar Native account to send tokens to exchanges that support Astar Network**
- **Use an Astar EVM account to send tokens to exchanges that support Astar EVM**
- **DO NOT attempt to send from EVM to the exchange native deposit address as this might result in the lost of funds.** 

:::

:::caution

In addition to the instructions below, please carefully read the instructions provided by the Exchange, as well (address type, format, and network selection).

:::

1. Copy a deposit address from an exchange you wish to make a transfer to.
2. Visit the Astar [Portal](https://portal.astar.network/) and change the network to either Astar or Shiden (Astar Network uses ASTR token and Shiden uses SDN).
3. Connect your wallet (Native or EVM will depend on the exchange) - if you have not done this yet please revisit [Create Astar Accounts](https://docs.astar.network/docs/user-guides/create-wallet/).
4. Click transfer button.
   <img width="1000" alt="Native-Asset-transfer" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png"/>
5. Add the destination address of the exchange and the amount you wish to transfer.
   <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png" />

<br />

## Sending ASTR/SDN to Astar EVM from Astar Native (or any tokens in the account)

As mentioned above, most exchanges only support Astar Native, and you will need to transfer ASTR tokens to the Astar EVM if you wish to interact with EVM dApps.

1. Visit the Astar [Portal](https://portal.astar.network/) and copy your Astar EVM address.
   <img width="1000" alt="account-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png" />

2. Alternatively, open up MetaMask extension and copy your address.
   <img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png" />

3. Connect to Astar Native account.

4. Press the transfer button next to the ASTR token.
   ![image](https://user-images.githubusercontent.com/37278708/210126359-b31d52c4-2e5e-4da7-a421-478439e71ba8.png)

5. You are now on the transfer page. Add the destination address and the amount you wish to transfer, then press the confirm button.
   <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png" />

<br />

## Sending ASTR/SDN to Astar Native Accounts from Astar EVM

You can follow the steps below if you would like to transfer ASTR/SDN tokens to Astar Native.

:::caution

xcAssets (XCM tokens that are compatible with EVM networks) are non-transferrable to Native accounts, even if at some point in time they originated from a Native account. To convert xcAssets to Astar Native, you would first need to perform a cross-chain transfer (XCM) back to the origin chain, and then another XCM transfer to Astar Native. If you'd like to know more, you can follow [the steps here](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network).

:::
:::danger

**Please note that most exchanges support Astar Native addresses only, so do not use this method to transfer tokens to exchanges unless they specifically support Astar EVM.**

:::

1. Visit the Astar [Portal](https://portal.astar.network/) and connect your Astar Native account to copy address you wish to use.
   <img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png" />

2. Connect to Astar EVM account by switching chains from the header button.
   <img width="1000" alt="Switch-to-EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png" />

3. Press the transfer button next to the token you wish to send.
   <img width="1000" alt="EVM-transfer" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png" />

4. You are now on the transfer page. Add the destination Astar Native address and the amount you wish to transfer, then press the confirm button. **This transaction will withdraw tokens to an Astar EVM Deposit.**
![image](https://user-images.githubusercontent.com/37278708/210047489-797cbfae-004f-4860-9681-1a2f1390e57b.png)

5. You will need to withdraw the EVM deposit before you can use the tokens.

6. Return to your Native account and press the Withdraw button.
   <img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png" />

7. The modal will appear and you can continue with the withdrawal process by signing.
   <img width="945" alt="depo-withdraw" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png" />

<br />

## Cross-chain Transfer (XCM)

There are a few things you will need to know before initiating a transfer.

:::note

- When transferring native tokens back to origin chains, we recommend leaving a small amount in the account, the avoid the potential for running out of gas for transactions in the future.

- Min.Balance is applied to most network Native tokens in the Polkadot Ecosystem, and Astar Portal will only initiate transactions for amounts greater than the Min.Balance.

:::

<br />

## Transferring cross-chain (XCM) assets to Astar Network

1. Visit the Astar [Portal](https://portal.astar.network/) and connect your Astar Native Account **(Deposit to Astar EVM is only possible through Astar Native account) **

2. Choose the token you wish to deposit to Astar Network.

3. Click Transfer and move to Transfer Page. Choose the Cross-chain Transfer tab.
   <img width="1000" alt="Native-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png" />

Polkadot.js supports all parachains, therefore you will be able to view all the assets of other parachains, including DOT. Any assets can be transferred over with just one click.

:::caution

Astar has set Polkadot’s DOT Min.balance to 1.1DOT and Min.Transfer Amount to 1.1, so users will need to have at least 2.2DOT + gas to make a minimum transfer. This is to protect user's funds from getting reaped by its Existential Deposit (ED) (more information about ED, please visit [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

:::

4. If you would like tokens to be deposited to an Astar EVM account, then change the destination to Astar (EVM) and input the EVM address.

<img width="1000" alt="Chain-select" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png" />
<img width="1000" alt="XCM-Native-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png" />

1. Enter the amount you would like to send to Astar Network, then press the confirm button.

2. Finding a history of XCM transactions can be tricky, so the Astar Portal has a browser history, which provides information about transactions you have made.

<img width="1000" alt="history" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png" />

<br />

## Transferring cross-chain (XCM) assets to other chains from Astar Network

1. Visit the Astar [Portal](https://portal.astar.network/) and connect your Native or EVM Account.

:::tip

If you wish to move cross-chain (XCM) assets to Astar Native accounts from Astar EVM accounts, you will first need to send tokens back to the origin chain and initiate another cross-chain (XCM) transfer back to your Astar Native account.

:::

2. Choose the token you wish to withdraw from Astar Network to another chain.

3. Click Transfer and move to Transfer Page. Choose the Cross-chain Transfer (XCM) tab.

4. If you are on Astar EVM, insert the destination address. You will need to use the [origin chain’s address](https://docs.astar.network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses).
   <img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png" />

5. If you are on Astar Native and would like to transfer tokens to a different chain within the same account, you do not need to input the address. Otherwise, enter the address manually if you want to transfer to another account. You may also transfer tokens from another chain to Astar Native by clicking the reverse button.
   <img width="1000" alt="XCM-reverse" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png" />

<img width="1000" alt="Input-manually" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png" />

6. Enter the amount you would like to transfer, then press the confirm button.

<br />

## Cross Virtual Machine Transfer Of ERC20 Tokens(XVM)

:::tip

This feature is currently available only on Shibuya.

:::

1. Connect Metamask to https://portal.astar.network
2. In the top right corner, connect to Shibuya.
3. Go to the Assets page.
4. If the asset that you want to transfer is not displayed, you will need to manually add the contract address. 

![image](https://user-images.githubusercontent.com/37278708/213384226-66737a56-9708-4622-a48c-d41c777a7772.png)

5. Click “transfer” on the asset that you want to transfer.

![image](https://user-images.githubusercontent.com/37278708/213384333-d480ba61-057d-4127-9d0b-270e2821ed2f.png)

6. Enter the destination native address.
7. Enter the amount of tokens that you want to transfer.
8. Click confirm.

![image](https://user-images.githubusercontent.com/37278708/213384489-cb1419df-f31c-410a-95bd-1d9376899a40.png)

10. Done. Your ERC20 tokens have been transferred from EVM to Native.
11. Disconnect Metamask and connect the native wallet you sent the tokens to.
12. You should be able to see the XVM ERC20 asset.

![image](https://user-images.githubusercontent.com/37278708/213384947-72f72fe5-1758-4a21-92f8-47e8fff1d1b3.png)

12. If the asset is not displayed, you will need to add it manually.
13. You should now be able to transfer the asset from Native to EVM.

