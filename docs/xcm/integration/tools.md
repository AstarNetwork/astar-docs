---
sidebar_position: 4
---

# XCM Tools

We've prepared an xcm-tools crate which provides an easy way for user to calculate sovereign account or XC20 asset Id. This is intended for developers or integrators and requires basic technical knowledge to use.

## Installation

1. Make sure your machine is capable of compiling substrate code. For more info, check [here](https://docs.substrate.io/install/).
2. Clone [Astar repo](https://github.com/AstarNetwork/Astar)
3. Position yourself in repository root and run `cargo build --release -p xcm-tools`
4. After compilation finishes, check the `./target/release` folder for the `xcm-tools` binary
5. Store it for later use so you don't have to recompile it from scratch.

## Sovereign Account

For calculating parachain's sovereign account on relay chain, use the following command:

```bash
xcm-tools parachain-account 2006
5Ec4AhPW97z4ZyYkd3mYkJrSeZWcwVv4wiANES2QrJi1x17F
```

Replace **2006** with the parachain Id you require.

For calculating sibling parachain's sovereign account, use the following command:
```bash
xcm-tools parachain-account -s 2006
5Eg2fntKDrAxhaGuB3idrxCFu3BveuyB1MooVPYuj2jaoSsw
```

E.g. this will be sovereign account of Astar on Statemint.
Replace 2006 with the parachain Id you require.

## XC20 Address

For calculating XC20 EVM address, use the following command:
```bash
xcm-tools asset-id 42424242424242
pallet_assets: 42424242424242
EVM XC20: 0xffffffff000000000000000000002695a9e649b2
```

You can input standard asset Id (as seen by pallet-assets) and as output you get H160 address of that asset.

## Account32Hash

For calculating `Account32Hash` ([here](https://github.com/paritytech/polkadot/blob/master/xcm/xcm-builder/src/location_conversion.rs#L25)), we provide a dedicated command. However, the possible `MultiLocation`s format is limited to:

1. `{ parents: 1, interior: X1(AccountId32{ network: Any, id: 0x<id>}) }`
2. `{ parents: 1, interior: X2(Parachain(para_id), AccountId32{ network: Any, id: 0x<id>}) }`

For the first case, use the following command:
```bash
xcm-tools account32-hash -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000
5EKFVedcKtGBPytwgj9sbCTmjSr8wJTmhHuuWTz9RhMRrv1h
```
The value under `-a` is a SS58 public key.

For the second case, use the following command:
```bash
xcm-tools account32-hash -p 1000 -a 0x84746218b9858233f45f99d742aa3ea2f31aeb5a525938f240fdee3000000000
5G9fvUEXj93MBeaAzzXQh4RpsTygPssbrVcpuWCzE9u8K4KD
```
The value under `-p` is parachain Id, while `-a` is again public key.