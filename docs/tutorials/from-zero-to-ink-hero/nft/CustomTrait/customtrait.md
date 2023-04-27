# Custom Trait

Next, we will expand the contract with more utility methods to have more control over the NFT creation, minting, payments and all that most of the NFT projects will need.
To start with we will move `mint()` from contract `lib.rs` to a custom trait `PayableMint`.

## Folder Structure for Custom Trait
Before starting to add code we need to prepare the scene for the external trait. Create new `logics` folder with following empty files:
```bash
.
├── Cargo.toml
├── contracts
│   └── shiden34
│       ├── Cargo.toml
│       └── lib.rs
└── logics
    ├── Cargo.toml
    ├── impls
    │   ├── mod.rs
    │   └── payable_mint
    │       ├── mod.rs
    │       └── payable_mint.rs
    ├── lib.rs
    └── traits
        ├── mod.rs
        └── payable_mint.rs
```

## Module Linking
With the extended structure we need to link all new modules. Let's start from `logics` folder.
The crate's `lib.rs` needs to point to `impls` and `trait` folders and since it is top module for this crate it needs a few macros:
```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

pub mod impls;
pub mod traits;
```

The crate's `Cargo.toml` will import all ink! and Openbrush crates and it will be used by the contract's `Cargo.toml` to import all methods. We will name this package `payable_mint_pkg`.
```toml
[package]
name = "payable_mint_pkg"
version = "0.3.0"
authors = ["Astar builder"]
edition = "2021"

[dependencies]
ink = { version = "~4.0.0", default-features = false}

scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }

openbrush = { tag = "3.0.0", git = "https://github.com/727-Ventures/openbrush-contracts", default-features = false, features = ["psp34", "ownable"] }

[lib]
path = "lib.rs"

[features]
default = ["std"]
std = [
    "ink/std",
    "scale/std",
    "scale-info",
    "openbrush/std",
]
```
Add same `mod.rs` file in folders: traits, impls, and impls/payable_mint.
```rust
pub mod payable_mint;
```
As a last step add link to `payable_mint` in contract's `Cargo.toml`.
```toml
payable_mint_pkg = { path = "../../logics", default-features = false }

[features]
default = ["std"]
std = [
    // ...
    "payable_mint_pkg/std",
]
```

## Define Custom Trait
In the `logics/traits/payable_mint.rs` file, add a `trait_definition` for `PayableMint`.
```rust
use openbrush::{
    contracts::{
        psp34::PSP34Error,
        psp34::extensions::enumerable::*
    },
    traits::{
        AccountId,
    },
};

#[openbrush::wrapper]
pub type PayableMintRef = dyn PayableMint;

#[openbrush::trait_definition]
pub trait PayableMint {
    #[ink(message, payable)]
    fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error>;
}
```

You may have noticed some unusual macro commands in these examples. They will be explained in greater detail in the next section as we go over the process of building a DEX.

## Move `mint()` Function to Custom Trait Implementation
Let's move the `mint()` function from the contract's `lib.rs` to the newly created `logics/impls/payable_mint.rs` file, as we do not want any duplicated calls in the contract.

```rust
pub use crate::traits::payable_mint::PayableMint;
use openbrush::{
    contracts::{
        psp34::extensions::{
            enumerable::*,
        },
    },
    traits::{
        AccountId,
        Storage,
        String
    },
};

impl<T> PayableMint for T
where
    T: Storage<psp34::Data<enumerable::Balances>>
        + psp34::extensions::metadata::PSP34Metadata
        + psp34::Internal,
{
    default fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
        if Self::env().transferred_value() != 1_000_000_000_000_000_000 {
            return Err(PSP34Error::Custom(String::from("BadMintValue")))
        }
        self._mint_to(account, id)
    }
}
```

The last remaining step is to import and implement `PayableMint` in our contract:

```rust
use payable_mint::{
    traits::payable_mint::*,
};

...

impl PayableMint for Contract {}
```

The contract with all its changes should now appear as something like this:

```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod shiden34 {
	use payable_mint_pkg::traits::payable_mint::*;
    use openbrush::{
        contracts::ownable::*,
        contracts::psp34::extensions::{enumerable::*, metadata::*},
        traits::{Storage, String},
    };

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Shiden34 {
        #[storage_field]
        psp34: psp34::Data<enumerable::Balances>,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        metadata: metadata::Data,
    }

    impl PSP34 for Shiden34 {}
    impl Ownable for Shiden34 {}
    impl PSP34Enumerable for Shiden34 {}
    impl PSP34Metadata for Shiden34 {}
	impl PayableMint for Shiden34 {}

    impl Shiden34 {
        #[ink(constructor)]
        pub fn new() -> Self {
            let mut instance = Self::default();
            instance._init_with_owner(instance.env().caller());
            let collection_id = instance.collection_id();
            instance._set_attribute(
                collection_id.clone(),
                String::from("name"),
                String::from("Shiden34"),
            );
            instance._set_attribute(collection_id, String::from("symbol"), String::from("SH34"));
            instance
        }
    }
}
```
Format your code with:
```bash
cargo fmt --all
```

Check if code compiles:
```bash
cargo +nightly check
````

At this stage, your code should look something like [this] (https://github.com/swanky-dapps/nft/tree/tutorial/trait-step3).
