---
sidebar_position: 2
---

import Figure from "/src/components/figure"

# Manage dApp Staking & claim rewards

Once you have staked, a new panel named **Staking** will appear in the [Assets Page](https://portal.astar.network/astar/assets).

### My Staking Panel:

My Staking Panel is where you track your staking and locked tokens, see your pending rewards and take actions with your tokens and rewards;

- **Locked amount:** Total amount of tokens locked in the address;
  - **Unlock (↑):** Unlock your locked tokens _(subject to [unlocking parameters](/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/unstaking.md#overview)_);
  - **Stake (↓):** Stake your locked tokens in dApp Staking;
- **Staked amount**: Total amount of tokens you have staked;
- **Rewards**: Total of the estimated Basic and Bonus rewards;
  - **Available**: Basic estimated rewards earned during the **Build&Earn subperiod**;
  - **Bonus:** Bonus estimated rewards earned during the **Vote subperiod** if eligible;

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/Staking_Panel_1.png').default } width="100%" />

To claim your rewards, you need to click on the **Claim Button** and sign the transaction.

If you have active stakes, a modal will pop up offering you to re-stake your rewards.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/Re_Stake_Modal.png').default } />

If you want to re-stake your rewards, just click **Yes re-stake my rewards**, sign the transactions and your rewards will re-stake proportionally to all dApps you currently staking on.

If you don't want to re-stake rewards, click **No I would not wish to re-stake my rewards**, sign transaction an your rewards will be claimed.

All pending rewards on a dApp must be claimed before staking again.

:::tip

You can manage your rewards from the dApp Staking page and collect them by clicking the **Claim Button** and signing the transaction.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/Claiming_Rewards.png').default } width="100%" />

:::

### My dApps Panel:

My dApps Panel is where you can see all dApps you have staked with and manage your stake.

- **Bonus:** if you are eligible for the [Bonus](/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/index.md#bonus-staking-rewards) on this dApps;
- **Move (→) :** you can move staked tokens between different dApps;
- **Add (↓) :** you can add more tokens in dApp staking on the desired dApp;
- **Unlock (↑) :** you can select how many tokens you want to unlock from your staked amount.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" />

### Unlocking Panel:

The unlocking panel is where you can see the progress of unlocking and withdrawing.
For the runtime logic, when unlocking, you don’t unlock from a specific dApp but unlock as `Chunks`. First pending unlocking gives Chunk 1, second pending unlocking gives Chunk 2 etc.

After you have unstaked and when those ERAs pass, you will be able to withdraw. More information about [Unlocking](/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/unstaking/).  
The unlocking period lenghts can be consulted [here](/docs/learn/dapp-staking/#parameters).

- **Remaining days:** The number of days or `Eras` you have to wait before you can withdraw your tokens;
- **Available to withdraw:** Unlock your tokens and make them `transferable`;
- **Re-lock:** Lock your tokens again to use them in dApp Staking;

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="100%" />
