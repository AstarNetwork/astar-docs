import Figure from "/src/components/figure"

# For Developers

## Overview

Discover [dApp Staking](/docs/learn/dapp-staking/index.md), a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN with them. When staking ASTR or SDN on a dApp, users not only support the development of innovative apps but also receive staking rewards from inflation.

You can educate yourself more by reading the technical documentation about [dApp Staking Technical Overview](/docs/learn/dapp-staking/dapp-staking-protocol.md).

**Are you a product owner and want to list your dApp in our staking mechanism to earn rewards?**

Please take the following parameters into consideration and make sure you meet the [requirements](/use/how-to-guides/layer-1/dapp-staking/for-devs/requirements.md):

:::tip

Before reading the dApp Staking section for dApp owner, make sure you understand the concept of periods, subperiods and eras, as well as the dApp Staking V3 parameters explained [here](/docs/learn/dapp-staking/index.md#period--subperiods).

:::

### Tier System and Rewards

dApp Staking introduces the concept of a tier system for dApps. It's important to fully understand the [tier mechanism](/docs/learn/dapp-staking/dapp-staking-protocol.md#tier-system) before proceeding with dApp Staking application and registration as a dApp owner.

dApp Staking uses reward tiers (each with a limited number of slots), and where applicable assigns ranks within tiers so dApp rewards are determined deterministically by **tier + rank**. Tier capacity for dApp staking is calculated at the start of each period based on the ASTR price as described [here](/docs/learn/dapp-staking/dapp-staking-protocol.md#tier-system).

The slots allocated to each tier can be viewed on the [dApp Staking Page](https://portal.astar.network/astar/dapp-staking/discover) of the Astar Portal.

At the end of each **Build&Earn** subperiod, dApps are assigned to a tier based on the total value staked on them by users. Each tier has a **threshold** that a dApp must reach in order to access it.

At the protocol level, at most **16 dApps are reward-eligible per era** (across tiers).

The threshold for tier 4 is fixed, but for the other tiers, the threshold is **dynamic** and calculated at the start of each new period based on the total number of slots for the period. To find out more, [click here](/docs/learn/dapp-staking/dapp-staking-protocol.md#tier-threshold-entry).

**Rewards** for dApps are also **dynamic**, fluctuating from tier to tier. The higher the tier, the greater the number of ASTR tokens allocated from inflation as rewards for that tier.

Within a tier, dApp rewards are **deterministic** and can depend on the dApp's **rank (0..10)** via `tier_rank_multipliers` (bips, where `10_000 = 100%`). When a tier is under-filled, part of that tier allocation can remain **unminted** (lazy minting), reducing effective inflation.

> Refer to the [**dApp staking parameters**](/docs/learn/dapp-staking/protocol-parameters#network-values) page to find out more about the tier system and reward allocation.

:::tip
You have to claim your rewards to receive them. We recommend that you claim your rewards at least once a week or, optimistically, 2 or 3 times a week.

 :::

:::info

**Example (tier+rank rewards):**

- Tier 1 has **5 slots** and **50,000 ASTR** is allocated as a reward for that tier in a given era;
- At the end of the voting subperiod, only **3 slots** are occupied by dApps in Tier 1;
- Assume `tier_rank_multipliers` for Tier 1 is **24,000 bips**, meaning **rank 10 earns 2.4× rank 0** in that tier;
- If the 3 dApps have ranks **0**, **5**, and **10**, their era rewards are computed deterministically from tier **base (rank 0)** and **per-rank-step** components (see the technical overview formulas);
- Under-filled tiers can leave part of the tier allocation **unminted** due to the normalization cap (lazy minting).

:::

If there are more dApps eligible for a tier than there is capacity, the dApps with the higher score get the advantage. dApps which missed out on a higher tier get priority for entry into the next lower tier (if there still is any).

In the case a dApp doesn't satisfy the entry threshold for any tier, even though there is still capacity, the dApp will simply be left out of tiers and won't earn any reward.

:::warning

In the event that a dApp is **unregistered** from dApp Staking following a governance decision, all developer unclaimed rewards will become unavailable. We recommend that dApp owners claim their rewards regularly.

:::

In case you have any questions, please check the [FAQ page](/docs/learn/dapp-staking/dapp-staking-faq.md) in the Learn section or join our [Discord channel](https://discord.com/invite/astarnetwork).

### Other pages may be of interest:

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
