---
sidebar_position: 5
---

# Swap

If you start tutorial from here, Please checkout this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/burn_end) and open it in your IDE.

### 1. Add Swap functions to Pair trait

We will implement [swap](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L159) function of Pair contract.  
[Swap](https://docs.uniswap.org/contracts/v2/concepts/core-concepts/swaps) is a way for traders to trade one PSP22 token for another in a simple way.    
In *./logics/traits/pair.rs* add the **swap** function to Pair trait. As this function modify the state, it should take a `&mut self` as first argument.
Also add the function to emit swap event that will have to be implemented in the contract:

```rust
pub trait Pair {
    ...
    #[ink(message)]
    fn swap(
        &mut self,
        amount_0_out: Balance,
        amount_1_out: Balance,
        to: AccountId,
    ) -> Result<(), PairError>;
    ...
    fn _emit_swap_event(
        &self,
        _sender: AccountId,
        _amount_0_in: Balance,
        _amount_1_in: Balance,
        _amount_0_out: Balance,
        _amount_1_out: Balance,
        _to: AccountId,
    );
}
```

### 2. Swap

First check user inputs then *get_reserves* and check liquidity:
```rust
impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {
    ...
    fn swap(
        &mut self,
        amount_0_out: Balance,
        amount_1_out: Balance,
        to: AccountId,
    ) -> Result<(), PairError> {
        if amount_0_out == 0 && amount_1_out == 0 {
            return Err(PairError::InsufficientOutputAmount)
        }
        let reserves = self.get_reserves();
        if amount_0_out >= reserves.0 || amount_1_out >= reserves.1 {
            return Err(PairError::InsufficientLiquidity)
        }
    }
    ...
}
```

Then get `token_0` and `token_1` addresses and process the swap while ensuring amounts out are not `0`:
```rust
...
    let token_0 = self.data::<data::Data>().token_0;
    let token_1 = self.data::<data::Data>().token_1;
    
    if to == token_0 || to == token_1 {
    return Err(PairError::InvalidTo)
    }
    if amount_0_out > 0 {
    self._safe_transfer(token_0, to, amount_0_out)?;
    }
    if amount_1_out > 0 {
    self._safe_transfer(token_1, to, amount_1_out)?;
    }
...
```

Then gets the balance of the contract for both tokens that will be used to update the price:
```rust
...
    let contract = Self::env().account_id();
    let balance_0 = PSP22Ref::balance_of(&token_0, contract);
    let balance_1 = PSP22Ref::balance_of(&token_1, contract);
...
```

Then you need to ensure that no trade attempted to left the trading pair with less reserves than should be there. 
`balance_0` and `balance_1` are the balances/reserves after the swap finished, `reserve_0` and `reserve_1` before that (swap is done first and then maybe reverted, when the requirements are not met).
You need to check that the swap did not reduce the product of the reserves (otherwise liquidity from the pool can be stolen).
That's why you check `balance_0 * balance_1 >= reserve_0 * reserve_1`.      
`balance_0_adjusted` and `balance_1_adjusted` are adjusted with 0.3% swap [liquidity provider fees](https://docs.uniswap.org/contracts/v2/concepts/advanced-topics/fees#liquidity-provider-fees).
```rust
...
    let amount_0_in = if balance_0
        > reserves
        .0
        .checked_sub(amount_0_out)
        .ok_or(PairError::SubUnderFlow4)?
    {
        balance_0
            .checked_sub(
                reserves
                    .0
                    .checked_sub(amount_0_out)
                    .ok_or(PairError::SubUnderFlow5)?,
            )
            .ok_or(PairError::SubUnderFlow6)?
    } else {
        0
    };
    let amount_1_in = if balance_1
        > reserves
        .1
        .checked_sub(amount_1_out)
        .ok_or(PairError::SubUnderFlow7)?
    {
        balance_1
            .checked_sub(
                reserves
                    .1
                    .checked_sub(amount_1_out)
                    .ok_or(PairError::SubUnderFlow8)?,
            )
            .ok_or(PairError::SubUnderFlow9)?
    } else {
        0
    };
    if amount_0_in == 0 && amount_1_in == 0 {
        return Err(PairError::InsufficientInputAmount)
    }

    let balance_0_adjusted = balance_0
        .checked_mul(1000)
        .ok_or(PairError::MulOverFlow8)?
        .checked_sub(amount_0_in.checked_mul(3).ok_or(PairError::MulOverFlow9)?)
        .ok_or(PairError::SubUnderFlow10)?;
    let balance_1_adjusted = balance_1
        .checked_mul(1000)
        .ok_or(PairError::MulOverFlow10)?
        .checked_sub(amount_1_in.checked_mul(3).ok_or(PairError::MulOverFlow11)?)
        .ok_or(PairError::SubUnderFlow11)?;

    if balance_0_adjusted
        .checked_mul(balance_1_adjusted)
        .ok_or(PairError::MulOverFlow16)?
        < reserves
        .0
        .checked_mul(reserves.1)
        .ok_or(PairError::MulOverFlow17)?
        .checked_mul(1000u128.pow(2))
        .ok_or(PairError::MulOverFlow18)?
    {
        return Err(PairError::K)
    }
```

Then update pool reserves and emit swap event:
```rust
        self._update(balance_0, balance_1, reserves.0, reserves.1)?;

        self._emit_swap_event(
            Self::env().caller(),
            amount_0_in,
            amount_1_in,
            amount_0_out,
            amount_1_out,
            to,
        );
        Ok(())
```

Add the empty implementation of **_emit_swap_event**. It should have `default` keyword as we will override this function in Pair contract:
```rust
impl<T: Storage<data::Data> + Storage<psp22::Data>> Pair for T {
    ...
    default fn _emit_swap_event(
        &self,
        _sender: AccountId,
        _amount_0_in: Balance,
        _amount_1_in: Balance,
        _amount_0_out: Balance,
        _amount_1_out: Balance,
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
    K,
    InsufficientLiquidityMinted,
    InsufficientLiquidityBurned,
    InsufficientOutputAmount,
    InsufficientLiquidity,
    Overflow,
    InvalidTo,
    InsufficientInputAmount,
    SubUnderFlow1,
    SubUnderFlow2,
    SubUnderFlow3,
    SubUnderFlow4,
    SubUnderFlow5,
    SubUnderFlow6,
    SubUnderFlow7,
    SubUnderFlow8,
    SubUnderFlow9,
    SubUnderFlow10,
    SubUnderFlow11,
    SubUnderFlow14,
    MulOverFlow1,
    MulOverFlow2,
    MulOverFlow3,
    MulOverFlow4,
    MulOverFlow5,
    MulOverFlow6,
    MulOverFlow7,
    MulOverFlow8,
    MulOverFlow9,
    MulOverFlow10,
    MulOverFlow11,
    MulOverFlow14,
    MulOverFlow15,
    MulOverFlow16,
    MulOverFlow17,
    MulOverFlow18,
    DivByZero1,
    DivByZero2,
    DivByZero3,
    DivByZero4,
    DivByZero5,
    AddOverflow1,
}
```

### 3. Implement Event

in the contracts *./cotnracts/pair/lib.rs* add the Event struct and override the implementation of emit event:
```rust
...
#[ink(event)]
pub struct Swap {
    #[ink(topic)]
    pub sender: AccountId,
    pub amount_0_in: Balance,
    pub amount_1_in: Balance,
    pub amount_0_out: Balance,
    pub amount_1_out: Balance,
    #[ink(topic)]
    pub to: AccountId,
}
...
impl Pair for PairContract {
    ...
    fn _emit_swap_event(
        &self,
        sender: AccountId,
        amount_0_in: Balance,
        amount_1_in: Balance,
        amount_0_out: Balance,
        amount_1_out: Balance,
        to: AccountId,
    ) {
        self.env().emit_event(Swap {
            sender,
            amount_0_in,
            amount_1_in,
            amount_0_out,
            amount_1_out,
            to,
        })
    }
}
...
```

And that's it!
Check your Pair contract with (to run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/swap_end)