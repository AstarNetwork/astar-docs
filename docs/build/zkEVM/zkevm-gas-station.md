---
sidebar_position: 6
title: Blockscout zkEVM Gas Oracle
sidebar_label: zkEVM Gas Oracle
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The **Blockscout Price Oracle** provides gas pricing suggestions which can be used by dApp developers before sending transactions to the **Astar zkEVM** network.

## Usage
Blockscout Price Oracle takes the values from the average of previous blocks. It does't call `eth_gasPrice`. 
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

## Interpretation

An example JSON response will look like this.

```json
{
    "average":0.02,
    "fast":0.02,
    "slow":0.02,
}
```

- {`average`, `fast`, `slow`} are gas prices in Gwei, you can use these prices before sending the transaction off to Astar zkEVM.