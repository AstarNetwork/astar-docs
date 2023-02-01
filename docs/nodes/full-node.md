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



:::info
Running a node for our testnet 'Shibuya' requires less resources. It's a perfect place to test your node infrastructure and costs.
:::

## Installation

Basic installation procedure is same as archive node. Please follow [Binary](/docs/nodes/archive-node/binary) or [Docker](/docs/nodes/archive-node/docker) installation guide. Note that some args to pass is slitely different from Archive node.

### Binary (Systemd)

<Tabs>
<TabItem value="astar" label="Astar" default>

```sh
[Unit]
Description=Astar node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --rpc-cors all \
  --name ${NODE_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --execution Wasm \
  --rpc-external \
  --ws-external

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```sh
[Unit]
Description=Shiden node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --rpc-cors all \
  --name ${NODE_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --execution Wasm \
  --rpc-external \
  --ws-external

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```sh
[Unit]
Description=Shibuya node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --rpc-cors all \
  --name ${NODE_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --execution Wasm \
  --rpc-external \
  --ws-external

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>


### Docker

<Tabs>
<TabItem value="astar" label="Astar" default>

```sh
docker run -d \
--name astar-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9933:9933 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--name ${NODE_NAME} \
--chain astar \
--execution Wasm \
--base-path /data \
--rpc-cors=all \
--rpc-external \
--ws-external
```

</TabItem>

<TabItem value="shiden" label="Shiden" default>

```sh
docker run -d \
--name shiden-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9933:9933 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--name ${NODE_NAME} \
--chain shiden \
--execution Wasm \
--base-path /data \
--rpc-cors=all \
--rpc-external \
--ws-external
```

</TabItem>

<TabItem value="shibuya" label="Shibuya" default>

```sh
docker run -d \
--name shibuya-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9933:9933 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--name ${NODE_NAME} \
--chain shibuya \
--execution Wasm \
--base-path /data \
--rpc-cors=all \
--rpc-external \
--ws-external
```

</TabItem>
</Tabs>
