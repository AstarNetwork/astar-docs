# Transfer Asset

Let's use `transfer_multiasset` to:

- transfer asset id = 1 token from `parachainId` **2000** to `parachainId` **2007**
- for amount **10000000000000000000000**

#### 1. Asset Address

The assetId = 1 is defined with: address = '0xFFFFFFFF...' + DecimalToHex(AssetId) resulting to : `0xFfFFFFff00000000000000000000000000000001`

```solidity
address assetAddress = 0xFfFFFFff00000000000000000000000000000001;
```

#### 2. Beneficiary Multilocation

Let's suppose the `beneficiary` is the EVM address `0xd43593c715fdd31c61141abd04a99fd6822c8558` of the contract in parachain **2007**. The Multilocation is `{ parents: 1, interior: X2 [Parachain: 2007, AccountId20: { id: *caller address* , network: any }] }`.    
The interior field is of type H160 (20 bytes EVM address) so prefixed with 0x03 and suffix with 0x00 (network: any). The interior bytes are 0x03 + EVM address + 0x00

```solidity
bytes[] memory interior = new bytes[](2);
interior[0] = bytes.concat(hex"00", bytes4(uint32(2007)));
interior[1] = bytes.concat(hex"03", msg.sender, hex"00");
XCM.Multilocation memory destination = XCM.Multilocation({
    parents: 1,
    interior: interior
});
```

#### 3. Weight

The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time.

```solidity
XCM.WeightV2 memory weight = XCM.WeightV2({
    ref_time: 30_000_000_000,
    proof_size: 300_000
});
```

#### 4. calling XCM precompiles

Import the XCM precompiles in your contract and call it like this:

```solidity
address public constant XCM_ADDRESS =
0x0000000000000000000000000000000000005004;

require(
    XCM(XCM_ADDRESS).transfer(
        assetAddress,
        amount,
        destination,
        weight
    ),
    "Failed to send xcm"
);
```

Please check full example in the [XCM EVM SDK](https://github.com/AstarNetwork/EVM-XCM-Examples/tree/main/contracts/transfer-assets)