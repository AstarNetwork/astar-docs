---
sidebar_position: 2
---

# Swanky Node

Swanky Node is a Substrate based blockchain configured to enable `pallet-contracts` (a smart contract module), and other features that assist local development of Wasm smart contracts.

### Features

- [pallet-contracts](https://github.com/paritytech/substrate/tree/master/frame/contracts)
- `grandpa` & `aura` consensus were removed. Instead, `instant-seal` & `manual-seal` are used.
  Blocks are authored & finalized (1) as soon as a transaction get in the pool (2) when `engine_createBlock` `engine_finalizeBlock` RPC called respectively.
- `pallet-dapps-staking`
- `pallet-assets`
- `pallet-assets` chain extension
- `pallet-dapps-staking` chain extension

Swanky Node is optimized for local development, while removing unnecessary components such as P2P. Additional features and pallets, such as to interact between (Contract \<-\> Runtime), will be added in the future.

### Compatible ink! version

ink! `v4.0.0` or lower is supported.

### Installation

#### Download Binary

The easiest method of installation is by downloading and executing a precompiled binary from the [Release Page](https://github.com/AstarNetwork/swanky-node/releases)

#### Build Locally

If you would like to build the source locally, you should first complete the [basic Rust setup instructions](/docs/build/environment/ink_environment#rust-and-cargo).
Once Rust is installed and configured, you will be able to build the node with:

```bash
cargo build --release
```

### Embedded Docs :book:

Once the project has been built, the following command can be used to explore all parameters and
subcommands:

```bash
./target/release/swanky-node -h
```

### Usage

This command will start the single-node development chain with a persistent state.

```bash
./target/release/swanky-node
```

If you would prefer to run the node in non-persistent mode, use tmp option.

```
./target/release/swanky-node --tmp
# or
./target/release/swanky-node --dev
```

Purge the development chain's state.

```bash
./target/release/swanky-node purge-chain
```

### Development Accounts

The **alice** development account will be the authority and sudo account as declared in the
[genesis state](https://github.com/AstarNetwork/swanky-node/blob/main/node/src/chain_spec.rs#L44).
While at the same time, the following accounts will be pre-funded:

- Alice
- Bob
- Charlie
- Dave
- Eve
- Ferdie
- Alice//stash
- Bob//stash
- Charlie//stash
- Dave//stash
- Eve//stash
- Ferdie//stash

### Show only Errors and Contract Debug Output

To print errors and contract debug output to the console log, supply `-lerror,runtime::contracts=debug` when starting the node.

```
./target/release/swanky-node -lerror,runtime::contracts=debug
```

Important: Debug output is only printed for RPC calls or off-chain tests ‒ not for transactions.

See the ink! [FAQ](https://ink.substrate.io/faq/#how-do-i-print-something-to-the-console-from-the-runtime) for more details: How do I print something to the console from the runtime?.

### Connect with Polkadot.js Apps Portal

Once the Swanky Node is running locally, you will be able to connect to it from the **Polkadot-JS Apps** front-end,
in order to interact with your chain. [Click
here](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944) connecting the Apps to your
local Swanky Node.

### Run in Docker

First, install [Docker](https://docs.docker.com/get-docker/) and
[Docker Compose](https://docs.docker.com/compose/install/).

Then run the following command to start a single node development chain.

```bash
mkdir .local # this is mounted by container
./scripts/docker_run.sh
```

This command will compile the code, and then start a local development network. You can
also replace the default command
(`cargo build --release && ./target/release/swanky-node --dev --ws-external`)
by appending your own. A few useful commands are shown below:

```bash
# Run Substrate node without re-compiling
./scripts/docker_run.sh ./target/release/swanky-node --ws-external

# Purge the local dev chain
./scripts/docker_run.sh ./target/release/swanky-node purge-chain

# Check whether the code is compilable
./scripts/docker_run.sh cargo check
```

### Consensus (Manual Seal & Instant Seal)

Unlike other blockchains, Swanky Node adopts block authoring and finality gadgets referred to as Manual Seal and Instant Seal, consensus mechanisms suitable for contract development and testing.

Manual seal - Blocks are authored whenever RPC is called.
Instant seal - Blocks are authored as soon as transactions enter the pool, most often resulting in one transaction per block.

Swanky Node enables both Manual seal and Instant seal.

#### Manual Sealing via RPC call

We can tell the node to author a block by calling the `engine_createBlock` RPC.

```bash
$ curl http://localhost:9944 -H "Content-Type:application/json;charset=utf-8" -d   '{
     "jsonrpc":"2.0",
      "id":1,
      "method":"engine_createBlock",
      "params": [true, false, null]
    }'
```

#### Params

- **Create Empty**
  `create_empty` is a Boolean value indicating whether empty blocks may be created. Setting `create-empty` to true does not mean that an empty block will necessarily be created. Rather, it means that the engine should go ahead creating a block even if no transactions are present. If transactions are present in the queue, they will be included regardless of the value of `create_empty`.

- **Finalize**
  `finalize` is a Boolean value indicating whether the block (and its ancestors, recursively) should be finalized after creation.

- **Parent Hash**
  `parent_hash` is an optional hash of a block to use as a parent. To set the parent, use the format `"0x0e0626477621754200486f323e3858cd5f28fcbe52c69b2581aecb622e384764"`. To omit the parent, use `null`. When the parent is omitted the block will be built on the current best block. Manually specifying the parent is useful for constructing fork scenarios, and demonstrating chain reorganizations.

#### Finalizing Blocks Manually

In addition to finalizing blocks at the time of creating them, they may also be finalized later by using the RPC call `engine_finalizeBlock`.

```bash
$ curl http://localhost:9944 -H "Content-Type:application/json;charset=utf-8" -d   '{
     "jsonrpc":"2.0",
      "id":1,
      "method":"engine_finalizeBlock",
      "params": ["0x0e0626477621754200486f323e3858cd5f28fcbe52c69b2581aecb622e384764", null]
    }'
```
