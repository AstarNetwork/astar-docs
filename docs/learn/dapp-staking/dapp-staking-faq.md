---
sidebar_position: 2
title: dApp Staking V3 FAQ
sidebar_label: dApp Staking FAQ
---

import Figure from "/src/components/figure"

## General Info About Migration From V2 to V3

:::note Historical Reference
dApp Staking V3 has been live since February 2024. The Tokenomics 3.0 revamp was activated in March 2026. The following is preserved for historical context only.
:::

These were the major remarks about the migration:

- All registered dApps were migrated, no actions were required from the owners.
- Staker’s _locked_ tokens were migrated.
- Stakes **WERE NOT** migrated; all stakers needed to pick which dApp(s) to stake on again.
  - This was required to keep in line with the new _periods_ and stake reset.
  - **It was important for stakers to stake again their tokens to continue earning rewards**.
- Once V3 was deployed, V2 was removed.

If any of the terms above are unclear to you (e.g. _staking_ vs _locking_) you can find a detailed explanation in the following sections:

- [Tokenomics 2.0](/docs/learn/tokenomics2/)
- [dApp Staking V3 Technical Overview](/docs/learn/dapp-staking/dapp-staking-protocol/)

### Practical explanation with an example:

Locking tokens means they become eligible to be used for dApp staking. This is similar (or same) as before in V2. Locked tokens cannot be used to pay transaction fees, cannot be sent to other accounts, etc.

In V2, both _locking_ & _staking_ were a single action (_stake_) but in V3 they are split. When V3 launched, all stakes (TVL) were migrated to locked state within dApp Staking.

This means if `Alice` was _staking_ on dApp `DAPP_1` 3000 ASTR, after the migration, `Alice` had 3000 ASTR _locked_. But those 3000 ASTR were not _staked_ on anything. Instead, `Alice` needed to decide what to stake on (maybe on dApp `DAPP_1` again) and perform the 2nd step — the _stake_ action.

In case she didn’t want to stake anymore, she could _unlock_, which is similar to the old _unbond&unstake_, and wait for the unlocking period to pass (roughly 10 days) before those funds could be freely used again (e.g. transfer to someone else).

No stakes were carried over, but all TVL was carried over.

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

- During the *migration to dApp Staking V3*, when all staked tokens were unstaked, they remained locked. In order to withdraw those tokens, you needed to initiate the unlocking process (that lasts 10 days).
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

No rewards are generated during the **Voting** subperiod.

If you stake during the **Voting** subperiod, your stake is set up for the upcoming **Build&Earn** subperiod. Staker rewards are earned only for **Build&Earn** eras in which your stake was active for the entire era.

If you stake (or change your stake) during any era of **Build&Earn** subperiod, the updated amount is eligible for rewards from the **next era** onward.

### Q: When can I claim my rewards?

You can get rewards for the eras in which the tokens were staked fully (the whole eras).

Rewards are only claimable for completed eras and can be accumulated. However, if you decide to stake more, you must claim all your rewards first.

Generally, it’s recommended to claim your rewards once a week.

### Q: What are bonus rewards?

Tokenomics 3.0 has **no user-facing bonus rewards**. `Voting` and `Build&Earn` remain protocol phases, but integrators should not promote a separate "bonus pool" or "bonus APR" as a user benefit.

If you see bonus-related fields in older tooling or runtimes, treat them as **legacy/internal compatibility** only.

### Q: Can my rewards expire?

Unclaimed rewards will eventually expire, so it's important to claim them in time or they'll miss out on earnings.

We encourage stakers' engagement. If you don't revisit dApp staking at the start of each new period to select dApps for staking, you won't be earning rewards for expired **Build&Earn** eras.

### Q: What happens to my rewards if the project I'm staking on is unregistered from dApp Staking?

If a project is unregistered from dApp Staking, tokens staked on that project will still receive basic rewards for as long as the tokens remain staked. Users will still be able to receive their unclaimed rewards.

However, we recommend that you claim all your rewards and stake on a new project, as it's important to support builders.

### Q: What About Unclaimed Rewards from dApp Staking V2?

:::note Historical Reference
dApp Staking V3 has been live since February 2024. The Tokenomics 3.0 revamp was activated in March 2026. The following is preserved for historical context only.
:::

When V3 launched, all unclaimed V2 rewards became inaccessible. To prevent users from losing long accumulated rewards, a special **Decommission Mode** was introduced into V2, during which it was possible for someone else to claim other stakers’ rewards (and pay fees).

:::note

**Example:**  
Using the special calls, anyone was able to claim rewards for anyone else. E.g. `Alice` could claim rewards for `Bob` — this meant that `Alice` paid the transaction fee to claim `Bob’s` rewards. `Bob’s` rewards were deposited into his account, not `Alice’s`.

:::

The Astar team ensured that all pending rewards were claimed during decommissioning before V3 launched.

:::info
Please refer to [this Astar Forum discussion](https://forum.astar.network/t/dapp-staking-migration-from-v2-to-v3/5807) for all the details regarding unclaimed rewards.
:::

### Q: What should you do to prepare for dApp Staking V3 migration?

:::note Historical Reference
dApp Staking V3 has been live since February 2024. The Tokenomics 3.0 revamp was activated in March 2026. The following is preserved for historical context only.
:::

*All that was required to prepare for dApp Staking V3 launch was to claim your rewards.* Nothing else was required.

**❗ Staker’s locked tokens were migrated, but stakes WERE NOT.**

As a staker, you needed to pick which dApp(s) to stake on again. **It was important to do so to continue earning rewards.**

### Q: I've staked 16 dApps and now I can't add or move tokens and I'm getting an error. What should I do?

<Figure src={require('/docs/learn/img/Maxium_contracts_error.png').default } width="50%" /> 

An address can stake on a maximum of 16 contracts (dApps).
- You must unstake all your tokens from one of these dApps, so that you'll be staking on 15 dApps instead of 16.
- You can then add more tokens in staking or move your staked tokens.

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

At the end of each **Build&Earn** Subperiod, dApps are assigned to a tier based on the total value staked on them by users. The protocol uses **4 tier indices**, but only **Tier 2 and Tier 3 are active** and reward-eligible, with a **fixed maximum of 16 slots** distributed between them. Tier 1 and Tier 4 have 0 slots and 0% reward share.

Each tier has entry thresholds defined as **fixed percentages** of total issuance. These percentages remain constant, though the absolute threshold amounts adjust proportionally with changes in total issuance.

### Q: Is the amount of dApp Staking rewards fixed per dApp?

Rewards for dApps are **dynamic** (tier-dependent), meaning they change from one tier to another.

Within a tier, dApp rewards are **deterministic** and can also depend on the dApp's **rank (0..10)** (see the technical overview for the `tier_rank_multipliers` model). If a tier is under-filled, part of that tier allocation can remain **unminted** (lazy minting).

### Q: What happens to my rewards if my project is unregistered from dApp Staking?

In the event that a dApp is unregistered from dApp Staking, all developer unclaimed rewards will become unavailable. We recommend that dApp owners claim their rewards regularly.

### Q: We are a dApp participating in dAppStaking V2, What do we need to do?

:::note Historical Reference
dApp Staking V3 has been live since February 2024. The Tokenomics 3.0 revamp was activated in March 2026. The following is preserved for historical context only.
:::

Inform your community and stakers that they should be active once dApp Staking V3 goes live and support your project by staking.

## For Ledger Users

### Q: I am a Ledger Astar Native App User, what do I need to do?

If you are using a Ledger device, use the Ledger Polkadot generic app for dApp Staking interactions. The Ledger native Astar app is no longer required for V3.

### Q: I am a Ledger Astar EVM App User, what do I need to do?

All users using Astar EVM Ledger App ([Astar EVM](https://support.ledger.com/hc/en-us/articles/5555310160669-Astar-EVM-ASTR)) users, there are not limitations moving to dApp Staking V3. You will be able to participate in dApp staking V3 immediately.

### Still got a question?

 Ask us a question via [Discord](https://discord.com/invite/astarnetwork) or [Stack Exchange](https://substrate.stackexchange.com/questions/tagged/astar) (please use tag Astar).
