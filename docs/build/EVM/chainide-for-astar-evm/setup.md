---
sidebar_position: 1
---

import Figure from '/src/components/figure'

# ChainIDE for Astar Environment Setup

> This section provides a detailed explanation of the environment configuration for Astar IDE, which is essential for developing dApp on the Astar blockchain.

### 1. Create a new Astar Project

Visit [ChainIDE](https://chainide.com) and click the "Try Now" button on the front page as shown in the figure below.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE1.png').default} width="100%" />

Here, you will choose your login method, which includes two options: GitHub and Guest. In the tutorial, select GitHub login, as later on, the use of the Sandbox requires users to log in with GitHub.

Click the "New Project" button.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE2.png').default} width="100%" />

A pop-up window will appear. On the left side of the pop-up, select "Astar," and on the right side, choose the corresponding smart contract environment (EVM or WASM). Then, click to create a project using a template.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE3.png').default} width="100%" />

### 2. Configure Wallet

Astar IDE provides support for two smart contract environments: EVM and WASM. EVM is compatible with the Metamask wallet, while WASM supports four wallets: Polkadot Wallet, Sub Wallet, Math Wallet, and Talisman Wallet.

#### 2.1 Wallets Supporting EVM

##### 2.1.1 Metamask (Recommended)

> https://metamask.io/

#### 2.2 Wallets Supporting WASM

##### 2.2.1 Polkadot Wallet (Recommended)

> https://polkadot.js.org/extension/

##### 2.2.2 Sub Wallet

> https://www.subwallet.app/

##### 2.2.3 Math Wallet

> https://mathwallet.org/

##### 2.2.4 Talisman Wallet

> https://www.talisman.xyz/

### 3. Acquiring test tokens

A faucet is the site/place where you can get test tokens. Faucets are available for all Shibuya accounts and empty Astar and Shiden accounts. Use them to make sure your wallet has enough assets to cover the cost of deployment and pay transaction gas

Tutorial on Acquiring Test Tokens: https://docs.astar.network/docs/build/environment/faucet
