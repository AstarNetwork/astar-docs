---
sidebar_position: 3
---
import wanchain1 from "./img/wanchain1.png"
import wanchain2 from "./img/wanchain2.png"
import wanchain3 from "./img/wanchain3.png"
import wanchain4 from "./img/wanchain4.png"
import wanchain5 from "./img/wanchain5.png"


# Wanchain Bridge 

## Overview

A guide on how to transfer native Tether USDT between Astar, Arbitrum, Avalanche C-Chain, BNB Chain, Ethereum, OKC, Polygon, Wanchain and Tron using USDT XFlows.

## About USDT XFlows

USDT XFlows is a decentralized cross-chain solution that enables native-to-native cross-chain transfers between blockchains where USDT is natively minted by Tether. XFlows leverages the power of Wanchain’s cross-chain bridges to provide easy, non-custodial transfers between chains without the need for centralized exchanges or wrapped assets. Find more information on Wanchain [product page](https://bridge.wanchain.org/).

## Contracts

Native USDT contract addresses:

```
USDT @ Arbitum: 

0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9

xcUSDT @ Astar:

0xfFFfffFF000000000000000000000001000007C0

USDT @ Avalanche C-Chain: 

0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7

BUSD @ BNB Chain: 

0x55d398326f99059fF775485246999027B3197955

USDT @ Ethereum: 

0xdAC17F958D2ee523a2206206994597C13D831ec7

USDT @ OKX Chain: 

0x382bb369d343125bfb2117af9c149795c6c65c50

USDT @ Polygon: 

0xc2132D05D31c914a87C6611C10748AEb04B58e8F

USDT @ Tron:

TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t

USDT @ Wanchain:

0x11e77E27Af5539872efEd10abaA0b408cfd9fBBD
```


## Native Tether USDT vs. xcUSDT on Astar

Tether issues USDT, the blockchain industry’s biggest stablecoin by means of total market capitalization, on Polkadot’s “common good” generic asset parachain, Statemint. By leveraging XCM, Polkadot’s cross-consensus communication protocol, native Tether USDT can be transferred to parachains like Astar as “xcUSDT”. xcUSDT is more versatile than wrapped USDT and can be used for both Wasm and EVM projects in the Astar ecosystem.

## How to bridge native Tether USDT from Ethereum to Astar EVM

This section shows how to bridge native Tether USDT from Ethereum to Astar.

> **Note**: Cross-chain transactions from other EVM networks such as Arbitrum, Avalanche C-Chain, BNB Chain, Ethereum, OKC, Polygon and others follow the same process.

### Step 1
 Visit the [Wanchain Bridge web portal](https://bridge.wanchain.org/). Initiate a cross-chain transaction to move your $USDT from Ethereum to Astar.


Select “USDT” from the drop-down menu. Choose “Ethereum” and “Astar” as your `From` and `To` networks respectively. Finally, input your destination address in the `Recipient` field as well as the amount of $USDT you want to send. Click `Next`.

<img src={wanchain1} style={{width: 1200}} />

Confirm that the “Recipient” address does not belong to a centralised exchange then click “Confirm”.

<img src={wanchain2} style={{width: 1200}} />

Confirm that all the details are correct then click “Confirm”.

<img src={wanchain3} style={{width: 1200}} />

### Step 2
Wait for your cross-chain transaction to complete. It is now processing.

While your cross-chain transaction is processing, the status will change three times:

    Processing (1/2)
    Processing (2/2)
    Success

### Step 3
 Confirm the receipt of your funds. Your cross-chain transaction is complete!

Once your cross-chain transaction is complete, you’ll see your $xcUSDT balance on Astar. The cross-chain transaction status will display as `Success`.

<img src={wanchain5} style={{width: 1200}} />

Support

If you have any questions, feel free to join any of our communities and our Ambassadors will assist you. And remember that the Astar team or Ambassadors will never message or DM you first!