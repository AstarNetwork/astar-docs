---
sidebar_position: 7
title: Astar zkEVM トランザクションコスト試算
sidebar_label: コストの試算
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Astar zkEVMの手数料はどのように動作するのか？
Astar zkEVMでは、L1のガス代に固定係数を適用してガス代を計算します。 その価格係数は固定の値で、あまり変化することはありません。また、その値はL1にトランザクションを発行するためにかかるロールアップのコストに基づいて決定されています。 簡単にいうと、L2のガス料金はL1のガス料金に比例するということです。

$$
L2_\{gas\_fee\} = L1_\{gas\_fee\} * Factor
$$

L1のガス代はL1のトランザクション量に応じて変化します。 もしトランザクションのタイミングが変更可能であれば、L1のガス代が低いタイミング(週末など)でトランザクションを送信することで手数料を削減できます。

ネットワークの混雑具合によりガス代が変化する構造に基づくEIP-1559 ([こちら](https://eips.ethereum.org/EIPS/eip-1559)) が将来的に実装され、L2のガス代が流動的になる可能性があります。

## RPCノードからガス料金を取得する
以下のRPCコールを用いてAstar zkEVMのシークエンサーからガス代を取得することができます：

```bash
curl https://rpc.zkatana.gelato.digital/ \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_gasPrice","params":[],"id":1,"jsonrpc":"2.0"}'
  ```

  16進数のガス料金がwei建てで返ってきます。

## BlockscoutのPriceオラクルを使用する
BlockscoutのPriceオラクルはこれまでのブロックの平均からガス料金を計算します。`eth_gasPrice`メソッドを呼び出すわけではありません。

<Tabs>
<TabItem value="Mainnet" label="Astar zkEVM" default>

GETリクエストを[Blockscout Price Oracle endpoint](https://zkatana.blockscout.com/api/v1/gas-price-oracle)に送信し、オラクルから推奨のガス料金を受け取ることができます。

#### cURL

```bash
curl https://astar-zkevm.explorer.startale.com/api/v1/gas-price-oracle
```

#### JavaScript

```javascript
fetch('https://astar-zkevm.explorer.startale.com/api/v1/gas-price-oracle')
  .then(response => response.json())
  .then(json => console.log(json))
```

#### Python

```python
import requests
requests.get('https://astar-zkevm.explorer.startale.com/api/v1/gas-price-oracle').json()
```
</TabItem>

<TabItem value="testnet" label="zKatana testnet">

Send a GET request to the [Blockscout Price Oracle endpoint](https://zkatana.blockscout.com/api/v1/gas-price-oracle) to get a gas price recommendation from this oracle.

#### cURL

```bash
curl https://zkatana.blockscout.com/api/v1/gas-price-oracle
```

#### JavaScript

```javascript
fetch('https://zkatana.blockscout.com/api/v1/gas-price-oracle')
  .then(response => response.json())
  .then(json => console.log(json))
```

#### Python

```python
import requests
requests.get('https://zkatana.blockscout.com/api/v1/gas-price-oracle').json()
```
</TabItem>

</Tabs>

### オラクルからのレスポンス

BlockscoutのオラクルからのJSONレスポンスは以下のようになります：

```json
{
    "average":3.02,
    "fast":3.02,
    "slow":3.02,
}
```

- {`average`, `fast`, `slow`} はGwei建てでのガス代になります。Astar zkEVMにトランザクションを送信する前にこの価格を参考にすることができます。
