
---
sidebar_position: 4
---

# How to transfer tokens

In this tutorial we will navigate you how to transfer tokens using Portal and sending tokens to Portal.

- [Create Astar Accounts(Native and EVM)](#create-astar-accountsnative-and-evm)

- [Sending ASTR/SDN to Astar Network from Central Exchanges](#sending-astrsdn-to-astar-network-from-central-exchanges)

- [Sending ASTR/SDN to Central Exchanges from Astar Network](#sending-astrsdn-to-central-exchanges-from-astar-network)

- [Sending ASTR/SDN to Astar EVM from Astar Native](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account
)

- [Sending ASTR/SDN to Astar Native from Astar EVM](#sending-astrsdn-to-astar-native-from-astar-evm)

- [Cross-chain Transfer(XCM)](#cross-chain-transferxcm)

- [Transferring cross-chain(XCM) assets into Astar Network](#transferring-cross-chainxcm-assets-into-astar-network)

- [Transferring cross-chain(XCM) assets to other chains from Astar Network](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)



## Create Astar Accounts(Native and EVM)

Astar has two different addresses in different formats.

- An Astar Native address - to do dApps Staking and interact with WASM projects
- An Astar EVM address - to interact with EVM projects

If you need to create Astar Native account, [this page](@create-wallet) will help you to create the accounts.

If you need to create an Astar EVM account


## Sending ASTR/SDN to Astar Network from Central Exchanges

Most Exchanges support only Astar Network (Native) today except Gate.io who supports Astar (EVM). So you will need an Astar Native Account to receive ASTR tokens and you will send tokens to an Astar EVM account as you wish.

:::Note

Most Exchanges only mention Astar Network which means the network they support is Astar Native.

:::

:::danger

**Make sure the supported network, if it says Astar (EVM) you can only transfer tokens to Astar EVM accounts**.

:::

1. Go to our [Portal](https://portal.astar.network/)

2. Connect the network to Astar/Shiden (Astar Network is for ASTR and Shiden Network is for SDN token) 

<img width="1000" alt="network" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png"/> 

3. Connect your Poladot.js wallet - if you have not done it yet please go back to [Create Astar Accounts](#create-wallet/#astar-accounts) 

<img width="1000" alt="wallet" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png"/>　 

4. This is the asset page of your Astar Native Account. You will see the address on the top. Copy the address. 

<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png"> 

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
4. Click transfer button. 
<img width="1000" alt="Native-Asset-transfer" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png"/> 
5. Add the destination address of the exchange and the amount you wish to transfer. 
<img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png"/> 
 
  
   
## Sending ASTR/SDN to Astar EVM from Astar Native (or any tokens in the account)

As mentioned above, most exchanges only support Astar Native and you would need to transfer ASTR tokens to Astar EVM if you wish to interact with EVM projects.

1. Go to [Portal](https://portal.astar.network/) and copy the Astar EVM address. 
<img width="1000" alt="account-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png"/> 

2. Or go check Metamask extension and copy the address. 
<img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png"/> 

3. Connect to Astar Native account. 

4. Press the transfer button next to ASTR token. 
<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188531419-78d95073-be4e-4020-a40b-cb64150dcdf6.png"> 

5. You are in the transfer page and add the destination address and the amount you wish to transfer. Send. 
<img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png"/> 



## Sending ASTR/SDN to Astar Native from Astar EVM

Please follow the steps below when you would like to transfer ASTR/SDN tokens to Astar Native.

:::caution

xcAssets (XCM tokens that are compatible in ERC environment) are currently unable to transfer back to Native account (even you might have transferred from native account). You would need to cross-chain transfer(XCM) to the origin chains and make another XCM transfer to Astar Native. Please follow [the steps here](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

:::
:::danger

**Please note that most exchanges support only Astar Native addresses so do not use this method to transfer tokens to exchanges unless the exchange supports Astar EVM.**

:::

1. Go to [Portal](https://portal.astar.network/) and connect to Astar Native account to copy address you wish to use. 
<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png"/> 

2. Connect to Astar EVM account by switching chains from header button. 
<img width="1000" alt="Switch-to-EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png"/> 

3. Press the transfer button next to the token you wish to send. 
<img width="1000" alt="EVM-transfer" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png"/> 

4. You are in the transfer page and add the destination Astar Native address and the amount you wish to transfer. Send. **This transaction is to send tokens to EVM Deposit.** 

<img width="1000" alt="EVM-to-Native" src="https://user-images.githubusercontent.com/77480847/188534236-a5b70980-6093-41f1-84a5-c1178eeefa4d.png/" 

5. You will  need to withdraw EVM deposit before you can use the tokens. 
     
6. Go back to Native account and press Withdraw button. 
<img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png"> 

7. Modal will come up and you can withdraw by signing. 
<img width="945" alt="depo-withdraw" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png"> 



## Cross-chain Transfer(XCM)

There are few points you have to prepare before transferring. 

:::note

- When transferring native tokens for origin chains we recommend to leave some amount in the account otherwise you might need some gas tokens to make further transactions.

- Min.Balance is usually applied to tokens in the Polkadot Ecosystem and Astar Portal will only make transactions the amount greater than the Min.Balance.

:::


## Transferring cross-chain(XCM) assets into Astar Network

1. Go to [Portal](https://portal.astar.network/)  and connect to Astar Native Account **(Deposit to Astar EVM is only possible through Astar Native account) **

2. Choose the token you wish to deposit to Astar Network. 

3. Click Transfer and move to Transfer Page. Choose the Cross-chain Transfer tab. 
<img width="1000" alt="Native-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png"/> 

With Astar Native Account which is made in Polkadot.js has all Polkadot and parachains corresponding addresses. Here we are in Astar Network account but you can see Polkadot chain’s DOT token balance. You can bring your asset in one click. 

:::Note

Note: We set Polkadot’s DOT Min.balance of 1.1DOT and we set Min.Transfer Amount for 1.1. You will have to have at least 2.2DOT + gas to make a minimum transfer. This is to protect users funds getting reaped by it’s Existential Deposit(ED) (more infor for ED, please go to [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-)

:::

4. If you would like tokens to arrive in Astar EVM then change the destination to Astar(EVM) and input the EVM address. 

<img width="1000" alt="Chain-select" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png"/>
<img width="1000" alt="XCM-Native-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png"/> 

5. Enter the amount you would like to bring to Astar Network. And confirm. 

6. Finding transactions of XCM can be trickey, portal now has browser history so it will take you to the right transaction you have made. 

<img width="1000" alt="history" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png"/> 



## Transferring cross-chain(XCM) assets to other chains from Astar Network

1. Go to [Portal](https://portal.astar.network/)  and connect to Native or EVM Account. 

:::Note

If you wish to move cross-chain(XCM) assets to Astar Native accounts from Astar EVM accounts, you will first need to send tokens back to the origin chains and make another cross-chain(XCM) transfer to Astar Native account 

:::

2. Choose the token you wish to withdraw from Astar Network to other chains. 

3. Click Transfer and move to Transfer Page. Choose the Cross-chain Transfer(XCM) tab. 

4. If you are on Astar EVM, place the destination address. You would need the [origin chain’s address](https://docs.astar.network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses). 
<img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png"> 

5. If you are on Astar Native and happy to transfer the token within the same account when you don’t need to change here but just reverse the order but you can manually input another account’s address. 
<img width="1000" alt="XCM-reverse" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png"/> 

<img width="1000" alt="Input-manually" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png"/> 


6. Enter the amount you would like to bring to Astar Network. And confirm to sign.

