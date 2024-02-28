---
sidebar_position: 1
title: Setup Local zkNode
sidebar_label: Setup Local zkNode
---

:::warning
Due to an open [issue](https://github.com/ethereum/go-ethereum/issues/27274) you may encounter problems running a local node.
:::

It's crucial that developers can thoroughly test the network for a developing blockchain technology like **Astar zkEVM** without putting users or themselves at unnecessary risk. Developers should be able to test their smart contracts, experiment with new code, and play around with the network on their local machines.

Astar zkEVM has a local development environment setup for this reason. This tutorial will help you create a local single-node zkEVM blockchain with no connections to external peers. It only exists on your local machine.

:::caution

Currently the zkProver does not run on ARM-powered Macs. For Windows users, using WSL/WSL2 is not recommended.

Unfortunately, Apple M1 chips are not supported for now - since some optimizations on the zkProver require specific Intel instructions. This means some non-M1 computers won't work regardless of the OS, for example: AMD.

:::

After completing this tutorial, you will have the following components running:

- zkEVM Node Databases
- Explorer Databases
- L1 Network
- Prover
- zkEVM Node components
- Explorers

## Prerequisites

The tutorial for current version of the environment requires `go`, `docker` and `docker-compose` to be previously installed on your machine. If you don’t have these installed, check out the links provided below:

- [https://go.dev/doc/install](https://go.dev/doc/install)- [https://www.docker.com/get-started](https://www.docker.com/get-started)- [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
### System Requirements

- zkEVM Node: 16GB RAM with 4-core CPU
- zkProver: 1TB RAM with 128-core CPU

If you want to run a full-fledged zkProver on your own, you'll need at least 1TB of RAM. If you are unable to meet the Prover requirements, you can still run the zkNode.

## Setting Up zkNode

Before starting the zkEVM node setup, we need to clone the [official zkNode repository](https://github.com/0xPolygonHermez/zkevm-node) from Polygon zkEVM Github.

```bash
git clone https://github.com/0xPolygonHermez/zkevm-node.git
```

The `zkevm-node` docker image must be built at least once and whenever the code is changed. If you haven't already built the `zkevm-node` image, you must run:

```bash
make build-docker
```

:::caution Building Docker Image

For a given version of the Testnet implementation, be sure to use configuration files from the correct and corresponding tag. For instance: **to build an RC9 image, use configuration files from RC9 tag**.

All tags can be found here: <ins>**https://github.com/0xPolygonHermez/zkevm-node/tags**</ins>

:::

Certain commands on the `zkevm-node` can interact with smart contracts, run specific components, create encryption files, and print debug information. 

To interact with the binary program, we provide `docker-compose` files and a `Makefile` to spin up/down the various services and components, ensuring smooth local deployment and a better command line interface for developers.

:::warning

All the data is stored inside of each docker container. This means once you remove the container, the data will be lost.

:::

The `test/` directory contains scripts and files for developing and debugging. Change the working directory to `test/` on your local machine.

```bash
cd test/
```

Now, run the zkNode environment:

```bash
make run
```

To stop the zkNode:

```bash
make stop
```

To restart the whole zkNode environment:

```bash
make restart
```

## Configuration Parameters
​
The Synchronizer regularly pulls for network updates, mainly from Ethereum but also via the **Trusted Sequencer**'s broadcasting mechanism, in order to stay up-to-date. Unless otherwise specified in the setup, the Synchronizer's **default syncing rate** is every **2 seconds**.

The **Keystore** file, used to **store private keys**, is normally required for running the Sequencer & Aggregator but not for a Synchronizer/RPC-setup.

:::info

We have the inconvenient situation where the **Keystore** file is required to run the node when it shouldn't be, for example, if no transactions are sent to L1. **Keystore is not required in the Mango Testnet** as it uses a trusted sequencer and aggregator.

This will be reviewed when a decentralised zkEVM network is implemented.

:::

## Sample Data

It's important to populate your local zkEVM node with some data before you start testing out the network. The `make run` command will execute the containers required to run the environment, but it will not execute anything else. **Your local L2 network will be essentially empty**.

The following scripts are available if you require sample data that has already been deployed to the network.

```bash
# To add some examples of transactions and smart contracts:
make deploy-sc

# To deploy a full Uniswap environment:
make deploy-uniswap

# To grant the MATIC smart contract a set amount of tokens:
make run-approve-matic
```

## Connecting to Metamask

:::info

Metamask requires the network to be running while configuring it, so make sure your network is up.

:::

To configure your MetaMask to use your local zkEVM environment, follow these steps:

1. Log in to your MetaMask wallet
2. Click on your account picture and then on **Settings**
3. On the left menu, click on **Networks**
4. Click on **Add Network** button
5. Fill up the L2 network information
    * **Network Name:** Astar zkEVM - Local
    * **New RPC URL:** [http://localhost:8123](http://localhost:8123)    * **ChainID:** 1001
    * **Currency Symbol:** ETH
    * **Block Explorer URL:** [http://localhost:4000](http://localhost:4000)6. Click on **Save**
7. Click on **Add Network** button
8. Fill up the L1 network information
    * **Network Name:** Geth - Local
    * **New RPC URL:** [http://localhost:8545](http://localhost:8545)    * **ChainID:** 1337
    * **Currency Symbol:** ETH
9. Click on **Save**

You can now interact with your local zkEVM network and sign transactions from your MetaMask wallet.
