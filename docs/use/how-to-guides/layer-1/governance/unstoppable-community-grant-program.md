---
sidebar_position: 3
sidebar_label: Strategic Staking Program
title: ACC Strategic Staking Program
---

## Overview

The ACC Strategic Staking Program (SSP) is the framework through which the Astar Community Council (ACC) deploys Community Treasury ASTR into dApp Staking. It replaced the previous Unstoppable Community Grant (UCG) program.

The program operates through two lanes: Lane A for reactive, condition-triggered interventions and Lane B for proactive, performance-based quarterly allocations. All positions are conditional, time-bound, and subject to onchain verification.

The total Community Treasury holds approximately **125M ASTR**. The program caps combined Lane A and Lane B exposure at **80M ASTR** (~64% of treasury), keeping a liquid reserve of ~45.5M ASTR available for non-staking uses and Lane A buffers.

## Lane A: Reactive Staking

Lane A allows the ACC to respond quickly when a strategic partner or critical infrastructure project faces a staking shortfall that could affect ecosystem stability.

### Activation conditions

A Lane A position can be opened when any of the following conditions is met:

- A project's staked ASTR drops below **28M** (floor trigger)
- A strategic partner falls below **75M ASTR** (tier-retention trigger)
- A contractual obligation exists where a tier downgrade creates direct treasury exposure

### Constraints

- Maximum **2 concurrent positions**
- Maximum **40M ASTR per position**
- Position closes when the triggering condition resolves and remains resolved for 14 consecutive days, followed by a 7-day post-resolution review

### Decision process

Any ACC member can initiate a Lane A proposal. The ACC conducts an internal vote within 48 hours using simple majority. Execution is immediate. A public retrospective is published within 7 days.

## Lane B: Proactive Performance-Based Staking

Lane B allocates ASTR to dApps that demonstrate sustained contribution to the Astar ecosystem, based on quarterly KPI reviews.

### Constraints

- Maximum **35M ASTR per position**
- Maximum **3 concurrent positions**
- Combined Lane A + B exposure must not exceed **80M ASTR**

### Allocation cycle

Lane B runs on a quarterly cycle. The ACC publishes an ecosystem KPI review, opens a 7-day public comment period, and approves allocations by simple majority. Execution follows within a 48-hour window.

### KPI scoring

Candidates are ranked using two weighted metrics:

| Metric | Weight | Description |
|--------|--------|-------------|
| ASTR utility contribution | 60% | Transaction volume share and TVL denominated in ASTR |
| User growth trend | 40% | 90-day change in unique active wallets |

The top 2 to 3 projects per quarter receive Lane B allocations.

### Removal conditions

A Lane B position is closed if any of the following occurs:

- Activity falls below the minimum threshold for 2 consecutive months
- ASTR utility contribution declines more than 40% from the allocation baseline
- A material security incident remains unresolved for 30 or more days
- A Lane A intervention requires redeployment of funds

## Eligibility

All applicants must pass two stages of review.

**Stage 1: Binary filters** (all three required):

1. 6 or more months of continuous onchain activity
2. Publicly accessible, functional product
3. Minimum 200 unique active wallets in the past 90 days

**Stage 2: Performance ranking** (Lane B only):

Projects that pass Stage 1 are ranked by weighted KPI score as described above. Only the top-ranked projects per quarter receive allocations.

## Governance and transparency

- Lane A decisions are ACC-internal with a 48-hour vote and mandatory 7-day public retrospective
- Lane B decisions follow a full public proposal and 7-day comment period before any vote
- Quarterly ecosystem KPI reports are published and all data is verifiable onchain
- Lane A always takes precedence over Lane B; Lane B positions are dynamically adjusted if Lane A requires redeployment

All allocations are executed as onchain motions by the ACC using Community Treasury funds. Positions can be tracked on the [Community Treasury account](https://astar.subscan.io/account/YQnbw3oWxBju7z5CRVoq1K6JzwDaj6DNePwdc2R2fG7jdix).

## First operation: April 2026

The program's inaugural operation deployed **122M ASTR** across five projects:

| Project | Allocation | Rationale |
|---------|-----------|-----------|
| Dwellir | 30M ASTR | Core node infrastructure |
| Aradia | 31M ASTR | NFT marketplace, sustained development |
| Lucky | 24M ASTR | Wasm presence, active builder |
| Onchain Bridges | 30M ASTR | Cross-chain infrastructure and Soneium connectivity |
| Sake Finance | 7M ASTR | Pioneer DeFi deployment on Soneium |

Verified onchain: Community Council Motion #145, Subscan extrinsic `13039421-2`.

## Relationship to UCG

The UCG program provided early-stage staking subsidies to newly registered dApps. The SSP replaces it with objective, performance-based criteria. Projects that previously received UCG support may apply under the SSP eligibility framework if they meet Stage 1 filters and qualify through KPI scoring.

## Further resources

- [dApp Staking Overview](https://docs.astar.network/docs/learn/dapp-staking/)
- [Register your dApp in dApp Staking](https://docs.astar.network/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/register-dapp/)
- [Astar Governance Guide](https://docs.astar.network/docs/use/how-to-guides/layer-1/governance/subsquare_guide)
- [Astar Forum: SSP post](https://forum.astar.network/t/acc-strategic-staking-program/9439)
- [Astar Discord](https://discord.com/invite/astarnetwork)
