---
sidebar_position: 3
title: zkEVM Protocol FAQs
sidebar_label: Protocol FAQs
---
This document compiles some of the frequently asked questions related to the Astar zkEVM protocol. For more details, check out [Polygon zkEVM documentation](https://wiki.polygon.technology/docs/category/zkevm-protocol/).

---

### How are transactions collected and ordered?

- Transactions on the Astar zkEVM network are **created in users' wallets and signed with their private keys**.
- Once generated and signed, the **transactions are sent to the Trusted Sequencer's node** via their JSON-RPC interface. 
- The transactions are then **stored in the pending transactions pool, where they await the Sequencer's selection**.
- The **Trusted Sequencer reads transactions** from the pool and decides whether to discard them or order and execute them.
- Lastly, the **Sequencer organizes the transactions into batches**, followed by the sequencing of the batches.

### Are there any time or transaction intervals for a sequencer to wait before moving forward to make a Rollup batch?

The sequencer always has an open batch. Transactions are added to this batch until this batch is full or a big timeout happens. Those batches are also accumulated until it reaches 128K of batches (or a big timeout) and then a sequencing transaction to L1 is sent.

From the L2 user perspective, a new L2 block (different from the L2 batch) is closed and sent to the user. The user perceives the transaction finality even if the L2 batch is not closed. **One L2 Transaction is one L2 Block**.

### What are the stages that a transaction goes through in order to be finalized on L1?

The process of validating a specific transaction within the batch typically involves three steps:

1. **Trusted State:** This state is given by the trusted sequencer almost instantaneously. No L1 transactions are required.

2. **Virtual State:** Transactions are in L1. These transactions and their order cannot be modified as the state is final and anybody could calculate. 

3. **Verified State:** When the virtual state is verified by the smart contract, the funds can be withdrawn.

### How does a Sequencer validate a specific transaction in order to generate proof?

The Sequencer retrieves the transaction from the transaction pool and verifies that it is properly formatted and contains all the necessary information. The Sequencer does the following checks:

- Checks that the transaction is valid by checking that the Sender has enough funds to cover the gas costs of the transaction and that the smart contract called, if any, is valid and has the correct bytecode.

- Checks that the transaction is not a duplicate by checking the transaction nonce of the Sender to ensure that it is one greater than the last nonce used.

- Checks that the transaction is not a double-spend by checking that the Sender's account balance has not been already spent in another transaction.

Once the transaction is deemed valid, the Sequencer applies the transaction to the current state of the Astar zkEVM, updating the state of the smart contract and the account balances as necessary. Duration and cost vary depending on traffic and prevailing gas prices.

### When do transactions achieve finality in Astar zkEVM?

**If the user trusts the Sequencer**, transactions are considered final once the Sequencer sequences it (or Trusted State).

**If the user trusts only the L1 state**, then the transaction will be final at the moment it reaches **Virtual State**. This means, once the data is available and the transaction is already on L1.

**In case the user needs to withdraw funds**, he/she needs to wait for the Prover to convert the implicit state to an explicit state. We call this last state the **Consolidated or Verified State**.

### Are Sequencers and Provers in-house or external? How do you ensure that your Sequencers and Provers maintain decentralization?

Astar zkEVM's **Sequencer will be centralized during early stages**. We have a roadmap to decentralize the sequencer in future releases.

Likewise, the **Prover is also centralized at the beginning** but the vision is to enable a Provers market. Provers cannot do much but generate proofs. To have a decentralized system of Provers is much more critical (and difficult) than the Sequencer.

### Can a zkNode serve as both Sequencer and Aggregator? If not, how is it determined what role a node can play?

A zkNode can potentially serve as both a sequencer and an aggregator, depending on the specific implementation of the zero-knowledge proof protocol.

In some implementations, a node may only be able to perform one function or the other. The role a node can play is determined by the specific implementation of the protocol and the requirements of the network. For example, some protocols may require a certain number of nodes to perform the role of sequencer and a certain number to perform the role of aggregator in order to ensure the security and efficiency of the network.

### How exactly do the state sync components do the syncing in L2 after a transaction batch and its validity proof is mined on L1?

An easy way to summarize is that for each batch, one hash named `globalExitRoot` is transferred from **L1 &rarr; L2** and another hash is transferred from **L2 &rarr; L1** named `localExitRoot`.

`globalExitRoot` mainly includes all the deposits and `localExitRoot` includes all the withdrawals.

### What is Forced Batches?

A Forced Batch is an L2 batch included in an L1 transaction. Trusted Sequencer is forced to include those batches. This is how a user guarantees that they can withdraw funds even if they are censored by Trusted Sequencer.

This property is what memes the system censorship resistance.

### What is an Emergency State, and when is it triggered? 

Emergency State halts the functionalities such as the sequencing of batches, verifying of batches, and forced batches.

It can be triggered by the owner of a smart contract or, in the case of Astar zkEVM, by a Security Council multisig. This means that the Security Council can invoke the Emergency State if the pending state timeout is reached or a threatening vulnerability occurs.

