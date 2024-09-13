---
sidebar_position: 1
title: Technical Solution 
---

:::important
The target audience for this page are developers building projects which interact with dApp Staking protocol.
:::

Please make sure to check the [existing](/docs/learn/dapp-staking/dapp-staking-protocol) dApp staking protocol documentation before diving into this document.

## Pallet Internals

To avoid duplicating information, please check the code documentation for respective crates/modules.
The _rustdoc_ can be found [here](https://astarnetwork.github.io/Astar/astar_collator/index.html).

User is encouraged to check out `pallet-dapp-staking`, `pallet-evm-precompile-dapp-staking` and `pallet-inflation`.

## Scenarios

The following subchapters are aimed to help users understand the logic behind some internal workings of the pallet.
This information is intended to be complimentary to the aforementioned pallet documentation.

The `CurrentProtocolState` storage entry is relevant essentially to every functionality, so it won't be repeated in every subchapter.

### Staked Amounts In Ledger

The `AccountLedger` struct contains various pieces of information related to someone's locked & staked amounts.
For each staker, an entry of `AccountLedger` is stored in `Ledger` storage map.

Both `staked` and `staked_future` fields carry information about how much user has staked at some point.
If `staked_future` is not `None` (or `null`), then it’s guaranteed to have `era` value equal to `staked.era + 1`.
Each of these entries caries information about certain era or time span.

There are 4 distinct scenarios how these values can appear:

1. `staked` is empty (all zeroes), and `staked_future` is `None`. This means the account has nothing staked.

2. `staked` is non-empty and `staked_future` is `None`. This can be read as: "Staker has staked `staked.voting + staked.build_and_earn` amount since era `staked.era`".
    E.g., if `staked.era = 5` and current era is 7, it means that the `staked` entry is valid for eras **5, 6 and 7** (assuming they all belong to the same period).

3. `staked` is empty (all zeroes), and `staked_future` has some non-zero value. This is interpreted in the same way as the staked value in the previous example.

4. `staked` is non-empty, and `staked_future` has some non-zero value. In this case, `staked` describes **a single era**, while `staked_future` describes one or more eras.
   E.g. if `staked.era = 5` , and `staked_future.era = 6` it’s interpreted as:
   * In era 5, staker has staked `staked.voting + staked.build_and_earn` amount.
   * From era 6 and onwards, staker has staked `staked_future.voting + staked_future.build_and_earn`

`stake` and `staked_future` entries are not valid indefinitely, they will expire after the period finishes. However, to expire doesn’t mean they are deleted or anything
similar to that. Instead, `staked.period` or `staked_future.period` need to be checked to understand whether they match the ongoing period number.
If they don’t match, they can be ignored & treated as if stake amount is **zero**.

E.g. if `staked.era = 5` and `staked.period = 1`, and current period is `2`, we need to check `PeriodEnd` storage map to find out when did `period 1` end.
Let's assume that `period 1` ended in era 20 - it would mean that the `staked` entry is valid from era 5 up to era 20.

### Understanding Claimable Eras For Stakers

There are two storage entries to consider `Ledger` (`AccountLedger` struct) and `PeriodEnd` (`PeriodEndInfo` struct).

The relevant entries for the `AccountLedger` are `staked` and `staked_future`.
In case `staked_future` is not `None` (or not `null`), then its era **must** be exactly `+1` compared to the `staked` era.
E.g. if `staked.era = 15` , then `staked_future.era`, if it exists, must be `16`.

First step in getting claimable staker reward eras to find the final era for which rewards can be claimed. There are three possibilities:
    1. Rewards have expired and there’s nothing to claim.
    2. Rewards are from a past period (`staker.period` or `staker_future.period` is older than the ongoing period) in which case `PeriodEnd` storage entry should be read to find the ending era of that period.
    3. Rewards are from the ongoing period in which case ending era is `protocol_state.current_era - 1`

Once we have the _latest_ era for which the rewards can be claimed, we can construct a list of claimable eras with their appropriate stake amount.

There are a few options:
_(please note that `.amount` notation is just a simplification for `staked.voting + staked.build_and_earn` sum)_

1. Only `staked` exists, and `staked_future` is `None`. Vector of stake entries looks like `[(staked.era, staked.amount), (staked.era + 1, staked.amount), ..., (final_era, staked.amount)]`

2. Only `staked_future` exists, and `staked` only has zero entries. Vector of stake entries looks like `[(staked_future.era, staked.amount), (staked_future.era + 1, staked_future.amount), ..., (final_era, staked_future.amount)]`

3. Both `staked` and `staked_future` are non-zero. Vector of stake entries looks like `[(staked.era, staked.amount), (staked_future.era, staked_future.amount), ..., (final_era, staked_future.amount)]`

### Number of Staker Claim Calls Required To Claim All Rewards

Stakers can have many pending rewards if they don't claim regularly. This is normal and expected.
One `claim_staker_rewards` call can claim more than 1 such reward.

To calculate number of calls required to claim **all** rewards, we need to to the following:

1. Repeat the step from the subchapter which explains how to get list of claimable eras.

2. Information about era rewards is stored inside spans - `EraRewards` storage map & `EraRewardSpan` struct.
Span length is defined by a runtime constant `EraRewardSpanLength`.

Once we know claimable eras, we need to take the first and last era and put it into the following calculation:

```rust
let first_span_index = (first_era - (first_era % EraRewardSpanLength)) / EraRewardSpanLength;
let last_span_index = (last_era - (last_era % EraRewardSpanLength)) / EraRewardSpanLength;

let number_of_claims = last_span_index - first_span_index + 1;
```

:::note
This code assumes that there _are_ claimable rewards. if the logic for getting first and/or last era is wrong (e.g. returns a number when there’s nothing to claim), the above formula won’t work.
:::

### Staker Reward Calculation

Pending staker reward for a concrete era can be calculated using a simple formula.

1. Find out the `total staked amount` a staker had in some `era`. See previous chapters on how to extract this information from the `Ledger` storage map.
2. Find out how much was staked in total at the end of an `era`, and what the reward pool was. This can be read from the `EraRewards` storage map.

`reward = total_staked_amount  / era_reward.staked * era_reward.staker_reward_pool`

:::note
Developer should take note of the order of operations above to prevent overflow/underflow. Due to both **ASTR** and **SDN** currency having 18 decimals, _BigInteger_ usage is encouraged.
:::

### dApp Reward Claiming

In order to claim dApp rewards, it is necessary to know **exactly** which eras have unclaimed reward for the dApp.
The relevant storage map is `DAppTiers` which maps `era` to information about dApp tiers & tier rewards.

After reading `DappTiers` storage map for a particular `era`, `dapp_tiers_rewards.dapps` _tree map_ must be checked whether it contains the `dapp_id` of the smart contract for which we want to claim rewards. Please note that `dapp_id` is `u16` dApp identifier which can be read from the `DAppInfo` struct in `IntegratedDAppsStorage`.

In case entry for the `dapp_id` exists, it will also contain the `tier_id` value which can be used to read the earned dApp reward from `dapp_tier_info.rewards`.
It’s enough to use `tier_id` it as index in the `rewards` vector to find the reward associated with that tier.

Once reward has been claimed, the associated entry will be removed `dapp_tiers_rewards.dapps` _tree map_.

### Reward Expiry

After predefined amount of periods have passed, unclaimed rewards will expire.
This means that staker or dApp owner won't be able to claim these anymore.

The oldest period for which the rewards can be claimed can be calculated like this:

`oldest_period = current_period - RewardRetentionInPeriods`

where `RewardRetentionInPeriods` is a runtime constant.

This can be used to limit the _iteration_ over `DappTiers` storage.

Once we know the oldest period, we can use `PeriodEnd` storage map to find when did the `oldest_period - 1` period end. The era after that one (or +2 to be more precise since +1 refers to the voting subperiod era) will be the first one that has the potential to be claimable.

### Bonus Rewards

When checking whether staker is eligible for any bonus rewards, it is necessary to check all of the `StakerInfo` double storage map entries related to that staker.
The first key of the double map is `staker account` so it can easily be iterated via prefix iteration.

If the `staked` field of the `SingularStakingInfo` refers to a valid **past period** (non-expired), and `loyal_staker` flag is set to `true`, it means staker is eligible for the bonus reward.

It's also required to read the `PeriodEnd` storage map for information about the finished period.

The reward can be calculated as:

`bonus_reward = singular_staking_info.stake_amount.voting / period_end_info.total_vp_stake * period_end_info.bonus_reward_pool`

Once reward has been claimed, the database entry will be cleaned up.

### Understanding Tier Rewards

At the end of each `Build&Earn` subperiod era, dApp scores are calculated, and according to them, dApps are assigned into tiers.

Each tier has a limited capacity, and has a threshold which dApps need to satisfy in order to enter it.
The dApp score is simply the total staked amount on the dApp (value can be read from `ContractStake` storage map).
Tiers are described using `TierConfiguration` struct which is stored in `TierConfig` storage.
Using that information, dApps are sorted out and assigned into appropriate tiers.

Once tiers have been assigned, they are stored into `DAppTiers` storage map. This is done at the end of every `Build&Earn` subperiod era, or at the beginning of the block of the next era to be more precise.

Essentially, it is enough to check that storage item once it’s been written to understand how many tier slots have been occupied and how many are unused.

However, it is possible that in that very same block, someone calls `claim_dapp_reward` extrinsic. This will remove some of the entries from the storage, thus not providing the correct picture of tier usage. To build 100% accurate picture of how many slots were occupied:

1. Find the block at which new era started, when dApps were assigned to tiers.
2. Use Runtime Call API to get the tier assignment for the **previous block**

### Reward Pools

Reward pools per era can be read from the `Inflation` pallet, by reading the `ActiveInflationConfig` storage value.

Each tier gets a portion of the reward pool (denoted as `reward_portion` in the configuration). These portions are further partitioned per slots.

E.g. for tier 1 dApp reward is calculated as:

`tier_1_dapp_reward = dapp_reward_pool_per_era * reward_portion[0] / slots_per_tier[0]`

### When To Call Expired Entry Cleanup

Each account can have a limited amount of `ContractStakeEntries`. This is denoted by `MaxNumberOfStakedContracts` runtime constant.

If an account has number of contract stake entries equal to the limit, calling `stake` might fail due to an `TooManyStakedContracts` error.
A special extrinsic call, `cleanup_expired_entries` can be used to do the cleanup of expired entries to help with this problem.

Entry is considered to be expired if:
    1. It's from a past period & the account wasn't a loyal staker, meaning there's no claimable bonus reward.
    2. It's from a period older than the oldest claimable period, regardless whether the account was loyal or not.

However, it is possible that the aforementioned cleanup call won’t work if the staker account is trying to stake on more contracts than it is allowed.
In that case, staker should simply claim their pending rewards before attempting future actions.

### Runtime API

Runtimes supporting `dapp-staking-v3` functionality will also expose runtime API called: `DappStakingApi`.

Please refer [here](https://github.com/AstarNetwork/Astar/tree/master/pallets/dapp-staking/rpc/runtime-api) for a list of supported functions.
