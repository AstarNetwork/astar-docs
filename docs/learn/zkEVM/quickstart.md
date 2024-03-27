---
sidebar_position: 1
title: Quickstart Guide
sidebar_label: Quickstart
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import metamask from '/docs/build/zkEVM/img/metamask-network.png'
import zkHeader from '/docs/build/img/zkHeader.png'

<div style={{textAlign: 'center'}}>
    <img src={zkHeader} style={{width: 1200}} />
</div>

# Overview of Astar zkEVM

Astar zkEVM is Layer 2 scaling solution for Ethereum offering a blazing fast and more cost-effective experience compared to Ethereum itself. Coupled with support from Polygon, it's the first network to plug into the Aggregation Layer (AggLayer) and harnesses the power of zero-knowledge proofs to move transaction execution and data availability off-chain, while continuing to operate under the same security umbrella as Ethereum.

## Connecting to Astar zkEVM

To add **Astar zkEVM** or any testnet networks to your wallet manually, enter the following details :
<Tabs>

<TabItem value="mainnet" label="Astar zkEVM">
| RPC URL | ChainID | Block Explorer URL | Currency |
| ------------------------------- | ---------------- | ---------------- | ----- |
| `https://rpc.startale.com/astar-zkevm` | `3776` | [https://astar-zkevm.explorer.startale.com/](https://astar-zkevm.explorer.startale.com/) | **ETH** |
| `https://rpc.astar-zkevm.gelato.digital` | `3776` | | **ETH** |
| `https://astar-zkevm-rpc.dwellir.com` | `3776` | | **ETH** |
</TabItem>

<TabItem value="testnet 2" label="zKyoto Testnet">
| RPC URL | ChainID | Block Explorer URL | Currency |
| ------------------------------- | ---------------- | ---------------- | ----- |
| `https://rpc.startale.com/zkyoto` | `6038361` | [hhttps://zkyoto.explorer.startale.com/](https://zkyoto.explorer.startale.com/) | **ETH** |
| `https://rpc.zkyoto.gelato.digital` | `6038361` | | **ETH** |
</TabItem>

</Tabs>

To add the network to MetaMask you can either use the data above, or find a link to add the network at the bottom of the respective block explorer page.

## Bridging Assets

The next step is to bridge funds to the Astar zkEVM. You can use the Astar official [zkEVM Bridge](https://portal.astar.network/astar/bridge) if you already have funds on Astar Network.

:::important
Astar official [zkEVM Bridge](https://portal.astar.network/astar/bridge) does not inherit any counterparty risk compared to 3rd party bridge services, so is therefore trustless. 
:::

## Astar zkEVM Support

If you have a question about using the Astar zkEVM please join and ask in the [Astar Discord server](https://discord.gg/astarnetwork), or consult the [FAQs](https://docs.astar.network/docs/learn/zkEVM/faq)
