---
title: AstarEVM <-> zkEVM Bridge
---

## Overview

Layer Zero has been integrated to AstarEVM (Shibuya Parachain) and zkEVM (zKatana testnet). This endpoint intergation allow the two chains to send messages to each other. In this section we will describe how to bridge Shibuya token to zKatana.

## LSBY Token

On Shibuya side, the contract used is [NativeOFT](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/fee/NativeOFTWithFee.sol). It acts as an ERC20 wrapper contract (the function is payable) so you send Shibuya token to the contract, it then sends a message to the OFT contract in zKatana and mints LSBY.
On zKatana side, the contract is [OFT](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/fee/OFTWithFee.sol). This contract acts as the ERC20 SBY synthetic asset on zKatana. It's ticker is LSBY (for LayerZero SBY).

### Bridging LSBY Tokens

To facilitate token transfer, we have provided a repository containing a utility script:

:::info

Note: The current method is provisional and specific to testnet environments. The eventual mainnet implementation will incorporate the bridging of Naive ASTR tokens through the Astar Portal.

:::

1. Fork the [Repository](https://github.com/AstarNetwork/layer-zero-bridge-contracts-testnet)

2. Install dependencies by running `pnpm install`

3. Create a .env file (based on the .env.example) in the root directory 

4. Add your [private key](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in the .env file

5. Run `pnpm hardhat compile` to compile the contracts

#### ShibuyaZVM -> zKatana
To send 1 SBY from shibuya-testnet to zkatana-testnet, run the following command (Note that the --quantity flag is in wei):

`npx hardhat astarWithFeeSend --quantity 1000000000000000000 --target-network zkatana-testnet --network astar-testnet`

#### zKatana -> ShibuyaZVM

To send 1SBY from zkatana-testnet to shibuya-testnet, run the following command (Note that the --quantity flag is in wei):

`npx hardhat astarWithFeeSend --quantity 1000000000000000000 --target-network astar-testnet --network zkatana-testnet`
