---
sidebar_position: 6
---

# FAQ for Smart Contracts

## Q: Unable to use `transferFrom` for XC20 (DOT, KSM...) in Solidity contract

An EVM smart contract (using XC20) also needs native token (ASTR, SDN, SBY) balance. In order for a contract to accept native tokens the contract needs payable function.

```solidity
function () public payable {}
```
