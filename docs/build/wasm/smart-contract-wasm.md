---
sidebar_position: 1
---

# Smart Contract Stack

## Smart Contract Runtime Environment

Astar & Shiden runtimes are based on Substrate, and both networks incorporate `pallet-contracts`, a sandboxed environment used to deploy and execute WebAssembly smart contracts. Any language that compiles to Wasm may be deployed and run on this Wasm Virtual Machine, however, the code should be compatible with the `pallet-contracts` API.

To avoid unnecessary complexity, and writing boilerplate code, the most appropriate method of building will involve the use of an eDSL specifically targeting `pallet-contracts`, such as [ink!] (based on Rust), or [ask!] (based on AssemblyScript), or possibly others as the ecosystem grows.

After compilation, a Wasm blob can then be deployed and stored on-chain.

### Transaction Fees

#### Weight

As is also the case with Substrate, `pallet-contracts` uses [weight][weight] to charge execution fees.

:::info
One gas is equivalent to one weight, defined as one picosecond of execution time on the runtime's reference machine.
:::

[Transaction Weight in Substrate Documentation][weight]

#### Automatic Deposit Collection

Additionally, due to the weight, there is also a fee paid for on-chain storage called *automatic deposit collection*. This fee is paid additionally by the caller, and is calculated along with the price set for each storage item `DepositPerItem`, and for each byte of storage `DepositPerByte`.

The *automatic deposit collection* can be simplified as follows:

:::info
A caller of a contract will pay a deposit to each contract in which new storage is created, as a result of an executed call. Conversely, a caller will receive a refund from each of the contracts that a call removes storage from.
:::

[Ink! 3.0 Blog Post by Parity](https://www.parity.io/blog/ink-3-0-paritys-rust-based-language-gets-a-major-update)

#### The Loading from Storage Weight
In order to protect against a theoretical PoV attack, should a contract's Wasm blob be loaded from storage and sent via the network for validation of state changes (included into PoV), a [weight per byte](https://github.com/paritytech/substrate/blob/97ae6be11b0132224a05634c508417f048894670/frame/contracts/src/lib.rs#L331-L350) of code will be charged.


### Execution Engine

Pallet-contracts uses [wasmi](https://github.com/paritytech/wasmi) as a Wasm interpreter to execute Wasm smart contract blobs. Although there is a faster JIT interpreter such as [wasmtime](https://github.com/bytecodealliance/wasmtime) available in the native runtime, smart contracts are an untrusted environment which require a higher degree of correctness of interpretation, which makes wasmi a more suitable option.

### Two-step Deployment of Contracts

The contract code (Wasm blob), and contract address and storage are decoupled from one another other, so require two steps to deploy a new contract on-chain:

1. First, upload the Wasm contract on-chain (every contract Wasm code has a `code_hash` as an identifier).
2. Second, instantiate the contract - it will create an address and storage for that contract.
3. Anyone can instantiate a contract based on its `code_hash`.

There are several benefits of decoupling the contract code from the address/storage:

- To save space on-chain. Since a contract can have several constructors and instantiations, a redeployment will create a new instance based on the same underlying code. Think about standardized tokens, like [PSP22][PSP22] & [PSP34][PSP34], that will have one `code_hash` & `blob` living on-chain, and as many instantiations as are needed, rather than having to upload code with each new instantiation (for example, on Ethereum).
- To instantiate a new contract using code within an existing smart contract (see the delegator example), `code_hash` is all that is needed.
- Some standard contracts such as ([PSP22][PSP22] and [PSP34][PSP34]) will only be uploaded on-chain once, preventing users from having to pay gas costs for uploading new code.
- Update contract code for an address: replace the contract code at the specified address with new code (see [set_code_hash][set_code_hash]). Storage and balances will be preserved.

### For More Information About `pallet-contracts`

- [`pallet-contracts` in Rust docs](https://docs.rs/pallet-contracts/14.0.0/pallet_contracts/index.html)
- [`pallet-contracts` on Github](https://github.com/paritytech/substrate/tree/master/frame/contracts)

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
Smart Contract Runtime Environment | [EVM] | Wasm [pallet-contract] + EVM [frontier]
Gas Model | [fixed price per instruction] | [weight] + [storage fees][storage] + [loading fees]
Smart Contract DSLs | Solidity and Vyper | [ink!] (Rust) and [ask!] (AssemblyScript)
Standards | [EIPs] | [PSPs]

[weight]: https://docs.substrate.io/reference/how-to-guides/weights/
[PSP22]: https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md
[PSP34]: https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md
[set_code_hash]: https://docs.rs/ink_env/4.0.0-rc/ink_env/fn.set_code_hash.html
[ink!]: https://github.com/paritytech/ink
[ask!]: https://github.com/ask-lang/ask
[EVM]: https://ethereum.org/en/developers/docs/evm/
[pallet-contract]: https://github.com/paritytech/substrate/tree/master/frame/contracts
[fixed price per instruction]: https://ethereum.github.io/yellowpaper/paper.pdf
[frontier]: https://github.com/paritytech/frontier
[storage]: https://github.com/paritytech/substrate/blob/c00ed052e7cd72cfc4bc0e00e38722081b789ff5/frame/contracts/src/lib.rs#L351
[loading fees]: https://github.com/paritytech/substrate/blob/97ae6be11b0132224a05634c508417f048894670/frame/contracts/src/lib.rs#L331-L350
[EIPs]: https://eips.ethereum.org/
[PSPs]: https://github.com/w3f/PSPs
