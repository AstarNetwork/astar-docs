---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker

A **Docker container** allow you to run easily a node without depending on the platform it is running on. This method should be reserved for users who already have experience with Docker containers.

## Installation

If you don't already have, start by installing docker: [How to install Docker on Ubuntu](https://linuxize.com/post/how-to-install-and-use-docker-on-ubuntu-20-04/)

Create a local directory for the **chain storage data** and a dedicated user:

```sh
sudo mkdir /var/lib/astar
sudo useradd --no-create-home --shell /usr/sbin/nologin astar
sudo chown astar:astar /var/lib/astar
```

## Start Docker node

In this guide, we will start a container for both WS and RPC endpoints. If you want only one of those, just remove the unnecessary port and command.

Launch the docker node in detached mode:

:::tip
Please make sure to change ${NODE_NAME}
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
--pruning archive \
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
--pruning archive \
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

You can test the node health through RPC port with this command:

```sh
curl -H "Content-Type: application/json" --data '{ "jsonrpc":"2.0", "method":"system_health", "params":[],"id":1 }' localhost:9933
```

## Next steps

For any usage, wait for the chain to be fully sync by checking the [node log](/docs/nodes/archive-node/docker#get-node-logs).

It depends on what you plan to do with your archive node.

- In most cases, you will want to access node from outside. In this case, [nginx server](/docs/nodes/archive-node/nginx) is one of available options.
- If you run your dapp on the same server than the node (recommended for testing purpose only), you can access it directly with the `localhost` address.
- If you run the node locally for testing purpose, you can for example switch network into [Polkadot.js portal](https://polkadot.js.org/apps) and explore the chain:

![1](img/1.png)

## Extra operations

### Get node logs

To get the last 100 lines from the node logs, use the following command:

```sh
docker logs -f -n 100 $(docker ps -aq --filter name="{CHAIN}-container")
```

replacing `{CHAIN}` with `astar`, `shiden`, or `shibuya`

eg.

```sh
docker logs -f -n 100 $(docker ps -aq --filter name="astar-container")
```

### Indexers and oracles

To access data from indexers (lke The Graph) or Oracles (like Chainlink), you need to add the debug flags below to the node launch command, after the `astar-collator` line:

`-l evm=debug,ethereum=debug,rpc=debug`

### Upgrade node

When an upgrade is necessary, node operators are be notified in our [Discord](https://discord.gg/Z3nC9U4) and Element group.

To upgrade to the latest node version, stop and remove the actual container:

```sh
docker stop $(docker ps -q --filter name="{CHAIN}-container")
docker rm $(docker ps -a -q --filter name="{CHAIN}-container")
```

where `{CHAIN}` is `astar`, `shiden`, or `shibuya`.

[start command]: docker

Then start a new container with the information under "Start Docker Node". Chain data will be kept on your machine under `/var/lib/astar/`.

### Purge node

To start a new container from scratch without any chain data, just remove the container and wipe the chain data directory:

```sh
docker rm -f $(docker ps -a -q --filter name="CHAIN-container")
sudo rm -R /var/lib/astar/*
```

where `CHAIN` is `astar`, `shiden`, or `shibuya`.

Then start a new container by following the instructions under the [Start Docker node](/docs/nodes/archive-node/docker#start-docker-node) section.

### Relay Chain snapshot

If you run your collator it not only needs to sync the **mainnet** chain but also the complete relay chain from **Kusama / Polkadot**. This can take up to 3-4 days. You can also use a snapshot of Kusama/Polkadot. You can download this [here](https://polkashots.io/) and will save a lot of time.

:::caution
know what you are doing when using snapshots!
:::
