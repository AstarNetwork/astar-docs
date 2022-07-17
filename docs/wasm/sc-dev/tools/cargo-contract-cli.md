---
sidebar_position: 1
---

# `cargo-contract` CLI

`cargo-contract` is a CLI tool that helps you develop smart contracts in Parity's [ink!].

It is mainly used to build your smart contracts (and build Wasm blob + metadata).

## Usage

You can always use `cargo contract help` to print information on available commands and their usage. For each command, there is also a `--help` flag with info on additional parameters, e.g. `cargo contract new --help`.

### `cargo contract new my_contract`

Creates an initial smart contract with some scaffolding code into a new folder `my_contract` .

The contract contains the source code for the [Flipper](https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs) contract, which is about the simplest "smart" contract you can build ‒ a bool that gets flipped from `true` to `false` through the`flip()` function.

### `cargo +nightly contract build`

Compiles the contract into optimized Wasm bytecode, generates metadata for it, and bundles both together in a `my_contract.contract` file, which you can use for deploying the contract on-chain.

`cargo contract build` must be run using the `nightly` toolchain. If you have `rustup` installed, the simplest way to do so is `cargo +nightly contract build`.

To avoid having to always add `+nightly` you can also set nightly as the default toolchain of a directory by executing rustup override set nightly in it.

### `cargo contract check`

Checks that the code builds as Wasm. This command does not output any `.contract` artifacts to the `target/` directory.

### `cargo contract test`

Runs test suites defined for a smart contract off-chain.

### `cargo contract upload`

Upload a contract to a `pallet-contract` enabled chain. See [extrinsics].

### `cargo contract instantiate`

Create an instance of a contract on-chain. See [extrinsics].

### `cargo contract call`

Invoke a message on an existing contract on-chain. See [extrinsics].

### `cargo contract decode`

Decodes a contract's input or output data.

This can be either an event, an invocation of a contract message, or an invocation of a contract constructor.

The argument has to be given as hex-encoding, starting with `0x`.

## Documentation

[cargo-contract Github repo](https://github.com/paritytech/cargo-contract#usage)

[ink!]: https://github.com/paritytech/ink
[extrinsics]: https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md
