---
sidebar_position: 2
---

import Figure from "/src/components/figure"


# Fee Model

Fees on Astar comprise of Native (Substrate) and EVM fees. Native and EVM transaction fees are calculated in different ways. Tokenomics 2.0 aligns the fees calculation between the two systems so that transactions consuming the same amount of block resources are priced roughly the same regardless of transaction type (Native or EVM).

This section describes Tokenomics 2.0 fee model calulation details.

## Native Fees

Native fees are applied to transactions native to Substrate. For example, balance transfer, using dApp staking, creating a multisig, voting on a referendum, etc.

Fees are calculated using a [model](https://research.web3.foundation/Polkadot/overview/token-economics#adjustment-of-fees-over-time) commonly used by Polkadot and (probably) all parachains:

$$
\begin{align}
native\_fee &= base\_fee + c * weight\_fee + length\_fee + rent\_fee + tip
\end{align}
$$

where following applies:

$$
\begin{align}
weight\_fee &= weight_{factor} * \frac{transaction_{weight}}{base_{weight}}
\\
length\_fee &= length_{factor} * transaction\_length
\\
rent\_fee &= storage\_items*price\_per\_item + storage\_bytes*price\_per\_byte
\end{align}
$$

- $base\_fee$ - a fixed fee that needs to be paid for every transaction included in the block.
- $weight\_fee$ - is the fee related to the weight of the transaction. More details about the weight of native transactions and accompanying fees can be found the [in the Build section](/docs/build/wasm/transaction-fees#weight).
- $c$ - fee multiplier; if network utilization is above ideal, `c` factor will increase, forcing users to pay more.
- $length\_fee$ - this is part of the fee related to the transaction length (number of bytes).
- $rent\_fee$ - deposit fee for storing data on chain. Detailed explanation of rent fee calculation in case of Wasm tranactions can be found under the [in the Build section](/docs/build/wasm/transaction-fees#storage-rent).
- $tip$ - extra payment transaction submitter pays to ensure their transaction gets included faster into a block.

Native fees are inherently dynamic using the fee multiplies `c` which is calculated in each block using the following formulas:

$$
\begin{align}
c_{n} &= c_{n-1} * (1 + adjustment + \frac{adjustment^2}{2})
\\
adjustment &= v * (s - s^*)
\\
s &= \frac{block\_weight}{max\_block\_normal\_dispatch\_weight}
\end{align}
$$


with several configuration parameters:

- $s*$ - ideal block fullnes; desired long term average block fullness.
- $v$ - variability factor; controls how fast the adjustment factor changes. If value is small, it will adjust slowly, and if it is large, it will adjust quickly.
- $block\_weight$ - total weight of the previous block.
- $c_{min}$ - the smallest possible value of fee multiplier $c$.
- $c_{max}$ - the largest possible value of fee multiplier $c$.

and using $s$ to describe current block fullness:
- If $s > s*$, meaning block fullness if **more** than the ideal, the adjustment will be a positive number.
- If $s < s*$, meaning block fullness is **less** than the idea, the adjustment will be a negative number.

Based on the network usage (congestion), factor $c$ will either increase or decrease from block to block. If network is used heavily and blocks are full, it will increase, scaling up the weight fee and thus making the transactions more expensive. If network congestion is below the ideal the fee multiplier will decrease, making transactions less expensive.


## EVM Fees

Astar is fully Ethereum compatible. This means it also supports Ethereum’s [gas concept](https://ethereum.org/en/developers/docs/gas/). Gas is similar to weight but not quite the same. As a result, Ethereum transaction fees are calculated a bit differently. A simplified formula looks like this 

$$ethereum\_fee = used\_gas * (base\_fee\_per\_gas + priority\_fee\_per\_gas)$$

- $used\_gas$ - encapsulates all the resources spent to execute the transaction.
- $base\_fee\_per\_gas$ - how much needs to be paid by the user per unit of gas.
- $priority\_fee\_per\_gas$ - how much is the user tipping each unit of gas.

Comparing it with the previous example using native fees, it’s clear that Ethereum transactions are less configurable and more information is abstracted from the user. One of the important differences compared to native fee model is the non-existance of rent fees: when storage is created, the price of that storage is included in the gas fee, and even if some storage is removed later on, the user doesn’t receive a refund.

In order to align fees between two different systems, EVM fee formula for Astar Network is adjusted in a way that $base\_fee\_per\_gas$ becomes a dynamic paramter calculated in each block $n$:

$$
\begin{align}
EVM\_fee &= used\_gas * (base\_fee\_per\_gas + priority\_fee\_per\_gas)
\\
base\_fee\_per\_gas_{n} &= base\_fee\_per\_gas_{n-1} * (1 + adjustment + \frac{adjustment^2}{2})
\\
\end{align}
$$

with the following configuration parameters:
- $base\_fee\_per\_gas_{min}$ - the smallest possible value of base\_fee\_per\_gas.
- $base\_fee\_per\_gas_{max}$ - the largest possible value of base\_fee\_per\_gas.

## Fee Model Parameters

Values of all the Fee Model parameters are listed in the table below.

| Parameter name                                            | Value on Shibuya          | Value on Shiden | Value on Astar | 
| --------------------------------------------------------- |------------------         |---|- -|
| $base\_fee$                                               | 98,974,000                |   |   |
| $weight_{factor}$ (per byte)                              | 0.030855 SBY              |   |   |
| $length_{factor}$ (per byte)                              | 0.0000235 SBY             |   |   |
| $max\_block\_normal\_dispatch\_weight$                    | 375,000,000,000           |   |   |
| $s*$                                                      | 0.25                      |   |   |
| $v$                                                       | 0.000015                  |   |   |
| $c_{min}$                                                 | 0.1                       |   |   |
| $c_{max}$                                                 | 10                        |   |   |
| $price\_per\_item$                                        | 0.00004 SBY               |   |   |
| $price\_per\_byte$                                        | 0.000001 SBY              |   |   |
| $base\_fee\_per\_gas_{min}$                               | 0.0000008 SBY             |   |   |
| $base\_fee\_per\_gas_{max}$                               | 0.00008 SBY               |   |   |


The values for the parameters above are set so that EVM fee and the Native fee are equal and equal to 0.5 ASTR for an average weight and length transaction with no rent fee.

## Fee Alignment Transition Period

Legacy Astar Network tokenomics fee model was not aligned between the two systems - same resource consumption via native or Ethereum transactions resulted in significantly different fees. To allow network stakeholders to adjust to the Tokenomics 2.0 fee model, alignment of fees between the two systems will be gradually introduced once the change is enacted (live) on the network.