# Transfer native token

Let's use `transfer_multiasset` to:

- transfer native token of `parachainId` **2000** to a Wrapped version in **2007**
- for amount **10000000000000000000**

#### 1. Define call as payable

As the call will be on behalf of the contract, the native amount should be held by the contract. Please make the function payable to ensure the native token will be transferred to contract.

```solidity
    function transfer_native() external payable {
```

#### 2. Asset Multilocation

The Native token Multilocation is defined by: `Multilocation: { parents: 0, interior: Here }`
The interior field is an empty bytes array (equivalent of `Here`).

```solidity
bytes[] memory interior1 = new bytes[](0);
XCM.Multilocation memory asset = XCM.Multilocation({
    parents: 0,
    interior: interior1
});
```

#### 3. Beneficiary Multilocation

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

#### 4. Weight

The weight we want to buy in the destination chain, to set the weightlimit to Unlimited, you should use the value 0 for ref_time.

```solidity
XCM.WeightV2 memory weight = XCM.WeightV2({
    ref_time: 30_000_000_000,
    proof_size: 300_000
});
```

#### 5. calling XCM precompiles

Import the XCM precompiles in your contract and call it like this:

```solidity
address public constant XCM_ADDRESS =
0x0000000000000000000000000000000000005004;

require(
    XCM(XCM_ADDRESS).transfer_multiasset(
        asset,
        amount,
        destination,
        weight
    ),
    "Failed to send xcm"
);
```

Please check full example in the [XCM EVM SDK](https://github.com/AstarNetwork/EVM-XCM-Examples/tree/main/contracts/transfer-native)