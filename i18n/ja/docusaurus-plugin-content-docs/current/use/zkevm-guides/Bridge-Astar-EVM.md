---
sidebar_position: 3
title: Astar EVMからAstar zkEVMへのブリッジ
---

import Figure from "/src/components/figure"

# Astar EVMからAstar zkEVMへのアセットのブリッジング

このページでは、**Astar EVM**と**Astar zkEVM**間で`ASTR`を転送する方法について説明しています。
もしAstarネイティブ（Substrate）に`ASTR`を持っている場合、AstarネイティブからAstar EVMへ転送する方法については[こちらのガイド](/docs/use/manage-assets/transfer-tokens#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)を参照してください。

## Stargateを使用した転送:

**[Stargate](https://stargate.finance/transfer)** は、LayerZero上で完全に構成可能なネイティブアセットブリッジを構築するコミュニティ主導の組織です。[詳細情報](https://stargateprotocol.gitbook.io/stargate/v/user-docs)。

*ご利用の皆様へ、Astar Foundationは、当社のドキュメントに記載されている第三者のアプリケーションを利用したことにより生じる直接的、間接的、偶発的、特別、結果的、または模範的な損害について、一切の責任または義務を負わないことをご了承ください。*

1. [Stargate](https://stargate.finance/transfer) にアクセスし、あなたのEVMウォレットを接続してください。

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_1.png').default} width="70%" />

2. 転送したいトークンを選択し、**送信元ネットワーク**として`Astar EVM`を選択してください。
3. 受け取りたいトークンを選択し、**送信先ネットワーク**として`Astar zkEVM`を選択してください。
4. 転送したいトークンの量を入力し、`Transfer`をクリックして取引を確認してください。
*ガスコストは送信先の取引のガス料金に相当し、転送される量から差し引かれます。*

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_2.png').default} width="60%" />

:::tip
Astar zkEVMでガストークン（`ETH`）をリクエストするオプションがあります。Stargateはあなたの資産の一部をETHに交換し、それをAstar zkEVMのあなたのウォレットに転送します。

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_3.png').default} width="95%" />
:::

5. ウォレットでトランザクションに署名してください。

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_4.png').default} width="50%" />

6. ネットワーク上でトランザクションが確認されたら、EVMウォレットにブリッジされた資産が表示され、Astar zkEVMで使用する準備が整います。

:::info
手動でEVMウォレットにトークンを追加するには、以下のコントラクトアドレスを使用してください:
- **ASTR:** `0xdf41220C7e322bFEF933D85D01821ad277f90172`
:::
