---
sidebar_position: 1
---

# Prerequisites
This tutorial targets developers with an **advanced** level in ink! and an **intermediate** level in Rust.

| Tutorial                                                                   | Difficulty                     |
|----------------------------------------------------------------------------|--------------------------------|
| [Your First Flipper Contract](../flipper-contract/flipper-contract.md)              | Basic ink! -  Basic Rust       |
| [NFT contract with PSP34](../nft/nft.md)              | Intermediate ink! -  Basic Rust       |          

# To follow this tutorial you will need:
- To [set up your ink! environment](../../xvm_wasm/setup_your_ink_environment.md).
- To have knowledge about AMM & [Uniswap V2 implementation](https://docs.uniswap.org/contracts/v2/overview) (as this tutorial will focus on implementation).

## What will we do?
In this tutorial we will implement in ink! the follow contracts from the Solidity implementation of Uniswap V2 Core:
- [Pair](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2Pair.sol)
- [Factory](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2Factory.sol)

## What will we use?
[ink! 3.4.0 (latest)](https://github.com/paritytech/ink/tree/v3.4.0)   
[Openbrush 2.3.0 (latest)](https://github.com/Supercolony-net/openbrush-contracts/tree/v2.3.0)

## What will you learn?
- Full implementation of Uniswap V2 DEX.
- File structure for a several contracts project.
- Trait and generic implementation in separate files.
- Safe math in Rust/ink!.
- Porting Solidity to ink!.
- Use modifiers and create custom ones.
- Cross-contract calls.

## Summary
[I. File & Folder structure of the project](./Structure/file-structure.md)    
[II. Pair contract](./Pair/psp22.md)
[III. Factory contract](./Factory/getters.md)