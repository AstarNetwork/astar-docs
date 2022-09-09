---
sidebar_position: 1
---

# Celer cBridge

A guide on how to transfer assets from Ethereum & Binance smart chain to the Astar ecosystem.

## Product Page

<https://cbridge.celer.network/#/transfer>

## Overview

A guide on how to transfer assets from Ethereum & Binance to the Astar ecosystem.

<https://www.coingecko.com/en/coins/astar>

## Contracts

Token contract adresses on Astar:

```json
USDT: 0x3795C36e7D12A8c252A20C5a7B455f7c57b60283
USDC: 0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98
DAI: 0x6De33698e9e9b787e09d3Bd7771ef63557E148bb
WETH: 0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c
BNB: 0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52
BUSD: 0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E
WSDN: 0x75364D4F779d0Bd0facD9a218c67f87dD9Aff3b4
MATIC: 0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF
AAVE: 0xfcDe4A87b8b6FA58326BB462882f1778158B02F1
CRV: 0x7756a83563f0f56937A6FdF668E7D9F387c0D199
```

## How to transfer ASTR from Exchanges

First of all, visit [our portal](https://portal.astar.network/#/balance/wallet) with Polkadot.js. If you haven't installed Polkadot.js, please install [Polkadot.js extention](https://polkadot.js.org/extension/).

![1](img/1.png)

Then, please click your **Native address**. Once you click ?, you can see the below comment.

![2](img/2.png)

This is the address that you should use to withdraw ASTR tokens from exchanges.

## How to bridge

In this tutorial, I will show you how to bridge USDC from Ethereum to Astar. By doing so, you will add liquidity to our network. We can't thank you enough for helping us.

Please visit cBridge <https://cbridge.celer.network/#/transfer> and then input a currency you would like to transfer.

![3](img/3.png)

![4](img/4.png)

After the transaction, you can see

![5](img/5.png)

and check out your Metamask!

## The difference betweeen USDT vs. bridgedUSDT

When Tether USD on Astar comes through Statemint, it will act as the native USDT token in the Astar ecosystem.

ceUSDT on Astar is a "bridged asset of Ethereum USDT" that is bridged from the Celer Bridge (cBridge). Because of this, <strong>ceUSDT is not the same as native USDT.</strong> It is important to note that you can use native USDT registered as XC20 on any WASM projects in Astar ecosystem and supported EVM projects but you cannot use bridged (ce)USDT on WASM projects.

## Support

In case you have any problems. Join our community and our Ambassadors will support you. Please remember that we will never DM you first! If you get approached by someone pretending to be part of the team, do not trust them.
