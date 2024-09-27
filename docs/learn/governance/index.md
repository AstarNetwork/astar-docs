---
sidebar_position: 1
title: Overview
---

## Status

* **LIVE** on `Shibuya` testnet
* **To-Be-Deployed** on `Astar` _soon_

## Approach

`Astar` reuses Polkadot’s so-called **v1** governance model due to it's practicality. The core idea is to further decentralize the network, but not completely re-invent the wheel.

User is advised to refer to [the official docs](https://wiki.polkadot.network/docs/learn/learn-governance) to learn more about how _Gov v1_ works. Further chapters will assume that the reader has read and has basic understanding of the mechanism.

The **Main Council** and the **Technical Committee** will be used same as in the linked documentation.

A novelty will be the **Community Council** which will manage certain actions related to the _community treasury_. This council will be able to approve or reject community treasury spending requests, and will also be able to select which dApps to stake on using the community treasury funds. Additionally, they will have the privilege to fast track dApp registration into the dApp staking system.

Community treasury is an independent treasury account (no ties to main on-chain treasury) which gets primarily funded through the dApp staking rewards. The community council must ensure to manage the treasury wisely to ensure it remains profitable, while simultaneously giving support to projects & ambassadors.

Conviction voting is also utilized, essentially being the same as covered in the official Polkadot network Gov v1 docs, with the only difference being in parameters.

Anyone holding **ASTR** tokens can participate in governance by either proposing, endorsing or voting on a proposal.

:::important
Tokens that are locked in dApp staking **CAN** and should be used to participate in governance.
Users can steer the direction of the network while earning rewards.
:::

## Actors

### Main Council

`Main Council` will initially consist of Astar Foundation leaders, individuals who have deep investment & understanding of the network & the ecosystem.

The `Main Council` can:

* change members of the `Main Council`, `Technical Committee` and the `Community Council` via 2/3 majority agreement
* approve or reject `Main Treasury` spending proposals
* propose a _super majority approve_ & _simple majority_ external proposal via 2/3 majority agreement
* propose a _super majority against_ external proposal via unanimous agreement
* cancelling a passed referendum via 2/3 majority agreement (this is an _emergency_ action)

### Technical Committee

`Technical Committee` will initially consist of `Astar` runtime developers since this role requires deep technical understanding of the chain.

The `Technical Committee` can:

* fast-track an **external** proposal
  * standard fast tracking requires 2/3 majority agreement, and allows modification of the voting & enactment period durations
  * instant fast tracking requires unanimous agreement, and allows setting of the voting & enactment period to arbitrarily short periods (for emergency situations)
* cancel a public proposal (not referendum!) in case the committee considers it harmful, requires 2/3 majority agreement
* enable or disable _maintenance_ mode on the **dApp staking** pallet, requires 2/3 majority agreement

Any `Technical Committee` **member** can **veto** an external proposal made by the `Main Council`.

### Community Council

`Community Council` will initially consist of a mix of Astar Foundation members with highly involved community members (ambassadors).

The `Community Council` can:

* register a dApp into dApp staking protocol, requires 2/3 majority agreement
* can utilize dApp staking on behalf of the community treasury, requires 2/3 majority agreement
* can approve or reject `Community Treasury` spending requests, requires 2/3 majority agreement

### Token Holders

Anyone holding **ASTR** token is a token holder. They can:

* make a public proposal, putting some **ASTR** as the deposit
  * in case the proposal is cancelled, the deposit will get slashed
* endorse an existing proposal, putting some **ASTR** as the deposit, and increasing the chance that the proposal gets upgraded into a referendum
* vote on an ongoing referendum
* request a treasury payout
