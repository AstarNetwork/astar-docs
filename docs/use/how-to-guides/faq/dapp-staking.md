---
sidebar_position: 3
sidebar_label: dApp Staking
title: dApp Staking Revamp FAQs
description: Answers to the most common questions about the dApp Staking revamp on Astar Network.
---

Welcome to the **dApp Staking Revamp FAQ**. Here you'll find answers to the most common questions about the dApp Staking revamp, what changed, and what it means for stakers and builders.

### Q: What changed in dApp Staking and why?

A: dApp Staking has been simplified and concentrated. The number of eligible projects is capped at 16 instead of 72. The four-tier reward structure is reduced to two active tiers with updated thresholds. Bonus rewards have been removed as a user-facing feature. The yearly staking cycle now consists of a 1-day voting period followed by a 364-day Build & Earn period.

The rationale is to shift from broad participation toward rewarding a smaller set of high-impact projects with more meaningful allocations.

### Q: Why was the number of eligible projects capped at 16?

A: With 72 projects previously sharing the reward pool, allocations were spread too thin to create meaningful incentives for builders. Concentrating rewards on 16 high-impact projects increases per-project reward value, reduces free-rider dynamics from dormant projects, and creates stronger competitive pressure to ship and maintain activity.

### Q: How does a project enter dApp Staking under the new model?

A: Projects must first be approved to join the dApp Staking program through governance, either via a referendum or an Astar Community Council (ACC) motion. Once approved and listed, projects must secure the minimum staking threshold through community staking to enter an active reward tier and begin earning dApp rewards.

The thresholds are 30 million ASTR for Tier 3 and 80 million ASTR for Tier 2.

### Q: Who reviews projects for continued eligibility?

A: Continued eligibility is overseen by the Astar Community Council (ACC). The council monitors the quality and activity of listed projects and can propose removal of underperforming or dormant dApps.

The staking mechanism also enforces eligibility automatically. Projects that fall below the minimum staking threshold stop receiving dApp rewards until they regain sufficient staking support.

### Q: What happens if a project loses enough staking support to fall below the minimum threshold?

A: If a project's total staked ASTR falls below the required tier threshold — 30M for Tier 3 or 80M for Tier 2 — it stops receiving dApp rewards until staking support recovers.

Stakers who have staked on that project continue to earn staker rewards unaffected. Any reduction in rewards applies to the project allocation, not to individual stakers.

### Q: If my project does not reach the minimum staking threshold (30M ASTR), will I still earn rewards as a staker?

A: Yes. Staker rewards are not contingent on whether the project qualifies for a tier. Your returns are based on your own staked ASTR relative to total staked supply.

You may also move your stake to a different project at any time if you prefer to support one that is actively earning dApp rewards.

### Q: If another project attracts more staking than mine and pushes it outside the top 16, will I stop earning rewards?

A: No. The 16-slot limit applies only to dApp rewards. Staker rewards are calculated at the protocol level based on total staking participation, not per project. Your staking APR remains consistent regardless of where your chosen project ranks.

### Q: What are the two active tiers and how are they structured?

A: Tier 2 requires 80 million ASTR staked and receives the larger share of the dApp reward pool. Tier 3 requires 30 million ASTR staked and receives a smaller but still meaningful allocation.

Only these two tiers are active and distribute dApp rewards. The previous four-tier structure has been consolidated to reduce complexity and improve transparency.

:::info

Tier 1 is retained in the backend for operational purposes but is not part of the community-facing reward structure.

:::

### Q: How are rewards distributed within each tier?

A: Within each tier, dApp rewards are distributed using a deterministic tier+rank model parameterized by `tier_rank_multipliers`. Rewards are not distributed proportionally by stake alone.

Staker rewards remain uniform. All stakers earn the same APR regardless of which project they support.

### Q: Why are staker rewards lower under the new model?

A: The maximum inflation ceiling has been reduced from 7% to 5.5%. This lowers the total ASTR allocated to reward pools, including base and adjustable staking rewards.

The bonus reward allocation has been redirected into these same pools, partially offsetting the reduction. However, the net effect is a lower overall APR as emission decay gradually reduces per-block emissions over time.

### Q: Do all stakers earn the same APR regardless of which project they support?

A: Yes. All stakers earn identical APR regardless of which dApp they stake on.

Staker rewards are calculated at the protocol level based on total staking participation. They are not determined by individual project performance. This design allows stakers to choose projects based on ecosystem conviction rather than yield optimization.

### Q: What is the difference between base and adjustable staking rewards?

A: Base staking rewards are funded from the base staker allocation, which currently represents 15.8% of cycle inflation. These rewards are distributed every era regardless of staking participation.

Adjustable staking rewards represent 63% of cycle inflation and scale linearly with total staking participation up to the 50% ideal staking rate. If staking participation remains below that threshold, the unused portion is not minted.

:::info

This is why actual inflation sits at ~3% despite the 5.5% ceiling. For full parameter details, see the [Inflation documentation](https://docs.astar.network/docs/learn/tokenomics2/Inflation).

:::

### Q: What does "adjustable staking rewards" mean in practice? Should stakers be concerned?

A: The adjustable component exists to fine-tune emissions, not to introduce sudden changes. Any modification requires a governance proposal and community approval.

Stakers can monitor the Astar Forum and governance portal to stay informed about any proposed adjustments.

### Q: What were bonus rewards and why were they removed?

A: Bonus rewards were a dApp Staking V3 incentive that rewarded stakers for participating during the voting subperiod of each cycle. This created timing-dependent behaviour that added complexity without delivering clear ecosystem benefits.

They have been removed as a user-facing feature. The allocation that previously funded bonus rewards has been redistributed into the base and adjustable staker reward pools.

### Q: Can I still claim bonus rewards from previous dApp Staking cycles?

A: Yes. Bonus rewards accumulated from previous cycles remain claimable and are not affected by the revamp.

The removal applies only to new reward accrual after the revamp activation date.

### Q: Now that bonus rewards have been removed, how many moveStake actions do I have per year?

A: The previous *2 safe moves per cycle* rule existed solely to protect bonus rewards — exceeding the limit would forfeit your bonus. Since bonus rewards have been removed, that cap no longer applies. Stakers can now use **moveStake as many times as they want** throughout the year without any penalty.

The only remaining consideration is practical: each **moveStake** during **Build & Earn** triggers an unstake → stake sequence, so the moved amount earns no staking rewards for that specific era. Moves during the **Voting** subperiod carry no such cost, since no staking rewards are generated during Voting regardless.

### Q: Can I move my stake freely throughout the yearly cycle?

A: Yes. Stakers can move their stake during the cycle without any bonus-related timing penalty or advantage.

The standard next-era activation rule still applies, meaning moved stake becomes effective from the next era. There is no longer any strategic cost tied to voting subperiod timing. Unlocking and unstaking mechanics remain unchanged from the previous version.

### Q: How does the new yearly staking cycle work?

A: The yearly cycle consists of a 1-day voting period followed by a 364-day Build & Earn period.

At the start of each new cycle, stakers must restake their tokens — stakes do not carry over automatically from the previous year. Stakers can restake at any point during the cycle, either during the voting period or at any time during the Build & Earn period.

Once staked, rewards are earned continuously for the remainder of the cycle without needing to act at specific intervals. Rewards are claimable on an ongoing basis and the cycle resets annually.

:::info

If you do not restake when a new cycle starts, your tokens remain locked but will not generate staking rewards until you stake again.

:::

### Q: What role does governance play in the ongoing management of dApp Staking?

A: Governance retains oversight over tier thresholds, reward allocations, project eligibility, and the adjustable reward component. All changes occur through onchain proposals discussed on the Astar Forum and enacted through formal referendums.

The revamp itself was implemented through two separate referendums. One covered tokenomics parameter changes and the other covered the dApp Staking runtime upgrade.

### Q: As a staker, do I need to do anything differently under the revamp?

A: For most stakers, the experience is simpler. Stake your ASTR on a project you want to support, earn rewards throughout the year, and claim as needed without tracking voting periods or timing your actions.

If you use a liquid staking product such as Bifrost or Astake, check with your provider to confirm that their product reflects the updated staking cycle logic.

### Q: What specific criteria were applied when selecting the 16 eligible projects?

A: The 16 eligible projects were not newly selected. They are the projects that remained after the Astar Community Council (ACC) conducted a large-scale cleanup of the previous 72-project roster. Following months of continuous monitoring, 56 projects were delisted, reducing the pool to those that could credibly meet the standards required under the limited-slot model.

The criteria applied during that review — as defined in the dApp Staking Code of Conduct and the updated Entry Requirements and Removal Criteria — targeted projects that demonstrated one or more of the following over an extended period:

- Prolonged inactivity or no visible development progress
- No measurable onchain contribution or ecosystem impact
- No meaningful alignment with Astar or ASTR value creation
- Lack of communication, transparency, or reporting engagement
- Failure to maintain an active product or service delivering ongoing value

The process was the result of sustained observation to ensure dApp Staking rewards support active builders rather than nominal listings. Participation in the program is conditional and performance-based, not permanent.

Projects that remain in the roster continue to be monitored by the ACC. Further delisting actions can be initiated if standards are not upheld. New projects may enter through a governance motion or referendum, and must also independently secure the required staking threshold to qualify for an active reward tier.

### Q: Can a project re-enter if it falls below the minimum staking threshold?

A: Yes. Falling below the threshold suspends dApp reward eligibility for that era but does not remove the project from the protocol registry.

If community staking later exceeds the required threshold (30M ASTR for Tier 3, 80M ASTR for Tier 2), the project automatically resumes earning dApp rewards from the following era. No additional governance action is required.

This design keeps the active reward set meritocratic and responsive to ongoing community support rather than permanently locked by an initial selection.

### Q: If a project loses eligibility, is my stake automatically moved?

A: No. Stakes are never moved automatically.

If the project you staked on falls below its tier threshold or becomes unregistered, your ASTR remains staked on that project and your staker rewards continue uninterrupted. Staker APR is not contingent on the project's tier status.

Your stake will only move if you manually initiate a moveStake action.

:::note

If a project is formally unregistered by governance rather than simply falling below a threshold, any unclaimed dApp rewards for that project become unavailable. However, your own staker rewards earned for past eras remain claimable.

:::
