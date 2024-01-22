import Figure from "/src/components/figure"

# For Developers

## Overview

Discover [dApp Staking](/docs/learn/dapp-staking/), a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN with them. When staking ASTR or SDN on a dApp, users not only support the development of innovative apps but also receive staking rewards from inflation.

You can educate yourself more by reading the technical documentation about [dApp Staking](/docs/learn/dapp-staking/).

**Are you a product owner and want to list your dApp in our staking mechanism to earn rewards?**  

Please take the following parameters into consideration and make sure you meet the [requirements](/docs/use/dapp-staking/for-devs/requirements.md):

- To register a dApp for dApp staking you need to have 100 SDN tokens or 1000 ASTR tokens depending on the network you would like to join as a project. dApp staking on our testnet Shibuya requires 100 SBY.
- **You must claim your rewards to receive them. We recommend that you claim your rewards at the beginning of each new period.**

:::warning

dApp Staking V3 is launched and accessible only on the Shibuya testnet. For dApp owners on Astar and Shiden Network, please refer to the [dApp Staking V2 section](/docs/use/dapp-staking/dapp-staking-v2/for-devs/).

:::

### Periods, Subperiods & Eras:

`Eras`: Time units measured in blocks. Fairly short, a basic time division in dApp staking;

**dApp Staking** is divided into **Periods** which consists of two **Subperiods**: **Voting** and **Build&Earn**.

**Voting** is the subperiod when stakers can decide to vote for dApp(s) to stake their tokens.  
No staking rewards are generated during the Voting subperiod but if users vote and stake on dApps during this subperiod, they will become eligible for the **Bonus Reward**;

:::important

It's very important for dApp owners and their teams to get organized before and during the voting subperiod to market their products, run campaigns to attract as many stakers and tokens as possible during this period.

:::

**Build&Earn** is the subperiod when stakers and dApps start earning rewards;
Users can still stake tokens during the Build&Earn subperiod to increase the rewards they get from staking. However, the amount staked during Build&Earn does not contribute to the Bonus Reward.

At the end of a **Build&Earn** subperiod, the current period ends. A new period begins, and all tokens are `unstaked` from dApp(s) but remain `locked`. A new **Voting Subperiod** starts.

As a dApp owner, you need to take the following parameters into consideration before using dApp Staking:

### Parameters:

|  | Shibuya | Shiden Network | Astar Network |
| --- | --- | --- | --- |
| Eras Per Period | 28 (~7days) | TBD | TBD |
| Eras Per Voting Subperiod | 8 (~48hours) | TBD | TBD |
| Eras Per Build&Earn Subperiod | 20 (~120hours) | TBD |TBD  |
| Blocks Per Era | 1800 (~6hours) | TBD | TBD |
| Unlocking Period | 4 Eras (~1 day) | 5 Eras (~5 days) | 10 Eras (~10 days) |

### Tier System and Rewards

dApp Staking introduces the concept of a tier system for dApps. It's important to fully understand the [tier mechanism](/docs/learn/dapp-staking/dapp-staking-protocol#tier-system) before proceeding with dApp Staking application and registration as a dApp owner.

Currently, there are **4 tiers** with a limited number of slots per tier. Tier capacity for dApp staking is calculated at the start of each period based on the ASTR price as described [here](/docs/learn/dapp-staking/dapp-staking-protocol#tier-system).  

The slots allocated to each tier can be viewed on the [dApp Staking Page](https://portal.astar.network/astar/dapp-staking/discover) of the Astar Portal.

At the end of each **Build&Earn** subperiod, dApps are assigned to a tier based on the total value staked on them by users. Each tier has a **threshold** that a dApp must reach in order to access it.

The threshold for tier 4 is fixed, but for the other tiers, the threshold is **dynamic** and calculated at the start of each new period based on the total number of slots for the period. To find out more, [click here](/docs/learn/dapp-staking/dapp-staking-protocol#tier-threshold-entry).

**Rewards** for dApps are also **dynamic**, fluctuating from tier to tier. The higher the tier, the greater the number of ASTR tokens allocated from inflation as rewards for that tier.

| Rewards allocated | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
| --- | --- | --- | --- | --- |
| Astar Network | TBD | TBD | TBD | TBD |
| Shiden Network | TBD | TBD | TBD | TBD |
| Shibuya Network | TBD | TBD | TBD | TBD |

The rewards of a tier are divided between all available slots and distributed to the dApps occupying slots. This means that the rewards for dApps within a tier are the same for each dApp, even if not all slots within a tier are occupied.

:::info

**Example:**

- Tier 1 has 5 slots for dApps and 50,000 ASTR tokens are allocated as a reward;
- At the end of the voting subperiod, only 3 slots are occupied by dApps in Tier 1 ;
- These 3 dApps will each receive 10,000 ASTR as reward;
- The remaining 20,000 ASTR tokens will not be minted by the network and will be considered burnt;

:::

If there are more dApps eligible for a tier than there is capacity, the dApps with the higher score get the advantage. dApps which missed out on a higher tier get priority for entry into the next lower tier (if there still is any).

In the case a dApp doesn't satisfy the entry threshold for any tier, even though there is still capacity, the dApp will simply be left out of tiers and won't earn any reward.

In case you have any questions, please check the [FAQ page](/docs/learn/dapp-staking/dapp-staking-faq/) in the Learn section or join our [Discord channel](https://discord.com/invite/astarnetwork).

### Other pages may be of interest:

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>

