---
sidebar_position: 1
---

# Smart-contract Stack

## Smart Contract Runtime Environment

Astar & Shiden runtimes are based on Substrate. Both networks incorporate `pallet-contracts` to enable Wasm smart-contract capabilities. The `pallet-contracts` is a sandbox environment to deploy and execute WebAssembly smart contracts. Any language that compiles to Wasm can be used. But the code should be compatible with `pallet-contracts` API.

To avoid unnecessary complexity, and boilerplate code, the best way is to use an eDSL that specifically targets the `pallet-contracts` like `ink!` (based on Rust) or `ask!` (based on AssemblyScript). More supported language and eDSL will come as the ecosystem grows.

The Wasm blob is then deployed and stored on-chain.

### Gas Model

Similar to Substrate, `pallet-contracts` uses [weight][weight] as a gas model.

> One gas is equivalent to one weight, defined as one picosecond of execution time on the runtime's reference machine.

[Transaction Weight is Substrate documentation][weight]

Additionally to the weight, there is also a fee paid for on-chain storage called *automatic deposit collection*. This additional fee is paid by the caller and is calculated with the price set for each storage item `DepositPerItem` and the price charged for each byte of storage `DepositPerByte`.

The *automatic deposit collection* can be simplified as follows:

> A caller of a contract pays a deposit to each contract in which new storage was created as a result of the executed call. In a similar way, a caller gets a refund from all the contracts that the call removed storage from.

[ink! 3.0 Blog Post by Parity](https://www.parity.io/blog/ink-3-0-paritys-rust-based-language-gets-a-major-update)

### Execution Engine

Pallet-contracts uses [wasmi](https://github.com/paritytech/wasmi) as a wasm-interpreter to execute the smart-contract Wasm blob. Even though there is a faster JIT interpreter like [wasmtime](https://github.com/bytecodealliance/wasmtime) used in the native runtime, smart contracts are an untrusted environment and that’s why the high degree of correctness of wasmi makes it the best option.

### Two-step Deployment of Contracts

The contract code (Wasm blob) and the contract address and storage are decoupled from each other. To deploy a non-existing contract on-chain:

1. First, upload the Wasm contract on-chain (every contract Wasm code has a `code_hash` as an identifier).
2. Second, instantiate the contract - it will create an address and storage for that contract.
3. Anyone can instantiate a contract based on its `code_hash`.

There are several perks of decoupling contract code and address/storage:

- It will save space on-chain. Since a contract can have several constructors and several instantiations, it will just create a new instance based on the same underlying code. Think about standardized tokens, like [PSP22][PSP22] & [PSP34][PSP34], that will have one `code_hash` & `blob` leaving on-chain, and as many instantiations as it is needed rather than having code uploaded at each new instantiation (like in Ethereum).
- To instantiate a contract from within contract code (see delegator example), only `code_hash` needs to be provided.
- Some standards contracts ([PSP22][PSP22], [PSP34][PSP34]) will only be uploaded on-chain once, preventing users from paying the gas fees of uploading new code.
- Update contract code for an address: replace the contract code at the specified address with a new code (see [set_code_hash][set_code_hash]). Storage and balances will be preserved.

### Documentation about `pallet-contracts`

- [`pallet-contracts` in Substrate documentation](https://docs.substrate.io/v3/runtime/smart-contracts/)
- [`pallet-contract` on Github](https://github.com/paritytech/substrate/tree/master/frame/contracts)

## Smart Contracts

To facilitate development it is better to use a language targeting specifically `pallet-contracts`.

There are two eDSLs currently available

- [ink!] written in Rust
- [ask!][ask!] written in AssemblyScript

## Client APIs

The only library available to communicate with smart contracts is [PolkadotJS API](https://github.com/polkadot-js/api).

> This API provides application developers the ability to query a node and interact with the Polkadot or Substrate chains using Javascript.

Parity also developed a web application to interact with contracts called [contracts-ui](https://github.com/paritytech/contracts-ui).

## Stack comparison to Ethereum

| | Ethereum | Astar |
| --- | --- | --- |
| L1 Architecture | [Ethereum clients](https://ethereum.org/en/developers/docs/nodes-and-clients/) | [Substrate](https://substrate.io/)
Smart Contract Runtime Environment | [EVM] | [pallet-contract], EVM via [frontier]
Gas Model | [fixed price per instruction] | [weight] + [storage fees][storage]
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
[EIPs]: https://eips.ethereum.org/
[PSPs]: https://github.com/w3f/PSPs
