---
sidebar_position: 5
---

# Tools

## OpenBrush

[OpenBrush] is a library for smart contract development on ink! maintained by the [Brushfam] team. It intends to be like OpenZeppellin for Solidity.

It provides standard contracts based on [PSPs], as well as useful contracts and Rust macros to help you build ink! smart contracts.

## Sol2Ink
[Sol2ink] is another tool maintained by the [Brushfam] team, used for easy migration from Solidity to ink! and Rust that helps projects and teams migrate their smart contracts from popular Solidity to Polkadot's ink!.

How it works? You simply input your code to Solidity and in a few seconds get your ink! smart contract. Since the code was produced automatically, it is always good idea to check it by a human (and build it) to find some potential flaws, but the hardest part (rewriting the code) is already done!

## Typechian-Polkadot
[Typechain-Polkadot] is also one of [Brushfam] maintaned tools, created to improve developers’ experience with frontend usage of ink! smart contracts and also a deployment and integration testing by providing typescript types for ink! smart contracts.

This tool can build your contracts, then create the artifcats and based on that, it will create the typescript classes which you can integrate in your UI or typescript tests.

## `parity-common`

[`parity-common`](https://github.com/paritytech/parity-common) is a collection of crates that you can use in your ink! contracts.

It offers all Ethereum types and is really useful if you want to port solidity code to ink!.

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs

[Brushfam]: https://www.brushfam.io/
[Sol2Ink]: https://github.com/727-Ventures/sol2ink
[Typechain-Polkadot]: https://github.com/727-Ventures/typechain-polkadot
