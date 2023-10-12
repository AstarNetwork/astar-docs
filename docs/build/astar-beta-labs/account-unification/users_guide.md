---
sidebar_position: 2
---
# How to create a unified account

import guide01 from "./img/guide01.png"
import guide02 from "./img/guide02.png"
import guide03 from "./img/guide03.png"
import guide04 from "./img/guide04.png"
import guide05 from "./img/guide05.png"
import guide06 from "./img/guide06.png"

## What is a Unified Account?

Creating a Unified account is simple, however, it's important to understand that this is still an emerging technology. We do not recommend attempting account unification until you are familiar with how it works.

A Unified account provides a simplified experience for end-users of Astar Substrate-based networks. Since on Astar Substrate, native Wasm and the EVM use two different address formats, new users find it challenging to grasp how they function. While both Astar Native and Astar EVM accounts are *typically* required, with unified accounts, users don't have to worry about which wallet they are connected to. When unifed accounts work in conjuction with XVM, they are designed to form a powerful new way to abstract away the inner workings of the Substrate native VM side from end users, entirely, allowing them to interact with both networks seamlessly using only MetaMask.

## What is possible?

- Two accounts; one balance. When accounts are unified, they share the same balance. The moment ASTR tokens are withdrawn from a CEX exchange to an Astar Native account, the balance is updated on the Astar EVM side. There's no need to transfer between them any longer; users can stake tokens immediately, for example, or use a DEX.

- Furthermore, it's already possible to interact with Wasm dApps using a Unified account, as long as the dApp supports EVM wallets. The core team is currently developing XVM, which allows a Unified account to interact with EVM smart contracts.

## How to create an unified account

:::caution
At this moment this feature is only available on Shibuya testnet.
:::

### Disclaimer: Before creating a Unified account, please ensure you understand the following

- Unified accounts are specific to each network. Creating a Unified account on Shibuya using Shibuya Native account A and Shibuya EVM account A does not carry over to Shiden or Astar.

- Staking balances on the EVM must be unstaked first before initiating the process since staked tokens cannot be transferred to the unified balance.

- Custom xcTokens (rather than official XCM tokens) are not included automatically during the account unification process, so they need to be transferred to an EVM wallet separately. To obtain test xcTokens on Shibuya, please contact @kahori on Discord.

- There is a fee (slightly more than 1 SBY) for creating a Unified account. If you have an existing Account ID (Substrate), this charge acts more like a deposit than a fee. However, it can not be refunded as accounts currently cannot be separated after they are unified.

### 1, Start by connecting Native account.

Please prepare following:

- **Shibuya Native account**
- **Shibuya EVM account**
- Must have no staking balance.
- Must have non-zero balances on both accounts (enough for gas) Use the faucet built into the [Portal](https://portal.astar.network) to obtain enough for gas fees, if you need to.
- To understand the process more thoroughly, obtain some test tokens. Please ask a team member if you do not know how to obtain test tokens.

Make sure you are connected to the Shibuya testnet. You should see a new account icon on the Asset page, and can initiate the process from there.

<div style={{textAlign: 'center'}}>
  <img src={guide01} style={{width: 600}} />
  </div>

<div style={{textAlign: 'center'}}>
  <img src={guide02} style={{width: 600}} />
  </div>

### 2, Read the disclaimer.

<div style={{textAlign: 'center'}}>
  <img src={guide03} style={{width: 450}} />
  </div>

### 3, Connect to EVM wallet.

It is recommended to use a new wallet, but if you wish to use an existing EVM account, please make sure to unstake all tokens first.

<div style={{textAlign: 'center'}}>
  <img src={guide04} style={{width: 450}} />
  </div>

### 4, Add your account name.

The account name will be visible on-chain. We are working on adding NFT pfp support in time for when Account Unification comes on Astar.

<div style={{textAlign: 'center'}}>
  <img src={guide05} style={{width: 450}} />
  </div>

### 5, Send xcTokens.

xcTokens do not live in the EVM account balance. Before unifying the balance, the portal will send xcTokens to a Unified account. When testing the environment, most of you may not have xcTokens. Please find a team member and ask for them for this purpose. You will be asked to sign an EVM transaction.

<div style={{textAlign: 'center'}}>
  <img src={guide06} style={{width: 450}} />
  </div>

### 6, Confirm everything looks okay. Press the button and the accounts will be unified.

### 7, To confirm the accounts were unified:

- Check that the SBY tokens balances are unified.

- Check that xcTokens ERC token balances are available after connecting a Substrate wallet.

- You can send xcTokens from the unified Substrate account.

:::note
We are working on a wallet modal to create a Unified Account section, where users can use unified accounts without needing to select a specific wallet.
:::
