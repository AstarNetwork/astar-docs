---
sidebar_position: 1
---

import Figure from "/src/components/figure"

# Fee Model

Each block is a limited resource - it can only fit a limited amount of transactions. This is an oversimplification, but the point is that every transaction included in the block consumes a portion of the block’s resources.

Astar is a parachain in the Polkadot ecosystem, which relies on the shared security the Polkadot relay chain provides. However, it comes at the cost of having certain limitations placed on block resources. Most readers should know that a block is produced on Astar every 12 seconds - a limitation imposed by Polkadot. Only 0.5 out of those 12 seconds account for the time required to **execute** the block. This means it takes **0.5 seconds** of execution time on some CPU to execute the block logic. This is the first limiting resource - usually called `ref time` (time required to execute on the reference machine).

As a simple example - consider a token transferred from **Alice** to **Bob**. If such a transaction consumes **0.001 seconds** of execution time, executing two such transactions in a single block would consume **0.002 seconds**. Calling a smart contract, e.g., a DEX swap, is much more resource intensive and may, for example, consume **0.01 seconds, or 100x that of a simple transfer from one account to another**.

The other limiting factor is the **Proof of Validity** (PoV) size. Since Polkadot validators provide security by validating blocks authored by parachain collators, they need access to the data required to validate the block. Expanding on the previous example with **Alice** and **Bob**, Astar would need to provide Polkadot validators with information about how many initial tokens \***\*Alice** and **Bob** had and the transaction itself. This is (almost) enough data for validators to work with, but it is strictly limited to only **5 MB (megabytes)** per block.

In summary, there are two main factors limiting block production: `ref time` and `PoV size`, which taken all together, are collectively referred to as `weight`, an important concept when calculating transaction fees.

 <Figure caption="Block Consumption" src={require('/docs/learn/tokenomics2/img/Astar-Block-Consumption.jpeg').default } width="100%" />

Transaction Fees on Astar comprise of Native (Substrate) and EVM fees. Native and EVM transaction fees are calculated in different ways. Tokenomics 2.0 aligns the fees calculation between the two systems so that transactions consuming the same amount of block resources are priced roughly the same regardless of transaction type (Native or EVM).

This section describes Tokenomics 2.0 fee model calculation details.

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

- $base\_weight$ - fixed base weight of each transaction included in the block.
- $base\_fee$ - a fixed fee that needs to be paid for every transaction included in the block.
- $weight\_fee$ - is the fee related to the weight of the transaction.
- $c$ - fee multiplier; if network utilization is above ideal, `c` factor will increase, forcing users to pay more. And vice-versa, when network congestion is low, fee multiplier will decrease.
- $length\_fee$ - this is part of the fee related to the transaction length (number of bytes).
- $rent\_fee$ - deposit fee for storing data on chain. Detailed explanation of rent fee calculation in case of Wasm transactions can be found under the [in the Build section](/docs/build/wasm/transaction-fees#storage-rent).
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

- $s*$ - ideal block fullness; desired long term average block fullness.
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

Comparing it with the previous example using native fees, it’s clear that Ethereum transactions are less configurable and more information is abstracted from the user. One of the important differences compared to native fee model is the non-existence of rent fees: when storage is created, the price of that storage is included in the gas fee, and even if some storage is removed later on, the user doesn’t receive a refund.

In order to align fees between two different systems, EVM fee formula for Astar Network is adjusted in a way that $base\_fee\_per\_gas$ becomes a dynamic parameter calculated in each block $n$:

$$
\begin{align}
EVM\_fee &= used\_gas * (base\_fee\_per\_gas + priority\_fee\_per\_gas)
\\
base\_fee\_per\_gas_{n} &= base\_fee\_per\_gas_{n-1} * (1 + adjustment + \frac{adjustment^2}{2})
\\
\end{align}
$$

with the following configuration parameters:

- $base\_fee\_per\_gas_{min}$ - the smallest possible value of base_fee_per_gas.
- $base\_fee\_per\_gas_{max}$ - the largest possible value of base_fee_per_gas.

## Fee Model Parameters

Values of all the Fee Model parameters are listed in the table below.

| Parameter name                         | Value on Shibuya | Value on Shiden | Value on Astar  |
| -------------------------------------- | ---------------- | --------------- | --------------- |
| $base\_weight$                         | 98974            | 98974           | 98974           |
| $weight_{factor}$ (per byte)           | 0.030855 SBY     | 0.00030855 SDN  | 0.030855 ASTR   |
| $length_{factor}$ (per byte)           | 0.0000235 SBY    | 0.000000235 SDN | 0.0000235 ASTR  |
| $max\_block\_normal\_dispatch\_weight$ | 375,000,000,000  | 375,000,000,000 | 375,000,000,000 |
| $s*$                                   | 0.25             | 0.25            | 0.25            |
| $v$                                    | 0.000015         | 0.000015        | 0.000015        |
| $c_{min}$                              | 0.1              | 0.1             | 0.1             |
| $c_{max}$                              | 10               | 10              | 10              |
| $price\_per\_item$                     | 0.00004 SBY      | 0.0000004 SDN   | 0.00004 ASTR    |
| $price\_per\_byte$                     | 0.000001 SBY     | 0.00000001 SDN  | 0.000001 ASTR   |
| $base\_fee\_per\_gas_{min}$            | 0.0000008 SBY    | 0.000000008 SDN | 0.0000008 ASTR  |
| $base\_fee\_per\_gas_{max}$            | 0.00008 SBY      | 0.0000008 SDN   | 0.00008 ASTR    |

The values for the parameters above are set so that EVM fee and the Native fee are equal and equal to 0.5 ASTR or 0.005 SDN for an average weight and length transaction with no rent fee.

## Rent Fee

Executing certain on-chain actions can result in additional storage being created.
E.g. if an account decides to create an _identity_, this has to be stored on-chain, whoever is running a node needs to store this piece of information somehow.
To prevent _spamming_, such actions usually incur some _rent_ fee which needs to be _deposited_.
Unlike regular transaction fee, once the storage entry has been removed, the _rent_ fee is also returned to the account.

For concrete values per entry & per byte, please refer to the table above.

Some actions which incur _rent_ fee are:

- creating an identity, including sub-accounts
- creating a multisig call
- creating an asset & metadata (**NOTE: see table below**)
- creating a proxy, announcing proxy calls
- interacting with WASM smart contracts


For `pallet-assets` _asset_, creation price is higher than the regular price.
This is because creating an asset carries more _weight_ than simply creating an e.g. _proxy_.
Assets can be registered as cross-chain assets and they can be interacted via precompiles, which makes them usable by any account.

| Action         | Price on Shibuya | Price on Shiden | Price on Astar |
| -------------- | ---------------- | --------------- | -------------- |
| Asset creation | 10 SBY           | 10 SDN          | 1000 ASTR      |
