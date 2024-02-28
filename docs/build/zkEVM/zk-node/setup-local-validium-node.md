---
sidebar_position: 1
title: Setup Local Validium Node
sidebar_label: Setup Local Validium Node
---

## Validium

This quick start guide shows you how to set up a CDK validium on your local machine that sets up and runs the following components:

- zkEVM databases: data node, event, explorer L1 and L2, pool, state, and bridge service
- zkEVM node components: aggregator, approve service, sequencer and sequence sender, sync
- L1 network (mock)
- Prover
- Explorers L1, L2
- JSON RPC explorer
- L2 gas pricer
- DAC: data availability service, dac setup committee
- zkEVM bridge service and UI

:::caution

Currently the zkProver does not run on ARM-powered Macs. For Windows users, using WSL/WSL2 is not recommended.

Unfortunately, Apple M1 chips are not supported for now - since some optimizations on the zkProver require specific Intel instructions. This means some non-M1 computers won't work regardless of the OS, for example: AMD.

:::

## Prerequisites

### Hardware Requirements

- A Linux-based OS (e.g., Ubuntu Server 22.04 LTS).
- At least 16GB RAM with a 4-core CPU.
- An AMD64 architecture system.

### Software Requirements

The tutorial for current version of the environment requires `go`, `docker` and `docker-compose` to be previously installed on your machine. If you don’t have these installed, check out the links provided below:

- [https://go.dev/doc/install](https://go.dev/doc/install)
- [https://www.docker.com/get-started](https://www.docker.com/get-started)
- [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)


## Clone the repo

Run the following commands:

```bash
git clone https://github.com/Snapchain/zkValidium-quickstart.git
cd zkValidium-quickstart
```

Create the .env file by copying the example:
```bash
cp .env.example .env
```

## Launch validium locally

Pull the required Docker images from Docker Hub:
```bash
sudo docker compose pull
```

After pulling the images, start your local CDK validium:
```bash
sudo make run
```

To ensure all services are running properly, check the status of each container:
```bash
sudo docker compose ps
```

You should see the following output:



If a service isn’t running (i.e. it is in Exit 1 state), investigate further using the logs:
```bash
sudo docker compose logs <container_name>
```
:::info

Find the <container_name> in the log output.

:::

### Useful commands

To stop CDK validium, use:
```bash
sudo make stop
```

To restart all services:
```bash
sudo make restart
```

:::note

This local deployment runs on an L1 Geth instance.

:::

 ## Test validium

 Verify the block explorer is running by navigating to **localhost** [localhost].

You should see a page similar to this:


## Add the network to a Web3 wallet

Follow MetaMask’s instructions on how to set up a network manually.

- Set the chain ID to 1001.
- The currency symbol can be anything but we will use POL by default.
- The RPC node and block explorer containers can be found at ports 8123 and 80, respectively.

Switch to the new network:

:::important

- An account with test funds is available with private key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80.
- NEVER transfer real assets to the address associated with this private key.

:::

Import the account to MetaMask. The balance shows up as 100000 POL:

Transfer some tokens to another account:

After confirming the transaction, check the updated balances:

You can also view the transaction details in the block explorer by clicking on the transaction details in MetaMask:

:::warning 

If you encounter a stuck transaction, it is likely due to an incorrect nonce setting.

To resolve this issue, follow the steps below:

1. Open Metamask and navigate to your account.
2. Click on Settings.
3. In the Settings menu, select Advanced.
4. Locate the option Clear activity and nonce data and click on it.
5. This resets the nonce data associated with the account, which often resolves transaction-related issues.

:::

## Test the bridge¶

CDK has a native bridge with UI that allows you to transfer funds between the L1 and the L2 validium.

## L1 to L2

Add the L1 RPC to MetaMask:

Switch to the L1 network and you will see the previously imported account with ~999 POL on the L1 chain.

Verify the bridge UI by navigating to localhost:8088.

Click on Connect a wallet > MetaMask.

:::note 

You won’t see this view the second time around.

:::

Select the previously imported account (0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266). Once you are connected, you should see a page like this:

Enter the amount (e.g. 5) to bridge and click Continue, after confirming you understood what you’re doing, you will see the Confirm Bridge page.

Click Bridge and approve the transaction on the MetaMask pop-up:

Once bridging is complete, you should see the Activity page:

### L2 to L1

witch network on MetaMask to your validium chain and navigate back to localhost:8088.

You should see both the updated L1 and L2 balances:

Enter an amount and follow the same process to bridge the fund back to the L1.

:::note 

You cannot bridge back fund more than what you have previously bridged from L1 to the L2.

:::

The L2->L1 bridging is slightly different than L1->L2 and you will see the Activity page like this after the transaction is executed:

Click Finalise and approve the transaction (Note: MetaMask will pop up a window to ask you to switch to the L1 network first). Then you will see this once the bridging is completed:
