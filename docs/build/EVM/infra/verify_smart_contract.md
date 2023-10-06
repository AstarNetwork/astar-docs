---
sidebar_position: 5
---

import Figure from '/src/components/figure'

# How to verify a Solidity smart contract on Blockscout

## TL;DR

Blockscout is the primary block explorer for Astar EVM. Verifying a smart contract on Blockscout makes the contract source code publicly available and verifiable, which creates transparency and trust in the community. Also, contract verification on Blockscout is mandatory for dApps to be eligible for dApp Staking and earn the basic income from the network.

In this guide, we will walk you through the process of verifying a smart contract on Blockscout, covering general smart contracts and special cases with OpenZepplin smart contracts.

---

## What is Blockscout

Blockscout is a block explorer that provides a comprehensive, easy-to-use interface for users to search transactions, view accounts, balances, and for devs to verify smart contracts and inspect transactions on EVM (Ethereum Virtual Machine).

Blockscout is the primary block explorer for Astar EVM.

## Why should I verify my smart contract on Blockscout

Verifying a smart contract on Blockscout makes the contract source code becomes publicly available and verifiable, which creates transparency and trust in the community.
Also, contract verification on Blockscout is mandatory for dApps to be eligible for dApp Staking and earn the basic income from the network.

---

## Examples
### Example 1: verifying smart contracts without OpenZepplin source contracts

Due to compiler constraints, contracts **with OpenZeppelin-related source contracts** have different verification methods to contracts without.
In this section, we will go through the process of verifying a smart contract **without OpenZeppelin-related source contracts.** 
In the previous guide, we went through the process of using Remix IDE to deploy a smart contract on Astar EVM. Let's start from there:

[How to use Remix IDE to deploy an on-chain storage contract on Astar EVM | Astar Docs](/docs/build/builder-guides/astar_features/use_remix.md)

Copy the deployed contract address under the `Deployed Contracts` section

<Figure src={require('./img/Untitled.png').default } width="100%" />

Search for the contract on Blockscout and click `Verify and Publish` under the `Code` page

<Figure src={require('./img/Untitled1.png').default } width="100%" />
    
Choose `Via standard input JSON`
    
<Figure src={require('./img/Untitled2.png').default } width="100%" />
    
Fill in the contract name and Solidity compiler version and upload the standard input JSON file
- You can find the standard input JSON file under contracts/artifacts/build-info. Only use the `input` object in the JSON file.
- You can also find the Solidity compiler version in the same JSON file under `solcVersion`
    
    <Figure src={require('./img/Untitled3.png').default } width="100%" />
    
- Click “Verify & Publish”, then you are all set!
    
    <Figure src={require('./img/Untitled4.png').default } width="100%" />
    

---

### Example 2: verifying smart contracts with OpenZepplin-related source contracts

Due to compiler constraints, contracts **with OpenZeppelin-related source contracts** have different verification methods to contracts **without OpenZeppelin-related source contracts.** In this section, we will go through the process of verifying a smart contract **with OpenZeppelin-related source contracts** using **Flatten**. 

I have already deployed an ERC20 token contract using OpenZepplin library import, and will demonstrate how to verify it on Blockscout using **Flatten** in Remix IDE.

- Use the **Flatten** function in the context menu to flatten the ERC20 contract deployed. Copy the flattened code.
    <Figure src={require('./img/flatten.jpg').default } width="100%" />

- Go to Blockscout and on the verification page choose the `Via flattened source code` method
    <Figure src={require('./img/Untitled7.png').default } width="100%" />

- Paste the flattened source code from the **Flatten** function output into the `Enter the Solidity Contract Code`”` field and click `“`Verify & Publish`.
    <Figure src={require('./img/Untitled8.png').default } width="100%" />

