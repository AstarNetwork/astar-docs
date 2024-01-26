---
sidebar_position: 1
title: V3 Technical Architecture
---

## Introduction

:::important
Please note that this is a technical document on the design of the dApp Staking V3 as it has been imagined. It serves as a reference and helps to better understand its architecture. 

:::

For the final implementation on Astar Network or Shiden, please refer to the documentations on Astar Github.

**Resources:**   
https://docs.astar.network/docs/learn/dapp-staking/dapp-staking-protocol
https://github.com/AstarNetwork/Astar/tree/master/pallets/dapp-staking-v3
https://github.com/AstarNetwork/Astar/tree/master/precompiles/dapp-staking-v3

# I. Overview

### Eras & Periods

The concept of eras is kept from the old dApp staking and a new concept of `periods` is introduced.

Each `period` consists of two `subperiods` - `voting subperiod` followed by a `build&earn subperiod`:
- `voting subperiod` length is expressed in eras, but it only lasts for a single era:
    - **E.g.** if standard era length is 7200 blocks, and voting period lasts for 7 standard eras, it means that voting period lasts for 7200 x 7 = 50400 blocks. For the sake of simplicity, this is considered to be a single voting period era.
- `build&earn subperiod` length is also expressed in eras but unlike `voting period`, can consist of 1 or more standard era lenghts:
    - **E.g.** if it is said that build&earn subperiod lasts for 30 eras, it means that 30 distinct eras will happen during that period, before a new voting period is triggered.

Rewards are only earned from eras that are part of build&earn period.

### Register & Unregister Contracts

This will remain a permissioned action, same as the old dApp Staking.

A new configurable origin type will be introduced: `ManagerOrigin`, which will have the privilege to register & unregister contracts 
- This will be useful for integrating with OpenGov style governance (special origin type for contract registration);

Contract unregister action cleans up all storage entries related to the contract, except the info when contract was unregistered.  
It’s not possible to re-register a contract after it has been unregistered.

### Contract Owner & Reward Destination

When contract is registered, it has an *owner* account. By default, this account is beneficiary of dApp rewards.

Owner can be changed via an *change owner* call and reward beneficiary account can also be changed via a dedicated call.

### Locking & Unlocking Funds

Locking funds means making them eligible for staking usage. Once funds are locked, they become eligible for staking immediately.  
User can only unlock funds which **aren’t** staked.

Unlocking funds will trigger unlocking period (same as old dApp Staking’s unbonding period) but this time it will be measured in blocks instead of eras.  
Once unlocking period passes, user can withdraw their unlocked funds into their free balance.

Users will also have an option to *relock* all of their unlocking chunks if they change their minds later.

### Staking & Unstaking Funds

Users can at any point decide to stake or to unstake funds from a contract.

Unlike in dApp staking v2, in v3 it’s not possible to stake for the current era, but only for the next one instead. 
- This is to prevent stakers earning rewards even though they were only active stakers for e.g. a single block of an era;
- Staker can unstake from the current era though;

Those who stake during the `voting subperiod` and don’t reduce their stake amount below what was staked during the `voting subperiod` during the `build&earn subperiod` will be eligible for bonus rewards.

If users have unclaimed rewards from the previous period or eras, they **NEED** to `claim` them first before staking in the new period.
- To put into another words, calling `stake` or `unstake` won’t be possible unless **ALL** pending rewards have been claimed;
- This will help prevent unbounded storage growth and make the overall runtime logic much simpler;

Since there is no `unbonding period` related to unstaking, the `transfer_nomination` call **won’t be** included in the public API. However, the same functionality can be achieved just by batching `[stake, unstake]` calls.

### Claiming Stake Rewards

Stake rewards are rewarded for those who `stake` their tokens on a dApp. Even if tokens are `locked`, they won’t earn any rewards unless they are `staked`. Even though stakes are specific to a dApp, reward claiming will be done for all staked dApps via a single call (this is a change compared to v2 and it will make claiming more efficient & cheaper).

Single call will be able to claim rewards for multiple eras (while retaining **O(1)** complexity).

Unlike v2, there won’t be an option for compounding rewards, at least not directly via an extrinsic call to make compounding rewards work, frontend will need to correctly estimate the reward from claims, and call `lock & stake` extrinsic calls in a batch. The main reason why there’s no intrinsic compounding reward support is that reward claiming isn’t done for a specific contract, but for all of them at once. What dApp would user re-stake their funds on?

The reward for user is calculated using a simple formula:

$user\_reward = total\_stake\_reward * \frac{user\_stake}{total\_staked}$

Rewards are ONLY issued when they are being claimed.

### Claiming Bonus Rewards

If staker staked X **amount** during `voting subperiod` and hasn’t reduced their stake amount below X during `build&earn subperiod`, they will be eligible for extra rewards

$bonus\_reward = total\_bonus\_reward * \frac{user\_contract\_vp\_stake}{total\_vp\_stake}$

The formula demonstrates that bonus reward is calculated per contract and if user was a *loyal staker* for two distinct contracts, they will need to execute two `claim` calls, one for each contract. **vp** refers to `voting subperiod`.

It will only be possible to claim bonus reward for **1 past period**, and only if this period isn’t beyond history depth limit. This shouldn't be a problem, since it's safe to assume that the periods will last longer than a month.

Rewards are ONLY issued when they are being claimed..

### Claiming Dapp Rewards

After an era ends, dApps will be assigned into tiers.

The call footprint is kept the same as in v2, where both smart contract & era need to be specified when calling `claim`.  
Rewards are ONLY issued when they are being claimed.

## II. Public Calls & Internals

These are the name of the calls exposed by the pallet. Whatever naming is used in frontend can be entirely different.

### 1. Internals

This covers important internal calls which are critical part of the dApps staking v3 design.

#### >> on_initialize
Executed at the beginning of each block. The solution can be easily extended to utilize scheduler pallet later instead of `on_initialize`.

Checks if new era or new period needs to begin:
- In case no new era/periods should start from this block, do nothing;
- If pallet is in maintenance mode, do nothing;
- In case changes are needed:
    - **New era during build&earn period:**
        - calculate dApp tier allocation & reward pool;
     - assign staker reward pool;
    - **Final era of build&earn period:**
        - switch over to the voting period;
        - this also means switching over to the next period;
        - calculate new tier configuration;
    - **New era during voting period:**
        - switch over to the build&earn period;

:::note

Storage cleanup should occur after switching over to a new period, or can be done lazily via hooks.

:::

#### >> get_dapp_tier_assignment

Iterates over all dApps and their stake, and distributes them into tiers. A simple way of tier assignment is used, no complex formula is involved - **total stake amount**.  
dApps are assigned into tiers, and reward per tier is calculated.

:::note
There are two features missing from the current implementation:  
Handling for a corner case when multiple dApps have the same score, but tier hasn’t got enough capacity.
:::

The calculation is heavy on the DB reads, and includes two sorts.

### 2. Register

`register(developer, contract)` : Registers a new developer *account < > smart contract* pair. 

It's a permissioned action, origin defined by a configurable type. *(In case normal user calls `register`, an error is thrown)*  
There is no registration deposit.

Even though each dApp has a unique address, an additional unique `u16` dApp Id is assigned to the dApp once it’s been created.

### 3. Unregister

`unregister(contract)` : Unregisters the contract, marking it as unregistered from current era. 

Removes storage entry (or entries) related to that contract, except for info when it was unregistered.

### 4. Lock

`lock(amount)` : Locks up some amount in dApps staking.

*Frontend will ensure user never locks their entire balance in dApp staking, preventing them from paying fees in the future.* 

It’s enough to store how much user has locked **right now**, there's no need for historical data.
Locked amount should always be above some threshold to prevent account spamming (inflating number of dApp staking participants).

In case user specifies value which is higher than what is available for locking, lock what’s available.

### 5. Unlock

`unlock(amount)` : Unlocks some *amount* from dApps staking.

Unlocking can be only be used if there is a locked amount which isn’t used for staking. Otherwise, user should first unstake from a contract, after which they can unlock.

Each time some amount is unlocked, it must undergo unlocking period before it can be withdrawn back to the free balance by the user.

In case user specifies more than is currently locked, everything is unlocked.  
In case unlocking the specified amount would bring user below minimum lock amount, everything is unlocked.  

Unlocking period is expressed in eras, but these eras are converted to block numbers. *This is a change compared to dApp staking v2 where eras were counted directly.*

### 6. Claim_unlocked

`claim_unlocked()` : claims all of the eligible unlocking chunks into the user’s free balance.

In case total locked amount is brought to zero, and no more staker info entries remain, ledger is cleaned up from the storage:
- If some staker info entries remain, full unlock will not be possible and user will first have to clean up those entries (either by claiming rewards or calling a dedicated cleanup function);
- This is important since it ensures no leftover storage remains after an account fully exits the protocol;

### 7. Relock_unlocking

`relock_unlocking()` : Relocks all of the unlocking chunks. Same as lock call but uses existing locked funds.

### 8. Stake

`stake(contract, amount)` : Stakes (or nominates) some amount on the specified contract. 

Contract must be active, not in the `Unregistered` state.

The stake amount is applied either to the `voting subperiod` stake or `build&earn subperiod` stake, depending on what is active right now. If the next era marks the end of the `build&earn subperiod`, it’s not possible to call stake.

`amount` can only be used if it was locked before and hasn’t been used for staking already.

Account **MUST** claim all pending rewards (or cleanup the expired ones) before they can call stake.  

There is a minimum staking amount per dApp to prevent having small stake amounts per dApp.  
The stake amount specified **MUST be precise**, it mustn’t exceed what’s available for staking, otherwise the call will fail.

When user stakes, it only becomes active (eligible for rewards) from **the next era onwards**.

### 9. unstake

`unstake(amount, contract)` : Unstakes some amount from the contract.

If executed during `voting subperiod`, will reduce `amount` of stake in the `voting subperiod`.  
If executed during `build&earn subperiod`, will first reduce amount of stake from `build&earn subperiod`, and if that’s not enough, it will reduce stake from the `voting subperiod`
- In case `voting subperiod` staked amount is modified during `build&earn subperiod`, the staker is no longer considered loyal.
- In case total stake is reduced to zero, DB entry should be deleted. 

The unstake `amount` must be precise, it must not exceed what’s staked, otherwise the call will fail.

All pending rewards **MUST** be claimed (or expired rewards cleaned up) before unstake can be called.

### 10. claim_staker_reward

`claim_staker_reward()` : Claims staker rewards for eligible eras.

There are two distinct scenarios:
- Rewards are being claimed for past period: ( **eligible_era** ≤ *period_ending_era*);
- Rewards are being claimed for the ongoing period: ( **eligible_era** < *current_era*);

If the call is successful, at least one reward will be claimed, with the possibility of more if certain conditions are met. Era rewards are stored into spans allowing claim to claim up to span length number of rewards.

Staker no longer needs to specify from which contract they are claiming since this reward is only calculated based on the staked amount.

### 11. claim_bonus

`claim_bonus(smart_contract)` : claims bonus reward for a past period, if applicable.

In case current period is **P**, user can claim bonus reward for period **P - 1** (or older) if it has a DB entry which proves they were a loyal staker.

Using `AccountLedger`, `ContractStakingInfo` and `PeriodInfo`, it is possible to calculate rewards and pay them out.

### 12. claim_dapp_reward

`claim_dapp_reward(contract, era)` : claims dapp reward for a single era.

Amount of the reward only depends on the tier in which the dapp was at the end of an era.

For each `build&earn` era, there will be tier distribution and tier rewards saved.

### 13. force

`force(force_type)` : Force new era, or new period type.

The forced change will be made in the block AFTER the one in which this call is included.

### 14. maintenance_mode

`maintenance_mode(enabled)` : Enable or disable maintenance mode.

This prevents all calls (except for maintenance mode call) and stops any changes in the dApps staking DB entries.

### 15. set_dapp_reward_beneficiary

`set_dapp_reward_beneficiary(contract, Some<AccountId>)` : Can be used by developer or by already configured destination account to change the reward destination account Id for developer rewards.

### 16. set_dapp_owner

`set_dapp_owner(contract, AccountId)` : Can be used by dapp owner to change ownership to another account.

## 3. Storage

`ActiveProtocolState` : *StorageValue*, **ProtocolState**  

`IntegratedDApps` : *StorageMap*, **(Config::SmartContract) ⇒ DappInfo**  

`NextDAppId` : *StorageValue*, **u16**  

`Ledger` : *StorageMap*, **(Config::AccountId) ⇒ AccountLedger**  

`StakerInfo` : *DoubleStorageMap*, **(T::AccountId, T::SmartContract) ⇒ SingularStakingInfo**  

`ContractStakeInfo` : *StorageMap*, **(T::SmartContract) ⇒ ContractStakingInfoSeries**  

`CurrentEraInfo` : *StorageValue*, **EraInfo**  

`EraRewards` : *StorageMap*, **(Era) ⇒ EraRewardSpan**  

`PeriodEnd` : *StorageMap*, **(PeriodNumber) ⇒ PeriodEndInfo**  

`PeriodStakesAndRewards` : *StorageMap*, **(Period) ⇒ PeriodInfo**  

`StaticTierParams` : *StorageValue*, **TierParameters**  

`NextTierConfig` : *StorageValue*, **TiersConfiguration**  

`TierConfig` : *StorageValue*, **TiersConfiguration**  

`DAppTiers` : *StorageMap*, (Era) ⇒ **DAppTierRewards**

## 4. Scenarios

:::note

The code and explanations may have been modified since the features were audited and developed after this doument was designed.

:::

### Understanding Staked Amounts In Ledger

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
```
The information above is interpreted as:
- `locked` - with how much locked balance user is participating in dApp staking.
- `unlocking` - vector of all unlocking chunks.
- If `locked` and sum of `unlocking` are summed up together, this gives the TOTAL locked in dApp staking protocol by the user.
- Both `staked` and `taked_future` carry information about how much user has staked:
    - if `staked_future` is not `None` (or `null`), then it’s guaranteed to have `era` value equal to `staked.era + 1`;
    - each of these entries caries information about certain era or time span;
- There are 4 distinct scenarios how these values can appear:
    - `staked` is empty (all zeroes), and `staked_future` is `None` ⇒staker has nothing staked;
    - `staked` is non-empty and `staked_future` is `None` ⇒ this can be read as “Staker has staked `staked.voting + staked.build_and_earn` amount since era staked.era:
        - E.g. if staked.era = 5 , and current era is 7, it means that entry covers eras **5, 6 and 7**;
    - `staked` is empty (all zeroes), and `staked_future` has some non-zero value ⇒ It’s interpreted in the same way as the staked value in the previous example;
    - `staked` is non-empty, and staked-future has some non-zero value ⇒ in this case, `staked` describes **A SINGLE ERA**, while `staked_future` describes one or more eras.
        - E.g. if `staked.era = 5` , and `staked_future.era = 6` it’s interpreted as:
            - In era 5, staker had staked `staked.voting + staked.build_and_earn` amount;
            - From era 6 and onwards, staker had `staked staked_future.voting + staked_future.build_and_earn`
- `stake` and `staked_future` entries are not valid indefinitely, they will expire after the period finishes. However, to expire doesn’t mean they are deleted or anything
similar to that. Instead, `staked.period` or `staked_future.period` need to be checked to understand whether they match the ongoing period number.
    - If they don’t match, they can be ignored & treated as if stake amount is **zero**.

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