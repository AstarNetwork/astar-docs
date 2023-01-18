# Override `mint()` Method

## Mint allowed only for owner

You might have noticed while using Openbrush wizard that prior to adding trait Security -> Ownable the contract did not have overridden method `mint()`.
```rust
impl PSP34Mintable for Contract { }
```
But after including *Ownable* trait the `mint()` is overridden and now it can be called only by the contract owner. 
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

The wizard also added the line in `new()` constructor where the owner of the contract is initially set to be the account which was used to deploy the contract:
```rust
_instance._init_with_owner(_instance.env().caller());
```

At this step of tutorial we will make couple of changes:
* We do not want tokens to be mintable only by owner. We want everyone who paid to be able to mint. 
* Charge 1 SDN token for each minted token (or any other native token depending on the used network).
* Constructor will not call mint method.


## Add payable mint() method
Making any method to be `payable` in ink! contract is straight forward. You just add payable in the ink macro:
```rust
#[ink(message, payable)]
```
However since `PSP34Mintable` is an imported trait the `payable` attribute can't be overridden in the current state of Openbrush. Therefore we will need to introduce new trait and implement this trait on our Contract. 
The trait `PSP34Mintable` and it's `mint()` method are also not needed any longer and we will remove it from our contract.

Let's introduce new contract's `mint()` method and add it after the constructor.
```rust
#[ink(message, payable)]
pub fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
    self._mint_to(account, id)
}
```

This will make the method payable which means `mint()` is able to receive native tokens. But we still need to check the funds transferred with the call.
If the transferred value is not 1 native token the `mint()` method will return error with a custom message.

```rust
#[ink(message, payable)]
pub fn mint(&mut self, account: AccountId, id: Id) -> Result<(), PSP34Error> {
    if Self::env().transferred_value() != 1_000_000_000_000_000_000 {
        return Err(PSP34Error::Custom(String::from("BadMintValue")))
    }
    self._mint_to(account, id)
}
```

After this step your code should look like [this](https://github.com/swanky-dapps/nft/tree/tutorial/mint-step2).
