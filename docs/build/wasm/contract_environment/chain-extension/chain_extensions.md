---
sidebar_position: 1
---

# Chain Extensions

Chain extension is a way to extend contracts API to add contracts to runtime pallet interaction. By default, contracts can only do cross-contract calls within their environment (pallet-contracts). Chain extension allows to add custom callable pallet functions.

![ink-ce](../../img/ink-ce.png)

### What chain extensions are available ?

#### Assets

This chain extension adds call to `pallet_assets` so that you can use Assets in your contracts. More info in the [chain-extensions contracts repo](https://github.com/swanky-dapps/chain-extension-contracts).

#### Account Unification

This chain extension adds query to `pallet_unified_accounts` so that you can query Unified addresses. Find usage and tests in [ink! XVM SDK repo](https://github.com/AstarNetwork/ink-xvm-sdk)

### Availability in networks


| Chain extension      | Shibuya | Shiden | Astar |
|---------------------|---|---|---|
| Assets              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Account Unification | :white_check_mark: | :white_large_square: | :white_large_square: |


### Implementations

There are two implementations: one in the runtime and one on the ink! side.  

#### Runtine

Implementation of the chain extension on runtime side is available on [Astar repository](https://github.com/AstarNetwork/Astar/tree/master/chain-extensions), under `chain-extensions` folder

#### ink! implementation

On contract side the implementation is made using [ChainExtensionMethod](https://github.com/paritytech/ink/blob/db7a906522a7e97ed5057b193df1253b33e99ee4/crates/env/src/chain_extension.rs#L77) that uses a custom environment
(so it can be used with other libraries that use custom environment like OpenBrush). It is implemented as a crate that you can import in you contract. It can be found in [chain-extension contracts repository](https://github.com/swanky-dapps/chain-extension-contracts)

#### Contracts examples

- [Asset Chain Extension](https://github.com/AstarNetwork/chain-extension-contracts)
- [dApp Staking](https://github.com/swanky-dapps/chain-extension-contracts/tree/main/examples/dapps-staking)

#### Video tutorials

- dApp Staking Chain Extension on ink! Smart Contracts by @AstarNetwork on [Youtube](https://www.youtube.com/watch?v=-T-HKy_vFCo)
- Build a Scheduler Chain Extension by @Parity on [Youtube](https://www.youtube.com/watch?v=yykPQF0tkqk)
