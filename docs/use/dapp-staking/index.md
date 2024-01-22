# dApp Staking

dApp staking on Astar and Shiden Network introduces a novel approach, empowering individuals to nominate their ASTR/SDN tokens to support specific dApps.

For every block produced on the network, a segment of inflation is specifically allocated to dApp staking. These rewards are then divided between the dApp developers and stakers involved, offering benefits to both developers and stakers.

As a dApp gains popularity and attracts more stakers, the developers stand to receive a greater share of block rewards. 

Importantly, the dApp staking program is inclusive, accommodating projects utilizing EVM and Wasm technologies, along with zkEVM dApps. 

For a more detailed exploration of dApp Staking, refer to the comprehensive presentation in the [Learn section](/docs/learn/dapp-staking/).

:::warning

dApp Staking V3 is launched and accessible only on the Shibuya testnet. For dApp Staking users on Astar and Shiden Network, please refer to the [dApp Staking V2 section](/docs/use/dapp-staking/dapp-staking-v2/).

:::

### Periods, Subperiods & Eras:

`Eras`: Time units measured in blocks. Fairly short, a basic time division in dApp staking;

**dApp Staking** is divided into **Periods** which consists of two **Subperiods**: **Voting** and **Build&Earn**.

**Voting** is the subperiod when stakers can decide to vote for dApp(s) to stake their tokens and when dApps owners and team can market their products, conduct campaign and attract stakers.  
No staking rewards are generated during the Voting subperiod but if users vote and stake on dApps during this subperiod, they will become eligible for the **Bonus Reward**;

:::important

It's very important for dApp owners and their teams to get organized before and during the voting subperiod to market their products, run campaigns to attract as many stakers and tokens as possible during this period.

:::

**Build&Earn** is the subperiod when stakers and dApps start earning rewards;
Users can still stake tokens during the Build&Earn subperiod to increase the rewards they get from staking. However, the amount staked during Build&Earn does not contribute to the Bonus Reward.

At the end of a **Build&Earn** subperiod, the current period ends. A new period begins, and all tokens are `unstaked` from dApp(s) but remain `locked`. A new **Voting Subperiod** starts.

As an user or a dApp owner, you need to take the following parameters into consideration before using dApp Staking:

### Parameters:

|  | Shibuya | Shiden Network | Astar Network |
| --- | --- | --- | --- |
| Eras Per Period | 28 (~7days) | TBD | TBD |
| Eras Per Voting Subperiod | 8 (~48hours) | TBD | TBD |
| Eras Per Build&Earn Subperiod | 20 (~120hours) | TBD |TBD  |
| Blocks Per Era | 1800 (~6hours) | TBD | TBD |
| Unlocking Period | 4 Eras (~1 day) | 5 Eras (~5 days) | 10 Eras (~10 days) |
| Minimum Amount to Stake | 5 SBY | 50 SDN | 500 ASTR |

### User & Dev Guides

In the following sections, you'll find all the help you need to interact with dApp Staking as a staker or dApp owner. 

You will also find guides for dApp Staking V2 for reference until the full transition to dApp Staking v3.


import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
