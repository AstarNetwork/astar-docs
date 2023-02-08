---
sidebar_position: 5
---

# Running Local Network

Now, let's spin up a local network on a standalone node.

## Get the Latest Binary

You can obtain the latest binary in one of the following ways:

- Download the latest binary from Github.
- Build it from source.

If you would like to download the binary, visit the [Release page of the Astar Github repository](https://github.com/AstarNetwork/Astar/releases). There, you will find the pre-built binaries for MacOS and Ubuntu, as well as Docker images.  If you would like to build it from source, [this readme](https://github.com/AstarNetwork/Astar#building-from-source) will guide you through the process.

After you obtain the binary, you can rename the file to `astar`, and add execution permission by running the following command:

```sh
chmod +x ./astar
```

You should then be able to execute the binary. To see whether you can run the node, let's check the binary version.

```sh
./astar --version
# astar-collator xxx
```

## Run the Local Network

You are now ready to run the local network, using the following command:

```sh
./astar --port 30333 --ws-port 9944 --rpc-port 9933 --rpc-cors all --alice --dev
```

What this command means:

- Use port 30333 for P2P TCP connection
- Use port 9944 for WebSocket connection
- Use port 9933 for RPC
- Accept any origin for HTTP and WebSocket connections
- Enable Alice session keys
- Launch network in development mode

You can see the full list of the command options using the `help` subcommand:

```sh
./astar help
# shiden xxx
# 
# Stake Technologies <devops@stake.co.jp>
# Astar parachain collator
# ...
```

When you have successfully launched the local network, you will see the following messages in your terminal:

![1](img/1.png)

OK! Let's explore your local network now.

## Access Your Local Network via Polkadot.js Apps Portal

Visit the following URL:

<https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer>

There, you will see the following screen:

![2](img/2.png)

This represents your local network. In this local network, some native tokens have already been issued to a few accounts. Let's visit the [Account page](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/accounts) from the Accounts Tab.

![3](img/3.png)

Here, you can see that ALICE and BOB have around 1,000 tokens. In the following section, you will deploy your smart contract and interact with it by paying the transaction fees using these tokens.

In the Polkadot explorer, it's only possible to interact with the Substrate RPC, so to interact with the Ethereum RPC, you will have to use MetaMask.
