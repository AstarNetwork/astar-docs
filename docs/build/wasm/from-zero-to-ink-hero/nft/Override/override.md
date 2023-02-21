# Override `mint()` Method

## Mint allowed only for Owner

You may have noticed while using the Openbrush wizard, that prior to adding the Security -> Ownable trait, the contract will not have the `mint()` function overridden, so anyone is able to mint new tokens, by default.

```rust
impl PSP34Mintable for Contract { }
```

However, after including the *Ownable* trait, the default `mint()` function will be overridden, and restricted to being called by the contract owner, only. 

```rust
impl PSP34Mintable for Contract {
    #[ink(message)]
    #[openbrush::modifiers(only_owner)]
    fn mint(
        &mut self,
        account: AccountId,
        id: Id
    ) -> Result<(), PSP34Error> {
        self._mint_to(account, id)
    }
}
```

The wizard also creates a line in the `new()` constructor that sets the initial owner of the contract to the account address used to deploy it:

```rust
_instance._init_with_owner(_instance.env().caller());
```

At this stage we will make a few changes:
* We do not want tokens to be mintable by the contract owner, only. We would like anyone who paid a fee to be able to mint tokens, as well. 
* We would like to charge a fee of 1 SDN token per token minted (or any other native token, depending on the network).
* The constructor should not call the mint function.


## Make the mint() Function Payable
Making a function payable in an ink! contract is relatively straightforward. Simply add `payable` to the ink! macro as follows:

```rust
#[ink(message, payable)]
```
However, since `PSP34Mintable` is an imported trait, the `payable` attribute can't be overridden in the current state of Openbrush. Therefore, we will need to introduce a new trait, and implement it in our contract. 
The trait `PSP34Mintable` and it's `mint()` function will no longer be needed, so can be removed from the contract.

Let's introduce a new `mint()` function to the contract, and add it after the constructor.

```rust
#[ink(message, payable)]
pub fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
    self._mint_to(account, id)
}
```

This will make the function payable, which means `mint()` will be able to receive native tokens, however, we still need to check the amount of funds transferred by the call.
If the value transferred is not 1 native token, the `mint()` method will return an error message that can be customized to suit your needs.

```rust
#[ink(message, payable)]
pub fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
    if Self::env().transferred_value() != 1_000_000_000_000_000_000 {
        return Err(PSP34Error::Custom(String::from("BadMintValue")))
    }
    self._mint_to(account, id)
}
```

At this stage, your code should look something like [this](https://github.com/swanky-dapps/nft/tree/tutorial/mint-step2).
