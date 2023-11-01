---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run an EVM Tracing Node

## Overview

Running a tracing node on an Astar chain allows you to debug EVM transactions and have enhanced access to transaction pool using EVM debug RPC (INSERT_LINK also see link below).

## Requirements

Requirements for running a tracing node are similar to what we recommend for an archive node. Read more about this [here](/docs/build/nodes/archive-node/).


## Node launch 

Tracing node setup in general is similar to the [Archive Node setup](/docs/build/nodes/archive-node/), except for the location of the binary and some additional launch flags.

:::info 

An EVM tracing node binary is different because it includes additional tracing features. You can easily build it from source using `cargo build --release --features evm-tracing` command or download the `evm-tracing-artifacts` from [latest release](https://github.com/AstarNetwork/Astar/releases/latest), an executable EVM tracing binary is included in the compressed file `evm-tracing-artifacts.tar.gz`.

:::

:::important

EVM RPC calls are disabled by default, and require the `--enable-evm-rpc` flag to be enabled. Please refer to this page (INSERT_LINK) for more info.

:::

### Runtime overriding

Tracing runtimes has additional debug API that makes possible deep (and slow) transaction debugging. For this reason it's not part of production runtimes. So, for using tracing features, runtime must be overrided by special `tracing` runtime.

For example, if current rutime is `astar-52` then `astar-runtime-52-substitute-tracing.wasm` blob should be used for overriding and debug recent transactions. Tracing runtime is published in release assets as `evm-tracing-artifacts`, please check [latest release here](https://github.com/AstarNetwork/Astar/releases/latest). 

For runtime override please create folder somewhere node can access it, by default it could be `/var/lib/astar/wasm`. And then copy overriding runtimes into this folder.
This folder is cumulative, this means you can place all previous runtimes at the same place to be able to trace historical data.

```
mkdir /var/lib/astar/wasm
cp astar-runtime-52-substitute-tracing.wasm /var/lib/astar/wasm
chown -hR astar /var/lib/astar/wasm
```

When wasm blob located correctly the node launch string should be addicted by `--wasm-runtime-overrides=/var/lib/astar/wasm` flag. Then service should be restarted, if all go well then node will catch up tracing runtime and substitute on-chain version by it.

:::important

Tracing data at a certain block requires to override the runtime version of this block. 
To use tracing on an ancient blocks, you need to add the runtime that was in place at this block.

:::

All Astar previous runtime overrides (prior to release on Github) can be downloaded [here](https://shared-assets.astar.network/files/runtime/astar-tracing-runtimes-3-69.tar.gz). They are necessary if you want to trace transactions on ancient blocks

## Service parameters

The service file for a tracing node will look like this

:::tip
Please make sure to change **{NODE_NAME}**
:::

<Tabs>
<TabItem value="astar" label="Astar" default>

```sh
[Unit]
Description=Astar EVM tracing node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --chain astar \
  --state-pruning archive \
  --blocks-pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --base-path /var/lib/astar \
  --state-pruning archive \
  --blocks-pruning archive \
  --rpc-methods Safe \
  --rpc-max-request-size 10 \
  --rpc-max-response-size 50 \
  --enable-evm-rpc \
  --ethapi=txpool,debug,trace \
  --wasm-runtime-overrides /var/lib/astar/wasm \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```sh
[Unit]
Description=Shiden EVM tracing node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --chain shiden \
  --state-pruning archive \
  --blocks-pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --base-path /var/lib/astar \
  --state-pruning archive \
  --blocks-pruning archive \
  --rpc-methods Safe \
  --rpc-max-request-size 10 \
  --rpc-max-response-size 10 \
  --enable-evm-rpc  \
  --ethapi=txpool,debug,trace \
  --wasm-runtime-overrides /var/lib/astar/wasm \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```sh
[Unit]
Description=Shibuya EVM tracing node

[Service]
User=astar
Group=astar
  
ExecStart=/usr/local/bin/astar-collator \
  --pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --state-pruning archive \
  --blocks-pruning archive \
  --rpc-methods Safe \
  --rpc-max-request-size 10 \
  --rpc-max-response-size 10 \
  --enable-evm-rpc  \
  --ethapi=txpool,debug,trace \
  --wasm-runtime-overrides /var/lib/astar/wasm \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>
