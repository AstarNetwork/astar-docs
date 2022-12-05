# How to run a local Astar blockchain for contract testing

## TL;DR

Compared with using the public Shibuya testnet, testing on a local Astar blockchain can provide higher throughput, quicker response, and more privacy since the only node of the network runs on your local device. Building a local Astar blockchain is essential for relatively large projects’ development and testing.

In this cookbook, we will guide you through the process of setting up a local Astar node, running the local blockchain, accessing the blockchain via local host explorer, and configuring the local blockchain in other dev tools.

---

## What is a local Astar blockchain

A local Astar blockchain is a single-node network running on your local device which can simulate the on-chain environment of Astar Network and be used for local testing without needing any network connections. You can set up a local blockchain by downloading the latest Astar collator node code from Github and building from source, or directly run the binary built for your environment.

Running a local blockchain is common for smart contract development and testing.

## Why should I run a local Astar blockchain

Compared to the Shibuya public testnet, running a local Astar blockchain will have the following benefits:

- Higher throughput and quicker response compared to using Shibuya public testnet, which may save you a lot of testing time.
- Privacy of testing data and development history since the only node is on your local device and only you have access to the network.
- Self-customized release version and testing conditions. By using a local blockchain for testing and development, you will be able to choose the node release version and customize the testing conditions, e.g. rolling back the network for 10000 blocks.

---

## Download the latest Astar-collator binary file

A binary file is an executable program that is already compiled with a specific environment. In this guide, we will demonstrate how to build the local blockchain using binary files since it is the most widely used approach. 

If you prefer building from source code with your local environment, please refer to [https://github.com/AstarNetwork/Astar#building-from-source](https://github.com/AstarNetwork/Astar#building-from-source).

- Download the latest release of [astar-collator](https://github.com/AstarNetwork/Astar/releases) for macOS for Ubuntu
    
    <aside>
    💡 Please make sure you are running a macOS or Ubuntu with the appropriate version. For macOS, please use the versions above MacOS 12.0.
    
    </aside>
    

![Untitled](How%20to%20run%20a%20local%20Astar%20blockchain%20for%20contract%20t%20ec10eb1940a4477bb14b3c5086fd8230/Untitled.png)

- Please rename the binary file to `astar`, for illustration purposes the consistency of the command lines in this tutorial.

---

## Add execution permission to the binary file

- Change the directory to the folder containing the `astar` binary file
    
    ```jsx
    cd local-astar-cookbook
    ```
    
- Add execution permission to the binary file
    - If you are using a Mac, you may need an extra step to configure the security settings:
        - Go to Apple menu > System Settings > Privacy & Security
        - Under security, add the `astar` binary file that you just downloaded to the whitelist
        - Then, continue with the following command
    
    ```jsx
    chmod +x ./astar
    ```
    
- Now you can double-check the version of your astar-collator node
    
    ```jsx
    ./astar --version
    ```
    

---

## Configure and run the local blockchain

- Run the local network with the following configurations:
    - `--port 30333`: use `port 30333` for P2P TCP connection
    - `--ws-port 9944`: use `port 9944` for WebSocket connection
    - `--rpc-port 9933`: use `port 9933` for RPC
    - `--rpc-cors all`: accept any origins for HTTP and WebSocket connections
    - `--alice`: enable `Alice` session keys
    - `--dev`: launch the network in development mode
    
    ```jsx
    ./astar --port 30333 --ws-port 9944 --rpc-port 9933 --rpc-cors all --alice --dev
    ```
    
- You will be able to see the local astar-collator node info and new blocksafter successfully running it
    
    ![Untitled](How%20to%20run%20a%20local%20Astar%20blockchain%20for%20contract%20t%20ec10eb1940a4477bb14b3c5086fd8230/Untitled%201.png)
    
    ![Untitled](How%20to%20run%20a%20local%20Astar%20blockchain%20for%20contract%20t%20ec10eb1940a4477bb14b3c5086fd8230/Untitled%202.png)
    
- You can check a full list of subcommand and explanation using the following command
    
    ```jsx
    ./astar help
    ```
    

---

## Access the local blockchain via explorer

- Go to [https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer)
    - since we have used `port 9944` for WebSocket connection
- Then, you will be able to to view the recent blocks, accounts info, etc. as the on-chain environment of Astar Network
    
    ![Untitled](How%20to%20run%20a%20local%20Astar%20blockchain%20for%20contract%20t%20ec10eb1940a4477bb14b3c5086fd8230/Untitled%203.png)
    

---

## Configure the local blockchain in other dev tools

When using the local blockchain with other dev tools including MetaMask, Hardhat, Remix, Truffle, please configure the network with the following info to connect with the local blockchain:

| Network Name | Local Astar Testnet 0 |
| --- | --- |
| New RPC URL | http://127.0.0.1:9933 |
| Chain ID | 4369 |
| Currency Symbol | ASTL |

---

## Appendix: useful subcommand in smart contract testings

When using the local blockchain with other dev tools including MetaMask, Hardhat, Remix, Truffle, please configure the network with the following info to connect with the local blockchain:

- `build-spec`: build a chain specification
- `check-block`: validate blocks
- `export-blocks`: export blocks
- `export-genesis-state`: export the genesis state of the parachain
- `export-genesis-wasm`: export the genesis wasm of the parachain
- `export-state`: export the state of a given block into a chain spec
- `help`: print this message or the help of the given subcommand(s)
- `import-blocks`: import blocks
- `key`: key management cli utilities
- `purge-chain`: remove the whole chain
- `revert`: revert the chain to a previous state
- `sign`: sign a message, with a given (secret) key
- `vanity`: generate a seed that provides a vanity address
- `verify`: verify a signature for a message, provided on STDIN, with a given (public or secret) key

---

## Reference

[https://github.com/AstarNetwork/Astar](https://github.com/AstarNetwork/Astar)

[https://docs.astar.network/docs/EVM/first-contract/local-network](https://docs.astar.network/docs/EVM/first-contract/local-network)