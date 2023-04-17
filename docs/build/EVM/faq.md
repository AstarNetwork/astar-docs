---
sidebar_position: 8
---

# FAQ

### Is there a step by step guide on how to deploy smart contract in the Astar ecosystem?

Yes, you can follow [this tutorial](first-contract) within our documentation.

### Can I use [Remix](https://remix.ethereum.org) or [Hardhat](https://hardhat.org/) for smart contract deployment?

You sure can.

### What are the names of the native tokens in the Astar ecosystem?

SBY (Shibuya - Testnet tokens)

SDN (Shiden Network)

ASTR (Astar Network)

### How do I connect to Astar networks, RPCs, Network name, Chain ID?

You can visit [this page](/docs/build/environment/endpoints.md).

### How can I get test tokens (SBY)?

Use [our faucet](/docs/build/environment/faucet.md).

### Is it possible to import Substrate (Polkadot) addresses to Metamask?

No. Polkadot (Substrate framework) uses a 256 bit address, while Metamask uses a 160 bit address.

### Can I interact with EVM contracts by using existing Substrate account (non-ecdsa)?

Any Substrate account can call the EVM, and its Native address will be mapped to an EVM compatible representation.

### I was able to deploy contracts in other networks, but contracts deployed in this network show "out of gas" error with the error code of 0. How do I fix it?

Contract size limits may differ between networks, so it is recommended to lower optimizer runs of the same smart contract and adjust it to a compatible size for the network. You may want to tune this on testnet.

### During contract deployment I'm getting `HH110: Invalid JSON-RPC response received: 403 Forbidden` error.

That means your requests are limited by Astar endpoints. You need to set up your own node or use another endpoint provider.  