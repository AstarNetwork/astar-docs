---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node Commands

The following sections summarize the commands of Astar nodes you need for different cases.
For any more details, you can consult help page:
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
  --pruning archive \
  --collator \
  --name {COLLATOR_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'

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
  --pruning archive \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'

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
  --pruning archive \
  --collator \
  --name {COLLATOR_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'

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
--pruning archive \
--collator \
--name {COLLATOR_NAME} \
--chain astar \
--base-path /data \
--trie-cache-size 0 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
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
--pruning archive \
--collator \
--name {COLLATOR_NAME} \
--chain shiden \
--base-path /data \
--trie-cache-size 0 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
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
--pruning archive \
--collator \
--name {COLLATOR_NAME} \
--chain shibuya \
--base-path /data \
--trie-cache-size 0 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
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
  --pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --rpc-external \
  --rpc-methods Safe \
  --rpc-max-request-size 1 \
  --rpc-max-response-size 1 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
  
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
  --pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --rpc-external \
  --rpc-methods Safe \
  --rpc-max-request-size 1 \
  --rpc-max-response-size 1 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
  
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
  --pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --rpc-external \
  --rpc-methods Safe \
  --rpc-max-request-size 1 \
  --rpc-max-response-size 1 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'

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
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
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
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
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
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
```

</TabItem>
</Tabs>

---

## Specific cases command args

### EVM management

Enable EVM medhods on RPC node
```
--enable-evm-rpc
```

Enable EVM debug log
```
--ethapi=debug
```

Enable EVM tracing log
```
--ethapi=txpool,debug,trace
--wasm-runtime-overrides /var/lib/astar/wasm
```

### External monitoring
```
--prometheus-external
```

---

## Full command documentation
To see full node command binary embedded documentation, please use help option.
```
$ ./astar-collator -h
```

Node process will be launched with Parachain ID 2006 for Astar, 2007 for Shiden, 1000 for Shibuya.
Parachain ID info for each network can be found [here](/docs/build/environment/endpoints.md).
