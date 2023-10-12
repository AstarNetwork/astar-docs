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

Creating a Unified account is very simple. However, we would like you to understand that this is still an advanced technology. We do not recommend proceeding unless you are familiar with its workings.

A Unified account provides a simpler experience within the Astar ecosystem. Since we have two address formats, it has always been challenging for new users to grasp how they function. While you need both Astar Native and Astar subEVM accounts, once they are unified, you won't have to worry about which wallet you are connected to.

## What is possible?

- Two accounts, one balance. When accounts are unified, they share the same balance. The moment you withdraw ASTR tokens from a CEX exchange using your Astar Native account, your balance will also reflect in the Astar subEVM. There's no need to transfer between them; users can immediately stake tokens or use a DEX.

- Furthermore, it's already possible to interact with Wasm dApps using the Unified account, provided the dApp supports EVM wallets. The core team is currently developing XVM, which will enable the Unified account to interact with EVM smart contracts.

## How to create an unified account

:::caution
At this moment this feature is only available in Shibuya test net
:::

### Disclaimer: Before creating a Unified account, please ensure you understand the following

- Unified accounts are specific to each network. Creating a Unified account on Shibuya using Shibuya Native account A and Shibuya subEVM account A does not mean it will apply to Shiden or Astar.

- If you have a staking balance on the EVM, it must be unstaked first since staked tokens cannot be transferred to the unified balance.

- If you possess custom xcTokens rather than official XCM tokens, they will not be included during the unified account creation process. Please transfer them to an EVM wallet separately. If you do not have xcTokens on Shibuya, please contact @kahori on Discord. She will provide you with official test xcTokens.

- There is a fee (slightly more than 1 SBY) associated with creating a Unified account. If you already have an existing Account ID (substrate), this charge acts more as a deposit than a fee. However, it will not be refunded as it currently cannot be separated once unified.

### 1, Start creating by connecting Native account

Please prepare following

- **Shibuya Native Account**
- **Shibuya subEVM account**
- with no staking balance
- some test xcTokens (to understand better) Please ask a team member if you wish to have testing tokens

Make sure you are connected to the Shibuya test net. You will see a new account icon on the Asset page, you can start from here.

<div style={{textAlign: 'center'}}>
  <img src={guide01} style={{width: 600}} />
  </div>

<div style={{textAlign: 'center'}}>
  <img src={guide02} style={{width: 600}} />
  </div>

### 2, Read the disclaimer

<div style={{textAlign: 'center'}}>
  <img src={guide03} style={{width: 450}} />
  </div>

### 3, Connect to EVM wallet

It is recommended to use a new wallet however if you wish to use an existing EVM account. please make sure that you unstake all tokens first.

<div style={{textAlign: 'center'}}>
  <img src={guide04} style={{width: 450}} />
  </div>

### 4, Add your account name

It will be on-chain and we are working on adding NFT as an icon of the account at this moment and will be ready when it’s available on Astar.

<div style={{textAlign: 'center'}}>
  <img src={guide05} style={{width: 450}} />
  </div>

### 5, Send xcTokens

xcTokens do not live in an EVM account balance. Before unifying the balance, the portal will send xcTokens to a Unified account. When testing the environment, most of you may not have xcTokens. Please find a team member and ask for this purpose. You will be asked to sign an EVM transaction for this.

<div style={{textAlign: 'center'}}>
  <img src={guide06} style={{width: 450}} />
  </div>

### 6, Check everything is okay. Press the button and your accounts will be unified

### 7, To experience what happened to your account

- Check your SBY tokens balances are now all together.

- Check your xcTokens ERC tokens are now available when you connect with your substrate wallet.

- You can also send xcTokens from this unified Substrate account.

- We are working on a wallet modal to create Unified Account section, you will be able to choose unified accounts without selecting a specific wallet.
