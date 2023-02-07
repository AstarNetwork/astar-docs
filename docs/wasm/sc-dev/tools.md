---
sidebar_position: 5
---

# Tools

## Swanky Suite
[Swanky Suite](./swanky.md) aims to be an "all-in-one" tool for Wasm smart contract developers. It is based on existing tools like` cargo contract CLI` and `polkadot.js` but extending their functionality with many additional features such as smart contract templates, and an instant finality (Swanky) node,  which will reduce the contract development lifecycle. [Swanky Suite](./swanky.md) is a tool that provides Web3 developers with a development experience that's more in-line with what they're familiar with, compared to popular tooling for EVM.

## OpenBrush

[OpenBrush] is a library for smart contract development on ink! maintained by the [BrushFam] team, and is inspired by OpenZeppellin for Solidity.

Openbrush provides standard contracts based on [PSPs], as well as other useful contracts and Rust macros that help developers build ink! smart contracts.


## Sol2Ink
[Sol2ink] is another tool maintained by the [BrushFam] team, used for easy migration from Solidity to ink! and Rust that helps projects and teams migrate their smart contracts from popular Solidity to Polkadot's ink!.

How does it work? Simply input your Solidity code, and in a few seconds Sol2Ink will convert it to an ink! smart contract. Since contracts are transcoded automatically, it is then a good idea to check it over (and build it) to see if it still performs as expected. Even still, most of the work will have already been done for you, using the Sol2Ink tool.

## Typechain-Polkadot
[Typechain-Polkadot] is another [BrushFam]-maintained tools, designed to improve developers’ experience with frontend usage of ink! smart contracts, and deployment and integration testing by providing typescript types for ink! smart contracts.

This tool will build contracts, create the artifcats, and then create the typescript classes which can then be integrated into your UI or typescript tests.

## Solang
[Solang](https://solang.readthedocs.io/en/latest/) is a Solidity Compiler for Solana and Substrate. Using Solang, you can compile smart contracts written in Solidity for Solana and [Parity Substrate](https://substrate.io/). It uses the [llvm](https://www.llvm.org/) compiler framework to produce WebAssembly (Wasm) or BPF contract code. As result, the output is highly optimized, which saves you in gas costs or compute units.

## `parity-common`

[`parity-common`](https://github.com/paritytech/parity-common) is a collection of crates that you can use in your ink! contracts.

It offers all Ethereum types and is useful if you want to port Solidity code to ink!.

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs

[Brushfam]: https://www.brushfam.io/
[Sol2Ink]: https://github.com/727-Ventures/sol2ink
[Typechain-Polkadot]: https://github.com/727-Ventures/typechain-polkadot
