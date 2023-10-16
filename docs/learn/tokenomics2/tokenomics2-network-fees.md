---
sidebar_position: 2
---
# Fee Model

Fees on Astar comprise of Native (Substrate) fees and Ethereum fees.

Native (Substrate) and Ethereum transaction fees are calculated in inherently different ways, and in Astar Network's legacy tokenomics the cost of transactions between the two systems differed significantly.

The goal of Tokenomics 2.0 is to align the fees calculation between the two systems so that transactions consuming the same amount of block resources are priced roughly the same if executed as a Native or as an Ethereum transaction. 

Remainter of the section describes Tokenomics 2.0 fee model calulation details as well as the way the alignment of the fees between the two systems is gradually introduced over a period of time.

## Native Fees

Native fees are applied to transactions native to Substrate. For example, balance transfer, using dApp staking, creating a multisig, voting on a referendum, etc.

Fees are calculated using a [model](https://research.web3.foundation/Polkadot/overview/token-economics#adjustment-of-fees-over-time) commonly used by Polkadot and (probably) all parachains. 

$$
native\_fee = base\_fee + c * weight\_fee + length\_fee + rent\_fee + tip
$$

where following applies:

$$
\begin{aligned}

base\_fee = weight_{factor}
\newline\newline
weight\_fee = weight_{factor} * transaction_{factor} weightbaseweight`
\newline\newline
lengthfee=lengthfactor*transactionlength
\newline\newline
used gas=total consumed gas
\newline\newline
rent fee=storage items*price per item+storage bytes*price per byte

\end{aligned}
$$

- `base_fee` - a fixed fee that needs to be paid for every transaction included in the block.
- `weight_fee` - is the fee related to the weight of the transaction. More details about the weight of native transactions and accompanying fees can be found the [in the Build section](/docs/build/wasm/transaction-fees#weight)
- `c` - fee multiplier; if network utilization is above ideal, `c` factor will increase, forcing users to pay more.
- `length_fee` - this is part of the fee related to the transaction length (number of bytes).
- `rent_fee` - deposit fee for storing data on chain. Detailed explanation of rent fee calculation in case of Wasm tranactions can be found under the [in the Build section](/docs/build/wasm/transaction-fees#storage-rent)
- `tip` - extra payment transaction submitter pays to ensure their transaction gets included faster into a block.

Native fees are inherently dynamic using the fee multiplies `c` which is calculated in each block using the following formula:

$$
c_{n} = c_{n-1} * (1 + adjustment + \frac{adjustment^2}{2})
$$

where 

$$
adjustment = v * (s - s^*)
$$

With several configuration parameters:

- `s*` - ideal block fullnes; desired long term average block fullness.
- `v` - variability factor; controls how fast the adjustment factor changes. If value is small, it will adjust slowly, and if it is large, it will adjust quickly.
- `minimum factor` - the smallest possible value of the adjustment factor `c`
- `maximum factor` - the largest possible value of the adjustment factor `c`

and using `s` to describe current block fullness:
- If `s > s*`, meaning block fullness if **more** than the ideal, the adjustment will be a positive number.
- If `s < s*`, meaning block fullness is **less** than the idea, the adjustment will be a negative number.

Based on the network usage (congestion), factor `c` will either increase or decrease from block to block. If network is used heavily and blocks are full, it will increase, scaling up the weight fee and thus making the transactions more expensive. If network congestion is below the ideal the fee multiplier will decrease, making transactions less expensive.


## Ethereum Fees

Astar is fully Ethereum compatible. This means it also supports Ethereum’s gas concept. Gas is similar to weight but not quite the same. As a result, Ethereum transaction fees are calculated a bit differently. A simplified formula looks like this:

`tx_fee = gas * (base_fee_per_gas + priority_fee_per_gas)`

- `gas` - encapsulates all the resources spent to execute the block.
- `base_fee_per_gas` - how much needs to be paid by the user per unit of gas.
- `priority_fee_per_gas` - how much is the user tipping each unit of gas.

Comparing it with the previous example using native fees, it’s clear that Ethereum transactions are quite different. They are less configurable, and more information is abstracted from the user. One of the important differences is the non-existance of rent fees: when storage is created, the price of that storage is included in the gas fee, and even if some storage is removed later on, the user doesn’t receive a refund.

In order to align fees between two different systems, Ethereum fee formula is adjusted in a way that base fee per gas becomes a dynamic paramter calculated.


base fee per gasn=base fee per gasn-1*(1+adjustment+m*adjustment22)


Old parameters
New parameters.

## Fee Model Parameters

| Variable name                    | Description     |
| -------------------------------- | --------------- |
| baseweight                       | 98 974 000      |
| weightfactor                     | 0.0001          |
| lengthfactor                     | 0.00001         |
| max block normal dispatch weight | 375 000 000 000 |
| blockfullness (s)                | Formula (11)    |
| ideal blockfullness (s\*)        | 0.25            |
| adjustment                       | Formula (12)    |
| variabilityfactor   (v)          | 0.00001         |
| adjustment factor (c)            | Formula (13)    |
| min adjustment factor (cmin)     | 10\-9           |
| max adjustment factor (cmax)     | 3.4\*1020       |
| price per item                   | 0.4             |
| price per byte                   | 0.002           |
| base fee per gas                 | 10\-9           |


## Fee Alignment Transition Period

These fee changes won’t happen overnight. Instead, they will be implemented gradually over a period of time (e.g. 3 months). The fees being burned will be increased to 80%, with 20% being deposited to the collators. This does not include the tip portion that will be paid out to collators in full.


