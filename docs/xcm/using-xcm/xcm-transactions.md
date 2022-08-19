---
sidebar_position: 1
---

# XCM Transactions

The following chapters will describe how to transfer native and foreign assets using Astar portal.

## XCM Transfer from Polkadot to Astar

When you go to the [Assets](https://portal.astar.network/#/assets) page, you can see the XCM Assets panel.

![Astar Asset Portal](img/1.png)

> It is necessary to verify that the balance of the native asset (ASTR) is not zero for the beneficiary account. Because assets from the Assets pallet cannot be transferred to an account with 0 nonce (or 0 balance)!

:::caution

It is necessary to verify that the balance of the native asset (ASTR) is not zero for the beneficiary account. Because assets from the Assets pallet cannot be transferred to an account with 0 nonce (or 0 balance)! This applies to all assets except for DOT/KSM assets which on respective networks (Astar for DOT, Shiden for KSM) - Technical term is that DOT/KSM are _sufficient assets_, see User Guide for more details.

:::

When you press the XCM button, the XCM popup appears as follows.

![2](img/2.png)

Here we would like to send DOT from Polkadot to Astar Network. There are two tabs, one to send to the Native account and the other to the EVM account. You can check the balance that can be sent from the relay chain (DOT).

Enter the amount to send and press the confirm button. A popup will appear to sign the transaction.

> Please note that the gas amount will be deducted from the amount entered. The transferred amount should be adjusted with the gas fee estimate.

![3](img/3.png)

Wait until the transaction is confirmed. After confirmation, you check the XCM assets again, and you can see that the DOT has been sent well to the XCM wallet.

![4](img/4.png)

When you click the transfer button, a popup will appear where you can transfer the asset to another wallet.

## XCM Transfer from Polkadot to Astar EVM

When you go to the [Assets](https://portal.astar.network/#/assets) page, you can see the XCM Assets panel.

![1](img/1.png)

> It is necessary to verify that the balance of the native asset (ASTR) is not zero for the beneficiary account. Because assets from the Assets pallet cannot be transferred to an account with 0 nonce (or 0 balance)!

When you press the XCM button, the XCM popup appears as follows. For this tutorial, we will use Deposit to EVM.

![2](img/2.png)

Enter the EVM Address you want to receive, enter the amount you want to send, and press the confirm button. A popup will appear to sign the transaction.

![5](img/5.png)

Wait until the transaction is confirmed. After confirmation, you will be able to add the DOT tokens to your EVM wallet. Read more about how to add XC20 to your MetaMask in the next section.
