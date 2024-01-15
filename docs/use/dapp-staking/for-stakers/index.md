import Figure from "/src/components/figure"

# For Stakers

## Overview

Do you love to stake? Or do you want to support your favorite project on Astar Network? 

Discover [Astar dApp Staking](/docs/learn/build2earn.md), a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN with them. When staking ASTR on a dApp, users not only support the development of innovative apps but also receive staking rewards from inflation.

You can educate yourself more by reading the technical documentation about [dApp Staking V3](/docs/learn/dapp-staking-v3/).

### Periods & Eras:

`Eras`: Time units measured in blocks. Fairly short, a basic time division in dApp staking;

**dApp Staking** is divided in **Cycles** which contains two **Periods**: **Voting** and **Build&Earn**.

**Voting Period** is the period when stakers can decide to vote for dApp(s) to stake their tokens and when dApps owners and team can market their products, conduct campaign and attract stakers.

No staking rewards are generated during the Voting Period but if users vote and stake on dApps during this period, they will become eligible for the **Bonus Reward**;

**Build&Earn Period** is the period when stakers and dApps start earning rewards;
Users can still stake tokens during the Build&Earn Period but won’t be eligible for the  Bonus Reward;

At the end of a **Build&Earn Period**, the current period ends. A new period begins, dApp Staking  is reset and all tokens are `unstaked` from dApp(s) but remain `locked`. A new **Voting Period** starts.

As an user, you need to take the following parameters into consideration before using dApp Staking:

### Parameters:

|  | Shibuya | Shiden | Astar |
| --- | --- | --- | --- |
| Eras Per Cycle | 28 (~7days) | TBD | TBD |
| Eras Per Voting Period | 8 (~48hours) | TBD | TBD |
| Eras Per Build&Earn Period | 20 (~120hours) | TBD |TBD  |
| Blocks Per Era | 1800 (~6hours) | TBD | TBD |


### Basic Staking Rewards:

dApp Staking rewards are generated only if tokens have been staked on a dApp for at least 1 full `Era` and distributed on the following `Era` (Era+1);

:::tip

For stakers, if you stake today, you will start earning tomorrow (next era), and the rewards will be distributed the day after tomorrow.

For dApps If you get into a tier today, you will start earning rewards tomorrow (next era) and the rewards will be distributed the day after tomorrow.

:::

For stakers, the APR is the same for all stakers, regardless of which dApp they stake on;
For dApps, staking rewards depends on the Tier system, dApps go into rewards tier based on the amount of tokens staked by users.

Rewards must be claimed before voting for a new dApp or during the new **Voting Period**.
*(If using the Astar Portal, the interface will automatically claim the rewards when voting)*

If a project is **unregistered** from dApp Staking, staked tokens on that project will still receive **basic rewards** as long as the tokens remain staked.

:::warning

 There is no rewards during the Unbonding period when unstaking from dApp Staking;

 :::

### Bonus Staking Rewards:

If an user stake on dApp(s) during the **Voting Period** and keep the same staked amount or higher on a dApp through the whole **Build Period**, he is eligible for a the **Bonus Reward** for this dApp.

:::info

**Example**

- User stake 1500 ASTR on **dApp A** and 1000 ASTR on **dApp B** during the `Voting` Period.
- During the `Build&Earn` Period, user move 500 ASTR from **dApp B** to **dApp A**;
- He now has 2000 ASTR on **dApp A** and 5000 ASTR on **dApp B**, so he's still eligible for the `Bonus reward` for dApp A but no longer for **dApp B** because the tokens staked on **dApp** B are less than those staked at the end of the `Voting period` (500 < 1000 ASTR).
- To be eligible for the `Bonus reward` for **dApp B**, the user must stake an additional 500 ASTR on **dApp B** to reach 1000 ASTR.

:::

Bonus rewards can be claimed during the following `Voting Period`. 

### Other:

- The **minimum** amount to stake for users is **50 SDN or 500 ASTR.**
- You need to keep a minimum of x tokens as transferable after staking.
- **You need to claim to receive your rewards, we recommend claiming your staking rewards once a week.**
- There is a unbonding period of around 5 days on Shiden and 10 days on Astar. Please note that this is based on a perfect block production of 12s. In case of any delay, your unbonding period can be a little longer.
- The staking rewards are shown in APY by default. APY option is available for stakers who are compounding their rewards by re-staking after claiming. On the other hand, APR option is available for stakers who don’t do compounding. The difference is that APR represents the annual rate simply for earning your stake but APY takes compounding into account.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/13_header.png').default } width="100%" /> 

In case you have any questions, come and join our [Discord channel](https://discord.com/invite/astarnetwork).

Other pages that can be of interest:

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>

