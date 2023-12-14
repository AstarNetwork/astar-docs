---
title: Astar EVM <-> zkEVM Bridge
---

## Overview

:::note
Please note that the LayerZero bridge is only available between Shibuya and zKatana testnets at this time. In this walkthrough we will describe how to bridge Shibuya token to zKatana.
:::

A LayerZero integration functionally connects the EVM on Astar parachain to the zkEVM on Ethereum. This takes the form of two smart contract-based endpoints that allow the chains to send messages to one another other. 

## LSBY Token

LayerZero has a standard for synthetic assets that can be locked on a source chain and minted on another called Omnichain Fungible Token or **OFT**, which we will refer to going forward. 

For this walkthrough, on the Shibuya side, the contract is [NativeOFT](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/fee/NativeOFTWithFee.sol), which acts as an ERC20 wrapper contract (the function is payable) so you can send it some SBY tokens, and it will respond by sending a cross-chain message to the OFT contract on zKatana to mint LSBY, otherwise known as LayerZero (synthetic) SBY.

On the zKatana side, the contract is [OFT](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/fee/OFTWithFee.sol), which acts as the ERC20 SBY synthetic asset on zKatana, which should exist in a 1:1 ratio with its NativeOFT counterpart. 

### Bridging LSBY Tokens

To facilitate token transfer, we have provided a sample repository containing a utility script:

:::info

Note: The current method is provisional and specific to testnet environments. The eventual mainnet implementation will incorporate the bridging of Native ASTR tokens through the Astar Portal.

:::

1. Fork the [Repository](https://github.com/AstarNetwork/layer-zero-bridge-contracts-testnet)

2. Install dependencies by running `npm install`

3. Create a .env file (based on the .env.example) in the root directory 

4. Add your [private key](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in the .env file

5. Run `npm hardhat compile` to compile the contracts

#### Shibuya EVM &rarr; zKatana
To send 1 SBY from shibuya-testnet to zkatana-testnet, run the following command (Note that the --quantity flag is in wei):

`npx hardhat astarWithFeeSend --quantity 1000000000000000000 --target-network zkatana-testnet --network astar-testnet`

#### zKatana &rarr; Shibuya EVM

To send 1SBY from zkatana-testnet to shibuya-testnet, run the following command (Note that the --quantity flag is in wei):

`npx hardhat astarWithFeeSend --quantity 1000000000000000000 --target-network astar-testnet --network zkatana-testnet`
