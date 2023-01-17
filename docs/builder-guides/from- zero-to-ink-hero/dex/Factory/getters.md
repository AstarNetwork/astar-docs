---
sidebar_position: 1
---

# Factory Storage and Getters

If you start tutorial from here, Please checkout this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/modifiers_end) and open it in your IDE.

## 1. Factory Storage

Factory contract has those [storage fields](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Factory.sol#L7) in Solidity that we should implement:

```solidity
    address public feeTo;
    address public feeToSetter;

    mapping(address => mapping(address => address)) public getPair;
    address[] public allPairs;
```

ink! uses most substrate primitives types. This is the table of conversion between Solidity and ink! types:

| Solidity                                | ink!                                                                                      |
|-----------------------------------------|-------------------------------------------------------------------------------------------|
| uint256                                 | [U256](https://docs.rs/primitive-types/latest/primitive_types/struct.U256.html)           |          
| any other uint                          | u128 (or lower)                                                                           |
| address                                 | AccountId                                                                                 |
| mapping(key => value)                   | [Mapping(key, value)](https://docs.rs/ink_storage/latest/ink_storage/struct.Mapping.html) |
| mapping(key1 => mapping(key2 => value)) | [Mapping((key1 ,key2), value)](https://substrate.stackexchange.com/a/3993/567)            |

Let's create a storage struct in *./logics/impls/factory/data.rs*. Name the struct `Data` and add all the required fields:
```rust
pub struct Data {
    pub fee_to: AccountId,
    pub fee_to_setter: AccountId,
    pub get_pair: Mapping<(AccountId, AccountId), AccountId>,
    pub all_pairs: Vec<AccountId>,
}
```

Factory contract will deploy instances of Pair contract . In Substrate, the contract deployment process is split into [two steps](https://use.ink/getting-started/deploy-your-contract):
1. Putting your contract code on the blockchain (the wasm blob will be uploaded and has a unique `code_hash`)
2. Creating an instance of your contract (by calling a constructor)

That's why factory Storage should save the Pair contract `code_hash` to instancite it. Please add Pair code_hash field to the Storage:
```rust
    pub pair_contract_code_hash: Hash,
```

Openbrush uses a specified storage key instead of the default one in the attribute [openbrush::upgradeable_storage](https://github.com/Supercolony-net/openbrush-contracts/blob/main/lang/macro/src/lib.rs#L447). It implements all [required traits](https://docs.openbrush.io/smart-contracts/upgradeable#suggestions-on-how-follow-the-rules) with specified storage key (storage key is a required input argument of the macro).
To generate a unique key Openbrush provides [openbrush::storage_unique_key!](https://docs.openbrush.io/smart-contracts/upgradeable#unique-storage-key) declarative macro that is base on the name of the struct and its file path. Let's add this to our struct and import required fields:
```rust
use ink_env::Hash;
use ink_prelude::vec::Vec;
use openbrush::{
    storage::Mapping,
    traits::AccountId,
};

pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

#[derive(Default, Debug)]
#[openbrush::upgradeable_storage(STORAGE_KEY)]
pub struct Data {
    pub fee_to: AccountId,
    pub fee_to_setter: AccountId,
    pub get_pair: Mapping<(AccountId, AccountId), AccountId>,
    pub all_pairs: Vec<AccountId>,
    pub pair_contract_code_hash: Hash,
}
```
*./logics/impls/factory/data.rs*

## 2. Trait for Getters

Unlike Solidity that will automatically create getters for the storage items, you should add it yourself in ink!. There is already a `Factory` trait with `fee_to` function in the file *./logics/traits/factory.rs*.    
Add all getters:
```rust
use openbrush::traits::AccountId;

#[openbrush::wrapper]
pub type FactoryRef = dyn Factory;

#[openbrush::trait_definition]
pub trait Factory {
    #[ink(message)]
    fn all_pair_length(&self) -> u64;

    #[ink(message)]
    fn set_fee_to(&mut self, fee_to: AccountId) -> Result<(), FactoryError>;

    #[ink(message)]
    fn set_fee_to_setter(&mut self, fee_to_setter: AccountId) -> Result<(), FactoryError>;

    #[ink(message)]
    fn fee_to(&self) -> AccountId;

    #[ink(message)]
    fn fee_to_setter(&self) -> AccountId;

    #[ink(message)]
    fn get_pair(&self, token_a: AccountId, token_b: AccountId) -> Option<AccountId>;

    fn _emit_create_pair_event(
        &self,
        _token_0: AccountId,
        _token_1: AccountId,
        _pair: AccountId,
        _pair_len: u64,
    );
}
```

Last thing is the Error enum. Each contract should use its own error enum. As it will be used in function arguments it should implement Scale encode & decode.
For the moment we don't need a proper error so just add `Error` as field:
```rust
...
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum FactoryError {
    Error
}
```
*./logics/traits/factory.rs*

## 3. Implement Getters

in *./logics/impls/factory/factory.rs* add and impl block for generic type `data::Data`. We wrap the Data struct in Storage trait to add it as trait bound:
```rust
pub use crate::{
    impls::factory::*,
    traits::factory::*,
};
use openbrush::{
    traits::{
        AccountId,
        Storage
    },
};

impl<T: Storage<data::Data>> Factory for T {}
```

**all_pair_length** 

This getter return the total number of pairs:
```rust
    fn all_pair_length(&self) -> u64 {
    self.data::<data::Data>().all_pairs.len() as u64
}
```

**set_fee_to** 

This setter set the address collecting the fee:
```rust
    fn set_fee_to(&mut self, fee_to: AccountId) -> Result<(), FactoryError> {
    self.data::<data::Data>().fee_to = fee_to;
    Ok(())
}
```

**set_fee_to_setter**

This setter set the address of the fee setter:
```rust
    fn set_fee_to_setter(&mut self, fee_to_setter: AccountId) -> Result<(), FactoryError> {
    self.data::<data::Data>().fee_to_setter = fee_to_setter;
    Ok(())
}
```

**fee_to**

This getter return the address collecting the fee:
```rust
    fn fee_to(&self) -> AccountId {
    self.data::<data::Data>().fee_to
}
```

**fee_to_setter**

This getter return the address of the fee setter:
```rust
    fn fee_to(&self) -> AccountId {
    self.data::<data::Data>().fee_to
}
```

**get_pair**

This getter takes two addresses as argument and return the pair contract address (or None if not found):
```rust
    fn get_pair(&self, token_a: AccountId, token_b: AccountId) -> Option<AccountId> {
    self.data::<data::Data>().get_pair.get(&(token_a, token_b))
}
```

### 4. Implement getters in contract

in *./uniswap-v2/contracts* create a `factory` folder with a `Cargo.toml` and `lib.rs`.    
The `Cargo.toml` should look like this:
```toml
[package]
name = "factory_contract"
version = "0.1.0"
authors = ["Stake Technologies <devops@stake.co.jp>"]
edition = "2021"

[dependencies]
ink_primitives = { version = "3.4.0", default-features = false }
ink_metadata = { version = "3.4.0", default-features = false, features = ["derive"], optional = true }
ink_env = { version = "3.4.0", default-features = false }
ink_storage = { version = "3.4.0", default-features = false }
ink_lang = { version = "3.4.0", default-features = false }
ink_prelude = { version = "3.4.0", default-features = false }

scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2", default-features = false, features = ["derive"], optional = true }

openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }
uniswap_v2 = { path = "../../logics", default-features = false }

[lib]
name = "factory_contract"
path = "lib.rs"
crate-type = ["cdylib"]

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
    "scale-info",
    "scale-info/std",
    "openbrush/std",
    "uniswap_v2/std"
]
ink-as-dependency = []

[profile.dev]
overflow-checks = false

[profile.release]
overflow-checks = false
```

In the `lib.rs` creates a factory module with Openbrush contract. Import the `Storage` trait from openbrush (as well as `ZERO_ADDRESS`) and `SpreadAllocate` from ink!
As reminder the `#![cfg_attr(not(feature = "std"), no_std)]` attribute is for [conditional compilation](https://use.ink/faq#what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean) and the `#![feature(min_specialization)]` is the feature needed for enable [specialization](../Structure/file-structure.md).
Also import everything (with `*`) from `impls::factory` and `traits::factory`:
```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod factory {
    use ink_storage::traits::SpreadAllocate;
    use openbrush::traits::{
        Storage,
        ZERO_ADDRESS,
    };
    use uniswap_v2::{
        impls::factory::*,
        traits::factory::*,
    };
```

Add the [storage struct](https://use.ink/macros-attributes/storage) and add the factory field (that we defined in traits):

```rust
#[ink(storage)]
#[derive(Default, SpreadAllocate, Storage)]
pub struct FactoryContract {
    #[storage_field]
    factory: data::Data,
}
```

implement the Factory trait to your contract struct:
```rust
    impl Factory for FactoryContract {}
```

Add an `impl` block for the contract and add the constructor. The constructor takes 2 arguments `fee_to_setter` and the `pair_code_hash` and set it in storage:
```rust
    impl FactoryContract {
    #[ink(constructor)]
    pub fn new(fee_to_setter: AccountId, pair_code_hash: Hash) -> Self {
        ink_lang::codegen::initialize_contract(|instance: &mut Self| {
            instance.factory.pair_contract_code_hash = pair_code_hash;
            instance.factory.fee_to_setter = fee_to_setter;
            instance.factory.fee_to = ZERO_ADDRESS.into();
        })
    }
}
```

And that's it! Check your Factory contract with (to run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/factory_storage).
