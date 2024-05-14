---
sidebar_position: 1
title: Astar L1 EVM Quickstart Guide
sidebar_label: Quickstart
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import metamask from '/docs/build/zkEVM/img/metamask-network.png'
import evmHeader from '/docs/build/img/evm.png'

<div style={{textAlign: 'center'}}>
    <img src={evmHeader} style={{width: 1200}} />
</div>

Astar L1 EVM is the Virtual machine on Astar parachain, connected to Polkadot. It is a fully EVM-compatible environment that allows developers to deploy and run smart contracts on the Astar network.

:::info Reminder
No special tools or wallets are required to build or interact with Astar L1 EVM. All your favorite EVM building tools will work out of the box.
:::

## Connecting to Astar L1 EVM Networks

To add **Astar L1 EVM** or any testnet networks to your wallet manually, enter the following details:
<Tabs>

<TabItem value="astar" label="Astar L1 EVM">
| RPC URL | ChainID | Block Explorer URL | WebSocket | Currency |
| ------------------------------- | ---------------- | ---------------- |  ------------------------------- |----- |
| `https://evm.astar.network` | `592` | [https://astar.blockscout.com/](https://astar.blockscout.com/) | `wss://rpc.astar.network` | **ASTR** |
</TabItem>

<TabItem value="shiden" label="Shiden Network">
| RPC URL | ChainID | Block Explorer URL | WebSocket | Currency |
| ------------------------------- | ---------------- | ---------------- |  ------------------------------- |----- |
| `https://evm.shiden.astar.network` | `336` | [https://shiden.blockscout.com/](https://shiden.blockscout.com/) | `wss://rpc.shiden.astar.network` | **SDN** |
</TabItem>

<TabItem value="shibuya" label="Shibuya Network">
| RPC URL | ChainID | Block Explorer URL | WebSocket | Currency |
| ------------------------------- | ---------------- | ---------------- |------------------------------- | ----- |
| `https://evm.shibuya.astar.network` | `81` | [https://shibuya.blockscout.com/](https://shibuya.blockscout.com/) | `wss://rpc.shibuya.astar.network` |**SBY** |
</TabItem>

</Tabs>


For the more comprehensive list of available endpoints, please refer to the [Endpoints](/docs/build/environment/endpoints.md) page.

To add the network to MetaMask you can either use the data above, or find a link to add the network at the bottom of the respective block explorer page.

## Bridging Assets

To move assets from Astar Native to Astar L1 EVM use [Astar Network portal](https://portal.astar.network/).

To move assets from Ethereum to Astar L1 EVM use [cBridge](https://cbridge.celer.network/).

To get testnet tokens (SBY) use faucet on [Astar Network portal](https://portal.astar.network/).

## Deploying Smart Contracts

The development experience on Astar L1 EVM is seamless and identical to the Ethereum Virtual Machine. The EVM Developers building on Astar can use their existing code and tools to deploy on Astar. Read more about using smart contracts on the Astar L1 EVM [here.](/docs/build/EVM/infra/)

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
