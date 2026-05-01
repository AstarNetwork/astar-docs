---
sidebar_position: 1
title: Tokenomics 3.0
---

## Overview

Tokenomics 3.0 is the current economic model governing ASTR token emission, reward distribution, and dApp Staking mechanics on Astar Network. It was activated in March 2026 through two onchain governance referenda.

It replaced Tokenomics 2.0 with three principal changes:

- Maximum yearly inflation reduced from 7% to 5.5%, with an emission decay mechanism converging supply toward approximately 10B ASTR long-term
- Staker reward allocations restructured: bonus rewards eliminated, base and adjustable staker shares increased
- dApp Staking revamped to concentrate rewards on a capped active set of 16 dApps per era, with a yearly staking cycle and a deterministic rank-based reward model

## What Changed from Tokenomics 2.0

| Parameter | Tokenomics 2.0 | Tokenomics 3.0 |
|-----------|----------------|----------------|
| Max yearly inflation | 7% | 5.5% |
| Emission decay | None | 99.9999960% per block |
| Long-term supply target | Uncapped | ~10B ASTR |
| Base staker allocation | 10% | 15.8% |
| Adjustable staker allocation | 55% | 63% |
| Bonus staker allocation | 13.8% | 0% (eliminated) |
| Treasury allocation | 5% | 5% |
| Collator allocation | 3.2% | 3.2% |
| dApp reward allocation | 13% | 13% |
| Active dApps cap per era | ~72 | 16 |
| Staking cycle | 3 periods per year | 1 period per year |
| Tier thresholds | Price-dependent formula | Fixed % of total issuance |

## Governance

Tokenomics 3.0 was enacted through two separate onchain referenda, both passed with 100% approval:

**Referendum #50** updated inflation parameters: reduced the maximum ceiling to 5.5%, activated emission decay, and reallocated the 13.8% bonus pool into base and adjustable staker rewards.

**Referendum #51** deployed the runtime upgrade implementing the dApp Staking revamp: 16-slot cap, yearly staking cycle, rank-based reward distribution, and fixed percentage tier thresholds.

## Core Components

### Inflation

ASTR emission follows a decaying curve per block. At each block, a small fraction less is minted than the previous block, causing total supply to converge asymptotically toward approximately 10 billion ASTR. Actual inflation sits at approximately 3% under current staking participation levels, well below the 5.5% ceiling, because the adjustable staker component is only minted proportional to participation.

See [Inflation](/docs/learn/tokenomics3/inflation) for full parameter details and formulas.

### dApp Staking

Under Tokenomics 3.0, at most 16 dApps are reward-eligible per era. dApps are assigned to one of two active tiers based on total staked value. Within each tier, rewards are distributed deterministically using a rank multiplier model rather than proportionally by stake.

The staking cycle is yearly: a 1-day voting subperiod followed by a 364-day Build&Earn subperiod on Astar Network. At the end of each period, all stakes are unstaked but remain locked, and a new voting subperiod begins.

See [dApp Staking Parameters](/docs/learn/dapp-staking/protocol-parameters) for the full parameter table across Astar, Shiden, and Shibuya.

### ASTR Token Role

ASTR serves as the economic and governance token for Astar Network. Under Tokenomics 3.0, its value alignment is reinforced by:

- Reduced emission ceiling, limiting new supply growth
- Emission decay converging supply toward a long-term target
- Concentrated dApp rewards driving competitive staking behavior
- Governance control over all parameters through onchain referenda
