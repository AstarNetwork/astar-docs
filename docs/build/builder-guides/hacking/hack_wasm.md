---
sidebar_position: 2
---

# Hack Wasm Smart Contracts
![banner](../../assets/gradient4.jpg)

Read the linked chapters or use tutorials to be able to answer following questions:

## Setup ink! Environment [chapter](/docs/build/environment/ink_environment.md)

* Which cargo version are you using?
* Run `rustup show` command
* Run `cargo contract -V`. Is your cargo contract version higher than 1.5.0?

## Test Tokens [chapter](/docs/build/environment/faucet.md)
* Did you claim Shibuya tokens? How many SBY tokens did the faucet provide to you?

* Can you unit test ink! smart contract without running test node like Swanky-node?

## Run [Swanky](https://github.com/AstarNetwork/swanky-node) Node
* Start your swanky node and connect [polkadot-JS UI](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) to it. Please note that for swanky node there will be no node production if there is no interaction with it. 


## From Zero to ink Hero [tutorials](/docs/build/wasm/from-zero-to-ink-hero/flipper-contract/flipper)
Depending on your confidence, use any of these tutorial. If you are just starting, the Flipper contract is the way to go.
* Your task is to deploy the contract from the tutorial to Shibuya Network.
  * After you build contract notice where the `.contract` and `metadata.json` are created
  * Deploy Contract using [Contracts-UI](https://contracts-ui.substrate.io/)
  * What is the contract address?
  * Do you have any method that requires payment to be executed?
  * Use Polkadot-JS UI to reload same contract you just deployed using Contracts-UI


What is [next](/docs/build/builder-guides/hacking/next)? 