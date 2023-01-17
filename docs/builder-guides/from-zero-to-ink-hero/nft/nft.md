---
sidebar_position: 1
---

# Prerequisites

This tutorial targets developers with an **intermediate** level in ink! and Rust.   
Please follow this tutorial first:

| Tutorial                                                                   | Difficulty                     |
|----------------------------------------------------------------------------|--------------------------------|
| [Your First Flipper Contract](../flipper-contract/flipper-contract.md)              | Basic ink! -  Basic Rust       | 
| [Implement Uniswap V2 core DEX](../dex/dex.md) | Advanced ink! - Basic Rust |         

# To follow this tutorial you will need:
- To [set up your ink! environment](../../XVM%20and%20WASM/setup_your_ink_environment.md).
- Basic Rust knowledge. [Learn Rust](https://www.rust-lang.org/learn)
- Prior knowledge about ERC721 is helpful but not mandatory.

# What will we do?
In this tutorial we will implement PSP34 in ink! with additional functions often seen in NFT projects.
- [PSP34 standard](https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md)

# What will be used?
- [ink! 3.4.0 (latest)](https://github.com/paritytech/ink/tree/v3.4.0)   
- [Openbrush 2.3.0 (latest)](https://github.com/Supercolony-net/openbrush-contracts/tree/v2.3.0)

# What will you learn?
- Full implementation of NFT project in ink!.
- Use Openbrush wizard to create PSP34 smart contract.
- File structure for a smart contract with an additional trait.
- Trait and generic implementation in separate files.
- Unit test for smart contract.
- Event handling.

# Summary
[I. OpenBrush wizard](./Wizard/wizard.md)   
[II. Override mint() method](./Override/override.md)   
[III Custom Trait for mint()](./CustomTrait/customtrait.md)   
[IV. PayableMint Trait definition](./PayableMintTrait/payableminttrait.md)   
[V. PayableMint Trait implementation](./PayableMintImpl/payablemintimpl.md)   
[VI. Events](./Events/events.md)   