---
sidebar_position: 9
---
# Smart Contracts

## Overview

Astar Network supports smart contract deployment on the EVM, with Solidity contracts and standard EVM tooling (Hardhat, Foundry).

Astar Network is a Polkadot parachain. Block production is handled by collators; finality is inherited from the Polkadot Relay Chain's nominated proof-of-stake validators.

:::info
Wasm smart contracts have been wound down in October 2026.
:::

## Ethereum Virtual Machine smart contracts
Astar EVM implementation is based on the Substrate Pallet-EVM, and we get a full Rust-based EVM implementation. 
Smart contracts on Astar EVM can be implemented using Solidity, Vyper, and any other language which can compile smart contracts to EVM-compatible bytecode. Pallet-EVM aims to provide a low-friction and secure environment for the development, testing, and execution of smart contracts that is compatible with the existing Ethereum developer toolchain.
