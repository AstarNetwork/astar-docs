---
sidebar_position: 1
---

# Implement PSP22 for Pair

Please check out this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/start) and open it in your IDE.

Pair contract implements an ERC-20 (slightly modified as uint256::MAX does not [decrease allowance](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2ERC20.sol#L74)).
In Astar the standard for fungible tokens is [PSP22](https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md). We will use the OpenBrush [PSP22 implementation](https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22).

## 1. Implement Basic PSP22 in our Contract.   

In the `Cargo.toml` file, import crates from ink!, scale, and Openbrush (with feature `"psp22"`).

```toml
[package]
name = "pair_contract"
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
name = "pair_contract"
path = "lib.rs"
crate-type = [
    "cdylib"
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
ink-as-dependency = []

[profile.dev]
overflow-checks = false

[profile.release]
overflow-checks = false
```
*contracts/pair/Cargo.toml*

In the `lib.rs` file in the contract crate import everything (with `*`) from `openbrush::contracts::psp22` as well as the `Storage` trait and `SpreadAllocate` from ink!

As reminder the `#![cfg_attr(not(feature = "std"), no_std)]` attribute is for [conditional compilation](https://use.ink/faq#what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean) and the `#![feature(min_specialization)]` is the feature needed to enable [specialization](../Structure/file-structure.md):
```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod pair {
    use ink_storage::traits::SpreadAllocate;
    use openbrush::{
        contracts::{
            psp22::{
                Internal,
                *,
            },
        },
        traits::Storage,
    };
    
}
```

Add the [storage struct](https://use.ink/macros-attributes/storage) and add the psp22 field:

```rust
#[ink(storage)]
#[derive(Default, SpreadAllocate, Storage)]
pub struct PairContract {
    #[storage_field]
    psp22: psp22::Data,
}
```

implement PSP22 trait into your contract struct:

```rust
    impl PSP22 for PairContract {}
```

Add an `impl` block for the contract and add the constructor:

```rust
impl PairContract {
    #[ink(constructor)]
    pub fn new() -> Self {
        ink_lang::codegen::initialize_contract(|instance: &mut Self| {})
    }
}
```

Your contract should look like the following, and build if you run:
```console
cargo contract build
```

```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod pair {
    use ink_storage::traits::SpreadAllocate;
    use openbrush::{
        contracts::{
            psp22::{
                Internal,
                *,
            },
        },
        traits::Storage,
    };

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct PairContract {
        #[storage_field]
        psp22: psp22::Data,
    }

    impl PSP22 for PairContract {}

    impl PairContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut Self| {})
        }
    }
}
```
*contracts/pair/lib.rs*

## 2. Add Events

You should add an [events struct](https://use.ink/macros-attributes/event) to your contract and also override the event emission methods from the PSP22 implementation.
Import what's needed for editing events:

```rust
use ink_lang::codegen::{
    EmitEvent,
    Env,
};
```

[PSP22](https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md#events) emits `Transfer` and `Approval` events. An event is a struct with `#[ink(event)]` [attribute](https://use.ink/macros-attributes/event). Some fields can be marked with `#[ink(topic)]` [attribute](https://use.ink/macros-attributes/topic) which acts as `indexed` in Solidity:

```rust
#[ink(event)]
pub struct Transfer {
    #[ink(topic)]
    from: Option<AccountId>,
    #[ink(topic)]
    to: Option<AccountId>,
    value: Balance,
}

#[ink(event)]
pub struct Approval {
    #[ink(topic)]
    owner: AccountId,
    #[ink(topic)]
    spender: AccountId,
    value: Balance,
}
```

And finally, override the event emitting methods of the PSP22 Internal trait (Due to ink!'s [design](https://github.com/paritytech/ink/issues/809) it is not possible to share event definitions between multiple contracts since events can only be defined in the ink! module scope directly.):

```rust
impl Internal for PairContract {
    fn _emit_transfer_event(
        &self,
        from: Option<AccountId>,
        to: Option<AccountId>,
        amount: Balance,
    ) {
        self.env().emit_event(Transfer {
            from,
            to,
            value: amount,
        });
    }

    fn _emit_approval_event(&self, owner: AccountId, spender: AccountId, amount: Balance) {
        self.env().emit_event(Approval {
            owner,
            spender,
            value: amount,
        });
    }
}
```

## 3. Override Generic Function of PSP22

The PSP22 OpenBrush implementation has a built-in check for a zero account in [mint](https://github.com/Supercolony-net/openbrush-contracts/blob/e366f6ff1e5892c6a624833dd337a6da16a06baa/contracts/src/token/psp22/psp22.rs#L270), [burn](https://github.com/Supercolony-net/openbrush-contracts/blob/e366f6ff1e5892c6a624833dd337a6da16a06baa/contracts/src/token/psp22/psp22.rs#L286), [transfer_from](https://github.com/Supercolony-net/openbrush-contracts/blob/e366f6ff1e5892c6a624833dd337a6da16a06baa/contracts/src/token/psp22/psp22.rs#L223) and [approve](https://github.com/Supercolony-net/openbrush-contracts/blob/e366f6ff1e5892c6a624833dd337a6da16a06baa/contracts/src/token/psp22/psp22.rs#L257) functions. But Uniswap V2 uses the zero address to [lock tokens](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L121).
The upside in our case is that we can override any functions of the generic implementation, by using the same function body, but removing the check for the zero address:

```rust
impl Internal for PairContract {
    // in uniswapv2 no check for zero account
    fn _mint_to(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
        let mut new_balance = self._balance_of(&account);
        new_balance += amount;
        self.psp22.balances.insert(&account, &new_balance);
        self.psp22.supply += amount;
        self._emit_transfer_event(None, Some(account), amount);
        Ok(())
    }

    fn _burn_from(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
        let mut from_balance = self._balance_of(&account);

        if from_balance < amount {
            return Err(PSP22Error::InsufficientBalance)
        }

        from_balance -= amount;
        self.psp22.balances.insert(&account, &from_balance);
        self.psp22.supply -= amount;
        self._emit_transfer_event(Some(account), None, amount);
        Ok(())
    }

    fn _approve_from_to(
        &mut self,
        owner: AccountId,
        spender: AccountId,
        amount: Balance,
    ) -> Result<(), PSP22Error> {
        self.psp22.allowances.insert(&(&owner, &spender), &amount);
        self._emit_approval_event(owner, spender, amount);
        Ok(())
    }

    fn _transfer_from_to(
        &mut self,
        from: AccountId,
        to: AccountId,
        amount: Balance,
        _data: Vec<u8>,
    ) -> Result<(), PSP22Error> {
        let from_balance = self._balance_of(&from);

        if from_balance < amount {
            return Err(PSP22Error::InsufficientBalance)
        }

        self.psp22.balances.insert(&from, &(from_balance - amount));
        let to_balance = self._balance_of(&to);
        self.psp22.balances.insert(&to, &(to_balance + amount));

        self._emit_transfer_event(Some(from), Some(to), amount);
        Ok(())
    }
    ...
```

Also in Uniswap V2 max allowance will not [decrease allowance](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2ERC20.sol#L74). For this, we need to override `transfer_from` and not decrease allowance if it's u128::MAX.
Important here: please note that `#[ink(message)]` is needed in order to compile correctly. Inside the existing `impl PSP22` block, add:

```rust
impl PSP22 for PairContract {
    #[ink(message)]
    fn transfer_from(
        &mut self,
        from: AccountId,
        to: AccountId,
        value: Balance,
        data: Vec<u8>,
    ) -> Result<(), PSP22Error> {
        let caller = self.env().caller();
        let allowance = self._allowance(&from, &caller);

        // In uniswapv2 max allowance never decrease
        if allowance != u128::MAX {
            if allowance < value {
                return Err(PSP22Error::InsufficientAllowance)
            }

            self._approve_from_to(from, caller, allowance - value)?;
        }
        self._transfer_from_to(from, to, value, data)?;
        Ok(())
    }
}
```

Import Vec from `ink_prelude`:

```rust
 use ink_prelude::vec::Vec;
```

And that's it! You implemented PSP22, its event and overrided its default implementation. Check your Pair contract with (run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/psp22).
