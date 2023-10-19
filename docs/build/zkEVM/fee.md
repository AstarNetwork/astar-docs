---
sidebar_position: 7
title: Astar zkEVM Fee Calculation
sidebar_label: Fee Calculation
---

## How do network fees on Astar zkEVM work?
Every transaction consists of two costs: an L2 (execution) fee and an L1 (security) fee. The L2 fee is the cost to execute your transaction on the L2, and the L1 fee is the estimated cost to publish the transaction on the L1. Typically the L1 security fee is higher than the L2 execution fee.

The L1 fee will vary depending on the amount of transactions on the L1. If the timing of your transaction is flexible, you can save costs by submitting transactions during periods of lower gas on the L1 (for example, over the weekend)

Similarly, the L2 fee can increase and decrease depending on how many transactions are being submitted to the L2. This adjustment mechanism has the same implementation as the L1. You can read more about EIP-1559 [here](https://eips.ethereum.org/EIPS/eip-1559).