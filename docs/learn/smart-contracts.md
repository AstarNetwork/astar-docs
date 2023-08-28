---
sidebar_position: 9
---
# Smart Contracts

## Overview

Astar is a platform for smart contracts deployment.  Developers can create and deploy smart contracts on Astar Network using a variety of programming languages, including Solidity, which is compatible with Ethereum smart contracts or ink!, a Rust-based smart contract language for Polkadot ecosystem. This compatibility ensures a seamless transition for developers from other blockchain ecosystems, fostering interoperability and encouraging the adoption of Astar Network. 


Astar Network employs a high-performance consensus mechanism that ensures fast and efficient contract execution. The network utilizes a unique combination of proof-of-stake (PoS) and proof-of-work (PoW) consensus algorithms, enhancing security while maintaining scalability. This architecture enables Astar Network to handle a high volume of smart contract transactions, making it suitable for decentralized applications (DApps) with demanding computational requirements.

Furthermore, Astar Network incorporates a comprehensive set of tools and development frameworks to facilitate the creation, testing, and deployment of smart contracts. These include a robust software development kit (SDK), detailed developer documentation, and a user-friendly integrated development environment (IDE). These resources empower developers to write secure and efficient smart contracts, reducing the risk of vulnerabilities and ensuring the reliability of decentralized applications.


## WebAssembly smart contracts
Astar & Shiden runtimes are based on Substrate, and both networks incorporate `pallet-contracts`, a sandboxed environment used to deploy and execute WebAssembly smart contracts. Any language that compiles to Wasm may be deployed and run on this Wasm Virtual Machine, however, the code should be compatible with the `pallet-contracts` [API](https://docs.rs/pallet-contracts/latest/pallet_contracts/api_doc/trait.Current.html).

To avoid unnecessary complexity, and writing boilerplate code, the most appropriate method of building will involve the use of an eDSL specifically targeting `pallet-contracts`, such as [ink!] (based on Rust), or [ask!] (based on AssemblyScript), or possibly others as the ecosystem grows.

After compilation, a Wasm blob can then be deployed and stored on-chain.

## Ethereum Virtual Machine smart contracts
Astar EVM implementation is based on the Substrate Pallet-EVM, and we get a full Rust-based EVM implementation. 
Smart contracts on Astar EVM can be implemented using Solidity, Vyper, and any other language which can compile smart contracts to EVM-compatible bytecode. Pallet-EVM aims to provide a low-friction and secure environment for the development, testing, and execution of smart contracts that is compatible with the existing Ethereum developer toolchain.

## Learn more


