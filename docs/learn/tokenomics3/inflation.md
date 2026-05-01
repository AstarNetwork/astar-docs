---
sidebar_position: 2
title: Inflation
---

## Overview

ASTR emission follows a decaying per-block schedule with no hard supply cap. Total supply converges asymptotically toward approximately 10 billion ASTR over the long term.

Each block, the protocol calculates a per-block emission amount. That amount is then distributed across five reward pools and minted into the respective accounts.

## Emission Decay

Each block, the per-block emission is multiplied by a decay factor of **0.999999960** (99.9999960%). This causes each block to emit slightly fewer tokens than the previous one.

The resulting long-term supply convergence target is approximately **10 billion ASTR**.

## Soft Cap and Cycles

The protocol defines a maximum yearly inflation ceiling of **5.5%**. This ceiling is applied per cycle, where one cycle corresponds to approximately one year.

At the start of each cycle, the soft cap is calculated against the current total issuance:

$$inflation\_soft\_cap = 0.055 \times total\_issuance$$

Actual inflation will be lower than this ceiling whenever the adjustable staker component is not fully minted.

## Allocation Breakdown

At each block, newly minted ASTR is distributed across five pools:

| Pool | Allocation | Behaviour |
|------|------------|-----------|
| Base staker rewards | 15.8% | Minted every era regardless of staking participation |
| Adjustable staker rewards | 63% | Scales linearly with staking participation up to the 50% ideal rate |
| dApp rewards | 13% | Distributed to dApps in active tiers each era; unused amounts from under-filled tiers are not minted |
| Treasury | 5% | Governed by onchain treasury proposals |
| Collator rewards | 3.2% | Paid to block producers each era |

**Total: 100%.** The 13.8% bonus allocation from Tokenomics 2.0 was redistributed to the base (10% → 15.8%) and adjustable (55% → 63%) staker pools.

## Adjustable Staker Rewards

The adjustable component is proportional to how close total staking participation is to the 50% ideal staking rate:

$$adjustable\_emission = 63\% \times \min\left(\frac{total\_staked}{total\_issuance \times 0.50},\ 1.0\right)$$

If 25% of ASTR is staked (half the ideal rate), 50% of the adjustable pool is minted. The remainder is not minted, keeping actual inflation below the 5.5% ceiling.

Under current staking participation levels, actual ASTR inflation is approximately **3%**.

## dApp Reward Lazy Minting

When a tier has fewer dApps than its slot allocation, the unused portion of that tier's reward share is not minted. This reduces effective inflation when fewer than 16 dApps qualify for active tiers.

## Parameters

| Parameter | Value |
|-----------|-------|
| Max yearly inflation ceiling | 5.5% |
| Emission decay per block | 99.9999960% |
| Long-term supply convergence | ~10B ASTR |
| Ideal staking rate | 50% |
| Base staker allocation | 15.8% of cycle inflation |
| Adjustable staker allocation | 63% of cycle inflation |
| dApp reward allocation | 13% of cycle inflation |
| Treasury allocation | 5% of cycle inflation |
| Collator allocation | 3.2% of cycle inflation |

## Comparison with Tokenomics 2.0

Tokenomics 2.0 used a 7% maximum inflation ceiling with no emission decay and no long-term supply target. The 13.8% bonus allocation rewarded stakers for participating during the voting subperiod of each cycle, creating timing-dependent behaviour with no direct ecosystem benefit.

Tokenomics 3.0 eliminates bonus rewards entirely and redirects the allocation into base and adjustable staker pools, providing more predictable returns that scale with participation rather than timing.
