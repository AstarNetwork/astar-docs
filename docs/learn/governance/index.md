---
sidebar_position: 1
title: Overview
---

## Status

* **LIVE** on `Shibuya` testnet
* **To-Be-Deployed** on `Astar` _soon_ (docs will be updated accordingly prior to the deployment)

## Approach

`Astar` reuses Polkadot’s so-called **v1** governance model due to its practicality. The core idea is to further decentralize the network, but not completely re-invent the wheel.

Users are advised to refer to [the official docs](https://wiki.polkadot.network/docs/learn/learn-governance) to learn more about how _Gov v1_ works.

The **Main Council** and the **Technical Committee** will be used the same as in the linked documentation.

A novelty will be the **Community Council** which will manage certain actions related to the _community treasury_. This council will be able to approve or reject community treasury spending requests, and will also be able to select which dApps to stake on using the community treasury funds. Additionally, they will have the privilege to fast track dApp registration into the dApp staking system.

Community treasury is an independent treasury account (no ties to main on-chain treasury) which gets primarily funded through the dApp staking rewards. The community council must manage the treasury wisely to maintain profitability while also supporting projects and ambassadors.

Conviction voting is also utilized, essentially being the same as covered in the official Polkadot network Gov v1 docs, with the only difference being in parameters.

Anyone holding **ASTR** tokens can participate in governance by either proposing, endorsing or voting on a proposal.

:::important
Tokens that are locked in dApp staking **CAN** and should be used to participate in governance.
Users can steer the direction of the network while earning rewards.
:::

## Quick Overview

To avoid duplicating the [official Polkadot Gov v1 documentation](https://wiki.polkadot.network/docs/learn/learn-governance), here is a quick overview of the governance system in `Astar`.

* Before a proposal can be made, a _preimage_ of the call must be submitted on-chain. This is essentially the proposal logic the submitter wishes to execute (e.g., upgrade the runtime, transfer funds).

* Public proposals can be made by any native token holder, and can be endorsed by other token holders. More than one proposal can exist at the same time.
* External proposals can be made by the `Main Council`. Only one external proposal can exist at a time.
* At the end of each `Launch Period`, either the most endorsed public proposal or the external proposal will be upgraded into a referendum (2 _tracks_).
  * Every `Launch Period` will have an alternating _round_ (1st round is for public proposals, 2nd round is for external proposals).
  * In case no eligible proposal exists for the given round's track preference, the other track will be used instead if a proposal exists.

* Once a proposal is upgraded into a referendum, the token holders can vote on it during the `Voting Period`. In order for the referendum to pass, a certain quorum must be achieved before the `Voting Period` ends.
* If the referendum passes, the proposal will be executed on-chain after the `Enactment Period` has passed. This is a _delay execution_ mechanism, allowing the token holders to prepare for the changes.
* Conviction voting allows the token holder to amplify their vote by _locking_ their tokens for a certain period of time. The longer the lock period, the more _weight_ the vote has. E.g. voting with **1000 tokens** with conviction factor **3** will be equivalent to voting with **3000 tokens** but the tokens will be locked for a greater period of time compared to voting with conviction factor **1**.

* In case the voter's vote corresponds to the _winning_ side, their tokens will be _locked_ for a certain period of time. Otherwise the tokens will be _unlocked_ immediately. Tokens never leave the voter's account, they just cannot be transferred or used to e.g. pay transaction fees.
* Once the _lock_ period expires, user can execute an _unlock_ action to remove the lock and make the tokens _liquid_ again.

* Token holder can delegate their voting power to another account. Tokens are never transferred, only the voting power is delegated.
* It is not possible to have both voting delegation & actively vote at the same time. These actions are mutually exclusive.

* There are 3 types of quorums (reader is **strongly** encouraged to refer to the official docs for more details):
  * _Simple Majority_ requires more than 50% of the total votes to be _aye_. This is the quorum required for external proposal made by the _majority agreement_ of the `Main Council`
  * _Super Majority Approve_ adapts to the voter turnout (how many voters participated in the referendum compared to the total token supply). For low turnout, the percentage of _aye_ votes is higher, but as turnout increases, the percentage of required _aye_ votes decreases. This is the quorum required for regular public proposals.
  * _Super Majority Against_ also adapts to the voter turnout. For low turnout, the percentage of _aye_ votes is lower, but as turnout increases, the percentage of required _aye_ votes increases. This is the quorum required for an external proposal made by the _unanimous agreement_ of the `Main Council`.

* The `Main Council` can **cancel** an ongoing referendum if it considers it harmful. This is an _emergency_ action only.
* The `Technical Committee` can **fast-track** an external proposal in case of an emergency situation. This allows instant upgrade of the proposal into a referendum, and setting of the voting & enactment period to arbitrarily short durations.
* The `Technical Committee` can **cancel** a public proposal if it considers it to be harmful for the network.
* Any `Technical Committee` can **vet** an external proposal made by the `Main Council`, postponing it temporarily.

## Actors

Different actors have different roles in the governance system.
When executing any of the governance actions, the _origin_ of the call will determine the privileges it has.

E.g. in case a regular user submits a democracy proposal, the _origin_ will be the user's account, controlled by the user's private key.
However, in case of a `Main Council` call, the _origin_ will be the `Main Council` collective with some level of agreement, e.g. 2/3 majority.
Such a call will have more privileges than a regular user's call, but it requires some consensus among the council members.

There is a special kind of _origin_ called `root`, which has the highest privilege level.

### Main Council

The `Main Council` will initially consist of Astar Foundation leaders, individuals who have deep investment & understanding of the network & the ecosystem.

The `Main Council` can:

* change members of the `Main Council`, `Technical Committee` and the `Community Council` via 2/3 majority agreement
* approve or reject `Main Treasury` spending proposals
* propose a _super majority approve_ & _simple majority_ external proposal via 2/3 majority agreement
* propose a _super majority against_ external proposal via unanimous agreement
* cancelling a passed referendum via 2/3 majority agreement (this is an _emergency_ action)

### Technical Committee

The `Technical Committee` will initially consist of `Astar` runtime developers since this role requires deep technical understanding of the chain.

The `Technical Committee` can:

* fast-track an **external** proposal
  * standard fast tracking requires 2/3 majority agreement, and allows modification of the voting & enactment period durations
  * instant fast tracking requires unanimous agreement, and allows setting of the voting & enactment period to arbitrarily short periods (for emergency situations)
* cancel a public proposal (not a referendum!) in case the committee considers it harmful, requires 2/3 majority agreement
* enable or disable _maintenance_ mode on the **dApp staking** pallet, requires 2/3 majority agreement

Any `Technical Committee` **member** can **veto** an external proposal made by the `Main Council`.

### Community Council

The `Community Council` will initially consist of a mix of Astar Foundation members with highly involved community members (ambassadors).

The `Community Council` can:

* register a dApp into dApp staking protocol, requires 2/3 majority agreement
*utilize dApp staking on behalf of the community treasury, requires 2/3 majority agreement
*approve or reject `Community Treasury` spending requests, requires 2/3 majority agreement

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

The `Launch Period` is the time window during which public proposals are endorsed by the token holders or external proposals are made by the `Main Council`.
Depending on the _round_, either the most endorsed public proposal or the external proposal will be upgraded into a referendum.
The `Voting Period` is the time window during which the token holders can vote on the referendum.
In case the referendum passes (quorum achieved during the `Voting Period`), the `Enactment Period` is the _delay_ before the proposal is actually executed on-chain.

The `Technical Committee` can decide to fast-track external proposals (e.g. in case of an emergency situation). The regular _fast-track_ approach has a limit on the minimum voting period, while the _instant fast-track_ approach allows the committee to set the voting period to an arbitrarily short duration.

When submitting a new proposal, token holders need to _deposit_ some amount of native tokens as an _insurance_ that the proposal is not _spam_. This amount can be arbitrary, but has a minimum amount. Users should be careful when setting large amounts here since the endorsement requirement is that the deposit is _matched_.

In case the token holder votes correspond to the _winning_ side, their tokens will be _locked_ for a certain period of time. This parameter is scaled by the _conviction_.

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

#### Conviction Voting

| Conviction | Base Lock Period Multiplier | Length In Days (Shibuya) | Length In Days (Astar) |
| ---------- | ---------------------------- | ------------------------ | ---------------------- |
| 0.1        | 0x _(No Lock)_               | 0 Days                   | 0 Days                 |
| 1          | 1x                           | 1 Day                    | TBD                    |
| 2          | 2x                           | 2 Days                   | TBD                    |
| 3          | 4x                           | 4 Days                   | TBD                    |
| 4          | 8x                           | 8 Days                   | TBD                    |
| 5          | 16x                          | 16 Days                  | TBD                    |
| 6          | 32x                          | 32 Days                  | TBD                    |

### Treasuries

Anyone with native token can request a treasury payout, but they must _deposit_ some tokens when making a proposal.
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

A collective can have 0 or more members, up to a predefined limit.
To check the current number of members, it's best to refer to the on-chain data, e.g. the `polkadot-js app` or the dedicated governance UI.

| Parameter Name                          | Shibuya                  | Astar                    |
| --------------------------------------- | ------------------------ | ------------------------ |
| Main Council Motion Duration            | 5 Days                   | TBD                      |
| Technical Committee Motion Duration     | 5 Days                   | TBD                      |
| Community Council Motion Duration       | 5 Days                   | TBD                      |
| Main Council Member Change Origin       | 1/2 Main Council         | 2/3 Main Council         |
| Technical Committee Member Change Origin| 1/2 Technical Committee  | 2/3 Technical Committee  |
| Community Council Member Change Origin  | 1/2 Community Council    | 2/3 Community Council    |
| Main Council Member Limit               | 16                       | TBD                      |
| Technical Committee Member Limit        | 8                        | TBD                      |
| Community Council Member Limit          | 16                       | TBD                      |
