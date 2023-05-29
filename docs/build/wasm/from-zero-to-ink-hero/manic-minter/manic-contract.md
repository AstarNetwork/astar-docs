---
sidebar_position: 3
---

# ManicMinter Contract
This tutorial will not include complete code from the contract to keep it short and focused on the cross contract calls and e2e tests. The full code for this example is available [here](https://github.com/swanky-dapps/manic-minter)

## Storage
To start with delete the boilerplate code from the `lib.rs` file.
The storage will be defined as follows:
```rust
pub struct ManicMinter {
    /// Contract owner
    owner: AccountId,
    /// Oxygen contract address
    token_contract: AccountId,
    /// Minting price. Caller must pay this price to mint one new token from Oxygen contract
    price: Balance,
}
```

## Error and Types
We will define the error and types as follows:
```rust
/// The ManicMinter error types.
pub enum Error {
    /// Returned if not enough balance to fulfill a request is available.
    BadMintValue,
    /// Returned if the token contract account is not set during the contract creation.
    ContractNotSet,
    /// The call is not allowed if the caller is not the owner of the contract
    NotOwner,
    /// Returned if multiplication of price and amount overflows
    OverFlow,
    /// Returned if the cross contract transaction failed
    TransactionFailed,
}

pub type Result<T> = core::result::Result<T, Error>;
```
## Contract Trait
The following trait will be used to define the contract interface:
```rust
pub trait Minting {
    /// Mint new tokens from Oxygen contract
    #[ink(message, payable)]
    fn manic_mint(&mut self, amount: Balance) -> Result<()>;

    /// Set minting price for one Oxygen token
    #[ink(message)]
    fn set_price(&mut self, price: Balance) -> Result<()>;

    /// Get minting price for one Oxygen token
    #[ink(message)]
    fn get_price(&self) -> Balance;
}
```

## Constructor
The constructor will be defined as follows:
```rust
impl ManicMinter {
    #[ink(constructor)]
    pub fn new(contract_acc: AccountId) -> Self {
        Self {
            owner: Self::env().caller(),
            token_contract: contract_acc,
            price: 0,
        }
    }
}
```
## Cross Contract Call
The `manic_mint` method will execute cross contract call to Oxygen contract using `Call Builder`. The method will be defined as follows:
```rust
impl Minting for ManicMinter {
    #[ink(message, payable)]
    fn manic_mint(&mut self, amount: Balance) -> Result<()> {
        //---- snip ----

        let mint_result = build_call::<DefaultEnvironment>()
            .call(self.token_contract)
            .gas_limit(5000000000)
            .exec_input(
                ExecutionInput::new(Selector::new(ink::selector_bytes!("PSP22Mintable::mint")))
                    .push_arg(caller)
                    .push_arg(amount),
            )
            .returns::<()>()
            .try_invoke();

        //---- snip ----
    }
}
```
Let's go over the code line by line:
* The `build_call().call()`  method is called passing Oxygen contract address as an argument.
* The `gas_limit` method is invoked with a value of 5000000000 to set the gas limit for the contract execution.
* The `exec_input` method is used to specify the execution input for the contract call.
* An `ExecutionInput` instance is created with the selector `PSP22Mintable::mint` with the arguments of `caller` address and `amount`.
* The `returns` method is called to specify the expected return type of the contract call, which in this case is ().
* The `try_invoke` method is called to execute the contract call and capture any potential errors.

:::note

To learn more about the `Call Builder` and other methods for cross contract call please refer to the [ink! documentation](https://use.ink/basics/cross-contract-calling).

:::


## Cargo Update
Update `Cargo.toml` dependency with the following content:
```toml  
[dependencies]
ink = { version = "4.1.0", default-features = false }
```

Since we will use PSP22 by Openbrush in our e2e test we need to add it under `dev-dependencies`
```toml
[dev-dependencies]
ink_e2e = "4.1.0"
openbrush = { tag = "3.1.0", git = "https://github.com/727-Ventures/openbrush-contracts", default-features = false, features = ["psp34", "ownable"] }
oxygen = { path = "../oxygen", default-features = false, features = ["ink-as-dependency"] }
```

## Oxygen Contract Update
Since we are using Oxygen contract for our testing we need to update it to be able to use it as a dependency. The code is already provided in the previous chapter, but please note that
1.  `Cargo.toml`  needs to be updated to become a library:
```toml
crate-type = [
    "rlib",
]
```
2. At the top of the `lib.rs` file for Oxygen contract add `ref`

```rust
pub use self::oxygen::OxygenRef;
```
3. Under the `features` section of the `Cargo.toml` file add the following:
```toml
ink-as-dependency = [] 
```
:::note
* This is a prerequisite for ManicMinter contract to import the Oxygen library in the `Cargo.toml` file with feature `ink-as-dependency`:
```rust
oxygen = { path = "../oxygen", default-features = false, features = ["ink-as-dependency"] }
```
:::

## Summary of the ManicMinter Contract Chapter
* The ManicMinter contract will be used to mint new fungible tokens.
* The ManicMinter contract will be able to mint Oxygen tokens by invoking cross contract call to Oxygen contract.
* The Oxygen contract needs to be set as library with `ink-as-dependency` feature to be used as a dependency in the ManicMinter contract.


The full code for this example is available [here](https://github.com/swanky-dapps/manic-minter).