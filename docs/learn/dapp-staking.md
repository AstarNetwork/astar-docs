---
sidebar_position: 11
title: dApp Staking
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
After an era ends, it's usually possible to claim rewards for it, if user or dApp are eligible.

### Periods

Periods are another _time unit_ in dApp staking. They are expected to be more lengthy than eras.
Each period is denoted by a number, e.g. **1**, which increments each time a new period begins.

Each period consists of two subperiods:
* `Voting`
* `Build&Earn`

Period beginning is marked by the `Voting` subperiod, after which follows the `Build&Earn` subperiod.

Stakes are **only** valid throughout a period. When new period starts, all stakes are reset to **zero**. This helps prevent projects remaining staked due to inertia of stakers, and makes for a more dynamic staking system. Staker doesn't need to do anything for this to happen, it is automatic.

Even though stakes are reset, locks (or freezes) of tokens remain.

#### Voting Subperiod

When `Voting` subperiod starts, all _stakes_ are reset to **zero**.
Projects participating in dApp staking are expected to market themselves to (re)attract stakers.

Stakers must assess whether the project they want to stake on brings value to the ecosystem, and then `vote` for it (or _stake_ on it).
Casting a vote, or staking, during the `Voting` subperiod makes the staker eligible for bonus rewards. so they are encouraged to participate during this time.

`Voting` subperiod length is expressed in _standard_ era lengths, even though the entire voting subperiod is treated as a single _voting era_.
E.g. if `Voting` subperiod lasts for **5 eras**, and each era lasts for **100 blocks**, total length of the `Voting` subperiod will be **500** blocks.
* Block 1, Era 1 starts, Period 1 starts, `Voting` subperiod starts
* Block 501, Era 2 starts, Period 1 continues, `Build&Earn` subperiod starts

Neither stakers nor dApps earn rewards during this subperiod - no new rewards are generated after `Voting` subperiod ends.
However, as mentioned before, it's crucial for dApps to use this time to market themselves and attract stakers, and for stakers
to asses which project they want to support.

It is important to award projects which the staker believes will bring value to the network and possibly themselves.
Voting on a poor project means that poor performance is rewarded, damaging the network instead of improving it.

#### Build&Earn

`Build&Earn` subperiod consists of one or more eras, therefore its length is expressed in eras.
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
It's still possible however to claim past unclaimed rewards.

Important to note that even if dApp has been unregistered, it still occupies a _slot_
in the dApp staking protocol and counts towards maximum number of registered dApps.
This will be improved in the future when dApp data will be cleaned up after some time.

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

#### Claiming Staker Rewards

Stakers can claim rewards for passed eras during which they were staked for the entire duration of the era.
Even if multiple contracts were staked, claim reward call will claim rewards for all of them.

Only rewards for passed eras can be claimed. It is possible that a successful reward claim call will claim rewards for multiple eras. This can happen if staker hasn't claimed rewards in some time, and many eras have passed since then, accumulating pending rewards. There is a limit on how many rewards can a single call claim, so if a lot of rewards have accumulated, it's possible that multiple claim calls will be required to claim all of the pending rewards.

Rewards don't remain available forever, and if not claimed within some time period, they will be treated as expired. This will be a longer period, but will still exist.

Rewards are calculated using a simple formula:

$staker\_reward = \frac{staker\_reward\_pool * staker\_staked\_amount}{total\_staked\_amount}$

#### Claiming Bonus Reward

If staker staked on a dApp during the `Voting` subperiod, and didn't reduce their staked amount below what was staked at the end of the `Voting`` subperiod, this makes them eligible for the bonus reward.

E.g. if staker had staked **10 ASTR** during the `Voting` subperiod, once `Build&Earn` subperiod starts, they can stake & unstake as much as they want as long as they don't reduce the `Voting` subperiod stake below **10 ASTR**.
It is ok to stake an additional **30 ASTR**, and then unstake **5 ASTR**, because such order of operations would leave the staker with **10 ASTR** staked in the `Voting` subperiod & **25 ASTR** staked in the `Build&Earn` subperiod.
However, if user was to stake an additional **30 ASTR** in the `Build&Earn` subperiod, but would unstake **31 ASTR**, this would put the stake amount in `Build&Earn` subperiod to **zero**, and reduce `Voting` subperiod stake amount to **9 ASTR**. This would mean user is no longer eligible for the bonus rewards.

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

There is a limited number of tiers, and each tier has a limited capacity of slots.
Each tier also has a _threshold_ which a dApp must satisfy in order to enter it.

Better tiers bring bigger rewards, so dApps are encouraged to compete for higher tiers and attract staker's support.
For each tier, the reward pool and capacity are fixed. Each dApp within a tier always gets the same amount of reward.
Even if tier capacity hasn't been fully taken, rewards are paid out as if they were.

For example, if tier 1 has capacity for 10 dApps, and reward pool is **500 ASTR**, it means that each dApp that ends up
in this tier will earn **50 ASTR**. Even if only 3 dApps manage to enter this tier, they will still earn each **50 ASTR**.
The rest, **350 ASTR** in this case, won't be minted.

If there are more dApps eligible for a tier than there is capacity, the dApps with the higher score get the advantage.
dApps which missed out on a higher tier get priority for entry into the next lower tier (if there still is any).

In the case a dApp doesn't satisfy the entry threshold for any tier, even though there is still capacity, the dApp will simply
be left out of tiers and won't earn **any** reward.

In a special and unlikely case that two or more dApps have the exact same score and satisfy tier entry threshold, but there isn't enough
leftover tier capacity to accommodate them all, this is considered _undefined_ behavior. Some of the dApps will manage to enter the tier, while
others will be left out. There is no strict rule which defines this behavior - instead dApps are encouraged to ensure their tier entry by
having a larger stake than the other dApp(s). Technically, at the moment, the dApp with the lower `dApp Id` will have the advantage over a dApp with
the larger Id but this can change in the future.

### Reward Expiry

Unclaimed rewards aren't kept indefinitely in storage. Eventually, they expire.
Stakers & developers should make sure they claim those rewards before this happens.

In case they don't, they will simply miss on the earnings.

However, this should not be a problem given how the system is designed.
There is no longer _stake&forget_ - users are expected to revisit dApp staking at least at the
beginning of each new period to pick out old or new dApps on which to stake on.
If they don't do that, they miss out on the bonus reward & won't earn staker rewards.