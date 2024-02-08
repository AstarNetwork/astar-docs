---
sidebar_position: 1
title: Technical Solution 
---

:::important
The target audience for this page are developers.
:::

Please make sure to check the (existing)(/docs/learn/dapp-staking/dapp-staking-protocol) dApp staking protocol documentation before diving into this document.

## Pallet Internals

To avoid duplicating information, please check the code documentation for respective crates/modules:

* [dApp Staking pallet](https://github.com/AstarNetwork/Astar/tree/master/pallets/dapp-staking-v3)
* [dApp Staking precompile](https://github.com/AstarNetwork/Astar/tree/master/precompiles/dapp-staking-v3)
* [inflation pallet](https://github.com/AstarNetwork/Astar/tree/master/pallets/inflation)

At the moment of writing this document, _crate pages_ aren't hosted anywhere, but you can build them locally like:

```bash
cargo doc --open --no-deps -p pallet-dapp-staking-v3
```

_Make sure to replace package name with whatever package you're interested in._

The generated documentation will contain exhaustive description of pallet extrinsic calls, types, evens, errors, storage items, examples, and more.

## Scenarios

The following subchapters are aimed to help users understand the logic behind some internal workings of the pallet.
This information is intended to be complimentary to the aforementioned pallet documentation.

### Staked Amounts In Ledger

The `AccountLedger` struct contains various pieces of information related to someone's locked & staked amounts.
For each staker, an entry of `AccountLedger` is stored in `Ledger` storage map.

Both `staked` and `staked_future` fields carry information about how much user has staked at some point.
If `staked_future` is not `None` (or `null`), then it’s guaranteed to have `era` value equal to `staked.era + 1`.
Each of these entries caries information about certain era or time span.

There are 4 distinct scenarios how these values can appear:

1. `staked` is empty (all zeroes), and `staked_future` is `None`. This means the account has nothing staked.

2. `staked` is non-empty and `staked_future` is `None`. This can be read as _“Staker has staked `staked.voting + staked.build_and_earn` amount since era `staked.era`:
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

```rust
#[pallet::storage]
pub type Ledger<T: Config> =
    StorageMap<_, Blake2_128Concat, T::AccountId, AccountLedgerFor<T>, ValueQuery>;

pub struct AccountLedger {
    /// How much active locked amount an account has.
    #[codec(compact)]
    pub locked: Balance,
    /// Vector of all the unlocking chunks.
    pub unlocking: BoundedVec<UnlockingChunk<BlockNumber>, UnlockingLen>,
    /// Primary field used to store how much was staked in a particular era.
    pub staked: StakeAmount,
    /// Secondary field used to store 'stake' information for the 'next era'.
    /// This is needed since stake amount is only applicable from the next era after it's been staked.
    ///
    /// Both `stake` and `staked_future` must ALWAYS refer to the same period.
    /// If `staked_future` is `Some`, it will always be **EXACTLY** one era after the `staked` field era.
    pub staked_future: Option<StakeAmount>,
    /// Number of contract stake entries in storage.
    #[codec(compact)]
    pub contract_stake_count: u32,
}

/// Information about period's end.
#[pallet::storage]
pub type PeriodEnd<T: Config> =
    StorageMap<_, Twox64Concat, PeriodNumber, PeriodEndInfo, OptionQuery>;
```
- The relevant entries are `staked` and `staked_future`
- In case `staked_future` is not `None` (or not `null`), then its era **MUST** be exactly `+1` compared to the `staked` era
    - e.g. if `staked` refers to `era = 15`, then `staked_future`, if it exists, must refer to `era = 16`
- How to derive list of claimable eras?

- First step is to find the final era for which rewards can be claimed. There are three possibilities:
    1. Rewards have expired and there’s nothing to claim.
    2. Rewards are from a past period (this can be checked in the `StakeAmount` struct) in which case `PeriodEnd` storage entry should be read to find the ending era of the period.
    3. Rewards are from the ongoing period in which case ending era is `current_era - 1`
- The second step is to construct a list of claimable eras with their appropriate stake amount. There are a few options.
    1. Only `staked` exists, and `staked_future` is `None`. Vector of stake entries looks like `[(staked.era, staked.amount), (staked.era + 1, staked.amount), ..., (final_era, staked.amount)]`
    2. Only `staked_future` exists, and `staked` is zero. Vector of stake entries looks like `[(staked_future.era, staked.amount), (staked_future.era + 1, staked_future.amount), ..., (final_era, staked_future.amount)]`
    3. Both `staked` and `staked_future` are non-zero. Vector of stake entries looks like `[(staked.era, staked.amount), (staked_future.era, staked_future.amount), ..., (final_era, staked_future.amount)]`

### Number of Staker Claim Calls Required

Information about eras is stored inside spans.

```rust
/// Information about rewards for each era.
///
/// Since each entry is a 'span', covering up to `T::EraRewardSpanLength` entries, only certain era value keys can exist in storage.
/// For the sake of simplicity, valid `era` keys are calculated as:
///
/// era_key = era - (era % T::EraRewardSpanLength)
///
/// This means that e.g. in case `EraRewardSpanLength = 8`, only era values 0, 8, 16, 24, etc. can exist in storage.
/// Eras 1-7 will be stored in the same entry as era 0, eras 9-15 will be stored in the same entry as era 8, etc.
#[pallet::storage]
pub type EraRewards<T: Config> =
    StorageMap<_, Twox64Concat, EraNumber, EraRewardSpan<T::EraRewardSpanLength>, OptionQuery>;

/// Information required for staker reward payout for a particular era.
#[derive(Encode, Decode, MaxEncodedLen, Clone, Copy, Debug, PartialEq, Eq, TypeInfo, Default)]
pub struct EraReward {
    /// Total reward pool for staker rewards
    #[codec(compact)]
    pub staker_reward_pool: Balance,
    /// Total amount which was staked at the end of an era
    #[codec(compact)]
    pub staked: Balance,
    /// Total reward pool for dApp rewards
    #[codec(compact)]
    pub dapp_reward_pool: Balance,
}

pub struct EraRewardSpan<SL: Get<u32>> {
    /// Span of EraRewardInfo entries.
    span: BoundedVec<EraReward, SL>,
    /// The first era in the span.
    #[codec(compact)]
    first_era: EraNumber,
    /// The final era in the span.
    #[codec(compact)]
    last_era: EraNumber,
}
```
First use the logic described above to obtain the vector of claimable eras - in fact, it's enough to obtain the first and last claimable eras.

Using the formula described in the code snippet’s comments above, the number of calls required to claim all rewards is:

```rust
let first_span_index = (first_era - (first_era % T::EraRewardSpanLength)) / T::EraRewardSpanLength;
let last_span_index = (last_era - (last_era % T::EraRewardSpanLength)) / T::EraRewardSpanLength;

let number_of_claims = last_span_index - first_span_index + 1;
```

:::note

This code assumes that there ARE claimable rewards. if the logic for getting first and/or last era is wrong (e.g. returns a number when there’s nothing to claim), the above formula won’t work.

:::

### Staker Reward Calculation

Using the information from above, reward per era can be calculated as:

`staked_amount_from_account / era_reward.staked * era_reward.staker_reward_pool`

### dApp Reward Claiming

In order to claim dApp rewards, it is necessary to know **exactly** which eras have unclaimed reward for the dApp.

```rust
/// Information about which tier a dApp belonged to in a specific era.
#[pallet::storage]
pub type DAppTiers<T: Config> =
    StorageMap<_, Twox64Concat, EraNumber, DAppTierRewardsFor<T>, OptionQuery>;


pub struct DAppTier {
    /// Unique dApp id in dApp staking protocol.
    #[codec(compact)]
    pub dapp_id: DAppId,
    /// `Some(tier_id)` if dApp belongs to tier and has unclaimed rewards, `None` otherwise.
    pub tier_id: Option<TierId>,
}

pub struct DAppTierRewards<MD: Get<u32>, NT: Get<u32>> {
    /// DApps and their corresponding tiers (or `None` if they have been claimed in the meantime)
    pub dapps: BoundedVec<DAppTier, MD>,
    /// Rewards for each tier. First entry refers to the first tier, and so on.
    pub rewards: BoundedVec<Balance, NT>,
    /// Period during which this struct was created.
    #[codec(compact)]
    pub period: PeriodNumber,
}
```

The check can be done by reading `DAppTiers` storage, and checking if the `dapps` vector has an entry associated with the `dapp_id`. Please note that `dapp_id` is `u16` dApp identifier which can be read from the `DAppInfo` struct in `IntegratedDAppsStorage`.

The vector is sorted by dApp id, in ascending order, so binary search can be used to find the value quickly. In case dApp exists but `DAppTier` struct’s `tier_id` is `None` (or `null`) it means that reward has already been claimed. Otherwise, it will contain `tier_id`.

Once `tier_id` has been found, it’s enough to use it as index in the `rewards` vector to find the reward associated with that tier. No need to manually calculate what the dApp reward will be.

**How much into history do we need to look?**

First step is to find the oldest period for which rewards can be claimed:

`oldest_period = current_period - T::RewardRetentionInPeriods::get()`

Once this has been done, read `PeriodEnd` storage to find when did the `oldest_period - 1` end. The era after that one (or +2 to be more precise since +1 refers to the voting subperiod era) will be the first one that has the potential to be claimable.

### Bonus Rewards

```rust
/// Information about how much each staker has staked for each smart contract in some period.
#[pallet::storage]
pub type StakerInfo<T: Config> = StorageDoubleMap<
    _,
    Blake2_128Concat,
    T::AccountId,
    Blake2_128Concat,
    T::SmartContract,
    SingularStakingInfo,
    OptionQuery,
>;

/// Information about how much a particular staker staked on a particular smart contract.
///
/// Keeps track of amount staked in the 'voting period', as well as 'build&earn period'.
#[derive(Encode, Decode, MaxEncodedLen, Copy, Clone, Debug, PartialEq, Eq, TypeInfo, Default)]
pub struct SingularStakingInfo {
    /// Staked amount
    staked: StakeAmount,
    /// Indicates whether a staker is a loyal staker or not.
    loyal_staker: bool,
}

pub struct PeriodEndInfo {
    /// Bonus reward pool allocated for 'loyal' stakers
    #[codec(compact)]
    pub bonus_reward_pool: Balance,
    /// Total amount staked (remaining) from the voting period.
    #[codec(compact)]
    pub total_vp_stake: Balance,
    /// Final era, inclusive, in which the period ended.
    #[codec(compact)]
    pub final_era: EraNumber,
}
```
When checking whether staker is eligible for bonus rewards,  it is necessary to check all the `StakerInfo` entries related to that staker.

If `StakeAmount` refers to a past **period** (but not expired!), and `loyal_staker` flag is set to `true`, it means staker is eligible for the bonus reward.

The reward can be calculated as:

`bonus_reward = staking_info.stake_amount.voting / period_end_info.total_vp_stake * period_end_info.bonus_reward_pool`

Once reward has been claimed, the database entry will be cleaned up.

### Expired Rewards

Rewards cannot be claimed for indefinite period of time; they have an expiry ‘date’.

The related parameter is:

```rust
/// Number of periods for which we keep rewards available for claiming.
/// After that period, they are no longer claimable.
#[pallet::constant]
type RewardRetentionInPeriods: Get<PeriodNumber>;
```

Rewards are only claimable until a predefined number of periods pass (see the parameter above).

To calculate the oldest claimable period, it’s enough to check if:

`period_for_which_reward_is_claimed ≥ current_period - RewardRetentionInPeriods`

### Understanding Tier Rewards

At the end of each Build&Earn subperiod era, dApp scores are calculated, and according to them, dApps are assigned into tiers.

Each tier has a limited capacity, and has a threshold which dApps need to satisfy in order to enter it.

The dApp score is simply the total staked amount on the dApp (value can be read from `ContractStake` storage map).

**Tier Configuration**

Tiers are described using the struct below. This struct is stored in `TierConfig` storage.

```rust
pub struct TiersConfiguration<NT: Get<u32>> {
    /// Total number of slots.
    #[codec(compact)]
    pub number_of_slots: u16,
    /// Number of slots per tier.
    /// First entry refers to the first tier, and so on.
    pub slots_per_tier: BoundedVec<u16, NT>,
    /// Reward distribution per tier, in percentage.
    /// First entry refers to the first tier, and so on.
    /// The sum of all values must be exactly equal to 1.
    pub reward_portion: BoundedVec<Permill, NT>,
    /// Requirements for entry into each tier.
    /// First entry refers to the first tier, and so on.
    pub tier_thresholds: BoundedVec<TierThreshold, NT>,
}
```
Using the above information, and dApp scores, tiers are filled out.

**dApp Tiers**

Once tiers have been assigned, they are stored into `DAppTiers` storage map. This is done at the end of every Build&Earn subperiod era, or at the beginning of the block of the next era to be more precise.

Essentially, it is enough to check that storage item once it’s been written to understand how many tier slots have been occupied and how many are unused.

It is possible however, that in that very same block, someone calls `claim_dapp_reward`. This will remove some of the entries from the storage, thus not providing the correct picture. To build 100% accurate picture of how many slots were occupied:

- find the block at which new era started, preceded by Build&Earn subperiod era
- read the `DAppTiers` storage map, specifying the previous era number
- parse the block for all `DAppReward` events
- combine the storage entry with events to build accurate picture

**Reward Pools**

Reward pools per era can be read from the `Inflation` pallet, by reading the `ActiveInflationConfig` storage value.

Each tier gets a portion of the reward pool (denoted as `reward_portion` in the configuration above). These portions are further partitioned per slots.

E.g. for tier 1 dApp reward is calculated as:

`tier_1_dapp_reward = dapp_reward_pool_per_era * reward_portion[0] / slots_per_tier[0]`

### When To Call Expired Entry Cleanup

- Each account can have a limited amount of contract stake entries
    - `T::MaxNumberOfStakedContracts` is the amount of staked entries contract can have
    - if an account has number of contract stake entries equal to the limit, calling `stake` might fail due to an `TooManyStakedContracts` error
- A special call, `cleanup_expired_entries` can be used to do the cleanup of expired entries to help with this problem
- Entry is considered to be expired if:
    1. It's from a past period & the account wasn't a loyal staker, meaning there's no claimable bonus reward.
    2. It's from a period older than the oldest claimable period, regardless whether the account was loyal or not.
- However, it is possible that the aforementioned cleanup call won’t work IF the staker account is trying to stake on more contracts than it is allowed.
- A pseudocode explaining this scenario would be:

```rust
// user wants to call `stake` on a `smart_contract X`

staker = ...;
smart_contract = X;

ledger = Ledger::get(&staker);

// If we're at the limit, and staker has no entry for the smart contract
// being staked on right now (it is new).
if ledger.contract_stake_count == T::MaxNumberOfStakedContracts
      && !StakerInfo::contains_key(&staker, &smart_contract)
{
  // Cleanup is needed!
  // It should be the first call in the batch.
	
} else {
  // Everything is fine, error cannot happen.
}
```