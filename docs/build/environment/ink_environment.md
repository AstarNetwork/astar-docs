---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ink! Environment

## Overview

This guide is designed for those who are new to ink! or Wasm smart contracts in the Astar ecosystem. Before you begin, ensure your environment supports Rust.

---

## What is ink!

Ink! is a Rust eDSL developed by Parity, that specifically targets smart contract development for Substrate’s `pallet-contracts`. Ink! is not reinventing a programming language, rather, adapting a subset of Rust to serve smart contract developers, specifically. If this isn't reason enough on its own to convince you to learn more about ink!, you can find many more [here](https://use.ink/why-rust-for-smart-contracts).

A frequently asked question when discussing Wasm is: Why use WebAssembly for smart contracts in the first place? You can find all the answers [here](https://use.ink/why-webassembly-for-smart-contracts).

## Ink! Environment Setup

### Rust and Cargo

Rust and Cargo are prerequisites for compiling Wasm smart contracts. The easiest way to obtain Cargo is by installing the current stable release of [Rust](https://www.rust-lang.org/) using [rustup](https://rustup.rs/). Installing Rust using `rustup` will also install `cargo`. On Linux and macOS systems, you can do that with the following:

```rust
curl https://sh.rustup.rs -sSf | sh
# Configure
source ~/.cargo/env
```

This will download a script and start the installation. If you are using Windows, visit the [Rust website](https://www.rust-lang.org/tools/install) and follow the instructions to install Rust. Configure source control to pull the latest stable release and add nightly + Wasm target with the following:

```bash
rustup default stable
rustup update
rustup update nightly
rustup component add rust-src
rustup component add rust-src --toolchain nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

:::caution
Due to a bug in `cargo-contract`, building contracts with **rust nightly 1.70.0 or higher will fail**.
It is advised to use rustc v1.69.0 or older until the issue is resolved from `cargo-contract` side.
For better dev experience it is advised to create a [rust-toolchain file](https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file)
in the root of your project directory with following values.

```toml
[toolchain]
channel = "nightly-2023-02-07"
components = [ "rustfmt", "rust-src" ]
targets = [ "wasm32-unknown-unknown" ]
profile = "minimal"
```

See more [here](https://github.com/paritytech/cargo-contract/issues/1058)
:::

### Ink! [CLI](https://use.ink/getting-started/setup#ink-cli)

The first and most important tool we will be installing is [cargo-contract](https://github.com/paritytech/cargo-contract), a CLI tool for setting up and managing WebAssembly smart contracts written with ink!

As a prerequisite using older versions of ink! you may need to install the [binaryen](https://github.com/WebAssembly/binaryen) package, used to optimize WebAssembly contract bytecode.

Many package managers have it preinstalled, for example [Debian/Ubuntu](https://tracker.debian.org/pkg/binaryen), [Homebrew](https://formulae.brew.sh/formula/binaryen), and [Arch Linux](https://archlinux.org/packages/community/x86_64/binaryen/).

<Tabs>
<TabItem value="Debian/Ubuntu" label="Debian/Ubuntu" default>

- Using `apt-get`

```sh
apt-get update
apt-get -y install binaryen
```

- Using `apt`

```sh
apt update
apt -y install binaryen
```

</TabItem>

<TabItem value="Arch Linux" label="ArchLinux" default>

```sh
pacman -S binaryen
```

</TabItem>

<TabItem value="MacOS" label="MacOS" default>

```sh
brew install binaryen
```

</TabItem>

<TabItem value="Windows" label="Windows" default>

Find binary releases at https://github.com/WebAssembly/binaryen/releases

</TabItem>

</Tabs>

---

Two other dependencies need to be satisfied to link the ink! contract, for example to warn users about using APIs in a way that could lead to security issues.

```rust
cargo install cargo-dylint dylint-link
```

After you've installed the package, execute the following:

```rust
cargo install cargo-contract --force --locked
```

Use `--force` to ensure you are updated to the most recent `cargo-contract` version.

If you need to install an older version of `cargo-contract` use the following command by adding your desired version:

```bash
cargo install cargo-contract --force --version 1.5.1
```

You can then use `cargo contract --help` to start exploring all available commands.

---

## Dev container

The above process can be automated by utilizing a preinstalled and preconfigured dev container.

Detailed instructions about how to use and configure a dev container can be found on [swanky-dev-container Github](https://github.com/AstarNetwork/swanky-dev-container)

## References

- [Ink! Github repo](https://github.com/paritytech/ink)
- [Ink! Intro repo](https://paritytech.github.io/ink/)
- [Ink! Official Documentation](https://use.ink)
- [Ink! Rust doc](https://paritytech.github.io/ink/ink_lang/)
- [swanky-dev-container](https://github.com/AstarNetwork/swanky-dev-container)
