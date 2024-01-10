---
sidebar_position: 2
title: FAQs related to dAppStaking v3
sidebar_label: dApp Staking FAQ
---

# dAppStaking v3 FAQ

## General Info About Migration From v2 to v3

These are major remarks about the migration:

- All registered dApps will be migrated, no actions required from the owners.
- Staker’s _locked_ tokens will be migrated.
- Stakes **WILL NOT** be migrated, all stakers will need to pick which dApp(s) to stake on again.
  - This is required to keep in line with the new _periods_ and stake reset.
  - **It’s important for stakers to stake again their tokens to continue earning rewards**.
- Once v3 is deployed, v2 will be removed.

If any of the terms above are unclear to you (e.g. _staking_ vs _locking_) you can find detailed exaplanation the following sections:

- [Tokenomics 2.0](/docs/learn/tokenomics2/)
- [dApp Staking v3 Technical Overview](/docs/learn/dapp-staking-v3/dapp-staking-protocol.md)

### Practical explanation with an example:

Locking tokens means they become eligible to be used for dApp staking. This is similar (or same) as before in v2. Locked tokens cannot be used to pay transaction fees, cannot be sent to other accounts, etc.

In v2, both _locking_ & _staking_ were a single action (_stake_) but in v3 they are split. Once v3 is deployed, all stakes (TVL) will be migrated to locked state within dApp Staking.

This means if `Alice` was _staking_ on dApp `DAPP_1` 3000 ASTR, after the migration, `Alice` will have 3000 ASTR _locked_. But these 3000 ASTR won’t be _staked_ on anything. Instead, `Alice` will need to decide what to stake on (maybe on dApp `DAPP_1` again) and do the 2nd step - _stake_ action.

In case she doesn’t want to stake anymore, she can _unlock_, which is similar to the old _unbond&unstake_ and wait for the unlocking period to pass (roughly 10 days) before these funds can be freely used again (e.g. transfer to someone else).

No stakes are getting carried over, but all TVL is getting carried over.

### Q: What About Unclaimed Rewards?
Once v3 is launched, all of the unclaimed v2 rewards will become inaccessible. Please do your best to claim the rewards yourself, and encourage others to do the same.

However, to prevent users from loosing long accumulated rewards, a special state will be introduced into v2: **Decommission Mode** during which it will be possible that someone else can claim other stakers' rewards (and pay fees).

Example: Using the special calls, anyone will be able to claim rewards for anyone else. E.g. `Alice` can claim rewards for `Bob` - this essentially means that `Alice` pays for the transaction fee to claim `Bob's`. Of course, `Bob's` rewards are deposited into his account, not `Alice's`.

Astar team will ensure that all pending rewards are claimed during the decommissioning. We won’t launch v3 until all unclaimed rewards have been claimed.

:::info
Please refer to [this Astar Forum discssion](https://forum.astar.network/t/dapp-staking-migration-from-v2-to-v3/5807) for all the details regarding unclaimed rewards.
:::

### Q: I am a Leger Astar Native App User, what do I need to do?

:::danger
For Ledger users who use the native account ([Astar Native App](https://support.ledger.com/hc/en-us/articles/10971402968733-Astar-ASTR)), dApp staking v3 will be temporarily unavailable.
:::

This is due to how Ledger app works & what is currently being developed.

Ledger users will still be able to withdraw funds from dApp staking, they only won’t be able to stake & claim rewards in the new protocol version.

**Why this limitation?**
Ledger is currently developing a new generic app for all Polkadot/Kusama parachains, and that should be available soon (within months). Once that’s available, Ledger native users will be able to participate in dApp staking v3.

**What can I do right now?**
If you wish to actively participate in dApp Staking v3 right from the start, you should start the unboding period right now and move your funds to either Astar EVM Account supported by Ledger (see below) or alernatively move funds to a hot wallet.

:::info 
It is possible that by the launch of dApp staking v3, Ledger generic app will be launched, completely removing this limitation.

Keep an eye out on this page and official announcements for more info as it becomes available.
:::

### Q: I am a Leger Astar EVM App User, what do I need to do?
All users using Astar EVM Ledger App ([Astar EVM](https://support.ledger.com/hc/en-us/articles/5555310160669-Astar-EVM-ASTR)) users, there are not limitations moving to dApp Staking v3. You will be able to participate in dApp staking v3 immediately.


### Q: We are a dApp participating in dAppStaking v2, What do we need to do?

Inform your community and stakers that they should be active once dApp Staking v3 goes live and support your project by staking.


### Still got a question?

 Ask us a question via [Discord](https://discord.com/invite/astarnetwork) or [Stack Exchange](https://substrate.stackexchange.com/questions/tagged/astar) (please use tag Astar).
