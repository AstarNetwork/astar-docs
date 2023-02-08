---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ink! Environment

## Install and Configure the Rust Toolchain

Install Rust by running the following shell commands:

```bash
# Install
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Configure
source ~/.cargo/env
```

Configure source control to use the latest `stable` build, and add `nightly` + Wasm target.

```bash
rustup default stable
rustup update
rustup update nightly
rustup component add rust-src
rustup component add rust-src --toolchain nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

Ink! contracts use the `nightly` version of Rust, so you can also specify it as `default`. (optional)

```bash
rustup default nightly
```

## Install the WebAssembly Compiler & Toolchain

[Binaryen](https://github.com/WebAssembly/binaryen) is a compiler and toolchain infrastructure library for WebAssembly.
WebAssembly contract development tools require Binaryen to be installed as a prerequisite.
It is available for various package managers, for example, [Debian/Ubuntu](https://tracker.debian.org/pkg/binaryen), [Arch Linux](https://archlinux.org/packages/community/x86_64/binaryen/), [Homebrew](https://formulae.brew.sh/formula/binaryen).

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

<TabItem value="MacOS" label="MacOS" default>

```sh
brew install binaryen
```

</TabItem>
</Tabs>


## `cargo-contract` CLI

To build contracts, you will need to install [`cargo-contract`](https://github.com/paritytech/cargo-contract). You can find the installation instructions [here](https://github.com/paritytech/cargo-contract#installation).
