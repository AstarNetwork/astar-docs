---
sidebar_position: 2
title: Quickstart to Astar zkEVM
sidebar_label: Quickstart
---
import metamask from '/docs/build/zkEVM/img/metamask-network.png'
import build from '/docs/build/img/build.png'

<div style={{textAlign: 'center'}}>
    <img src={build} style={{width: 1200}} />
</div>

Astar zkEVM is a zero-knowledge scaling solution for Ethereum that's **fully equivalent to an EVM**. All existing smart contracts, developer tools, and wallets work seamlessly. Astar zkEVM harnesses the power of zero-knowledge proofs to reduce transaction costs and increase throughput, while inheriting the security of Ethereum.

Ethereum developers can work seamlessly on Astar zkEVM. Simply switch to the zkEVM RPC, and start building!

:::info Reminder
You don't need special tools or wallets to build or interact with Astar zkEVM.
:::

Developers can deploy their existing contracts to the zkEVM, and Users can deposit assets from Ethereum to transact off-chain in batches, which are ultimately finalized on Ethereum through novel use of zero-knowledge proofs.

## Connecting to zkEVM

To add the **Astar zkEVM** network to your wallet manually, enter the following details :

| Network | RPC URL | ChainID | Block Explorer URL | Currency |
| ------- | ------------------------------- | ---------------- | ---------------- | ----- |
| zKatana Testnet | `https://rpc.zkatana.gelato.digital` | `1261120` | `https://zkatana.blockscout.com/` | **ETH** |
| Mainnet | `coming soon...` | `-` | `-` | **ETH** |

The next step is to [bridge assets](/docs/build/zkEVM/bridge-to-zkevm.md) from Ethereum &rarr; Astar zkEVM. 

:::important
Astar's canonical [zkEVM Bridge](https://portal.astar.network) does not inherit any counterparty risk compared to 3rd party bridge services, and is trustless at the protocol level.
:::

## Deploying Smart Contracts

The development experience on zkEVM is seamless and identical to the Ethereum Virtual Machine. Developers building on zkEVM can use their existing code and tools to deploy on zkEVM, and dApp users will experience higher transaction throughput and lower fees. Read more about deploying smart contracts on the zkEVM [here.](/docs/build/zkEVM/smart-contracts/)

## Metamask setup for zKatana Testnet
To add zKatana testnet to MetaMask, use the link at the bottom of the [block explorer](https://zkatana.blockscout.com/), or fill in the following details manually:

<div style={{textAlign: 'center'}}>
  <img src={metamask} style={{width: 400}} />
</div>

## Astar zkEVM Support for Developers

Developers that need support can open an issue on [Ethereum StackExchange](https://discord.gg/astarnetwork) and tag it with `Astar` (preferred) or join the [Astar Discord server](https://discord.gg/astarnetwork). 

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