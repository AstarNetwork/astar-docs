import Figure from "/src/components/figure"

---
sidebar_position: 2
---
# Fee Model

Fees on Astar comprise of Native (Substrate) fees and EVM fees.

Native (Substrate) and EVM transaction fees are calculated in inherently different ways, and in Astar Network's legacy tokenomics the cost of similar transactions differed between the two systems.

Tokenomics 2.0 aligns the fees calculation between the two systems so that transactions consuming the same amount of block resources are priced roughly the same if executed as a Native or as an Ethereum transaction. 

Remainter of the section describes Tokenomics 2.0 fee model calulation details as well as the way the alignment of the fees between the two systems is gradually introduced over a period of time.

## Native Fees

Native fees are applied to transactions native to Substrate. For example, balance transfer, using dApp staking, creating a multisig, voting on a referendum, etc.

Fees are calculated using a [model](https://research.web3.foundation/Polkadot/overview/token-economics#adjustment-of-fees-over-time) commonly used by Polkadot and (probably) all parachains:

$$
\begin{align}
native\_fee &= base\_fee + c * weight\_fee + length\_fee + rent\_fee + tip
\end{align}
$$

**<div style={{textAlign: 'center'}}>Native fee calculation on Astar Network</div>**

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
- $weight\_fee$ - is the fee related to the weight of the transaction. More details about the weight of native transactions and accompanying fees can be found the [in the Build section](/docs/build/wasm/transaction-fees#weight)
- $c$ - fee multiplier; if network utilization is above ideal, `c` factor will increase, forcing users to pay more.
- $length\_fee$ - this is part of the fee related to the transaction length (number of bytes).
- $rent\_fee$ - deposit fee for storing data on chain. Detailed explanation of rent fee calculation in case of Wasm tranactions can be found under the [in the Build section](/docs/build/wasm/transaction-fees#storage-rent)
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


With several configuration parameters:

- $s*$ - ideal block fullnes; desired long term average block fullness.
- $v$ - variability factor; controls how fast the adjustment factor changes. If value is small, it will adjust slowly, and if it is large, it will adjust quickly.
- $block\_weight$ - total weight of the previous block.
- $c_{0}$ - initial value of fee multiplier $c$
- $c_{min}$ - the smallest possible value of fee multiplier $c$
- $c_{max}$ - the largest possible value of fee multiplier $c$

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

With the following configuration parameters:
- $base\_fee\_per\_gas_{0}$ - initial value of base\_fee\_per\_gas
- $base\_fee\_per\_gas_{min}$ - the smallest possible value of base\_fee\_per\_gas.
- $base\_fee\_per\_gas_{max}$ - the largest possible value of base\_fee\_per\_gas.

**<div style={{textAlign: 'center'}}>EVM fee calculation on Astar Network</div>**

## Fee Model Parameters

Values of all the Fee Model parameters are listed in the table below.
TODO All parameters are also retrievable as on-chain values using ..... 

| Parameter name                                            | Value on Astar            | Value on Shiden        | 
| --------------------------------------------------------- |---------------            |---------------        |
| $base\_fee$                                               | 98 974 000                |
| $weight_{factor}$                                         | 0.030854941570478255 ASTR |               SDN|
| $length_{factor}$                                         | 0.00002350852691084 ASTR  |               SDN|
| $max\_block\_normal\_dispatch\_weight$                    | 375 000 000 000           |                   |
| $s*$                                                      | 0.25                      |               0.25 |
| $v$                                                       | 0.000015                  |                   |
| $c_0$                                                     | $\frac{98\_974\_000}{525\_000\_000}$           ||
| $c_{min}$                                                 | 0.1                       |                   |
| $c_{max}$                                                 | 10                        |                   |
| $price\_per\_item$                                        | 0.4 ASTR                  |               SDN|
| $price\_per\_byte$                                        | 0.002 ASTR                |               SDN|
| $base\_fee\_per\_gas_{0}$                                 |0.000001469282931928 ASTR  |               SDN|
| $base\_fee\_per\_gas_{min}$                               |0.0000008 ASTR             |               SDN|
| $base\_fee\_per\_gas_{max}$                               |0.00008 ASTR               |               SDN|

The values for the parameters above (weight factor, length factor, initial adjustment factor and initial base fee per gas) are set so that, at the time of implementation, the EVM fee and the Native fee are equal and equal to 0.5 ASTR for an average weight and length transaction with no rent fee.


## Fee Alignment Transition Period

As mentioned above, in legacy Astar Network tokenomics fee model there is a significant gap between the value of fees for similar transactions between Native and EVM systems.
 
To allow network stakeholders to adjust to the Tokenomics 2.0 fee model, alignemnt wont happen instantly but gradually over a period of ~80 days.

The transition phase will start with setting the initial parameters as in the tabele below:

| Parameter name                                            | Value on Astar            | Value on Shiden        | 
| --------------------------------------------------------- |---------------            |---------------        |
| $c_0$                                                     | 0.08614819118682882 ASTR           ||
| $c_{min}$                                                 | 0.08614819118682882                     |                   |
| $base\_fee\_per\_gas_{0}$                                 |0.000000001 ASTR  |               SDN|
| $base\_fee\_per\_gas_{min}$                               |0.0000008 ASTR             |               SDN|

All other parameters are set to values described in the main table.

A new factor $m$ is introduced with the value $m$= 1 710 000 and inserted into the dynamic formula for the base\_fee\_per\_gas:

$$
\begin{align}
base\_fee\_per\_gas_{n} &= base\_fee\_per\_gas_{n-1} * (1 + adjustment + m * \frac{adjustment^2}{2})
\\
\end{align}
$$

The following graph shows the expected movement of EVM fee and Native fee for average transaction in the first 80 days after the launch (the graph is based on the assumption that block fullness will behave similarly as it did during the data gathering period for the Tokenomics 2.0 modeling TODO - which is that):

<Figure caption="Fee Alignment Transition Period " src={require('./img/tokenomics-fee-alignment.png').default } width="65%" />


After the EVM fee and Native fee reach the desired level, the $m$ factor will be removed from the formula and the $base\_fee\_per\_gas_{min}$ and $c_{min}$ will be set to the values from the main table.
