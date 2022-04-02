---
sidebar_position: 1
---

# Learn about Collators

## Introduction

A collator plays an essential role in our network and is responsible for crucial tasks, including block production and transaction confirmation. A collator needs to maintain a high communication response capability to ensure the seamless operation of the Astar ecosystem.

## Role of collators in the Astar ecosystem

Collators maintain our ecosystem by collecting transactions from users and producing state transition proofs for Relay Chain validators. In other words, collators maintain the network by aggregating parachain transactions into parachain block candidates and producing state transition proofs for validators based on those blocks.

Unlike validators, collator nodes do not secure the network. If a parachain block is invalid, it will get rejected by validators. Therefore the assumption that having more collators is better or more secure is not correct. On the contrary, too many collators may slow down the network. The only nefarious power collators have transaction censorship. To prevent censorship, a parachain only needs to ensure some neutral collators - but not necessarily a majority. Theoretically, the censorship problem is solved by having just one honest collator (reference: [https://wiki.polkadot.network/docs/learn-collator](https://wiki.polkadot.network/docs/learn-collator)).

**XCMP**

Collators are a key element of [XCMP (Cross-Chain Message Passing)](https://wiki.polkadot.network/docs/learn-crosschain). By being full-nodes of the Relay Chain, they are all aware of each other as peers. This makes it possible for them to send messages from parachain A to parachain B.

---

## Aura PoS Consensus

Aura PoS consist of 2 pallets:

- [Aura pallet](https://crates.parity.io/pallet_aura/index.html)
- PoS pallet

The first phase in making PoS was by deploying the Aura pallet. Aura PoA Collator Phase - permissioned block authoring and collator session key setup for Astar ecosystem. After extended testing, we have deployed the PoS pallet and switched to Aura PoS. We have enabled permissionless collator staking, network inflation, and rewards.

**Let’s break down the latest phase:**

- **Collator staking**: collators can now start with securing the network. This will be with a minimum bond of a fixed amount of tokens.
- **Network inflation**: Astar mainnets has a 10% inflation. This 10% is based on a perfect block production every 12 seconds.
- **Rewards**: a fixed amount will be created at each block and divided between treasury, collators, and dApp staking.

A collator (block producer) gets a reward for each block it’s produced. The reward is a fixed amount for each block.