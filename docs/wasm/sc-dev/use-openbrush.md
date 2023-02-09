---
sidebar_position: 4
---

# Use OpenBrush

## OpenBrush

[OpenBrush] is a library for smart contract development on ink! maintained by the [BrushFam] team, and is inspired by OpenZeppellin for Solidity.

Openbrush provides standard contracts based on [PSPs], as well as other useful contracts and Rust macros that help developers build ink! smart contracts.

Why use OpenBrush?

- To create **interoperable** smart contracts, that perform **safe** cross-contracts calls (by maintaining consistent signatures across contracts).
- To comply with [Polkadot Standards Proposals][PSPs].
- To ensure usage of the **latest and most secure** implementation.
- Templates provide customizable logic that can be implemented easily in smart contracts.
- To **save time** by not having to write boilerplate code.

Which token standards and contracts does OpenBrush provide?

- **PSP22**: Fungible Token (*ERC20 equivalent*) with extensions.
- **PSP34**: Non-Fungible Token (*ERC721 equivalent*) with extensions.
- **PSP37**: *ERC1155 equivalent* with extensions.
- **Ownable**: Restrict access to action for non-owners.
- **Access Control**: Define a set of roles and restrict access to an action by roles.
- **Reentrancy Guard**: Prevent reentrant calls to a function.
- **Pausable**: Pause/Unpause the contract to disable/enable some operations.
- **Timelock Controller**: Execute transactions with some delay.
- **Payment Splitter**: Split the amount of native tokens between participants.

### Generic Trait Implementation

More importantly, OpenBrush adds support for generic Trait implementation, so you can split Trait and Impls into different files, which will increase the readability and maintainability of your smart contract code base (see detailed description [here](https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md)).

### Wrapper around Traits

Defining a Trait definition is sufficient enough (a contract that implements that Trait is not needed anymore) to call methods of that Trait from another contract on the network (perform a cross-contract call). This makes cross-contract calls easier.

### Documentation

- [OpenBrush Github repo](https://github.com/727-Ventures/openbrush-contracts)
- [Official Docs](https://docs.openbrush.io/)
- [OpenBrush website](https://openbrush.io/)
- [Substrate Seminar (Youtube)](https://www.youtube.com/watch?v=I5OFGNVvzOc)
- [How to use modifiers](https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76)

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs
[Brushfam]: https://www.brushfam.io/
