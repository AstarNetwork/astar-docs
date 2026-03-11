---
sidebar_position: 1
sidebar_label: Tokenomics 3.0
title: Tokenomics 3.0 FAQs
description: Answers to the most common questions about Tokenomics 3.0 on Astar Network.
---

Welcome to the **Tokenomics 3.0 FAQ**. Here you'll find answers to the most common questions about how Tokenomics 3.0 works, what changed, and what it means for ASTR holders and stakers.

### Q: What is Tokenomics 3.0 and what does it change compared to the previous model?

A: Tokenomics 3.0 transitions ASTR from an open-ended inflationary model to a fixed maximum supply architecture by introducing an emission decay function (`r = 0.000004%` per block). This gradually reduces token emissions per block over time. It also lowers the maximum yearly inflation ceiling from 7% to 5.5%, redirects the bonus reward allocation into base and adjustable staker reward pools, and removes bonus rewards as a user-facing benefit.

### Q: Does ASTR now have a fixed supply cap?

A: Yes. With the maximum inflation ceiling reduced to 5.5% and the emission decay function applied, ASTR total supply converges to a maximum of 10 billion tokens. In practice, the effective ceiling will be lower because burn events such as Burndrop permanently reduce supply beyond this cap.

### Q: Why was the maximum inflation ceiling reduced from 7% to 5.5%?

A: The maximum inflation ceiling is the figure from which token emission per block is derived for every allocation in the system. Lowering it from 7% to 5.5% — a 21.4% reduction — reduces total yearly maximum emission from ~603.6M to ~474.2M ASTR, removing **~129.3M ASTR per year** from maximum emission capacity.

| Allocation | Share at 7% | At 7% (ASTR/yr) | Share at 5.5% | At 5.5% (ASTR/yr) | Delta |
| --- | --- | --- | --- | --- | --- |
| Collators | 3.20% | 19,314,058 | 3.20% | 15,175,331 | −4,138,727 |
| Treasury | 5.00% | 30,178,216 | 5.00% | 23,711,456 | −6,466,761 |
| Base staker | 10.00% | 60,356,433 | 15.80% | 74,928,201 | +14,571,768 |
| Adjustable staker | 55.00% | 331,960,385 | 63.00% | 298,764,346 | −33,196,039 |
| Bonus | 13.80% | 83,291,878 | 0% | 0 | −83,291,878 |
| dApp rewards | 13.00% | 78,463,363 | 13.00% | 61,649,785 | −16,813,578 |
| **Total** | **100%** | **603,564,336** | **100%** | **474,229,121** | **−129,335,215** |

The removal of bonus rewards (previously 13.8% of the pool) was redistributed into base staker and adjustable staker allocations. As a result, base staker rewards actually increase in absolute terms despite the lower ceiling, partially offsetting the reduction for stakers.

:::note

The network has never operated near its 7% theoretical maximum and actual inflation has consistently been around 3% due to the dynamic inflation mechanism. Hence, the ceiling reduction does not materially disrupt day-to-day staking returns.

:::

### Q: What is emission decay and how does it work in practice?

A: Emission decay applies a fixed reduction factor of `r = 0.000004%` per block to the baseline emission using the formula `E(n) = E₀ × (1 − r)ⁿ`. This causes ASTR emitted per block to decrease exponentially over time.

Approximately 81 percent of today's emission level remains after one year, and approximately 65 percent remains after two years. Over the long term, total remaining emissions converge to a finite sum, establishing the 10 billion ASTR maximum supply ceiling.

### Q: Why was the decay rate set at exactly 99.999996%? Is that number arbitrary?

A: The decay rate was calculated to achieve the target maximum supply of 10 billion ASTR given the current baseline emission and block time. It is derived directly from the emission formula `E(n) = E₀ × (1 − r)ⁿ` and is not arbitrary.

When `r = 4 × 10⁻⁸`, the cumulative emission limit converges to `E₀ / r`, producing the 10 billion supply ceiling when added to current circulating supply.

:::info Decay formula

`E(n) = E₀ × (1 − 4×10⁻⁸)ⁿ` — Total future emissions: `lim C(n) = E₀ / r`

At 50% ideal staking ratio with `E₀ = 90.22 ASTR/block`, this converges to the 10B ASTR ceiling.

:::

### Q: What is the current actual inflation rate for ASTR?

A: The current actual inflation rate is approximately 3%, significantly below the 7% ceiling. This is because Astar's dynamic inflation mechanism reduces emissions when staking participation falls below the 50% ideal staking rate. Unreached adjustable staker rewards are simply never minted.

Tokenomics 3.0 preserves this dynamic mechanism but lowers the ceiling within which it operates. Since all per-block emissions are now derived from a lower base, actual inflation going forward is expected to settle **below the previous ~3%** level.

### Q: Does Tokenomics 3.0 change how staking rewards are calculated?

A: No. The core dynamic reward mechanism remains unchanged. Staker rewards continue to consist of a base component and an adjustable component that scales with staking participation up to the 50% ideal rate.

What changes is the maximum inflation ceiling (7% → 5.5%) and the per-block decay factor. Over time, this will gradually reduce the absolute ASTR allocated to rewards, bringing projected staking APR from ~17% today down to approximately 11–14% over the next two years.

### Q: How do gas fee burns interact with the 10B supply model?

A: Gas fee burns operate independently from the decay mechanism. On Astar Network, 80% of transaction fees are permanently burned, which reduces the circulating supply and effectively lowers the total supply ceiling over time.

Significant burn events such as Burndrop can remove billions of ASTR beyond the decay-based cap, making the effective maximum supply meaningfully lower than the theoretical 10B ceiling.

### Q: What happened to the bonus allocation that previously existed?

A: Bonus rewards are removed as a user-facing benefit. The allocation that previously funded them has been redistributed into the base and adjustable staker reward pools.

Stakers now benefit from a slightly larger base and adjustable allocation, while no longer needing to time their actions to a voting period to optimize returns.

### Q: Are there any further changes to Tokenomics planned after Tokenomics 3.0?

A: No structural changes are currently planned. However, the system is designed to be monitored and adjusted over time. Inflation parameters, the decay rate, and reward distribution ratios can all be modified through governance if required.

This design makes the model adaptable. Governance participants can shift toward more conservative or more growth-oriented inflation depending on onchain conditions and ecosystem consensus.

### Q: Does reduced issuance impact network security?

A: Astar operates as a Polkadot parachain, which means its foundational security is provided by Polkadot's shared security model rather than by ASTR emissions to validators. Reducing the inflation ceiling does not weaken that security guarantee.

The only inflation-funded actors directly involved in block production are Astar's collators, who receive a fixed 3.2% share of each cycle's soft-capped inflation. A lower ceiling reduces the absolute ASTR allocated to collators proportionally, but collator rewards remain competitive within a parachain context. The number of active collators and their core role in the network remain unchanged.

The security of the chain continues to be anchored by Polkadot's bonded DOT and validator set, which operate independently of ASTR issuance levels.

### Q: What is the current circulating supply, and how far are we from the 10B ASTR cap?

A: As of March 2026, total ASTR issuance is approximately 8.6 billion tokens. The exact figure changes with every block and can be verified through Astar's block explorer or documentation portal.

The theoretical maximum supply is 10 billion ASTR, representing the asymptotic ceiling of all future cumulative emissions under the current decay function. The gap between current supply and the 10 billion ceiling narrows automatically over time as per-block emissions decline.

Significant burn events such as Burndrop reduce the effective maximum supply below the theoretical 10 billion ceiling. As a result, circulating supply and the theoretical cap will not converge exactly.

:::info Live supply data

Live supply data is available on the [Astar Network Explorer](https://astar.subscan.io). The 10B figure represents a mathematical ceiling. The effective maximum is lower due to ongoing burn activity.

:::

### Q: Can the decay rate (r) be adjusted in the future?

A: Yes. The decay rate is a governance-adjustable parameter, alongside the inflation ceiling and reward distribution ratios. Any change requires an onchain referendum following community discussion on the Astar Forum.

Changing the decay rate directly shifts the supply convergence path. A lower decay rate slows emission reduction, extends the time required to reach cap, and increases total future emissions. A higher decay rate accelerates decay and lowers the effective supply ceiling.
