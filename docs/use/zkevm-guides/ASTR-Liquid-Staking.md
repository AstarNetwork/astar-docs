---
sidebar_position: 4
title: ASTR Liquid dApp Staking
---

import Figure from "/src/components/figure"

# ASTR Liquid dApp Staking with Bifrost Finance

This page explains how to participate in Astar dApp Staking via Bifrost Liquid Staking solution on **Astar zkEVM**.  
[More information about dApp Staking](/docs/use/dapp-staking/index/).

If you have `ASTR` on Astar L1 (Subtrate or EVM), consult [this guide](/docs/use/zkevm-guides/Bridge-Astar-EVM/) to transfer them from Astar to Astar zkEVM.

## Bifrost Finance

*Please be advised that Astar Foundation assumes no responsibility or liability for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your utilization of any third-party application presented in our documentation.*

[Bifrost](https://bifrost.app/) is a modular, scalable, non-custodial omnichain liquid staking parachain based on Polkadot. It provides standardized, high-yield, safe, and reliable underlying interest-bearing assets for Web3 through XCM, and is realizing the omnichain vision of using any LST on the any chain. [More information](https://docs.bifrost.finance/).

Bifrost is accessible on Astar zkEVM via its [SLPx Omichain protocol](https://omni.ls/) (OmiLS), a cross-chain mechanism enabling LSD tokens to be minted on Bifrost parachain from EVM chains such as Astar EVM or Astar zkEVM.

The Liquid Staking version of the ASTR token is called **vASTR** (voucher ASTR) is a shadow token of staked ASTR, with fully underlying ASTR reserve and yield-bearing feature of ASTR dApp staking reward. Users can deposit ASTR into Bifrost OmniLS protocol on Astar zkEVM and get vASTR as return, vASTR can be traded in the open market or be redeemed back to ASTR. Holding vASTR equals to holding the ASTR staking position, staking rewards appreciate the exchange price of vASTR.

:::info
Bifrost charges a 10% commission on staking rewards.
:::

## How to stake ASTR & receive vASTR:

1. Visit [Bifrost OmniLS](https://omni.ls/), select `vASTR`  and connect your EVM wallet on **Astar zkEVM** network;

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_1.png').default} width="70%" />

2. Enter the amount of `ASTR` you want to stake in Liquid Staking. In return, you will receive `vASTR` tokens according to the ASTR/vASTR ratio;  
*Remember to take into consideration the cross-chain transaction fee (deducted from the stake amount);*

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_2.png').default} width="80%" />

3. Authorize Bifrost to access your funds by clicking on `Approve` and signing the transaction in your wallet;

4. Click on `Stake Now` to initiate the transaction and sign it in your wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_3.png').default} width="80%" />

5. As the transaction takes place on several networks (*Astar zkEVM, Astar EVM & Bifrost*), it can take **up to 10 minutes** before the transaction is finalized and the vASTR appears in your wallet.
6. Once you have received the vASTR tokens, they are ready for use on Astar zkEVM.

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_4.png').default} width="80%" />

:::info
To add tokens to your EVM wallet manually, use the following contract addresses:
- **vASTR:** `0x7746ef546d562b443AE4B4145541a3b1a3D75717`
:::

## How to unstake vASTR & receive ASTR:

1. Visit [Bifrost OmniLS](https://omni.ls/), select `vASTR`  and connect your EVM wallet on **Astar zkEVM** network;

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_1.png').default} width="70%" />

2. Switch to the **Unstake Panel** and enter the amount of `vASTR` you want to redeem. In return, you will receive `ASTR` tokens according to the ASTR/vASTR ratio including your staking rewards;  
*Remember to take into consideration the cross-chain transaction fee (deducted from the stake amount);*

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_5.png').default} width="90%" />

3. Authorize Bifrost to access your funds by clicking on `Approve` and signing the transaction in your wallet;

4. Click on `Unstake Now` to initiate the transaction and sign it in your wallet;  

:::warning
Note that there is a unstaking period of **0 to 10 days**;
:::

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_6.png').default} width="90%" />

5. As the transaction takes place on several networks (*Astar zkEVM, Astar EVM & Bifrost*), it can take **up to 10 minutes** before the transaction is finalized and the unstaking process begins;

6. You can check the statut of your unstaking position in the Unstaking panel;
7. When the unstaking period arrives to an end, click on the `Claim` button and sign the transaction to redeem your ASTR tokens and your rewards.