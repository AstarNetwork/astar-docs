# Archive Node

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

An **archive node** keeps all the past blocks. It plays a vital role on a blockchain: it connects users and dApps to the blockchain through WS and RPC endpoints. The public endpoints you can see in [network details](/docs/quickstart/endpoints) are running archive nodes.

**Dapp projects** need to run their own archive node to retrieve blockchain data they use in order not to rely on public infrastructure that will respond slower because of the large amount of users connected.

:::note
Be careful of the confusion with a **full node** that has a prunned database: a full node only keeps the past configured number of blocks and uses much less storage space.
:::

We are manitaining 3 different networks: the testnet Shibuya, Shiden as a parachain of Kusama, and Astar as a parachain of Polkadot.

| Astar chain | Relay Chain | Name | Token |
|---|---|---|---|
| Testnet | Tokyo (hosted by Astar) | Shibuya | $SBY |
| Shiden | Kusama | Shiden | $SDN |
| Astar | Polkadot | Astar | $ASTR |

## Requirements
### Machine
:::note
- Storage space will increase as the network grows.
- In case with Archive node, depending on the amount and frequency of data requested by a dApp, it may require a larger server.
:::

<Tabs>
<TabItem value="astar" label="Astar" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores |
| Memory | 16 GB |
| Hard Disk | 400 GB SSD NVMe |

</TabItem>

<TabItem value="shiden" label="Shiden" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores |
| Memory | 16 GB |
| Hard Disk | 400 GB SSD NVMe |

</TabItem>

<TabItem value="shibuya" label="Shibuya" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 4 cores |
| Memory | 8 GB |
| Hard Disk | 100 GB SSD NVMe |

</TabItem>
</Tabs>

### Ports
The Astar node runs in parachain configuration: they will listen at different ports by default for both the parachain and the embeeded relay chain.

|Description| Parachain Port | Relaychain Port | Custom Port Flag |
|---|---|---|---|
| P2P | 30333 | 30334 | `--port` |
| WS | 9944 | 9945 | `--ws-port` |
| RPC | 9933 | 9934 | `--rpc-port` |
| Prometheus | 9615 | 9616 | `--prometheus-port` |

For all types of nodes, port `30333` and `30334` need to be opened for imcoming traffics at Firewall.
**Collator node should not expose WS and RPC ports to the public.**

---

## Installation

There are 2 different ways to run an Astar node:

[Using Binary](/docs/nodes/archive-node/binary) - run the node from binary file and set it up as systemd service

[Using Docker](/docs/nodes/archive-node/docker) - run the node within a Docker container
