import Figure from "/src/components/figure"

# For Stakers

## Overview

Do you love to stake? Or do you want to support your favorite project on Astar Network or Shiden Network? 

Discover [dApp Staking](/docs/learn/dapp-staking/), a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN. When staking ASTR or SDN on a dApp, users not only support the development of innovative applications but also receive staking rewards from inflation.

Learn more [here.](/docs/learn/dapp-staking/). 

:::tip

Before reading the dApp Staking section, make sure you understand the concept of periods, subperiods and eras, as well as the dApp Staking V3 parameters explained [here](/docs/learn/dapp-staking/#understand-the-terminology-and-parameters-of-dapp-staking).

:::

### Basic Staking Rewards:

dApp Staking rewards are generated only if tokens have been staked on a dApp for at least one full `Era`, and are distributed during the following `Era` (Era+1);

:::tip

Staking today earns rewards as of tomorrow (next era), that become available to claim the following day (two eras from when staking began).  

Similarly, dApps joining a tier today start accumulating rewards tomorrow (next era), that are distributed the following day.

:::

For stakers, the APR is the same for everyone, regardless of which dApp they stake on;  
For dApps, staking rewards depend on the Tier system, dApps are classified by rewards tier based on the amount of tokens staked by users.

Rewards must be claimed before `staking` or `unstaking`.
*(When using the Astar Portal, rewards are automatically claimed before staking)*

When a project is **unregistered** from dApp Staking, staked tokens on that project still receive **basic rewards** for the duration of time they remain staked.

:::warning

 Tokens are ineligible for rewards during the Unlocking period, when being unstaked from dApp Staking.

 :::

### Bonus Staking Rewards:

When users stake on dApp(s) during the **Voting Subperiod** and maintain the same number or more tokens staked through the entire **Build&Earn Subperiod**, they become eligible for the **Bonus Reward**.

:::info

**Example**

- User stakes 1500 ASTR on **dApp A** and 1000 ASTR on **dApp B** during the `Voting` subperiod.
- During the `Build&Earn` subperiod, they don't move or unstake tokens from **dApp B** or **dApp A**.
- When the next `Voting` subperiod begins, the user is eligible to claim the `Bonus reward` for **dApp A** and **dApp B**.

:::

During the **Build&Earn Subperiod**, if an user unstakes tokens from a dApp, they become ineligible for the **Bonus Reward** for that dApp.

:::info

**Example**

- User stakes 1500 ASTR on **dApp A** and 1000 ASTR on **dApp B** during the `Voting` subperiod.
- During the `Build&Earn` subperiod, 500 ASTR is moved from **dApp B** to **dApp A** so there is 2000 ASTR on **dApp A** and 500 ASTR on **dApp B** for the rest of the subperiod.
- At the end of the subperiod, User is eligible for the `Bonus reward` for **dApp A** but NOT for **dApp B**. This is because the number of tokens staked on **dApp B** are now less than the amount staked at the conclusion of the `Voting` subperiod (500 < 1000 ASTR).
- Even if the user stakes an additional 500 ASTR on **dApp B** to reach 1000 ASTR again, the qualifying period for the `Bonus reward` has concluded until the start of the next `Voting` period. 

:::

Bonus rewards for a period can only be claimed after the period finishes.


### Other:

- **Never stake 100% of your tokens!** It's good practice to always maintain 10 ASTR or 5 SDN tokens as a transferrable balance so there's always enough in your account to pay network fees (gas) required to claim staking rewards.
- **Staking rewards MUST be claimed.** We recommend claiming rewards **once a week.**
- **Unstaked tokens are subject to a unbonding period during which they are locked.** The amount of time tokens are locked and ineligible for staking rewards depends on the specific network. Consult the page [here](/docs/learn/dapp-staking/#parameters) for more information. 
Please note that this is based on a perfect block production time of 12s. In case of any delay, the unlocking period is longer.

If you have any questions, please consult the [FAQ page](/docs/learn/dapp-staking/dapp-staking-faq/) in the Learn section or join our [Discord channel](https://discord.com/invite/astarnetwork).

### Other pages may be of interest:

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>

