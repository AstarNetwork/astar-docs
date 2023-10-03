# XCM

// TODO Update links when XVM v2 is merge to master

### XCM precompiles - Interface

The interface can be consulted [here](to update) and contains the follow functions:

#### assets_withdraw(assetId, assetAmount, beneficiary, destination, feeIndex)

Withdraw assets using PalletXCM call

```solidity
function assets_withdraw(
    address[] calldata asset_id,
    uint256[] calldata asset_amount,
    Multilocation memory beneficiary,
    Multilocation memory destination,
    uint256   fee_index
) external returns (bool);
```

- **assetId** - list of XC20 asset addresses
- **assetAmount** - List of transfer amounts (must match with asset addresses above)
- **beneficiary** - Multilocation of beneficiary in respect to destination parachain
- **destination** - Multilocation of destination chain
- **feeIndex** - Index of asset_id item that should be used as a XCM fee

#### assets_reserve_transfer(assetId, assetAmount, beneficiary, destination, feeIndex)

Reserve transfer assets using PalletXCM call

```solidity
function assets_reserve_transfer(
    address[] calldata asset_id,
    uint256[] calldata asset_amount,
    Multilocation memory beneficiary,
    Multilocation memory destination,
    uint256   fee_index
) external returns (bool);
```

- **assetId** - list of XC20 asset addresses
- **assetAmount** - List of transfer amounts (must match with asset addresses above)
- **beneficiary** - Multilocation of beneficiary in respect to destination parachain
- **destination** - Multilocation of destination chain
- **feeIndex** - Index of asset_id item that should be used as a XCM fee

#### remote_transact(destination, paymentAssetId, paymentAmount, call, transactWeight)

Execute a transaction on a remote chain

```solidity
function remote_transact(
    Multilocation memory destination,
    address payment_asset_id,
    uint256 payment_amount,
    bytes calldata call,
    WeightV2 memory transact_weight
) external returns (bool);
```

- **destination** - Multilocation of destination chain
- **paymentAssetId** - Address of the local asset derivative used to pay for execution in the destination chain
- **paymentAmount** - Amount of payment asset to use for execution payment. It should cover the cost of XCM instructions and Transact call weight.
- **call** - Encoded call data (must be decodable by remote chain)
- **transactWeight** - Max weight that the encoded call is allowed to consume in the destination chain

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

- Zombienet config file: spawn a local zombienet with one relay chain and two parcahins (Shibuya and Shiden node)
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
// Multilocation: { parents: 1, interior: [Parachain: 2000] }
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
```

### Use precompiles in smart-contract

Let's try to use `assets_reserve_transfer` to:

- transfer `assetId` **1** (registered as sufficient - can be used to pay gas fees in target parachainchain)
- from `parachainId` **2000** to **2007**
- for amount **100000**

#### 1. destination Multilocation

`Destination` is parachain **2007**, in the Multilocation is `{ parents: 1, interior: [Parachain: 2007] }`.
The interior field is `parachainId` **2007** prefixed with 0x00. So the interior bytes are:  0x00 + (2007 as hex = 0x000007d7)

```solidity
bytes[] memory interior1 = new bytes[](1);
interior1[0] = bytes.concat(hex"00", bytes4(uint32(2000)));
Multilocation memory destination = Multilocation({ 
    parents: 1,
    interior: interior1
});
```

#### 2. beneficiary Multilocation

Let's suppose the `beneficiary` is the EVM address `0xd43593c715fdd31c61141abd04a99fd6822c8558` of the contract. The Multilocation is `{ parents: 0, interior: [AccountKey20: { id: *EVM adddress* , network: any }] }`.
The interior field is of type H160 (20 bytes EVM address) so prefixed with 0x03 and suffix with 0x00 (network: any). The interior bytes are 0x03 + AccountId32 + 0x00

```solidity
bytes[] memory interior = new bytes[](1);
interior[0] =  bytes.concat(hex"03", publicKey, hex"00");
XCM.Multilocation memory beneficiary = XCM.Multilocation({
    parents: 0,
    interior: interior
});
```

#### 3. asset address

This is the precompile address of asset id = 1 (address = '0xFFFFFFFF...' + DecimalToHex(AssetId)): `0xFfFFFFff00000000000000000000000000000001`. The precompiles expect an array of assets.

```solidity
address[] memory assetId = new address[](1);
assetId[0] = 0xFfFFFFff00000000000000000000000000000001;
```

#### 4. amount

XCM precompiles expect an array of amount.

```solidity
uint256[] memory assetAmount = new uint256[](1);
assetAmount[0] = 100000;
```

#### 5. calling XCM precompiles

Import the XCM precompiles in your contract and call it like this:

```solidity
address public constant XCM_ADDRESS =
0x0000000000000000000000000000000000005004;

require(
    XCM(XCM_ADDRESS).assets_reserve_transfer(
        assetId,
        assetAmount,
        beneficiary,
        destination,
        0
    ),
    "Failed to send xcm"
);
```

Please check full example in the [XCM EVM SDK](https://github.com/AstarNetwork/EVM-XCM-Examples/blob/main/contracts/reserve-withdraw-assets/withdrawAsset.sol)
