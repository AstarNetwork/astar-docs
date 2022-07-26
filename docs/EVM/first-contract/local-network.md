---
sidebar_position: 2
---

# Running local network

Now, it's time to run your first local network!

## Get the latest binary

You can get the binary in one of the following ways:

- Download the latest binary from Github
- Build from source

If you want to download the binary, go to the [Release page of Astar Github repository](https://github.com/AstarNetwork/Astar/releases). You can find the pre-built binaries for MacOS and Ubuntu as well as Docker images.  If you want to build from source, [this readme](https://github.com/AstarNetwork/Astar#building-from-source) helps you a lot!

After you get the binary, you can rename the binary file to `shiden` and add execution permission to the binary by running the following command:

```sh
chmod +x ./shiden
```

Then you can execute the binary!  To check whether you can run the node, let's check the binary version.

```sh
./shiden --version
# astar-collator 2.5.1-ae46758-x86_64-macos
```

## Run the local network

You are already ready to run the local network. Simply run the following command:

```sh
./shiden --port 30333 --ws-port 9944 --rpc-port 9933 --rpc-cors all --alice --dev
```

This command means:

- Use port 30333 for P2P TCP connection
- Use port 9944 for WebSocket connection
- Use port 9933 for RPC
- Accept any origins for HTTP and WebSocket connections
- Enable Alice session keys
- Launch network in development mode

You can see the full list of the command option from the help subcommand:

```sh
./shiden help
# shiden 2.5.1-ae46758-x86_64-macos
# 
# Stake Technologies <devops@stake.co.jp>
# Shiden parachain collator
# ...
```

When you succeed to run the local network, you can see the following messages on your terminal:

![1](img/1.png)

OK! Let's visualize your local network now!

## Access your local network via Explorer

Access the following URL:

<https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer>

Then you can see the following screen:

![2](img/2.png)

This visualizes your local network. In this local network, some native tokens are already issued and allocated to some accounts. Let's go to the [Account page](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/accounts) from Accounts Tab.

![3](img/3.png)

You can see that ALICE and BOB have around 1,000 tokens. In the following section, you can deploy your smart contract and interact with it by paying the transaction fee using these tokens.

In the Polkadot explorer, it's possible to interact with Substrate RPC only. So how can you do interact with Ethereum RPC? You can use Metamask for that!
