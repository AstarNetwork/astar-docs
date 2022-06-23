---
sidebar_position: 4
---

# Gas Price API

## Overview

Gas is the unit of measure for how much computational work is required to process transactions and smart contracts. Essentially a transaction fee, the term originates from Ethereum, in which context it refers to computation undertaken on the Ethereum Virtual Machine (EVM). Since Ethereum was founded, numerous EVM-compatible networks have emerged and adopted similar models.

The term can be considered analogous to the gas that powers a car engine: it's the fluctuating, occasionally expensive cost of operation. More complex smart contracts require more gas to power their computation, just as a bigger, more powerful car takes more gas to run.

Gas price api is a service that allows you to get the various gas prices of the astar network for various transaction times. Gas fee are provided in wei.

## API

- Shibuya: <https://astar-gas-station.herokuapp.com/api/shibuya/gasnow>
- Shiden: <https://astar-gas-station.herokuapp.com/api/shiden/gasnow>
- Astar: <https://astar-gas-station.herokuapp.com/api/astar/gasnow>

## Response

```json
{
  "code": 200,
  "data": {
    "slow": 1265049135,
    "average": 2233842329,
    "fast": 10261948525,
    "timestamp": 1651782278481,
    "eip1559": {
      "priorityFeePerGas": {
        "slow": 265049135,
        "average": 1233842329,
        "fast": 9261948525
      },
      "baseFeePerGas": 1000000000
    }
  }
}
```

## Response parameters

- slow: The gas price for a transaction that takes a long time to execute.
- average: The gas price for a transaction that takes a medium time to execute.
- fast: The gas price for a transaction that takes a short time to execute.

- eip1559:

With EIP1559 transactions gas fee are divided in two parts: base fee and priority fee.

The Base Fee, which is determined by the network itself. And is same for a block.
Priority Fee, which is optional, determined by the user, is a tip to validators, and incentivizes them to prioritize your transaction.

EIP-1559's purpose is essentially to make gas fees more transparent and predictable for users. Previously, to have your transaction processed, you essentially had to 'bid' with a high enough total fee to make sure the miner was incentivized to pick up your transaction reasonably soon. This meant the market price was constantly moving according to demand.

- priorityFeePerGas: The variable part of the gas fee. Determined by the user.
- baseFeePerGas: The fixed part of the gas fee. Determined by the network.
