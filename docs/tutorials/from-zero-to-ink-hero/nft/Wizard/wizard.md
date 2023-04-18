# Openbrush Wizard

## Use the Wizard to generate generic PSP34 code

To create a smart contract which follows PSP34 standard use Openbrush Wizard:
1. Open [Openbrush.io] (https://openbrush.io/) website and go to bottom of the page.
2. Select PSP34.
3. Select the version to match the rest of the tutorial. Check *What will be used* in the [opening chapter] (/docs/build/wasm/from-zero-to-ink-hero/nft/#what-will-be-used).
4. Name your contract. In this tutorial we will use `Shiden34`.
5. Add your symbol name. In this tutorial we will use `SH34`.
6. Select extensions: *Metadata*, *Mintable*, *Enumerable*.
7. Under Security pick *Ownable*.
8. Copy `lib.rs` and `Cargo.toml`.

:::note
At the time of writing this tutorial, Openbrush wizard does not properly generate contract. Use code from this tutorial.
:::

Your `lib.rs` file should look like this:
```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod shiden34 {
    use openbrush::{
        contracts::psp34::extensions::{
            enumerable::*,
            mintable::*,
            metadata::*,
        },
        contracts::ownable::*,
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
    impl PSP34Mintable for Shiden34 {
        #[ink(message)]
		#[openbrush::modifiers(only_owner)]
		fn mint(
            &mut self,
            account: AccountId,
			id: Id
        ) -> Result<(), PSP34Error> {
			self._mint_to(account, id)
		}
    }
    impl PSP34Enumerable for Shiden34 {}
	impl PSP34Metadata for Shiden34 {}

    impl Shiden34 {
        #[ink(constructor)]
        pub fn new() -> Self {
            let mut instance = Self::default();
            instance._init_with_owner(instance.env().caller());
            instance._mint_to(instance.env().caller(), Id::U8(1)).expect("Can't mint");
            let collection_id = instance.collection_id();
            instance._set_attribute(collection_id.clone(), String::from("name"), String::from("Shiden34"));
			instance._set_attribute(collection_id, String::from("symbol"), String::from("SH34"));
            instance
        }
    }
}
```

Your `Cargo.toml` should now look like this:
```toml
[package]
name = "shiden34"
version = "3.0.0"
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
    "scale-info/std",

    "openbrush/std",
]
ink-as-dependency = []
```

Make the folder structure or use `Swanky-cli` like this:
```bash
.
└── contracts
    └── shiden34
        ├── Cargo.toml
        └── lib.rs
```

Add another `Cargo.toml` with workspace definition to your project's root folder:
```toml
[workspace]
members = [
    "contracts/**",
]

exclude = [
]
```
And your folder structure will look like:
```cargo
.
├── Cargo.toml
└── contracts
    └── shiden34
        ├── Cargo.toml
        └── lib.rs
```
You are now ready to check if all is set.
Run in root project folder:
```bash
cargo +nightly check
```
:::warning
If you are using stable rustc compiler you will get:
`error[E0554]: #![feature] may not be used on the stable release channel`

Since Openbrush uses `#![feature(min_specialization)]` which is unstable feature, you need to use `cargo +nightly`.
Check [Setup environment chapter] (/docs/build/environment/ink_environment#rust-and-cargo) to instal nightly toolchain.
:::

## Examine Openbrush Traits
Let's examine what we have inside module `shiden34` (lib.rs) so far:
* Defined structure `Shiden34` for contract storage.
* Implemented constructor `new()` for `Shiden34` structure.
* Implemented Openbrush traits *PSP34, Metadata, Mintable, Enumberable, Ownable* for structure `Shiden34`.
* Overridden `mint()` method from trait *Mintable*. More about this in next section.

Each of implemented traits will enrich `shiden34` contract with a set of methods. To examine which methods you now have available check:
* Openbrush [PSP34 trait] (https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/psp34.rs) brings all familiar functions from ERC721 plus a few extra:
    * `collection_id()`
    * `balance_of()`
    * `owner_of()`
    * `allowance()`
    * `approve()`
    * `transfer()`
    * `total_supply()`
* Openbrush [Metadata] (https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/extensions/metadata.rs)
    * `get_attribute()`
* Openbrush [Mintable] (https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/extensions/mintable.rs)
    * `mint()`
* Openbrush [Enumerable] (https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/extensions/enumerable.rs)
    * `owners_token_by_index()`
    * `token_by_index()`
* Openbrush [Ownable] (https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/access/ownable/mod.rs)
    * `renounceOwnership ()`
    * `transferOwnership()`
    * `owner()`

Major differences when compared with ERC721 are:
1. `Metadata` trait brings possibility to define numerous attributes
2. `PSP34` trait brings collection_id() which can be used or ignored in contracts

We could have used `Burnable` trait as well but for simplicity it is skipped in this tutorial since burning can be performed by sending a token to address 0x00.

After this step your code should look like [this] (https://github.com/swanky-dapps/nft/tree/tutorial/wizard-step1).

## Build, Deploy and Interact with the Contract
Build your contract:
```bash
cd contracts/shiden34
cargo +nightly contract build --release
```
Use ***shiden34.contract*** target to deploy contract.
The file is located in this folder:
```
ls target/ink/shiden34/
```

To deploy your contract using the Polkadot.js apps portal, follow the previous guide, or use the [contracts-ui] (https://contracts-ui.substrate.io/?rpc=wss://rpc.shibuya.astar.network).

You can start interacting with your contract. You will notice that one token is already minted. This is due to the `mint()` call in the contract's constructor `new()`.
* Try minting another token by calling `mint()`.
* Read the token `ownerOf()` for your newly minted token.
* Check that `totalSupply()` has increased.


