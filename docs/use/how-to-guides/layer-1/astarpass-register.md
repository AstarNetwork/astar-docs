---
sidebar_position: 5
sidebar_label: AstarPass (retired)
title: AstarPass and ShidenPass (retired)
---

:::info
The AstarPass and ShidenPass websites have been retired. Astar Foundation stopped supporting them at the end of Q1 2024 (see the [forum announcement](https://forum.astar.network/t/important-update-sunsetting-astar-pass-and-introduction-of-account-unification/5860)), and the sites are no longer online. New registrations through the website are not possible.
:::

AstarPass was the mapping between an Astar Native (SS58) address and an Astar EVM (H160) address, stored in the [AstarBase](/docs/build/EVM/astarbase) smart contract. ShidenPass was the same thing on Shiden.

## What still works

- The AstarBase contracts remain on-chain. Existing registrations are still readable, and dApps can still query them (`isRegistered()`, `checkStakerStatus()`, `addressMap()`). See the [AstarBase developer page](/docs/build/EVM/astarbase).
- Registering and unregistering remain possible at the contract level, but there is no official user interface for it any more.

## Unregister an existing AstarPass

If you want to remove your registration, call `unRegister()` on the AstarBase contract from the EVM wallet you registered with. The call is payable: send the unregister fee with it.

| Network | Contract | Fee |
|---|---|---|
| Astar | [`0x8E2fa5A4D4e4f0581B69aF2f8F2Ef2CF205aE8F0`](https://astar.blockscout.com/address/0x8E2fa5A4D4e4f0581B69aF2f8F2Ef2CF205aE8F0?tab=write_proxy) (Blockscout, "Write proxy" tab) | 500 ASTR plus gas |
| Shiden | [`0x25257be737210F72DA4F51aCB66903A7520e59d6`](https://shiden.subscan.io/account/0x25257be737210F72DA4F51aCB66903A7520e59d6) | 1 SDN plus gas |

1. Connect the EVM wallet you wish to unregister.
2. Open `unRegister` and set the value sent with the call to the fee (500 ASTR on Astar, 1 SDN on Shiden).
3. Sign the transaction. The fee is deducted from your wallet and the mapping is removed.

Contract addresses for all networks are listed in the [AstarBase repository](https://github.com/AstarNetwork/astarbase/blob/main/contract/deployment-info.md).
