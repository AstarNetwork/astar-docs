---
sidebar_position: 4
---

# ManicMinter e2e Test
In this chapter we will write e2e tests for the ManicMinter contract. The e2e tests will be written in Rust using the ink! e2e framework. The e2e tests will be executed on a local substrate node.
Just like in previous chapter we will not include complete code from the contract to keep it short and focused on the e2e tests.
## Import Crates
Let's create a new module `e2e_tests` within the body of the `mod manicminter` and import the following crates:
```rust
#[cfg(all(test, feature = "e2e-tests"))]
mod e2e_tests {
    use super::*;
    use crate::manicminter::ManicMinterRef;
    use ink::primitives::AccountId;
    use ink_e2e::build_message;
    use openbrush::contracts::ownable::ownable_external::Ownable;
    use openbrush::contracts::psp22::psp22_external::PSP22;
    use oxygen::oxygen::OxygenRef;

    type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;

    const AMOUNT: Balance = 100;
    const PRICE: Balance = 10;
}
```
You will notice that we import Openbrush traits to invoke methods from the Oxygen contract, which is implemented using Openbrush's version of PSP22.

## Instantiate Contracts
We will use the `ink_e2e::Client` to instantiate the contracts. The `ink_e2e::Client` is a wrapper around the `ink_env::test` environment. The `ink_e2e::Client` provides a convenient way to instantiate contracts and invoke contract methods. 

In the declarative macro add our contracts as `additional contracts`:
```rust
#[ink_e2e::test(additional_contracts = "manicminter/Cargo.toml oxygen/Cargo.toml")]
async fn e2e_minting_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
    let initial_balance: Balance = 1_000_000;

    // Instantiate Oxygen contract
    let token_constructor = OxygenRef::new(initial_balance);
    let oxygen_account_id = client
        .instantiate("oxygen", &ink_e2e::alice(), token_constructor, 0, None)
        .await
        .expect("token instantiate failed")
        .account_id;

    // Instantiate ManicMinter contract
    let manic_minter_constructor = ManicMinterRef::new(oxygen_account_id);
    let manic_minter_account_id = client
        .instantiate(
            "manic-minter",
            &ink_e2e::alice(),
            manic_minter_constructor,
            0,
            None,
        )
        .await
        .expect("ManicMinter instantiate failed")
        .account_id;
}
```

## Set ManicMinter as Owner of Oxygen
We will use the `build_message` macro to compose the `transfer_ownership` method of the Oxygen contract. The `client.call()` executes the contract call. The `call_dry_run` method with `owner()` message verifies the result of the contract call.

```rust
// Set ManicMinter contract to be the owner of Oxygen contract
let change_owner = build_message::<OxygenRef>(oxygen_account_id.clone())
    .call(|p| p.transfer_ownership(manic_minter_account_id));
client
    .call(&ink_e2e::alice(), change_owner, 0, None)
    .await
    .expect("calling `transfer_ownership` failed");

// Verify that ManicMinter is the Oxygen contract owner
let owner = build_message::<OxygenRef>(oxygen_account_id.clone()).call(|p| p.owner());
let owner_result = client
    .call_dry_run(&ink_e2e::alice(), &owner, 0, None)
    .await
    .return_value();
assert_eq!(owner_result, manic_minter_account_id);
```

## Set Price for Oxygen Tokens

We  use the `build_message` macro to compose the `set_price` method of the ManicMinter contract. The `client.call()` executes the contract call. 

```rust
// Contract owner sets price
let price_message = build_message::<ManicMinterRef>(manic_minter_account_id.clone())
    .call(|manicminter| manicminter.set_price(PRICE));
client
    .call(&ink_e2e::alice(), price_message, 0, None)
    .await
    .expect("calling `set_price` failed");

```
## Mint Oxygen Tokens
We are now ready to execute `manic_mint` method of the ManicMinter contract. We use the `build_message` macro to compose the `manic_mint` method of the ManicMinter contract. The `client.call()` executes the contract call. The `call_dry_run` method with `balance_of()` message verifies the result of the contract call on the Oxygen contract.

```rust
// Bob mints AMOUNT of Oxygen tokens by calling ManicMinter contract
let mint_message = build_message::<ManicMinterRef>(manic_minter_account_id.clone())
    .call(|manicminter| manicminter.manic_mint(AMOUNT));
client
    .call(&ink_e2e::bob(), mint_message, PRICE * AMOUNT, None)
    .await
    .expect("calling `pink_mint` failed");

// Verify that tokens were minted on Oxygen contract
let bob_account_id = get_bob_account_id();
let balance_message = build_message::<OxygenRef>(oxygen_account_id.clone())
    .call(|p| p.balance_of(bob_account_id));
let token_balance = client
    .call_dry_run(&ink_e2e::bob(), &balance_message, 0, None)
    .await
    .return_value();
assert_eq!(token_balance, AMOUNT);
```

## Execute e2e Test
The e2e tests are invoking the node which is running on the local machine. 
Before running the test we need to setup the environment variable `CONTRACT_NODE` to the executable local node. The node can be Swanky-node or any other node that implements pallet-contracts.
```bash
export CONTRACTS_NODE="YOUR_CONTRACTS_NODE_PATH"
```
As an example it can be set to the following value:
```bash
export CONTRACTS_NODE="/home/p/Documents/astar/target/release/astar-collator"
```
After setting your node path, run the following command to execute the e2e tests:
```bash
cargo test --features e2e-tests
``` 
## Debugging e2e Test
If you want to print some variables and messages during the e2e test execution you can use the `println!` macro. The output will be printed in the terminal where the test is executed. To be able to see the printed output you need to run the test with `--nocapture` flag:
```bash
cargo test --features e2e-tests -- --nocapture
```

## Summary of the e2e Test Chapter:
* We imported the required crates for e2e tests.
* We instantiated the ManicMinter and Oxygen contracts.
* We set the ManicMinter contract to be the owner of the Oxygen contract.
* We set the price for Oxygen tokens.
* We minted Oxygen tokens using the ManicMinter contract.
  
The full code for this example is available [here](https://github.com/swanky-dapps/manic-minter).