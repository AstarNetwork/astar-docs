---
sidebar_position: 2
---

# Pallet-Assets Chain Extension

### API
This chain extension allows contracts to call pallet-assets functions.     
It includes extrinsics:
```rust
fn mint()
fn burn()
fn transfer()
fn approve_transfer()
fn transfer_approved()
```

And these queries:
```rust
fn balance_of()
fn total_supply()
fn allowance()
fn metadata_name()
fn metadata_symbol()
fn metadata_decimals()
fn minimum_balance()
```

Some extrinsics are NOT part of the chain extension because they have no or limited usage for smart contracts.
```rust
fn create()
fn cancel_approval()
fn set_metadata()
fn transfer_ownership()
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

#### Only call on behalf of the contract is implemented

The Origin of the call is the contract address calling the chain-extension. The caller is this case is the address that calls the contract. 

#### Usage in your contract

:::note
Your contract should be in ink! 4.3 or above
:::

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

2. Add `use` statement in your contract module
```rust
use assets_extension::*;

```

3. Use struct functions directly in your contract
```rust
AssetsExtension::create(Origin::Address, asset_id, contract, min_balance)
```