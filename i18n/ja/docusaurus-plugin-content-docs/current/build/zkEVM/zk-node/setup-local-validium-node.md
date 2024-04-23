---
sidebar_position: 1
title: ローカル Validium ノードのセットアップ
sidebar_label: ローカル Validium ノードのセットアップ
---

import cdk1 from '/docs/build/zkEVM/img/add-cdk-1.png'
import cdk2 from '/docs/build/zkEVM/img/add-cdk-2.png'
import cdk3 from '/docs/build/zkEVM/img/add-cdk-3.png'
import cdk4 from '/docs/build/zkEVM/img/add-cdk-4.png'
import cdk5 from '/docs/build/zkEVM/img/add-cdk-5.gif'
import cdk6 from '/docs/build/zkEVM/img/add-cdk-6.gif'
import cdk7 from '/docs/build/zkEVM/img/add-cdk-7.png'
import cdk8 from '/docs/build/zkEVM/img/add-cdk-8.png'
import cdk9 from '/docs/build/zkEVM/img/add-cdk-9.png'
import cdk10 from '/docs/build/zkEVM/img/add-cdk-10.png'
import cdk11 from '/docs/build/zkEVM/img/add-cdk-11.png'
import cdk12 from '/docs/build/zkEVM/img/add-cdk-12.png'
import cdk13 from '/docs/build/zkEVM/img/add-cdk-13.png'
import cdk14 from '/docs/build/zkEVM/img/add-cdk-14.png'
import cdk15 from '/docs/build/zkEVM/img/add-cdk-15.png'


## Validium

このクイックスタートガイドでは、ローカルマシン上にCDK Validiumを設定し、以下のコンポーネントを設定して実行する方法を示します：

- zkEVM データベース: データノード、イベント、エクスプローラーL1およびL2、プール、状態、ブリッジサービス
- zkEVM ノードコンポーネント: アグリゲーター、アプルーブサービス、シーケンサーとシーケンスセンダー、シンクロナイザー
- L1 network (mock)
- プローバー
- エクスプローラー L1, L2
- JSON RPC エクスプローラー
- L2 ガスプライサー
- DAC: データ可用性サービス、DACセットアップ委員会
- zkEVMブリッジサービスとUI

:::note 

このドキュメンテーションでは、標準的なデプロイメントを説明しています。
設定ファイルを編集して独自の設定を実装します。

:::

## 前提条件

### ハードウェア要件

- Linux ベース OS OS (e.g., Ubuntu Server 22.04 LTS).
- 少なくとも 16GB RAM と 4 コア CPU.
- AMD64 アーキテクチャシステム.

:::caution

CDKはARMベースのMacをサポートしていません。

:::

### ソフトウェア要件

現在の環境のチュートリアルでは、あらかじめマシンに`go`と`docker`がインストールされている必要があります。これらがインストールされていない場合は、以下のリンクをご覧ください：

- [Go](https://go.dev/doc/install)
- [Docker and Docker compose](https://docs.docker.com/engine/install/ubuntu/)

:::note 

このドキュメントでは、docker compose v2を使用しています。

:::

## make をインストール

Ubuntuでmakeをインストール: 
```bash
sudo apt install make
```

## リポジトリのクローン

以下のコマンドを実行：

```bash
git clone https://github.com/Snapchain/zkValidium-quickstart.git
cd zkValidium-quickstart
```

例をコピーして`.env`ファイルを作成：
```bash
cp .env.example .env
```

## ローカルで Validium を起動

Docker Hubから必要なDockerイメージをプル：
```bash
sudo docker compose pull
```

イメージをプルした後、ローカルのCDK validiumを起動：
```bash
sudo make run
```

すべてのサービスが正常に動作していることを確認するため、各コンテナのステータスを確認：
```bash
sudo docker compose ps
```

このような出力が表示されます：
<details>
<summary>コンテナのステータス詳細</summary>

```bash
$ sudo docker ps --format "table {{.Names}}\t{{.Command}}\t{{.Status}}\t{{.Ports}}"
NAMES                              COMMAND                  STATUS                    PORTS
explorer-sig-provider              "./sig-provider-serv…"   Up 11 minutes             0.0.0.0:8151->8050/tcp, :::8151->8050/tcp
visualizer-proxy                   "/docker-entrypoint.…"   Up 11 minutes             80/tcp, 0.0.0.0:8083->8081/tcp, :::8083->8081/tcp
explorer-visualizer                "./visualizer-server"    Up 11 minutes             0.0.0.0:8152->8050/tcp, :::8152->8050/tcp
explorer-smart-contract-verifier   "./smart-contract-ve…"   Up 11 minutes             0.0.0.0:8150->8050/tcp, :::8150->8050/tcp
explorer-proxy-l2                  "/docker-entrypoint.…"   Up 11 minutes             0.0.0.0:80->80/tcp, :::80->80/tcp, 0.0.0.0:8084->8080/tcp, :::8084->8080/tcp
explorer-stats-l2                  "./stats-server"         Up 11 minutes             0.0.0.0:8154->8050/tcp, :::8154->8050/tcp
explorer-stats-db-l2               "docker-entrypoint.s…"   Up 11 minutes             0.0.0.0:7434->5432/tcp, :::7434->5432/tcp
explorer-frontend-l2               "./entrypoint.sh nod…"   Up 11 minutes             0.0.0.0:3001->3000/tcp, :::3001->3000/tcp
explorer-backend-l2                "sh -c 'bin/blocksco…"   Up 11 minutes             0.0.0.0:4001->4000/tcp, :::4001->4000/tcp
zkevm-explorer-json-rpc            "/bin/sh -c '/app/zk…"   Up 11 minutes             0.0.0.0:8124->8124/tcp, :::8124->8124/tcp, 8123/tcp, 0.0.0.0:8134->8134/tcp, :::8134->8134/tcp
explorer-backend-l2-db             "docker-entrypoint.s…"   Up 11 minutes             0.0.0.0:5437->5432/tcp, :::5437->5432/tcp
explorer-proxy-l1                  "/docker-entrypoint.…"   Up 11 minutes             0.0.0.0:81->80/tcp, :::81->80/tcp, 0.0.0.0:8082->8080/tcp, :::8082->8080/tcp
explorer-stats-l1                  "./stats-server"         Up 12 minutes             0.0.0.0:8153->8050/tcp, :::8153->8050/tcp
explorer-stats-db-l1               "docker-entrypoint.s…"   Up 12 minutes             0.0.0.0:7433->5432/tcp, :::7433->5432/tcp
explorer-frontend-l1               "./entrypoint.sh nod…"   Up 12 minutes             0.0.0.0:3000->3000/tcp, :::3000->3000/tcp
explorer-backend-l1                "sh -c 'bin/blocksco…"   Up 12 minutes             0.0.0.0:4000->4000/tcp, :::4000->4000/tcp
explorer-backend-l1-db             "docker-entrypoint.s…"   Up 12 minutes             0.0.0.0:5436->5432/tcp, :::5436->5432/tcp
zkevm-bridge-ui                    "/bin/sh /app/script…"   Up 12 minutes             0.0.0.0:8088->80/tcp, :::8088->80/tcp
zkevm-bridge-service               "/bin/sh -c '/app/zk…"   Up 12 minutes             0.0.0.0:8080->8080/tcp, :::8080->8080/tcp, 0.0.0.0:9090->9090/tcp, :::9090->9090/tcp
zkevm-bridge-db                    "docker-entrypoint.s…"   Up 12 minutes             5438/tcp, 0.0.0.0:5438->5432/tcp, :::5438->5432/tcp
zkevm-json-rpc                     "/bin/sh -c '/app/zk…"   Up 12 minutes             0.0.0.0:8123->8123/tcp, :::8123->8123/tcp, 0.0.0.0:8133->8133/tcp, :::8133->8133/tcp, 0.0.0.0:9091->9091/tcp, :::9091->9091/tcp
zkevm-aggregator                   "/bin/sh -c '/app/zk…"   Up 12 minutes             8123/tcp, 0.0.0.0:50081->50081/tcp, :::50081->50081/tcp, 0.0.0.0:9093->9091/tcp, :::9093->9091/tcp
zkevm-l2gaspricer                  "/bin/sh -c '/app/zk…"   Up 12 minutes             8123/tcp
zkevm-sequence-sender              "/bin/sh -c '/app/zk…"   Up 12 minutes             8123/tcp
zkevm-sequencer                    "/bin/sh -c '/app/zk…"   Up 12 minutes             0.0.0.0:6060->6060/tcp, :::6060->6060/tcp, 0.0.0.0:6900->6900/tcp, :::6900->6900/tcp, 8123/tcp, 0.0.0.0:9092->9091/tcp, :::9092->9091/tcp
zkevm-eth-tx-manager               "/bin/sh -c '/app/zk…"   Up 12 minutes             8123/tcp, 0.0.0.0:9094->9091/tcp, :::9094->9091/tcp
zkevm-sync                         "/bin/sh -c '/app/zk…"   Up 12 minutes             8123/tcp, 0.0.0.0:9095->9091/tcp, :::9095->9091/tcp
zkevm-prover                       "zkProver -c /usr/sr…"   Up 12 minutes             0.0.0.0:50061->50061/tcp, :::50061->50061/tcp, 0.0.0.0:50071->50071/tcp, :::50071->50071/tcp
zkevm-data-availability            "/bin/sh -c '/app/cd…"   Up 12 minutes             0.0.0.0:8444->8444/tcp, :::8444->8444/tcp
zkevm-data-node-db                 "docker-entrypoint.s…"   Up 12 minutes (healthy)   0.0.0.0:5444->5432/tcp, :::5444->5432/tcp
zkevm-mock-l1-network              "geth --http --http.…"   Up 12 minutes             0.0.0.0:8545-8546->8545-8546/tcp, :::8545-8546->8545-8546/tcp, 30303/tcp, 30303/udp
zkevm-event-db                     "docker-entrypoint.s…"   Up 12 minutes             0.0.0.0:5435->5432/tcp, :::5435->5432/tcp
zkevm-pool-db                      "docker-entrypoint.s…"   Up 12 minutes             0.0.0.0:5433->5432/tcp, :::5433->5432/tcp
zkevm-state-db                     "docker-entrypoint.s…"   Up 12 minutes             0.0.0.0:5432->5432/tcp, :::5432->5432/tcp
```
</details>


サービスが動作していない場合（つまり、 **Exit 1** の状態にある場合）、ログを使用してさらに調査：
```bash
sudo docker compose logs <container_name>
```
:::info

dockerコマンドの出力で **\<container_name>** を見つけます。

:::

### 便利なコマンド

CDK Validiumを停止するには：
```bash
sudo make stop
```

すべてのサービスを再起動するには：
```bash
sudo make restart
```

:::note

このローカルデプロイメントはL1 Gethインスタンスで動作します。

:::

 ## Validium をテスト

[localhost](http://localhost) に移動してブロックエクスプローラが動作していることを確認します。

次のようなページが表示されます：

<div style={{textAlign: 'center'}}>
  <img src={cdk1} style={{width: 1000}} />
</div>


## Web3ウォレットにネットワークを追加

MetaMaskの手順に従って、[ネットワークを手動で設定](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)します。

- チェーンIDを **1001** に設定します
- 通貨記号は何でも良いですが、デフォルトでは **POL** を使用します
- RPCノードとブロックエクスプローラのコンテナはそれぞれポート **8123** と **80** で見つけることができます

<div style={{textAlign: 'center'}}>
  <img src={cdk2} style={{width: 1000}} />
</div>

新しいネットワークに切り替えます：

<div style={{textAlign: 'center'}}>
  <img src={cdk3} style={{width: 1000}} />
</div>

:::important

- テスト資金が入ったアカウントが利用可能で、プライベートキーは `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80` です
- このプライベートキーに関連付けられたアドレスには、絶対に実際の資産を送信しないでください

:::

[アカウントをMetaMaskにインポートします](https://support.metamask.io/hc/en-us/articles/360015489331-How-to-import-an-account)。残高は100000 POLと表示されます：

<div style={{textAlign: 'center'}}>
  <img src={cdk4} style={{width: 1000}} />
</div>

トークンを別のアカウントに送信します：

<div style={{textAlign: 'center'}}>
  <img src={cdk5} style={{width: 1000}} />
</div>

トランザクションを確認した後、更新された残高を確認します：

<div style={{textAlign: 'center'}}>
  <img src={cdk6} style={{width: 1000}} />
</div>

MetaMaskの **エクスプローラーで表示（View on explorer）** をクリックすることで、トランザクションの詳細を表示することもできます：

<div style={{textAlign: 'center'}}>
  <img src={cdk7} style={{width: 1000}} />
</div>

<br/><br/>

:::warning[Metamaskでの取引が詰まる問題のトラブルシューティング]

取引が詰まる問題に遭遇した場合、それはおそらくnonce設定が間違っているためです。

この問題を解決するためには、以下の手順を実行します：

1. MetaMaskを開き、アカウントに移動します
2. 「設定」をクリックします
3. 設定メニューで「高度な設定」を選択します
4. 「アクティビティとナンスデータを消去」のオプションを探し、それをクリックします
5. 多くの場合、これによりアカウントに関連付けられたnonceデータがリセットされ、取引関連の問題が解決します

:::

## ブリッジをテスト

CDKには、L1とL2 Validium 間で資金を移動できるネイティブブリッジとUIがあります。

### L1 to L2

MetaMaskにL1 RPCを追加します：

<div style={{textAlign: 'center'}}>
  <img src={cdk8} style={{width: 1000}} />
</div>

L1ネットワークに切り替えると、以前にインポートしたアカウントがL1チェーン上で約999 POLを持っていることがわかります。

[localhost:8088](http://localhost:8088/) に移動して、ブリッジUIを確認します。

**Connect a wallet > MetaMask** をクリックします。

:::note 

このビューは2回目以降は表示されません。

:::

<div style={{textAlign: 'center'}}>
  <img src={cdk9} style={{width: 1000}} />
</div>

以前にインポートしたアカウント`0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`を選択します。接続が完了すると、このようなページが表示されます。

<div style={{textAlign: 'center'}}>
  <img src={cdk10} style={{width: 1000}} />
</div>

ブリッジする金額（例：5）を入力し、 **Continue** をクリックします。あなたが何をしているかを理解したことを確認した後、 **ブリッジの確認** ページが表示されます。

**Bridge** をクリックし、MetaMaskのポップアップでトランザクションを承認します：

<div style={{textAlign: 'center'}}>
  <img src={cdk11} style={{width: 1000}} />
</div>

ブリッジが完了すると、 **アクティビティ** ページが表示されます。

<div style={{textAlign: 'center'}}>
  <img src={cdk12} style={{width: 1000}} />
</div>

### L2 から L1 へ

MetaMaskのネットワークをあなたのValidiumチェーンに切り替え、[localhost:8088](http://localhost:8088/)に戻ります。

更新されたL1とL2の残高が表示されます。

<div style={{textAlign: 'center'}}>
  <img src={cdk13} style={{width: 1000}} />
</div>

金額を入力し、同じプロセスを経て、資金をL1に戻すためのブリッジを作成します。

:::note 

あなたは、前にL1からL2にブリッジしたもの以上の資金を戻すことはできません。

:::

L2からL1へのブリッジは、L1からL2へのものとは少し異なり、トランザクションが実行された後には、このような **アクティビティ** ページが表示されます：

<div style={{textAlign: 'center'}}>
  <img src={cdk14} style={{width: 1000}} />
</div>

**Finalise** をクリックし、トランザクションを承認します（注：MetaMaskは、最初にL1ネットワークに切り替えるようにとのウィンドウをポップアップします）。その後、ブリッジが完了したら、このように表示されます：

<div style={{textAlign: 'center'}}>
  <img src={cdk15} style={{width: 1000}} />
</div>
