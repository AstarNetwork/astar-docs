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

`BuildAndEarn` subperiod consists of one or more _standard_ **eras**. Each era has a fixed length.
`Voting` subperiod always consists of exactly **one era** and this _voting_ era is unique as its length (in blocks) can be longer than a _standard_ era length (but always a multiple of _standard_ era length).

### Example

* Block is produced every 12 seconds
* **Era length** is 7200 blocks which equals 24 hours (1 day) (This is _standard_ era length)
* `Voting` subperiod length is 10 eras (This is the single _voting_ era which lasts 10 x 7700 blocks)
* `Build&Earn` subperiod length is 81 eras
* Cycle length is **4 periods**

With such configuration, we'd end up with a cycle lasting 364 days (roughly a year), and each period taking around 3 months to complete.

## Recalculation

When a new cycle begins, soft-inflation cap is recalculated, and according to the calculated value, rewards for all network actors are adjusted.

The reason why it's a _soft-cap_, instead of a _hard-cap_ is how staker & dApp rewards are distributed.
Rewards are only minted when they are claimed, and it is possible that at the time of reward recalculation, some rewards remain unclaimed.
As a result, theoretically, it's possible for the cycle inflation to exceed the _soft-cap_ even though in practice it will be highly unlikely
due to _lazy minting_ & _fee burn_ mechanisms.

## Inflation Distribution

Based on the calculated _soft-cap_, rewards for all network participants are adjusted.

### Collators

_Collators_ get a fixed amount of the cycle's _soft-capped_ inflation.
This amount is equally divided by the number of blocks in the cycle.

$collator\_reward\_per\_block = \frac{total\_collator\_cycle\_reward}{blocks\_per\_cycle}$

### Treasury

Similar to the _collators_, treasury gets a fixed amount of the cycle's _soft-capped_ inflation 
distributed in equal amounts throughout all the blocks in the cycle.

$treasury\_reward\_per\_block = \frac{total\_treasury\_cycle\_reward}{blocks\_per\_cycle}$

### dApps

dApp reward are _assigned_ at the end of each era during `Build&Earn` subperiod.
This means that the total cycle's dApp reward amount has to be equally divided by the total number of `Build&Earn` eras in a cycle.

$dapp\_reward\_pool\_per\_era = \frac{total\_dapp\_cycle\_reward}{periods\_per\_cycle * eras\_per\_build\_and\_earn}$

The dApp staking protocol will calculate how much each staked dApp should get.

### Stakers

There are two components to the staker rewards - regular _staking_ rewards & the _bonus_ reward for loyal stakers.

#### Regular Staker Rewards

Regular staker rewards are awarded for staking native currency, **ASTR**, on a dApp.
These rewards have two components - the _base_ reward and the _adjustable_ reward.

Base reward is the amount assigned to the reward pool at the end of each era regardless of how much has been staked in total.

$base\_staker\_reward\_pool\_per\_era = \frac{total\_base\_staker\_cycle\_reward}{number\_of\_cycles * eras\_per\_build\_and\_earn}$

The adjustable part is the dynamic part, and depends on the _total value staked_ and the _target stake value_.
This amount linearly increases as the _total value staked_ increases, and then saturates once the amount is reached or exceeded.
With this component, _staker rewards_ are not a _zero-sum game_.

$max_\_adjustable\_staker\_reward\_pool\_per\_era = \frac{total\_adjustable\_staker\_cycle\_reward}{number\_of\_cycles * eras\_per\_build\_and\_earn}$

The adjustable part of the reward is calculated once an era ends, using the _total value staked_ at that point in time.

$adjustable\_factor = min(1, \frac{total\_value\_staked\_percent}{ideal\_staking\_percent})$

Using the _adjustable\_factor_, adjustable portion of the staker reward is:

$adjustable\_staker\_reward\_pool = max_\_adjustable\_staker\_reward\_pool\_per\_era * adjustable\_factor$

When the _adjustable factor_ is less than **1**, it means the remainder is never minted, reducing the overall inflation.

With the above formulas, we can finally express how much staker _Alice_ earns in era **n**:

$staker\_reward\_per\_era_{Alice} = \frac{staked\_value_{Alice,n}}{total\_staked\_value_n} * (base\_staker\_reward\_pool\_per\_era_n + adjustable\_staker\_reward\_pool_n)$

#### Bonus Rewards

In case a staker stakes during the `Voting` subperiod, and doesn't reduce their stake during the `Build&Earn` subperiod below what
was staked at the end of the `Voting` subperiod, it will make them eligible for the bonus reward.

Bonus reward pool is assigned per period, and can be expressed as:

$bonus\_reward\_pool\_per\_period = \frac{total\_bonus\_cycle\_reward}{periods\_per\_cycle}$

The bonus reward for a staker _Alice_ can then be expressed as:

$bonus\_staker\_reward_{Alice} = \frac{voting\_subperiod\_staked\_value_{Alice}}{total\_voting\_subperiod\_staked\_value} * (bonus\_reward\_pool\_per\_period)$

## Lazy Minting

Both _staker_ and _dApp_ rewards are minted in a lazy fashion - when they are needed. Only collator & treasury rewards are minted per block.

With the _adjustable staker reward_ and the dApp staking tier system, the inflation in practice will be much lower than the calculated _soft-cap_.
Maximum adjustable award amounts is possible only if the ideal staking rate is reached or exceeded.
For the dApp rewards, it's unlikely that all of the tiers will be filled with dApps - it might be that the tier capacity is larger than the demand,
or that simply some dApps don't attract enough support to enter a tier. These rewards will never be even minted thus lowering the effective inflation rate.

Rewards don't persist forever, and must be claimed before they _expire_.
Although this is expected to be very lenient, it's still possible to happen.

None of the aforementioned mechanism are _burn_ mechanisms, instead they just delay the _minting_ operation until it's needed.
The major burn mechanism is part of the fee system, where a significant portion of fees get burned.
Only due to this, it's practically impossible for the _soft-capped max inflation_ to be reached when considering rewards assigned & issued during
a single cycle.

## Parameters

| Parameter                    | Astar | Shiden | Shibuya |
|------------------------------|-------|--------|---------|
| Periods Per Cycle            | 3     | 6      | 2       |
| Eras Per Voting Subperiod    | 11    | 6      | 8       |
| Eras Per Build&Earn Subperiod| 111    | 55     | 20      |
| Blocks Per Era               | 7200 (~24 hours) | 7200 (~24 hours) | 1800 (~6 hours) |
| Cycle Inflation Rate         | 7%    | 7%     | 1%      |
| Treasury Part                | 5%    | 5%     | 5%      |
| Collators Part               | 3.2%  | 3.2%   | 3%      |
| dApps Part                   | 13%   | 13%    | 20%     |
| Base Staker Part             | 10%   | 10%    | 25%     |
| Adjustable Staker Part       | 55%   | 58.8%  | 35%     |
| Bonus Part                   | 13.8% | 10%    | 12%     |
| Ideal Staking Rate           | 50%   | 50%    | 20%     |
