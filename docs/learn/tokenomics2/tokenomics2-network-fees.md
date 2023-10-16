---
sidebar_position: 2
---
# Network Fees

Network Fees on Astar can be summarized as follows:

- Native fees
- Ethereum fees
- Rent fees

## Native Fees

Native fees are applied to normal transactions, native to Substrate. For example, balance transfer, using dApp staking, creating a multisig, voting on a referendum, etc.

They are calculated using a model commonly used by Polkadot and (probably) all parachains.

tx_fee = tx_length_fee + base_fee + c * weight_fee + tip

- tx_length_fee - this is part of the fee related to the transaction length (number of bytes).
base_fee - a fixed fee that needs to be paid for every transaction included in the block.
- weight_fee - is the fee related to the weight of the transaction; right now, it scales with ref time - the more CPU time required, the higher this fee will be.
- c - adjustment factor; if network utilization is above ideal, c factor will increase, forcing users to pay more for weight.
tip - extra payment transaction submitter pays to ensure their transaction gets included faster into a block.

More details about the native fees can be found the [Build section](/docs/build/wasm/transaction-fees)

## Ethereum Fees

Astar is fully Ethereum compatible. This means it also supports Ethereum’s gas concept. Gas is similar to weight but not quite the same. As a result, Ethereum transaction fees are calculated a bit differently. A simplified formula looks like this:

tx_fee = gas * (base_fee_per_gas + priority_fee_per_gas)

gas - encapsulates all the resources spent to execute the block.
base_fee_per_gas - how much needs to be paid by the user per unit of gas.
priority_fee_per_gas - how much is the user tipping each unit of gas.
Comparing it with the previous example using native fees, it’s clear that Ethereum transactions are quite different. They are less configurable, and more information is hidden from the user. Regardless of the transaction type, 20% of the fee is burned, adding a deflationary force to the system. The remaining 80% is received by the collator responsible for authoring the block.

Generally, the more block resources consumed, the more user has to pay. That sounds fair :slightly_smiling_face:.

## Rent Fees

Rent fees are quite simple - the idea is to charge users who perform an action that results in the creation of some new storage. E.g., database entries on-chain. If the user removes some of the entries and reduces the amount of data stored on-chain, the rent fee is returned. Essentially it’s a deposit.

It’s commonly used in governance functionality, identity, multisig, and Wasm (ink!) smart contracts. E.g. if users create a new identity on-chain, they must pay a deposit fee. If they decide to remove it after some time, they get their full deposit back.

This is important for Astar since we support Wasm (ink!) smart contracts that rely on the rent fee mechanism. On the other hand, we also support EVM, which operates differently - when storage is created, the price of that storage is included in the gas fee, and even if some storage is removed later on, the user doesn’t receive a refund.



