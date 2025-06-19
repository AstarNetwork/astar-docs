---
sidebar_position: 1
sidebar_label: Move Staking
title: How to Move Your Staked ASTR to Another dApp
description: What is the Move function in Astar dApp Staking?
---

import Figure from '/src/components/figure'

## 1. What is Move function?

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/move-staked-tokens/images/move-banner.png').default} width="100%" />

The **Move** function in Astar dApp Staking lets **you transfer your already staked ASTR tokens from one dApp to another, without losing your bonus**, as long as you stay within your allowed move limits.

- You start each staking **cycle** (about 122 days) with a set number of **safe moves** you can perform during the **Build & Earn** subperiod:
    - **Current cycle**: up to 2 safe moves
    - **Next cycles**: up to 2 safe moves
- During the **Voting** subperiod, you can move your stake **freely and unlimitedly**, with **no effect on your bonus**.
- If you move to a **registered dApp** during Build & Earn and use up all your safe moves, any extra moves will **forfeit your bonus** on that stake.

:::info Staking rewards during Move

When you perform a `move`, it involves an **unstake** followed by a **stake** call. That means your tokens are considered **unstaked** during that era. As a result, **you won’t earn staking rewards for that specific era**.

:::
:::info Moving from unregistered dApps

When moving stake from **unregistered contracts**, the **bonus status is always preserved**, and it **does not count** toward your Safe Moves Remaining.

:::

## 2. Why Move matters for you

**Move** empowers you to switch your staking support from one dApp to another without penalty, whether you're reallocating support, pursuing top-performing projects, or executing real-time arbitrage, just be mindful of your safe-move limit to protect your bonus rewards, as all staking rules still apply.

In simple terms, the advantages of `move` are:

- **You’re not locked in:** If Project A is underperforming and Project B looks promising, **you can redirect your tokens** seamlessly.
- **Your bonus stays safe:** As long as you stay within your *safe-move* allowance.
- **Freedom to react:** Dynamics in the dApp ecosystem change fast. Move gives you flexibility without downside.

### 2.1. When is Move yours to use?

| Timeframe | Moves allowed | Bonus effect |
| --- | --- | --- |
| **Voting period** | Unlimited free moves | No effect on bonus |
| **Build & Earn** | Up to 2 safe moves in each period. | First 2 moves: safe, Third: you lose the bonus. |

### 2.2. Before Move: What to know

- Each stake tracks **Safe Moves Remaining,** start with 2 safe moves each cycle.
- **Moving to a registered dApp** during Build & Earn uses up 1 safe move.
- If safe moves hit zero and you move again → ⚠️ **bonus is lost**.

:::info Reward gap

Since `move` triggers an **unstake → stake** sequence, your tokens are not **staked** for that era. **This means you won’t receive staking rewards during the era in which the Move was made**.

:::

### 2.3 Conclusion

The **Move operation** gives you flexibility to adjust your strategy during the Build & Earn period **without losing bonus rewards**. It helps you maximize rewards and diversify your staking across multiple dApps.

## 3. Step-by-step: How to use Move

### ✅ Step 1: Open My Staking dashboard

Navigate to **Assets → My dApps** in the Astar Portal.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/move-staked-tokens/images/move-1.png').default} width="100%" />

### ✅ Step 2: Click the **Move (→)** icon

Next to the stake you want to shift.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/move-staked-tokens/images/move-2.png').default} width="100%" />

### ✅ Step 3: Select target dApp(s) and amount

1. You will see your **available balance** and a list of dApps.
2. Click on a card and select the dApp you want to stake.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/move-staked-tokens/images/move-3.png').default} width="100%" />

3. **enter the amount** you want to shift.
4. Click on next button. 
5. Confirm and sign the transaction.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/move-staked-tokens/images/move-4.png').default} width="100%" />

### ✅ Step 4: Next → Confirm transaction

After **Confirm** and **sign** the transaction, the `move` happens onchain.

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/move-staked-tokens/images/move-5.png').default} width="100%" />

### ✅ Step 5: Check success & ledger

After confirmation:

- Original stake is unstaked
- New stake shows up under target dApp
- Bonus eligibility updated accordingly

<Figure caption="" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/move-staked-tokens/images/move-6.png').default} width="100%" />

## 4. Real-use examples for clarity

1. **One safe move left**: You move 100 ASTR from App A to B during Build & Earn
    
    * App B shows your 100 ASTR and **SafeMovesRemaining = 0**
    * Bonus remains intact.
    
2. **Second move = bonus lost**: You move again to App C
    
    * App C shows your 100 ASTR but **bonus forfeited**.
    
3. **Voting period, unlimited moves**: Move anytime freely; safe-move count doesn't change.
4. **Reward gap after move**: You Move 500 ASTR from App A to App B during Build & Earn
    
    * App B shows 500 ASTR and updated safe move count
    *  ⚠️ You won’t earn staking rewards for that era due to the **unstake/stake** process. 
    
5. **Unstake reduces bonus + safe moves**: You stake 100 ASTR during Voting, then unstake 50 ASTR during Build & Earn
    
    * You still have bonus eligibility for the remaining 50 ASTR
    * You have 1 safe move left to reallocate that 50 to another dApp
    
6. **A combining bonus moves across stakes**:

    * You staked on dApps A and B during Voting
    * You unstake part of your tokens from A during Build & Earn, leaving 1 safe move
    * You move the remaining stake from A to B
    * The new number of safe moves at B becomes: ((A's remaining moves - 1) + B's remaining moves) / 2

### 4.1 Pro tips

1. **Always stake during Voting** to secure bonus eligibility early. You can move it later if new dApps join.
2. **Use "Move" instead of "Unstake"** when shifting tokens between dApps, this helps preserve your bonus status. Particularly for unregistered dApps!
3. **Spread your stake across multiple dApps** during Voting. This gives you flexibility to move between them and keep your bonuses.

## 5. Video tutorial

To wrap up, here’s a video tutorial that will guide you through the step-by-step process of use move on **Astar dApp Staking**. Feel free to ask your questions in our [**official Astar Discord**](https://discord.com/invite/AstarNetwork).

<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/SRWk_0DVm3k"
  title="How to use move in Astar dApp Staking" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
/>