---
sidebar_position: 1
---
# Prerequisites

This tutorial targets developers with no experience in ink! and a **basic** level in Rust.

## To follow this tutorial you will need:
- to [set up your ink! environment](../../XVM%20and%20WASM/setup_your_ink_environment.md)
- to [know "Hello, World! - The Flipper"](https://paritytech.github.io/ink/)
- to [install swanky](../../../wasm/sc-dev/swanky/)
- any substrate wallet in your browser([Talisman](https://www.talisman.xyz/), [Subwallet](https://subwallet.app/) etc)

If you want to deploy the contract in Shibuya Network, which is our testnet
- SBY(Native token in Shibuya Network) in your wallet from [faucet](https://portal.astar.network/#/shibuya-testnet/assets)

## What will we do ?

in this tutorial we will compile&deploy flipper contract written in ink! and interact with it from flipper application UI.

## What will we use ?

[ink! 3.3.0](https://github.com/paritytech/ink/tree/v3.3.0)   
[flipper(wasm-showcase-dapps)](https://github.com/AstarNetwork/wasm-showcase-dapps/tree/main/flipper)   

## What will you learn ?

- How to compile & deploy the simplest ink! contracts in local environemnt and testnet environment
- Anatomy of an ink! contract
- Define contract storage
- Callable functions
- Unit test your contract
- Detecting Polkadot.js
- Getting strorage date from ink! contracts
- Executing functions of ink! contracts
- Watching the status of transactions and getting their results
- Structure of repo of web application to interact with contracts from UI

## Summary

[I. File & Folder structure of the project](./Structure/file-structure.md)

Steps
1. Compile flipper contract with Swanky
2. Deploy the contract with Swanky and get the contract address
3. Run the app
4. Set the contract address
5. Login with wallet
6. flip and get result

### Setting

Clone repo 

```bash
git clone https://github.com/AstarNetwork/wasm-showcase-dapps
```
and Install dependencies by running `yarn`
```bash
cd wasm-showcase-dapps/flipper
yarn
```

0. Init

```bash
mkdir contract
cd contract
swanky init flipper
```
and chose `ink` as a contract language and `flipper` as template and as contract name. Chose `Y` when asking to download swanky node.
If you get this error `✖ Error Checking dependencies`, please make sure you complete [setting up ink! environment](../../XVM%20and%20WASM/setup_your_ink_environment.md)s.

1. Start the local node

```bash
cd flipper
swanky node start
```

2. Build the contract

```bash
swanky contract compile flipper
```
(Try rustup update if you face error which swanky doesn't return error)

3. deploy the contract

Local
```bash
swanky contract deploy flipper --account alice -g 100000000000 -a true
```

Shibuya
```bash
swanky contract deploy flipper --account alice --gas 100000000000 --args true --network shibuya
```
Note down the contract address.

### Run the UI

Install Dependencies

```bash
cd ..
yarn
```

Start next.js server

```bash
yarn dev
```

Go to http://localhost:3000 and enter the contract address. Flip button flips the boolean value.


### Folder Structure
| File Name                                                                   | About                     |
|----------------------------------------------------------------------------|--------------------------------|
| Cargo.toml              | Package Config       |          
|  lib.rs |  Your contract logic |

After your first compile, you will get 2 more files:

| File Name                                                                   | About                     |
|----------------------------------------------------------------------------|--------------------------------|
| Target              | build info, binary info       |          
|  Cargo.lock |  lock file for dependency package |