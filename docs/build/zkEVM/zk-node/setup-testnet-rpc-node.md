---
sidebar_position: 1
title: Setup Astar zkEVM Testnet Permissionless RPC Node
sidebar_label: Setup zkEVM Testnet RPC
---

## Overview

Operators can deploy permissionless RPC nodes for **Astar zkEVM** testnet, named **zKyoto**.

DApp projects must run their own RPC node to retrieve the necessary blockchain data and shouldn't rely on public infrastructure. Public endpoints may respond slowly or not at all during times of high network traffic, and are rate limited.

## Requirements

### System

:::note
Storage space requirements will increase as the network grows.
:::

- 16GB RAM
- 4-core CPU
- 100GB Storage (This will increase over time)

### Prerequisites

This tutorial requires the latest version of `go`, `docker` and `docker-compose`. **Do not** use the versions included with your OS distribution; follow the instructions to *remove those* as necessary, and install the latest versions.

- [https://go.dev/doc/install](https://go.dev/doc/install)
- [https://www.docker.com/get-started](https://www.docker.com/get-started)
- [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
  

### Ethereum RPC Node

A Sepolia (Ethereum testnet) RPC node is required for running an **Astar zkEVM** testnet node.
There are two options available:

- Setup your own - the [Geth client](https://geth.ethereum.org/docs/getting-started/installing-geth) is one example.
- Use an RPC provider endpoint - developers building on Astar may be entitled to special offers or promos. 

This document does not cover the installation of the Ethereum node. We will use a public RPC endpoint for this document, but keep in mind that **this is not a viable production solution**: public endpoints are rate limited and as a result, your Astar zkEVM node may not synchronize correctly.

## Setting Up zkNode

In this section, we are going to start the five containers necessary for the **Astar zkEVM** RPC node to function:

- zkevm-rpc
- zkevm-sync
- zkevm-state-db
- zkevm-pool-db
- zkevm-prover

At the time of this writing, **zKyoto testnet** is the only network available for the **Astar zkEVM**, and is connected to the L1 Ethereum **Sepolia testnet**.

Let's build on this.

Create dedicated directories for config, install and data.

```bash
sudo mkdir -p /etc/zkevm && sudo chown -R $USER:$USER /etc/zkevm
sudo mkdir -p /var/lib/zkevm/{statedb,pooldb} && sudo chown -R $USER:$USER /var/lib/zkevm/
```

Set local variables.

```
# define installation and config path
ZKEVM_NET=testnet
ZKEVM_DIR=/etc/zkevm
```

Download and extract the artifacts.

```bash
wget https://shared-assets.astar.network/files/zkevm/zkyoto/zkyoto.tar.gz
tar -xf zkyoto.tar.gz -C $ZKEVM_DIR && rm zkyoto.tar.gz
```

Copy the env file and edit the L1 RPC URL.

```bash
cp $ZKEVM_DIR/example.env $ZKEVM_DIR/.env
nano $ZKEVM_DIR/.env
```

Modify the parameters.

```bash
# Use your own Sepolia RPC URL here!!
ZKEVM_NODE_ETHERMAN_URL = "https://eth-sepolia-public.unifra.io"
```

Edit the node config file.

```bash
nano $ZKEVM_DIR/config/environments/$ZKEVM_NET/node.config.toml
```

Modify the following parameters, you may also want to change the databases default user/passwords for more security.

```
[Etherman]
# Set your own Sepolia RPC URL
URL = "https://eth-sepolia-public.unifra.io"

# Enable if you want to exploit metrics from nodes
[Metrics]
Enabled = true
```

Start the containers.

```bash

# start all the containers
sudo docker compose --env-file $ZKEVM_DIR/.env -f $ZKEVM_DIR/docker-compose.yml up -d
# or start containers on by one
sudo docker compose --env-file $ZKEVM_DIR/.env -f $ZKEVM_DIR/docker-compose.yml up -d <container-name>
```

Verify that all containers are up and running: you should see the 5 containers with a status Up.

```bash
sudo docker ps
```

Now you have an **Astar zkEVM** testnet RPC node up and running on port 8545, you just have to wait for it to synchronize.

## Using RPC

View container logs.

```bash
sudo docker logs -fn30 <container-name>
```

Test RPC requests.

```bash
# Get the chain Id
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "eth_chainId", "params": []}' http://localhost:8545
# Expected response
{"jsonrpc":"2.0","id":1,"result":"0x133e40"}
# Get the latest block
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "eth_getBlockByNumber", "params": ["latest", false]}' http://localhost:8545
```

Stop containers.

```bash
sudo docker compose --env-file $ZKEVM_DIR/.env -f $ZKEVM_DIR/docker-compose.yml down
```

## Extra

### Enable tracing

To enable tracing features (`debug` and `txpool` modules) on the RPC, add the following command to the `zkevm-rpc` container in the `docker-compose` file:

```
--http.api=eth,net,debug,zkevm,txpool,web3
```

### Access from outside

To make a RPC endpoint URL available from outside, it is recommended to add a HTTP server.
You can refer to this section to install an [nginx server](/docs/build/nodes/archive-node/nginx).
