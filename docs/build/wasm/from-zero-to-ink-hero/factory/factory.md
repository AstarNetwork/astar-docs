---
sidebar_position: 2
---

# Factory Mint for PSP22
This is step-by-step explanation of the process behind building an ink! smart contract with cross contract call and with ink_e2e test.

## Prerequisites
Please refer to the [previous section](./factory-intro.md) for the list of prerequisites.

## Factory and Token Smart Contracts
### Initial Setup
In a new project folder, execute the following:

```bash
$ cargo contract new factory
$ cargo contract new token
```
Create the root `Cargo.toml` file with the workspace content:
```toml
[workspace]
members = [
    "token",
    "factory",
]
```

### Token Contract Setup
Using the Openbrush wizard, we will create a new ink! smart contract for PSP22. Provide the following information to the wizard:
```bash
version 3.0.0
constructor name: Token
extensions: mintable
security: ownable
```
Copy the `lib.rs` and `Cargo.toml` from the wizard to your project `factory/` folder.

This tutorial uses ink! version 4.1.0. If you are using a different version, please update the `Cargo.toml` file accordingly.
```toml
ink = { version = "4.1.0", default-features = false }
```

Use Openbrush version `3.1.0` and add feature "ownable" since wizard failed to do so.

```toml
openbrush = { tag = "3.1.0", git = "https://github.com/727-Ventures/openbrush-contracts", default-features = false, features = ["psp22", "ownable"] }
```
Since Openbrush 3.1.0 uses feature `min_specialization` which is not supported by Rust stable, we need to use nightly Rust compiler. Create a file `rust-toolchain.toml` in the root of the project with the following content:
```toml
[toolchain]
channel = "nightly-2023-01-10"
components = [ "rustfmt", "clippy" ]
targets = [ "wasm32-unknown-unknown"]
profile = "minimal"
```

### Factory Contract Setup
This tutorial uses ink! version 4.1.0. If you are using a different version, please update the `Cargo.toml` file accordingly.
```toml
[dependencies]
ink = { version = "4.1.0", default-features = false }
[dev-dependencies]
ink_e2e = "4.1.0"
````

The token contract for now contains the boilerplate code for the factory contract. In the next step we will add the factory contract code, but for now let's just verify that our setup configuration is correct. 

```bash
### Verify the Contracts
Let's verify the setup so far by building the contracts. At the root of the project, execute the following:
```bash
cargo check
cargo test
```

The folder structure for your contract should now look like this:
```bash
Cargo.lock
Cargo.toml
factory/
rust-toolchain.toml
target/
token/
```

The full code for this example is available [here](https://github.com/swanky-dapps/factory-mint).