---
sidebar_position: 2
---

# Gas/Tip API

## Overview

Gas is the unit of measure for the amount of computational resources will be required to process transactions and smart contracts. Essentially a transaction fee, the term originated from Ethereum, in which context it refers to computation undertaken on the Ethereum Virtual Machine (EVM). Since Ethereum was founded, numerous EVM-compatible networks have emerged and adopted similar models.

The term can be considered analogous to the gas that powers a car engine: it's the fluctuating, occasionally expensive cost of operation. More complex smart contracts require more gas to power their computation, just as a bigger, more powerful car takes more gas to run.

The gas price api is a service that allows you to obtain the various gas prices of the Astar network for various transaction times. Gas fee are provided in wei.

Tips are used for native transaction. Tips are an optional transaction fee that users can add. Tips are not part of the inclusion fee and are an incentive to block authors for prioritizing a transaction, and the entire tip goes directly to the block author.


## GAS API

- Shibuya: <https://gas.astar.network/api/gasnow?network=shibuya&type=gas>
- Shiden: <https://gas.astar.network/api/gasnow?network=shiden&type=gas>
- Astar: <https://gas.astar.network/api/gasnow?network=astar&type=gas>

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

- slow: This is the price of gas for a transaction that will take a long time to execute.
- average: This is the price of gas for a transaction that will take a medium amount of time to execute.
- fast: This is the price of gas for a transaction that will take a short amount of time to execute.

## EIP1559:

With EIP1559 transactions, gas fees are divided into two parts: the base fee and priority fee.

The Base Fee, which is determined by the network itself, is the same for each block.
The Priority Fee, which is optional, and determined by the user, is a tip to validators, and incentivizes them to prioritize the transaction.

EIP-1559's purpose is essentially to make gas fees more transparent and predictable for users. Previously, users would 'bid' with a high enough total fee to ensure miners were incentivized to pick up your transaction in a reasonable amount of time. This meant the market price was highly volatile in correspondence to demand.

- priorityFeePerGas: The variable part of the gas fee. Determined by the user.
- baseFeePerGas: The fixed part of the gas fee. Determined by the network.

### Tip API

- Shibuya: <https://gas.astar.network/api/gasnow?network=shibuya&type=tip>
- Shiden: <https://gas.astar.network/api/gasnow?network=shiden&type=tip>
- Astar: <https://gas.astar.network/api/gasnow?network=astar&type=tip>

Response
```
{
    "code":200,
    "data":{
        "tip":{
            "slow":"746510000000",
            "average":"4119200000000",
            "fast":"8501250000000"
        }
    }
}
```

- **slow**: The tip for a transaction that takes a long time to execute.
- **average**: The tip for a transaction that takes a medium time to execute.
- **fast**: The tip for a transaction that takes a short time to execute.