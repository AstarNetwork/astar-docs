---
sidebar_position: 2
---

# Ink! Development

Ink! is a Rust eDSL developed by Parity. It targets specifically smart-contract development for Substrate’s `pallet-contracts`.

Ink! offers Rust [procedural macros](https://doc.rust-lang.org/reference/procedural-macros.html#procedural-macro-hygiene) and a list of crates to facilitate development and avoid boilerplate code.

It is the most supported eDSL currently and will be highly supported in the future too (by Parity and builders community).

It offers a large range of features:

- idiomatic Rust code
- Ink! Macros & Attributes - [#[ink::contract]](https://paritytech.github.io/ink/ink_lang/attr.contract.html)
- [`Trait` support](https://paritytech.github.io/ink/ink_lang/attr.trait_definition.html)
- Upgradeable contracts - [Delegate Call](https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts)
- [Chain Extensions](https://github.com/paritytech/ink/tree/master/examples/rand-extension) (interact with Substrate pallets inside a contract)
- Off-chain Testing - `#[ink(test)]`

## Documentation
- [Ink! Github repo](https://github.com/paritytech/ink)
- [Ink! Intro repo](https://paritytech.github.io/ink/)
- [Ink! Official Documentation](https://use.ink/)
- [Ink! Rust doc](https://paritytech.github.io/ink/ink_lang/)
