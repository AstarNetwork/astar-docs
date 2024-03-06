---
sidebar_position: 10
title: Cannonical Contracts
sidebar_label: Cannonical Contracts
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The following contracts addresses have been established:

## Astar zkEVM Common Goods Contracts

Wrapped ETH (wETH) on Astar zkEVM contract address is [`0xE9CC37904875B459Fa5D0FE37680d36F1ED55e38`](https://astar-zkevm.explorer.startale.com/address/0xE9CC37904875B459Fa5D0FE37680d36F1ED55e38).

### Bridged Tokens

<Tabs>
<TabItem value="mainnet" label="Astar zkEVM Mainnet" default>

| Contract Name                | Source     | Contract Address                           |
| ---------------------------- | ---------- | ------------------------------------------ |
| ASTR                         | LayerZero Bridge from Astar EVM (L1) | [0xdf41220C7e322bFEF933D85D01821ad277f90172](https://astar-zkevm.blockscout.com/address/0xdf41220C7e322bFEF933D85D01821ad277f90172) |
| USDC                        | Cannonical Bridge (LxLy) | [0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035](https://astar-zkevm.blockscout.com/token/0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035) |
| wYYYY                        | ---------- | 0x.... |
| wZZZZ                        | ---------- | 0x.... |
</TabItem>
<TabItem value="testnet" label="zKatana Testnet">
</TabItem>
</Tabs>


## Polygon CDK Validium Specific Contracts
<Tabs>
<TabItem value="mainnet" label="Astar zkEVM Mainnet" default>

| Contract Name                | Network          | Contract Address                           |
| ---------------------------- | ---------------- | ------------------------------------------ |
| PolToken                     | L1 (Ethereum)    | 0x455e53cbb86018ac2b8092fdcd39d8444affc3f6 |
| Verifier                     | L1 (Ethereum)    | 0x1c3a3da552b8662cd69538356b1e7c2e9cc1ebd8 |
| PolygonZkEVM                 | L1 (Ethereum)    | 0x1e163594e13030244dcaf4cdfc2cd0ba3206da80 |
| DataCommittee                | L1 (Ethereum)    | 0x9ccd205052c732ac1df2cf7bf8aacc0e371ee0b0 |
| PolygonZkEVMBridge           | L1 (Ethereum)    | 0x2a3dd3eb832af982ec71669e178424b10dca2ede |
| PolygonRollupManager         | L1 (Ethereum)    | 0x5132a183e9f3cb7c848b0aac5ae0c4f0491b7ab2 |
| PolygonZkEVMGlobalExitRoot   | L1 (Ethereum)    | 0x580bda1e7a0cfae92fa7f6c20a3794f169ce3cfb |
| Timelock                     | L2 (Astar zkEVM) | 0xbba0935fa93eb23de7990b47f0d96a8f75766d13 |
| PolygonZkEVMBridge           | L2 (Astar zkEVM) | 0x2a3dd3eb832af982ec71669e178424b10dca2ede |
| PolygonZkEVMGlobalExitRootL2 | L2 (Astar zkEVM) | 0xa40d5f56745a118d0906a34e69aec8c0db1cb8fa |
</TabItem>
<TabItem value="testnet" label="zKatana Testnet">
</TabItem>
</Tabs>

More documentation about the Polygon CDK Validium contracts can be found in the [cdk-validium-contracts GitHub repository](https://github.com/0xPolygon/cdk-validium-contracts)

## Ethereum Specific Precompiles

TODO - refer to a link in CDK Docs which covers which precompiles are available for CDK

### LayerZero Bridge
<Tabs>
<TabItem value="mainnet" label="Astar zkEVM Mainnet" default>

| Contract Name                | Network                       | Contract Address ( Endpoint )              | endpointId   |
| ---------------------------- | ------------------------------|------------------------------------------- |--------------|
| LayerZero endpoint V1        | L1 (Astar EVM (Substrate))    | 0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7 | 210          |
| LayerZero endpoint V2        | L1 (Astar EVM (Substrate))    | 0x1a44076050125825900e736c501f859c50fe728c | 30210        |
| LayerZero endpoint V1        | L2 (Astar zkEVM)              | 0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7 | 257          |
| LayerZero endpoint V2        | L2 (Astar zkEVM)              | 0x1a44076050125825900e736c501f859c50fE728c | 30257        |
| LayerZero OFT ASTR           | L2 (Astar zkEVM)              | 0xdf41220C7e322bFEF933D85D01821ad277f90172 | -            |
| LayerZero NativeOFT ASTR     | L1 (Astar EVM (Substrate))    | 0xdf41220C7e322bFEF933D85D01821ad277f90172 | -            |
</TabItem>
<TabItem value="testnet" label="zKatana Testnet">
</TabItem>
</Tabs>

More documentation about the LayerZero Bridge can be found in [this section](/docs/build/zkEVM/integrations/bridges-relays/AstarEVM-zkEVM.md) 
