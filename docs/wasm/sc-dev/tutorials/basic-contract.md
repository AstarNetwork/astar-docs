---
sidebar_position: 1
---

# Basic Contract

## Using `cargo-contracts`

Using cargo-contract will create a new folder with the basic code of [Flipper] contract.

Run the command `cargo contract new my_contract`.

## Manual Mode

Each contract should be in its own crate. In a folder create two files:

- Cargo.toml: The manifest
- lib.rs: The default library file
Inside the Cargo.toml specify the `[package]`, `[dependencies]` , `[lib]` type and `[features]`

```toml
[package]
name = "my_contract"
version = "3.0.0"
authors = ["Your Name <name@email.com>"]
edition = "2021"

[dependencies]
ink_primitives = { tag = "v3.0.0", git = "<https://github.com/paritytech/ink>", default-features = false }
ink_metadata = { tag = "v3.0.0", git = "<https://github.com/paritytech/ink>", default-features = false, features = ["derive"], optional = true }
ink_env = { tag = "v3.0.0", git = "<https://github.com/paritytech/ink>", default-features = false }
ink_storage = { tag = "v3.0.0", git = "<https://github.com/paritytech/ink>", default-features = false }
ink_lang = { tag = "v3.0.0", git = "<https://github.com/paritytech/ink>", default-features = false }

scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2", default-features = false, features = ["derive"], optional = true }

[lib]
name = "my_contract"
path = "lib.rs"
crate-type = ["cdylib"]

[features]
default = ["std"]
std = [
    "ink_primitives/std",
    "ink_metadata/std",
    "ink_env/std",
    "ink_storage/std",
    "ink_lang/std",
    "scale/std",
    "scale-info/std",
]
ink-as-dependency = []
```

In the library file - ink! has some minimum requirements:

- `#![cfg_attr(not(feature = "std"), no_std)]` at the beginning of each contract file link
- a module with `#[ink::contract]`
- a (storage) struct - that can be empty - with `#[ink(storage)]`
- at least one constructor with `#[ink(constructor)]`
- at least one fn with `#[ink(message)]`

In the lib.rs the minimum implementation is:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

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
        pub fn do_nothing(&self) {
            ()
        }
    }
}
```

[Flipper]: https://github.com/paritytech/ink/blob/master/examples/flipper/lib.rs
