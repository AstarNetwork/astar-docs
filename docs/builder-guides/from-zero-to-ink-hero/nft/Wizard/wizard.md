# Openbrush Wizard

## Use the Wizard to generate generic PSP34 code

To create a smart contract which follows PSP34 standard use Openbrush Wizard:
1. Open [Openbrush.io](https://openbrush.io/) website and go to bottom of the page.
2. Select PSP34.
3. Select the version to match the rest of the tutorial. Check *What will be used* in the [prerequisites chapter](../nft.md).
4. Name your contract. In this tutorial we will use `shiden34`.
5. Select extensions: *Metadata*, *Mintable*, *Enumerable*.
6. Under Security pick *Ownable*.
7. Copy `lib.rs` and `Cargo.toml`.

Your `lib.rs` file should look like this:
```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
        
#[openbrush::contract]
pub mod shiden34 {
    // imports from ink!
	use ink_storage::traits::SpreadAllocate;

    // imports from openbrush
	use openbrush::traits::String;
	use openbrush::traits::Storage;
	use openbrush::contracts::ownable::*;
	use openbrush::contracts::psp34::extensions::mintable::*;
	use openbrush::contracts::psp34::extensions::enumerable::*;
	use openbrush::contracts::psp34::extensions::metadata::*;

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Contract {
    	#[storage_field]
		psp34: psp34::Data<Balances>,
		#[storage_field]
		ownable: ownable::Data,
		#[storage_field]
		metadata: metadata::Data,
    }
    
    // Section contains default implementation without any modifications
	impl PSP34 for Contract {}
	impl Ownable for Contract {}
	impl PSP34Mintable for Contract {
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
	impl PSP34Enumerable for Contract {}
	impl PSP34Metadata for Contract {}
     
    impl Contract {
        #[ink(constructor)]
        pub fn new() -> Self {
            ink_lang::codegen::initialize_contract(|_instance: &mut Contract|{
				_instance._init_with_owner(_instance.env().caller());
				_instance._mint_to(_instance.env().caller(), Id::U8(1)).expect("Can't mint");
				let collection_id = _instance.collection_id();
				_instance._set_attribute(collection_id.clone(), String::from("name"), String::from("Shiden34"));
				_instance._set_attribute(collection_id, String::from("symbol"), String::from("SH34"));
			})
        }
    }
}
```

Your `Cargo.toml` should now look like this:
```toml
[package]
name = "shiden34"
version = "1.0.0"
edition = "2021"
authors = ["The best developer ever"]

[dependencies]

ink_primitives = { version = "~3.4.0", default-features = false }
ink_metadata = { version = "~3.4.0", default-features = false, features = ["derive"], optional = true }
ink_env = { version = "~3.4.0", default-features = false }
ink_storage = { version = "~3.4.0", default-features = false }
ink_lang = { version = "~3.4.0", default-features = false }
ink_prelude = { version = "~3.4.0", default-features = false }
ink_engine = { version = "~3.4.0", default-features = false, optional = true }

scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2", default-features = false, features = ["derive"], optional = true }

# Include brush as a dependency and enable default implementation for PSP34 via brush feature
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp34", "ownable"] }

[lib]
name = "shiden34"
path = "lib.rs"
crate-type = [
    # Used for normal contract Wasm blobs.
    "cdylib",
]

[features]
default = ["std"]
std = [
    "ink_primitives/std",
    "ink_metadata",
    "ink_metadata/std",
    "ink_env/std",
    "ink_storage/std",
    "ink_lang/std",
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
cargo check
```

:::tip
if your rust environment is setup to use stable toolchain as default (instead of nigthly build), you might get this error:
```error[E0554]: `#![feature]` may not be used on the stable release channel```

In that case try to run the following command instead:
```bash
cargo +nightly check
```
or change your defauilt toolchain to nightly:
```bash
rustup default nightly
```
:::


## Examine Openbrush Traits 
Let's examine what we have inside module `shiden34` (lib.rs) so far:
* Defined structure `Contract` for contract storage.
* Implemented constructor `new()` for `Contract` structure.
* Implemented Openbrush traits *PSP34, Metadata, Mintable, Enumberable, Ownable* for structure `Contract`.
* Overridden `mint()` method from trait *Mintable*. More about this in next section.

Each of implemented traits will enrich `shiden34` contract with a set of methods. To examine which methods you now have available check:
* Openbrush [PSP34 trait](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/psp34.rs) brings all familiar functions from ERC721 plus a few extra:
    * `collection_id()`
    * `balance_of()`
    * `owner_of()`
    * `allowance()`
    * `approve()`
    * `transfer()`
    * `total_supply()`
* Openbrush [Metadata](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/extensions/metadata.rs)
    * `get_attribute()`
* Openbrush [Mintable](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/extensions/mintable.rs) 
    * `mint()`
* Openbrush [Enumerable](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/traits/psp34/extensions/enumerable.rs)
    * `owners_token_by_index()`
    * `token_by_index()`
* Openbrush [Ownable](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/access/ownable/mod.rs)
    * `renounceOwnership ()`
    * `transferOwnership()`
    * `owner()`

Major differences when compared with ERC721 are:
1. `Metadata` trait brings possibility to define numerous attributes
2. `PSP34` trait brings collection_id() which can be used or ignored in contracts

We could have used `Burnable` trait as well but for simplicity it is skipped in this tutorial since burning can be performed by sending a token to address 0x00.

After this step your code should look like [this](https://github.com/swanky-dapps/nft/tree/tutorial/wizard-step1).

## Build, Deploy and Interact with the Contract
Build your contract:
```bash
cd contracts/shiden34
cargo contract build --release
```
Use ***shiden34.contract*** target to deploy contract.   
The file is located in this folder:
```
ls target/ink/shiden34/
```

To deploy your contract using Polkadot.js you can follow [instructions](https://docs.astar.network/docs/wasm/sc-dev/polkadotjs-ui). Other easy way to deploy your contract is by using the [contracts-ui](https://contracts-ui.substrate.io/?rpc=wss://rpc.shibuya.astar.network).

You can start interacting with your contract. You will notice that one token is already minted. This is due to the `mint()` call in the contract's constructor `new()`.
* Try minting another token by calling `mint()`.
* Read the token `ownerOf()` for your newly minted token.
* Check that `totalSupply()` has increased.


