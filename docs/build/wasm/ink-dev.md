---
sidebar_position: 4
---

# Ink! Development

Ink! is a Rust eDSL developed by Parity. It specifically targets smart contract development for Substrate’s `pallet-contracts`.

Ink! offers Rust [procedural macros](https://doc.rust-lang.org/reference/procedural-macros.html#procedural-macro-hygiene) and a list of crates to facilitate development and allows developers to avoid writing boilerplate code.

It is currently the most widely supported eDSL, and will be highly supported in the future. (by Parity and builders community).

Ink! offers a broad range of features such as:

- idiomatic Rust code
- Ink! Macros & Attributes - [#[ink::contract]](https://use.ink/macros-attributes/contract)
- [`Trait` support](https://use.ink/3.x/basics/trait-definitions)
- Upgradeable contracts - [Delegate Call](https://use.ink/3.x/basics/upgradeable-contracts)
- [Chain Extensions](https://use.ink/macros-attributes/chain-extension/) (interact with Substrate pallets inside a contract)
- Off-chain Testing - `#[ink(test)]`

Installation procedures are available in [ink! Environment](/docs/build/environment/ink_environment.md) section.

## Documentation

- [Ink! Github repo](https://github.com/paritytech/ink)
- [Ink! Intro repo](https://paritytech.github.io/ink/)
- [Ink! Official Documentation](https://use.ink/)
- [Ink! Rust doc](https://docs.rs/ink/4.0.0-rc/ink/index.html)
