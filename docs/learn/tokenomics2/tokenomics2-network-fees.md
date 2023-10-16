---
sidebar_position: 2
---
# Network Fees


Network Fees on Astar can be summarized as follows:

- Transaction fees (Native and Ethereum)
- Rent fees

Native (Substrate) and Ethereum fees are calculated in inherently different ways, and in Astar Network's legacy tokenomics the fees between the two systems differed significantly.

The goal of Tokenomics 2.0 is to align the fees calculation between the two systems so that, if a transaction consumes the same amount of block resources, it should be priced roughly the same if extecuted either as a native or an Ethereum transaction. 

This section covers basics about how the fees are calculated in Tokenomics 2.0 and then describes the way the the alignment of the fees between the two systems is achieved.

## Overview of Transaction Fees

### Native Fees

Native fees are applied to normal transactions, native to Substrate. For example, balance transfer, using dApp staking, creating a multisig, voting on a referendum, etc.

They are calculated using a model commonly used by Polkadot and (probably) all parachains.

`tx_fee = tx_length_fee + base_fee + c * weight_fee + tip`

- `tx_length_fee` - this is part of the fee related to the transaction length (number of bytes).
- `base_fee` - a fixed fee that needs to be paid for every transaction included in the block.
- `weight_fee` - is the fee related to the weight of the transaction.
- `c` - adjustment factor; if network utilization is above ideal, c factor will increase, forcing users to pay more for weight.
- `tip` - extra payment transaction submitter pays to ensure their transaction gets included faster into a block.

The most important thing to note about native fees is that they depend both on the **length** of the transaction as well as on how much the transaction **weights**. More details about the weight of native transactions and accompanying fees can be found the [Build section](/docs/build/wasm/transaction-fees)


Old parameters
New parameters



### Ethereum Fees

Astar is fully Ethereum compatible. This means it also supports Ethereum’s gas concept. Gas is similar to weight but not quite the same. As a result, Ethereum transaction fees are calculated a bit differently. A simplified formula looks like this:

`tx_fee = gas * (base_fee_per_gas + priority_fee_per_gas)`

- `gas` - encapsulates all the resources spent to execute the block.
- `base_fee_per_gas` - how much needs to be paid by the user per unit of gas.
- `priority_fee_per_gas` - how much is the user tipping each unit of gas.

Comparing it with the previous example using native fees, it’s clear that Ethereum transactions are quite different. They are less configurable, and more information is hidden from the user.

In order to align fees between two different systems, Ethereum fee formula is adjusted in a way that base fee per gas becomes a dynamic paramter calculated.


base fee per gasn=base fee per gasn-1*(1+adjustment+m*adjustment22)


Old parameters
New parameters.


## Rent Fees in Tokenomics 2.0

Rent fees are quite simple - the idea is to charge for actions that results in the creation of some new storage, for example: database entries on-chain. If the user removes some of the entries and reduces the amount of data stored on-chain, the rent fee is returned. Essentially it’s a deposit.

It’s commonly used in governance functionality, identity, multisig, and Wasm (ink!) smart contracts. E.g. if users create a new identity on-chain, they must pay a deposit fee. If they decide to remove it after some time, they get their full deposit back.

This is important for Astar since we support Wasm (ink!) smart contracts that rely on the rent fee mechanism. On the other hand, we also support EVM, which operates differently - when storage is created, the price of that storage is included in the gas fee, and even if some storage is removed later on, the user doesn’t receive a refund.

## Graduial Fee Alignment

These fee changes won’t happen overnight. Instead, they will be implemented gradually over a period of time (e.g. 3 months). The fees being burned will be increased to 80%, with 20% being deposited to the collators. This does not include the tip portion that will be paid out to collators in full.




## Burn mechanism



## Network parameters

All parameters are available on-chain
Describe how to get there
Extract of most imporant parameters here
