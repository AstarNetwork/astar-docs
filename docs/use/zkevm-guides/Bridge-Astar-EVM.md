---
sidebar_position: 3
title: Bridge to Astar zkEVM from Astar EVM.
sidebar_label: Bridge Astar EVM <> Astar zkEVM
---

import Figure from "/src/components/figure"

# Bridge to Astar zkEVM from Astar EVM.

This page explains how to transfer `ASTR` and other assets (`DOT`, `vASTR`, etc.) between **Astar EVM** and **Astar zkEVM**.  
If you have `ASTR` and other assets on Astar native (Substrate) instead, consult [this guide](/docs/use/manage-assets/transfer-tokens#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account) to transfer them from Astar native to Astar EVM.

### Transfer using Stargate:

**[Stargate](https://stargate.finance/transfer)** is a community-driven organization building fully composable native asset bridges on LayerZero. [More information](https://stargateprotocol.gitbook.io/stargate/v/user-docs).

*Please be advised that Astar Foundation assumes no responsibility or liability for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your utilization of any third-party application presented in our documentation.*

1. Visit [Stargate](https://stargate.finance/transfer) and connect your EVM wallet;

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_1.png').default} width="70%" />

2. Select the token that you want to transfer and select `Astar EVM` for the **source network**;
3. Select the token that you want to receive and select `Astar zkEVM` for the **destination network**;
4. Enter the amount of tokens you want to transfer and confirm the transaction by clicking `Transfer` ;

<Figure src={require('/docs/use/zkevm-guides/img/Stargate_2.png').default} width="70%" />

5. Sign the transaction in your wallet;
6. Once the transaction has been confirmed on the network, you should now see the bridged assets in your EVM wallet, ready for use on Astar zkEVM.

:::info
To add tokens to your EVM wallet, you can use the following contract addresses:
- **ASTR:** `0xdf41220C7e322bFEF933D85D01821ad277f90172`
- **DOT:** `0x7Cb5d4D178d93D59ea0592abF139459957898a59`
- **vASTR:** `0x7746ef546d562b443AE4B4145541a3b1a3D75717`
:::