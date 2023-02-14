---
sidebar_position: 6
---

# Modifiers

Modifiers ensure certain conditions are fulfilled prior to entering a function. By defining modifiers, you will reduce code redundancy (keep it DRY), and increase its readability as you will not have to add guards for each of your functions.     
The Pair contract defines and uses a [lock](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L31) modifier that prevents reentrancy attacks. During **initialization**, it also ensures that the [caller is the Factory](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L67), so it can be used as modifier.

## 1. Reentrancy Guard

To protect callable functions from reentrancy attacks, we will use the [reentrancy guard](https://github.com/Supercolony-net/openbrush-contracts/blob/d6e29f05fd462e4e027de1f2f9177d594a5a0f05/contracts/src/security/reentrancy_guard/mod.rs#L54) modifier from Openbrush, which saves the lock status in storage (either `ENTERED` or `NOT_ENTERED`) to prevent reentrancy.
In the *./contracts/pair/Cargo.toml* file, add the `"reentrancy_guard"` feature to the Openbrush dependencies:

```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "reentrancy_guard"] }
```

In the *./contracts/pair/lib.rs* file, add an import statement, and reentrancy_guard as a Storage field:
```rust
...
use openbrush::{
    contracts::{
        ownable::*,
        psp22::{
            Internal,
            *,
        },
        reentrancy_guard,
    },
    traits::Storage,
};
...
#[ink(storage)]
#[derive(Default, SpreadAllocate, Storage)]
pub struct PairContract {
    #[storage_field]
    psp22: psp22::Data,
    #[storage_field]
    guard: reentrancy_guard::Data,
    #[storage_field]
    pair: data::Data,
}
...
```

In the *./logics/Cargo.toml* file, add the `"reentrancy_guard"` feature as an Openbrush dependency:
```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "reentrancy_guard"] }
```

Modifiers should be added in the impl block on top of the function, as an attribute macro. 
In the *./logics/impls/pair/pair.rs* file, add `"reentrancy_guard"`, import statements, and modifier on top of **mint**, **burn** and **swap** as well as the `Storage<reentrancy_guard::Data>` trait bound: 
```rust
...
use openbrush::{
    contracts::{
        psp22::*,
        reentrancy_guard::*,
        traits::psp22::PSP22Ref,
    },
    modifiers,
    traits::{
        AccountId,
        Balance,
        Storage,
        Timestamp,
        ZERO_ADDRESS,
    },
};
...
impl<T: Storage<data::Data> + Storage<psp22::Data> + Storage<reentrancy_guard::Data>> Pair for T {
...
    #[modifiers(non_reentrant)]
    fn mint(&mut self, to: AccountId) -> Result<Balance, PairError> {
...
    #[modifiers(non_reentrant)]
    fn burn(&mut self, to: AccountId) -> Result<(Balance, Balance), PairError> {
...
    #[modifiers(non_reentrant)]
    fn swap(
...
```

Finally, the `non_reentrant` modifier returns `ReentrancyGuardError`. So let's impl `From` `ReentrancyGuardError` for `PairError`:
```rust
use openbrush::{
    contracts::{
        reentrancy_guard::*,
        traits::{
            psp22::PSP22Error,
        },
    },
    traits::{
        AccountId,
        Balance,
        Timestamp,
    },
};
...
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum PairError {
    PSP22Error(PSP22Error),
    ReentrancyGuardError(ReentrancyGuardError),
...
impl From<ReentrancyGuardError> for PairError {
    fn from(error: ReentrancyGuardError) -> Self {
        PairError::ReentrancyGuardError(error)
    }
}
```

## 2. Only Owner

In **initialize** there is a guard that ensures the [caller is the Factory](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L67). We can use the [ownable modifier](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/access/ownable/mod.rs) to store the deployer address in storage, and restrict function access to this address only.
In the *./contracts/pair/Cargo.toml* file, add the `"ownable"` feature to the Openbrush dependency:

```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "ownable", "reentrancy_guard"] }
```

```rust
...
use openbrush::{
    contracts::{
        ownable::*,
        psp22::{
            Internal,
            *,
        },
        reentrancy_guard,
    },
    traits::Storage,
};
...
#[ink(storage)]
#[derive(Default, SpreadAllocate, Storage)]
pub struct PairContract {
    #[storage_field]
    psp22: psp22::Data,
    #[storage_field]
    ownable: ownable::Data,
    #[storage_field]
    guard: reentrancy_guard::Data,
    #[storage_field]
    pair: data::Data,
}
...
impl Pair for PairContract {}

impl Ownable for PairContract {}
...
impl PairContract {
    #[ink(constructor)]
    pub fn new() -> Self {
        ink_lang::codegen::initialize_contract(|instance: &mut Self| {
            let caller = instance.env().caller();
            instance._init_with_owner(caller);
            instance.pair.factory = caller;
        })
    }
}
```

In the *./logics/Cargo.toml* file, add the `"ownable"` feature to openbrush dependency:
```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "ownable", "reentrancy_guard"] }
```

Modifiers should be added in the impl block on top of the function, as an attribute macro.
In the *./logics/impls/pair/pair.rs* file, add `"ownable"`, the import statements, and modifier on top of **initialize**, as well as the `Storage<ownable::Data>` trait bound:
```rust
...
use openbrush::{
    contracts::{
        ownable::*,
        psp22::*,
        reentrancy_guard::*,
        traits::psp22::PSP22Ref,
    },
    modifiers,
    traits::{
        AccountId,
        Balance,
        Storage,
        Timestamp,
        ZERO_ADDRESS,
    },
};
...
impl<
    T: Storage<data::Data>
    + Storage<psp22::Data>
    + Storage<reentrancy_guard::Data>
    + Storage<ownable::Data>,
> Pair for T
{
...
    #[modifiers(only_owner)]
    fn initialize(&mut self, token_0: AccountId, token_1: AccountId) -> Result<(), PairError> {
...
```

Finally, the `ownable` modifier returns `OwnableError`. So let's impl `From` `OwnableError` for `PairError`:
```rust
use openbrush::{
    contracts::{
        reentrancy_guard::*,
        traits::{
            ownable::*,
            psp22::PSP22Error,
        },
    },
    traits::{
        AccountId,
        Balance,
        Timestamp,
    },
};
...
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum PairError {
    PSP22Error(PSP22Error),
    OwnableError(OwnableError),
    ReentrancyGuardError(ReentrancyGuardError),
...
impl From<OwnableError> for PairError {
    fn from(error: OwnableError) -> Self {
        PairError::OwnableError(error)
    }
}
```

And that's it!    

By following along with these examples you will have implemented modifiers from Openbrush, and should also be able to implement your own by using information contained in this [tutorial](https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76).      
Check your Pair contract with (run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/modifiers_end)