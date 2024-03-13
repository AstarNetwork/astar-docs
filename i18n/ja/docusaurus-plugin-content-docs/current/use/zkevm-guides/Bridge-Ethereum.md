---
sidebar_position: 2
title: Ethereumおよび他のEVMベースのチェーンからAstar zkEVMへのブリッジ

sidebar_label: Bridge Astar <> Ethereum
---

import Figure from "/src/components/figure"

# Ethereum および他の EVM ベースのチェーンから Astar zkEVM へのブリッジ

このページでは、**Astar zkEVM**と**Ethereum メインネット**および他の EVM ベースのチェーン間で`ETH`および他の`ERC20`資産を転送する方法について説明します。zkEVM への資産のブリッジには 2 つのオプションがあります：

### 1. Astar Portal を使用した転送:

1. [Astar Portal](https://portal.astar.network/astar-zkevm/bridge/ethereum) にアクセスし、Astar zkEVM ネットワーク上であなたのウォレットを接続します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_1.png').default} width="50%" />

2. ネットワークモーダルウィンドウを使用して Astar zkEVM ネットワークに切り替えるか、MetaMask を Astar zkEVM に切り替えます;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_2.png').default} width="40%" />

3. 左側の Bridge タブをクリックし、`Native Bridge` (_ERC20_) を選択します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_3.png').default} width="120%" />

4. Ethereum がブリッジの転送元として選択され、Astar zkEVM が転送先として選択されていることを確認します;
   転送する ETH の量を入力した後`Bridge`ボタンを押します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_4.png').default} width="120%" />

5. ウォレットでトランザクションに署名します;

6. これで、Astar zkEVM で使用するためのブリッジされた資産が MetaMask に表示されます;

:::info 転送は、Ethereum ネットワークの使用状況により、10 分から 30 分かかることがあります。

トランザクションがあなたのウォレット拡張で確認されたら、Astar Portal と MetaMask が Astar zkEVM ネットワーク上のあなたの残高を更新するのに**約 5-10 分**かかります。
:::

### 2. Relay Link を使用した転送:

2 つ目のオプションは、**[Relay Link](https://www.relay.link/bridge/astar-zkevm/)** を使用することです。これは、即時で低コストのブリッジングとクロスチェーン実行を可能にするクロスチェーン決済システムです。[詳細情報](https://docs.relay.link/what-is-relay)。

_Astar Foundation は、このドキュメント内で言及される第三者の(自社のサービスでない)アプリケーションの利用により生じる損失に関して、法律上も職務上も責任を負うことはないことをご了承ください。これは、損失が直接的か間接的か、偶発的なものか、重大か、もしくは典型的か例外的かに関わらず適用されます。_

:::info 現時点では、Relay Link はクロスチェーン転送に対して**ETH トークン**のみをサポートしています！

以下のチェーンから Astar zkEVM への資産の転送が可能です:

- Ethereum
- Arbitrum
- Optimism
- zkSync Era
- Base
- Blast
  :::

1. [Relay Link](https://www.relay.link/bridge/astar-zkevm/) にアクセスし、あなたの EVM ウォレットを接続します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_5.png').default} width="70%" />

2. 資産を転送する**元のチェーン**を選択し、**転送先チェーン**として`Astar zkEVM`を選択します;

3. 転送したい ETH の量を入力し、`Bridge`をクリックしてトランザクションを確認します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_6.png').default} width="70%" />

4. ウォレットでトランザクションに署名します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_7.png').default} width="70%" />

5. トランザクションがネットワーク上で確認されると、EVM ウォレットにブリッジされた資産が表示され、Astar zkEVM で使用する準備が整います;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_8.png').default} width="70%" />
