---
sidebar_position: 6
---

# XCM - xTokens

### XCM precompiles - Interface

The interface can be found [here](https://github.com/AstarNetwork/Astar/blob/master/precompiles/xcm/XCM_v2.sol#L1) and contains the following functions:

:::info
Only available in Shibuya for now. For Shiden and Astar please check this [interface](https://github.com/AstarNetwork/Astar/blob/master/precompiles/xcm/XCM.sol)
:::

#### transfer(currencyAddress, amount, destination, weight)

Transfer a token through XCM based on its address

```solidity
function transfer(
    address currencyAddress,
    uint256 amount,
    Multilocation memory destination,
    WeightV2 memory weight
) external returns (bool);
```

- **currencyAddress** - The ERC20 address of the currency we want to transfer
- **amount** - The amount of tokens we want to transfer
- **destination** - The Multilocation to which we want to send the tokens
- **weight** - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time

#### transfer_with_fee(currencyAddress, amount, fee, destination, weight)

Transfer a token through XCM based on its address specifying fee

```solidity
function transfer_with_fee(
    address currencyAddress,
    uint256 amount,
    uint256 fee,
    Multilocation memory destination,
    WeightV2 memory weight
) external returns (bool);
```

- **currencyAddress** - The ERC20 address of the currency we want to transfer
- **amount** - The amount of tokens we want to transfer
- **fee** - The amount to be spent to pay for execution in destination chain
- **destination** - The Multilocation to which we want to send the tokens
- **weight** - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time

#### transfer_multiasset(asset, amount, destination, weight)

Transfer a token through XCM based on its MultiLocation

```solidity
function transfer_multiasset(
    Multilocation memory asset,
    uint256 amount,
    Multilocation memory destination,
    WeightV2 memory weight
) external returns (bool);
```

- **asset** - The asset we want to transfer, defined by its multilocation. Currently only Concrete Fungible assets
- **amount** - The amount of tokens we want to transfer
- **destination** - The Multilocation to which we want to send the tokens
- **weight** - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time

#### transfer_multiasset_with_fee(asset, amount, fee, destination, weight)

Transfer a token through XCM based on its MultiLocation specifying fee

```solidity
function transfer_multiasset_with_fee(
    Multilocation memory asset,
    uint256 amount,
    uint256 fee,
    Multilocation memory destination,
    WeightV2 memory weight
) external returns (bool);
```

- **asset** - The asset we want to transfer, defined by its multilocation. Currently only Concrete Fungible assets
- **amount** - The amount of tokens we want to transfer
- **fee** - The amount to be spent to pay for execution in destination chain
- **destination** - The Multilocation to which we want to send the tokens
- **weight** - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time

#### transfer_multi_currencies(currencies, feeItem, destination, weight)

Transfer several tokens at once through XCM based on its address specifying fee

```solidity
function transfer_multiasset_with_fee(
    Multilocation memory asset,
    uint256 amount,
    uint256 fee,
    Multilocation memory destination,
    WeightV2 memory weight
) external returns (bool);
```

- **currencies** - The currencies we want to transfer, defined by their address and amount.
- **feeItem** - Which of the currencies to be used as fee
- **destination** - The Multilocation to which we want to send the tokens
- **weight** - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time

#### transfer_multi_assets(assets, feeItem, destination, weight)

Transfer several tokens at once through XCM based on its location specifying fee

:::caution
Only a maximum of 2 assets can be transferred
:::

```solidity
function transfer_multi_assets(
    MultiAsset[] memory assets,
    uint32 feeItem,
    Multilocation memory destination,
    WeightV2 memory weight
) external returns (bool);
```

- **assets** - The assets we want to transfer, defined by their location and amount.
- **feeItem** - Which of the currencies to be used as fee
- **destination** - The Multilocation to which we want to send the tokens
- **weight** - The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time

#### send_xcm(destination, xcmCall)

Send xcm using PalletXCM call

```solidity
function send_xcm(
    Multilocation memory destination,
    bytes memory xcm_call
) external returns (bool);
```

- **destination** - Multilocation of destination chain
- **xcmCall** - Encoded xcm call to send to destination

### XCM EVM SDK

Find it [here](https://github.com/AstarNetwork/EVM-XCM-Examples/tree/main).
This repository contains examples demonstrating solidity contracts using XCM precompiles. It's an easy way to start if you want to understand and build with EVM & XCM
Inside the repository:

- Learn how to do: asset transfer & withdraw as well as native token transfer
- Zombienet config file: spawn a local zombienet with one relay chain and two parachains (Shibuya and Shiden node)
- A setup script in order to create an asset and register it in both networks
- Solidity examples of usage of XCM precompiles
- Integration tests (hardhat) in order to understand the flow of the examples

Please follow the instructions in the README to try it on your local machine.

### Create Multilocation

A multilocation is defined by its number of parents and the encoded junctions (interior). Precompiles use the Multilocation type that is defined as follows:

```solidity
    struct Multilocation {
        uint8 parents;
        bytes[] interior;
    }
```

Note that each multilocation has a `parents` element, defined in this case by a `uint8`, and an array of bytes. Parents refer to how many "hops" in the upwards direction you have to do if you are going through the relay chain. Being a `uint8`, the normal values you would see are:

|   Origin    | Destination | Parents Value |
|:-----------:|:-----------:|:-------------:|
| Parachain A | Parachain A |       0       |
| Parachain A | Relay Chain |       1       |
| Parachain A | Parachain B |       1       |

The bytes array (`bytes[]`) defines the interior and its content within the multilocation. The size of the array defines the `interior` value as follows:

|    Array     | Size | Interior Value |
|:------------:|:----:|:--------------:|
|      []      |  0   |      Here      |
|    [XYZ]     |  1   |       X1       |
|  [XYZ, ABC]  |  2   |       X2       |
| [XYZ, ... N] |  N   |       XN       |

:::note
Interior value `Here` is often used for the relay chain (either as a destination or to target the relay chain asset).
:::

Suppose the bytes array contains data. Each element's first byte (2 hexadecimal numbers) corresponds to the selector of that `XN` field. For example:

| Byte Value |    Selector    | Data Type |
|:----------:|:--------------:|-----------|
|    0x00    |   Parachain    | bytes4    |
|    0x01    |  AccountId32   | bytes32   |
|    0x02    | AccountIndex64 | u64       |
|    0x03    |  AccountKey20  | bytes20   |
|    0x04    | PalletInstance | byte      |
|    0x05    |  GeneralIndex  | u128      |
|    0x06    |   GeneralKey   | bytes[]   |

Next, depending on the selector and its data type, the following bytes correspond to the actual data being provided. Note that for `AccountId32`, `AccountIndex64`, and `AccountKey20`, the `network` field seen in the Polkadot.js Apps example is appended at the end. For example:

|    Selector    |       Data Value       |             Represents             |
|:--------------:|:----------------------:|:----------------------------------:|
|   Parachain    |    "0x00+000007E7"     |         Parachain ID 2023          |
|  AccountId32   | "0x01+AccountId32+00"  | AccountId32, Network(Option) Null  |
|  AccountId32   | "0x01+AccountId32+03"  |   AccountId32, Network Polkadot    |
|  AccountKey20  | "0x03+AccountKey20+00" | AccountKey20, Network(Option) Null |
| PalletInstance |       "0x04+03"        |         Pallet Instance 3          |

For example in solidity:

```solidity
// Multilocation: { parents: 1, interior: X1 [Parachain: 2000] }
bytes[] memory interior1 = new bytes[](1);
interior1[0] = bytes.concat(hex"00", bytes4(uint32(2000)));
Multilocation memory destination = Multilocation({ 
    parents: 1,
    interior: interior1
});

// Multilocation: { parents: 0, interior: Here }
bytes[] memory interior1 = new bytes[](0); // Initialize as an empty bytes array
Multilocation memory destination = Multilocation({
    parents: 1,
    interior: interior1
});

// Multilocation: { parents: 1, interior: X2 [Parachain: 2000, GeneralIndex: 1] }
bytes[] memory interior = new bytes[](2);
interior[0] = bytes.concat(hex"00", bytes4(uint32(2000)));
interior[1] = bytes.concat(hex"05", abi.encodePacked(uint128(1)));
XCM.Multilocation memory asset = XCM.Multilocation({ 
    parents: 1,
    interior: interior
});
```

#### Builder Guides

Three builder guides on the subject of EVM XCM are available in the Builder section:

- [How to create and interact with a mintable XC20 asset via Solidity smart contract](../../../builder-guides/leverage_parachains/interact_with_xc20.md)   
- [Harnessing Crust Network for NFT Minting: A Developer's Guide](../../../builder-guides/leverage_parachains/mint-nfts-crust.md)   
- [How to set up a Zombienet for XCM testing](../../../builder-guides/leverage_parachains/zombienet.md)  
