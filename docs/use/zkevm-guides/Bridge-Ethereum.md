---
sidebar_position: 2
title: Bridge From Ethereum to Astar zkEVM
---

import Figure from "/src/components/figure"

# Bridge Assets to Astar zkEVM from Ethereum and other EVM-based chains

This page explains how to transfer `ETH` and other `ERC20` assets between **Astar zkEVM** and **Ethereum Mainnet** and other EVM-based chains. There are three options for bridging assets to the zkEVM:

## Transfer using the Astar Portal:

1. Visit the [Astar Portal](https://portal.astar.network/astar-zkevm/bridge/ethereum) and connect your wallet on Astar zkEVM Network;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_1.png').default} width="50%" />

2. Use the network modal window and switch to the Astar zkEVM network, or let MetaMask switch to Astar zkEVM for you;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_2.png').default} width="40%" />

3. Click on the Bridge tab on the left and select `Native Bridge` (*ERC20*);

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_3.png').default} width="120%" />

4. Ensure Ethereum is selected as the Bridge source, and that Astar zkEVM is selected as the destination;  
After entering the amount of ETH to be transferred, press the `Bridge` button;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_4.png').default} width="120%" />

5. Sign the transaction in your wallet;
6. You should now see the bridged assets in MetaMask for use on Astar zkEVM.

:::info
The transfer can take between 10 and 30 minutes, depending on Ethereum network usage.

Once the transaction has been confirmed in your wallet extension, it will take approximately **5-10 minutes** for the Astar portal and MetaMask to update your balance on the Astar zkEVM network.
:::

## Transfer using Layerswap:

The second option is to use **[Layerswap](https://www.layerswap.io/app?to=ASTARZK_MAINNET)**, a reliable solution for transferring crypto assets across Centralized Exchanges, blockchains and banks in a matter of minutes. [More information](https://docs.layerswap.io/user-docs).

*Please be advised that Astar Foundation assumes no responsibility or liability for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your utilization of any third-party application presented in our documentation.*

:::info
For the moment, Layerswap supports only **ETH token** for cross-chain transfers!
:::

1. Visit [Layerswap](https://www.layerswap.io/app?to=ASTARZK_MAINNET) and connect your EVM wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_5.png').default} width="50%" />

2. Select the **origin network** or **Centralized Exchanges** from which you want to transfer your assets, and select `Astar zkEVM` for the **destination network**;
3. Enter the amount of ETH you want to transfer. You can also choose the address to which you want to send your assets;
4. Confirm the transaction by clicking on `Swap now` ;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_6.png').default} width="65%" />

5. Sign the transaction in your wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_7.png').default} width="65%" />

6. Once the transaction has been confirmed on the network, you should now see the bridged assets in your EVM wallet, ready for use on Astar zkEVM.

## Transfer using Relay Link:

The third option is to use **[Relay Link](https://www.relay.link/bridge/astar-zkevm/)**, a cross-chain payments system that enables instant, low-cost bridging and cross-chain execution. [More information](https://docs.relay.link/what-is-relay).

*Please be advised that Astar Foundation assumes no responsibility or liability for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your utilization of any third-party application presented in our documentation.*

:::info
For the moment, Relay Link supports only **ETH token** for cross-chain transfers!

You can transfer assets to Astar zkEVM from the following chains:
- Ethereum
- Arbitrum
- Optimism
- zkSync Era
- Base
- Blast
:::

1. Visit [Relay Link](https://www.relay.link/bridge/astar-zkevm/) and connect your EVM wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_8.png').default} width="70%" />

2. Select the **origin chain** from which you want to transfer your assets, and select `Astar zkEVM` for the **destination chain** ;
3. Enter the amount of ETH you want to transfer and confirm the transaction by clicking `Bridge`;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_9.png').default} width="70%" />

4. Sign the transaction in your wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_10.png').default} width="70%" />

5. Once the transaction has been confirmed on the network, you should now see the bridged assets in your EVM wallet, ready for use on Astar zkEVM.

<Figure src={require('/docs/use/zkevm-guides/img/Bridge_ETH_11.png').default} width="70%" />
