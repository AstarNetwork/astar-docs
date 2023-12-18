---
sidebar_position: 2
---

## Hybdrid Inflation model

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
| Ajustable Staker | 51.84%     | 119.85      |