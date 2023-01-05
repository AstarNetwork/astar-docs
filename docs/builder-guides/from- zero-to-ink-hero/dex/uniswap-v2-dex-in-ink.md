---
sidebar_position: 1
---

# Prerequisites

This tutorial targets developers with an **advanced** level in ink! and an **intermediate** level in Rust.   
Please follow these tutorials first:

| Tutorial                                                                   | Difficulty                     |
|----------------------------------------------------------------------------|--------------------------------|
| [Your first flipper contract](../flipper-contract/flipper.md)              | Basic ink! -  Basic Rust       |          
|  [full dApp: NFT contract with PSP34 + UI](../flipper-contract/flipper.md) | Intermediate ink! - Basic Rust |

# To follow this tutorial you will need:
- to [set up your ink! environment](../../XVM%20and%20WASM/setup_your_ink_environment.md)
- to have knowledge about AMM & [Uniswap V2 implementation](https://docs.uniswap.org/contracts/v2/overview) (as this tutorial will fucos on implementation)

# What will we do ?

in this tutorial we will implement in ink! the follow contracts from the Solidity implementation of Uniswap V2 Core
- [Pair](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2Pair.sol)
- [Factory](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2Factory.sol)
- [PSP22 (ERC20 equivalent)](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2ERC20.sol)

# What will we use ?

[ink! 3.4.0 (latest)](https://github.com/paritytech/ink/tree/v3.4.0)   
[Openbrush 2.3.0 (latest)](https://github.com/Supercolony-net/openbrush-contracts/tree/v2.3.0)

# What will you learn ?

- Full implementation of Uniswap V2 DEX
- File structure for a several contracts project
- Trait and generic implementation in separate files
- Safe math in Rust/ink!
- Porting Solidity to ink!
- Use modifiers
- Cross-contract calls

# Summary

[I. File & Folder structure of the project](./Structure/file-structure.md)    
[II. Pair contract](./Pair/psp22.md)