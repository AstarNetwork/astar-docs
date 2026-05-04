---
sidebar_position: 3
sidebar_label: Manage Your dApp
title: Manage Your dApp and Rewards
description: Step-by-step guide to complete your dApp registration, manage your project page, and claim dApp Staking rewards on Astar Portal.
---

import Figure from "/src/components/figure"

## I. Overview

Once your dApp is whitelisted for dApp Staking, you need to complete the registration by submitting your project details. After that, your developer dashboard lets you monitor reward periods, claim earnings, and keep your project page up to date.

This guide covers:

- Completing your project registration after whitelisting
- Filling in project information and submitting the listing
- Accessing and using your developer dashboard
- Claiming dApp Staking rewards
- Editing your project page and adding promotion cards

**Prerequisites:**

- Your dApp has been approved and whitelisted through governance (see [How to Apply](/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/register-dapp.md))
- An Astar Native (Substrate) wallet connected to the [Astar Portal](https://portal.astar.network/astar/assets)
- A small amount of ASTR for transaction fees

---

## II. Step-by-step Guide

### 2.1. Step 1: Complete your registration

After your contract is whitelisted, a **Congrats!!** banner appears on the **Your Assets** page:

> *"Your contract is whitelisted on dApp Staking. Please submit details and you will be listed."*

Click **Register now** to open the project information form.

<Figure caption="Congrats banner with Register now button" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-1.png').default} width="100%" />

:::info Not seeing the banner?

Make sure you are connected with the **owner wallet** (the Substrate address that was used during the governance approval). The banner only appears for the registered owner address.

:::

### 2.2. Step 2: Fill in your project information

The **Project info** form lets you define how your project appears to stakers across the Portal.

Fill in the following fields:

1. **Name** — your project's display name
2. **Project URL** — a link to your website or product
3. **Contract address** — pre-filled with your registered smart contract address; do not change this unless instructed
4. **Description** — a full description of your project (supports Markdown; use the **Preview** tab to review)
5. **Project logo** — upload a logo image

<Figure caption="Project info form, first section" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-2.png').default} width="100%" />

Scroll down to complete the remaining fields:

6. **Images** — upload a banner image (recommended 16:9 ratio, under 1 MB)
7. **Builders information** — add your team members
8. **Communities** — add links to your community channels (Discord, Telegram, X, etc.)
9. **Is your project on** — select **WASM+EVM**, **WASM**, or **EVM**
10. **Choose main category** — select one: DeFi, NFT, Tooling, Utility, or Others
11. **Tags** — select all relevant tags that describe your project

<Figure caption="Project info form, second section with platform, category, and tags" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-3.png').default} width="100%" />

When all fields are complete, click **Save** in the top right corner.

### 2.3. Step 3: Submit your listing

A **"One more thing!"** modal will appear asking you to write a short description of up to **65 characters**. This short text is what stakers see on your dApp card in the rankings table.

A live preview shows exactly how your card will appear before you confirm.

<Figure caption="Short description modal with live card preview" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-4.png').default} width="100%" />

Click **Submit** and sign the transaction with your wallet. Your project listing will be submitted onchain.

### 2.4. Step 4: Verify your project is listed

Navigate to **Stake** in the left sidebar. Your project should now appear in the **dApp Rankings** table. Confirm the name, category, and staker count are correct.

<Figure caption="dApp rankings table with project listed" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-5.png').default} width="100%" />

:::tip Public page

Click your project name in the rankings to open the public page that stakers see. Use this to verify all details look correct before promoting your listing.

:::

### 2.5. Step 5: Access your developer dashboard

Go to **Assets** in the left sidebar. You will now see a **My Project** button next to **My Staking** in the top section of the page. Click it.

<Figure caption="Assets page showing the My Project button" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-6.png').default} width="100%" />

### 2.6. Step 6: Review your reward periods

The **My Project** panel shows:

- Your project name and **Registered** status badge
- Your owner address and a **View public page** link
- **Your Rewards** table, listing each claimable period with the number of days and the ASTR amount available

<Figure caption="My Project dashboard showing reward periods" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-7.png').default} width="100%" />

### 2.7. Step 7: Claim your rewards

Scroll down in the rewards table to see all pending periods and the **Total** claimable amount.

<Figure caption="Rewards table with all periods and Claim your rewards button" src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/developer-dashboard-8.png').default} width="100%" />

Click **Claim your rewards** and sign the transaction. All pending rewards across all listed periods are released in a single transaction.

:::info Reward accrual

dApp rewards are only earned while your project is in an active tier. A project must hold the required staking threshold (0.93% of total issuance for Tier 2, 0.35% for Tier 3) during the Build&Earn period to generate claimable dApp rewards.

:::

---

## III. Manage Your Project Page

Two management options are available from the **My Project** panel on the right side of the dashboard.

### 3.1. Edit project page

Click **Edit Project Page** to update your project's name, description, logo, images, category, builders, or community links at any time. Changes take effect on the public page as soon as they are saved.

### 3.2. Add a promotion card

Click **Add a promotion card** to create a featured card that appears in the dApp Staking section of the Portal. Use this when running a campaign, launch event, or staking incentive that you want to highlight to the community.

---

Have questions? Join the [**official Astar Discord**](https://discord.com/invite/AstarNetwork).
