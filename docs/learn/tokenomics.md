---
sidebar_position: 10
title: Tokenomics
---

import tokenomics from '/docs/learn/img/tokenomics_1.png'
import inflation from '/docs/learn/img/inflation_1.png'

[Astar Network]: https://astar.network/

:::note
This section includes content for advanced users.
:::

:::tip
Astar and Shiden share the same economic model, though there were differences in their initial supply configurations.
The following chapters focus on Astar and ASTR, however, this information also applies to Shiden and SDN token.
:::

## Overview

In previous chapters we defined the initial ASTR token distribution. However, Astar uses an inflationary tokenomics model (unbound supply) where tokens are issued each time a new block is produced. These tokens power the dApp staking system and are used to reward stakers and collators.

[Astar Network] tokenomics model is built around supporting developers via dApp staking. At its core, ASTR token has a number of utilities:

1. Payment for transaction fees
2. Staking dApps
3. dApp staking rewards & collator rewards

### Inflation Model

For each block produced, Astar issues a fixed number of tokens. Initially, these numbers were chosen to generate approximately 10% inflation, based on the initial supply.

Since January 2023, ASTR inflation has been reduced by 5% to ~665,000,000 ASTR yearly.

| Network | Issued Per Block | Issued Per Era* |
| ------- | ---------------- | --------------  |
|  Astar  |    253.08 ASTR   | 1,822,176 ASTR  |
| Shiden  |      2.664 SDN   |  19,180.8 SDN   |

\* 1 era =~ 1 day, assuming a new block is produced every **12** seconds.

The reader might notice that Astar issues 95 times more tokens per block than Shiden. This is due to Astar having a 100 times greater initial supply than Shiden.

### Beneficiaries

Each block reward is distributed to a set of beneficiaries.
​
#### > Collators

The collator responsible for building the block will receive **collator's** portion of reward. This is the main financial incentive for the collators. Portion is configured as percentage of the block reward on-chain and is constant per block unless manually changed.

In addition, it will receive fees paid by the users for transactions that were included in the produced block.

For **Shiden**, **100%** of the fees are burned, and the full tip is paid to the collator.
For **Astar**, **20%** of the fees & tips are burned, and the rest is paid to the collator.

#### > On-chain Treasury

Treasury receives a variable portion of block reward. It is then allocated to a range of initiatives across the Astar ecosystem. This includes building reserves for parachain auctions, as well as supporting various projects and activities that help grow and strengthen our network. 

#### > dApp Staking

`dApp staking`, Astar's innovative developer incentive mechanism, receives a variable portion of the block rewards depending on current **total value locked** (or **TVL** in further text) in dApps staking.

Part of it is dedicated for supporting dApp developers while another part goes towards stakers who locked their ASTR to *stake* or *vote* for a dApp.

<div style={{textAlign: 'center'}}>
    <img src={inflation} style={{width: 600}} />
</div>

### Model Overview

Previous chapters described that inflation per block is fixed - however, the way we distributed this reward for some beneficiaries is dynamic and depends on certain parameters. It's important to emphasize that all of the related parameters of the model are read on-chain - **nothing** is provided off-chain. This makes it secure and easily verifiable.

There are two main things to understand before diving deeper into the model - **TVL** and **configurable block reward parameters**.

#### TVL

The main variable in the system that fluctuates from block to block, based on user actions, is **TVL** from dApp staking. 
:::note
TVL in this context does not consider non-ASTR tokens locked by other protocols built on top of Astar (e.g. DeFi protocols) and as such has no effect on the reward distribution schema.
:::

We're interested particularly in **TVL percentage**
- $total\_issuance$ - total amount of issued **ASTR** tokens
- $TVL$ - total amount of tokens locked in dApps-staking
- $TVL_{\%} = {TVL \over total}$

In case **total_issuance** equals 1000 and **TVL** is 242, **TVL percentage** will be `24.2%`.

#### Configurable Parameters

The following parameters influence how each block reward is distributed.

| Name                    |          Description                        | Example Value |
| ----------------------- | ----------- ------------------------------- | ------------- |
| Collators Percent       | Fixed percentage that goes to collators | 10% |
| Base Treasury Percent   | Minimum percentage that always goes to treasury | 10 % |
| Base Staker Percent     | Minimum percentage that always goes to dApps-staking staker rewards pool | 20 % |
| dApps Percent           | Fixed percentage that goes to dApps-staking dApp reward pool | 15 % |
| Adjustable Percent      | Percentage that is split between treasury and stakers, depending on the TVL | 45 % |
| Ideal dApps-staking TVL | TVL percentage which is considered to be ideal | 60% |

The amount received by stakers and the treasury is dynamic and depends on TVL. However, there is a lower bound on how much goes towards them. These are the *base* parameters. Collators and dApps always receive a fixed percentage of the reward.

##### Adjustable Percent

Depending on the TVL, the **adjustable percent** of the block reward is split between stakers and the treasury.
$$
\begin{aligned}
a&djustable_{staker} = min(1, {TVL_{\%} \over TVL_{ideal}}) * adjustable_{\%}
\newline\newline
t&otal_{staker} = base_{staker} + adjustable_{staker}
\newline\newline
t&otal_{treasury} = base_{treasury} + (adjustable_{\%} - adjustable_{staker})
\end{aligned}
$$

As more tokens are staked and TVL increases, the portion of staker rewards increases in proportion to the growth of the network. This approach helps to compensate for the *zero-sum* nature of staking and incentivize more users to participate in securing the network. It's important to note that this reward increase is linear up to a certain threshold, known as the $TVL_{ideal}$ point. Once this threshold is reached, the reward increase will saturate, meaning that any further increase in TVL will not result in an increase in staker rewards. This ensures a fair and sustainable reward system that benefits all members of the Astar community.

Note that in Polkadot's model, when ideal TVL is reached, staker rewards drop exponentially. In our case, they only become saturated, making it a *zero-sum-game*. Motivation behind our approach is simplicity.

##### Interest Rate

Using the parameters from the previous chapters, we can express yearly interest rate for the stakers:
$$
i = {inflation_{anual} * total_{staker} \over TVL_{\%}}
$$

For example, in case $total_{staker} = 55\%$ and $TVL_{\%} = 40\%$, we end up with ${0.1 * 0.55 \over 0.4}$ which is `13.75%` anual interest rate.

However, inflation dilutes the interest rate so it's more precise to consider *inflation adjusted anual interest rate*.

$$
i_{adjusted} = {i + 1 \over inflation_{anual} + 1} - 1
$$

To follow up on the example above, *inflation adjusted* value would be ${0.1375 + 1 \over 0.1 + 1} - 1$ which is `3.4%`.

### Model Visualization

The following graph is a visualization of the described model.

* green line is interest rate $i$
* blue line is total staker inflation $total_{staker}$
* red line is inflation adjusted interest rate $i_{adjusted}$

<div style={{textAlign: 'center'}}>
    <figure>
    <img src={tokenomics} style={{width: 600}} />
    <figcaption>Model Visualization</figcaption>
    </figure>
</div>

You can check this model and configure parameters yourself [here](https://www.desmos.com/calculator/cjjkt6smk5).
