# PayableMint Trait 
So far our `mint()` method was very generic giving a freedom to a caller to mint any token, but at the same time not giving insight which tokens are already minted. In this section we will define `mint()` to be more ready for real life NFT project and add several utility methods that can often be found in NFT projects.

## Extending Trait with utility methods

### mint(to: AccountId, mint_amount: u64)
The mint() method now takes receiver nft account and amount of tokens to be minted.
This will allow contract to be in charge which token will be minted next and allows minting more than one token at the time.

### mint_next()
Let' make one more simple mint() method which does not take any parameter. It mints a next available token.

### set_base_uri(uri: PreludeString)
First we need to import String from `ink_prelude` and rename it not to be mixed with Openbrush String implementation. The difference is that Openbrush String is in fact a vector of u8 elements. Since we expect users to use utf-8 string we use String from prelude.
```rust
use ink_prelude::string::String as PreludeString;
```
This method can change base_uri for our collection. This is not often used function but it can come handy in case collection metadata has an error and requires change. Initial `base_uri` will be set during the contract creation and that is described in next section of the tutorial.

### withdraw()
Since our contract not takes funds for minting, the contract owner needs to be able to withdraw the funds. Otherwise funds will be forever locked on the contract. This method will have `only_owner` modifier and it allows only contract owner to withdraw funds. The funds will be sent to the owner's address.


### token_uri(token_id: u64) -> PreludeString
Given the `token_id` this method will return full uri for token's metadata.

### max_supply() -> u64;
Read the max supply of tokens for this collection.
### price() -> Balance;
Read the token price.

## Full trait definition
Your `logics/traits/payable_mint.rs` will look like this:
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
    fn mint_next(&mut self) -> Result<(), PSP34Error>;
    #[ink(message, payable)]
    fn mint_for(&mut self, to: AccountId, mint_amount: u64) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn set_base_uri(&mut self, uri: PreludeString) -> Result<(), PSP34Error>;
    #[ink(message)]
    fn token_uri(&self, token_id: u64) -> Result<PreludeString, PSP34Error>;
    #[ink(message)]
    fn max_supply(&self) -> u64;
    #[ink(message)]
    fn price(&self) -> Balance;
    #[ink(message)]
    fn withdraw(&mut self) -> Result<(), PSP34Error>;
}
```
