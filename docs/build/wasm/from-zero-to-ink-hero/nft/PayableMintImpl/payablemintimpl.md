# PayableMint Trait Implementation
In this section we will: 
* Define a new data type. 
* Implement functions defined in the `PayableMint` trait from the previous section in file `logics/impl/payable_mint.rs`.
* Update the contract's constructor to accept new parameters.
* Write a unit test for `mint()`.

## New Type Definition
Since the contract is able to accept new parameters, we will need storage to log them. Let's create a new file called `logics/impls/payable_mint/types.rs` and add new type `Data`:

```rust
use openbrush::traits::Balance;

#[derive(Default, Debug)]
#[openbrush::storage_item]
pub struct Data {
    pub last_token_id: u64,
    pub max_supply: u64,
    pub price_per_mint: Balance,
}rice_per_mint: Balance,
}
```

Don't forget to update the `logics/impls/payable_mint/mod.rs` file with:

```rust
pub mod types;
```

Since we introduced data storage, we will need to add a trait bound `Storage<Data>` in `logics/impls/payable_mint/payable_mint.rs`:

```rust
use crate::impls::payable_mint::types::Data;

#[openbrush::trait_definition]
pub trait PayableMintImpl:
    Storage<Data>
    + Storage<psp34::Data>
    + Storage<ownable::Data>
    + Storage<metadata::Data>
    {...}
```

## `mint()` Implementation
There are several checks that need to be performed before the token mint can proceed. To keep our `mint()` function easy to read, let's introduce an `Internal` trait with helper functions in our implementation file `logics/impls/payable_mint/payable_mint.rs` and add two helper functions `check_value()` and `check_amount()` by defining traits and implementing them in the same file:

```rust
pub trait Internal: Storage<Data> + psp34::Internal {
    /// Check if the transferred mint values is as expected
    fn check_value(&self, transferred_value: u128, mint_amount: u64) -> Result<(), PSP34Error> {
        if let Some(value) = (mint_amount as u128).checked_mul(self.data::<Data>().price_per_mint) {
            if transferred_value == value {
                return Ok(());
            }
        }
        return Err(PSP34Error::Custom(String::from("BadMintValue")));
    }

    /// Check amount of tokens to be minted
    fn check_amount(&self, mint_amount: u64) -> Result<(), PSP34Error> {
        if mint_amount == 0 {
            return Err(PSP34Error::Custom(String::from("CannotMintZeroTokens")));
        }
        if let Some(amount) = self.data::<Data>().last_token_id.checked_add(mint_amount) {
            if amount <= self.data::<Data>().max_supply {
                return Ok(());
            }
        }
        return Err(PSP34Error::Custom(String::from("CollectionIsFull")));
    }
}
```
Using these helper functions our `mint()` implementation will look like this:
```rust
#[ink(message, payable)]
fn mint(&mut self, to: AccountId, mint_amount: u64) -> Result<(), PSP34Error> {
    self.check_value(Self::env().transferred_value(), mint_amount)?;
    self.check_amount(mint_amount)?;

    let next_to_mint = self.data::<Data>().last_token_id + 1; // first mint id is 1
    let mint_offset = next_to_mint + mint_amount;

    for mint_id in next_to_mint..mint_offset {
        psp34::InternalImpl::_mint_to(self, to, Id::U64(mint_id))?;
        self.data::<Data>().last_token_id += 1;
    }

    Ok(())
}
```
## `withdraw()` Implementation
This trait allows the contract owner to initiate withdrawal of funds from the contract by implementing a withdraw function:

```rust
/// Withdraws funds to contract owner
#[ink(message)]
#[openbrush::modifiers(only_owner)]
fn withdraw(&mut self) -> Result<(), PSP34Error> {
    let balance = Self::env().balance();
    let current_balance = balance
        .checked_sub(Self::env().minimum_balance())
        .unwrap_or_default();
    let owner = self.data::<ownable::Data>().owner.get().unwrap().unwrap();
    Self::env()
        .transfer(owner, current_balance)
        .map_err(|_| PSP34Error::Custom(String::from("WithdrawalFailed")))?;
    Ok(())
}
```
## `set_base_uri()` and `token_uri()` Implementation

To make the code cleaner, let's create additional helper function `token_exist()` and add it to the `Internal` trait:

```rust
pub trait Internal: Storage<Data> + psp34::Internal {
    ...

     /// Check if token is minted
    fn token_exists(&self, id: Id) -> Result<(), PSP34Error> {
        self._owner_of(&id).ok_or(PSP34Error::TokenNotExists)?;
        Ok(())
    }
```

Now the implementation of `set_base_uri()` and `token_uri()` will look like this:
```rust
...
/// Set new value for the baseUri
#[ink(message)]
#[openbrush::modifiers(only_owner)]
fn set_base_uri(&mut self, uri: String) -> Result<(), PSP34Error> {
    let id = PSP34Impl::collection_id(self);
    metadata::Internal::_set_attribute(self, id, String::from("baseUri"), uri);

    Ok(())
}

/// Get URI from token ID
#[ink(message)]
fn token_uri(&self, token_id: u64) -> Result<String, PSP34Error> {
    self.token_exists(Id::U64(token_id))?;
    let base_uri = PSP34MetadataImpl::get_attribute(
        self,
        PSP34Impl::collection_id(self),
        String::from("baseUri"),
    );
    let token_uri = base_uri.unwrap() + &token_id.to_string() + &String::from(".json");
    Ok(token_uri)
```

## Update Shiden34 Contract
Since we have added a new type `Data`, let's import it into our `Shiden34` contract:
```rust
use payable_mint_pkg::impls::payable_mint::*;
```

Add a new element in the `struct Shiden34`:
```rust
...
#[storage_field]
payable_mint: types::Data,
```

Update the constructor to accept new parameters:
```rust
...
#[ink(constructor)]
pub fn new(
    name: String,
    symbol: String,
    base_uri: String,
    max_supply: u64,
    price_per_mint: Balance,
) -> Self {
    let mut instance = Self::default();
    let caller = instance.env().caller();
    ownable::InternalImpl::_init_with_owner(&mut instance, caller);
    let collection_id = psp34::PSP34Impl::collection_id(&instance);
    metadata::InternalImpl::_set_attribute(
        &mut instance,
        collection_id.clone(),
        String::from("name"),
        name,
    );
    metadata::InternalImpl::_set_attribute(
        &mut instance,
        collection_id.clone(),
        String::from("symbol"),
        symbol,
    );
    metadata::InternalImpl::_set_attribute(
        &mut instance,
        collection_id,
        String::from("baseUri"),
        base_uri,
    );
    instance.payable_mint.max_supply = max_supply;
    instance.payable_mint.price_per_mint = price_per_mint;
    instance.payable_mint.last_token_id = 0;
    instance
}
```

## Compose Unit Test
Let's write a simple unit test to check the `mint()` function. In ink! contracts, the unit test needs to be placed inside the contract module, and by default, Alice creates the contract.
After all imports, let's write a helper method to initiate the contract:
```rust
#[cfg(test)]
#[cfg(test)]
mod tests {
    use super::*;
    use crate::shiden34::PSP34Error::*;
    use ink::env::test;

    const PRICE: Balance = 100_000_000_000_000_000;

    fn init() -> Shiden34 {
        const BASE_URI: &str = "ipfs://myIpfsUri/";
        const MAX_SUPPLY: u64 = 10;
        Shiden34::new(
            String::from("Shiden34"),
            String::from("SH34"),
            String::from(BASE_URI),
            MAX_SUPPLY,
            PRICE,
        )
    }
}
```

Test minting 5 tokens to Bob's account. Call to `mint()` will be from Bob's account:
```rust
#[ink::test]
fn mint_multiple_works() {
    let mut sh34 = init();
    let accounts = test::default_accounts::<Environment>();
    set_sender(accounts.bob);
    let num_of_mints: u64 = 5;

    assert_eq!(PSP34Impl::total_supply(&sh34), 0);
    test::set_value_transferred::<ink::env::DefaultEnvironment>(
        PRICE * num_of_mints as u128,
    );
    assert!(payable_mint::PayableMintImpl::mint(&mut sh34, accounts.bob, num_of_mints).is_ok());
    assert_eq!(PSP34Impl::total_supply(&sh34), num_of_mints as u128);
    assert_eq!(PSP34Impl::balance_of(&sh34, accounts.bob), 5);
    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 0), Ok(Id::U64(1)));
    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 1), Ok(Id::U64(2)));
    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 2), Ok(Id::U64(3)));
    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 3), Ok(Id::U64(4)));
    assert_eq!(PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 4), Ok(Id::U64(5)));
    assert_eq!(
        PSP34EnumerableImpl::owners_token_by_index(&sh34, accounts.bob, 5),
        Err(TokenNotExists)
    );
}

fn set_sender(sender: AccountId) {
    ink::env::test::set_caller::<Environment>(sender);
}
```

Run unit test:
```bash
cargo test
```

At this stage, your code should look something like [this](https://github.com/swanky-dapps/nft/tree/tutorial/payablemint-step5).