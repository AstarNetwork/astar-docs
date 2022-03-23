---
sidebar_position: 1
---

# Precompiles

A precompile just means a common functionality for smart contracts which has been compiled, so Ethereum nodes can run this efficiently. From a contract's perspective this is just a single command like an opcode.
The Frontier EVM used in Astar provides several useful precompiled contracts. These contracts are implemented in the platform itself as a native implementations. The precompiled contracts from address `0x01` through` 0x08` are the same as those in Ethereum. Astar additionally implements precompiled contracts starting from `0x5001`, to support new Astar features.

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
