---
sidebar_position: 3
title: Bridge From Astar EVM to Astar zkEVM
---

import Figure from "/src/components/figure"

# Bridge Assets to Astar zkEVM from Astar EVM

This page explains how to transfer `ASTR` between **Astar EVM** and **Astar zkEVM**.  
If you have `ASTR` on Astar native (Substrate) instead, consult [this guide](/docs/use/manage-assets/transfer-tokens#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account) to transfer them from Astar native to Astar EVM.

## Transfer using Stargate:

**[Stargate](https://stargate.finance/transfer)** is a community-driven organization building fully composable native asset bridges on LayerZero. [More information](https://stargateprotocol.gitbook.io/stargate/v/user-docs).

*Please be advised that Astar Foundation assumes no responsibility or liability for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your utilization of any third-party application presented in our documentation.*

Visit [Stargate application](https://stargate.finance/transfer) and connect your EVM wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_1.png').default} width="75%" />

### From Astar EVM to Astar zkEVM:

1. Select the token that you want to transfer and select `Astar EVM` for the **source network**;
2. Select the token that you want to receive and select `Astar zkEVM` for the **destination network**;
3. Enter the amount of tokens you want to transfer and confirm the transaction by clicking `Transfer`;  
*The gas cost corresponds to the gas fees for the destination transaction and is paid up-front.*

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_2.png').default} width="85%" />

:::tip
You have the option of requesting gas tokens on Astar zkEVM (`ETH`). Stargate will swap a portion of your assets in ETH and transfer them to your wallet on Astar zkEVM.

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_3.png').default} width="85%" />
:::

4. Sign the transaction in your wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_4.png').default} width="75%" />

5. Once the transaction has been confirmed on the network, you should now see the bridged assets in your EVM wallet, ready for use on Astar zkEVM.

:::info
To add tokens to your EVM wallet manually, use the following contract addresses:
- **ASTR:** `0xdf41220C7e322bFEF933D85D01821ad277f90172`
:::

### From Astar zkEVM to Astar EVM:

1. Select the token that you want to transfer and select `Astar zkEVM` for the **source network**;
2. Select the token that you want to receive and select `Astar EVM` for the **destination network**;
3. Enter the amount of tokens you want to transfer and confirm the transaction by clicking `Transfer`;  
*The gas cost corresponds to the gas fees for the destination transaction and is paid up-front.*

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_5.png').default} width="85%" />

:::tip
You have the option of requesting gas tokens on Astar EVM (`ASTR`). Stargate will swap a portion of your assets in ASTR and transfer them to your wallet on Astar EVM.

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_6.png').default} width="85%" />
:::

4. Sign the transaction in your wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_4.png').default} width="75%" />

5. Once the transaction has been confirmed on the network, you should now see the bridged assets in your EVM wallet, ready for use on Astar EVM.
