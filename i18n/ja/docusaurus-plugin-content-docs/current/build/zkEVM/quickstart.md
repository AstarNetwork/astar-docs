---
sidebar_position: 0
title: Astar zkEVM クイックスタートガイド
sidebar_label: クイックスタート
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import metamask from '/docs/build/zkEVM/img/metamask-network.png'
import zkHeader from '/docs/build/img/zkHeader.png'

<div style={{textAlign: 'center'}}>
    <img src={zkHeader} style={{width: 1200}} />
</div>

Astar zkEVM は、Ethereum 上のゼロ知識証明を用いたスケーリングソリューションであり、既存の EVM スマートコントラクト、開発ツール、ウォレットがシームレスに動作する **EVM 等価**の環境を提供します。
Astar zkEVM は、ゼロ知識証明の力を利用してトランザクションコストを削減し、処理能力を向上させると同時に、Ethereum のセキュリティを受け継いでいます。

Solidity のデベロッパーは Astar zkEVM にすぐに馴染むことができます。 RPC アドレスをzkEVM のものに切り替えるだけで、開発をスタートすることができます！

:::info
Astar zkEVM 上での開発および運用に特別なツールやウォレットは必要ありません。
:::

開発者は、他の EVM チェーンから既存のコントラクトを zkEVM にデプロイでき、ユーザーは Ethereum からアセットを zkEVM にデポジットすることでトランザクションをバッチ化することができます。このトランザクションはゼロ知識証明の斬新な活用によって、最終的には Ethereum 上で確定されます。 ネイティブ実装されているアカウントアブストラクションにより、開発者は直感的で Web2 風の UI を作成することができます。そして、Web3特有の複雑さを排除し、オンボーディングプロセスを劇的に簡略化することができます。

## zkEVM への接続

:::info Reminder

フィードバックはいかなるものであっても歓迎ですし、非常にありがたいです。ですから、エラーやDocsとの不一致があればチームメンバーもしくは[Astar Docs Github repo](https://github.com/AstarNetwork/astar-docs/issues)のイシューにご報告ください。よろしくお願いいたします。
:::

**Astar zkEVM**ネットワークをウォレットに手動で追加するには、以下の詳細情報を入力してください：

<Tabs>


<TabItem value="testnet" label="zKatana Testnet">
| RPC URL | ChainID | Block Explorer URL | Currency |
| ------------------------------- | ---------------- | ---------------- | ----- |
| `https://rpc.startale.com/zkyoto` | `6038361` | [https://zkyoto.explorer.startale.com/](https://zkyoto.explorer.startale.com/) | **ETH** |
| `https://astar-zkyoto-rpc.dwellir.com` | `6038361` | | **ETH** |
</TabItem>

</Tabs>

MetaMaskにネットワークを追加するには、上記のデータを使用するか、対応するブロックエクスプローラーのページ下部にあるリンクを使用します。

## アセットのブリッジ

次のステップは Ethereum &rarr; Astar zkEVM のアセットの[ブリッジ](/docs/build/zkEVM/bridge-to-zkevm)です。

:::important
Astar 正規の[zkEVM Bridge](https://portal.astar.network)はサードパーティーのブリッジサービスとは違い、カウンターパーティーリスク(信用リスク)を持ちません。そして、プロトコルレベルでトラストレスです。
:::

## スマートコントラクトのデプロイ

zkEVM 上の開発体験は、EVM とシームレスであり、全く同じです。 zkEVM 上の開発者は、既存のコードとツールを使用して zkEVM にデプロイでき、dApp ユーザーはより高いトランザクション処理速度と低い手数料を享受できます。 zkEVM 上でスマートコントラクトをデプロイする方法について詳しくは、[こちら](/docs/build/zkEVM/smart-contracts/)をご覧ください。

## 開発者向けの Astar zkEVM サポート

サポートが必要な開発者は、[Ethereum StackExchange](https://discord.gg/astarnetwork)でイシューを開き、それに`Astar`のタグを付ける(推奨)か、[Astar Discord server](https://discord.gg/astarnetwork) に参加することができます。

<details>

1. [こちら](https://ethereum.stackexchange.com/)から**Ethereum StackExchange**に参加します。
2. イシューを新規作成します。
3. 困っている内容について詳しく説明します。
4. 最後に、Astar チームに知らせるために`Astar`タグを追加します。

</details>
<details>
<summary>Astar Discord server</summary>

1. [こちら](https://discord.gg/astarnetwork)から **Astar Discord** サーバーに参加します。
2. invite を承認してください。
3. **#roles**で**Developer** を選択してください。
4. **Builder/#zkevm-support** チャンネルに移動してください。

</details>
