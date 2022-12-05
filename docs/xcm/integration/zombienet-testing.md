---
sidebar_position: 6
---

# Integration Testing with Zombienet

:::note
This page is inteded for developers & builders.
:::

## The Problem

Finding the right environment for testing XCM features, both standalone or with smart contracts, can be difficult since it requires at least two parachains with open HRMP channels and a relaychain. The parachains need to have the features we rely on in testing.

At the moment, only production networks, like `Astar` or `Shiden`, have access to a great number of HRMP channels with various parachains. Testing in production isn't a good idea though and should be avoided. A possible alternative is to use `Rococo` as relay chain and the connected parachains, if they are available. Not all projects deploy a testnet on Rococo.

## Zombienet

The approach that gives users the most control is to setup a local test network, with both the relay chain and parachain(s). This is very simple & easy to do using the [zombienet](https://github.com/paritytech/zombienet) tool provided by Parity. Simply put, users can download arbitrary relay-chain and parachain binaries (or use images) to setup a configurable local test network. Users will have access to all privileged actions on the relay-chain and on the parachains which makes testing much easier.

For example, user can download `polkadot` binary together with `astar-collator` and `cumulus-parachain` to spin up a testnetwork with `polkadot` as relay chain, `astar` as one parachain and `statemint` as the second parachain.

`Zombienet` documentation can be found [here](https://paritytech.github.io/zombienet/), including the installation instructions, CLI usage, guide with examples and many more. Users are advised to consult this document to get a better understanding of the tool.

## Shibuya - Shiden Test Network

### Overview

A quick reminder - `Shibuya` is a test network with no market value used by `Astar & Shiden` team to test features before deploying into production. It uses a custom **Rococo** based relay chain. `Shiden` is a production canary-type network connected to `Kusama`. These two parachains aren't aware of one another and do not communicate in live networks.

However, using `zombienet`, users can setup a local test network where one parachain would be `Shibuya` and the other would be `Shiden` with **HRMP** channels opened between them. This is incredibly useful for testing & integration because it gives users the option for cross-chain communication between two smart-contract oriented parachains which support WASM smart contracts, amongst many other features.

The following instructions will explain how to setup & configure local _Shibuya - Shiden test network_.

### Basic Setup Instructions

For users who already know what they are doing, please check [this](https://github.com/AstarNetwork/Astar/tree/master/third-party/zombienet) folder in `Astar` repository for _ready-to-use_ `zombienet` configurations.

1. For the sake of simplicity, prepare a folder called `zombienet` into which **ALL** binaries and config files will be placed.

2. Download `zombienet` binary appropriate for your operating system (or install it in any way you prefer).

3. Download `polkadot` binary and `astar-collator` binary. They can be found as part of release in official [polkadot](https://github.com/paritytech/polkadot/releases) and [Astar](https://github.com/AstarNetwork/Astar/releases) repositories.

4. Use the configuration file `multi_parachains.toml` which can be found [here](https://github.com/AstarNetwork/Astar/tree/master/third-party/zombienet). Make sure to check the file to get a sense of which parameters are being used.

5. Start the network. This is a command example: `./zombienet-linux -p native spawn multi_parachains.toml`. However, you can start the network in your preferred way (e.g. using `podman` or `kubernetes`).

6. Lots of useful information will be printed, like commands used to generate chain specifications and commands used to start the network (useful for extracting RPC ports). At the end, a table with direct links to node's `polkadot-js page` will be created. Use this to interact with chain from your browser.

7. After a minute or two, block production on both `Shibuya` and `Shiden` should start. This will usually happen after **relay-chain** reaches block 11, which will trigger a new session. HRMP channels will automatically be configured between the parachains (check the configuration file).

8. The test network is running and users can interract with relay chain and both parachains. It is possible to deploy EVM and WASM smart contracts, send XCM instructions and everything else possible on live chains. In addition, users have direct access to `Alice` account, which has `sudo` privileges.

> We will provide automated way of performing these setup actions in the future.

### Basic Cross-Chain Assets Setup Instructions

After completing the previous steps, a local test network with two parachains is running.
The following steps will explain how to setup basic cross-chain payable assets for both parachains.

The aim is to configure a cross-chain **SDN** asset on `Shibuya` and cross-chain **SBY** asset on `Shiden`. Both assets will be configured as _payable_, meaning they can be used to pay for XCM execution on remote chain.

For all steps, encoded call data will be provided to simplify the process for the user. **ALL** calls should be executed as `Alice`.

1. In the local `Shibuya polkadot-js` explorer, create a new asset for the cross-chain SDN wrapper. Configure it to be sufficient and payable.
```
0x63000b02102401910100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0102093d002410910114786353444e14786353444e12003600010101005d1f91013601010101005d1f02286bee
```

2. In the local `Shiden polkadot-js` explorer, create a new asset for the cross-chain SBY wrapper. Same concept as in the previous step.
```
0x63000b02102401210300d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0102093d00241021031478635342591478635342591200360001010100411f2103360101010100411f02286bee
```

3. In the local `Shibuya polkadot-js` explorer, send **1000 SBY** to `Alice` on Shiden.
```
0x3302010101005d1f0100010100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d010400000000170000a0dec5adc9353600000000
```

4. In the local `Shiden polkadot-js` explorer, send **1000 SDN** to `Alice` on Shibuya.
```
0x330201010100411f0100010100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d010400000000170000a0dec5adc9353600000000
```

5. Check that `Alice` on both chains received the assets (minus the execution fee).

### Basic Remote Execution Instructions

After completing the previous steps, cross-chain SDN and SBY wrappers are configured as payable and sufficient assets.
The following steps will explain how to execute a cross-chain remote call. `Alice` will send an instruction from `Shiden` to execute `System::remark_with_event` on `Shibuya`.

`Alice` isn't able to directly control `Alice` on the destination chain, instead a new account will be derived. More information can be found [here](../building-with-xcm/xc-remote-transact.md#derived-remote-accounts).

1. Calculate `Alice's` derived account on `Shibuya` when sending instructions from `Shiden`.
```
> ./xcm-tools account32-hash -p 2007 -a 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d -n kusama
5Cvcv8RvSsp6go2pQ8FRXcGLAzNp5eyC8Je7KLHz5zFwuUyT
```

2. Fund the `5Cvcv8RvSsp6go2pQ8FRXcGLAzNp5eyC8Je7KLHz5zFwuUyT` account on `Shibuya` (send it some SBY tokens).

3. On `Shiden`, as `Alice`, send an XCM sequence instructing `Shibuya` to execute `System::remark_with_event`.
```
0x330001010100411f021400040000000013000064a7b3b6e00d130000000013000064a7b3b6e00d00060102286bee140a0808abba140d010004000101002611a3b92e2351f8b6c98b7b0654dc1daab45b2619ea357a848d4fe2b5ae1863
```
4. Observe successful XCM execution on `Shibuya` and inspect the block to observe `remark` event.
