---
sidebar_position: 1
title: Quickstart to Astar zkEVM
sidebar_label: Quickstart
---
import metamask from '/docs/build/zkEVM/img/metamask-network.png'

![Documentation of all the resources builders need in order to start testing, deploying and interacting with smart contracts on the Astar network](../img/build.png)

Astar zkEVM is the zero-knowledge scaling solution that is **fully equivalent to an EVM**. All existing smart contracts, developer toolings and wallets work seamlessly. Astar zkEVM harnesses the power of zero-knowledge proofs in order to reduce transaction costs and massively increase throughput, all while inheriting the security of Ethereum.

Building dApps on zkEVM is completely similar to Ethereum. Simply switch to the zkEVM RPC and start building on a network with much higher throughput and lower fees. Astar zkEVM provides a complete EVM-like experience for Developers and Users alike. So you do not need special toolings or new wallets for building or interacting with zkEVM.

:::info Reminder

You don't need special toolings or Wallets to build or interact with Astar zkEVM.

:::

Developers will be able to deploy their existing contracts to the zkEVM, and Users can deposit assets from Ethereum and transact off-chain. These transactions are grouped into batches with zero-knowledge proof attesting to the validity of each transaction.

## Connecting to zkEVM

In order to add the **Astar zkEVM** network to your wallet, you will need to enter the following details :

| Network | RPC URL | ChainID | Block Explorer URL | Currency |
| ------- | ------------------------------- | ---------------- | ---------------- | ----- |
| zKatana Testnet | `https://rpc.zkatana.gelato.digital` | `1261120` | `https://zkatana.blockscout.com/` | **ETH** |
| Mainnet | `coming soon...` | `-` | `-` | **ETH** |

The next step is to [bridge your assets](./bridge-to-zkevm.md) from Ethereum &rarr; Astar zkEVM. You can use the Astar's trustless [zKEVM Bridge](https://portal.astar.network) to bridge your assets.

## Deploying Smart Contracts

The development experience on zkEVM is seamless and identical to Ethereum Virtual Machine. Developers on zkEVM can use their existing code and toolings to deploy on zkEVM with much higher throughput and lower fees.

## Metamask setup for zKatana Testnet
If you need to add zKatana testnet to your wallet, use the link at the bottom of the [block explorer](https://zkatana.blockscout.com/), or fill in the details manually:

<div style={{textAlign: 'center'}}>
  <img src={metamask} style={{width: 400}} />
</div>

## Astar zkEVM Support for Developers

If you are a developer and need help with anything related to the Astar zkEVM network, you can open an issue on [Ethereum StackExchange](https://discord.gg/astarnetwork) and tag it with `Astar` (preferred) or on the [Astar Discord server](https://discord.gg/astarnetwork). 

<details>
<summary>Ethereum StackExchange</summary>

1. Join the **Ethereum StackExchange** [here](https://ethereum.stackexchange.com/).

2. Create a new issue.
3. Make a detailed explanation of your issue.
4. At the end add a tag `Astar` to trigger Astar team.

</details>
<details>
<summary>Astar Discord server</summary>

1. Join the **Astar Discord** server [here](https://discord.gg/astarnetwork).

2. Accept the invite.
3. Take the **Developer** role under **#roles**.
4. Navigate to the **Builder/#zkevm-support** channel.

</details>