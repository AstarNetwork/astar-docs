import Figure from "/src/components/figure"

# For Stakers

## Overview

Do you love to stake? Or do you want to support your favorite project on Astar Network or Shiden Network? 

Discover [dApp Staking](/docs/learn/dapp-staking/), a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN with them. When staking ASTR or SDN on a dApp, users not only support the development of innovative apps but also receive staking rewards from inflation.

You can educate yourself more by reading the technical documentation about [dApp Staking](/docs/learn/dapp-staking/). 

:::tip

Before reading the dApp Staking section for stakers, make sure you understand the concept of periods, subperiods and eras, as well as the dApp Staking V3 parameters explained [here](/docs/learn/dapp-staking/#understand-the-terminology-and-parameters-of-dapp-staking).

:::

### Basic Staking Rewards:

dApp Staking rewards are generated only if tokens have been staked on a dApp for at least 1 full `Era` and distributed on the following `Era` (Era+1);

:::tip

For stakers, if you stake today, you will start earning tomorrow (next era), and the rewards will be distributed the day after tomorrow.  
For dApps If you get into a tier today, you will start earning rewards tomorrow (next era) and the rewards will be distributed the day after tomorrow.

:::

For stakers, the APR is the same for all stakers, regardless of which dApp they stake on;  
For dApps, staking rewards depends on the Tier system, dApps go into rewards tier based on the amount of tokens staked by users.

Rewards must be claimed before trying to `stake` or `unstake`.
*(If using the Astar Portal, the interface will automatically claim the rewards when trying to stake)*

If a project is **unregistered** from dApp Staking, staked tokens on that project will still receive **basic rewards** as long as the tokens remain staked.

:::warning

 There is no rewards during the Unlocking period when unstaking from dApp Staking;

 :::

### Bonus Staking Rewards:

If an user stake on dApp(s) during the **Voting Subperiod** and keep the same staked amount or higher on a dApp through the whole **Build&Earn Subperiod**, they will be eligible for the **Bonus Reward** for this dApp.

:::info

**Example**

- User stake 1500 ASTR on **dApp A** and 1000 ASTR on **dApp B** during the `Voting`subperiod.
- During the `Build&Earn` subperiod, user move 500 ASTR from **dApp B** to **dApp A**;
- He now has 2000 ASTR on **dApp A** and 500 ASTR on **dApp B**, so he's still eligible for the `Bonus reward` for **dApp A** but no longer for **dApp B** because the tokens staked on **dApp** B are less than those staked at the end of the `Voting` subperiod (500 < 1000 ASTR).
- To be eligible for the `Bonus reward` for **dApp B**, the user must stake an additional 500 ASTR on **dApp B** to reach 1000 ASTR.

:::

Bonus rewards for a period can only be claimed after the period finishes.


### Other:

- You need to keep a minimum of 10 ASTR or 5 SDN tokens as transferable after staking.
- **You need to claim to receive your rewards, we recommend claiming your staking rewards once a week.**
- When unlocking tokens, there is a unlocking period on Astar and on Shiden. The unlocking period lenghts can be consulted [here](/docs/learn/dapp-staking/#parameters). 
Please note that this is based on a perfect block production of 12s. In case of any delay, your unlocking period can be a little longer.

In case you have any questions, please check the [FAQ page](/docs/learn/dapp-staking/dapp-staking-faq/) in the Learn section or join our [Discord channel](https://discord.com/invite/astarnetwork).

### Other pages may be of interest:

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>

