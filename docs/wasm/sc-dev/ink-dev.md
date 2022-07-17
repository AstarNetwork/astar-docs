---
sidebar_position: 2
---

# ink! Development

ink! is a Rust eDSL developed by Parity. It targets specifically smart-contract development for Substrate’s `pallet-contracts`.

ink! offers Rust [procedural macros](https://doc.rust-lang.org/reference/procedural-macros.html#procedural-macro-hygiene) and a list of crates to facilitate development and avoid boilerplate code.

It is the most supported eDSL currently and will be highly supported in the future too (by Parity and builders community).

It offers a large range of features:

- idiomatic Rust code
- ink! Macros & Attributes - [#[ink::contract]](https://paritytech.github.io/ink/ink_lang/attr.contract.html)
- [`Trait` support](https://paritytech.github.io/ink/ink_lang/attr.trait_definition.html)
- Upgradeable contracts - [Delegate Call](https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts)
- [Chain Extensions](https://github.com/paritytech/ink/tree/master/examples/rand-extension) (interact with Substrate pallets inside a contract)
- Off-chain Testing - `#[ink(test)]`

## Documentation

[ink! Github repo](https://github.com/paritytech/ink)
[ink! Intro repo](https://paritytech.github.io/ink/)
[ink! Official Documentation](https://ink.substrate.io/)
[ink! Rust doc](https://paritytech.github.io/ink/ink_lang/)
