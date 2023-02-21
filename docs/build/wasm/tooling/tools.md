---
sidebar_position: 3
---

# Other

## Sol2Ink
[Sol2ink] is another tool maintained by the [BrushFam] team, used for easy migration of smart contracts from Solidity to ink! and Rust, that helps developers migrate smart contracts from EVM platforms, to Polkadot.

How does it work? Simply input your Solidity code, and in a few seconds Sol2Ink will convert it to an ink! smart contract. Since the contracts are transcoded automatically, it is then a good idea to check them over (and build them) to see if they still perform as expected. Even still, most of the heavy lifting will be done for you, using the Sol2Ink tool.

## Typechain-Polkadot
[Typechain-Polkadot] is another [BrushFam]-maintained tool, designed to improve developers’ experience with frontend usage of ink! smart contracts, and deployment and integration testing by providing TypeScript types for ink! smart contracts.

This tool will build contracts, create the artifcats, and then create the TypeScript classes which can then be integrated into your UI or TypeScript tests.

## Solang
[Solang](https://solang.readthedocs.io/en/latest/) is a Solidity Compiler for Solana and Substrate. Using Solang, you can compile smart contracts written in Solidity for Solana and [Parity Substrate](https://substrate.io/). Solang uses the [llvm](https://www.llvm.org/) compiler framework to produce WebAssembly (Wasm) or BPF contract code. As result, the output is highly optimized, which saves you in gas costs or compute units.

## parity-common

[`parity-common`](https://github.com/paritytech/parity-common) is a collection of crates that you can use in your ink! contracts.

It offers all Ethereum types and is useful if you would like to port Solidity code to ink!.

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs

[Brushfam]: https://www.brushfam.io/
[Sol2Ink]: https://github.com/727-Ventures/sol2ink
[Typechain-Polkadot]: https://github.com/727-Ventures/typechain-polkadot
