---
sidebar_position: 6
---

# Nodes Supporting Contracts

## Local Development Nodes

### Swanky Node

Swanky Node is a local development node tracking the Shiden network.

Swanky Node is the best choice if you would like to develop your contract & test it in your local environment, prior to deploying it on Astar/Shiden mainnet.

Features:

- Consensus: `instant-seal` and `manual-seal`
- dApp staking enabled
- Chain Extensions

You can find the Github repo [here](https://github.com/AstarNetwork/swanky-node).

### Substrate Contract Node

Substrate contract node targets Substrate master. It is the best choice if you would like to try the latest (or unstable) features of ink! and/or pallet-contracts.

Features:

- Targets the latest Substrate master
- Consensus: `instant-seal`

The Github repository can be found [here](https://github.com/paritytech/substrate-contracts-node).

## Testnet Node: Shibuya

Shibuya has nearly the same chain specifications as Shiden & Astar mainnets, and provides an ideal environment for developers to test and debug their smart contracts, prior to launching their dApp on mainnet.

Shibuya's `pallet-contracts` has `unstable-feature` so you can use features from ink! that are flagged unstable in `pallet-contracts`.

To get the latest information and test tokens from the Faucet, consult Shibuya's official docs.

## Mainnet Node: Shiden

Wasm contracts are live on Shiden. You can interact with them in the same way as you would on Shibuya.

## Mainnet Node: Astar

Wasm contracts are live on Astar.
