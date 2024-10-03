---
sidebar_position: 3
title: Subsquare Guide
---

import Figure from "/src/components/figure"

## Intro

:::note
This is _work-in-progress_.
All information here should be correct, but the guide will be updated prior to the launch on Astar.
:::

The purpose of this guide is to demonstrate how to utilize **SubSquare** platform for governance actions on Astar & Shibuya.

## User Guide

:::note
All of the examples below were done on a `local` test network which can be easily started by downloading Astar binary from [the official releases](https://github.com/AstarNetwork/Astar/releases) (or building it manually), and starting it as `./astar-collator --dev --tmp`.

The settings & parameters of the `local` test network **DO NOT** reflect what will be used on Shibuya or on Astar.
:::

This does not describe how users are expected to use the governance since majority of this logic will be hidden behind a frontend.

### Token Holder

#### Preimage

To put it simply, _preimage_ of the call hash is the call itself - the proposal we want to execute.

The first step is to select `Governance -> Preimage` as shown in the image below.

<Figure caption="Governance Preimage - 1" src={require('/docs/learn/governance/img/01_Preimage/01_governance_preimage.png').default } width="100%" />

The second step is to click on the `Add preimage` button. Now the user can _define_ the call they wish to propose. For the sake of this example, it will be a registration of a smart contract into the dApp staking protocol.

<Figure caption="Governance Preimage - 2" src={require('/docs/learn/governance/img/01_Preimage/02_governance_preimage.png').default } width="100%" />

This is the definition of the call that we’d like to see become a referendum, and ideally executed afterwards. It’s important to note the values of the `preimage hash` (and `preimage length`) as it serves as the _identifier_ of the actual call.
