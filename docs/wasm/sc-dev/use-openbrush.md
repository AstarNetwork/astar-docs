---
sidebar_position: 4
---

# Use OpenBrush

## OpenBrush

[OpenBrush] is a library for smart contract development on ink! maintained by the [Brushfam] team. It intends to be like OpenZeppellin for Solidity.

It provides standard contracts based on [PSPs], as well as useful contracts and Rust macros to help you build ink! smart contracts.

Why use this OpenBrush?

- To make contracts **interoperable** to do **safe** cross-contracts calls (by having the same function's signature among every contract)
- To ensure the usage of [Polkadot Standards Proposals][PSPs]
- To ensure the usage of the **latest and most secure** implementation
- Useful contracts that provide custom logic to be implemented in contracts
- To **save time** by not writing boilerplate code
- Useful features which can simplify development

Which standard tokens and useful contracts does it provide?

- **PSP22** - Fungible Token (*ERC20 equivalent*) with extensions
- **PSP34** - Non-Fungible Token (*ERC721 equivalent*) with extensions
- **PSP37**: *ERC1155 equivalent* with extensions
- **Ownable** Restrict access to action for non-owners
- **Access Control**: Define a set of roles and restrict access to an action by roles
- **Reentrancy Guard**: Prevent reentrant calls to a function
- **Pausable**: Pause/Unpause the contract to disable/enable some operations
- **Timelock Controller**: Execute transactions with some delay
- **Payment Splitter**: Split the amount of native tokens between participants

### Generic Trait Implementation

More importantly, OpenBrush adds support for generic Trait implementation so you can split Trait and Impls into different files, which will increase the readability and maintainability of your smart-contract code base (see detailed description [here](https://github.com/727-Ventures/openbrush-contracts/blob/main/docs/docs/smart-contracts/example/setup_project.md))

### Wrapper around Traits

Defining a Trait definition is sufficient (a contract that implements that Trait is not needed anymore) to call methods of that Trait from some contract in the network (do a cross contract call). It makes cross-contract calls easier.

### Documentation

- [OpenBrush Github repo](https://github.com/727-Ventures/openbrush-contracts)
- [Official Docs](https://docs.openbrush.io/)
- [OpenBrush website](https://openbrush.io/)
- [Substrate Seminar (Youtube)](https://www.youtube.com/watch?v=I5OFGNVvzOc)
- [How to use modifiers](https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76)

You can join the [Brushfam Element channel](https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation) if you have any question about OpenBrush or ink! smart contracts in general.

[OpenBrush]: https://github.com/727-Ventures/openbrush-contracts
[PSPs]: https://github.com/w3f/PSPs
[Brushfam]: https://www.brushfam.io/
