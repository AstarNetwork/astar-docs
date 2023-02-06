---
sidebar_position: 2
---

# Polkadot
To get started on your Astar hacker journey it is useful to understand what is Polkadot and its's relation to Astar. If you are building on Astar you do not need to know what is Substrate and how to create a Runtime but it will be helpful to understand the environment and how you can leverage this huge network of blockchains that you have at your grasp.

Polkadot is a multi-chain environment which enables specialized blockchains (called Parachains) to communicate with each other in a secure, trust-free environment.

Astar is a blockchain connected to Polkadot Relay chain, specialized for:
* running smart contracts
* running and interconnecting smart contract virtual machines
* providing basic income for dApp developers
* using features of other parachains in the ecosystem

## Introduction
To get started, let's kick it off with two short videos that do a very good job at explaining some core concepts around Polkadot. First, watch Bill Laboon, Director of Education and Support at the Web3 Foundation, explain the basics of Polkadot.

## Blockchain Basics
A blockchain is a decentralized ledger that records information in a sequence of blocks. The information contained in a block is an ordered set of instructions that might result in a change in state.

In a blockchain network, individual computers—called nodes—communicate with each other to form a decentralized peer-to-peer (P2P) network. There is no central authority that controls the network and, typically, each node that participates in block production stores a copy of the blocks that make up the canonical chain.

In most cases, users interact with a blockchain by submitting a request that might result in a change in state, for example, a request to change the owner of a file or to transfer funds from one account to another. These transactions requests are gossiped to other nodes on the network and assembled into a block by a block author. To ensure the security of the data on the chain and the ongoing progress of the chain, the nodes use some form of consensus to agree on the state of the data in each block and on the order of transactions executed. [Read more...](https://docs.substrate.io/fundamentals/blockchain-basics/)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/29Ty-VTDnh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Ok, you can’t learn it all in one minute. But how about in 5 minutes? Have a look at this excellent video from DeFi Teller, explaining how Polkadot works.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/BQ60bTU1bPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How Relay Chain Works
The Polkadot network uses a sharded model where shards - called "parachains", allow transactions to be processed in parallel instead of sequentially. Each parachain in the network has a unique state transition function. Polkadot is a Relay Chain acting as the main chain of the system. 

Parachains construct and propose blocks to validators on the Relay Chain, where the blocks undergo rigorous availability and validity checks before being added to the finalized chain. As the Relay Chain provides the security guarantees, collators - full nodes of these parachains - don't have any security responsibilities, and thus do not require a robust incentive system. This is how the entire network stays up to date with the many transactions that take place.

## Substrate 
Based on Polkadot's design, as long as a chain's logic can compile to Wasm and adheres to the Relay Chain API, then it can connect to the Polkadot network as a parachain.
However, majority of parachains today are built using [Substrate](https://substrate.io/) because Substrate-based chains are easy to integrate into Polkadot or Kusama to become a parachain. Essentially, Substrate is the SDK with which you can build parachains and Polkadot is the means of securing the chains and allowing them to communicate with each other.

At a high level, a Substrate node provides a layered environment with two main elements:
* An outer node that handles network activity such as peer discovery, managing transaction requests, reaching consensus with peers, and responding to RPC calls.
* A runtime that contains all of the business logic for executing the state transition function of the blockchain.
Read more on [Architecture](https://docs.substrate.io/fundamentals/architecture/)

### FRAME
FRAME is an acronym for Framework for Runtime Aggregation of Modularized Entities and it encompasses a significant number of modules and support libraries that simplify runtime development. In Substrate, these modules (called pallets) offer customizable business logic for different use cases and features that you might want to include in your runtime. For example, there are pallets that provide a framework of business logic for staking, consensus, governance, and other common activities.
Read more on [Runtime development](https://docs.substrate.io/fundamentals/runtime-development/)

## Applications running on a blockchain
Applications that run on a blockchain—often referred to as decentralized applications or dApps—are typically web applications that are written using front-end frameworks but with backend smart contracts for changing the blockchain state.

A **smart contract** is a program that runs on a blockchain and executes transactions on behalf of users under specific conditions. Developers can write smart contracts to ensure that the outcome of programmatically-executed transactions is recorded and can't be tampered with. Yet, with smart contracts alone, developers don't have access to some underlying blockchain functionality—such as the consensus, storage, or transaction layers—and instead, abide by a chain's fixed rules and restrictions. Smart contract developers often accept these limitations as a tradeoff that enables faster development time with fewer core design decisions to make.
## Where to run Smart contract
Polkadot runtime does not support smart contracts. The smart contracts require Virtual Machine (VM) where contracts are executed. The most known VM is Ethereum Virtual Machine (EVM). Substrate FRAME also contains a modules to support wasm Smart Contract execution and EVM.
### Ethereum Virtual Machine (EVM)
The Ethereum Virtual Machine (EVM) is a virtual computer with the components that enable Ethereum network participants to store data and agree on the state of the data. For a Substrate-based blockchain, the core responsibilities of the EVM are implemented in the EVM pallet. The EVM pallet is responsible for executing Ethereum contract bytecode for smart contracts that are written in a high level language like Solidity, then compiled to EVM bytecode.

### Substrate Virtual Machine for Wasm contracts
Substrate also ships with a module for smart contracts, this module is called `pallet-contracts`. If a parachain is developed in Substrate it can easily add smart contract functionality by including this pallet.



