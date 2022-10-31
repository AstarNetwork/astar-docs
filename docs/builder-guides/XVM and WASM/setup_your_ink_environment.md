---
sidebar_position: 1
---

# Set up your ink! environment
## TL;DR

This guide is for those who just getting started with exploring ink! or WASM smart contracts in the Astar ecosystem. Before you can get started you need to make sure your environment supports Rust.

---

## What is ink!?

Ink! is a Rust eDSL developed by Parity. It targets specifically smart-contract development for Substrate’s `pallet-contracts`. But why ink!? Ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose. If this doesn't already convince you, you find many more good reasons [here](https://use.ink/why-rust-for-smart-contracts). 

Another most asked question when talking about WASM smart contract is: why WASM? Why WebAssembly for smart contracts? You can find all the answers [here](https://use.ink/why-webassembly-for-smart-contracts).

## Ink! Environment Setup

### Rust & Cargo

A pre-requisite for compiling smart contracts is to have Rust and Cargo installed. The easiest way to get Cargo is to install the current stable release of [Rust](https://www.rust-lang.org/) by using [rustup](https://rustup.rs/). Installing Rust using `rustup` will also install `cargo`. On Linux and macOS systems, this is done as follows:

```rust
curl https://sh.rustup.rs -sSf | sh
# Configure
source ~/.cargo/env
```

It will download a script and start the installation. If you are using Windows, go to the [Rust website](https://www.rust-lang.org/tools/install) to understand the steps. Configure to the latest stable and add nightly + WASM target

```rust
rustup default stable
rustup update
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

### ink! CLI[](https://use.ink/getting-started/setup#ink-cli)

The first and most important tool we will be installing is `[cargo-contract](https://github.com/paritytech/cargo-contract)`, a CLI tool for helping set up and manage WebAssembly smart contracts written with ink!. 

As a pre-requisite for the tool, you need to install the [binaryen](https://github.com/WebAssembly/binaryen) package, which is used to optimize the WebAssembly bytecode of the contract.

```rust
There are ready-to-install packages for many platforms:
* Debian/Ubuntu: apt-get install binaryen
* Homebrew: brew install binaryen
* Arch Linux: pacman -S binaryen
* Windows: binary releases at https://github.com/WebAssembly/binaryen/releases
```

Two other dependencies are needed to link the ink! contract. This is done to warn users about using e.g., API's in a way that could lead to security issues.

```rust
cargo install cargo-dylint dylint-link
```

Many package managers have it available nowadays ‒ e.g., there is a package for [Debian/Ubuntu](https://tracker.debian.org/pkg/binaryen), [Homebrew](https://formulae.brew.sh/formula/binaryen), and [Arch Linux](https://archlinux.org/packages/community/x86_64/binaryen/). After you've installed the package, execute:

```rust
cargo install cargo-contract --force --locked
```

Use the `--force` to ensure you are updated to the most recent `cargo-contract` version.

You can then use `cargo contract --help` to start exploring the commands made available to you.

---

## Reference

- [Ink! Github repo](https://github.com/paritytech/ink)
- [Ink! Intro repo](https://paritytech.github.io/ink/)
- [Ink! Official Documentation](https://use.ink)
- [Ink! Rust doc](https://paritytech.github.io/ink/ink_lang/)