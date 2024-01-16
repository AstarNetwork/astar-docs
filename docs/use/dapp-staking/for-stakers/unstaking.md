---
sidebar_position: 4
---

import Figure from "/src/components/figure"

# Unstaking from dApps

## Overview

`Bonding` is a process by which tokens are temporarily `locked`. Staking is one of the scenarios that require tokens to be bonded. `Unbonding` is the action of telling the network that you want to unlock these tokens. After the unbonding time, which is 5 days for Shiden and 10 days for Astar, you can withdraw the tokens, and they become `transferable`. Please note that this is based on a perfect block production of 12s. In case of any delay, your unbonding period can be a little longer.

| Network | Astar | Shiden |
| --- | --- | --- |
| Unbonding period | 10 days | 5 days |

:::warning

When you unbond or unstake your tokens from dApps Staking, you won’t earn rewards during the unbonding period!

:::

### How to unbond staked tokens:

If you have staked on one of the dApp(s), you can now click on `Unbond` from **My dApps Panel** in the [Asset Page](https://portal.astar.network/astar/assets) to make your tokens transferables.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="85%" /> 

1) Click on **Unbond button** on the dApp you want to unstake from;

2) Select the amount you want to **Unbond**, or click on **Max** to `unbond` your complete stake. 

3) To sign your transaction, click on **Start Unbonding**.

:::tip

If you `unstake` some of your tokens from a dApp and your remaining tokens are below the minimum staking amount for a dApp, all your tokens will be unstaked from that dApp;

:::

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_2.png').default } width="50%" /> 

When unbonding tokens, a new window appears in your Staking Panel: **Unbonding**.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="85%" /> 

- Remaining Days gives you an estimation on how many days or eras you have to wait before being able to withdraw your tokens.
- When your unbond period is over, you need to withdraw your funds by clicking on the **withdraw button**. Sign the transaction and your tokens will be made transferrable in your wallet.

**Chunks**

Each unbonding is called a Chunk. But what is a Chunk? 

A chunk is the number of different ERAs you want to unbond your tokens. Chunks do not equal the amount of unbonding on dApps you requested but the amount of different ERA's you unbonded your tokens.

### How to unbond locked tokens:

If you have tokens that are still locked but not in staking, you can unbond them to make them transferable. 

:::note 

These tokens will always be subject to the unbonding period.

:::

In the **My Staking Panel** on the [Asset Page](https://portal.astar.network/astar/assets), you may have tokens under **Locked amount**, which are tokens that are not staked but could be unbonded. 

1) To release them, click on **unbond**, which will trigger a transaction to `unbond` them all.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Panel_2.png').default } width="85%" /> 

2) At the end of the unbonding period, you can withdraw them by clicking on the **withdraw button**.
3) Sign the transaction and your tokens will be made transferrable in your wallet.
