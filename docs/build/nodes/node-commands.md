---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node Commands

The following sections explain various parameters required for different use-cases of the Astar node.

For more information, consult the embedded help page:

```
astar-collator --help
```

---

## Collator
### Binary service file

<Tabs>
<TabItem value="astar" label="Astar" default>

```
[Unit]
Description=Astar Collator

[Service]
User=astar
Group=astar

ExecStart=/usr/local/bin/astar-collator \
  --state-pruning 1000 \
  --blocks-pruning 1000 \
  --collator \
  --name {COLLATOR_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/0' \
  -- \
  --sync warp

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```
[Unit]
Description=Shiden Collator

[Service]
User=astar
Group=astar

ExecStart=/usr/local/bin/astar-collator \
  --state-pruning 1000 \
  --blocks-pruning 1000 \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/0' \
  -- \
  --sync warp

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```
[Unit]
Description=Shibuya Collator

[Service]
User=astar
Group=astar

ExecStart=/usr/local/bin/astar-collator \
  --state-pruning 1000 \
  --blocks-pruning 1000 \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  -- \
  --sync warp

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

```
docker run -d \
--name astar-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--state-pruning 1000 \
--blocks-pruning 1000 \
--collator \
--name {COLLATOR_NAME} \
--chain astar \
--base-path /data \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
-- \
--sync warp
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```
docker run -d \
--name shiden-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--state-pruning 1000 \
--blocks-pruning 1000 \
--collator \
--name {COLLATOR_NAME} \
--chain shiden \
--base-path /data \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
-- \
--sync warp
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```
docker run -d \
--name shibuya-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--state-pruning 1000 \
--blocks-pruning 1000 \
--collator \
--name {COLLATOR_NAME} \
--chain shibuya \
--base-path /data \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
-- \
--sync warp
```

</TabItem>
</Tabs>

---

## Archive node as RPC endpoint
### Binary

<Tabs>
<TabItem value="astar" label="Astar" default>

```
[Unit]
Description=Astar Archive node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --state-pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --rpc-external \
  --rpc-methods Safe \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  -- \
  --sync warp
  
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```
[Unit]
Description=Shiden Archive node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --state-pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --rpc-external \
  --rpc-methods Safe \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  -- \
  --sync warp
  
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```
[Unit]
Description=Shibuya Archive node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --state-pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --rpc-external \
  --rpc-methods Safe \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  -- \
  --sync warp

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

```
docker run -d \
--name astar-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--state-pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
-- \
--sync warp
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```
docker run -d \
--name shiden-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--state-pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
-- \
--sync warp
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```
docker run -d \
--name shibuya-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--state-pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
-- \
--sync warp
```

</TabItem>
</Tabs>

---

## Specific cases command args

### EVM management

Enable EVM methods on the RPC node:

```
--enable-evm-rpc
```

Enable EVM debug log:

```
--ethapi=debug
```

Enable EVM tracing log:

```
--ethapi=txpool,debug,trace
--wasm-runtime-overrides /var/lib/astar/wasm
```

### Use SQL db for Frontier Back-end

It is possible to choose between using RocksDB or SQL for the Frontier Back-end.     
SQL offers better performance over RocksDb for indexing and querying Ethereum logs.

The default is RocksDB, but you can choose SQL by adding the following command line argument:

```
--frontier-backend-type sql
```

This will run default values for SQL configuration.

To override the default configs values, we provide those flags:
```
# sets the Frontier SQL backend's maximum number of database connections that a connection pool can simultaneously handle.
# The default is 100
--frontier-sql-backend-pool-size 100

# sets the Frontier SQL backend's query timeout in number of VM operations.
# The default is 10000000
--frontier-sql-backend-num-ops-timeout 10000000

# sets the Frontier SQL backend's auxiliary thread limit.
# The default is 4
--frontier-sql-backend-thread-count 4

# sets the Frontier SQL backend's cache size in bytes.
# The default value is 200MB, which is 209715200 bytes
--frontier-sql-backend-cache-size 209715200
```


### External monitoring

```
--prometheus-external
```

### Relay chain

To pass commands to the relay chain node, add `--' after the parachain commands.
In the examples above, we are passing the warp sync node to the relay chain.

```
-- \
--sync warp
```

## Full command documentation

To see the full node (binary) embedded documentation, please use the help option.

```
$ ./astar-collator -h
```

:::note
The node process launches with Parachain ID 2006 for Astar, 2007 for Shiden, 2000 for Shibuya.

Parachain ID info for each network can be found [here](/docs/build/environment/endpoints.md).
:::
