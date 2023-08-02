---
sidebar_position: 1
---

# Prerequisites
This tutorial is suitable for developers with **intermediate** knowledge of ink! and basic understanding of Rust. Previous experience compiling and deploying an ink! smart contract will be beneficial, such as from following the previous Flipper and NFT contract tutorials:

| Tutorial                                                                   | Difficulty                     |
|----------------------------------------------------------------------------|--------------------------------|
| [Your First Flipper Contract](../flipper-contract/flipper-contract.md)              | Basic ink! -  Basic Rust       |
| [NFT contract with PSP34](../nft/nft.md)              | Intermediate ink! -  Basic Rust       |          


## How to Start
To follow this tutorial you will need:
- To [set up your ink! environment](/docs/build/environment/ink_environment.md).
- Basic Rust knowledge. [Learn Rust](https://www.rust-lang.org/learn)
- Prior knowledge about ERC20 is helpful but not mandatory.

## What will be used?
- [ink! v4.1.0](https://github.com/paritytech/ink/tree/v4.0.0)   
- [Openbrush 3.1.0](https://github.com/727-Ventures/openbrush-contracts/tree/3.0.0)
- cargo-contract 2.1.0
  
## What will you learn?
- Creation of a fungible token with PSP22 standard.
- Use Openbrush wizard to create PSP22 smart contract.
- Use Rust trait and implement it in same file.
- Calling cross contract method with Builder.
- ink! e2e test for cross contract calls.

## Summary
[I. Contract Setup](./manic-setup.md)   
[II. ManicMinter Contract](./manic-contract.md)   
[III ManicMinter e2e Test](./manic-e2e.md)   
