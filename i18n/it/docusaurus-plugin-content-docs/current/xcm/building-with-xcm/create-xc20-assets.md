---
sidebar_position: 2
---

# Create XC20 Assets

## Overview

XC20s, created by the [Moonbeam](https://moonbeam.network/blog/introducing-xc-20s-the-new-standard-for-cross-chain-tokens-on-dotsama/) team, make compatibility between the EVM and the Substrate framework that powers Polkadot via precompiles — special built-in smart contracts made to look like ERC-20s. Calling functions on an XC20 invokes underlying Substrate functionality, which could be instructions to move tokens to another chain or send them to another local address. This compatibility layer connects the world of EVM and smart contracts to advanced Substrate-based interoperability scenarios.

## Create and Register an XC20 Asset

Currently, mintable XC20 assets need to be created through [Polkadot.js Apps][polkadotjs-apps]. In this case, we will use our test network, Shibuya. 

This section of the guide will show you how to register an asset on [Polkadot.js Apps][polkadotjs-apps]. 

## Create Asset

Before we can set the asset's Metadata we need to create the XC20 on the network. You can take the following steps:

1. Navigate in the [Polkadot.js Apps][polkadotjs-apps] to Network and click on **Assets**.
2. Click on **+Create** on the rights to open the create asset pop-up.
3. Enter the **asset name, asset symbol**, and set the **decimals** for the asset. This doesn't have to be 18 decimals like the network native assets, it's completely configurable.
4. The **minimum balance** is the Existential Deposit (ED) of your asset. The ED exists so that accounts with very small balances, or completely empty, do not "bloat" the state of the blockchain in order to maintain high performance. **NOTE**: setting it to pico units and minimum balance to 1, will only require 0.000000000001 units. We suggest having a minimum balance of **1**.
5. The asset id is automatically generated for you. The valid range for permissionless creation is up to `2^32 - 1`.
6. When everything is filled in, click **Next** for the next screen.
7. Set your **roles** and create your asset by signing with the creator account.

![Create your asset](img/5.png)
![Set roles](img/6.png)

There are some roles that are important to take note of when registering and managing assets. These roles, with the exception of the creator, can all be designated to other accounts by the owner via the assets -> setTeam extrinsic. The roles are as follows:

- **Creator** - the account responsible for creating the asset.
- **Issuer** - the designated account capable of issuing or minting tokens. Defaults to the owner.
- **Admin** - the designated account capable of burning tokens and unfreezing accounts and assets. Defaults to the owner.
- **Freezer** - the designated account capable of freezing accounts and assets. Defaults to the owner.

## Mint Asset

The asset is now created in our network but has no supply. To mint the tokens you click on the +Mint button next to your asset to open the mint pop-up.

![Mint your assets](img/7.png)

1. Only the **issuer account** has permission to mint the token.
2. Select to address who receives the minted assets, we recommend using a [multisig](https://docs.astar.network/tutorial/how-to/how-to-create-a-multisig-wallet).

## Set Asset Metadata

The metadata includes the asset name, symbol, and decimals.

To set the asset metadata, click on **Developer** at the top of the page and then select **Extrinsics** from the dropdown. From there, you can take the following steps:

1. Select the owner's account
2. From the **submit the following extrinsic** dropdown, choose **assets**
3. Then select the `setMetadata` extrinsic
4. Enter the asset id from the asset your created before
5. Enter the name of the asset
6. Set the symbol for the asset
7. Set the decimals for the asset
8. Click on **Submit Transaction**

![Set your Metadata](img/8.png)

You can use the **Extrinsics** page to perform other functions such as minting tokens, delegating a team, freeze and thaw assets or accounts, and more.

## Generate XC20 Precompile Address

The use our asset now as XC20 on MetaMask or another EVM wallet we need to generate the smart contract. The XC20 precompile address is generated using the following rule:

`address = "0xFFFFFFFF" + DecimalToHexWith32Digits(AssetId)`

The first step is to take the asset ID and convert it to a hex value. You can use your search engine of choice to look up a simple tool for converting decimals to hex values. In this tutorial, we will use [this decimal to hexadecimal converter](https://www.rapidtables.com/convert/number/decimal-to-hex.html).

For asset ID `19992021`, the hex value is `1310DD5`.

XC20 precompiles can only fall between  `0xFFFFFFFF00000000000000000000000000000000` and `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`. As such, the first 8 characters of the address will always be `FFFFFFFF`. Since Ethereum addresses are 40 characters long, you will need to prepend 0s to the hex value until the address has 40 characters.

The hex value that was already generated in the example is 7 characters long, so prepending the first 8 characters, `FFFFFFFF`, to the hex value will give you the part of the 40-character address you need to interact with the XC20 precompile. Note that you still need to add zeros to get the 40-character address. You add the zeros between `FFFFFFFF` and generated hex.

For this example, the full address is `0xFFFFFFFF00000000000000000000000001310dD5`.

Now that you've generated the XC20 precompile address, you can use the address to interact with the XC20 as you would with any other ERC20 in Remix.

## Accessing XC20 From Smart Contract

In order to access XC20 via smart contract, _EVM revert code_ first needs to be registered on the XC20 address.
This currently isn't automated and requires small intervention from the Astar team.

Please contact us if you cannot access XC20 from your smart contract

[polkadotjs-apps]: https://polkadot.js.org/apps/