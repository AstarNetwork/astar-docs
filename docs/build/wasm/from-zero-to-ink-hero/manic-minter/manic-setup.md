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
Let's create a new ink! smart contract for fungible tokens using Brushfam library for PSP22. In the `oxygen/` folder, add the following to the `Cargo.toml` file:
```toml
[package]
name = "oxygen"
version = "1.0.0"
edition = "2021"
authors = ["The best developer ever"]

[dependencies]

ink = { version = "4.1.0", default-features = false }

scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }

# Include brush as a dependency and enable default implementation for PSP22 via brush feature
openbrush = { tag = "3.1.0", git = "https://github.com/727-Ventures/openbrush-contracts", default-features = false, features = ["psp22", "ownable"] }

[lib]
path = "lib.rs"
crate-type = [
    "rlib",
]

[features]
default = ["std"]
std = [
    "ink/std",
    "scale/std",
    "scale-info/std",

    "openbrush/std",
]
ink-as-dependency = [] 
```

In the same `oxygen/` folder, add the following to the `lib.rs` file:
```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

pub use self::oxygen::OxygenRef;

#[openbrush::contract]
pub mod oxygen {

    use openbrush::contracts::ownable::*;
    use openbrush::contracts::psp22::extensions::mintable::*;
    use openbrush::traits::Storage;

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Oxygen {
        #[storage_field]
        psp22: psp22::Data,
        #[storage_field]
        ownable: ownable::Data,
    }

    impl PSP22 for Oxygen {}
    impl Ownable for Oxygen {}
    impl PSP22Mintable for Oxygen {}

    impl Oxygen {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self {
            let mut instance = Self::default();
            instance
                ._mint_to(instance.env().caller(), initial_supply)
                .expect("Should mint");
            instance._init_with_owner(instance.env().caller());
            instance
        }
    }
}
```

This tutorial uses ink! version 4.1.0. If you are using a different version, please update the `Cargo.toml` file accordingly.
```toml
ink = { version = "4.1.0", default-features = false }
```

Use Openbrush version `3.1.0` with ink! version 4.1.0 and add features "psp22" and  "ownable".

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