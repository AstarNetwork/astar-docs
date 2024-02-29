---
sidebar_position: 0
title: Astar zkEVM へのブリッジ
sidebar_label: zkEVMへのブリッジ
---
import bridge1 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya1.jpg'
import bridge2 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya2.jpg'
import bridge3 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya3.jpg'
import bridge4 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya4.jpg'
import network from '/docs/build/zkEVM/img/zKatana-network1.jpg'
import network1 from '/docs/build/zkEVM/img/add_zkEVM_network1.jpg'
import network2 from '/docs/build/zkEVM/img/add_zkEVM_network2.jpg'
import walletselect from '/docs/build/zkEVM/img/wallet-select.jpg'

## 概要

ここでは、Astar zkEVM へのアセットのブリッジ方法をご紹介します。 現在、zkEVM にアセットをブリッジするには 2 つの方法があります：

1. Ethereum L1 から Astar zkEVM へのブリッジ → ブリッジされた ETH は、Astar zkEVM 上での dApps のテストおよびデプロイに必要なネイティブトークンです。したがって、ネットワークを使用する前に、開発者は Layer 1 から Layer 2 へ ETH をブリッジする必要があります。 Astar Portal を介した Ethereum(Layer 1)から Astar zkEVM(Layer 2)へのブリッジがあり、ネットワークの混雑具合に応じておよそ10〜30 分かかります。
2. Astar Parachain から Astar zkEVMへのブリッジ (現在開発中) → Astar Substrate EVMとAstar zkEVMの間での、ラップされたアセットのロックとミントを容易にする、サードパーティのアセットブリッジやメッセージネットワーク サードパーティのブリッジサービスおよび互換性のあるアセットの使用方法に関する詳細は、[integrations section](/docs/build/zkEVM/integrations/bridges-relays/) をご覧ください。

### Astar Portalを用いたETHの送金

[Astar Portal](https://portal.astar.network)を検索し、MetaMask を接続してください。

<div style={{textAlign: 'center'}}>
  <img src={walletselect} style={{width: 400}} />
  </div>

ネットワーク選択から、zKatana network に切り替えてください。もしくは MetaMask に zKatana network への切り替えを許可してください。

<div style={{textAlign: 'center'}}>
  <img src={network} style={{width: 400}} />
  </div>

左側のタブで「Bridge」をクリックしてください。 Bridge のソースとして Sepolia が選択されていることを確認し、また送金先として zKatana が選択されていることを確認してください。 送金する ETH の金額を入力したら、「Confirm」ボタンを押してください。

<div style={{textAlign: 'center'}}>
  <img src={bridge2} style={{width: 1000}} />
  </div>

MetaMaskでトランザクションに署名してください。

:::note
MetaMask のアクティビティタブ上でトランザクションが confirmed として表示されてから、Astar Portal と MetaMask 上で zKatana ネットワークの残高が更新されるまでおよそ 5 -10 分ほどかかります。
:::

<div style={{textAlign: 'center'}}>
  <img src={bridge3} caption="Confirming" style={{width: 1000}} />
  </div>
<div style={{textAlign: 'center'}}>
  <img src={bridge4} caption="Confirmed" style={{width: 1000}} />
  </div>

Astar zkEVM 上で使用可能な ETH が ブリッジされていることがMetaMask 上でご確認いただけるでしょう。
