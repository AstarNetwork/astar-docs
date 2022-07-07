---
sidebar_position: 4
---

# XCM Tools

We've prepared an xcm-tools crate which provides an easy way for user to calculate sovereign account or XC20 asset Id. This is intended for developers or integrators and requires basic technical knowledge to use.

## Installation

1. Make sure your machine is capable of compiling substrate code. For more info, check [here](https://docs.substrate.io/main-docs/install/rust-builds/).
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
> xcm-tools parachain-account -s 2006
5Eg2fntKDrAxhaGuB3idrxCFu3BveuyB1MooVPYuj2jaoSsw
E.g. this will be sovereign account of Astar on Statemint.
Replace 2006 with the parachain Id you require.
