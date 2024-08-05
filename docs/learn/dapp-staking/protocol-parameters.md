---
sidebar_position: 3
title: dApp Staking Parameters
---

## Overview

The following parameters are tightly tied to dApp staking, however, some parameters are shared with the _Tokenomics 2.0_ model.
To find out more, please check the documentation [here](/docs/learn/tokenomics2/Inflation/).

### Era Reward Span Length

How many eras of reward information do we store in a single database entry.
This puts an upper limit on how many rewards can a single `claim_staker_reward` call claim.
Increasing this number has an impact on the PoV size consumed by the claim calls so it has to be kept relatively small.

### Reward Retention In Periods

For how many periods do we keep staker & dApp rewards before they expire, and become unavailable for claiming.
The larger this parameter is, the higher the deviation from the max inflation rate can occur since if many users have very old unclaimed rewards, and decide to claim them at a similar point in time, this would cause inflation to be spike up.

### Max Number Of Contracts

There is a technical limitation on how many dApps the protocol can support at this time.
However, this limit won't have a _real_ impact on the protocol since at the moment of writing this document, neither Astar or Shiden are close to that limit.

### Max Unlocking Chunks

Maximum number of unlocking chunks that a staker can simultaneously have.
The _chunk_ consists of some _amount_ together with _block number_ after which the chunk becomes unlocked.

### Minimum Locked Amount

The minimum amount user has to _lock_ in order to participate in dApp staking protocol.
From the technical standpoint, the _locked_ amount should cover the storage rent fee requirements, and prevents spamming of accounts with low _lock_ amount.
From the user’s standpoint, having low _locked_ amount doesn’t make much sense because their rewards might not even be high enough to cover the transaction fee expense to claim those rewards.

### Unlocking Period

Number of blocks required for _unlocking chunk_ to become _unlocked_ after starting the unlocking process.

### Max Number Of Staked Contracts

Max number of staked contract entries a single account is allowed to have at once.
This is again a technical bound, to provide additional security to the pallet.

### Minimum Stake Amount

Similar to the _minimum lock amount_, but refers to the _stake_ amount.
It's suggested to keep this value same as the _minimum locked amount_.

### Number Of Tiers

Number of distinct tiers in the protocol.

### Reward Distribution

Describes the portion/percentage of the dApp reward pool that goes towards each tier.
E.g. `[10%, 20%, 30%, 40%]` means that `10%` of the reward pool goes for **tier 1** rewards, `20%` for **tier 2** rewards, and so on.

### Slot Distribution

Describes the portion/percentage of the total number of slots that goes towards each tier.
E.g. `[5%, 15%, 20%, 60%]` means that `5%` of the total slots are assigned for **tier 1** dApps, `15%` for **tier 2** dApps, and so on.

### Tier Thresholds

The threshold a dApp must meet, based on a percentage of the total issuance staked, to enter a tier.
There are two types of threshold percentages:

* `Fixed` - A fixed percentage of the total issuance as staked funds, constant and unchanging between periods.
* `Dynamic` - A percentage of the total issuance as staked funds that can change between periods, with a minimum percentage *minimum_required_percentage* that cannot be reduced below.

### Price Aggregation Duration

Time period, expressed in blocks, during which native currency price is aggregated. When expired, average value is calculated and stored into the _moving-average_ circular buffer.

## Circular Buffer Length

Length of the circular buffer used to implement the _moving-average_ solution.

## Network Values

| Parameter name                      | Astar                  | Shiden                 | Shibuya                    |
| ----------------------------------- | ---------------------- | ---------------------- | -------------------------- |
| Era Reward Span Length              | 16                     | 16                     | 16                         |
| Reward Retention In Periods         | 4                      | 3                      | 2                          |
| Max Number Of Contracts             | 500                    | 500                    | 500                        |
| Max Unlocking Chunks                | 8                      | 8                      | 8                          |
| Minimum Locked Amount               | 500 ASTR               | 50 SDN                 | 5 SBY                      |
| Unlocking Period                    | 9                      | 4                      | 4                          |
| Max Number Of Staked Contracts      | 16                     | 16                     | 8                          |
| Minimum Stake Amount                | 500 ASTR               | 50 SDN                 | 5 SBY                      |
| Number Of Tiers                     | 4                      | 4                      | 4                          |
| Reward Distribution                 | [25%, 47%, 25%, 3%]    | [25%, 47%, 25%, 3%]    | [40%, 30%, 20%, 10%]       |
| Slot Portions                       | [5%, 20%, 30%, 45%]    | [5%, 20%, 30%, 45%]    | [10%, 20%, 30%, 40%]       |
| Tier 1 Threshold (total issuance %) | Dynamic(3.57%/2.38%)   | Dynamic(3.57%/2.38%)   | Dynamic(0.0020%/0.0017%)   |
| Tier 2 Threshold (total issuance %) | Dynamic(0.89%/0.6%)    | Dynamic(0.89%/0.6%)    | Dynamic(0.0013%/0.0010%)   |
| Tier 3 Threshold (total issuance %) | Dynamic(0.238%/0.179%) | Dynamic(0.238%/0.179%) | Dynamic(0.00054%/0.00034%) |
| Tier 4 Threshold (total issuance %) | Fixed(0.02%)           | Fixed(0.06%)           | Fixed(0.00014%)            |
| Price Aggregation Duration          | 7200 blocks            | 7200 blocks            | 7200 blocks                |
| Circular Buffer Length              | 7                      | 7                      | 7                          |
