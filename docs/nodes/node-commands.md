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
  --collator \
  --rpc-cors all \
  --name ${COLLATOR_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --execution wasm \
  --state-cache-size 1

Restart=always
RestartSec=120

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
  --collator \
  --rpc-cors all \
  --name ${COLLATOR_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --execution wasm \
  --state-cache-size 1

Restart=always
RestartSec=120

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
  --collator \
  --rpc-cors all \
  --name ${COLLATOR_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --execution wasm \
  --state-cache-size 1

Restart=always
RestartSec=120

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
--collator \
--name ${COLLATOR_NAME} \
--chain astar \
--execution wasm \
--base-path /data \
--rpc-cors=all \
--state-cache-size 1
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
--collator \
--name ${COLLATOR_NAME} \
--chain shiden \
--execution wasm \
--base-path /data \
--rpc-cors=all \
--state-cache-size 1
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
--collator \
--name ${COLLATOR_NAME} \
--chain shibuya \
--execution wasm \
--base-path /data \
--rpc-cors=all \
--state-cache-size 1
```

</TabItem>
</Tabs>

---

## Archive node (RPC/WS endpoint)
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
  --name ${NODE_NAME} \
  --chain astar \
  --base-path /var/lib/astar \
  --execution Wasm \
  --unsafe-rpc-external \
  --ws-external \
  --state-cache-size 1
  
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
  --name ${NODE_NAME} \
  --chain shiden \
  --base-path /var/lib/astar \
  --execution Wasm \
  --unsafe-rpc-external \
  --ws-external \
  --state-cache-size 1
  
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
  --name ${NODE_NAME} \
  --chain shibuya \
  --base-path /var/lib/astar \
  --execution Wasm \
  --unsafe-rpc-external \
  --ws-external \
  --state-cache-size 1
  
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
-p 9933:9933 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--pruning archive \
--name ${NODE_NAME} \
--chain astar \
--execution Wasm \
--base-path /data \
--rpc-cors=all \
--unsafe-rpc-external \
--ws-external \
--state-cache-size 1
```

</TabItem>
<TabItem value="shiden" label="Shiden" default>

```
docker run -d \
--name shiden-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9933:9933 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--pruning archive \
--name ${NODE_NAME} \
--chain shiden \
--execution Wasm \
--base-path /data \
--rpc-cors=all \
--unsafe-rpc-external \
--ws-external \
--state-cache-size 1
```

</TabItem>
<TabItem value="shibuya" label="Shibuya" default>

```
docker run -d \
--name shibuya-container \
-u $(id -u astar):$(id -g astar) \
-p 30333:30333 \
-p 9933:9933 \
-p 9944:9944 \
-v "/var/lib/astar/:/data" \
staketechnologies/astar-collator:latest \
astar-collator \
--pruning archive \
--name ${NODE_NAME} \
--chain shibuya \
--execution Wasm \
--base-path /data \
--rpc-cors=all \
--unsafe-rpc-external \
--ws-external \
--state-cache-size 1
```

</TabItem>
</Tabs>

---

## Specific cases command args

### EVM Debug log
```
-l evm=debug,ethereum=debug,rpc=debug
```

### External monitoring
```
--prometheus-external
```

---

## Full command documentation
```
$ ./astar-collator -h

astar-collator 4.21.0-b13d2bc7d98
Stake Technologies <devops@stake.co.jp>
Astar Collator

The command-line arguments provided first will be passed to the parachain node, while the arguments
provided after -- will be passed to the relaychain node.

astar-collator [parachain-args] -- [relaychain-args]

USAGE:
    astar-collator [OPTIONS] [-- <RELAYCHAIN_ARGS>...]
    astar-collator <SUBCOMMAND>

ARGS:
    <RELAYCHAIN_ARGS>...    Relaychain arguments

OPTIONS:
        --alice
            Shortcut for `--name Alice --validator` with session keys for `Alice` added to keystore

        --allow-private-ipv4
            Always accept connecting to private IPv4 addresses (as specified in
            [RFC1918](https://tools.ietf.org/html/rfc1918)). Enabled by default for chains marked as
            "local" in their chain specifications, or when `--dev` is passed

        --blocks-pruning <COUNT>
            Specify the number of finalized blocks to keep in the database

        --bob
            Shortcut for `--name Bob --validator` with session keys for `Bob` added to keystore

        --bootnodes <ADDR>...
            Specify a list of bootnodes

        --chain <CHAIN_SPEC>
            Specify the chain specification

        --charlie
            Shortcut for `--name Charlie --validator` with session keys for `Charlie` added to
            keystore

        --collator
            Run node as collator

    -d, --base-path <PATH>
            Specify custom base path

        --database <DB>
            Select database backend to use [possible values: rocksdb, paritydb,
            paritydb-experimental, auto]

        --dave
            Shortcut for `--name Dave --validator` with session keys for `Dave` added to keystore

        --db-cache <MiB>
            Limit the memory the database cache can use

        --detailed-log-output
            Enable detailed log output

        --dev
            Specify the development chain

        --disable-log-color
            Disable log color output

        --discover-local
            Enable peer discovery on local networks

        --enable-log-reloading
            Enable feature to dynamically update and reload the log filter

        --enable-offchain-indexing <ENABLE_OFFCHAIN_INDEXING>
            Enable Offchain Indexing API, which allows block import to write to Offchain DB

        --eve
            Shortcut for `--name Eve --validator` with session keys for `Eve` added to keystore

        --execution <STRATEGY>
            The execution strategy that should be used by all execution contexts [possible values:
            native, wasm, both, native-else-wasm]

        --execution-block-construction <STRATEGY>
            The means of execution used when calling into the runtime while constructing blocks
            [possible values: native, wasm, both, native-else-wasm]

        --execution-import-block <STRATEGY>
            The means of execution used when calling into the runtime for general block import
            (including locally authored blocks) [possible values: native, wasm, both,
            native-else-wasm]

        --execution-offchain-worker <STRATEGY>
            The means of execution used when calling into the runtime while using an off-chain
            worker [possible values: native, wasm, both, native-else-wasm]

        --execution-other <STRATEGY>
            The means of execution used when calling into the runtime while not syncing, importing
            or constructing blocks [possible values: native, wasm, both, native-else-wasm]

        --execution-syncing <STRATEGY>
            The means of execution used when calling into the runtime for importing blocks as part
            of an initial sync [possible values: native, wasm, both, native-else-wasm]

        --ferdie
            Shortcut for `--name Ferdie --validator` with session keys for `Ferdie` added to
            keystore

        --force-authoring
            Enable authoring even when offline

    -h, --help
            Print help information

        --in-peers <COUNT>
            Maximum number of inbound full nodes peers [default: 25]

        --in-peers-light <COUNT>
            Maximum number of inbound light nodes peers [default: 100]

        --ipc-path <PATH>
            DEPRECATED, IPC support has been removed

        --ipfs-server
            Join the IPFS network and serve transactions over bitswap protocol

        --kademlia-disjoint-query-paths
            Require iterative Kademlia DHT queries to use disjoint paths for increased resiliency in
            the presence of potentially adversarial nodes

        --keystore-path <PATH>
            Specify custom keystore path

        --keystore-uri <KEYSTORE_URI>
            Specify custom URIs to connect to for keystore-services

    -l, --log <LOG_PATTERN>...
            Sets a custom logging filter. Syntax is <target>=<level>, e.g. -lsync=debug

        --listen-addr <LISTEN_ADDR>...
            Listen on this multiaddress

        --max-parallel-downloads <COUNT>
            Maximum number of peers from which to ask for the same blocks in parallel [default: 5]

        --max-runtime-instances <MAX_RUNTIME_INSTANCES>
            The size of the instances cache for each runtime

        --name <NAME>
            The human-readable name for this node

        --no-grandpa
            Disable GRANDPA voter when running in validator mode, otherwise disable the GRANDPA
            observer

        --no-mdns
            Disable mDNS discovery

        --no-private-ipv4
            Always forbid connecting to private IPv4 addresses (as specified in
            [RFC1918](https://tools.ietf.org/html/rfc1918)), unless the address was passed with
            `--reserved-nodes` or `--bootnodes`. Enabled by default for chains marked as "live" in
            their chain specifications

        --no-prometheus
            Do not expose a Prometheus exporter endpoint

        --no-telemetry
            Disable connecting to the Substrate telemetry server

        --node-key <KEY>
            The secret key to use for libp2p networking

        --node-key-file <FILE>
            The file from which to read the node's secret key to use for libp2p networking

        --node-key-type <TYPE>
            The type of secret key to use for libp2p networking [default: ed25519] [possible values:
            ed25519]

        --offchain-worker <ENABLED>
            Should execute offchain workers on every block [default: when-validating] [possible
            values: always, never, when-validating]

        --one
            Shortcut for `--name One --validator` with session keys for `One` added to keystore

        --out-peers <COUNT>
            Specify the number of outgoing connections we're trying to maintain [default: 25]

        --parachain-id <PARACHAIN_ID>
            Id of the parachain this collator collates for

        --password <PASSWORD>
            Password used by the keystore. This allows appending an extra user-defined secret to the
            seed

        --password-filename <PATH>
            File that contains the password used by the keystore

        --password-interactive
            Use interactive shell for entering the password used by the keystore

        --pool-kbytes <COUNT>
            Maximum number of kilobytes of all transactions stored in the pool [default: 20480]

        --pool-limit <COUNT>
            Maximum number of transactions in the transaction pool [default: 8192]

        --port <PORT>
            Specify p2p protocol TCP port

        --prometheus-external
            Expose Prometheus exporter on all interfaces

        --prometheus-port <PORT>
            Specify Prometheus exporter TCP Port

        --public-addr <PUBLIC_ADDR>...
            The public address that other nodes will use to connect to it. This can be used if
            there's a proxy in front of this node

        --relay-chain-rpc-url <RELAY_CHAIN_RPC_URL>
            EXPERIMENTAL: Specify an URL to a relay chain full node to communicate with

        --relay-chain-rpc-url <RELAY_CHAIN_RPC_URL>
            EXPERIMENTAL: Specify an URL to a relay chain full node to communicate with

        --reserved-nodes <ADDR>...
            Specify a list of reserved node addresses

        --reserved-only
            Whether to only synchronize the chain with reserved nodes

        --rpc-cors <ORIGINS>
            Specify browser Origins allowed to access the HTTP & WS RPC servers

        --rpc-external
            Listen to all RPC interfaces

        --rpc-max-payload <RPC_MAX_PAYLOAD>
            DEPRECATED, this has no affect anymore. Use `rpc_max_request_size` or
            `rpc_max_response_size` instead

        --rpc-max-request-size <RPC_MAX_REQUEST_SIZE>
            Set the the maximum RPC request payload size for both HTTP and WS in megabytes. Default
            is 15MiB

        --rpc-max-response-size <RPC_MAX_RESPONSE_SIZE>
            Set the the maximum RPC response payload size for both HTTP and WS in megabytes. Default
            is 15MiB

        --rpc-max-subscriptions-per-connection <RPC_MAX_SUBSCRIPTIONS_PER_CONNECTION>
            Set the the maximum concurrent subscriptions per connection. Default is 1024

        --rpc-methods <METHOD SET>
            RPC methods to expose. [default: auto] [possible values: auto, safe, unsafe]

        --rpc-port <PORT>
            Specify HTTP RPC server TCP port

        --runtime-cache-size <RUNTIME_CACHE_SIZE>
            Maximum number of different runtimes that can be cached [default: 2]

        --state-cache-size <Bytes>
            Specify the state cache size [default: 67108864]

        --state-pruning <PRUNING_MODE>
            Specify the state pruning mode, a number of blocks to keep or 'archive'

        --sync <SYNC_MODE>
            Blockchain syncing mode. [default: full] [possible values: full, fast, fast-unsafe,
            warp]

        --telemetry-url <URL VERBOSITY>
            The URL of the telemetry server to connect to

        --tmp
            Run a temporary node

        --tracing-receiver <RECEIVER>
            Receiver to process tracing messages [default: log] [possible values: log]

        --tracing-targets <TARGETS>
            Sets a custom profiling filter. Syntax is the same as for logging: <target>=<level>

        --two
            Shortcut for `--name Two --validator` with session keys for `Two` added to keystore

        --tx-ban-seconds <SECONDS>
            How long a transaction is banned for, if it is considered invalid. Defaults to 1800s

        --unsafe-pruning
            THIS IS A DEPRECATED CLI-ARGUMENT

        --unsafe-rpc-external
            Listen to all RPC interfaces

        --unsafe-ws-external
            Listen to all Websocket interfaces

    -V, --version
            Print version information

        --validator
            Enable validator mode

        --wasm-execution <METHOD>
            Method for executing Wasm runtime code [default: compiled] [possible values:
            interpreted-i-know-what-i-do, compiled]

        --wasm-runtime-overrides <PATH>
            Specify the path where local WASM runtimes are stored

        --wasmtime-instantiation-strategy <STRATEGY>
            The WASM instantiation method to use [default: pooling-copy-on-write] [possible values:
            pooling-copy-on-write, recreate-instance-copy-on-write, pooling, recreate-instance,
            legacy-instance-reuse]

        --ws-external
            Listen to all Websocket interfaces

        --ws-max-connections <COUNT>
            Maximum number of WS RPC server connections

        --ws-max-out-buffer-capacity <WS_MAX_OUT_BUFFER_CAPACITY>
            DEPRECATED, this has no affect anymore. Use `rpc_max_response_size` instead

        --ws-port <PORT>
            Specify WebSockets RPC server TCP port

SUBCOMMANDS:
    build-spec              Build a chain specification
    check-block             Validate blocks
    export-blocks           Export blocks
    export-genesis-state    Export the genesis state of the parachain
    export-genesis-wasm     Export the genesis wasm of the parachain
    export-state            Export the state of a given block into a chain spec
    help                    Print this message or the help of the given subcommand(s)
    import-blocks           Import blocks
    key                     Key management cli utilities
    purge-chain             Remove the whole chain
    revert                  Revert the chain to a previous state
    sign                    Sign a message, with a given (secret) key
    vanity                  Generate a seed that provides a vanity address
    verify                  Verify a signature for a message, provided on STDIN, with a given
                                (public or secret) key
```

Node process will launch with Parachain ID 2006 for Astar, 2007 for Shiden, 1000 for Shibuya  when `--parachain-id` flag is not provided explicitly.
Parachain ID info for each network can be found [here](/docs/quickstart/endpoints/#public-endpoints).
