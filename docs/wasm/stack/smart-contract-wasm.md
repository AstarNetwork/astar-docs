---
sidebar_position: 1
---

# Smart-contract Stack

## Smart Contract Runtime Environment

Astar & Shiden runtimes are based on Substrate. Both networks incorporate `pallet-contracts` to enable Wasm smart contract capabilities. The `pallet-contracts` is a sandbox environment used to deploy and execute WebAssembly smart contracts. Any language that compiles to Wasm can be used, however the code should be compatible with the `pallet-contracts` API.

To avoid unnecessary complexity, and boilerplate code, the best way to build is with an eDSL specifically targeting the `pallet-contracts` such `ink!` (based on Rust) or `ask!` (based on AssemblyScript), and additional language and eDSL support will be developed as the ecosystem grows.

The Wasm blob is then deployed and stored on-chain.

### Transaction Fees

##### Weight

As is also the case with Substrate, the `pallet-contracts` uses [weight][weight] to charge execution fees.

:::info
One gas is equivalent to one weight, defined as one picosecond of execution time on the runtime's reference machine.
:::

[Transaction Weight in Substrate documentation][weight]

##### Automatic Deposit Collection

Additionally due to the weight, there is also a fee paid for on-chain storage called *automatic deposit collection*. This fee is paid additionally by the caller, and is calculated with the price set for each storage item `DepositPerItem`, and for each byte of storage `DepositPerByte`.

The *automatic deposit collection* can be simplified as follows:

:::info
A caller of a contract will pay a deposit to each contract in which new storage is created, as a result of an executed call. In a similar way, a caller will receive a refund from each of the contracts that a call removes storage from.
:::

[ink! 3.0 Blog Post by Parity](https://www.parity.io/blog/ink-3-0-paritys-rust-based-language-gets-a-major-update)

##### Loading from storage Weight
In order to protect against a theoretical PoV attack, a contract's Wasm blob should be loaded from storage and sent via the network for validation of state changes (included into PoV), a [weight per byte](https://github.com/paritytech/substrate/blob/97ae6be11b0132224a05634c508417f048894670/frame/contracts/src/lib.rs#L331-L350) of code is charged when loading a contract from storage.


### Execution Engine

Pallet-contracts uses [wasmi](https://github.com/paritytech/wasmi) as a Wasm interpreter to execute Wasm smart contract blobs. Although there is a faster JIT interpreter such as [wasmtime](https://github.com/bytecodealliance/wasmtime) available in the native runtime, smart contracts are an untrusted environment which require a higher degree of correctness of interpretation, which makes wasmi a more suitable option.

### Two-step Deployment of Contracts

The contract code (Wasm blob), and contract address and storage are decoupled from one another other, so require two steps to deploy a new contract on-chain:

1. First, upload the Wasm contract on-chain (every contract Wasm code has a `code_hash` as an identifier).
2. Second, instantiate the contract - it will create an address and storage for that contract.
3. Anyone can instantiate a contract based on its `code_hash`.

There are several benefits of decoupling the contract code from the address/storage:

- To save space on-chain. Since a contract can have several constructors and instantiations, a redeployment will create a new instance based on the same underlying code. Think about standardized tokens, like [PSP22][PSP22] & [PSP34][PSP34], that will have one `code_hash` & `blob` living on-chain, and as many instantiations as is needed, rather than having new code uploaded at each new instantiation (like in Ethereum).
- To instantiate a new contract using code within an existing smart contract (see the delegator example), in which case `code_hash` is the only required information.
- Some standard contracts such as ([PSP22][PSP22] and [PSP34][PSP34]) will only be uploaded on-chain once, preventing users from having to pay gas costs for uploading new code.
- To update the contract code at a specified address: to replace the contract code at the specified address with new code (see [set_code_hash][set_code_hash]). Storage and balances will be preserved.

### For More Information About `pallet-contracts`

- [`pallet-contracts` in Substrate documentation](https://docs.substrate.io/v3/runtime/smart-contracts/)
- [`pallet-contract` on Github](https://github.com/paritytech/substrate/tree/master/frame/contracts)

## Smart Contracts

To facilitate development of smart contracts, it is appropriate to use a programming language or eDSL specifically targeting `pallet-contracts`.

There are two eDSLs currently available:

- [ink!] written in Rust.
- [ask!][ask!] written in AssemblyScript.

## Client APIs

The only library available to communicate with smart contracts is [Polkadot.js API](https://github.com/polkadot-js/api).

:::info
This API provides application developers the ability to query a node and interact with the Polkadot or Substrate chains using Javascript.
:::

Parity also developed a web application to interact with contracts called [contracts-ui](https://github.com/paritytech/contracts-ui).

## The Wasm Stack vs. Ethereum

| | Ethereum | Astar |
| --- | --- | --- |
| L1 Architecture | [Ethereum clients](https://ethereum.org/en/developers/docs/nodes-and-clients/) | [Substrate](https://substrate.io/)
Smart Contract Runtime Environment | [EVM] | [pallet-contract], EVM via [frontier]
Gas Model | [fixed price per instruction] | [weight] + [storage fees][storage] + [loading fees]
Smart Contract DSLs | Solidity and Vyper | [ink!] (Rust) and [ask!] (AssemblyScript)
Standards | [EIPs] | [PSPs]

[weight]: https://docs.substrate.io/v3/concepts/weight/
[PSP22]: https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md
[PSP34]: https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md
[set_code_hash]: https://paritytech.github.io/ink/ink_env/fn.set_code_hash.html
[ink!]: https://github.com/paritytech/ink
[ask!]: https://github.com/ask-lang/ask
[EVM]: https://ethereum.org/en/developers/docs/evm/
[pallet-contract]: https://github.com/paritytech/substrate/tree/master/frame/contracts
[fixed price per instruction]: https://ethereum.github.io/yellowpaper/paper.pdf
[frontier]: https://github.com/paritytech/frontier
[weight]: https://docs.substrate.io/v3/concepts/weight/
[storage]: https://github.com/paritytech/substrate/blob/c00ed052e7cd72cfc4bc0e00e38722081b789ff5/frame/contracts/src/lib.rs#L351
[loading fees]: https://github.com/paritytech/substrate/blob/97ae6be11b0132224a05634c508417f048894670/frame/contracts/src/lib.rs#L331-L350
[EIPs]: https://eips.ethereum.org/
[PSPs]: https://github.com/w3f/PSPs
