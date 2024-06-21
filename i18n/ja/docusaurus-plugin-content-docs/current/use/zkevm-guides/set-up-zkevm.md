---
sidebar_position: 1
title: Astar zkEVM ネットワークの設定方法
sidebar_label: Set-up Astar zkEVM Network
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Figure from "/src/components/figure"

# Astar zkEVM ネットワークの設定方法

## 自動的に設定


あなたのウォレットにAstar zkEVMネットワークを自動的に追加するには、以下のオプションのいずれかを使用できます:
- **[Astar Portal](https://portal.astar.network/astar-zkevm)**  - **Astar zkEVM**ネットワークに切り替えると、Astar PortalはネットワークをあなたのEVMウォレットに変更および追加するように促します。
- **[ChainList](https://chainlist.org/)** - ChainListでAstar zkEVMを見つけることができます *(ID: `3776`)*、それをあなたのEVMウォレットに追加することができます。
- **[Astar zkEVM Block Explorer](https://astar-zkevm.explorer.startale.com/)** - Block Explorerページの下部に、Astar zkEVMをあなたのウォレットに追加するオプションがあります。


## 手動で設定

MetaMaskや他のEVMウォレットに**Astar zkEVM**ネットワークを追加するには、以下のデータを入力します:

<Tabs>

<TabItem value="mainnet" label="Astar zkEVM">
| ネットワーク名 | RPC URL | チェーンID | ブロックエクスプローラのURL | 通貨記号 |
| ---- | ------------------------------- | ---------------- | ---------------- | ----- |
| **Astar zkEVM Network** | `https://rpc.startale.com/astar-zkevm` | `3776` | [https://astar-zkevm.explorer.startale.com/](https://astar-zkevm.explorer.startale.com/) | **ETH** |
| **Astar zkEVM Network** | `https://astar-zkevm-rpc.dwellir.com` | `3776` | | **ETH** |
</TabItem>

</Tabs>

<Figure src={require('/docs/use/zkevm-guides/img/Setup_zkevm_1.png').default} width="50%" />
