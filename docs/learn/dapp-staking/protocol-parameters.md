---
sidebar_position: 3
title: dApp Staking Parameters
---

## Overview

The following parameters are tightly tied to dApp staking, however, some parameters are shared with the _Tokenomics 2.0_ model.
To find out more, please check the documentation [here](/docs/learn/tokenomics2/Inflation).

### Era Reward Span Length

How many eras of reward information do we store in a single database entry.
This puts an upper limit on how many rewards can a single `claim_staker_reward` call claim.
Increasing this number has an impact on the PoV size consumed by the claim calls so it has to be kept relatively small.

### Reward Retention In Periods

For how many periods do we keep staker & dApp rewards before they expire, and become unavailable for claiming.
The larger this parameter is, the higher the deviation from the max inflation rate can occur since if many users have very old unclaimed rewards, and decide to claim them at a similar point in time, this would cause inflation to be spike up.

### Max Number Of Contracts

Tokenomics 3.0 introduces a tighter active bound for reward processing:

- **Active rewarded dApps (per era): 16** — at most 16 dApps are reward-eligible per era across tiers.
- **Legacy compatibility bound: 500** — historical reward-era structures and claim paths may reference up to 500 dApps for backward compatibility.

This separation exists so the protocol can keep compatibility with older stored reward structures while enforcing a much smaller active set going forward.

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

### Max Bonus Safe Moves Per Period

Legacy/internal compatibility parameter.

Historically used to bound "safe move" actions related to bonus-eligibility bookkeeping. Tokenomics 3.0 has **no user-facing bonus rewards**, so integrators should not promote bonus mechanics. This constant may still exist for legacy/internal state transitions and backward compatibility.

### Number Of Tiers

Number of distinct tiers in the protocol.

### Reward Distribution

Describes the portion/percentage of the dApp reward pool that goes towards each tier.
E.g. `[10%, 20%, 30%, 40%]` means that `10%` of the reward pool goes for **tier 1** rewards, `20%` for **tier 2** rewards, and so on.

### Slot Distribution

Describes the portion/percentage of the total number of slots that goes towards each tier.
E.g. `[5%, 15%, 20%, 60%]` means that `5%` of the total slots are assigned for **tier 1** dApps, `15%` for **tier 2** dApps, and so on.

### Tier Rank Multipliers (`tier_rank_multipliers`)

Per-tier vector of **bips** (basis points) where `10_000 = 100%`.

For each tier, this value defines how much **rank 10** earns relative to **rank 0** (i.e., it parameterizes the deterministic rank reward slope). A value of `10_000` disables rank-based increase for that tier. The exact weight/normalization formulas are documented in the technical overview.

### Tier Thresholds

The threshold a dApp must meet, based on a percentage of the total issuance staked, to enter a tier.
There are two types of threshold percentages:

* `Fixed` - A percentage of the total issuance as staked funds.
* `Dynamic` - A percentage of the total issuance as staked funds. This variant includes an additional adjustment in later calculations with a delta based on changes in the number of slots for each era. The threshold amount derived cannot drop below a defined minimum percentage, *minimum_required_percentage*. Similarly, the derived threshold amount cannot exceed a defined maximum percentage, *maximum_possible_percentage*.

### Price Aggregation Duration

Time period, expressed in blocks, during which native currency price is aggregated. When expired, average value is calculated and stored into the _moving-average_ circular buffer.

## Circular Buffer Length

Length of the circular buffer used to implement the _moving-average_ solution.

## Network Values

| Parameter name                                     | Astar                         | Shiden                      | Shibuya                            |
| -------------------------------------------------- | ----------------------------- | --------------------------- | ---------------------------------- |
| Era Reward Span Length                             | 16                            | 16                          | 16                                 |
| Reward Retention In Periods                        | 4                             | 3                           | 2                                  |
| Max Number Of Contracts                            | 16                            | 16                          | 16                                 |
| Max Unlocking Chunks                               | 8                             | 8                           | 8                                  |
| Minimum Locked Amount                              | 500 ASTR                      | 50 SDN                      | 5 SBY                              |
| Unlocking Period                                   | 9                             | 4                           | 4                                  |
| Max Number Of Staked Contracts                     | 16                            | 16                          | 8                                  | 
| Minimum Stake Amount                               | 500 ASTR                      | 50 SDN                      | 5 SBY                              |
| Max Bonus Safe Moves Per Period (legacy/internal)  | 2                             | 2                           | 2                                  |
| Baseline Native Currency Price                     | 0.05 USD                      | 0.05 USD                    | 0.05 USD (mock)                    |
| Number Of Tiers                                    | 4                             | 4                           | 4                                  |
| Reward Distribution                                | [0%, 70%, 30%, 0%]            | [25%, 47%, 25%, 3%]         | [40%, 30%, 20%, 10%]               |
| Slot Portions                                      | [0%, 37.5%, 62.5%, 0%]        | [5%, 20%, 30%, 45%]         | [10%, 20%, 30%, 40%]               |
| Tier Rank Multipliers (bips; rank10 vs rank0)      | [0, 24_000, 46_700, 0]         | Runtime configured          | Runtime configured                 |
| Tier 1 Threshold (total issuance % - base/min/max) | Fixed(2.32%)                  | Dynamic(3.57%/2.38%/100%)   | Dynamic(0.0020%/0.0017%/0.0030%)   |
| Tier 2 Threshold (total issuance % - base/min/max) | Fixed(0.93%)                  | Dynamic(0.89%/0.6%/100%)    | Dynamic(0.0013%/0.0010%/0.0020%)   |
| Tier 3 Threshold (total issuance % - base/min/max) | Fixed(0.35%)                  | Dynamic(0.238%/0.179%/100%) | Dynamic(0.00054%/0.00034%/0.0010%) |
| Tier 4 Threshold (total issuance % - base/min/max) | Fixed(0%)                     | Fixed(0.06%)                | Fixed(0.00014%)                    |
| Price Aggregation Duration                         | 7200 blocks                   | 7200 blocks                 | 7200 blocks                        |
| Circular Buffer Length                             | 7                             | 7                           | 7                                  |
