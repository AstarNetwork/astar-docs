---
sidebar_position: 4
---

import Figure from "/src/components/figure"

# Unstaking from dApps

## Overview

**Locking** is a process by which tokens are temporarily `locked`. Staking is one of the scenarios that require tokens to be bonded.  
**Unlocking** is the action of telling the network that you want to unlock these tokens. After the unlocking period, you can withdraw the tokens, and they become `transferable`.  

Please note that this is based on a perfect block production of 12s. In case of any delay, your unlocking period can be a little longer.  
The unlocking period lenghts can be consulted [here](/docs/learn/dapp-staking/#parameters). 

:::warning

When you unlock or unstake your tokens from dApps Staking, you won’t earn rewards during the unlocking period!

:::

### How to unlock staked tokens:

If you have staked on one of the dApp(s), you can now click on `Unlock` from **My dApps Panel** in the [Asset Page](https://portal.astar.network/astar/assets) to make your tokens transferables.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" /> 

1) Click on the **Unlock button (↑)** on the dApp you want to unstake from;

2) Select the amount you want to **Unlock**, or click on **Max** to `unlock` your complete stake. 

3) To sign your transaction, click on **Start Unlocking**.

:::tip

If you `unstake` some of your tokens from a dApp and your remaining tokens are below the minimum staking amount for a dApp, all your tokens will be unstaked from that dApp;  
If you `unstake` your tokens from one dApp during the Build&Earn subperiod and your staked tokens on this dApp are less than your staked tokens at the end of the Voting subperiod for the same dApp, you will no longer be eligible for the Bonus Rewards for that dApp;

:::

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_2.png').default } width="100%" /> 

When unlocking tokens, a new window appears in your Staking Panel: **Unlocking**.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="100%" /> 

- **Remaining Days** gives you an estimation on how many days or `Eras` you have to wait before being able to withdraw your tokens.
- When your unlock period is over, you need to withdraw your funds by clicking on the **withdraw button**. Sign the transaction and your tokens will be made transferrable in your wallet.

**Chunks**

Each unlocking is called a Chunk. But what is a Chunk? 

An unlocking chunk is some amount of ASTR that is undergoing the unlocking period. 

***E.g.***: One chunk can be described as: *"1000 ASTR is undergoing the unlocking period and will be available for transfer on block 42000000"*.

### How to unlock locked tokens:

If you have tokens that are still locked but not in staking, you can unlock them to make them transferable. 

:::note 

These tokens will always be subject to the unlocking period.

:::

In the **My Staking Panel** on the [Asset Page](https://portal.astar.network/astar/assets), you may have tokens under **Locked amount**, which are tokens that are not staked but could be unlocked. 

1) To release them, click on **Unlock (↑)**, which will trigger a transaction to `unlock` them all.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Panel_1.png').default } width="100%" /> 

2) At the end of the unlocking period, you can withdraw them by clicking on the **withdraw button**.
3) Sign the transaction and your tokens will be made transferrable in your wallet.
