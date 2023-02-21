# PayableMint Trait 
So far, our `mint()` function is quite generic, giving freedom to a caller to mint any token, but at the same time not allowing insight into which tokens have already been minted. In this section we will more clearly define `mint()`, and add several utility functions commonly found in popular NFT projects, that will make this example contract more suitable for production release.

## Extending the Trait with Utility Functions

### `mint(to: AccountId, mint_amount: u64)`
The `mint()` function will now accept an NFT receiver account, and amount of tokens to be minted.
This will allow the contract to control which token will be minted next, and minting of more than one token at a time.

### `set_base_uri(uri: PreludeString)`
First we need to import `String` from `ink_prelude` and rename it so as to not be confused with the Openbrush String Implementation. The difference is that Openbrush String is in fact a vector of u8 elements, and since we expect users to use `utf-8` strings, we will use String from prelude.
```rust
use ink_prelude::string::String as PreludeString;
```
This function is able to change the `base_uri` for our collection. This function is not used frequently, but will come in handy if the collection metadata becomes corrupted and requires updating. The initial `base_uri` will be set during contract creation, which is described in next section.

### `withdraw()`
Since our contract accepts native token fees for minting, the owner needs to be able to withdraw the funds, otherwise they'll be locked in the contract forever. This function is set with an `only_owner` modifier, that restricts the ability to withdraw funds to the contract owner, only, which are then transferred to the owner's address.


### `token_uri(token_id: u64) -> PreludeString`
Given the `token_id` this method will return the full `uri` for token's metadata.

### `max_supply() -> u64;`
Read the max supply of tokens for this collection.
### `price() -> Balance;`
Read the token price.

## Full Trait Definition
At this stage, your `logics/traits/payable_mint.rs` file should look something like this:
```rust
use ink_prelude::string::String as PreludeString;

use openbrush::{
    contracts::psp34::PSP34Error,
    traits::{
        AccountId,
        Balance,
    },
};

#[openbrush::wrapper]
pub type PayableMintRef = dyn PayableMint;

#[openbrush::trait_definition]
pub trait PayableMint {
    #[ink(message, payable)]
    fn mint(&mut self, to: AccountId, mint_amount: u64) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn withdraw(&mut self) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn set_base_uri(&mut self, uri: PreludeString) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn token_uri(&self, token_id: u64) -> Result<PreludeString, PSP34Error>;
    #[ink(message)]
    fn max_supply(&self) -> u64;
    #[ink(message)]
    fn price(&self) -> Balance;
}
```
