# Archive Node

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

An **archive node** stores the history of past blocks. Most of times, an archive node is used as **RPC endpoint**.
RPC plays a vital role on our network: it connects users and dApps to the blockchain through WebSocket and HTTP endpoints. For example, our [public endpoints](/docs/build/environment/endpoints.md) run archive nodes for anyone to quickly connect to Astar chains.

**DApp projects** need to run their own RPC node as archive to the retrieve necessary blockchain data and not to rely on public infrastructure. Public endpoints respond slower because of the large amount of users connected and are rate limited.

:::caution
Be careful not to confuse with a **full node** that has a pruned database: a full node only stores the current state and most recent blocks (256 blocks by default) and uses much less storage space.
:::

We maintain 3 different networks: the testnet Shibuya, Shiden as a parachain of Kusama, and Astar as a parachain of Polkadot.

| Astar chain | Relay Chain | Name | Token |
|---|---|---|---|
| Testnet | Tokyo (hosted by Astar) | Shibuya | $SBY |
| Shiden | Kusama | Shiden | $SDN |
| Astar | Polkadot | Astar | $ASTR |

## Requirements
### Machine
:::note
- Storage space will increase as the network grows.
- Archive nodes may require a larger server, depending on the amount and frequency of data requested by a dApp.
:::

<Tabs>
<TabItem value="astar" label="Astar" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores |
| Memory | 16 GB |
| Hard Disk | 500 GB SSD (NVMe preferable) |

</TabItem>

<TabItem value="shiden" label="Shiden" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 8 cores |
| Memory | 16 GB |
| Hard Disk | 500 GB SSD (NVMe preferable) |

</TabItem>

<TabItem value="shibuya" label="Shibuya" default>

| Component | Requirement |
|---|---|
| System | Ubuntu 20.04 |
| CPU | 4 cores |
| Memory | 8 GB |
| Hard Disk | 200 GB SSD (NVMe preferable) |

</TabItem>
</Tabs>

### Ports
The Astar node runs in parachain configuration, meaning they will listen at different ports by default for both the parachain and the embedded relay chain.

|Description| Parachain Port | Relaychain Port | Custom Port Flag |
|---|---|---|---|
| P2P | 30333 | 30334 | `--port` |
| WS | 9944 | 9945 | `--ws-port` |
| RPC | 9933 | 9934 | `--rpc-port` |
| Prometheus | 9615 | 9616 | `--prometheus-port` |

For all types of nodes, ports `30333` and `30334` need to be opened for incoming traffic at the Firewall.
**Collator nodes should not expose WS and RPC ports to the public.**

---

## Installation

There are 2 different ways to run an Astar node:

[Using Binary](/docs/nodes/archive-node/binary) - run the node from binary file and set it up as systemd service

[Using Docker](/docs/nodes/archive-node/docker) - run the node within a Docker container
