---
sidebar_position: 7
title: Astar zkEVM Fee Calculation
sidebar_label: Fee Calculation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How do network fees on Astar zkEVM work?
In Astar zkEVM the gas fee is calculated by applying a fixed factor over L1 gas fee. That price factor is a fixed value and doesn't change often and it's value is based the rollup's cost to publish tx to L1. To Simply put, gas prices in L2 will linearly follow gas prices in L1.

$$
L2_{gas\_fee} = L1_{gas\_fee} * Factor
$$

The L1 fee will vary depending on the amount of transactions on the L1. If the timing of your transaction is flexible, you can save costs by submitting transactions during periods of lower gas on the L1 (for example, over the weekend)

The support for congestion mechanism based EIP-1559 [here](https://eips.ethereum.org/EIPS/eip-1559) is planned for future and will make the L2 gas fee dynamic.

## Fetch gas price from RPC node
The gas price can be fetched from the Astar zkEVM Sequencer using the following RPC call:

```bash
curl https://rpc.zkatana.gelato.digital/ \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_gasPrice","params":[],"id":1,"jsonrpc":"2.0"}'
  ```

  The result is the hex value of the gas price in wei.

## Use Blockscout Price Oracle
Blockscout Price Oracle calculates the gas price from the average of previous blocks. It doesn't call `eth_gasPrice`. 
<Tabs>
<TabItem value="testnet" label="zKatana testnet" default>

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
<TabItem value="Mainnet" label="Astar zkEVM">
coming soon...
</TabItem>

</Tabs>

### The Price Oracle Response

An example JSON response from Blockscout Price Oracle will look like this:

```json
{
    "average":0.02,
    "fast":0.02,
    "slow":0.02,
}
```

- {`average`, `fast`, `slow`} are gas prices in Gwei, you can use these prices before sending the transaction off to Astar zkEVM.