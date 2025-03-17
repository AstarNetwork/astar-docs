---
tags:
    - astar
    - devs
    - intro
    - soneium
    - users
description: Astar Collective global architecture
---

import Figure from '/src/components/figure'

# Astar Collective Architecture

## Introduction

Before you get started on your journey towards becoming an **Astar Collective hacker**, it will be beneficial to know about what **Polkadot** and **Ethereum** are, because Astar Collective connects to both, and each have their own set of benefits and limitations.

<Figure caption="Astar Collective Architecture" src={require('/docs/learn/architecture/img/fig4.jpg').default } width="100%" /> 

:::info[Polkadot & Ethereum]

Some highlights on the Polkadot parachain side are dApp Staking, ink! smart contracts, cross-chain messaging (XCM), and forkless upgradability, and on the Ethereum layer 2 side are the highest levels of EVM equivalence, shared liquidity across layer 2 networks, and access to the largest pool of developers in the blockchain industry that we can tailor our products for, on-demand.

:::

For now, let's go over some basics that apply to all blockchains whether they are sovereign layer 1 networks, or rely on another blockchain such as the **Polkadot Relay Chain** for shared security and interoperability. 

## Blockchain Basics
A blockchain is a decentralized **ledger** that records information in a sequence of **blocks**. The information contained in a block is an ordered set of instructions that may or may not result in a change in state.

In a blockchain network, individual computers—called **nodes**—communicate with each other to form a decentralized **peer-to-peer** (P2P) network. There is no central authority that controls the network and, typically, each node that participates in block production stores a copy of the blocks that make up the **canonical chain**.

In most cases, users interact with a blockchain by submitting a request that might result in a change in state, for example, a request to change the owner of a file or to transfer funds from one account to another. These transactions requests are gossiped to other nodes on the network and assembled into a block by a block author. To ensure the security of the data on the chain and the ongoing progress of the chain, the nodes use some form of consensus to agree on the state of the data in each block and on the order of transactions executed. 

:::tip[Learn more]

Read more about blockchain basics → [**here**](https://docs.substrate.io/fundamentals/blockchain-basics/).

:::

## Applications Running on a Blockchain
Applications that run on a **blockchain**, often referred to as decentralized applications or **dApps**, are typically web applications written using **front-end frameworks**, but powered by smart contracts on the **backend**, to affect the blockchain state.

A **smart contract** is a program that runs on a blockchain and executes transactions on behalf of users under specific conditions. Developers can write smart contracts to ensure that the outcomes of programmatically-executed transactions are recorded, and can't be tampered with. Yet, smart contracts operate in a sandboxed environment, where developers don't have access to underlying blockchain functionality, such as  consensus, storage, or transaction layers, and instead, abide by a chain's fixed rules and restrictions. Smart contract developers often accept these limitations as a tradeoff that shortens the development lifecycle, by avoiding having to make core design decisions.

## Ethereum Virtual Machine (EVM)
The **Ethereum Virtual Machine** (EVM) is a virtual computer with components that enables  network participants (not necessarily on Ethereum) to store data and agree on the state of that data. **Smart contracts** run on the EVM, and most Layer 1 blockchains support an **EVM-compatible** virtual machine environment. 

:::info[EVM in Astar Collective]

[**Astar Parachain**](/docs/learn/architecture/astar-parachain.md) and [**Soneium**](/docs/learn/architecture/soneium.md) both support EVM-compatible environments.

:::