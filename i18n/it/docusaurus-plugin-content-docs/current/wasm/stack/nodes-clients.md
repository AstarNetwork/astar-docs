---
sidebar_position: 3
---

# Nodes and Clients

## Local development nodes

### Swanky Node

Swanky Node is the local development node tracking the Shiden network.

It is the best choice if you want to develop your contract & test it in the local environment prior to deployment on Astar/Shiden mainnet.

Features:

- Consensus: `instant-seal` and `manual-seal`
- dApps staking enabled

You can find the Github repo [here](https://github.com/AstarNetwork/swanky-node).

### Substrate Contract Node

Substrate contract node targets substrate master. It is the best choice if you want to try the latest feature or unstable feature of ink! and/or pallet-contracts.

Features:

- Targets the latest Substrate master
- Consensus: `instant-seal`

Github can be found [here](https://github.com/paritytech/substrate-contracts-node).

## Testnet Node: Shibuya

Shibuya has almost the exact chain specifications as our mainnet Shiden & Astar and creates the best test environment for developers who want to launch their dApp on the mainnet.

Shibuyas `pallet-contracts` has `unstable-feature` so you can use unstable flagged features of ink!/`pallet-contracts`.

To get the latest info & get tokens via faucet, please check Shibuya's official docs.

## Mainnet Node: Shiden

Wasm contracts are live on Shiden. You can interact with them in the same way as Shibuya.

## Mainnet Node: Astar

At the moment, Wasm smart contracts are not available on Astar. They should go live during 2022 Q3.
