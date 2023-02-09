---
sidebar_position: 6
---

# Address Format

The address format used in Substrate-based chains like Astar is SS58. SS58 is a modification of Base-58-check from Bitcoin with some minor modifications. Notably, the format contains an address type prefix that identifies an address as belonging to a specific network. Astar Network is special in the Polkadot ecosystem because it's the only parachain that supports EVM as WASM smart contract. With the use of two different virtual machines comes two different kinds of addresses.

1. An Astar Native address or SS58 address. It uses 256 bits address.
2. An Astar EVM address or H160 address which starts with 0x. It uses 160 bits address.