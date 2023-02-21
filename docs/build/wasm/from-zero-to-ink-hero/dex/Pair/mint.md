---
sidebar_position: 3
---

# Mint

If you are starting the tutorial from here, please check out this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/storage-end) and open it in your IDE.

### 1. Add Mint Functions to Pair Trait

At this stage, we will implement the [mint](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L110) function of the Pair contract.   
In the *./logics/traits/pair.rs* file add the **mint** function to the Pair trait. You should also add two internal **_mint_fee** and **_update** functions.
As those functions modify the state, they should take a `&mut self` as first argument. When sending transaction (as tx) it return nothing (a tx cannot return a value neither a variant of the Error enum) so in most cases state changes function will return `Result<(), PairError>`.
But if you call the function as dry-run (as a query, it will not modify the state) it can return a value (any value and Error enum as well). That is why the **mint** message function returns a `Balance` (and not `()`). So before calling **mint** as tx you can call it as dry-run and gets the liquidity that will be minted.
Also add the function to emit mint event that will have to be implemented in the contract:
```rust
pub trait Pair {
    ...
    #[ink(message)]
    fn mint(&mut self, to: AccountId) -> Result<Balance, PairError>;

    fn _mint_fee(&mut self, reserve_0: Balance, reserve_1: Balance) -> Result<bool, PairError>;
    
    fn _update(
        &mut self,
        balance_0: Balance,
        balance_1: Balance,
        reserve_0: Balance,
        reserve_1: Balance,
    ) -> Result<(), PairError>;
    
    fn _emit_mint_event(&self, _sender: AccountId, _amount_0: Balance, _amount_1: Balance);

    fn _emit_sync_event(&self, reserve_0: Balance, reserve_1: Balance);
}
```

### 2. Mint Fee and Factory Trait

As **_update** and **_mint_fee** are child functions of **mint**, let's start by implementing those.
Have a look at [_mintFee](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L89) in Solidity, which takes `uint112 _reserve0` and `uint112 _reserve1`  as arguments, and translates to `Balance` in ink! that returns a bool, and can make state changes (it can save `k_last` to storage) so in ink! it should return `Result<bool, PairError>`.    
Let's add it to *./logics/impls/pair/pair.rs*:

```rust
impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {
    ...
    fn _mint_fee(
        &mut self,
        reserve_0: Balance,
        reserve_1: Balance,
    ) -> Result<bool, PairError> {}
}
```

In the [first line](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L90) of **_mintFee** there is a cross-contract call to the Factory contract to obtain the address of the account collecting the fees. To do so we will use Openbrush wrapper around a Factory trait (and demonstrate that the trait only is needed - no implementation).
create a file *./logics/traits/factory.rs* and add the `Factory` trait and a **fee_to** function getter.     
Add `#[openbrush::trait_definition]` to the top of the file:

```rust
#[openbrush::trait_definition]
pub trait Factory {
    #[ink(message)]
    fn fee_to(&self) -> AccountId;
}
```

And then add a wrapper around this trait. Imports what needs to be imported:

```rust
use openbrush::traits::AccountId;

#[openbrush::wrapper]
pub type FactoryRef = dyn Factory;
...
```

Add this file to *./logics/traits/mod.rs*:

```rust
pub mod pair;
pub mod factory;
```

In *./logics/impls/pair/pair.rs* import this contract `FactoryRef`:

```rust
use crate::traits::factory::FactoryRef;
```

And in the body of **_mint_fee** we will obtain the `fee_to` with a cross-contract call to Factory. When using Openbrush wrapper around a trait, the first argument of the function should be the contract address you call. So add this line as it is shown below:
```rust
    fn _mint_fee(
        &mut self,
        reserve_0: Balance,
        reserve_1: Balance,
    ) -> Result<bool, PairError> {
    let fee_to = FactoryRef::fee_to(&self.data::<data::Data>().factory);
}
```

The rest of the function body may be somewhat difficult to interpret, so here are a few tips: 

- For ` address(0)` in Solidity you can use `openbrush::traits::ZERO_ADDRESS` (which is a const `[0; 32]`).
- For `sqrt` you can either implement the [same function](https://github.com/AstarNetwork/wasm-tutorial-dex/blob/4afd2d2a0503ad5dfcecd87e2b40d55cd3c854a0/uniswap-v2/logics/impls/pair/pair.rs#L437) or use [integer-sqrt](https://crates.io/crates/integer-sqrt).
- When doing Math operations you should handle overflow cases (and return an Error if there is an overflow). You can perform check operations on `u128`
- Use each Error variant only once, so when testing or debugging you will know immediately which line the Error come from.

Then implement line-by-line the same logic as in Uniswap-V2:
```rust
    fn _mint_fee(
    &mut self,
    reserve_0: Balance,
    reserve_1: Balance,
) -> Result<bool, PairError> {
    let fee_to = FactoryRef::fee_to(&self.data::<data::Data>().factory);
    let fee_on = fee_to != ZERO_ADDRESS.into();
    let k_last = self.data::<data::Data>().k_last;
    if fee_on {
        if k_last != 0 {
            let root_k = sqrt(
                reserve_0
                    .checked_mul(reserve_1)
                    .ok_or(PairError::MulOverFlow14)?,
            );
            let root_k_last = sqrt(k_last);
            if root_k > root_k_last {
                let total_supply = self.data::<psp22::Data>().supply;
                let numerator = total_supply
                    .checked_mul(
                        root_k
                            .checked_sub(root_k_last)
                            .ok_or(PairError::SubUnderFlow14)?,
                    )
                    .ok_or(PairError::MulOverFlow15)?;
                let denominator = root_k
                    .checked_mul(5)
                    .ok_or(PairError::MulOverFlow15)?
                    .checked_add(root_k_last)
                    .ok_or(PairError::AddOverflow1)?;
                let liquidity = numerator
                    .checked_div(denominator)
                    .ok_or(PairError::DivByZero5)?;
                if liquidity > 0 {
                    self._mint_to(fee_to, liquidity)?;
                }
            }
        }
    } else if k_last != 0 {
        self.data::<data::Data>().k_last = 0;
    }
    Ok(fee_on)
}
```

### 3. Update
The update function will update the [oracle price](https://docs.uniswap.org/contracts/v2/concepts/core-concepts/oracles) of the tokens with time-weighted average prices (TWAPs). Please check the Uniswap V2 [implementation](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L73).    
To implement this in ink!:
- ink! contracts should [never panic!](https://substrate.stackexchange.com/questions/2391/panic-in-ink-smart-contracts). The reason being that a panic! will give the user no information about the Error (it only returns `CalleeTrapped`). Every potential business/logical error should be returned in a predictable way using `Result<T, Error>`.
- To handle time use `Self::env().block_timestamp()` that is the time in milliseconds since the Unix epoch.
- In Solidity, float point division is not supported, it uses Q number UQ112x112 for more precision. We will use div for our example (note that is the DEX template we use [U256](https://github.com/swanky-dapps/dex/blob/4676a73f4ab986a3a3f3de42be1b0052562953f1/uniswap-v2/logics/impls/pair/pair.rs#L374) for more precision).
- To store values in storage (but first verify, then save), modify the value of the Storage field (as the function takes `&mut self` it can modify Storage struct fields)

You can then implement **update**:

```rust
    fn _update(
    &mut self,
    balance_0: Balance,
    balance_1: Balance,
    reserve_0: Balance,
    reserve_1: Balance,
) -> Result<(), PairError> {
    if balance_0 == u128::MAX || balance_1 == u128::MAX {
        return Err(PairError::Overflow)
    }
    let now = Self::env().block_timestamp();
    let time_elapsed = now - self.data::<data::Data>().block_timestamp_last;
    if time_elapsed > 0 && reserve_0 != 0 && reserve_1 != 0 {
        let price_cumulative_last_0 = (reserve_1 / reserve_0)
            .checked_mul(time_elapsed as u128)
            .ok_or(PairError::MulOverFlow4)?;
        let price_cumulative_last_1 = (reserve_0 / reserve_1)
            .checked_mul(time_elapsed as u128)
            .ok_or(PairError::MulOverFlow4)?;
        self.data::<data::Data>().price_0_cumulative_last += price_cumulative_last_0;
        self.data::<data::Data>().price_1_cumulative_last += price_cumulative_last_1;
    }
    self.data::<data::Data>().reserve_0 = balance_0;
    self.data::<data::Data>().reserve_1 = balance_1;
    self.data::<data::Data>().block_timestamp_last = now;

    self._emit_sync_event(reserve_0, reserve_1);
    Ok(())
}
```

### 4. Mint

Now that all child functions have been added, we can add **mint**.
First, add the function definition in the impl block of *./logics/impls/pair/pair.rs* :

```rust
fn mint(&mut self, to: AccountId) -> Result<Balance, PairError> {}
```

On line [112](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2Pair.sol#L112) of *Pair.sol* there is a cross-contract call to the ERC20 to obtain the balance of the contract `uint balance0 = IERC20(token0).balanceOf(address(this));`.    
To implement this cross-contract call we will use `PSP22Ref` from Openbrush. To obtain the address of the contract, use `Self::env().account_id()`.
Read more about how to find all the ink_env getters in this [doc](https://docs.rs/ink_env/latest/ink_env/).

First, add the `psp22::Data` Trait bound to the generic impl block:
```rust
impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T { 
    ...
}
```

In the body of **mint**:
```rust
use openbrush::contracts::traits::psp22::PSP22Ref;
...
fn mint(&mut self, to: AccountId) -> Result<Balance, PairError> {
    let reserves = self.get_reserves();
    let contract = Self::env().account_id();
    let balance_0 = PSP22Ref::balance_of(&self.data::<data::Data>().token_0, contract);
    let balance_1 = PSP22Ref::balance_of(&self.data::<data::Data>().token_1, contract);
    ...
}
```

Now, as the call to `PSP22Ref` returns `Result<Balance, PSP22Error>` we should implement the `From` trait for our `PairError` (to not have to map_err for every calls). 
We will do so in the file *.logics/traits/pair.rs* where we defined `PairError`. Add a field that takes an `PSP22Error`, and implement the `From` Trait for it (also add all the error fields used in the implementation):
```rust
use openbrush::contracts::psp22::PSP22Error;
...
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum PairError {
    PSP22Error(PSP22Error),
    InsufficientLiquidityMinted,
    Overflow,
    SubUnderFlow1,
    SubUnderFlow2,
    SubUnderFlow3,
    SubUnderFlow14,
    MulOverFlow1,
    MulOverFlow2,
    MulOverFlow3,
    MulOverFlow4,
    MulOverFlow5,
    MulOverFlow14,
    MulOverFlow15,
    DivByZero1,
    DivByZero2,
    DivByZero5,
    AddOverflow1,
}

impl From<PSP22Error> for PairError {
    fn from(error: PSP22Error) -> Self {
        PairError::PSP22Error(error)
    }
}
```

For the **MINIMUM_LIQUIDTY** constant, please add:
```rust
pub const MINIMUM_LIQUIDITY: u128 = 1000;
```

For the **min** function, add the [same implementation](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/libraries/Math.sol#L6) below the `impl` block:
```rust
    default fn _emit_mint_event(&self, _sender: AccountId, _amount_0: Balance, _amount_1: Balance) {}
    
    default fn _emit_sync_event(&self, _reserve_0: Balance, _reserve_1: Balance) {}
}

fn min(x: u128, y: u128) -> u128 {
    if x < y {
        return x
    }
    y
}
```

For **sqrt** function add the [same implementation](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/libraries/Math.sol#L11) below the **min** function:
```rust
fn sqrt(y: u128) -> u128 {
    let mut z = 1;
    if y > 3 {
        z = y;
        let mut x = y / 2 + 1;
        while x < z {
            z = x;
            x = (y / x + x) / 2;
        }
    }
    z
}
```

If you handle all overflows (that requires most of the lines of the function body):
1. First obtain the values for reserves, balances and liquidity.
2. `mint_fee`
3. Mint liquidity to `to`
4. Update reserves.
5. Emit an event.
```rust
    fn mint(&mut self, to: AccountId) -> Result<Balance, PairError> {
        let reserves = self.get_reserves();
        let contract = Self::env().account_id();
        let balance_0 = PSP22Ref::balance_of(&self.data::<data::Data>().token_0, contract);
        let balance_1 = PSP22Ref::balance_of(&self.data::<data::Data>().token_1, contract);
        let amount_0 = balance_0
            .checked_sub(reserves.0)
            .ok_or(PairError::SubUnderFlow1)?;
        let amount_1 = balance_1
            .checked_sub(reserves.1)
            .ok_or(PairError::SubUnderFlow2)?;

        let fee_on = self._mint_fee(reserves.0, reserves.1)?;
        let total_supply = self.data::<psp22::Data>().supply;

        let liquidity;
        if total_supply == 0 {
            let liq = amount_0
                .checked_mul(amount_1)
                .ok_or(PairError::MulOverFlow1)?;
            liquidity = sqrt(liq)
                .checked_sub(MINIMUM_LIQUIDITY)
                .ok_or(PairError::SubUnderFlow3)?;
            self._mint_to(ZERO_ADDRESS.into(), MINIMUM_LIQUIDITY)?;
        } else {
            let liquidity_1 = amount_0
                .checked_mul(total_supply)
                .ok_or(PairError::MulOverFlow2)?
                .checked_div(reserves.0)
                .ok_or(PairError::DivByZero1)?;
            let liquidity_2 = amount_1
                .checked_mul(total_supply)
                .ok_or(PairError::MulOverFlow3)?
                .checked_div(reserves.1)
                .ok_or(PairError::DivByZero2)?;
            liquidity = min(liquidity_1, liquidity_2);
        }

        if liquidity == 0 {
            return Err(PairError::InsufficientLiquidityMinted)
        }

        self._mint_to(to, liquidity)?;

        self._update(balance_0, balance_1, reserves.0, reserves.1)?;

        if fee_on {
            let k = reserves
                .0
                .checked_mul(reserves.1)
                .ok_or(PairError::MulOverFlow5)?;
            self.data::<data::Data>().k_last = k;
        }

        self._emit_mint_event(Self::env().caller(), amount_0, amount_1);

        Ok(liquidity)
    }
```

Add the empty implementation of **_emit_mint_event** and **_emit_sync_event** in the Pair impl. It should have the `default` keyword as we will override those functions in the Pair contract.
```rust
    default fn _emit_mint_event(&self, _sender: AccountId, _amount_0: Balance, _amount_1: Balance) {}

    default fn _emit_sync_event(&self, _reserve_0: Balance, _reserve_1: Balance) {}
```

The `default` keyword needs to have the attribute `min_specialization` added in **./logics/lib.rs** :
```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
```

### 5. Implement Event

in the contracts *./cotnracts/pair/lib.rs* file, add the Event struct and override the implementation of emit event:
```rust
...
#[ink(event)]
pub struct Mint {
    #[ink(topic)]
    pub sender: AccountId,
    pub amount_0: Balance,
    pub amount_1: Balance,
}
...
impl Pair for PairContract {
    fn _emit_mint_event(&self, sender: AccountId, amount_0: Balance, amount_1: Balance) {
        self.env().emit_event(Mint {
            sender,
            amount_0,
            amount_1,
        })
    }
}
```

Don't forget to add `overflow-checks = false` in your pair `Cargo.toml`:
```toml
[profile.dev]
overflow-checks = false

[profile.release]
overflow-checks = false
```

And that's it! In these examples we have created a wrapper around a Trait that performs cross-contract calls, which is an advanced Rust & ink! implementation. 
Check your Pair contract with (run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/mint_end).
