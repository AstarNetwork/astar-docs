---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker

A **Docker container** allows you to easily run a node without depending on the platform it is running on. This method should only be used if you already have experience with Docker containers.

## Installation

Start by installing docker: [How to install Docker on Ubuntu](https://linuxize.com/post/how-to-install-and-use-docker-on-ubuntu-20-04/)

Create a local directory for the **chain storage data** and a dedicated user:

```sh
sudo mkdir /var/lib/astar
sudo useradd --no-create-home --shell /usr/sbin/nologin astar
sudo chown astar:astar /var/lib/astar
```

## Start Docker node

This guide goes over the process of starting a container with both WS and RPC endpoints. For a single type of endpoint, simply remove the unnecessary port and command.

Launch the docker node in detached mode:

:::tip
Make sure to change the {NODE_NAME}
:::

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
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /var/lib/astar \
--rpc-external \
--ws-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
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
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /var/lib/astar \
--rpc-external \
--ws-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
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
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain astar \
--base-path /var/lib/astar \
--rpc-external \
--ws-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

</TabItem>
</Tabs>

Test the node health via the RPC port with this command:

```sh
curl -H "Content-Type: application/json" --data '{ "jsonrpc":"2.0", "method":"system_health", "params":[],"id":1 }' localhost:9933
```

## Next steps

In any case, wait for the chain to be fully synchronized by checking the [node log](/docs/nodes/archive-node/binary#get-node-logs).

How the archive node will be used will largely determine what steps to follow next: 
- If accessing the node publicly, running an [nginx server](/docs/nodes/archive-node/nginx) is the recommended option.
- If the dApp is running on the same server as the node, then it can be accessed directly with the `localhost` address. This setup is recommended for testing purposes only.
- If running the node locally for testing purposes, switch networks in [Polkadot.js portal](https://polkadot.js.org/apps) to explore the chain:

![1](img/1.png)

## Extra Operations

### Get node logs

To obtain the last 100 lines from the node logs, use the following command:

```sh
docker logs -f -n 100 $(docker ps -aq --filter name="{CHAIN}-container")
```

replacing `{CHAIN}` with `astar`, `shiden`, or `shibuya`

eg.

```sh
docker logs -f -n 100 $(docker ps -aq --filter name="astar-container")
```

### Indexers and Oracles

To access data from indexers (like The Graph) or Oracles (like Chainlink), add the follwing debug flags to the node launch command, after the `astar-collator` line:

`--ethapi=debug`

## Upgrade node / Update node

When a node update is necessary, node operators are notified with instructions in the [Astar Dev Announcement Telegram](https://t.me/+cL4tGZiFAsJhMGJk), [Astar Discord](https://discord.gg/Z3nC9U4), and the [Astar Node Upgrade Element channel](https://matrix.to/#/#shiden-runtime-ann:matrix.org). Join and follow these channels to receive the latest updates about nodes and runtimes.

To upgrade to the latest node version, stop and remove the actual container:

```sh
docker stop $(docker ps -q --filter name="{CHAIN}-container")
docker rm $(docker ps -a -q --filter name="{CHAIN}-container")
```

where `{CHAIN}` is `astar`, `shiden`, or `shibuya`.

[start command]: docker

Then start a new container with the information under "Start Docker Node". Chain data will be kept on your machine under `/var/lib/astar/`.

### Purge node

To start a new container from scratch without any chain data, simply remove the container and wipe the chain data directory:

```sh
docker rm -f $(docker ps -a -q --filter name="CHAIN-container")
sudo rm -R /var/lib/astar/*
```

where `CHAIN` is `astar`, `shiden`, or `shibuya`.

Then start a new container by following the instructions under the [Start Docker node](/docs/nodes/archive-node/docker#start-docker-node) section.

### Snapshot

Please refer to [**snapshot page**](/docs/nodes/snapshots/).
:::
