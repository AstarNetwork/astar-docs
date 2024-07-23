---
sidebar_position: 6
---

# Address Format

The address format used in Substrate-based chains like Astar is ss58. Ss58 is a modification of Base-58-check from Bitcoin, with some minor modifications. Notably, the format contains an address type prefix that identifies an address as belonging to a specific network. Astar Network is special in the Polkadot ecosystem because it's the only parachain that supports EVM and Wasm smart contracts. Two distinct and different virtual machines necessitates the use two kinds of addresses:

1. An Astar Native address or ss58 address, which uses 256 bits.
2. An Astar EVM or H160 address, which starts with 0x, and uses 160 bits.
