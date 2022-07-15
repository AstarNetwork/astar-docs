# Archive Node

## Overview

An **archive node** keeps all the past blocks. It plays a vital role on a blockchain: it connects users and dApps to the blockchain through WS and RPC endpoints. The public endpoints you can see in [network details](https://docs.astar.network/integration/network-details) are running archive nodes.

**Dapp projects** need to run their own archive node to retrieve blockchain data they use in order not to rely on public infrastructure that will respond slower because of the large amount of users connected.

> Note: be careful of the confusion with a **full node** that has a prunned database: a full node only keeps the past 256 blocks and uses much less storage space.

We are manitaining 3 different networks: the testnet Shibuya, Shiden as a parachain of Kusama, and Astar as a parachain of Polkadot.

| Astar chain | Relay Chain | Name | Token |
|---|---|---|---|
| Testnet | Tokyo (hosted by Astar) | Shibuya | $SBY |
| Shiden | Kusama | Shiden | $SDN |
| Astar | Polkadot | Astar | $ASTR |

## Requirements

Requirements for running any node are similar to what we recommend to our collators. Depending on the amount and frequency of data requested by a dApp, it may require a larger server. Read more about this here.
