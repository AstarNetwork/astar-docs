---
sidebar_position: 4
---

# Chain Extensions

Chain extension is a way to extend contracts API to add contracts to runtime pallet interaction. By default, contracts can only do cross-contract calls within their environment (pallet-contracts). Chain-extension allows to add custom callable pallet functions.

![ink-ce](../img/ink-ce.png)

### What chain-extensions are available ?

#### XVM 

This chain-extension enable usage of XVM in your contracts. More info in the [ink! XVM SDK repo](https://github.com/AstarNetwork/ink-xvm-sdk).

#### Dapps Staking

This chain-extension adds call to `pallet_dapps_staking` so that you can use Dapp Staking in your contracts. More info in the [chain-extensions contracts repo](https://github.com/swanky-dapps/chain-extension-contracts).

#### Assets

This chain-extension adds call to `pallet_assets` so that you can use Assets in your contracts. More info in the [chain-extensions contracts repo](https://github.com/swanky-dapps/chain-extension-contracts).

### Availability in networks


| Chain extension | Swanky | Shibuya | Shiden | Astar |
|---|---|---|---|---|
| XVM | :white_large_square: | :white_check_mark: | :white_large_square: | :white_large_square: |
| Dapps Staking |  :white_check_mark:| :white_check_mark: | :white_large_square: | :white_large_square: |
| Assets | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |


### How to use it in your ink! contracts ?

Check the available methods in the exhaustive [example contract](https://github.com/swanky-dapps/chain-extension-contracts/blob/main/examples/dapps-staking/lib.rs)

1. import the chain-extension crate: `dapps_staking_extension` in your `Cargo.toml` and to the `std` `features`
```toml
dapps_staking_extension = { git = "https://github.com/swanky-dapps/chain-extension-contracts", default-features = false }

[features]
default = ["std"]
std = [
    "ink_metadata/std",
    "ink/std",
    "scale/std",
    "scale-info/std",
    "dapps_staking_extension/std"
]
```

2. Import the crate in your contract: `use` statement in your contract module
```rust
pub mod staking_example {
    use dapps_staking_extension::*;
...
```

3. MAke call to chain-extension: use struct functions directly in your contract
```rust
DappsStaking::read_unbonding_period()
```