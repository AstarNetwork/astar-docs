---
sidebar_position: 7
title: Astar zkEVM Fee Calculation
sidebar_label: Fee Calculation
---

## How do network fees on Astar zkEVM work?
In Astar zkEVM the gas fee is calculated by by applying a fixed factor over L1 gas fee. That price factor is a fixed value and doesn't change often and it's value is based the rollup's cost to publish tx to L1. To Simply put, gas prices in L2 will linearly follow gas prices in L1.

$$ L2_{gas\_fee} = L1_{gas\_fee} * Factor $$

The L1 fee will vary depending on the amount of transactions on the L1. If the timing of your transaction is flexible, you can save costs by submitting transactions during periods of lower gas on the L1 (for example, over the weekend)

The support for congestion mechanism based EIP-1559 [here](https://eips.ethereum.org/EIPS/eip-1559) is planned for future and will make the L2 gas fee dynamic.