---
sidebar_position: 6
---

# Modifiers

Modifiers basically checks a condition prior to entering a function. By defining modifiers you will reduce code redundancy (keep it DRY) and increase its readability as you will not have to add guards for each of your functions.     
Pair contract defines and uses [lock](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L31) modifier that prevents from reentrancy. In **initialize** it also ensure that the [caller is the factory](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L67), it can be used as modifier.

### 1. Reentrancy guard

To protect callable functions from reentrancy we will use [reentrancy guard](https://github.com/Supercolony-net/openbrush-contracts/blob/d6e29f05fd462e4e027de1f2f9177d594a5a0f05/contracts/src/security/reentrancy_guard/mod.rs#L54) modifier from openbrush. It save the lock status in storage (either `ENTERED` or `NOT_ENTERED`) and prevents reentrancy.
In *./contracts/pair/Cargo.toml* add `"reentrancy_guard"` feature to openbrush dependency:

```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "reentrancy_guard"] }
```

In *./contracts/pair/lib.rs* add import statement and add the reentrancy field in the Storage field:
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

In *./logics/Cargo.toml* add `"reentrancy_guard"` feature to openbrush dependency:
```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "reentrancy_guard"] }
```

Modifiers should be added in the impl block on top of the function as an attribute macro. 
In *./logics/impls/pair/pair.rs* add `"reentrancy_guard"` add import statements and add the modifier on top of **mint**, **burn** and **swap** as well as the `Storage<reentrancy_guard::Data>` trait bound: 
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

Lastly `non_reentrant` modifier returns `ReentrancyGuardError`. So let's impl `From` `ReentrancyGuardError` for `PairError`:
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

### 2. Only owner

In **initialize** there is a guard that ensure [caller is the factory](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L67). We can use [ownable modifier](https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/access/ownable/mod.rs) that will store the deployer address on storage and restrict function access to this address.
In *./contracts/pair/Cargo.toml* add `"ownable"` feature to openbrush dependency:

```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "ownable", "reentrancy_guard"] }
```

In *./contracts/pair/lib.rs* add import statement and add the ownable field in the Storage field. Also, you should update the constructor as owner should be initialized (and as deployer will only be factory we can set factory field address as the caller). You should implement `Ownable` trait that will expose [useful callable functions](https://github.com/Supercolony-net/openbrush-contracts/blob/e366f6ff1e5892c6a624833dd337a6da16a06baa/contracts/src/traits/ownable/mod.rs#L32):
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

In *./logics/Cargo.toml* add `"ownable"` feature to openbrush dependency:
```toml
openbrush = { tag = "v2.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22", "ownable", "reentrancy_guard"] }
```

Modifiers should be added in the impl block on top of the function as an attribute macro.
In *./logics/impls/pair/pair.rs* add `"ownable"` add import statements and add the modifier on top of **initialize**, as well as the `Storage<ownable::Data>` trait bound:
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

Lastly `ownable` modifier returns `OwnableError`. So let's impl `From` `OwnableError` for `PairError`:
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
You learned how to import and use modifiers from openbrush.
You can also implement your own modifier, check this [tutorial](https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76).      
Check your Pair contract with (to run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/modifiers_end)