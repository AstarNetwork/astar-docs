---
sidebar_position: 4
---

# Basic Contract

Each contract should be in its **own crate**. In a folder, create two files:

- Cargo.toml: The manifest.
- lib.rs: The default library file.

Inside the Cargo.toml you will need to specify parameters in the `[package]`, `[dependencies]`, `[lib]` type, and `[features]` sections:

```toml
[package]
name = "my_contract"
version = "4.0.0-rc"
authors = ["Your Name <name@email.com>"]
edition = "2021"

[dependencies]
ink = { version = "~4.0.0-rc", default-features = false}
ink_metadata = { version = "~4.0.0-rc", features = ["derive"], optional = true }

scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }

[lib]
name = "my_contract"
path = "lib.rs"
crate-type = ["cdylib"]

[features]
default = ["std"]
std = [
    "ink/std",
    "ink_metadata",
    "ink_metadata/std",
    "scale/std",
    "scale-info/std"
]
ink-as-dependency = []
```

In the library file - ink! has a few minimum requirements:

- `#![cfg_attr(not(feature = "std"), no_std)]` at the beginning of each contract file link.
- a module with `#[ink::contract]`.
- a (storage) struct - that can be empty - with `#[ink(storage)]`.
- at least one constructor with `#[ink(constructor)]`.
- at least one fn with `#[ink(message)]`.

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
