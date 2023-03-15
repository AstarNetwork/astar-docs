---
sidebar_position: 2
---

# Pallet-Assets Chain Extension

### API
This chain extension allows contracts to call pallet-assets functions.     
It includes extrinsics:
```rust
fn create()
fn mint()
fn burn()
fn transfer()
fn approve_transfer()
fn cancel_approval()
fn transfer_approved()
fn set_metadata()
fn transfer_ownership()
```

And these queries:
```rust
fn balance_of()
fn total_supply()
fn allowance()
fn metadata_name()
fn metadata_symbol()
fn metadata_decimals()
```

Some extrinsics are NOT part of the chain extension because they have no or limited usage for smart contracts.
```rust
fn clear_metadata()
fn start_destroy()
fn destroy_accounts()
fn destroy_approvals()
fn finish_destroy()
fn freeze()
fn freeze_asset()
fn refund()
fn set_team()
fn thaw()
fn touch()
fn transfer_keep_alive()
```

#### Storage deposit

Creating an asset within the smart contract with `fn create()` will reserve `approvalDeposit` amount of contract balance. Either transfer funds to contract or make this function payable.
The same applies for `fn set_metadata()` but it depends on the bytes size you are storing on-chain.

#### Destroy an asset

As destroy functions are not part of the chain extension, please implement `fn transfer_ownership()` in your contract. And call it to set an external account as owner that will call the _destroy_ extrinsics on his behalf.

#### Only call on behalf of the contract is implemented

Chain extension allow to set the orgin of the call as the contract or as the caller. The caller is this case is the address that calls the contract (it can be an user or a contract in case of a cross-contract-call). But allowing call on behalf of the caller means user need to only interact with verified contract. Calling a non verified contract can have a risk for user funds.      
As ink! contract verification is not mature enough for now, only calls on behalf of the contract are implemented. We are still using an `Origin` enum that has `Address` (address of the contract) or `Caller` (address of the caller) fields. But for now only `Origin::Address` is supported, and `Origin::Caller` will return `OriginCannotBeCaller` Error. So that, in the future, call on behalf of the `Caller` will be activated without any change in the API.

#### Usage in your contract

Your contract should be in ink! 4.0.0   

1. add `assets_extension` in your `Cargo.toml` and to the `std` `features`
```toml
assets_extension = {  git = "https://github.com/swanky-dapps/chain-extension-contracts", default-features = false }

[features]
default = ["std"]
std = [
    "ink_metadata/std",
    "ink/std",
    "scale/std",
    "scale-info/std",
    "assets_extension/std",
]
```

2. Add use statement in your contract module
```rust
use assets_extension::*;

```

3. Use struct functions directly in your contract
```rust
AssetsExtension::create(Origin::Address, asset_id, contract, min_balance)
```