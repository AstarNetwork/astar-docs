---
sidebar_position: 3
---

# Running a Full Node

## Overview

Running a full node on an Astar chain allows you to connect to the network, sync with a bootnode, obtain local access to RPC endpoints, author blocks on the parachain, and more.

We have multiple networks, including our testnet Shibuya, Shiden on Kusama, and Astar on Polkadot. Here are how these environments are named and their corresponding relay chain:

| Astar ecosystem | Relay Chain | Name | Token |
| --- | --- | --- | --- |
| Testnet | Tokyo (hosted by Stake) | Shibuya | SBY |
| Shiden Network | Kusama | Shiden | SDN |
| Astar Network | Polkadot | Astar | ASTR |

## Requirements

Requirements for running any node are similar to what we recommend to our collators. Read more about this here.

:::info
Running a node for our testnet 'Shibuya' requires less. It's a perfect place to test your node infrastructure and costs.
:::
Astar nodes will listen on multiple ports. The default Substrate ports are used in the parachain, while the relay chain will listen on the next higher port. Both chains (parachain and relay chain) will run at the same time when you spin up your node.

The only ports that need to be open for incoming traffic are those designated for P2P. **Collators do not need to have RPC or WS ports opened**.

## Installation

There are a couple of different guides to help you get started running an Astar node:

- Using Docker - this method provides a quick and easy way to get started with a Docker container.
- Using Binary - this method is recommended for those with less experience compiling a Substrate node.
