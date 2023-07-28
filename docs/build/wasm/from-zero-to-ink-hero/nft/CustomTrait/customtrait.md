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

pub mod impls;
pub mod traits;
```

The crate's `Cargo.toml` will import all ink! and Openbrush crates and it will be used by the contract's `Cargo.toml` to import all methods. We will name this package `payable_mint_pkg`.
```toml
[package]
name = "payable_mint_pkg"
version = "3.1.0"
authors = ["Astar builder"]
edition = "2021"

[dependencies]
ink = { version = "4.2.1", default-features = false }
scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2.6", default-features = false, features = ["derive"], optional = true }
openbrush = { tag = "v4.0.0-beta", git = "https://github.com/Brushfam/openbrush-contracts", default-features = false, features = ["psp34", "ownable"] }

[lib]
path = "lib.rs"
crate-type = ["rlib"]

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
In the `logics/traits/payable_mint.rs` file, add a trait_definition for PayableMint.
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
use openbrush::traits::DefaultEnv;
use openbrush::{
    contracts::psp34::*,
    traits::{AccountId, String},
};

#[openbrush::trait_definition]
pub trait PayableMintImpl: psp34::InternalImpl {
    #[ink(message, payable)]
    fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
        if Self::env().transferred_value() != 1_000_000_000_000_000_000 {
            return Err(PSP34Error::Custom(String::from("BadMintValue")));
        }

        psp34::InternalImpl::_mint_to(self, account, id)
    }
}

```

The last remaining step is to import and implement `PayableMint` in our contract:

```rust
use payable_mint_pkg::impls::payable_mint::*;

...

impl payable_mint::PayableMintImpl for Shiden34 {}
```

The contract with all its changes should now appear as something like this:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(PSP34, PSP34Enumerable, PSP34Metadata, PSP34Mintable, Ownable)]
#[openbrush::contract]
pub mod shiden34 {
    use openbrush::traits::Storage;
    use payable_mint_pkg::impls::payable_mint::*;

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Shiden34 {
        #[storage_field]
        psp34: psp34::Data,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        metadata: metadata::Data,
        #[storage_field]
        enumerable: enumerable::Data,
    }

    #[overrider(PSP34Mintable)]
    #[openbrush::modifiers(only_owner)]
    fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
        psp34::InternalImpl::_mint_to(self, account, id)
    }

   impl payable_mint::PayableMintImpl for Shiden34 {}

    impl Shiden34 {
        #[ink(constructor)]
        pub fn new() -> Self {
            let mut _instance = Self::default();
            ownable::Internal::_init_with_owner(&mut _instance, Self::env().caller());
            psp34::Internal::_mint_to(&mut _instance, Self::env().caller(), Id::U8(1))
                .expect("Can mint");
            let collection_id = psp34::PSP34Impl::collection_id(&_instance);
            metadata::Internal::_set_attribute(
                &mut _instance,
                collection_id.clone(),
                String::from("name"),
                String::from("Shiden34"),
            );
            metadata::Internal::_set_attribute(
                &mut _instance,
                collection_id,
                String::from("symbol"),
                String::from("SH34"),
            );
            _instance
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
cargo check
````

At this stage, your code should look something like [this](https://github.com/swanky-dapps/nft/tree/tutorial/trait-step3).
