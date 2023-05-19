---
sidebar_position: 2
---

# ManicMinter Setup
This is a tutorial on creating a minter contract and a token contract using the ink! smart contract framework. In this tutorial, you will learn how to develop two contracts, use cross contract call and test it with ink! e2e framework.

The minter contract will handle the minting of new fungible tokens, while the token contract will adhere to the PSP22 standard. Our chosen name for the fungible token smart contract is "Oxygen," and the minter contract will be called "ManicMinter."

Once the contracts are created, the ManicMinter contract will become the owner of the Oxygen contract. Only the ManicMinter contract will have the ability to mint Oxygen tokens, and users will acquire these tokens by paying native tokens to the ManicMinter contract at a price determined by its owner.

Let's help Willy to mint some Oxygen tokens through the ManicMinter contract!

## Prerequisites
Please refer to the [previous section](./manic-minter.md) for the list of prerequisites.

## ManicMinter and Oxygen Smart Contracts
### Initial Setup
In a new project folder, execute the following:

```bash
$ cargo contract new manicminter
$ cargo contract new oxygen
```
Create the root `Cargo.toml` file with the workspace content:
```toml
[workspace]
members = [
    "oxygen",
    "manicminter",
]
```

### Oxygen Contract Setup
Using the Openbrush [wizard](https://openbrush.io/), we will create a new ink! smart contract for PSP22. Provide the following information to the wizard:
```bash
version 3.0.0
constructor name: Oxygen
extensions: mintable
security: ownable
```
Copy the `lib.rs` and `Cargo.toml` from the wizard to your project `oxygen/` folder.

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

### ManicMinter Contract Setup
This tutorial uses ink! version 4.1.0. If you are using a different version, please update the `Cargo.toml` file accordingly.
```toml
[dependencies]
ink = { version = "4.1.0", default-features = false }
[dev-dependencies]
ink_e2e = "4.1.0"
```


### Verify the Contracts
The ManicMinter contract for now contains the boilerplate code. In the next step we will add the ManicMinter contract code, but for now let's just verify that our setup configuration is correct. 
Let's verify the setup so far by building the contracts. At the root of the project, execute the following:
```bash
cargo check
cargo test
```

The folder structure for your contract should now look like this:
```bash
Cargo.lock
Cargo.toml
manicminter/
oxygen/
rust-toolchain.toml
target/
```

The full code for this example is available [here](https://github.com/swanky-dapps/manic-minter).