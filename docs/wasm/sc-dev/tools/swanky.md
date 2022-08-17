---
sidebar_position: 2
---

# Swanky Suite

Swanky Suite aims to be a "all-in-one" tool for Wasm smart contract developers within Polkadot / Kusama ecosystem. It is based on existing tools like Cargo Contract CLI and Polkadot.js but extending with many additional features such as generating a new smart contract environment based on example projects and packaging an instant finality node (Swanky node) which can be used for shortening the contract development lifecycle loop. Swanky Suite is the tool that enables all existing (and future) Web3 developers to have an equal experience compared to EVM dev tooling.

Features of Swanky Suite:

- Quick start a local contract development node with instant finality (Swanky Node)
- Scaffolding a new project with various templates for both smart contracts and front-end dApp. ie. Truffle for ink!
- Compiling projects with various languages (like Ink!, Ask-Lite, …)
- Running unit tests with the Swanky Node and any other node supporting pallet-contracts
- Setting up RPC tests and integration tests via npm for interacting with smart contracts on the client-side
- Deploying smart contracts to networks within the Dotsama ecosystem that support pallet-contracts

Below is the user documentation for Swanky CLI which is meant to be used hand-in-hand with Swanky Node.

For the latest version of Swanky CLI docs please checkout [Swanky CLI download page](https://www.npmjs.com/package/@astar-network/swanky-cli) (soon to be available on GitHub) and [Swanky Node Repo GitHub](https://github.com/AstarNetwork/swanky-node).

> Swanky CLI is currently in Beta 1 phase allowing interaction with Swanky Node.


## Architecture overview

The Swanky Suite consists of two main parts, Swanky CLI and the Swanky Node.

Swanky CLI is a Node.js CLI app that uses the Polkadot.js API as its backend alongside many existing tools like the cargo contract CLI. There will be many features that will support the developer such as bootstrapping WASM dApps via smart contract and UI scaffolding, running integration tests, starting local nodes, account management, connecting and deploying contracts to both local and remote networks, compiling for various languages from a single CLI app, compatibility check from contract pallet to the compiler, and much more.

The Swanky Node will be a local developer node with an instant seal and instant finality like those of Ganache for EVM or Jupiter by Patract Labs. However, if the Substrate contract node is the place for Substrate WASM smart contract development, the Swanky Node aims to be the de facto development node for WASM smart contract development on parachains as it will be able to have customizable extrinsic profiles, where the developer can load a node with preconfigured pallets with chain extensions.

The envisioned architecture of Swanky CLI and Swanky Node (Local developer node)

![Project Diagram Canvas](https://user-images.githubusercontent.com/40356749/178747897-1097c160-195e-4901-8053-ac3fa9a5791f.jpg)



## Usage

```bash
$ npm install -g @astar-network/swanky-cli
$ swanky COMMAND
running command...
$ swanky (--version)
@astar-network/swanky-cli/0.0.4 darwin-x64 node-v18.2.0
$ swanky --help [COMMAND]
USAGE
  $ swanky COMMAND
...
```

## Commands

[`swanky call`](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-call)

[`swanky compile`](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-compile)

[`swanky deploy`](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-deploy)

[`swanky help [COMMAND]`](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-help-command)

[`swanky init NAME`](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-init-name)

[`swanky node start`](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-node-start)

### `swanky call`

Deploy contract to a running node

```bash
USAGE
  $ swanky call -m <value> [-a <value>]

FLAGS
  -a, --args=<value>
  -m, --message=<value>  (required)

DESCRIPTION
  Deploy contract to a running node
```

### `swanky compile`

Compile the smart contract(s) in your contracts directory

```bash
USAGE
  $ swanky compile [-s]

FLAGS
  -s, --silent  Don't display compilation output

DESCRIPTION
  Compile the smart contract(s) in your contracts directory
```

### `swanky deploy`

Deploy contract to a running node

```bash
USAGE
  $ swanky deploy -g <value> -a <value>

FLAGS
  -a, --args=<value>  (required)
  -g, --gas=<value>   (required)

DESCRIPTION
  Deploy contract to a running node
```

### `swanky help [command]`

Display help for swanky.

```bash
USAGE
  $ swanky help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for swanky.
```

### `swanky init [name]`

Generate a new smart contract environment

```bash
USAGE
  $ swanky init [NAME]

ARGUMENTS
  NAME  directory name of new project

DESCRIPTION
  Generate a new smart contract environment
```

### `swanky node start`

Start a local node

```bash
USAGE
  $ swanky node start

DESCRIPTION
  Start a local node
```

## Swanky Node

Swanky node is a Substrate based blockchain configured to enable `pallet-contracts` (a smart contract module) and more features to help Wasm smart contract development locally.

### Features

- [`pallet-contracts`] (polkadot-0.9.19) and its unstable-feature are enabled by default.
- `grandpa` and `aura` consensus were removed. Instead, `instant-seal` and `manual-seal` are used. Blocks are authored (1) as soon as a transaction get in the pool (2) when `engine_createBlock` RPC called. Blocks are finalized when `engine_finalizeBlock` RPC called.
- [`pallet-dapps-staking`] and `ChainExtension` to interact with it.
- [`pallet-assets`]

It is optimized to local development purpose while removing unnecessary components such as P2P. More features and pallets to interact with (Contract <-> Runtime) will be added.

### Compatible ink! version

ink! version `3.0.1` or lower is supported by `pallet-contract` on the `polkadot-0.9.19` branch. You may need to modify dependencies as shown below.

### Installation

The easiest way is to download a binary release from [Release Page](https://github.com/AstarNetwork/swanky-node/releases). For building your own check out GitHub project for detailed instructions.

### Usage

This command will start the single-node development chain with persistent state.

```bash
./target/release/swanky-node
```

If you want to run the node with non-persist mode, use `--tmp` option.

```bash
./target/release/swanky-node --tmp
# or
./target/release/swanky-node --dev
```

Purge the development chain's state.

```bash
./target/release/swanky-node purge-chain
```

### Connect with Polkadot-JS Apps Front-end

Once the swanky node is running locally, you can connect it with [Polkadot-JS Apps] front-end to interact with your chain. [Click here](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944) connecting the Apps to your local swanky node.

### Consensus (Manual Seal & Instant Seal)

Unlike other blockchains, Swanky node adopts block authioring and finalized gadget called Manual Seal and Instant Seal, consensus which is suitable for contracts development and testing.

Manual seal - Blocks are authored whenever RPC called. Instant seal - Block are authored as soon as transactions get inside the pool, most often one transaction per block.

Swanky node enables both Manual seal and Instant seal.

### Manual Seal RPC calls

We can tell the node to author a block by calling the `engine_createBlock` RPC.

```bash
$ curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   '{
     "jsonrpc":"2.0",
      "id":1,
      "method":"engine_createBlock",
      "params": [true, false, null]
    }'
```

### Param

- **Create Empty**: `create_empty` is a Boolean value indicating whether empty blocks may be created. Setting `create-empty` to true does not mean that an empty block will necessarily be created. Rather it means that the engine should go ahead creating a block even if no transaction are present. If transactions are present in the queue, they will be included regardless of `create_empty`'s value.'
- **Finalize**: `finalize` is a Boolean indicating whether the block (and its ancestors, recursively) should be finalized after creation.
- **Parent Hash**: `parent_hash` is an optional hash of a block to use as a parent. To set the parent, use the format `"0x0e0626477621754200486f323e3858cd5f28fcbe52c69b2581aecb622e384764"`. To omit the parent, use `null`. When the parent is omitted the block is built on the current best block. Manually specifying the parent is useful for constructing fork scenarios and demonstrating chain reorganizations.

### Manually Finalizing Blocks

In addition to finalizing blocks while creating them, they can be finalized later by using the second provided RPC call, `engine_finalizeBlock`.

```bash
$ curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   '{
     "jsonrpc":"2.0",
      "id":1,
      "method":"engine_finalizeBlock",
      "params": ["0x0e0626477621754200486f323e3858cd5f28fcbe52c69b2581aecb622e384764", null]
    }'
```

### More Details

For more detailed documentation please visit the [`swanky-node` GitHub repo].

## Documentation

[`swanky` CLI Github repo] with the latest documentation

[`swanky-node` Github repo] with the latest documentation.

[`pallet-contracts`]: https://github.com/paritytech/substrate/tree/master/frame/contracts
[`pallet-dapps-staking`]: https://github.com/AstarNetwork/astar-frame/tree/polkadot-v0.9.19/frame/dapps-staking
[`pallet-assets`]: https://github.com/paritytech/substrate/tree/master/frame/assets
[`swanky-node` GitHub repo]: https://github.com/AstarNetwork/swanky-node
[`swanky` CLI Github repo]: https://github.com/AstarNetwork/swanky-cli
