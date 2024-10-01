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

## Parameters

### Democracy

These parameters are related to `pallet-democracy` functionality, which is the _heart_ of the governance logic.

The `Launch Period` is the time window during which public proposals are endorsed by the token holders or external proposal is made by the `Main Council`.
Depending on the _round_, either the most endorsed public proposal or the external proposal will be upgraded into a referendum.
The `Voting Period` is the time window during which the token holders can vote on the referendum.
In case the referendum passes (quorum achieved during the `Voting Period`), the `Enactment Period` is the _delay_ before the proposal is actually executed on-chain.

The `Technical Committee` can decide to fast-track external proposals (e.g. in case of an emergency situation). The regular _fast-track_ approach has a limit on the minimum voting period, while the _instant fast-track_ approach allows the committee to set the voting period to an arbitrarily short duration.

When submitting a new proposal, token holders need to _deposit_ some amount of native tokens as an _insurance_ that the proposal is not _spam_. This amount can be arbitrary, but has a minimum amount. Users should be careful when setting large amounts here since the endorsement requirement is that the deposit is _matched_.

| Parameter Name                           | Shibuya                   | Astar                   |
| ---------------------------------------- | ------------------------- | ----------------------- |
| Launch Period                            | 4 Days                    | TBD                     |
| Voting Period                            | 4 Days                    | TBD                     |
| Enactment Period                         | 2 Days                    | TBD                     |
| Minimum Fast Track Voting Period         | 1 Hour                    | TBD                     |
| Vetoed External Proposal Cooloff Period  | 1 Day                     | TBD                     |
| Minimum Public Referendum Deposit        | 10 SBY                    | TBD                     |
| Simple Majority Proposal Origin          | 1/2 Main Council          | 2/3 Main Council        |
| Super Majority Against Proposal Origin   | Unanimous Main Council    | Unanimous Main Council  |
| Fast Track Origin                        | 1/2 Technical Committee   | 2/3 Technical Committee |
| Instant Track Origin                     | Unanimous Technical Committee | Unanimous Technical Committee |
| Referendum Cancellation Origin           | 1/2 Main Council          | 2/3 Main Council        |
| Public Proposal Cancellation Origin      | 1/2 Technical Committee   | 2/3 Technical Committee |

### Treasuries

Anyone with native token can request treasury payout, but they must _deposit_ some tokens when making a proposal.
The deposit amount is taken as a percentage of the requested amount, and is used to prevent spamming the network with proposals.
There are two parameters governing the minimum and maximum deposit amounts, which prevent the deposit from being either too high or too low.

The spend period relates to how often the treasury payouts are made.
Even if the payout request is approved, the actual fund transfer will happen only after the spend period has passed.

The approval and rejection of the treasury spending requests is handled by the corresponding council.

#### Main Treasury

These parameters are related to the _main treasury_ logic.

| Parameter Name            | Shibuya            | Astar              |
| ------------------------- | ------------------ | ------------------ |
| Approve Origin            | 1/2 Main Council   | 2/3 Main Council   |
| Reject Origin             | 1/2 Main Council   | 2/3 Main Council   |
| Minimum Proposal Bond     | 100 SBY            | TBD                |
| Maximum Proposal Bond     | 10000 SBY          | TBD                |
| Spend Period              | 3 Days             | TBD                |

#### Community Treasury

These parameters are related to the _community treasury_ logic.

| Parameter Name            | Shibuya                | Astar                  |
| ------------------------- | ---------------------- | ---------------------- |
| Approve Origin            | 1/2 Community Council  | 2/3 Community Council  |
| Reject Origin             | 1/2 Community Council  | 2/3 Community Council  |
| Minimum Proposal Bond     | 100 SBY                | TBD                    |
| Maximum Proposal Bond     | 10000 SBY              | TBD                    |
| Spend Period              | 3 Days                 | TBD                    |

### Collectives

These parameters are related to the _collectives_ representing the `Main Council`, `Technical Committee` and the `Community Council`.

Any _collective_ member can propose a _motion_ (execution of a privileged action).
Other collective members can either vote _aye_ or _nay_ on the motion.
Motions have a duration (sort of a voting period), and if they do not get the required quorum, they are considered _failed_.
In case the quorum is reached, the motion is considered _passed_.

| Parameter Name                          | Shibuya                  | Astar                    |
| --------------------------------------- | ------------------------ | ------------------------ |
| Main Council Motion Duration            | 5 Days                   | TBD                      |
| Technical Committee Motion Duration     | 5 Days                   | TBD                      |
| Community Council Motion Duration       | 5 Days                   | TBD                      |
| Main Council Member Change Origin       | 1/2 Main Council         | 2/3 Main Council         |
| Technical Committee Member Change Origin| 1/2 Technical Committee  | 2/3 Technical Committee  |
| Community Council Member Change Origin  | 1/2 Community Council    | 2/3 Community Council    |
