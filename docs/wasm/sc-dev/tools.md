---
sidebar_position: 5
---

# Tools

## Swanky Suite
[Swanky Suite](./swanky.md) aims to be a "all-in-one" tool for WASM smart contract developers. It is based on existing tools like cargo contract CLI and Polkadot.JS but extending with many additional features such as generating a new smart contract environment based on example projects and providing an instant finality node (Swanky node) which will shorten the contract development lifecycle. [Swanky Suite](./swanky.md) is the tool that enables all existing (and future) Web3 developers to have an equal experience compared to EVM dev tooling.

## OpenBrush

[OpenBrush] is a library for smart contract development on ink! maintained by the [Brushfam] team. It intends to be like OpenZeppellin for Solidity. It provides standard contracts based on [PSPs], as well as useful contracts and Rust macros to help you build ink! smart contracts.

## Sol2Ink
[Sol2ink] is another tool maintained by the [Brushfam] team, used for easy migration from Solidity to ink! and Rust that helps projects and teams migrate their smart contracts from popular Solidity to Polkadot's ink!.

How it works? You simply input your code to Solidity and in a few seconds get your ink! smart contract. Since the code was produced automatically, it is always good idea to check it by a human (and build it) to find some potential flaws, but the hardest part (rewriting the code) is already done!

## Typechain-Polkadot
[Typechain-Polkadot] is also one of [Brushfam] maintained tools, created to improve developers’ experience with frontend usage of ink! smart contracts and also deployment and integration testing by providing typescript types for ink! smart contracts.

This tool can build your contracts, then create the artifacts and based on that, it will create the typescript classes which you can integrate in your UI or typescript tests.

## Solang
[Solang](https://solang.readthedocs.io/en/latest/) is a Solidity Compiler for Solana and Substrate. Using Solang, you can compile smart contracts written in Solidity for Solana and [Parity Substrate](https://substrate.io/). It uses the [llvm](https://www.llvm.org/) compiler framework to produce WebAssembly (WASM) or BPF contract code. As result, the output is highly optimized, which saves you in gas costs or compute units.

## `parity-common`

[`parity-common`](https://github.com/paritytech/parity-common) is a collection of crates that you can use in your ink! contracts.

It offers all Ethereum types and is really useful if you want to port solidity code to ink!.

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs

[Brushfam]: https://www.brushfam.io/
[Sol2Ink]: https://github.com/727-Ventures/sol2ink
[Typechain-Polkadot]: https://github.com/727-Ventures/typechain-polkadot
