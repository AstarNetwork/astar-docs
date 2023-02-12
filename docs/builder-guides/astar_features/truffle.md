---
sidebar_position: 4
---

# How to use Truffle to deploy on Shibuya

## TL;DR

This cookbook gives you a basic idea of how to use Truffle and deploy a simple test smart contract on our Shibuya testnet.

## What is Truffle?

Truffle is a popular development framework for Ethereum based blockchain. It offers a suite of tools that make it easier to develop and deploy smart contracts on the EVM (Ethereum Virtual Machine) blockchain. Some of the key features of Truffle include:

- A suite of development and testing tools, including a code compiler, a testing framework, and a debugger.
- Support for popular programming languages, including Solidity and JavaScript.
- Integration with popular Ethereum wallets, such as MetaMask and Ledger.
- Automated contract deployment and management tools.

Overall, Truffle is designed to make it easier for developers to build and deploy decentralized applications (dApps) on the EVM blockchain.

## Builders Guide
### Step 1: Project Setup

Let’s set up a project folder first. Create a project directory and, then, navigate into that directory:

```bash
mkdir truffleApp
```

```bash
cd truffleApp
```

If you haven’t installed Truffle yet, please do so by running the command below:

```bash
npm install -g truffle
```

We initialize Truffle to create our project:

```bash
truffle init
```

If you see a message like this, then the project is initialized:
<div style={{textAlign: 'center'}}>

![1](img-Truffle-cookbook/1.png)
</div>

Use the following command to install HDWalletProvider. We will use it later:

```bash
npm install @truffle/hdwallet-provider --save
```

---

### Step 2: Start Coding

Now, we have the following file structure:
<div style={{textAlign: 'center'}}>

![2](img-Truffle-cookbook/2.png)
</div>

To begin coding, we need to create a file for our smart contract. Let's call it **HelloShibuya.sol** and put it inside the **contracts** directory:

```jsx
pragma solidity ^0.8.15;

contract HelloShibuya {
   string public greet = "Hello Shibuya!";
}
```

We also need to add a migration file called **1_deploy_contract.js** inside the **migrations** directory:

```jsx
var HelloShibuya = artifacts.require("HelloShibuya");

module.exports = function (deployer) {
    deployer.deploy(HelloShibuya);
};
```

---

### Step 3: Configure Settings

Next we add information for the Shibuya testnet in **truffle-config.js**. 
Use one of Shibuya endpoints provided [here](https://docs.astar.network/docs/quickstart/endpoints/) to fill in your endpoint provider. We use BlastAPI in the example below.

```jsx
require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    shibuya: {
      provider: () => new HDWalletProvider(mnemonic, `https://shibuya.public.blastapi.io`),
      network_id: 81,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      from: "0x(your Shibuya account address)"
    },
    
```

Be aware that we need to declare the mnemonic which is used by **HDWalletProvider** in the **truffle-config.js** file to verify the account supplying funds during contract deployment. We will set the mnemonic as an environment variable in **.env** file in the root directory.

```bash
npm i dotenv
```

```bash
MNEMONIC="(Your secret recovery phase)"
```

You can find your secret recovery phase for your account in Metamask by navigating to **Settings**, **Security & Privacy**, and then **Reveal Secret Recovery Phrase**.

---

### Step 4: Deployment

Finally, we have everything ready. Let's compile the smart contract we made:

```bash
truffle compile
```

```bash
truffle migrate --network shibuya
```

You will see something similar to the image below, which confirms that our smart contract is deployed on Shibuya testnet.
<div style={{textAlign: 'center'}}>

![3](img-Truffle-cookbook/3.png)
</div>

You can also confirm that your smart contract is deployed to Shibuya by looking at the explorer [Subscan](https://shibuya.subscan.io/).

<div style={{textAlign: 'center'}}>

![4](img-Truffle-cookbook/4.png)
</div>

If you have any questions, please feel free to ask us in our [official discord channel](https://discord.gg/GhTvWxsF6S).

---

## Reference

- [Official Document for Truffle](https://trufflesuite.com/docs/)
- [Astar Document for Truffle](https://docs.astar.network/docs/EVM/developer-tooling/#truffle)