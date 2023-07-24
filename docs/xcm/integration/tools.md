---
sidebar_position: 4
---

# XCM Tools

We've prepared an xcm-tools crate which provides an easy way for users to find a sovereign account or calculate an XC20 asset Id. This section is intended for developers or integrators who possess basic technical knowledge.

## Installation

1. Make sure your machine is capable of compiling Substrate code. For more info, check [here](https://docs.substrate.io/install/).
2. Clone [Astar repo](https://github.com/AstarNetwork/Astar)
3. Position yourself in repository root and run `cargo build --release -p xcm-tools`
4. After compilation finishes, check the `./target/release` folder for the `xcm-tools` binary
5. Store it for later use so you don't have to recompile it from scratch.

## Sovereign Account

For finding a parachain's sovereign account address on the Relay Chain, use the following command:

```bash
./xcm-tools sovereign-account 2006
5Ec4AhPW97z4ZyYkd3mYkJrSeZWcwVv4wiANES2QrJi1x17F
```

Replace **2006** with the parachain Id you require.

For calculating a sibling parachain's sovereign account address, use the following command:
```bash
./xcm-tools sovereign-account -s 2006
5Eg2fntKDrAxhaGuB3idrxCFu3BveuyB1MooVPYuj2jaoSsw
```

E.g. this will be the sovereign account address of Astar on Statemint.
Replace 2006 with the parachain Id you require.

## XC20 Address

For calculating an XC20 EVM address, use the following command:
```bash
./xcm-tools asset-id 42424242424242
pallet_assets: 42424242424242
EVM XC20: 0xffffffff000000000000000000002695a9e649b2
```

You can also input a standard asset Id (as seen by pallet-assets), and it will output the H160 address of that asset.

## Remote Account

For calculating the remote account, see ([here](https://github.com/paritytech/polkadot/blob/master/xcm/xcm-builder/src/location_conversion.rs#L25)), we have provide a dedicated command. However, the possible `MultiLocation`s format is limited to:

1. `{ parents: 1, interior: X1(AccountId32{ network: _, id: 0x<id>}) }`
2. `{ parents: 1, interior: X2(Parachain(<parachain_id>), AccountId32{ network: _, id: 0x<id>}) }`
2. `{ parents: 1, interior: X2(Parachain(<parachain_id>), AccountKey20{ network: _, key: 0x<id>}) }`

For the first case, use the following command:
```bash
./xcm-tools remote-account -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000
5H2dw5K45MfT4dwB7u924MYFASzGoWvACzKuMo3TdgJRkg2R
```
The value under `-a` is a SS58 public key.

For the second case, use the following command:
```bash
./xcm-tools remote-account -p 1000 -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000
5FkWm28hUM7XC9qvrS3w4RP38wCgajfvFpqyfjeTSVxShdzC
```
The value under `-p` is parachain Id, while `-a` is again the public key.
