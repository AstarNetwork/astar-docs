---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run a Full Node

## Overview

Running a full node on an Astar chain allows you to connect to the network, sync with a bootnode, obtain local access to RPC endpoints, author blocks on the parachain, and more.

Different from archive node, a full node discards all finalized blocks older than configured number of blocks (256 blocks by default).
A full node occupies less storage space than an archive node because of pruning.

A full node may eventually be able to rebuild the entire chain with no additional information, and become an archive node, but at the time of writing, this is not implemented. If you need to query historical blocks past what you pruned, you need to purge your database and resync your node starting in archive mode. Alternatively you can use a backup or snapshot of a trusted source to avoid needing to sync from genesis with the network, and only need the blocks past that snapshot. (reference: https://wiki.polkadot.network/docs/maintain-sync#types-of-nodes)

If your node need to provide old historical blocks' data, please consider to use Archive node instead.

## Requirements

Requirements for running any node are similar to what we recommend for archive node. Read more about this [here](/docs/nodes/archive-node/#requirements).
Note that Full node requires less disk space. Hard Disk requirement for Archive node is not applied to Full nodes.

To set a full node, you need to specify the number of blocks to be pruned:
```
--pruning 1000 \
```

:::info
Running a node for our testnet 'Shibuya' requires less resources. It's a perfect place to test your node infrastructure and costs.
:::

:::important
EVM RPC calls are disabled by default, and require additional flag to be enabled. Please refer [to this page](/docs/build/EVM/developer-tooling/own-RPC) for more info.
:::
