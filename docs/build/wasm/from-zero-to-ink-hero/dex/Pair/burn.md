---
sidebar_position: 4
---

# Burn

If you are starting the tutorial from here, please check out this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/storage-end) and open it in your IDE.

## 1. Add Burn Functions to Pair Trait
At this stage, we will implement a [burn](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L134) function in the Pair contract.   
In *./logics/traits/pair.rs* add the **burn** function to the Pair trait, as well as the internal child function **_safe_transfer**.
Also, we will add a function to emit a burn event in the contract:

```rust
pub trait Pair {
    ...
    #[ink(message)]
    fn burn(&mut self, to: AccountId) -> Result<(Balance, Balance), PairError>;

    fn _safe_transfer(
        &mut self,
        token: AccountId,
        to: AccountId,
        value: Balance,
    ) -> Result<(), PairError>;
    
    fn _emit_burn_event(
        &self,
        _sender: AccountId,
        _amount_0: Balance,
        _amount_1: Balance,
        _to: AccountId,
    );
}
```

## 2. Safe Transfer

In the Pair.sol contract, within the burn function, there is a [_safeTransfer](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L148) function. In PSP22, a transfer is [safe by default](https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md#psp22receiver) if it's implemented with `PSP22Receiver`, which is the case for the Openbrush PSP22 implementation (in [_do_safe_transfer_check](https://github.com/Supercolony-net/openbrush-contracts/blob/e366f6ff1e5892c6a624833dd337a6da16a06baa/contracts/src/token/psp22/psp22.rs#L172))
We will use a basic call to **transfer** the PSP22:
```rust
impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {
    ...
    fn _safe_transfer(
        &mut self,
        token: AccountId,
        to: AccountId,
        value: Balance,
    ) -> Result<(), PairError> {
        PSP22Ref::transfer(&token, to, value, Vec::new())?;
        Ok(())
    }
    ...
}
```
*./logics/impls/pair/pair.rs*

and add the import statement for Vec:
```rust
use ink_prelude::vec::Vec;
```

### 3. Burn

The first line of this function is the same as mint (as we obtain the same values). 
In the [line #147](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L147) `_burn(address(this), liquidity);` actually calls the burn of the internal ERC20 (as Pair is an extended ERC20).
The flow of the function body:
1. First obtain the values for reserves, balances and liquidity.
2. `mint_fee`
3. Burn liquidity and transfer token from contract to `to`
4. Update reserves.
5. Emit an event.

```rust
impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {
    ...
    fn burn(&mut self, to: AccountId) -> Result<(Balance, Balance), PairError> {
        let reserves = self.get_reserves();
        let contract = Self::env().account_id();
        let token_0 = self.data::<data::Data>().token_0;
        let token_1 = self.data::<data::Data>().token_1;
        let mut balance_0 = PSP22Ref::balance_of(&token_0, contract);
        let mut balance_1 = PSP22Ref::balance_of(&token_1, contract);
        let liquidity = self._balance_of(&contract);

        let fee_on = self._mint_fee(reserves.0, reserves.1)?;
        let total_supply = self.data::<psp22::Data>().supply;
        let amount_0 = liquidity
            .checked_mul(balance_0)
            .ok_or(PairError::MulOverFlow6)?
            .checked_div(total_supply)
            .ok_or(PairError::DivByZero3)?;
        let amount_1 = liquidity
            .checked_mul(balance_1)
            .ok_or(PairError::MulOverFlow7)?
            .checked_div(total_supply)
            .ok_or(PairError::DivByZero4)?;

        if amount_0 == 0 || amount_1 == 0 {
            return Err(PairError::InsufficientLiquidityBurned)
        }

        self._burn_from(contract, liquidity)?;

        self._safe_transfer(token_0, to, amount_0)?;
        self._safe_transfer(token_1, to, amount_1)?;

        balance_0 = PSP22Ref::balance_of(&token_0, contract);
        balance_1 = PSP22Ref::balance_of(&token_1, contract);

        self._update(balance_0, balance_1, reserves.0, reserves.1)?;

        if fee_on {
            let k = reserves
                .0
                .checked_mul(reserves.1)
                .ok_or(PairError::MulOverFlow5)?;
            self.data::<data::Data>().k_last = k;
        }

        self._emit_burn_event(Self::env().caller(), amount_0, amount_1, to);

        Ok((amount_0, amount_1))
    }
    ...
}
```

Add the empty implementation of **_emit_burn_event**. It should have the `default` keyword as we will override this function in the Pair contract:
```rust
impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {
    ...
    default fn _emit_burn_event(
        &self,
        _sender: AccountId,
        _amount_0: Balance,
        _amount_1: Balance,
        _to: AccountId,
    ) {
    }
    ...
}
```

Adds the Error fields to `PairError` in *./logics/traits/pair.rs*:
```rust
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum PairError {
    PSP22Error(PSP22Error),
    TransferError,
    InsufficientLiquidityMinted,
    InsufficientLiquidityBurned,
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
    MulOverFlow6,
    MulOverFlow7,
    MulOverFlow14,
    MulOverFlow15,
    DivByZero1,
    DivByZero2,
    DivByZero3,
    DivByZero4,
    DivByZero5,
    AddOverflow1,
}
```

## 4. Implement Event

In the contracts *./contracts/pair/lib.rs* file, add the Event struct and override the implementation of emit event:
```rust
...
#[ink(event)]
pub struct Burn {
    #[ink(topic)]
    pub sender: AccountId,
    pub amount_0: Balance,
    pub amount_1: Balance,
    #[ink(topic)]
    pub to: AccountId,
}
...
impl Pair for PairContract {
    ...
    fn _emit_burn_event(
        &self,
        sender: AccountId,
        amount_0: Balance,
        amount_1: Balance,
        to: AccountId,
    ) {
        self.env().emit_event(Burn {
            sender,
            amount_0,
            amount_1,
            to,
        })
    }
}
...
```

And that's it! In these examples we have demonstrated how to easily build an advanced Rust & ink! implementation.
Check your Pair contract with (run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/burn_end).

