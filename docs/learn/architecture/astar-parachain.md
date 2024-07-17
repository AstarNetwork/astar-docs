---
title: Astar Parachain
sidebar_position: 1
---

# Overview
If you are already building on Polkadot you will not need to go over the sections covering Substrate and how to create a Runtime, but it will be helpful for you to understand the environment, terminology and how to leverage Polkadot's highly interoperable environment.

Polkadot is a multi-chain environment which enables specialized blockchains (called Parachains) to communicate with each other in a secure, trustless environment.

Astar is a parachain connected to the Polkadot Relay chain, specialized for:
* Executing all types of smart contracts.
* Providing a hybrid EVM + Wasm environment with interoperability.
* Incentivizing ecosystem innovation and providing basic income for dApp developers.
* Seamlessly aggregating features or assets from parachains in the ecosystem. 

## What is Polkadot
To get started, let's kick it off with two short videos that do a very good job at explaining some core concepts around Polkadot. First, watch Bill Laboon, Director of Education and Support at the Web3 Foundation, explain the basics of Polkadot.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/29Ty-VTDnh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Ok, you can’t learn it all in one minute. But how about in 5 minutes? Have a look at this excellent video from DeFi Teller, explaining how Polkadot works.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/BQ60bTU1bPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How the Relay Chain works
The Polkadot network uses a sharded model where shards - called "parachains", allow transactions to be processed in parallel instead of sequentially. Each parachain in the network has a unique state transition function. Polkadot is a Relay Chain acting as the main chain of the system. 

Parachains construct and propose blocks to validators on the Relay Chain, where the blocks undergo rigorous availability and validity checks before being added to the finalized chain. As the Relay Chain provides the security guarantees, collators - full nodes of these parachains - don't have any security responsibilities, and thus do not require a robust incentive system. This is how the entire network stays up to date with the many transactions that take place.

## Substrate 
Based on Polkadot's design, as long as a chain's logic can compile to Wasm and adheres to the Relay Chain API, then it can connect to the Polkadot network as a parachain.
However, the majority of parachains today are built using [Substrate](https://substrate.io/) because Substrate-based chains are easy to integrate into Polkadot or Kusama to become a parachain. Essentially, Substrate is the SDK which can be used to build parachains and Polkadot is the means of securing the chains and allowing them to communicate with each other.

Astar Network is built with Substrate and inherints many Substrate features, such as Accounts. 

At a high level, a Substrate node provides a layered environment with two main elements:
1. An outer node that handles network activity such as peer discovery, managing transaction requests, reaching consensus with peers, and responding to RPC calls.
2. A runtime that contains all of the business logic for executing the state transition function of the blockchain.
Read more about [Architecture](https://docs.substrate.io/fundamentals/architecture/).

### FRAME
FRAME is an acronym for Framework for Runtime Aggregation of Modularized Entities which encompasses a significant number of modules and support libraries that simplify runtime development. In Substrate, these modules (called pallets) offer customizable business logic for different use cases and features that you might want to include in your runtime. For example, there are pallets that provide a framework of business logic for staking, consensus, governance, and other common activities.
Read more about [Runtime development](https://docs.substrate.io/fundamentals/runtime-development/)


## Where Do Smart Contracts Execute?
The Polkadot runtime does not support smart contracts. Smart contracts require a Virtual Machine (VM) environment where contracts can be executed, and the most well-known and widely supported platform being the Ethereum Virtual Machine (EVM). Substrate FRAME contains modules that support Wasm smart contract execution, as well as EVM.

### Ethereum Virtual Machine (EVM)
The Ethereum Virtual Machine (EVM) is a virtual computer with components that enable Ethereum network participants to store data and agree on the state of that data. On a Substrate-based blockchain, the core responsibilities of the EVM are implemented in the EVM pallet, that's responsible for executing Ethereum contract bytecode written in a high level language like Solidity. Astar EVM provides a fully Ethereum Virtual Machine compatible platform, which you can learn more about in the [EVM chapter](/docs/build/evm). 

### Substrate Virtual Machine for Wasm Contracts
Substrate also ships with a module for smart contracts, called `pallet-contracts`. If a parachain is developed on Substrate it can easily add smart contract functionality by including this pallet. Astar supports this Polkadot Native approach to smart contracts, and you can learn more in the [Wasm chapter](/docs/build/wasm). 



