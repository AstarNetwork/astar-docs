---
sidebar_position: 2
title: Ethereumおよび他のEVMベースのチェーンからAstar zkEVMへのブリッジ


sidebar_label: Bridge Astar <> Ethereum
---

import Figure from "/src/components/figure"

# Ethereumおよび他のEVMベースのチェーンからAstar zkEVMへのブリッジ

このページでは、**Astar zkEVM**と**Ethereumメインネット**および他のEVMベースのチェーン間で`ETH`および他の`ERC20`資産を転送する方法について説明します。zkEVMへの資産のブリッジには2つのオプションがあります：

### Astar Portal を使用した転送:

1. [Astar Portal](https://portal.astar.network/astar-zkevm/bridge/ethereum) にアクセスし、Astar zkEVMネットワーク上であなたのウォレットを接続します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_1.png').default} width="60%" />

2. ネットワークモーダルウィンドウを使用してAstar zkEVMネットワークに切り替えるか、MetaMaskをAstar zkEVMに切り替えます;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_2.png').default} width="70%" />

3. 左側のBridgeタブをクリックし、`Native Bridge` (*ERC20*) を選択します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_3.png').default} width="100%" />

4. Ethereumがブリッジの転送元として選択され、Astar zkEVMが転送先として選択されていることを確認します;
転送するETHの量を入力した後`Bridge`ボタンを押します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_4.png').default} width="100%" />

5. ウォレットでトランザクションに署名します;

6. これで、Astar zkEVMで使用するためのブリッジされた資産がMetaMaskに表示されます;

:::info 転送は、Ethereumネットワークの使用状況により、10分から30分かかることがあります。

トランザクションがあなたのウォレット拡張で確認されたら、Astar PortalとMetaMaskがAstar zkEVMネットワーク上のあなたの残高を更新するのに**約5-10分**かかります。
:::

### Relay Link を使用した転送:

2つ目のオプションは、**[Relay Link](https://www.relay.link/bridge/astar-zkevm/)** を使用することです。これは、即時で低コストのブリッジングとクロスチェーン実行を可能にするクロスチェーン決済システムです。[詳細情報](https://docs.relay.link/what-is-relay)。

:::info 現時点では、Relay Linkはクロスチェーン転送に対して**ETHトークン**のみをサポートしています！

以下のチェーンからAstar zkEVMへの資産の転送が可能です:

- Ethereum
- Arbitrum
- Optimism
- zkSync Era
- Base
- Blast
:::

1. [Relay Link](https://www.relay.link/bridge/astar-zkevm/) にアクセスし、あなたのEVMウォレットを接続します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Relaylink_1.png').default} width="70%" />

2. 資産を転送する**元のチェーン**を選択し、**転送先チェーン**として`Astar zkEVM`を選択します;

3. 転送したいETHの量を入力し、`Bridge`をクリックしてトランザクションを確認します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Relaylink_2.png').default} width="70%" />

4. ウォレットでトランザクションに署名します;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Relaylink_3.png').default} width="70%" />

5. トランザクションがネットワーク上で確認されると、EVMウォレットにブリッジされた資産が表示され、Astar zkEVMで使用する準備が整います;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Relaylink_4.png').default} width="70%" />










