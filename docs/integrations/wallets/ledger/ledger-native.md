---
sidebar_position: 10
title: Ledger for Astar Native Accounts
---
import ledger1 from "./img/native/ledger1.png"
import ledger2 from "./img/native/ledger2.png"
import ledger3 from "./img/native/ledger3.png"
import ledger4 from "./img/native/ledger4.png"
import ledger5 from "./img/native/ledger5.png"
import ledger6 from "./img/native/ledger6.png"

# Using Ledger with Astar Native Accounts

This tutorial walks through the process of setting up a Ledger device to participate in dApp staking using ASTR native tokens, initiating the first interaction between the device and the network, and also explains some limitations of using Ledger devices with the native dApp staking system.

:::danger
At the time of this release, the following operations are **NOT SUPPORTED:** 
- **EVM withdraw** : It is not possible to claim tokens from the Astar EVM side. 
- **XCM transfers**
- **Vesting**
:::

### Before staking, confirm that:
1. Ledger Live is up to date, and the Astar app is installed.
2. The Ledger device firmware is up to date.
3. A Ledger account has been imported to Polkadot.js.
4. A Chromium-based browser is available for all web-based operations, such as Google Chrome or Brave (Ledger devices need WebUSB support).

### Update Ledger Live and Device Firmware

Ensure Ledger Live is up to date. 

<div style={{textAlign: 'center'}}>
  <img src={ledger1} style={{width: 1200}} />
  </div>

- If prompted to update the device Firmware, please do so, as it will update the Astar app as well.

<div style={{textAlign: 'center'}}>
  <img src={ledger2} style={{width: 1200}} />
  </div>

- Once Ledger Live is up to date, ensure the latest Astar app (version 2.52.2 or higher) is installed.

:::tip

Ledger NanoS users should install the Astar XL version of the app, shown in the image below:

::: 

<div style={{textAlign: 'center'}}>
  <img src={ledger3} style={{width: 1200}} />
  </div>

### Import Ledger account to Polkadot.js

- Open the Polkadot.js extension.
- Click the + sign menu option.
- Choose ‘Attach ledger account.’ Make sure your ledger is unlocked.

<div style={{textAlign: 'center'}}>
  <img src={ledger4} style={{width: 600}} />
  </div>

- Follow through the process of Importing a Ledger Account by specifying a descriptive name. The default name and settings are shown in the image below:

<div style={{textAlign: 'center'}}>
  <img src={ledger5} style={{width: 600}} />
  </div>

### Visit the Portal

- Open a browser and visit the [Astar Portal](https://portal.astar.network).
- Connect the Polkadot.js extension to the Portal.
- Select the Ledger account that was imported during the last step.
- Try again if the Polkadot.js extension displays a refresh button, which indicates the device is still initializing.

<div style={{textAlign: 'center'}}>
  <img src={ledger6} style={{width: 600}} />
  </div>

For detailed information about dApp staking or how to stake on the EVM side of Astar Portal using a Ledger device, please refer to the [Astar documentation](/docs/dapp-staking/for-stakers/staking) or [Ledger EVM staking guide](./ledger-evm.md)

## Limitations of using a Ledger NanoS or S-plus/X device

:::danger
At the time of this release, the following operations are **NOT SUPPORTED:** 
- **EVM withdraw** : It is not possible to claim tokens from the Astar EVM side. 
- **XCM transfers**
- **Vesting**
:::

Assume you are staking on 2 dApps, and accumulate 2 eras worth of rewards each day. What happens if you do not claim the rewards for an entire month?

- Using a Nano-S - The Nano-S device supports claiming a maximum of **2 eras** at a time, so for as long as there appear to be more eras to claim in the dApp staking dashboard, you can continue to claim. After not claiming for a month (30 eras), you will need to claim 30 times.
- Using a Ledger Nano X - Based on a maximum of **6 eras per claim,** 10 claims will be required.

As you can imagine, staking on multiple dApps using a Ledger device may substantially increase the amount of time and/or administrative overhead required to participate in dApp staking in order to maximize benefits, however, although multiple claims may be required to retrieve all rewards from the Portal using a Ledger device, the fees remain the same per era claimed whether they occur in batches, or as individual transactions.