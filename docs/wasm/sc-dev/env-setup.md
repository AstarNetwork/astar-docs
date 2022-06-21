---
sidebar_position: 1
---

# Wasm Development Environment Setup

## Install and Configure the Rust Toolchain

Install Rust by running the following shell commands:

```bash
# Install
curl --proto '=https' --tlsv1.2 -sSf <https://sh.rustup.rs> | sh
# Configure
source ~/.cargo/env
```

Configure to the latest stable and add nightly + Wasm target

```bash
rustup default stable
rustup update
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

ink! contracts use `nightly` version of Rust, so you can also set up default to nightly (optional)

```bash
rustup default nightly
```

## `cargo-contract` CLI

To build contracts, you will need to install [`cargo-contract`](https://github.com/paritytech/cargo-contract). You can find the installation instructions [here](https://github.com/paritytech/cargo-contract#installation).
