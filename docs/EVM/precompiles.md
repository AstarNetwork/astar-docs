---
sidebar_position: 1
---

# Precompiles

A precompile means a common functionality for smart contracts which has been compiled, so that Ethereum nodes can run this efficiently. From a contract's perspective, this is just a single command like an opcode.
The Frontier EVM used in Astar provides several useful precompiled contracts. These contracts are implemented in our ecosystem as a native implementation. The precompiled contracts `0x01` through `0x08` are the same as those in Ethereum (see list below). Astar additionally implements precompiled contracts start from `0x5001`, and support new Astar features.

## Ethereum Native Precompiles

| Precompile | Address |
| -------- | -------- |
| ECRecover     | 0x0000000000000000000000000000000000000001     |
| Sha256     | 0x0000000000000000000000000000000000000002     |
| Ripemd160     | 0x0000000000000000000000000000000000000003     |
| Identity     | 0x0000000000000000000000000000000000000004     |
| Modexp     | 0x0000000000000000000000000000000000000005     |
| Bn128Add     | 0x0000000000000000000000000000000000000006     |
| Bn128Mul     | 0x0000000000000000000000000000000000000007     |
| Bn128Pairing     | 0x0000000000000000000000000000000000000008     |

## Astar Specific Precompiles

| Precompile | Address |
| -------- | -------- |
| DappsStaking     | 0x0000000000000000000000000000000000005001     |
| Sr25519     | 0x0000000000000000000000000000000000005002     |
| SubstrateEcdsa | 0x0000000000000000000000000000000000005003     |
| XCM | 0x0000000000000000000000000000000000005004     |
| assets-erc20 | ASSET_PRECOMPILE_ADDRESS_PREFIX |
| XVM | ? |

The interface descriptions for these precompiles can be found in the `precompiles` folder: [astar-frame repo](https://github.com/AstarNetwork/astar-frame/).

The Addresses can be checked in the [Astar repo](https://github.com/AstarNetwork/Astar/tree/master/runtime) for each runtime in `precompile.rs` files.

