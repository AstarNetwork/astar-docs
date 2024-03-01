---
sidebar_position: 0
title: Astar zkEVM パーミッションレス RPCノードのセットアップ
sidebar_label: zkEVM RPCのセットアップ
---

## 概要

オペレータは、パーミッションレスRPCノードを**Astar zkEVM**にデプロイできます。

DAppプロジェクトは、公共インフラに頼らず、必要なブロックチェーンデータを取得するために独自のRPCノードを実行する必要があります。 公開されているエンドポイントは、接続しているユーザーが多いため、応答が遅くなることがあり、アクセスの頻度が制限されています。

## Requirements

### System

:::note
ネットワークが拡大するにつれて、ストレージスペースの要件が増大します。
:::

- 16GB RAM
- 4コアのCPU
- 100GBのストレージ (時間の経過とともに増加します)

### Prerequisites

このチュートリアルでは、コンピューターに `docker` と `docker-compose` がインストールされている必要があります。 インストールされていない場合は、以下のリンクを確認してください:

- [https://www.docker.com/get-started](https://www.docker.com/get-started)
- [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

### イーサリアムRPCノード

**Astar zkEVM** ノードを実行するには、Ethereum RPCノードが必要です。
Ethereum RPCの実行には2つのオプションがあります:

- 独自の設定 - [Geth client](https://geth.ethereum.org/docs/getting-started/installing-geth) はその一例です。
- RPCプロバイダーのエンドポイントを使用する - Astar上で開発するデベロッパーは、特別なオファーやプロモーションを受けることができます。

このドキュメントでは、Ethereumノードのインストールについて説明していません。 このドキュメントでは公開されているRPCエンドポイントを使用します。しかし、**これはプロダクトレベルでは実行可能ではない**ことに留意してください。公開されているエンドポイントにはアクセス頻度に制限があり、結果としてAstar zkEVMノードが正しく同期しない可能性があります。

## zkNode の設定

このセクションでは、**Astar zkEVM** RPCノードの機能に必要な5つのコンテナを起動します。

- zkevm-rpc
- zkevm-sync
- zkevm-state-db
- zkevm-pool-db
- zkevm-prover

このDocsの執筆時点で、**zKatana testnet** は **Astar zkEVM** に利用可能な唯一のネットワークです。 そしてL1のイーサリアム**セポリアテストネット**に接続されています。

zKatana testnet上で開発していきましょう。

設定、インストール、およびデータ専用のディレクトリをそれぞれ作成します。

```bash
sudo mkdir -p /etc/zkevm/{install,config} && sudo chown -R $USER:$USER /etc/zkevm
sudo mkdir -p /var/lib/zkevm/{statedb,pooldb} && sudo chown -R $USER:$USER /var/lib/zkevm/
```

ローカル変数を設定します。

```
# define installation and config path
ZKEVM_NET=testnet
ZKEVM_DIR=/etc/zkevm/install
ZKEVM_CONFIG_DIR=/etc/zkevm/config
```

アーティファクトをダウンロードし、抽出します。

```bash
wget https://shared-assets.astar.network/files/zkevm/zkatana/zkatana.tar.gz
tar -xf zkatana.tar.gz -C $ZKEVM_DIR && rm zkatana.tar.gz
```

envファイルをコピーし、L1のRPCのURLを編集します。

```bash
cp $ZKEVM_DIR/$ZKEVM_NET/example.env $ZKEVM_CONFIG_DIR/.env
nano $ZKEVM_CONFIG_DIR/.env
```

パラメータを変更します。

```bash
# Use your own Sepolia RPC URL here!!
ZKEVM_NODE_ETHERMAN_URL = "https://eth-sepolia-public.unifra.io"
```

ノードの設定ファイルを編集します。

```bash
nano $ZKEVM_DIR/$ZKEVM_NET/config/environments/$ZKEVM_NET/node.config.toml
```

次のパラメータを変更します。セキュリティを強化するために、データベースのデフォルトのユーザーおよびパスワードを変更することもできます。

```
[Etherman]
# Set your own Sepolia RPC URL
URL = "https://eth-sepolia-public.unifra.io"

# Enable if you want to exploit metrics from nodes
[Metrics]
Enabled = true
```

コンテナを起動します。

```bash

# start all the containers
sudo docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d
# or start containers on by one
sudo docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d <container-name>
```

すべてのコンテナが起動し、動作していることを確認します。ステータスがUpになっているコンテナが5つ表示されるはずです。

```bash
sudo docker ps
```

これで**Astar zkEVM** RPCノードがポート8545上で動作するようになりました。あとは同期するのを待つだけです。

## RPCを使用する

コンテナログを表示します。

```bash
sudo docker logs -fn30 <container-name>
```

RPCリクエストをテストします。

```bash
# Get the chain Id
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "eth_chainId", "params": []}' http://localhost:8545
# Expected response
{"jsonrpc":"2.0","id":1,"result":"0x133e40"}
# Get the latest block
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "eth_getBlockByNumber", "params": ["latest", false]}' http://localhost:8545
```

コンテナを停止します。

```bash
sudo docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml down
```

## その他

### トレーシングを有効にする

RPCでトレース機能（`debug`と`txpool`モジュール）を有効にするには、`docker-compose`ファイルの`zkevm-rpc`コンテナに次のコマンドを追加します：

```
--http.api=eth,net,debug,zkevm,txpool,web3
```

### 外部からのアクセス

RPCエンドポイントのURLを外部から利用できるようにするには、HTTPサーバーを追加することをお勧めします。
nginx serverをインストールするには、[nginx server セクション](/docs/build/nodes/archive-node/nginx)を参照してください。
