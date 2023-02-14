# PayableMint Trait Implementation
In this section we will: 
* Define a new data type. 
* Implement functions defined in the PayableMint trait from the previous section.
* Update the contract's constructor to accept new parameters.
* Write a unit test for `mint()`.

## Data Type Definition
Since the contract is able to accept new parameters, we will need storage to log them. Let's create a new file called `logics/impls/types.rs` and add:

```rust
use openbrush::traits::{
    Balance,
};
pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

#[derive(Default, Debug)]
#[openbrush::upgradeable_storage(STORAGE_KEY)]
pub struct Data {
    pub last_token_id: u64,
    pub max_supply: u64,
    pub price_per_mint: Balance,
}
```

Don't forget to update the `mod.rs` file with:

```rust
pub mod types;
```

Since we introduced data storage, we will need to add a trait bond:

```rust
impl<T> PayableMint for T
where
    T: Storage<Data>
    {...}
```

To keep our functions easy to read, let's introduce an `Internal` trait with helper functions.

```rust
pub trait Internal {
    /// Check if the transferred mint values is as expected
    fn check_value(&self, transferred_value: u128, mint_amount: u64) -> Result<(), PSP34Error>;

    /// Check amount of tokens to be minted
    fn check_amount(&self, mint_amount: u64) -> Result<(), PSP34Error>;

    /// Check if token is minted
    fn token_exists(&self, id: Id) -> Result<(), PSP34Error>;
}
```

## Mint Implementation
There are several checks that need to be performed before the token mint can proceed, and functions that perform these checks are implemented as part of the `Internal` trait.

### Check Transferred Funds and Overflow
```rust
default fn check_value(
    &self,
    transferred_value: u128,
    mint_amount: u64,
) -> Result<(), PSP34Error> {
    if let Some(value) = (mint_amount as u128).checked_mul(self.data::<Data>().price_per_mint) {
        if transferred_value == value {
            return Ok(())
        }
    }
    return Err(PSP34Error::Custom(String::from(
        Shiden34Error::BadMintValue.as_str(),
    )))
}
```

### Check Amount of Tokens to be Minted
```rust
/// Check amount of tokens to be minted
default fn check_amount(&self, mint_amount: u64) -> Result<(), PSP34Error> {
    if mint_amount == 0 {
        return Err(PSP34Error::Custom(String::from(
            Shiden34Error::CannotMintZeroTokens.as_str(),
        )))
    }
    if let Some(amount) = self.data::<Data>().last_token_id.checked_add(mint_amount) {
        if amount <= self.data::<Data>().max_supply {
            return Ok(())
        }
    }
    return Err(PSP34Error::Custom(String::from(
        Shiden34Error::CollectionIsFull.as_str(),
    )))
}
```

### Mint Implementation
```rust
default fn mint(&mut self, to: AccountId, mint_amount: u64) -> Result<(), PSP34Error> {
    self.check_value(Self::env().transferred_value(), mint_amount)?;
    self.check_amount(mint_amount)?;

    let next_to_mint = self.data::<Data>().last_token_id + 1; // first mint id is 1
    let mint_offset = next_to_mint + mint_amount;

    for mint_id in next_to_mint..mint_offset {
        self.data::<psp34::Data<enumerable::Balances>>()
            ._mint_to(to, Id::U64(mint_id))?;
        self.data::<Data>().last_token_id += 1;
        self._emit_transfer_event(None, Some(to), Id::U64(mint_id));
    }

    Ok(())
}
```
## Withdrawal Implementation
Allow the contract owner to initiate withdrawal of funds from the contract by implementing a withdraw function:

```rust
/// Withdraws funds to contract owner
#[modifiers(only_owner)]
default fn withdraw(&mut self) -> Result<(), PSP34Error> {
    let balance = Self::env().balance();
    let current_balance = balance
        .checked_sub(Self::env().minimum_balance())
        .unwrap_or_default();
    Self::env()
        .transfer(self.data::<ownable::Data>().owner(), current_balance)
        .map_err(|_| {
            PSP34Error::Custom(String::from(Shiden34Error::WithdrawalFailed.as_str()))
        })?;
    Ok(())
}
```
## Set `base_uri` and get `token_uri`

Let's create a `token_exist` function and add it to the `Internal` trait:

```rust
/// Check if token is minted
default fn token_exists(&self, id: Id) -> Result<(), PSP34Error> {
    self.data::<psp34::Data<enumerable::Balances>>()
        .owner_of(id)
        .ok_or(PSP34Error::TokenNotExists)?;
    Ok(())
}
```

Implement `set_base_uri`:
```rust
/// Set new value for the baseUri
#[modifiers(only_owner)]
default fn set_base_uri(&mut self, uri: PreludeString) -> Result<(), PSP34Error> {
    let id = self
        .data::<psp34::Data<enumerable::Balances>>()
        .collection_id();
    self.data::<metadata::Data>()
        ._set_attribute(id, String::from("baseUri"), uri.into_bytes());
    Ok(())
}
```

Implement `token_uri`:
```rust
/// Get URI from token ID
default fn token_uri(&self, token_id: u64) -> Result<PreludeString, PSP34Error> {
    self.token_exists(Id::U64(token_id))?;
    let value = self.get_attribute(
        self.data::<psp34::Data<enumerable::Balances>>()
            .collection_id(),
        String::from("baseUri"),
    );
    let mut token_uri = PreludeString::from_utf8(value.unwrap()).unwrap();
    token_uri = token_uri + &token_id.to_string() + &PreludeString::from(".json");
    Ok(token_uri)
}
```

## Update Contract
Since we have added a new type `Data`, let's import it:
```rust
use payable_mint::impls::payable_mint::*;
```

Add a new element in the `struct Contract`:
```rust
#[storage_field]
payable_mint: types::Data,
```

Update the constructor to accept new parameters:
```rust
#[ink(constructor)]
pub fn new(
    name: String,
    symbol: String,
    base_uri: String,
    max_supply: u64,
    price_per_mint: Balance,
) -> Self {
    ink_lang::codegen::initialize_contract(|instance: &mut Contract|{
        instance._init_with_owner(instance.env().caller());
        let collection_id = instance.collection_id();
        instance._set_attribute(collection_id.clone(), String::from("name"), name);
        instance._set_attribute(collection_id.clone(), String::from("symbol"), symbol);
        instance._set_attribute(collection_id, String::from("baseUri"), base_uri);
        instance.payable_mint.max_supply = max_supply;
        instance.payable_mint.price_per_mint = price_per_mint;
        instance.payable_mint.last_token_id = 0;
    })
}
```

## Compose Unit Test
Let's write a simple unit test to check the `mint()` function. In ink! contracts, the unit test needs to be placed inside the contract module, and by default, Alice creates the contract.
After all imports, let's write a helper method to initiate the contract:
```rust
#[cfg(test)]
mod tests {
    use super::*;
    use crate::shiden34::PSP34Error::*;
    use ink_env::test;
    use ink_lang as ink;
    
    const PRICE: Balance = 100_000_000_000_000_000;
    
    fn init() -> Contract {
        const BASE_URI: &str = "ipfs://myIpfsUri/";
        const MAX_SUPPLY: u64 = 10;
        Contract::new(
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

    assert_eq!(sh34.total_supply(), 0);
    test::set_value_transferred::<ink_env::DefaultEnvironment>(
        PRICE * num_of_mints as u128,
    );
    assert!(sh34.mint(accounts.bob, num_of_mints).is_ok());
    assert_eq!(sh34.total_supply(), num_of_mints as u128);
    assert_eq!(sh34.balance_of(accounts.bob), 5);
    assert_eq!(sh34.owners_token_by_index(accounts.bob, 0), Ok(Id::U64(1)));
    assert_eq!(sh34.owners_token_by_index(accounts.bob, 1), Ok(Id::U64(2)));
    assert_eq!(sh34.owners_token_by_index(accounts.bob, 2), Ok(Id::U64(3)));
    assert_eq!(sh34.owners_token_by_index(accounts.bob, 3), Ok(Id::U64(4)));
    assert_eq!(sh34.owners_token_by_index(accounts.bob, 4), Ok(Id::U64(5)));
    assert_eq!(
        sh34.owners_token_by_index(accounts.bob, 5),
        Err(TokenNotExists)
    );
}


fn set_sender(sender: AccountId) {
    ink_env::test::set_caller::<Environment>(sender);
}
```

Run unit test:
```bash
cargo test
```

At this stage, your code should look something like [this](https://github.com/swanky-dapps/nft/tree/tutorial/payablemint-step5).