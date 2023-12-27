---
sidebar_position: 2
---

Astar has a soft-capped 'yearly' inflation and uncapped max supply.
Inflation is distributed amongst actors in the network, in varying proportions.
Actors include:
* stakers
* dApp owners
* collators
* treasury


## Basic Time Units

### Cycles
**Cycle** can be considered as a 'year' in the Astar Network.
When a new cycle starts, new inflation configuration is calculated according to the total issuance at that point in time.
E.g. if 'yearly' inflation is set to be 7%, and total issuance is 1,000,000 ASTR, then the soft-capped max inflation for that
cycle will be 70,000 ASTR.

Cycle length is configurable, but in practice it will resemble a 'year' off-chain.

 $inflation\_soft\_cap = inflation\_rate * total\_issuance$

### Periods

Each **cycle** consists of one or more **periods**.
**Periods** are a core time unit in the dApp Staking protocol. Each period consists of a `Voting` and `Build&Earn` subperiods.

During the `Voting` subperiod, neither stakers nor dApp owners can earn any rewards, only _collators_ and _treasury_ continue earning.
During the the `Build&Earn` subperiod, stakers earn staking rewards per **era** and have the opportunity to earn bonus reward at the end of a period.
dApp owners also earn rewards, based on how well their dApp is performing in dApp staking, at the end of each **era**.

### Eras

Each **period** is divided up into multiple **eras**.
**Era** is the core time unit in dApp staking, and its length is measured in the number of blocks.

`BuildAndEarn` subperiod consists of one or more **eras**. Each era has a fixed length.
`Voting` subperiod always consists of exactly **one era** but its length can be longer than a standard era length.

### Example

* Block is produced every 12 seconds
* **Era length** is 7200 blocks which equals 24 hours (1 day)
* `Voting` subperiod length is 10 eras
* `Build&Earn` subperiod length is 81 eras
* Cycle length is **4 periods**

With such configuration, we'd end up with a cycle lasting 364 days (roughly a year), and each period taking around 3 months to complete.

## Recalculation

When a new cycle begins, soft-inflation cap is recalculated, and according to the calculated value, rewards for all network actors are adjusted.

The reason why it's a _soft-cap_, instead of a _hard-cap_ is how staker & dApp rewards are distributed.
Rewards are only minted when they are claimed, and it is possible that at the time of reward recalculation, some rewards remain unclaimed.
As a result, theoretically, it's possible for the cycle inflation to exceed the _soft-cap_ even though in practice it will be highly unlikely
due to various _burn_ mechanisms.

## Inflation Distribution

Based on the calculated _soft-cap_, rewards for all network participants are adjusted.

### Collators

_Collators_ get a fixed amount of the cycle's _soft-capped_ inflation.
This amount is equally divided by the number of blocks in the cycle.

$collator\_reward\_per\_block = total\_collator\_cycle\_reward / blocks\_per\_cycle$

### Treasury

Similar to the _collators_, treasury gets a fixed amount of the cycle's _soft-capped_ inflation.
To avoid it being minted all at once, the amount is equaly divided by the number of blocks in the cycle.

$treasury\_reward\_per\_block = total\_treasury\_cycle\_reward / blocks\_per\_cycle$

## dApps

dApp reward are _assigned_ at the end of an era during `Build&Earn` subperiod.
This means that the total cycle's dApp reward amount has to be equally divided by the total number of such eras in a cycle.

$dapp\_reward\_pool\_per\_era = total\_dapp\_cycle\_reward / (number\_of\_cycles * eras\_per\_build\_and\_earn)$

The total cycle's dApp reward amount has to be equally divided by the total number of eras in all of the `Build&Earn` subperiods.

# Hybrid Inflation

The new inflation model will be preceded by an intermediate phase known as the hybrid inflation model. This transitional phase encompasses these modifications:

### Inflation Adjustment

Inflation rates have been lowered. The maximum token reward per block, reached based on the optimal staking rate or staking TVL (Total Value Locked), has been reduced from 253.08 to 231.20. Please note that this is temporary until the next phase of Tokenomics 2.0 coming with dApp Staking v3.

### Treasury rewards

The dynamic treasury allocation has been removed in favor of a fixed annual inflation rate of 5%. Which correspond to a reward of 11.06 ASTR per block.

### Collators rewards

Collators will now receive a steady 3.2% of the annual inflation which correspond to a reward of 7.07 ASTR per block. Although this represents a reduction from the previous model, the upcoming alignment of EVM fees and Substrate native fees is expected to increase overall fee earnings for collators.

### Stakers & dApp Rewards

The rewards for dApp staking, both for users and dApps, will remain unchanged in absolute terms. No immediate modifications will be implemented in this area. Future updates, including the introduction of dApp staking v3, will occur in the third phase of Tokenomics 2.0.

We use the blockReward distribution to ensure those three requirements (and calculate them from the reward per block):

|                  | Percentage | Reward ASTR |
|------------------|------------|-------------|
| Block reward     | 100%       | 231.20      |
| Treasury         | 4.78%      | 11.06       |
| Collators        | 3.06%      | 7.07        |
| dApp reward      | 17.27%     | 39.93       |
| Base Staker      | 23.04%     | 53.27       |
| Adjustable Staker | 51.84%     | 119.85      |