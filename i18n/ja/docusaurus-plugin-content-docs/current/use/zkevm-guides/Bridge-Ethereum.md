---
sidebar_position: 2
title: Ethereum からAstar zkEVM へブリッジ
sidebar_label: Bridge Astar <> Ethereum
---

import Figure from "/src/components/figure"

# Ethereum および他の EVM ベースのチェーンから Astar zkEVM へのブリッジ

このページでは、**Astar zkEVM**と**Ethereum メインネット**および他の EVM ベースのチェーン間で`ETH`および他の`ERC20`資産を転送する方法について説明します。zkEVM への資産のブリッジには 2 つのオプションがあります。

## Astar Portal を使用した転送:

1. [Astar Portal](https://portal.astar.network/astar-zkevm/bridge/ethereum) にアクセスし、Astar zkEVM ネットワーク上であなたのウォレットを接続します。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_1.png').default} width="60%" />

2. ネットワークモーダルウィンドウを使用して Astar zkEVM ネットワークに切り替えるか、MetaMask を Astar zkEVM に切り替えます。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_2.png').default} width="70%" />

3. 左側の Bridge タブをクリックし、`Native Bridge` (_ERC20_) を選択します。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_3.png').default} width="100%" />

### EthereumからAstar zkEVMへ

1. **送信元ネットワーク**として `Ethereum` が選択されていること、そして**送信先ネットワーク**として `Astar zkEVM` が選択されていることを確認します。
転送するETHの量を入力した後、 `Bridge` ボタンを押します。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_4.png').default} width="100%" />

2. ウォレットでトランザクションに署名します。
3. Astar zkEVMで使用するために、MetaMaskにブリッジされた資産が表示されます。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_5.png').default} width="70%" />

:::info
転送には、Ethereumネットワークの使用状況に応じて、10分から30分かかる場合があります。

ウォレット拡張機能でトランザクションが確認されると、Astar PortalとMetaMaskがAstar zkEVMネットワーク上での残高を更新するまでに約**5-10分**かかります。
:::

### Astar zkEVMからEthereumへ

:::warning
これは二段階のプロセスであり、Ethereumのメインネットでトークンを請求し、対応するガス料金を支払う必要があります。
手数料をカバーするために、メインネット上に十分な `ETH` トークンを持っていることを確認してください。
:::

1. **送信元ネットワーク**として `Astar zkEVM` が選択されていること、そして**送信先ネットワーク**として `Ethereum` が選択されていることを確認します。 
転送するETHの量を入力した後、 `Bridge` ボタンを押します。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_6.png').default} width="100%" />

2. ウォレットでトランザクションに署名します。
3. トランザクションが送信されると、**履歴タブ**に表示されます。
4. Ethereum上でトークンを受け取るには、 `Claim` ボタンをクリックします。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_7.png').default} width="70%" />

5. ウォレットでトランザクションに署名します。
6. Ethereumで使用するために、MetaMaskにブリッジされた資産が表示されます。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Portal_8.png').default} width="70%" />

:::info 転送は、Ethereum ネットワークの使用状況により、10 分から 30 分かかることがあります。

トランザクションがあなたのウォレット拡張機能で確認されたら、Astar Portal と MetaMask が Astar zkEVM ネットワーク上のあなたの残高を更新するのに**約 5-10 分**かかります。
:::

## Layerswap を使用した転送:

2つ目のオプションは、**[Layerswap](https://www.layerswap.io/app?to=ASTARZK_MAINNET)** を使用することです。これは、中央集権型取引所、ブロックチェーン、銀行間で暗号資産を数分で転送する信頼できるソリューションです。[詳細情報](https://docs.layerswap.io/user-docs)。


*第三者のアプリケーションを利用することによって生じる直接的、間接的、偶発的、特別、結果的、または模範的な損害について、Astar Foundationは一切の責任を負わないことをご了承ください。*

:::info
現時点では、Layerswapはクロスチェーン転送に**ETHトークン**のみをサポートしています！
:::

1. [Layerswap](https://www.layerswap.io/app?to=ASTARZK_MAINNET)  にアクセスし、あなたのEVMウォレットを接続してください。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Layerswap_1.png').default} width="80%" />

2. 資産を転送したい**送信元ネットワーク**または**中央集権型取引所**を選択し、**送信先ネットワーク**には `Astar zkEVM` を選択します。
3. 転送したいETHの量を入力します。また、資産を送信したいアドレスも選択できます。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Layerswap_2.png').default} width="80%" />

4. `Swap now` をクリックしてトランザクションを確認します。

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_Layerswap_3.png').default} width="80%" />

5. ウォレットでトランザクションに署名します。
6. ネットワーク上でトランザクションが確認されたら、Astar zkEVMで使用する準備ができたEVMウォレットにブリッジされた資産が表示されます。