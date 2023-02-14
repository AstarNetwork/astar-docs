---
sidebar_position: 2
---

# Pair Storage and Getters

If you are  tutorial from here, Please checkout this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/start) and open it in your IDE.

## 1. Logics Crate

As described in the [File & Folder structure](../Structure/file-structure.md) section, the Pair business logic will be in the uniswap-v2 logics crate.
Let's create (empty) files and folders so your project looks like this:

```bash
├── uniswap-v2
│   ├── contracts
│   ├── logics
│   │   ├── impls
│   │   │   ├── pair
│   │   │   │    ├── mod.rs
│   │   │   │    ├── data.rs
│   │   │   │    └── pair.rs
│   │   │   └── mod.rs
│   │   └── traits
│   │       ├── mod.rs
│   │       ├── pair.rs
│   ├── Cargo.toml
│   └── lib.rs
├── Cargo.lock
├── Cargo.toml
├── .rustfmt
└── .gitignore
```

The *./uniswap-v2/logics/Cargo.toml* will be a `rlib` crate named `"uniswap_v2""` and import crates from ink!, scale, and Openbrush (with feature `"psp22"`)

```toml
[package]
name = "uniswap_v2"
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

openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22"] }

[lib]
name = "uniswap_v2"
path = "lib.rs"
crate-type = [
    "rlib",
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
    "scale-info",
    "scale-info/std",
    "openbrush/std",
]
```
*./uniswap-v2/logics/Cargo.toml*

The `lib.rs` file should contain a conditional compilation attribute. It should also export `impls` and `traits`
```rust
#![cfg_attr(not(feature = "std"), no_std)]

pub mod impls;
pub mod traits;
```
*./uniswap-v2/logics/lib.rs*

## 2. Pair Storage

The Uniswap V2 Pair contract has [storage fields](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L18) in Solidity that we should implement as shown below:

```solidity
address public factory;
address public token0;
address public token1;

uint112 private reserve0;           // uses single storage slot, accessible via getReserves
uint112 private reserve1;           // uses single storage slot, accessible via getReserves
uint32  private blockTimestampLast; // uses single storage slot, accessible via getReserves

uint public price0CumulativeLast;
uint public price1CumulativeLast;
uint public kLast; // reserve0 * reserve1, as of immediately after the most recent liquidity event
```

ink! uses most Substrate primitive types. Here is a conversion table between Solidity and ink! types:

| Solidity                                | ink!                                                                                      |
|-----------------------------------------|-------------------------------------------------------------------------------------------|
| uint256                                 | [U256](https://docs.rs/primitive-types/latest/primitive_types/struct.U256.html)           |          
| any other uint                          | u128 (or lower)                                                                           |
| address                                 | AccountId                                                                                 |
| mapping(key => value)                   | [Mapping(key, value)](https://docs.rs/ink_storage/latest/ink_storage/struct.Mapping.html) |
| mapping(key1 => mapping(key2 => value)) | [Mapping((key1 ,key2), value)](https://substrate.stackexchange.com/a/3993/567)            |

Let's create a storage struct in *./logics/impls/pair/data.rs*. Name the struct `Data` and add all the required fields. 

```rust
pub struct Data {
    pub factory: AccountId,
    pub token_0: AccountId,
    pub token_1: AccountId,
    pub reserve_0: Balance,
    pub reserve_1: Balance,
    pub block_timestamp_last: Timestamp,
    pub price_0_cumulative_last: Balance,
    pub price_1_cumulative_last: Balance,
    pub k_last: u128,
}
```

Openbrush uses a specified storage key instead of the default one in the attribute [openbrush::upgradeable_storage](https://github.com/Supercolony-net/openbrush-contracts/blob/main/lang/macro/src/lib.rs#L447). It implements all [required traits](https://docs.openbrush.io/smart-contracts/upgradeable#suggestions-on-how-follow-the-rules) with the specified storage key (storage key is a required input argument of the macro).
To generate a unique key Openbrush provides the [openbrush::storage_unique_key!](https://docs.openbrush.io/smart-contracts/upgradeable#unique-storage-key) declarative macro that is based on the name of the struct and its file path. Let's add this to our struct and import the required fields.

```rust
use openbrush::traits::{
    AccountId,
    Balance,
    Timestamp,
};

pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

#[derive(Default, Debug)]
#[openbrush::upgradeable_storage(STORAGE_KEY)]
pub struct Data {
    pub factory: AccountId,
    pub token_0: AccountId,
    pub token_1: AccountId,
    pub reserve_0: Balance,
    pub reserve_1: Balance,
    pub block_timestamp_last: Timestamp,
    pub price_0_cumulative_last: Balance,
    pub price_1_cumulative_last: Balance,
    pub k_last: u128,
}
```
*./logics/impls/pair/data.rs*

## 3. Trait for Getters

Unlike Solidity that will automatically create getters for the storage items, you need to add them yourself in ink!. For this we will create a trait and add generic implementation.
in the *./logics/traits/pair.rs* file, let's create a trait with the getters functions and make them callable with `#[ink(message)]` :

```rust
pub trait Pair {
    #[ink(message)]
    fn get_reserves(&self) -> (Balance, Balance, Timestamp);

    #[ink(message)]
    fn initialize(&mut self, token_0: AccountId, token_1: AccountId) -> Result<(), PairError>;

    #[ink(message)]
    fn get_token_0(&self) -> AccountId;

    #[ink(message)]
    fn get_token_1(&self) -> AccountId;
}
```

Openbrush provides `#[openbrush::trait_definition]` that will make sure your trait (and its default implementation) will be generated in the contract. Also, you can create a wrapper around this trait so it can be used for cross-contract calls (so no need to import the contract as ink-as-dependancy). Import what is needed from Openbrush:

```rust
use openbrush::traits::{
    AccountId,
    Balance,
    Timestamp,
};

#[openbrush::wrapper]
pub type PairRef = dyn Pair;

#[openbrush::trait_definition]
pub trait Pair {
    #[ink(message)]
    fn get_reserves(&self) -> (Balance, Balance, Timestamp);

    #[ink(message)]
    fn initialize(&mut self, token_0: AccountId, token_1: AccountId) -> Result<(), PairError>;

    #[ink(message)]
    fn get_token_0(&self) -> AccountId;

    #[ink(message)]
    fn get_token_1(&self) -> AccountId;
}
```
*./logics/traits/pair.rs*

The last thing to add will be the Error enum, and each contract should use its own. As it will be used in function arguments it should implement Scale encode & decode.
For the moment we don't need a proper error so just add `Error` as field:

```rust
...
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum PairError {
    Error,
}
```
*./logics/traits/pair.rs*

## 4. Implement Getters

in *./logics/impls/pair/pair.rs* add an impl block for generic type `data::Data`. We wrap the Data struct in Storage trait to add it as trait bound.

```rust
impl<T: Storage<data::Data>> Pair for T {}
```

**get_reserves**

This function should return a tuple of reserves & timestamp of type `(Balance, Balance, Timestamp)`. It takes `&self` as it should access to Data storage struct but will not modify it hence no need for a mutable ref.
```rust
fn get_reserves(&self) -> (Balance, Balance, Timestamp) {
    (
        self.data::<data::Data>().reserve_0,
        self.data::<data::Data>().reserve_1,
        self.data::<data::Data>().block_timestamp_last,
    )
}
```

**initialize**

This method is more of a setter as it will set token address in storage. That's why it takes a `&mut self` as the first argument.    
As a general rule if a function only takes `&self` then it will not modify the state so it will only be called as a query.
If the functions takes an `&mut self` it will make state change so can be called as a transaction, and should return a Result<T, E>.
Only factory can call this [function](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L67), but we will add `only_owner` modifier later in this tutorial.

```rust
fn initialize(
    &mut self,
    token_0: AccountId,
    token_1: AccountId,
) -> Result<(), PairError> {
    self.data::<data::Data>().token_0 = token_0;
    self.data::<data::Data>().token_1 = token_1;
    Ok(())
}
```

**get_token**

These two functions return the accountId of the tokens

```rust
fn get_token_0(&self) -> AccountId {
    self.data::<data::Data>().token_0
}

fn get_token_1(&self) -> AccountId {
    self.data::<data::Data>().token_1
}
```

Add imports, and your file should look like this:

```rust
pub use crate::{
    impls::pair::*,
    traits::pair::*,
};
use openbrush::traits::{
    AccountId,
    Balance,
    Storage,
    Timestamp,
};

impl<T: Storage<data::Data>> Pair for T {
    fn get_reserves(&self) -> (Balance, Balance, Timestamp) {
        (
            self.data::<data::Data>().reserve_0,
            self.data::<data::Data>().reserve_1,
            self.data::<data::Data>().block_timestamp_last,
        )
    }

    fn initialize(
        &mut self,
        token_0: AccountId,
        token_1: AccountId,
    ) -> Result<(), PairError> {
        self.data::<data::Data>().token_0 = token_0;    
        self.data::<data::Data>().token_1 = token_1;
        Ok(())
    }

    fn get_token_0(&self) -> AccountId {
        self.data::<data::Data>().token_0
    }

    fn get_token_1(&self) -> AccountId {
        self.data::<data::Data>().token_1
    }
}
```

## 5. Implement Getters to Pair contract

In *./contracts/pair/Cargo.toml* import the uniswap-v2 logics crate and add it to the std features

```toml
...
uniswap_v2 = { path = "../../logics", default-features = false }
...
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
```

In the contract *lib.rs* import everything from pair traits (and impls):

```rust
use uniswap_v2::{
    impls::pair::*,
    traits::pair::*,
};
```

Add the `Data` storage struct to the contract storage struct:
```rust
#[ink(storage)]
#[derive(Default, SpreadAllocate, Storage)]
pub struct PairContract {
    #[storage_field]
    psp22: psp22::Data,
    #[storage_field]
    pair: data::Data,
}
```

And just below the storage struct impl Pair trait for the PairContract:
```rust
    impl Pair for PairContract {}
```

And that's it!    
In this section we've gone over how to create a trait and its generic implementation, and added them to the Pair contract. Check your Pair contract with (run from the contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/storage-end).
