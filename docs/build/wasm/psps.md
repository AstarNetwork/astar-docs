---
sidebar_position: 7
---

# Polkadot Standards Proposals

The Polkadot ecosystem has its own set of standards to fulfill ecosystem needs. Visit [Polkadot Standards Proposals (PSPs) Github][PSPs] to learn more.

These standards go through several rounds of approvals before being accepted, and engagement of the entire community is required in order to build valuable, resilient, future-proof standards. All teams that benefit from shared standards should be aware of them, and agree on the scope of what they cover. 

## PSP22 - Fungible Token Standard

The [PSP22 Fungible Token standard][PSP22] is inspired by the ERC20 on Ethereum. PSP22 targets every parachain that integrates `pallet-contracts` and supports Wasm smart contracts. It is defined at ABI level, so it can be used for any language that compiles to Wasm (and is not restricted to ink! specifically).

PSP22 will have a double impact:

- On the parachain level, it will ensure the PSP22 standard is used to facilitate true interoperability.
- In the multi-chain future, it will secure interoperability of all token standards (PSP22 and the next iteration) between different parachains or other Substrate based chains.

It also helps to have a predefined interface for specific token standards to ensure exhaustive logic is implemented. It will also encourage sharing of the highest performance & most secure implementation. For a reference implementation, refer to [PSP22 - OpenBrush] (https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp22/psp22.rs).

This standard was the first to be accepted by the community. Refer to the official [PSPs repo][PSPs] to learn about all the latest standards.

## PSP34 - NFT Standard

Without a standard interface for Non-Fungible Token, every contract would have different signatures and types. Hence, no interoperability. This proposal aims to resolve that by defining one interface that shares the same ABI of permissionless methods between all implementations.

The goal is to have a standard contract interface that allows tokens deployed on Substrate's `contracts` pallet to be re-used by other applications: from wallets to decentralized exchanges.

[Link to PSP34] (https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md)

[PSPs]: https://github.com/w3f/PSPs
[PSP22]: https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md
