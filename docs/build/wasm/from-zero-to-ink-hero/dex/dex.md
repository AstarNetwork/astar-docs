---
sidebar_position: 1
---
# Overview

This tutorial is suitable for developers with **advanced** knowledge of ink! and **intermediate** understanding of Rust. Using the examples provided, you will build and deploy a full implementation of Uniswap V2 DEX.

# Prerequisites

Experience gained from following the previous guides will be beneficial for this tutorial.

| Tutorial                                                                   | Difficulty                     |
|----------------------------------------------------------------------------|--------------------------------|
| [Your First Flipper Contract](../flipper-contract/flipper-contract.md)              | Basic ink! -  Basic Rust       |
| [NFT contract with PSP34](../nft/nft.md)              | Intermediate ink! -  Basic Rust       |          

In addition to:
- An already provisioned [ink! environment](/docs/build/environment/ink_environment.md).
- Intermediate knowledge of Rust. Visit [here for more information about Rust](https://www.rust-lang.org/learn).
- General knowledge of AMMs & [Uniswap V2](https://docs.uniswap.org/contracts/v2/overview) (as this tutorial will focus on implementation).

### What Will We Be Doing?
In this tutorial we will build and deploy the following Solidity implementations of Uniswap V2 Core, using ink!
- [Pair](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2Pair.sol)
- [Factory](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2Factory.sol)

### What Version of Ink! Will I Need?
[ink! 3.4.0 (latest)](https://github.com/paritytech/ink/tree/v3.4.0)   
[Openbrush 2.3.0 (latest)](https://github.com/Supercolony-net/openbrush-contracts/tree/v2.3.0)

### What Topics Will Be Covered in This Guide?
- The full implementation of Uniswap V2 DEX.
- File structure for a project composed of several contracts.
- Trait and generic implementations in separate files.
- Using safe math in Rust/ink!
- Porting Solidity to ink!
- Using modifiers and creating custom modifiers.
- Using cross-contract calls.

## Summary
[I. File & Folder structure of the project](./Structure/file-structure.md)    
[II. Pair contract](./Pair/psp22.md)
[III. Factory contract](./Factory/getters.md)