---
sidebar_position: 1
tags:
    - astar
    - dapp-staking
    - astar-evolution
description: Page with dApp information about dApp Staking mechanism
---

# dApp Staking

## Overview

*At Astar, we're driven by the mission to transform the internet into a freely owned space by the people, where everyone has inviolable control over their data and assets. This commitment to a user-governed internet lies at the heart of the Web3 vision that inspires us.*

:::info

dApp Staking is a crucial accelerator in realizing the Web3 vision, as it lays the foundation for the development of exceptional dApps for users and fuels the drive towards making Web3 accessible to all.

:::

## What is dApp Staking

**dApp Staking** is Astar’s unique mechanism to financially incentivise developers who build decentralized applications (**dApps**). By engaging in dApp staking, developers can receive a basic income, which allows them to continue building and enhancing their dApps. Moreover, it allows to build a strong relationship between developers, stakers and users of dApps, where everyone is rewarded.

dApp staking on the *Astar/Shiden* Network operates similarly to **staking on validators**. However, in new paradigm, individuals known as **dApp stakers** have the ability to stake their *Astar or Shiden* tokens on specific dApps they wish to support. 

At every block on the network, a portion of the *inflation* is allocated to dApp staking. This reward is then distributed between the operators (developers) of the dApps and the stakers.

:::note[How it works?]

The mechanism is simple: developers earn rewards while building their great projects and attracting supporters, while stakers earn by backing their favorite dApps using their ASTR.

:::

## Benefits of dApp Staking on Astar and Shiden Network

For Web3 to flourish, there needs to be a *symbiotic relationship* between dApp stakers, dApp developers, and dApp users. On Astar and Shiden, dApp staking is the mechanism that enables this mutually beneficial relationship to occur.

- **Developer Compensation:** Unlike traditional approaches where dApp developers need to rely on grant programs, token issuance, and fundraising efforts to generate income, dApp staking on Astar/Shiden provides developers with a basic income. As long as a dApp has been nominated, developers can receive a steady stream of rewards.

- **Increased Popularity, Increased Reward:** As a dApp gains popularity and attracts more nominators from the community, the developers who built the dApp can receive a larger percentage of the block rewards. This incentivizes developers to create high-quality dApps that resonate with users and foster community engagement.

- **Reduced Dependency on Gas Fees:** On the Astar and Shiden Network, developers can receive compensation through dApp staking, minimizing their reliance on gas fees and making it more economically feasible to continue dApp development.

:::note[dApp Staking & ASTR]

The Astar dApp Staking mechanism is the key system that continuously drives the growth of the Astar and Shiden ecosystems. Its primary fuel is ASTR, which organically enables the entire system to function efficiently.

:::

### 1. Benefits for Stakers: Increase in Token Value & Earn Tokens

Astar or Shiden dApp stakers want the value of their tokens to increase but for the value of their tokens to increase, the underlying value of the asset needs to increase. This increase in value can happen when the Network grows or when there are fewer tokens in circulation. Stakers can not only make their tokens more valuable over time but also earn high returns (APRs) by staking their tokens on dApps.

This market dynamic enables dApp stakers to get more long-term value from their tokens while earning high APRs from staking their tokens to dApps.

:::tip[Stakers]

If you want to learn more about participating as a **Staker**, please visit → [**dApp Staking for Stakers**](/docs/use/dapp-staking/for-stakers/) 

:::

### 2. Benefits for Builders: Earn Rewards

For great dApps to be built, developers need to build them. For developers to build great dApps, they need financial incentives.

Ultimately, the most **precious human resource** in the Web3 ecosystem are *developers*. Before dApp staking, there were little to no financial incentives for developers to make dApps or to build infrastructure on public blockchains.

With dApp staking, developers can **earn a basic income** while building dApps on Astar or Shiden. Having financial incentives entices more developers to build and improve their dApps. The more developers build on our ecosystem, the greater the benefits for the whole ecosystem.

That is why Astar considers it essential to provide developers with **financial motivation** and to ensure they are able to build and earn simultaneously, focusing on development without additional hustle.

:::tip[Builders]

If you want to learn more about participating as a **dApp builder**, visit → [**dApp Staking for builders**](/docs/use/dapp-staking/for-devs/) 

:::

### 3. Benefits for dApp Users: Increase in dApp & Network Utility

dApp staking plays an essential role in improving the **quality of the ecosystem**, as it facilitates the growth and improvement of dApps. This gives developers the opportunity to generate revenue while building **high-quality dApps**.

The presence of more high-quality dApps not only attracts and retains more users, but also initiates a network effect. This phenomenon encourages ecosystem expansion and increases the intrinsic value of the network in the long term.

In short, the importance of *dApp Staking* lies in its contribution to the ongoing improvement and greater utility of the ecosystem. The multiplication of high-quality dApps, combined with a growing number of users, results in a network effect that increases the overall value of the ecosystem in the long term.

:::tip[dApps]

Meet the dApps that are part of the Astar y Shiden ecosystem → [**Ecosystem dApps**](https://astar.network/ecosystem)

:::

## Understand the terminology and parameters of dApp Staking

To understand how dApp staking v3 works, it’s essential to grasp the following basics:

### Era

`Eras` is a basic time unit in dApp Staking. The length of an Era is 7200 blocks, equivalent to roughly 1 day.

### Period & Subperiods

`Period` is a more lengthy time unit of dApp Staking.  

:::note[Period]

*To put it simply, if we consider a Period in dApp Staking, it's similar to a concept of a month in human terms, made up of several days (Eras in this case).*

:::

Each `Period` consists of two `Subperiods`:

- Voting
- Build&Earn

*Continuing with our human time analogy, it's like dividing a month into two (unequal) parts – the first part can be seen as the Voting phase, and the second part is the Build&Earn phase.*

**Voting (Staking) Subperiod**

A subperiod when stakers can decide to vote for dApp(s) to stake their tokens and when dApps owners and team can market their products, conduct campaign and attract stakers.  
No staking rewards are generated during the Voting subperiod but if users vote and stake on dApps during this subperiod, they will become eligible for the **Bonus Reward**;

:::important

It's very important for dApp owners and their teams to get organized before and during the **voting subperiod** to market their products, run campaigns to attract as many stakers and tokens as possible during this period.

:::

**Build&Earn Subperiod** 

A subperiod when stakers and dApps start earning rewards;
Users can still stake tokens during the Build&Earn subperiod to increase the rewards they get from staking. However, the amount staked during Build&Earn does not contribute to the Bonus Reward.

At the end of a **Build&Earn** subperiod, the current period ends. A new period begins, and all tokens are `unstaked` from dApp(s) but remain `locked`. A new **Voting Subperiod** starts.

As an user or a dApp owner, you need to take the following parameters into consideration before using dApp Staking:

#### Parameters

| Parameters                     | Astar Network       | Shiden Network      | Shibuya             |
| ------------------------------ | ------------------- | ------------------- | ------------------- |
| Eras Per Period                | 122 (~122 days)     | 61 (~61 days)       | 28 (~7 days)        |
| Eras Per Voting Subperiod      | 11 (~11 days)       | 6 (~6 days)         | 8 (~48 hours)       |
| Eras Per Build&Earn Subperiod  | 111 (~111 days)     | 55 (~55 days)       | 20 (~120 hours)     |
| Blocks Per Era                 | 7200 (~24 hours)    | 7200 (~24 hours)    | 1800 (~6 hours)     |
| Unlocking Period               | 9 Eras (~9 days)    | 4 Eras (~4 days)    | 4 Eras (~1 day)     |
| Minimum Amount to Stake        | 500 ASTR            | 50 SDN              | 5 SBY               |

For the full list of parameters, please check the [dApp staking parameters page](/docs/learn/dapp-staking/protocol-parameters.md) and [Tokenomics 2.0 page](/docs/learn/tokenomics2/Inflation/#parameters).

#### Tier System

Tier System is a method to rank dApps based on the total value staked on them. The Tier System is updated at the end of each Build&Earn Subperiod era.

There are a limited number of tiers, each with a set number of slots and a minimum threshold for dApps to qualify. 

A dApp must gain enough support to enter a tier, with dynamic thresholds for fair competition. Higher tiers offer larger rewards.

You can always view in what tier the dApp is in the Projects Leaderboard on the Astar Portal.

:::tip

Find out more about the Tier system for dApps [here](/docs/use/dapp-staking/for-devs/#tier-system-and-rewards).

:::

## What should I do next

*The concept of dApp Staking is simple:*

Users support dApps in the ecosystem by staking on them, and when the dApp gathers enough support, it receives rewards in native currency, sourced from inflation.

As a result, stakers are rewarded for their commitment and staking efforts.

:::tip

- If you are **ASTR or SDN token holder** interested in **staking**, refer to [this section](/docs/use/dapp-staking/for-stakers/) to learn more about participating as a staker.

- If you are a **dApp developer** building on Astar, refer to [this section](/docs/use/dapp-staking/for-devs/) to learn more about participating as a dApp builder.

- For detailed **technical overview** of dAppStaking protocol, visit this [page](/docs/learn/dapp-staking/dapp-staking-protocol/).

- Check the [**FAQ section**](/docs/learn/dapp-staking/dapp-staking-faq.md), especially covering topics around new version of dApp Staking (V3) planned to go live on Astar in Q1 2024.

:::

### Security Audit

dApp staking v3 has been audited by [SR Labs](https://www.srlabs.de/). For more information check out [this link](https://github.com/AstarNetwork/Audits/blob/72337c6d9aede3c3ae4f72024077c651f9bf2886/reports/2024-01%20Astar%20dApp%20Staking%20v3%20-%20SR%20Labs.pdf)

### Other pages may be of interest:

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
