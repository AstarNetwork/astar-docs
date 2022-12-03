# How to verify a Solidity smart contract on Blockscout

## TL;DR

Blockscout is the primary block explorer for Astar EVM. Verifying a smart contract on Blockscout makes the contract source code becomes publicly available and verifiable, which creates transparency and trust in the community. Also, contract verification on Blockscout is mandatory for dApps to be eligible for dApp Staking and earn the basic income from the network.

In this cookbook, we will guide you through the process of verifying a smart contract on Blockscout, covering general smart contracts and special cases with OpenZepplin smart contracts.

---

## What is Blockscout

Blockscout is a block explorer that provides a comprehensive, easy-to-use interface for users to search transactions, view accounts, and balances, and for devs to verify smart contracts and inspect transactions on EVM (Ethereum Virtual Machine).

Blockscout is the primary block explorer for Astar EVM.

## Why should I verify my smart contract on Blockscout

Verifying a smart contract on Blockscourt makes the contract source code becomes publicly available and verifiable, which creates transparency and trust in the community. 

Also, contract verification on Blockscout is mandatory for dApps to be eligible for dApp Staking and earn the basic income from the network.

---

## Case 1: verifying smart contracts without OpenZepplin-related source contracts

Due to compiler constraints, contracts **with OpenZeppelin-related source contracts** have different verification methods to contracts **without OpenZeppelin-related source contracts.**

In this section, we will go through the process of verifying a smart contract **without OpenZeppelin-related source contracts.**

In the previous cookbook, we went through the process of using Remix IDE to deploy a smart contract on Astar EVM. And we will start from there.

[How to use Remix IDE to deploy an on-chain storage contract on Astar EVM | Astar Docs](https://docs.astar.network/docs/builder-guides/Use%20Astar%20Features/How%20to%20use%20Remix%20IDE%20to%20deploy%20an%20on-chain%20storage)

- Copy the deployed contract address under the “Deployed Contracts” section on the “DEPLOY & RUN TRANSACTIONS” page

![Untitled](img-verification-cookbook/Untitled.png)

- Search for the contract on Blockscout and click “Verify and Publish” under the “Code” page
    
    ![Untitled](img-verification-cookbook/Untitled%201.png)
    
- Choose “Via standard input JSON”
    
    ![Untitled](img-verification-cookbook/Untitled%202.png)
    
- Fill in the contact name and Solidity compiler version and upload the standard input JSON file
    - You can find the standard input JSON file under contracts/artifacts/build-info. Please only use the “input” object in the JSON file.
    - You can also find the Solidity compiler version in the same JSON file under “solcVersion”
    
    ![Untitled](img-verification-cookbook/Untitled%203.png)
    
- Click “Verify & Publish”, then you are all set!
    
    ![Untitled](img-verification-cookbook/Untitled%204.png)
    

---

## Case 2: verifying smart contracts with OpenZepplin-related source contracts

Due to compiler constraints, contracts **with OpenZeppelin-related source contracts** have different verification methods to contracts **without OpenZeppelin-related source contracts.**

In this section, we will go through the process of verifying a smart contract **with OpenZeppelin-related source contracts** using **Flattener** plugin. 

I have already deployed an ERC20 token contract using OpenZepplin library import, and I will demonstrate how to verify it on Blockscout using **Flattener** plugin in Remix IDE.

- Install **Flattener** plugin in the “PLUGIN MANAGER**”**

![Untitled](img-verification-cookbook/Untitled%205.png)

- Use **Flattener** plugin to flatten the ERC20 contract deployed

![Untitled](img-verification-cookbook/Untitled%206.png)

- Go to Blockscout and on the verification page choose the “Via flattened source code” method

![Untitled](img-verification-cookbook/Untitled%207.png)

- Paste the copied flattened source code from **Flattener** into the “Enter the Solidity Contract Code” field and click “Verify & Publish”. And  you are all set!

![Untitled](img-verification-cookbook/Untitled%208.png)

---

## Reference

[https://docs.blockscout.com/for-users/verifying-a-smart-contract](https://docs.blockscout.com/for-users/verifying-a-smart-contract)
