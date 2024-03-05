---
title: Architecture
---

import Figure from '/src/components/figure'

# Overview
Before you get started on your journey towards becoming an Astar network hacker, it will be beneficial to know about what Polkadot and Ethereum are, and their relationships to Astar, which we'll cover in the following section. For now, let's go over some basics that apply to all blockchains whether they are sovereign layer 1 networks, or are dependant on a 'parent' chain in the case of the Polkadot Relay Chain, or a lower level of the protocol stack in the case of Ethereum for shared security and interoperability.

<Figure src={require('/docs/learn/architecture/img/fig2.png').default} />

## Blockchain Basics
A blockchain is a decentralized ledger that records information in a sequence of blocks. The information contained in a block is an ordered set of instructions that may or may not result in a change in state.

In a blockchain network, individual computers—called nodes—communicate with each other to form a decentralized peer-to-peer (P2P) network. There is no central authority that controls the network and, typically, each node that participates in block production stores a copy of the blocks that make up the canonical chain.

In most cases, users interact with a blockchain by submitting a request that might result in a change in state, for example, a request to change the owner of a file or to transfer funds from one account to another. These transactions requests are gossiped to other nodes on the network and assembled into a block by a block author. To ensure the security of the data on the chain and the ongoing progress of the chain, the nodes use some form of consensus to agree on the state of the data in each block and on the order of transactions executed. [Read more...](https://docs.substrate.io/fundamentals/blockchain-basics/)

## Applications Running on a Blockchain
Applications that run on a blockchain, often referred to as decentralized applications or dApps, are typically web applications written using front-end frameworks, but powered by smart contracts on the backend, to affect the blockchain state.

A **smart contract** is a program that runs on a blockchain and executes transactions on behalf of users under specific conditions. Developers can write smart contracts to ensure that the outcomes of programmatically-executed transactions are recorded, and can't be tampered with. Yet, smart contracts operate in a sandboxed environment, where developers don't have access to underlying blockchain functionality, such as  consensus, storage, or transaction layers, and instead, abide by a chain's fixed rules and restrictions. Smart contract developers often accept these limitations as a tradeoff that shortens the development lifecycle, by avoiding having to make core design decisions.

## Ethereum Virtual Machine (EVM)
The Ethereum Virtual Machine (EVM) is a virtual computer with components that enables  network participants (not necessarily on Ethereum) to store data and agree on the state of that data. Smart contracts run on the EVM, and most Layer 1 blockchains support an EVM-compatible virtual machine environment. Astar Parachain and Astar zkEVM both support EVM-compatible environments.