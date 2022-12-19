---
sidebar_position: 3
---

# Mint

If you start tutorial from here, Please checkout this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/storage-end) and open it in your IDE.

### 1. Add Mint functions to Pair trait

We will implement [mint](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L110) function of Pair contract.   
In *./logics/traits/pair.rs* add the **mint** function to Pair trait. You should also add two internal **_mint_fee** and **_update**.
As these functions modify the state, they should take a `&mut self` as first argument. When sending transaction (as tx) it return nothing (a tx cannot return a value neither a variant of the Error enum) so in most cases state changes function will return `Result<(), PairError>`.
But if you call the function as dry-run (as a query, it will not modify the state) it can return a value (any value and Error enum as well). That is why the **mint** message function returns a `Balance` (and not `()`). So before calling **mint** as tx you can call it as dry-run and gets the liquidity that will be minted.
Also add the function to emit mint event that will have to be implemented in the contract.
```rust
pub trait Pair {
    ...
    #[ink(message)]
    fn mint(&mut self, to: AccountId) -> Result<Balance, PairError>;

    fn _mint_fee(&mut self, reserve_0: Balance, reserve_1: Balance) -> Result<bool, PairError>;

    fn _emit_mint_event(&self, _sender: AccountId, _amount_0: Balance, _amount_1: Balance);
}
```

### 2. Mint fee and Factory trait

As **_update** and **_mint_fee** are child functions of **mint** let start by implementing those.
Let's have a lok at [_mintFee](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L89) in solidity: it takes `uint112 _reserve0` and `uint112 _reserve1`  as arguments,
that translate to `Balance` in ink! and returns a bool and make state changes (it can save `k_last` to storage) so in ink! it should return `Result<bool, PairError>`.    
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

In the [first line](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L90) of **_mintFee** there is a cross-contract call to factory contract to get the address of the account collecting the fees. To do so we will use openbrush wrapper around a Factory trait (and demonstrate that the trait only is needed - no implementation).
create a the file *./logics/traits/factory.rs* and add `Factory` trait and a **fee_to** function getter. Add `#[openbrush::trait_definition]` on top of it:

```rust
#[openbrush::trait_definition]
pub trait Factory {
    #[ink(message)]
    fn fee_to(&self) -> AccountId;
}
```

And then add a wrapper around this trait. Imports what needs to be imported.

```rust
use openbrush::traits::AccountId;

#[openbrush::wrapper]
pub type FactoryRef = dyn Factory;
...
```

Add this file to *./logics/traits/mod.rs*

```rust
pub mod pair;
pub mod factory;
```

In *./logics/impls/pair/pair.rs* import this contract `FactoryRef`:

```rust
use crate::traits::factory::FactoryRef;
```

And in the body of **_mint_fee** let get the fee_on with a cross-contract call to factory. When using openbrush wrapper around a trait the first argument of the function should be the contract address you call. So add this line:
```rust
    fn _mint_fee(
        &mut self,
        reserve_0: Balance,
        reserve_1: Balance,
    ) -> Result<bool, PairError> {
    let fee_to = FactoryRef::fee_to(&self.data::<data::Data>().factory);
}
```

For the rest of the function body let's see what can be complex:

- For ` address(0)` in solidity you can use `openbrush::traits::ZERO_ADDRESS` (which is a const `[0; 32]`)
- For `sqrt` you can either implement the [same function](https://github.com/AstarNetwork/wasm-tutorial-dex/blob/4afd2d2a0503ad5dfcecd87e2b40d55cd3c854a0/uniswap-v2/logics/impls/pair/pair.rs#L437) or use [integer-sqrt](https://crates.io/crates/integer-sqrt)
- When doing Math operations you should handle the overflow case (and return an Error if it overflows). you can use checked operations on `u128`
- A great trick is to use each Error variant only once, so when testing or debugging you will know right away which line the Error come from

Then implements line by line the same logic as in Uniswap-V2:
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

The update function will update the [oracle price](https://docs.uniswap.org/contracts/v2/concepts/core-concepts/oracles) of the token with time-weighted average prices (TWAPs). 
