---
sidebar_position: 3
---

# DSLs

Embedded Domain-Specific Languages (eDSLs), are tools used to improve the blockchain and smart contract development experience by making it easier to write and understand code. EDSLs are programming languages or libraries that are designed to be used within the context of another programming language, to provide a more expressive and intuitive way to write smart contracts. In other words, an eDSL allows developers to write smart contracts at a higher-level, which makes the code easier to read and interpret, and less prone to error.

For example, instead of using pure Rust to write Wasm smart contracts or blockchain logic, a Rust eDSL, such as Substrate, can be used instead, as an eDSL specifically targetting development within those domains. Substrate allows developers to express the intent of their code in a more natural way, making it easier to understand and maintain.

EDSLs can also provide features such as error checking, debugging, and testing, which can further improve the development experience, within the realm of their specific domains.

## `Ink!`

Ink! is an eDSL written in Rust and developed by Parity. It specifically targets Substrate’s `pallet-contracts` [API](https://docs.rs/pallet-contracts/latest/pallet_contracts/api_doc/trait.Current.html).

Ink! offers Rust [procedural macros](https://doc.rust-lang.org/reference/procedural-macros.html#procedural-macro-hygiene) and a list of crates to help facilitate development, and save time by avoiding boilerplate code.

Check out the official documentation [here](https://ink.substrate.io/why-rust-for-smart-contracts) and `Ink!` GitHub repo [here](https://github.com/paritytech/ink).

## `Ask!`

Ask! is a framework for AssemblyScript developers that allows them to write Wasm smart contracts for `pallet-contracts`. Its syntax is similar to TypeScript.

This project is funded by the Polkadot treasury - link [here](https://polkadot.polkassembly.io/post/949), and is still under development.

Check out the official GitHub [here](https://github.com/ask-lang/ask).
