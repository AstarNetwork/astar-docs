---
sidebar_position: 1
---

# Polkadot Standards Proposals

The Polkadot ecosystem needs its own set of standards to fit ecosystem needs. Please visit [Polkadot Standards Proposals (PSPs) Github][PSPs].

These standards go through several acceptance phases, and the engagement of the whole community is needed to build valuable and future-proof standards. All the teams who will benefit from a standard need to agree on its content.

## PSP22 - Fungible Token Standard

The [PSP22 Fungible Token standard][PSP22] is inspired by the ERC20 from Ethereum. It targets every parachain that integrates pallet-contract to enable Wasm smart contracts. It is defined at ABI level, so it should be used for any language that compiles to Wasm (and is not restricted to ink! specifically).

PSP22 will have a double impact:

- On the parachain level, it will ensure the PSP22 is used to enable true interoperability.
- In the multi-chain future, it will secure interoperability of all token standards (PSP22 and the next coming) between different parachains or other substrate base chains.

It also helps to have a predefined interface for specific token standards to ensure exhaustive logic is implemented. It will also encourage sharing the most performant & secure implementation. For reference implementation please refer to [PSP22 - OpenBrush](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/token/psp22/src/traits.rs).

This standard was the first to be accepted by the community. Please refer to the official [PSPs repo][PSPs] to be aware of the latest standards.

## PSP34 - NFT Standard

Without a standard interface for Non-Fungible Token, every contract will have different signatures and types. Hence, no interoperability is possible. This proposal aims to resolve that by defining one interface that shares the same ABI of permissionless methods between all implementations.

The goal is to have a standard contract interface that allows tokens deployed on Substrate's `contracts` pallet to be re-used by other applications: from wallets to decentralized exchanges.

[Link to PSP34](https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md)

[PSPs]: https://github.com/w3f/PSPs
[PSP22]: https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md
