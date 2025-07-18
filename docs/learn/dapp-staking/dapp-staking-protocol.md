---
sidebar_position: 1
title: dApp Staking v3 Technical Overview
---

## Introduction

Astar and Shiden networks provide a unique way for developers to earn rewards by developing products that native token holders can decide to support.

The principle is simple - stakers _lock_ their tokens to _stake_ on a dApp, and if the dApp attracts enough support, it is rewarded in native currency, derived from the inflation.
In turn stakers are rewarded for locking & staking their tokens.

The following chapters will provide an overview of the functionality and terminology with accompanying examples.

## Functionality Overview

### Eras

Eras are the basic _time unit_ in dApp staking and their length is measured in the number of blocks.

Eras are not expected to last long, e.g. current production networks era length is roughly 1 day (7200 blocks).
After an era ends, it's usually possible to claim rewards for it, if staker or dApp are eligible.

### Periods

Periods are another _time unit_ in dApp staking. They are expected to be more lengthy than eras.
Each period is denoted by a number, e.g. **1**, which increments each time a new period begins.

Each period consists of two subperiods:

* `Voting`
* `Build&Earn`

Period beginning is marked by the `Voting` subperiod, after which follows the `Build&Earn` subperiod.

Stakes are **only** valid throughout a period. When new period starts, all stakes are reset to **zero**. Protocol dynamic prevents inactive projects having high stakes due to inertia of stakers while at the same time allows more visibility for dApps joining the protocol and equal chance in attracting stakers' attention.

Even though stakes are reset, locks (or freezes) of tokens remain.

#### Voting Subperiod

When `Voting` subperiod starts, all _stakes_ are reset to **zero**.
Projects participating in dApp staking are expected to market themselves to (re)attract stakers.

Stakers must assess whether the project they want to stake on brings value to the ecosystem, and then `vote` for it (or _stake_ on it).
Casting a vote, or staking, during the `Voting` subperiod makes the staker eligible for bonus rewards. so they are encouraged to participate during this time.

`Voting` subperiod length is expressed in _standard_ era lengths, even though the entire voting subperiod is treated as a single _voting era_.
E.g. if `Voting` subperiod lasts for **5 eras**, and each era lasts for **100 blocks**, total length of the `Voting` subperiod will be **500** blocks **BUT** it will consume only a single numeric era:

* Block 1, Era 1 starts, Period 1 starts, `Voting` subperiod starts
* Block 501, Era 2 starts, Period 1 continues, `Build&Earn` subperiod starts

Neither stakers nor dApps earn rewards during the `Voting` subperiod; rewards are only generated for eras in the `Build&Earn` subperiod. However, as mentioned before, it’s crucial for dApps to use this time to market themselves and attract stakers, and for stakers to assess which projects they want to support.

It is important to award projects which the staker believes will bring value to the network and possibly themselves.
Voting on a poor project means that poor performance is rewarded, damaging the network instead of improving it.

#### Build&Earn

`Build&Earn` subperiod consists of one or more eras.
E.g. if `Build&Earn` subperiod lasts for **10 eras**, and each era lasts for **100 blocks**, these **10 eras** would consume **1000 blocks** in total.

After each _era_ ends, eligible stakers and dApps can claim the rewards they earned.

Rewards are **only** claimable for the finished eras.
E.g. if the **era 3** is ongoing, staker can claim rewards for **era 2** if they were eligible.

Staker is **only** eligible for rewards **if** they have been staking for the entire era. E.g. if staker stakes in **era 2**, they are only eligible for rewards
from **era 3**, which can be claimed from **era 4** onwards.

Even though `Build&Earn` comes after the `Voting`, it is still possible to _stake_ during this period, and stakers are encouraged to do so
since this will increase the staker rewards they earn.
The only exemption is the **final era** of the `Build&Earn` subperiod - it's not possible to _stake_ then since the stake would be invalid anyhow (stake is only valid from the next era which would be in the next period when all stakes are reset to _zero_).

To continue the previous example where era length is **100** blocks, let's assume that `Build&Earn` subperiod lasts for 10 eras:

* Block 1, Era 1 starts, Period 1 starts, `Voting` subperiod starts
* Block 501, Era 2 starts, Period 1 continues, `Build&Earn` subperiod starts
* Block 601, Era 3 starts, Period 1 continues, `Build&Earn` subperiod continues
* Block 701, Era 4 starts, Period 1 continues, `Build&Earn` subperiod continues
* ...
* Block 1401, Era 11 starts, Period 1 continues, `Build&Earn` subperiod enters the final era
* Block 1501, Era 12 starts, Period 2 starts, `Voting` subperiod starts
* Block 2001, Era 13 starts, Period 2 continues, `Build&Earn` subperiod starts

### dApps & Smart Contracts

#### Registration

Projects, or _dApps_, must be registered into protocol to participate.
Only a privileged origin can perform dApp registration.
At the moment of writing this, dApps & projects can request to be registered via Astar's forum.

Once the dApp has been registered, stakers can stake on it immediately, and it can earn rewards from the era in which it was registered.

There is a limit of how many smart contracts can be registered at once. Once the limit is reached, any additional attempt to register a new contract will fail.
This puts an upper bound on how many contracts the protocol can support.

#### Reward Beneficiary & Ownership

After a dApp has been registered, it is possible to modify reward beneficiary or even the owner of the dApp. The owner can perform reward delegation and can further transfer ownership.

This is useful if dApp owners want to deposit rewards and/or transfer ownership to a DAO or a multisig account.

#### Unregistration

dApp can be removed from the protocol by unregistering it.
This is an action that can only be done by a privileged origin.
Unregistration can be the result of bad performance, reorganization or any other reason
which governance decides it's viable.

After a dApp has been unregistered, it's no longer eligible to receive rewards.
Past rewards also become unavailable, if they haven't been claimed already.

### Stakers

#### Locking Tokens

In order for users to participate in dApp staking, the first step they need to take is lock (or freeze) some native currency. Reserved tokens cannot be locked, but tokens locked by another lock can be re-locked into dApp staking (double locked).

This is useful for _vested_ tokens, which although cannot be transferred to another account, can still be used to participate in dApp staking.

:::note
Locked funds **NEVER** leave the staker's wallet - it's only not possible to use those funds for fee payment or for transfer.
:::

In order to participate, user must have a `MinimumLockedAmount` of native currency locked. This doesn't mean that they cannot lock _less_ in a single call, but total locked amount must always be equal or greater than `MinimumLockedAmount`.

E.g. if an account isn't participating in dApp staking and threshold is set to **10 ASTR**, attempting to lock **9 ASTR** will fail.
However, if user already has **10 ASTR** locked, they can safely lock an additional **1 ASTR**, for **11 ASTR locked in total.

In case amount specified for locking is greater than what user has available, only what's available will be locked - it's not possible to lock more than what's available.

Once tokens have been locked, they can be used to stake immediately.
Users should ensure to do so since _locking_ doesn't bring any rewards, unless tokens are staked as well.

:::note
It's not possible to use the same account for dApp staking & as the collator candidate.
:::

#### Unlocking Tokens

User can at any time decide to unlock their tokens. However, it's not possible to unlock tokens which are staked, so user has to unstake them first.

After _unlock_ is successfully executed, the tokens aren't immediately unlocked, but instead must undergo the unlocking process.
This process takes a predefined amount of blocks to finish. This is a well known & widely used mechanism to reduce selling pressure.

Once unlocking process has finished, user can _claim_ their unlocked tokens into their free balance.

There is a limited number of `unlocking chunks` a user can have at any point in time. If limit is reached, user must claim existing unlocked chunks, or wait for them to be unlocked before claiming them to free up space for new chunks. This mechanism exists simply to prevent users from creating unlimited amounts of chunks in storage.

In case unlocking some amount would take the user below the `MinimumLockedAmount`, **everything** will be unlocked.
E.g. if minimum locked amount is set to **10 ASTR**, user has **15 ASTR** locked, and they decide tu _unlock_ **6 ASTR**, this would take them to **9 ASTR** which is below threshold. As a result, all **15 ASTR** will be unlocked.

In case users would like to re-lock the _unlocking chunks_ back into the dApp staking protocol, they can easily do that, without having to wait for the unlocking process
to finish.

#### Staking Tokens

Locked tokens, which aren't being used for staking, can be used to stake on a dApp. This translates to _voting_ or _nominating_ a dApp to receive rewards derived from the inflation. User can stake on multiple dApps if they want to.

The staked amount is only eligible for rewards from the next era - in other words, only the amount that has been staked for the entire era is eligible to receive rewards.
E.g. if user had staked **15 ASTR** in **era 5** on a dApp, and decides to stake an additional **5 ASTR**, the new total stake amount of **20 ASTR** is only eligible for rewards from **era 6**. Assuming staker doesn't do additional changes, rewards for **era 5** will be calculated for stake amount of **15 ASTR**, while rewards for **era 6** will be calculated for stake amount of **20 ASTR**.

It is not possible to stake if there are unclaimed rewards from past eras. User must ensure to first claim their pending rewards, before staking. This is also beneficial to the users since it allows them to lock & stake the earned rewards as well.

User's stake on a contract must be equal or greater than the `MinimumStakeAmount`. This is similar to the minimum lock amount, but this limit is per contract.
Although user can stake on multiple smart contracts, the amount is limited. To be more precise, amount of database entries that can exist per user is limited.
This should not be a problem in practice though.

The protocol keeps track of how much was staked by the user in the `Voting` and `Build&Earn` subperiods. This is important for the bonus reward calculation.

It is not possible to stake on a dApp that has been unregistered.
However, if dApp is unregistered after user has staked on it, user will keep earning
rewards for the staked amount.

#### Unstaking Tokens

User can at any time decide to unstake staked tokens. There's no _unstaking_ process associated with this action.
However, unstaking some amount forfeits it from being included in the reward calculation for that era - this is why it's important
to choose staked dApps carefully.

Unlike stake operation, which stakes from the _next_ era, unstake will reduce the staked amount for the current and next era if stake exists.

Same as with stake operation, it's not possible to unstake anything until unclaimed rewards have been claimed. User must ensure to first claim all rewards, before attempting to unstake.

The amount unstaked will always first reduce the amount staked in the ongoing subperiod. E.g. if `Voting` subperiod has stake of **100 ASTR**, and `Build&Earn` subperiod has stake of **50**, calling unstake with amount of **70 ASTR** during `Build&Earn` subperiod will see `Build&Earn` stake amount reduced to **zero**, while `Voting` stake will be reduced to **80**.

If unstake would reduce the staked amount below `MinimumStakeAmount`, everything is unstaked.

Once period finishes, all stakes are reset back to zero. This means that no unstake operation is needed after period ends to _unstake_ funds - it's done automatically.

#### Moving Stake Between Contracts

The moving stake feature allows users to transfer their staked amount between two smart contracts without undergoing the unstake and stake process separately. This feature ensures that the transferred stake remains aligned with the current staking period, but the moved stake is effective in the next era and any bonus eligibility is preserved as long as the conditions for the bonus reward are not violated. Move actions are limited by `MaxBonusSafeMovesPerPeriod` from the protocol configuration.

Key details about moving stake:

- The destination contract must be different from the source contract.
- The user must ensure that unclaimed rewards are claimed before initiating a stake move.
- Only a limited number of move actions (defined by `MaxBonusSafeMovesPerPeriod`) are considered _safe_ during a single period to preserve bonus reward eligibility. Additional moves actions are feasable but forfeit the bonus reward.
- If the destination contract is newly staked, the user's total staked contracts must not exceed the maximum allowed number of staked contracts (same as the staking operation).
- The destination contract must not be unregistered, but moving stake away from an unregistered contract is allowed **without affecting bonus eligibility**.

This feature is particularly useful for stakers who wish to rebalance their stake across multiple contracts (including new registrations) or move their stake to better-performing dApps while retaining the potential for rewards and maintaining bonus eligibility.

#### Bonus Status Handling in Moves

When moving stake, if the destination contract has no existing bonus eligibility, it inherits the incoming bonus status from the source contract. If both the source and destination have nonzero bonus statuses, they are merged by averaging their values. This prevents unintended bonus gains or losses while ensuring fairness in bonus distribution.

For example, if the configuration allows **2** _safe moves_, if the source conctract as already be moved once and if the destination contract as not consumed move actions, the resulting merged for the remaining _safe moves_ of teh destination stake will be **1** ((2+0) / 2 = 1).

#### Claiming Staker Rewards

Stakers can claim rewards for passed eras during which they were staked for the entire duration of the era.
Even if multiple contracts were staked, claim reward call will claim rewards for all of them.

Only rewards for the finished eras can be claimed. It is possible to claim rewards for multiple eras using a single call. This can happen if staker hasn't claimed rewards in some time, and many eras have passed since then, accumulating pending rewards. There is a limit on how many rewards can a single call claim, so if a lot of rewards have accumulated, it's possible that multiple claim calls will be required to claim all of the pending rewards.

Rewards don't remain available forever, and if not claimed within some time period, they will be treated as expired. This will be a longer period, but will still exist.

Rewards are calculated using a simple formula:

$staker\_reward = \frac{staker\_reward\_pool * staker\_staked\_amount}{total\_staked\_amount}$

#### Claiming Bonus Reward

If a staker has staked on a dApp during the voting subperiod, and the bonus status for the associated staked amount has not been forfeited due to excessive move actions, they remain eligible for the bonus reward.

Only a limited number of _safe move actions_ are allowed during the `build&earn` subperiod to preserve bonus reward eligibility. Move actions refer to either:
-   A 'partial unstake that decreases the voting stake',
-   A 'stake transfer between two contracts'. (check previous "Moving Stake Between Contracts" section)

The number of authorized safe move actions is defined by `MaxBonusSafeMovesPerPeriod`. For example:
If 2 safe bonus move actions are allowed for one period, and a user has staked **100** on contract A during the `voting` subperiod and **50** during the `build&earn` subperiod, they can safely:

1. Unstake **70**, reducing the `voting` stake to **80**.
2. Transfer **50** to contract B.

After these actions, the user will still be eligible for bonus rewards (**20** on contract A and **50** on contract B). However, if an additional move action is performed on contract A, the bonus eligibility will be forfeited.

Bonus rewards need to be claimed per contract, unlike staker rewards.

Bonus reward is calculated using a simple formula:

$bonus\_reward = \frac{bonus\_reward\_pool * staker\_voting\_subperiod\_stake}{total\_voting\_subperiod\_stake}$

### Developers

Main thing for developers to do is develop a good product & attract stakers to stake on them.

#### Claiming dApp Reward

If at the end of a `Build&Earn` subperiod era dApp has high enough score (support) to enter a reward tier, it will get rewards assigned to it.
Rewards aren't paid out automatically but must be claimed instead, similar to staker & bonus rewards.

dApp reward is calculated based on the tier in which ended. All dApps that end up in one tier will get the exact same reward.

### Tier System

At the end of each `Build&Earn` subperiod era, dApps are evaluated using a simple metric - total value staked on them.
Based on this metric, they are sorted, and assigned to tiers.

There is a predefined limited number of tiers, and each tier has a limited capacity of slots.
Each tier also has a _threshold_ which a dApp must satisfy in order to enter it.

#### Tiers Capacity

There is a limited amount of slots for dApps which means dApps have to compete for them.
The amount isn't static but is recalculated at the start of each period.

Since the purpose of dApp staking isn't for dApps to earn obscene amounts of rewards, but to provide
support to operate and further develop existing dApp, number of slots is scaled with the value of **ASTR** expressed in **USD**.

At the beginning of **each era**, using the _moving average_ **ASTR** price, new number of slots is calculated:

$ number\_of\_slots_{Astar} = floor(1000 * ASTR_{USD} + 50)$

This approach means that as **ASTR** value increases, so does the number of slots for dApp staking, and vice-versa.

Once number of slots is calculated, it is divided up into slots per tier.
The portions are statically configured, e.g. _tier 1_ gets **10%** of the slots, _tier 2_ gets **25%** of the slots, and so on.

Same principle is applied to Shiden, but with a slightly modified formula:

$ number\_of\_slots_{Shiden} = floor(100 * SDN_{USD} + 50)$

These formulas were designed with a _baseline_ price in mind.
Using the _baseline_ price, the _baseline_ number of slots can be calculated using the listed formulas.

This value is important since it's used as a reference when calculating tier threshold adjustment.

#### Tier Threshold Entry

A dApp isn't entitled to a tier by just participating in the dApp Staking.
It needs to attract sufficient support to even be eligible for entry into a tier.

E.g. a threshold to enter _tier 1_ might be set to **1,000,000 ASTR**.
Since number of slots is dynamic, so has to be the threshold to allow for more realistic competition.
It's not fair to define the same threshold for entering a tier if there are 50 slots or 500 slots since the
staked amount will be more diluted between various dApps.

The formula for adjusting tier entry threshold with dApps slot changes:

$\Delta\%_{threshold} = (\frac{100\%}{100\% + \Delta\%_{dApps}} - 1) * 100\%$

where $\Delta\%_{dApps}$ is the change in the number of dApps, expressed as a percent. In case number has been reduced, the _delta_ will be negative.
The comparison is always done between the _baseline_ number of slots (determined using the baseline price) and the new number of slots.

$new\_threshold = base\_threshold * (1 + \Delta\%_{threshold})$

There are two types of tier entry thresholds:

* `Dynamic` - A percentage of the total issuance as staked funds that can change between periods. It includes:
    - A **minimum** percentage that the threshold cannot fall below
    - A **maximum** percentage cap that limits how high the threshold can grow

This type is used for _higher_ tiers.

* `Fixed` - A constant percentage of the total issuance as staked funds, which does not change between periods. Used for the _lowest_ tier, and defines a static value.

These percentages are calculated based on a total issuance of **8.4 billion ASTR** tokens when dApp Staking V3 was launched. As the total issuance changes (e.g. burn events), the dynamic thresholds will adjust accordingly, ensuring a fair and adaptive staking environment.

For example, suppose the total issuance is **8.4 billion** ASTR tokens. For **Tier 1**, the dynamic threshold percentage is set at **3.57%** (*approximately 299,880,000 ASTR*), with a minimum required percentage of **2.38%** (*approximately 199,920,000 ASTR*) and a maximum possible percentage set according to network parameters. If the total issuance decreases due to a burn event, the threshold adjusts accordingly. For example, if the total issuance drops to **8.0 billion** ASTR, the **Tier 1** threshold adjusts to:

$new\_threshold = 3.57\% * 8.0 billion = 285,600,000\ ASTR$

The maximum cap ensures that during periods of high competition or changing token price conditions, tier thresholds don't grow beyond reasonable limits, maintaining accessibility for dApps.

If the number of slots changes, the threshold is further adjusted based on the delta percentage formula.

*Refer to the [dApp staking parameters](/docs/learn/dapp-staking/protocol-parameters#network-values) page to find out more about the percentage values for each network.*

#### Tier Rewards

Better tiers bring bigger rewards, so dApps are encouraged to compete for higher tiers and attract staker's support.
dApp reward pool is divided between tiers, e.g. _tier 1_ gets **40%** of the total reward pool, and the assigned tier reward pool
is further divided between the dApps in the pool.

This means that each dApp within a tier always gets the same amount of reward.
Even if tier capacity hasn't been fully taken, rewards are paid out as if they were.

For example, if _tier 1_ has capacity for 10 dApps, and reward pool is **500 ASTR**, it means that each dApp that ends up
in this tier will earn **50 ASTR**. Even if only 3 dApps manage to enter this tier, they will still earn each **50 ASTR**.
The rest, **350 ASTR** in this case, won't be minted.

#### More On Tiers

If there are more dApps eligible for a tier than there is capacity, the dApps with the higher score get the advantage.
dApps which missed out on a higher tier get priority for entry into the next lower tier (if there still is any).

In the case a dApp doesn't satisfy the entry threshold for any tier, even though there is still capacity, the dApp will simply
be left out of tiers and won't earn **any** reward.

In a special and unlikely case that two or more dApps have the exact same score and satisfy tier entry threshold, but there isn't enough
leftover tier capacity to accommodate them all, this is considered _undefined_ behavior. Some of the dApps will manage to enter the tier, while
others will be left out. There is no strict rule which defines this behavior - instead dApps are encouraged to ensure their tier entry by
having a larger stake than the other dApp(s). Technically, at the moment, the dApp with the lower `dApp Id` will have the advantage over a dApp with
the larger Id but this can change in the future.

### Tier ranking system

Because dApps at the same tier receive equal rewards regardless of their staked amount, ranking system has been introduced for dApps within the tier itself. This will improve reward distribution for dApps that perform better within a tier if there are available rewards to be distributed.

dApps are not only grouped into tiers but they're also ranked inside each tier (except highest tier which doesn't have ranking).
When a dApp has the minimum stake amount to just enter the tier, its rank will be **0** (zero). As they progress towards the upper tier, their rank will increase.
If a dApp is halfway to the next tier, its rank is **5** (five). If they are almost at the next tier, their rank is **9** (nine).
If a dApp reaches the threshold to enter the next tier but there is no empty slot in that tier and the dApp remains in the current tier, they will get the highest rank of **10** (ten).

Formula to calculate rank divisor is as follows ${rank\_divisor} = {\frac{{upper\_tier\_treshold} - {tier\_threshold}}{10}}$

Lastly, we can determine the rank for the dApp ${rank} = \frac{{stake\_amount} - {tier\_threshold}}{rank\_divisor}$


For example, if the tier thresholds are [100, 500, 1000] and the dApp has 300 ASTR staked, the dApp will enter **3rd** tier with a rank of **5**. The calculations are as follows: ${rank\_divisor} = \frac{500 - 100}{10} = 40$ and ${rank} = \frac{300 - 100}{40} = 5$
:::note
The maximum rank is **10**, regardless of the staked amount.
:::

The `set_static_tier_params` call allows dynamic modification of tier-related dApp staking parameters and requires governance privileges.

#### Rank reward

Each rank provides up to a **10%** extra reward on top of the tier reward. To respect inflation, each rank reward comes from empty slots within the same tier. Each tier has its own portion of rewards to distribute. If all tier slots are occupied, the tier reward is distributed equally to each dApp in that tier, leaving no remaining reward for ranks. If there is a remaining reward, it goes towards rewarding the ranks. Depending on the availability, the rank reward can go up to **10%** of the tier reward. For example, if you are in tier **2** with a rank of **5** and the tier reward is **1000 ASTR**, then rank reward will be **rank_reward = 0.1 * 1000 ASTR = 100 ASTR**. Therefore given formula

${total\_reward} = {tier\_reward} + {rank} * {rank\_reward}$

Total reward for dApp will be **1000 ASTR + 5 * 100 ASTR = 1500 ASTR**.

:::note
If **10%** of tier reward cannot be satisfied then the following formula is used

${rank\_reward} = \frac{remaining\_reward}{\sum \forall dApp\_rank}$

where $\sum \forall dApp\_rank$ is the sum of all dApp ranks in a tier.

**e.g.** Given a tier **2** with a slot capacity of **3**, where **2** slots are occupied by dApp _Alice_ with rank **9** and dApp _Bob_ with rank **7**. The rank reward comes from the empty slots, which in this case is only **1**. Therefore, a **10%** rank reward cannot be achieved. In this scenario, the remaining reward will be divided by ranks sum.

${rank\_reward} = \frac {1000 ASTR} {7 + 9} = 62.5 ASTR$

Total reward for _Alice_ will be: **1000 ASTR + 9 * 62.5 ASTR = 1562.5 ASTR**

Total reward for _Bob_ will be: **1000 ASTR + 7 * 62.5 ASTR = 1437.5 ASTR**

:::

### Reward Expiry

Unclaimed rewards aren't kept indefinitely in storage. Eventually, they expire.
Stakers & developers should make sure they claim those rewards before this happens.

In case they don't, they will simply miss on the earnings.

However, this should not be a problem given how the system is designed.
There is no longer _stake&forget_ - users are expected to revisit dApp staking at least at the
beginning of each new period to pick out old or new dApps on which to stake on.
If they don't do that, they miss out on the bonus reward & won't earn any staker rewards.

### Oracle Price Feed

Tier slots, thresholds and rewards need to be adjusted for the native currency price. This has been mentioned in previous chapters. E.g. if price of the **ASTR** goes up, the protocol can accommodate more dApps, and vice-versa.

This is done in multiple steps:

1. Permissioned oracle feeds the native currency price on-chain.
2. Price is aggregated over the defined time period (e.g. the entire day), and average value is calculated.
3. Aggregated price is stored into a circular buffer used to calculate moving average.
4. dApp staking tier configuration re-calculation relies on the moving average price.

The _moving-average_ approach is utilized to soften the impact of crypto's high price volatility.
It's important to keep the _window_ small enough to be able to react to price changes in timely manner, but long enough to _dampen_ sudden & temporary spikes.
