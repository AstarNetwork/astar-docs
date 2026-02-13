import Figure from "/src/components/figure"

# For Stakers

## Overview

Do you love to stake? Or do you want to support your favorite project on Astar Network or Shiden Network? 

Discover [dApp Staking](/docs/learn/dapp-staking/index.md), a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN with them. When staking ASTR or SDN on a dApp, users not only support the development of innovative apps but also receive staking rewards from inflation.

You can educate yourself more by reading the technical documentation about [dApp Staking Technical Overview](/docs/learn/dapp-staking/dapp-staking-protocol.md).

:::tip

Before reading the dApp Staking section for stakers, make sure you understand the concept of periods, subperiods and eras, as well as the dApp Staking V3 parameters explained [here](/docs/learn/dapp-staking/index.md#understand-the-terminology-and-parameters-of-dapp-staking).

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

### Voting and rewards:

The **Voting** subperiod is used to (re)establish stakes for the upcoming **Build&Earn** subperiod, but it does not generate staking rewards.

Tokenomics 3.0 note: there are **no user-facing bonus rewards**. Staker rewards are earned only during **Build&Earn**.


### Other:

- You need to keep a minimum of 10 ASTR or 5 SDN tokens as transferable after staking.
- **You need to claim to receive your rewards, we recommend claiming your staking rewards once a week.**
- When unlocking tokens, there is a unlocking period on Astar and on Shiden. The unlocking period lengths can be consulted [here](/docs/learn/dapp-staking/#parameters).
Please note that this is based on a perfect block production of 12s. In case of any delay, your unlocking period can be a little longer.

In case you have any questions, please check the [FAQ page](/docs/learn/dapp-staking/dapp-staking-faq.md) in the Learn section or join our [Discord channel](https://discord.com/invite/astarnetwork).

### Other pages may be of interest:

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
