---
sidebar_position: 1
---

# Learn about Collators

## Introduction

A collator plays an essential role in our network and is responsible for crucial tasks, including block production and transaction confirmation. A collator needs to maintain a high communication response capability to ensure the seamless operation of the Astar ecosystem.

## Role of collators in the Astar ecosystem

Collators maintain our ecosystem by collecting transactions from users and producing state transition proofs for Relay Chain validators. In other words, collators maintain the network by aggregating parachain transactions into parachain block candidates and producing state transition proofs for validators based on those blocks.

Unlike validators, collator nodes do not secure the network. If a parachain block is invalid, it will get rejected by validators. Therefore the assumption that having more collators is better or more secure is not correct. On the contrary, too many collators may slow down the network. The only nefarious power collators have transaction censorship. To prevent censorship, a parachain only needs to ensure some neutral collators - but not necessarily a majority. Theoretically, the censorship problem is solved by having just one honest collator (reference: [https://wiki.polkadot.network/docs/learn-collator](https://wiki.polkadot.network/docs/learn-collator)).

Performance of the network depends directly on collators. To ensure optimal performance of the network, a [slashing mechanism](/docs/build/nodes/collator/learn.md#slash-mechanism) is implemented.

### XCMP

Collators are a key element of [XCMP (Cross-Chain Message Passing)](https://wiki.polkadot.network/docs/learn-crosschain). By being full-nodes of the Relay Chain, they are all aware of each other as peers. This makes it possible for them to send messages from parachain A to parachain B.

---

## Aura PoS Consensus

Aura PoS consist of 2 pallets:

- [Aura pallet](https://crates.parity.io/pallet_aura/index.html)
- PoS pallet

The first phase in making PoS was by deploying the Aura pallet. Aura PoA Collator Phase - permissioned block authoring and collator session key setup for Astar ecosystem. After extensive testing, we deployed the PoS pallet and switched to Aura PoS. We have enabled permissionless collator staking, network inflation, and rewards.

**Let’s break down the latest phase:**

- **Collator staking**: collators can now start with securing the network. This will be with a minimum bond of a fixed amount of tokens.
- **Network inflation**: Astar mainnet has a 10% inflation. This 10% is based on a perfect block production every 12 seconds.
- **Rewards**: a fixed amount will be created at each block and divided between treasury, collators, and dApp staking.

A collator (block producer) is rewarded a fixed amount for each block produced.

---

## Collator election mechanism
### Election process
To join the election process you must apply for a collator candidacy and bond tokens, then ask for approval from governance (2/3 MainCouncil or referendum), see [Collator Requirements](https://docs.astar.network/docs/build/nodes/collator/requirements) for details. When your node fits the parameters and checks all the boxes to become a collator, it will be added to the chain. **Note: if your collator doesn’t produce blocks during two sessions (2h) it will be kicked out.**

---

## Collator reward distribution mechanism
At every block you produced as a collator, rewards will automatically be transferred to your account. The reward includes block reward + fees.

---

## Slash mechanism
Starting April 2022, a slashing mechanism is implemented on Astar and Shiden networks - a collator that doesn't produce blocks during two sessions (2 hours) will be slashed 1% of its total stake and kicked out of the active collator set.
This slashing ensures the best block rate and prevents malicious actors from harming the network without financial consequences.

Additionally, collators can be forced slashed by governance (3/4 MainCouncil or Referendum)

---

## FAQ
### What about NPoS?
Our first intention was to activate NPoS to Shiden Network. After internal testing, we realised this would use a lot of Shiden collator resources. NPoS is not designed for collators in the Polkadot ecosystem (reference: [role of collators](/docs/build/nodes/collator/learn#role-of-collators-in-the-astar-ecosystem)). Astar ecosystem is built to be a dApp hub in the Polkadot ecosystem for smart contracts with a unique incentive reward mechanism for developers, dApp staking. 
