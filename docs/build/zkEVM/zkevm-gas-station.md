---
sidebar_position: 6
title: Astar zkEVM Gas Station
sidebar_label: zkEVM Gas Station
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The goal of **Astar zkEVM Gas Station** is to provide dApp developers with gas pricing suggestions so they can use them before sending transactions to the **Astar zkEVM** network.

## Usage

<Tabs>
<TabItem value="testnet" label="zKatana testnet" default>

Send a GET request to the [zKatana Gas Station endpoint](https://zkatana.explorer.startale.com/api/v1/gas-price-oracle) to get a gas price recommendation from this oracle.

#### cURL

```bash
curl https://zkatana.explorer.startale.com/api/v1/gas-price-oracle
```

#### JavaScript

```javascript
fetch('https://zkatana.explorer.startale.com/api/v1/gas-price-oracle')
  .then(response => response.json())
  .then(json => console.log(json))
```

#### Python

```python
import requests
requests.get('https://zkatana.explorer.startale.com/api/v1/gas-price-oracle').json()
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

- {`average`, `fast`, `slow`} are gas prices in Gwei, you can use these prices before sending the transaction off to Astar zkEVM, depending upon your needs