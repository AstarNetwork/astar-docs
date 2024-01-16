---
sidebar_position: 2
---

import Figure from "/src/components/figure"

# Manage dApp Staking & claim rewards

Once you have staked, a new panel named **Staking**  will appear in the [Assets Page](https://portal.astar.network/astar/assets).

### My Staking Panel: 

My Staking Panel is where you track your staking and locked tokens, see your pending rewards and take actions with your tokens and rewards;

- **Locked but unstaked amount:** Total amount of tokens locked in the address;
    - **Unbond:** Unbond your locked tokens (subject to [unbonding rule & time](/docs/use/dapp-staking/for-stakers/unstaking#overview))
    - **Stake:** Stake your locked tokens in dApp Staking
- **Staked amount**: Total amount of tokens you have staked;
- **Rewards**: Total of the estimated Basic and Bonus rewards;
    - **Available**: Basic estimated rewards earned during the **Build&Earn Period**;
    - **Bonus:** Bonus estimated rewards earned during the **Vote Period** if eligible;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Panel_1.png').default } width="75%" /> 

To claim your rewards, you need to click on the **Claim Button** and sign the transaction;

If you have a lot of unclaimed rewards (`Eras`), you may have to make several `Claim` calls to receive all your rewards;

All pending rewards on a dApp must be claimed before staking again.

### My dApps Panel:

My dApps Panel is where you can see all dApps you have staked with and manage your stake.

- **Bonus:** if you are eligible for the [Bonus](/docs/use/dapp-staking/for-stakers/#bonus-staking-rewards) on this dApps;
- **Move:** you can move staked tokens between different dApps;
- **Add**: you can add more $tokens in dApp staking on the desired dApp;
- **Unbond**: here you can select how many tokens you want to unbond from your staked amount.

### Unbonding Panel:

The unbonding panel is where you can see the progress of unbonding and withdraw. 
For the runtime logic, when unbonding, you don’t unbond from a specific dApp but unbond as `Chunks`. First pending unbonding gives Chunk 1, second pending unbonding gives Chunk 2 etc. 

After you have unstaked and when those ERAs pass, you will be able to withdraw. More information about [Unbonding](/docs/use/dapp-staking/for-stakers/unstaking/).

The unbonding period lenghts can be consulted [here](/docs/use/dapp-staking/for-stakers/#parameters). 

- **Remaining eras:** The number of eras you have to wait before you can withdraw your tokens;
- **Available to withdraw:** Unlock your tokens and make them `transferable`;
- **Re-lock:** Lock your tokens again to use them in dApp Staking;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="75%" /> 