---
title: Astar <-> zkEVM Bridge
---

## Overview

LayerZero integration functionally connects the EVM on Astar parachain to the zkEVM on Ethereum. This takes the form of two smart contract-based endpoints that allow the chains to send messages to one another other. 

## Bridge ASTR on mainnet

LayerZero has a standard for synthetic assets that can be locked on a source chain and minted on another called Omnichain Fungible Token or **OFT**, which we will refer to going forward.

For this walkthrough, on the Astar side, the contract is [NativeOFT](https://github.com/AstarNetwork/solidity-examples/blob/main/contracts/token/oft/v2/fee/NativeOFTWithFee.sol), which acts as an ERC20 wrapper contract (the function is payable) that will be used to send a cross-chain message to the OFT contract on zk Astar to mint ASTR, otherwise known as LayerZero (synthetic) ASTR.

On the Astar zkEVM side, the contract is [OFT](https://github.com/AstarNetwork/solidity-examples/blob/main/contracts/token/oft/v2/fee/OFTWithFee.sol), which acts as the ERC20 ASTR synthetic asset on Astar zkEVM, which exist in a 1:1 ratio with its NativeOFT counterpart.

| Contract   | Network | Address                                        |
|------------|---------|------------------------------------------------|
| OFT Native | Astar   | [0xC0297833040Df48141d31BF860A3f4766cec69c2](https://astar.blockscout.com/address/0xC0297833040Df48141d31BF860A3f4766cec69c2) |
| OFT        | zkEVM   | [0x9fC8d99a5eC47cDDea778fd28E1d67094075c603](https://astar-zkevm.blockscout.com/address/0x9fC8d99a5eC47cDDea778fd28E1d67094075c603) |

### Bridging ASTR

To facilitate token transfer, we have provided a sample repository containing a utility script:

1. Fork the [Repository](https://github.com/AstarNetwork/layer-zero-bridge-mainnet)

2. Install dependencies by running `npm install`

3. Create a .env file (based on the .env.example) in the root directory

4. Add your [private key](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in the .env file

5. Run `npm hardhat compile` to compile the contracts

#### Astar &rarr; Astar zkEVM
To send 1ASTR from `astar`(`astar L1 mainnet`) to `zk-astar`(`Astar zkEVM`), run the following command (Note that the `--quantity` flag is in wei):

`npx hardhat bridge --quantity 1000000000000000000 --target-network zk-astar --network astar`

#### Astar zkEVM &rarr; Astar

To send  1ASTR from `zk-astar`(`Astar zkEVM`) to `astar`(`astar L1 mainnet`), run the following command (Note that the `--quantity` flag is in wei):

`npx hardhat bridge --quantity 1000000000000000000 --target-network astar --network zk-astar`

##  Bridge Shibuya testnet token

We deployed OFT contracts on Shibuya and zKatana to bridge SBY (NAtive token of Shibuya) to zKatana. Please follow the steps below.

### Bridging LSBY Tokens

To facilitate token transfer, we have provided a sample repository containing a utility script:

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
