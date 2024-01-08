---
sidebar_position: 8
---

# Basic Contract

Each contract should be in its **own crate**. In a folder, create two files:

- Cargo.toml: The manifest.
- lib.rs: The default library file.

Inside the Cargo.toml you will need to specify parameters in the `[package]`, `[dependencies]`, `[lib]` type, and `[features]` sections:

```toml
[package]
name = "my_contract"
version = "0.1.0"
authors = ["Your Name <name@email.com>"]
edition = "2021"

[dependencies]
ink = { version = "4.3", default-features = false}
ink_metadata = { version = "4.3", features = ["derive"], optional = true }

scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2.5", default-features = false, features = ["derive"], optional = true }

[dev-dependencies]
ink_e2e = { version = "4.3" }

[lib]
path = "lib.rs"

[features]
default = ["std"]
std = [
    "ink/std",
    "scale/std",
    "scale-info/std"
]
ink-as-dependency = []
e2e-tests = []
```

In the library file - ink! has a few minimum requirements:

- `#![cfg_attr(not(feature = "std"), no_std, no_main)]` at the beginning of each contract file.
- a module with `#[ink::contract]`.
- a (storage) struct - that can be empty - with `#[ink(storage)]`.
- at least one constructor with `#[ink(constructor)]`.
- at least one fn with `#[ink(message)]`.

In the `lib.rs` the minimum implementation is:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod my_contract {

    #[ink(storage)]
    pub struct MyContract {}

    impl MyContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message)]
        pub fn do_something(&self) {
            ()
        }
    }
}
```

The [flipper](https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs) smart contract is the most basic example provided by ink! team.

# Using Swanky

You can also use Swanky Suite to fast track your development efforts when setting up the project. Go to this section to learn how to [bootstrap a smart contract using Swanky](/docs/build/wasm/swanky-suite/cli#bootstrap-a-new-project)
