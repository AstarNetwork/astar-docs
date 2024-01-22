---
sidebar_position: 3
---

import Figure from "/src/components/figure"

# Move staked tokens between dApps

Once your tokens have been staked on a dApp, you always have the option of reconsidering your decisions and moving them to another dApp.

1) Go to the **Staking Panel** in the [Asset Page](https://portal.astar.network/astar/assets);
2) Under **My dApps**, click on the **Move button (→)** of the dApp from which you want to move your tokens.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="85%" /> 

3) Select the dApp(s) to which you want to `Move` your tokens and enter the desired amount;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Page_3.png').default } width="75%" /> 

4) Confirm your decisions by clicking on the **Confirm Button** and sign the transaction on the network;

Bear in mind that when you move tokens from one dApp to another, you are `unstaking` from one dApp to `stake` on a new dApp, which therefore has an impact on your rewards for those dApps:

- If you move tokens from a dApp and your staked tokens are less than the [minimum staking](/docs/use/dapp-staking/for-stakers/#parameters) amount for a dApp, all your tokens will be `unstaked` from that dApp;
- If you move your tokens from one dApp to another, you'll lose the **basic staking rewards** for the current `Era` for the dApp you moved, and you won't earn rewards on the new dApp until the next `Era`;
- During the Build&Earn subperiod, if you move your tokens from one dApp to another and your staked tokens on the initial dApp at the end of the **Build&Earn subperiod** are less than your staked tokens at the end of the **Voting subperiod** for the same dApp, you will no longer be eligible for the **Bonus Rewards** for that dApp;

Typically, users only receive rewards for stakes that have been present throughout the entire `Era`, from the first to the last block. In a runtime logic, the protocol does not distribute rewards to a user who started staking in the last block of the `Era` compared to a user who staked throughout the entire `Era`.
