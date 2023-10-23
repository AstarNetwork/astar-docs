---
sidebar_position: 1
title: Astar zkEVM Quickstart Guide
sidebar_label: Quickstart
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import metamask from '/docs/build/zkEVM/img/metamask-network.png'
import zkHeader from '/docs/build/img/zkHeader.png'

<div style={{textAlign: 'center'}}>
    <img src={zkHeader} style={{width: 1200}} />
</div>

Astar zkEVM is a zero-knowledge scaling solution for Ethereum that offers an **EVM-equivalent environment** on which existing EVM smart contracts, developer tools, and wallets can work seamlessly. Astar zkEVM harnesses the power of zero-knowledge proofs to reduce transaction costs and increase throughput, while inheriting the security of Ethereum.

Solidity developers are right at home on Astar zkEVM. Simply switch to the zkEVM RPC, and start building!

:::info Reminder
No special tools or wallets are required to build or interact with Astar zkEVM.
:::

Developers can deploy existing contracts from other EVM chains to the zkEVM, and users are able to deposit assets from Ethereum to transact on the zkEVM in batches, which are ultimately finalized through novel use of zero-knowledge proofs. Native account abstraction means developers can craft user interfaces that are more intuitive and web2-like, that eliminate complexity and drastically simplify the onboarding process. 

## Connecting to zkEVM

To add the **Astar zkEVM** network to your wallet manually, enter the following details :
<Tabs>
<TabItem value="testnet" label="zKatana Testnet" default>

| RPC URL | ChainID | Block Explorer URL | Currency |
| ------------------------------- | ---------------- | ---------------- | ----- |
| `https://rpc.zkatana.gelato.digital` | `1261120` | [https://zkatana.blockscout.com](https://zkatana.blockscout.com) | **ETH** |
| `https://rpc.startale.com/zkatana` | `1261120` | [https://zkatana.explorer.startale.com/](https://zkatana.explorer.startale.com/) | **ETH** |
</TabItem>

<TabItem value="mainnet" label="Astar zkEVM Mainnet" disabled>

| RPC URL | ChainID | Block Explorer URL | Currency |
| ------------------------------- | ---------------- | ---------------- | ----- |
| `coming soon...` | `-` | `-` | **ETH** |
</TabItem>
</Tabs>

The next step is to [bridge assets](/docs/build/zkEVM/bridge-to-zkevm.md) from Ethereum &rarr; Astar zkEVM. 

:::important
Astar's canonical [zkEVM Bridge](https://portal.astar.network) does not inherit any counterparty risk compared to 3rd party bridge services, and is trustless at the protocol level.
:::

## Deploying Smart Contracts

The development experience on zkEVM is seamless and identical to the Ethereum Virtual Machine. Developers building on zkEVM can use their existing code and tools to deploy on zkEVM, and dApp users will benefit from higher transaction throughput and lower fees. Read more about deploying smart contracts on the zkEVM [here.](/docs/build/zkEVM/smart-contracts/)

## Metamask setup for zKatana Testnet
To add zKatana testnet to MetaMask, use the link at the bottom of the [block explorer](https://zkatana.blockscout.com/), or fill in the following details manually:

<div style={{textAlign: 'center'}}>
  <img src={metamask} style={{width: 400}} />
</div>

## Astar zkEVM Support for Developers

Developers requiring support can open an issue on [Ethereum StackExchange](https://ethereum.stackexchange.com/) and tag it with `Astar` (preferred) or join the [Astar Discord server](https://discord.gg/astarnetwork). 

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
4. Navigate to the **Builder/#zkevm-learning** channel.

</details>
