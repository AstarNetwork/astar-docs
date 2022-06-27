---
sidebar_position: 4
---

# The Graph

[The Graph]: https://thegraph.com/en/

## Overview: Why is The Graph needed?

[The Graph] is a decentralized protocol for indexing and querying data from blockchains. It makes querying fast, reliable and secure but also allows anyone to build and publish application programming interfaces (APIs) called subgraphs, which act as intermediaries and allow two applications to communicate with each other.

## Prerequisites

Before you run The Graph node in a server, you must install:

- [Docker](https://docs.docker.com/get-docker/): Containerization platform for software solutions
- [`docker-compose`](https://docs.docker.com/compose/install/) : Used to automate interactions between docker containers
- [JQ](https://stedolan.github.io/jq/download/): JSON processor for graph requests

In this guide, you will learn how to run an Astar node for getting more insight into the transactions of blockchain, providing indexing data to The Graph node.

## One-line startup script

If one wants to finish the process without explanation, here is the one-line script for you. if you face an error upon execution, the descriptions below will help you to find where it needs to be adjusted. This script supposes that the running computer has installed all prerequisites.

### Astar

```sh
sudo curl -s <https://raw.githubusercontent.com/AstarNetwork/Astar/rpc-script/scripts/graph.sh> > graph.sh \
&& sudo bash ./graph.sh \
-chain astar \
-rpc-url <RPC URL>
```

### Shiden

```sh
sudo curl -s <https://raw.githubusercontent.com/AstarNetwork/Astar/rpc-script/scripts/graph.sh> > graph.sh \
&& sudo bash ./graph.sh \
-chain shiden \
-rpc-url <RPC URL>
```

### Shibuya

```sh
sudo curl -s <https://raw.githubusercontent.com/AstarNetwork/Astar/rpc-script/scripts/graph.sh> > graph.sh \
&& sudo bash ./graph.sh \
-chain shibuya \
-rpc-url <RPC URL>
```

## Running Graph node

After successfully running an[RPC node](https://docs.astar.network/maintain/archive-node/docker), The Graph node needs to be installed and configured for Shiden to connect to a separate computer. If you are running a self-signed RPC node, you need to set up an extra environment variable for allowance.

The first step is to clone the [Graph Node repository](https://github.com/graphprotocol/graph-node/):

```sh
git clone <https://github.com/graphprotocol/graph-node/> \\
&& cd graph-node/docker
```

Next, execute the `setup.sh` file. This will pull all the necessary Docker images and write the necessary information in the `docker-compose.yml` file. Make sure you have `docker-compose` and `jq` are installed.

```sh
sudo bash ./setup.sh
```

After running the command, the tail end of the command should show similar logs as below:

![8](img/8.png)

Once everything is set up, you need to modify the "Ethereum environment" inside the `docker-compose.yml` file, so that The Graph node points to the endpoint of the RPC that you are connecting with. Note that the `setup.sh` file detects RPC's Host IP and writes its value, so you'll need to modify it accordingly.

## Modifying the Ethereum environment

### Astar

```sh
# open docker-compose.yml
nano docker-compose.yml

# modify file and save
ethereum: 'astar:https://<IP address or domain>:<PORT>'
```

### Shiden

```sh
# open docker-compose.yml
nano docker-compose.yml

# modify file and save
ethereum: 'shiden:https://<IP address or domain>:<PORT>'
```

### Shibuya

```sh
# open docker-compose.yml
nano docker-compose.yml

# modify file and save
ethereum: 'shibuya:https://<IP address or domain>:<PORT>'
```

For example, if you are building The Graph node for Shiden, the entire `docker-compose.yml` now should look like this below:

```yaml
version: '3'
services:
  graph-node:
    image: graphprotocol/graph-node
    ports:
      - '8000:8000'
      - '8001:8001'
      - '8020:8020'
      - '8030:8030'
      - '8040:8040'
    depends_on:
      - ipfs
      - postgres
    environment:
      postgres_host: postgres
      postgres_user: graph-node
      postgres_pass: let-me-in
      postgres_db: graph-node
      ipfs: 'ipfs:5001'
      ethereum: 'shiden:http://<IP address or DOMAIN>:<PORT>'
      RUST_LOG: info
  ipfs:
    image: ipfs/go-ipfs:v0.4.23
    ports:
      - '5001:5001'
    volumes:
      - ./data/ipfs:/data/ipfs
  postgres:
    image: postgres
    ports:
      - '5432:5432'
    command: ["postgres", "-cshared_preload_libraries=pg_stat_statements"]
    environment:
      POSTGRES_USER: graph-node
      POSTGRES_PASSWORD: let-me-in
      POSTGRES_DB: graph-node
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
```

## Running The Graph containers

Run the following command:

```sh
sudo docker-compose up
```

When everything is set up you will see the log like this:

![9](img/9.png)
