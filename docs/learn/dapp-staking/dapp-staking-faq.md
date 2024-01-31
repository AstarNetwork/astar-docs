---
sidebar_position: 2
title: FAQs related to dAppStaking V3
sidebar_label: dApp Staking FAQ
---

# dAppStaking V3 FAQ

## General Info About Migration From V2 to V3

These are major remarks about the migration:

- All registered dApps will be migrated, no actions required from the owners.
- Staker’s _locked_ tokens will be migrated.
- Stakes **WILL NOT** be migrated, all stakers will need to pick which dApp(s) to stake on again.
  - This is required to keep in line with the new _periods_ and stake reset.
  - **It’s important for stakers to stake again their tokens to continue earning rewards**.
- Once V3 is deployed, V2 will be removed.

If any of the terms above are unclear to you (e.g. _staking_ vs _locking_) you can find detailed exaplanation the following sections:

- [Tokenomics 2.0](/docs/learn/tokenomics2/)
- [dApp Staking V3 Technical Overview](/docs/learn/dapp-staking/dapp-staking-protocol/)

### Practical explanation with an example:

Locking tokens means they become eligible to be used for dApp staking. This is similar (or same) as before in V2. Locked tokens cannot be used to pay transaction fees, cannot be sent to other accounts, etc.

In V2, both _locking_ & _staking_ were a single action (_stake_) but in V3 they are split. Once V3 is deployed, all stakes (TVL) will be migrated to locked state within dApp Staking.

This means if `Alice` was _staking_ on dApp `DAPP_1` 3000 ASTR, after the migration, `Alice` will have 3000 ASTR _locked_. But these 3000 ASTR won’t be _staked_ on anything. Instead, `Alice` will need to decide what to stake on (maybe on dApp `DAPP_1` again) and do the 2nd step - _stake_ action.

In case she doesn’t want to stake anymore, she can _unlock_, which is similar to the old _unbond&unstake_ and wait for the unlocking period to pass (roughly 10 days) before these funds can be freely used again (e.g. transfer to someone else).

No stakes are getting carried over, but all TVL is getting carried over.

## For Stakers

### Q: What is staking?

Staking means *voting* for or *nominating* a dApp to receive rewards.

User's stake on a dApp must be equal or greater than the MinimumStakeAmount (**50 SDN or 500 ASTR**).

### Q: How do I participate in dApp Staking?

You can stake on your favorite dApp(s) on [Astar Portal](https://portal.astar.network/astar/dapp-staking/discover).

The user-friendly interface will allow you to track how many tokens you have available to stake, your stakes, accumulated rewards, current phase, and more. You can lock, unlocks, stake, unstake and move your tokens between dApps directly on the Portal.

There, you can also view information about every dApp, their communities and teams.

### Q: What does locking the tokens mean?

Locking up funds essentially means “setting them aside” so they can be used for staking.

This is just a “status” of a token on a blockchain level. **There's no need for any separate actions to lock your tokens;** it's done automatically when you stake.

Please notice, that locked funds **NEVER** leave the staker's wallet - it's only not possible to use those funds for fee payments or transferring them.

In order to participate, user must have a `MinimumLockedAmount` of native currency locked.

### Q: Does locking bring rewards?

**❗ Locking doesn't bring any rewards, unless tokens are staked.**

Your tokens remain **locked**, but **not staked** in the following cases:

- During the *migration to dApp Staking V3*, when all staked tokens will be unstaked, they will remain locked. In order to withdraw these tokens, you should initiate the unlocking process (that lasts 10 days).
- The same will happen at the *beginning of each period*. As explained in the article, at the beginning of each period all tokens will be unstaked, but they will remain locked. Same as during migration, you will be able to re-stake them, or initiate the unlocking process.
Please remember that you have to stake during these phases to continue getting rewards.

### Q: How do I unstake my tokens?

You can unstake tokens at any time without a specific process, but **unstaking during an era excludes those tokens from that era's reward calculation**.

Unstaking reduces the staked amount immediately for both the current and next eras. Similar to staking, you must claim all unclaimed rewards before you can unstake.

### Q: How do I unlock my tokens?

You can unlock your tokens whenever you choose. Unlocking your tokens also automatically unstakes them from any dApp they are staked on, so there is no need for a separate unstaking action.

The tokens will have to go through the unlocking process that will be initiated *automatically*. This is a common mechanism to mitigate selling pressure.

**There's no need for any separate actions to initiate the unlocking of your tokens.**

Once unlocking is complete, you can then withdraw these tokens to your free balance.

### Q: When will I start getting rewards after I stake?

If you stake during the dedicated **Voting Subperiod**, you qualify for bonus rewards as long as you maintain or increase your staked amount during the following Build&Earn Subperiod. Bonus rewards can be claimed after the period ends.

If you stake during any era of **Build&Earn Subperiod**, the staked amount is only eligible for rewards from the next era onward.

### Q: When can I claim my rewards?

You can get rewards for the eras in which the tokens were staked fully (the whole eras).

Rewards are only claimable for completed eras and can be accumulated. However, if you decide to stake more, you must claim all your rewards first.

Generally, it’s recommended to claim your rewards once a week.

### Q: What are bonus rewards?

If a staker staked on a dApp during the `Voting` Subperiod and **keeps the same staked amount or higher** on a dApp through the whole `Build&Earn` Subperiod, they are eligible for the bonus rewards.

### Q: Can my rewards expire?

Unclaimed rewards will eventually expire, so it's important to claim them in time or they'll miss out on earnings.

We encourage stakers’ engagement. This way, failing to actively revisit dApp staking at the start of each new period to select dApps for staking means missing out on bonus rewards and earnings.

### Q: What happens to my rewards if the project I'm staking on is unregistered from dApp Staking?

If a project is unregistered from dApp Staking, tokens staked on that project will still receive basic rewards for as long as the tokens remain staked. Users will still be able to receive their unclaimed rewards.

However, we recommend that you claim all your rewards and stake on a new project, as it's important to support builders.

### Q: What About Unclaimed Rewards from dApp Staking V2?

Once V3 is launched, all of the unclaimed V2 rewards will become inaccessible. Please do your best to claim the rewards yourself, and encourage others to do the same.

However, to prevent users from loosing long accumulated rewards, a special state will be introduced into V2: **Decommission Mode** during which it will be possible that someone else can claim other stakers' rewards (and pay fees).

:::note

**Example:**  
Using the special calls, anyone will be able to claim rewards for anyone else. E.g. `Alice` can claim rewards for `Bob` - this essentially means that `Alice` pays for the transaction fee to claim `Bob's`. Of course, `Bob's` rewards are deposited into his account, not `Alice's`.

:::

Astar team will ensure that all pending rewards are claimed during the decommissioning. We won’t launch V3 until all unclaimed rewards have been claimed.

:::info
Please refer to [this Astar Forum discussion](https://forum.astar.network/t/dapp-staking-migration-from-v2-to-v3/5807) for all the details regarding unclaimed rewards.
:::

### Q: What should you do to prepare for dApp Staking v3 migration?

*All you should do to prepare for dApp Staking v3 launch is to claim your rewards.* Nothing else is required from your side.

**❗ Staker’s locked tokens will be migrated, but stakes WILL NOT.**

As a staker, you will need to pick which dApp(s) to stake on again. **It’s important to do so to continue earning rewards.**

## For Developers

### Q: How can I participate?

The process of application and registration for dApps will not change.

Please, find more information here:

- Requirements: https://docs.astar.network/docs/use/dapp-staking/for-devs/requirements;
- Registration: https://docs.astar.network/docs/use/dapp-staking/for-devs/register-dapp.

***❗ Once the dApp has been registered, stakers can stake on it immediately, and the dApp can earn rewards from the era in which it was registered.***

### Q: How do I manage my dApp & claim rewards?

When you participate in dApp Staking, you have all the information about your dApp available on [Astar Portal](https://portal.astar.network/astar/dapp-staking/discover), in *“Your Project”* tab.

There you can find your current tier, number of stakers, total earned (total stakes) and your rewards.

### Q: How are dApps assigned to tiers?

At the end of each **Build&Earn** Subperiod, dApps are assigned to a tier based on the total value staked on them by users. There are *4 tiers*.

The threshold for tier 4 is fixed, while it is dynamic for the other tiers.

### Q: Is the amount of dApp Staking rewards fixed per dApp?

Rewards for dApps are **dynamic** (tier-dependent), meaning they change from one tier to another.

The rewards of a tier are split evenly among all its slots, ensuring equal rewards for each dApp within a tier, regardless of whether all slots are filled.

### Q: What happens to my rewards if my project is unregistered from dApp Staking?

In the event that a dApp is unregistered from dApp Staking, all developer unclaimed rewards will become unavailable. We recommend that dApp owners claim their rewards regularly.

### Q: We are a dApp participating in dAppStaking V2, What do we need to do?

Inform your community and stakers that they should be active once dApp Staking V3 goes live and support your project by staking.

## For Ledger Users

### Q: I am a Leger Astar Native App User, what do I need to do?

:::danger
For Ledger users who use the native account ([Astar Native App](https://support.ledger.com/hc/en-us/articles/10971402968733-Astar-ASTR)), dApp staking V3 will be temporarily unavailable.
:::

This is due to how Ledger app works & what is currently being developed.

Ledger users will still be able to withdraw funds from dApp staking, they only won’t be able to stake & claim rewards in the new protocol version.

**Why this limitation?**
Ledger is currently developing a new generic app for all Polkadot/Kusama parachains, and that should be available soon (within months). Once that’s available, Ledger native users will be able to participate in dApp staking V3.

**What can I do right now?**
If you wish to actively participate in dApp Staking v3 from the start, you should [initiate the unbonding period immediately](https://docs.astar.network/docs/use/dapp-staking/dapp-staking-v2/unbonding) and move your funds to either an Astar EVM Account supported by Ledger (see below), or move funds to a hot wallet.

### Q: I am a Leger Astar EVM App User, what do I need to do?
All users using Astar EVM Ledger App ([Astar EVM](https://support.ledger.com/hc/en-us/articles/5555310160669-Astar-EVM-ASTR)) users, there are not limitations moving to dApp Staking V3. You will be able to participate in dApp staking V3 immediately.

### Still got a question?

 Ask us a question via [Discord](https://discord.com/invite/astarnetwork) or [Stack Exchange](https://substrate.stackexchange.com/questions/tagged/astar) (please use tag Astar).
