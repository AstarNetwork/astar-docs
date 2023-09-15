---
sidebar_position: 1
title: General FAQs related to zkEVM
sidebar_label: General FAQs
---
This document compiles some of the frequently asked questions related to the Astar zkEVM. For more details, check out [Polygon zkEVM documentation](https://wiki.polygon.technology/docs/category/zkevm-protocol/).

---

### For anyone not familiar, what is Astar zkEVM?

Astar zkEVM is the leading zero knowledge scaling solution that is equivalent to the Ethereum Virtual Machine. This means that most of the existing smart contracts, developer tools, and wallets work seamlessly. 

Astar zkEVM harnesses the power of Zero-Knowledge proofs to reduce transaction costs and increase throughput, all while inheriting the security of Ethereum L1.

### What are the main features of Astar zkEVM?

- **EVM-equivalence**: Most Ethereum smart contracts, wallets, and tools work seamlessly on Astar zkEVM
- Inherits **security from Ethereum**
- Lower cost compared to L1 and **better finality than other L2 solutions** like Optimistic Rollups
- **ZKP-powered scalability**, and aiming at similar throughput to PoS

### What kind of gas fee reduction can users expect from Astar zkEVM?

Compared to Ethereum Layer 1, users can expect a significant reduction in gas fees. Astar layer 2 scaling solutions/protocols batch transactions together and then effectively spread the cost of a single layer 1 transaction across multiple layer 2 transactions.

### How do zkRollups work?

zkRollups aggregate a large batch of transactions and prove all of them to the Ethereum network with a single zero-knowledge validity proof.

### What is so unique about zkEVMs?

Many people in crypto believed that a zkEVM was years away, and might never be practical or competitive with other ZK L2s. This was framed as an unavoidable tradeoff: we could have either full EVM equivalence or high performance, but not both.

However, with the proving system breakthroughs pioneered by Polygon Labs, we believe we can achieve full EVM equivalence while offering better performance (higher throughput, lower latency, and lower cost) than alt-L1s, optimistic rollups, and other ZK-Rollups.

### How do I connect Astar zkEVM to a Metamask Wallet?

In order to add the Astar zkEVM network to your wallet, please check [this guide](../quickstart.md) which contains the latest RPC details and videos demonstrating useful functionalities.

### How does Astar zkEVM compare to other zkEVMs in terms of technology and performance? What are the technical advantages there?

The best reference is Vitalik Buterin's neutral and comprehensive analysis of zkEVMs [published in his blog](https://vitalik.ca/general/2022/08/04/zkevm.html).

However, the one big difference between Astar zkEVM and other projects is zkEVM's efficient prover and the significant Ethereum equivalence. Regarding the design of the prover/verification component: other projects use an arithmetic circuit approach while the Astar zkEVM zkProver uses the State Machine approach.

### Is Astar zkEVM open source?

Yes, [Astar zkEVM is fully open-sourced](https://polygon.technology/blog/polygon-zkevm-is-now-fully-open-source) and uses Polygon zkEVM solution with an AGPL v3 open-source license.

### Does Astar zkEVM have a separate token?

No. **ETH will be used for gas fees**. It is expected that ASTR will be used for staking and governance in Astar zkEVM in the future.

It is also important to note that Astar **zkEVM supports Account Abstraction via ERC-4337**, which will allow you to pay fees with any token transparently from a user's perspective.

### What types of dApps can be deployed on Astar zkEVM?

Any dApp that is compatible with EVM can be deployed, except for those which require a specific precompiled contract that is currently not supported by zkEVM. For more details related to supported precompiled contracts, check out [Polygon zkEVM documentation](https://wiki.polygon.technology/docs/category/zkevm-protocol/).

### Can this Layer 2 zkEVM work with other chains?

**At the moment, the answer is No**. Aspirationally, the goal in the future is to build one of many chains that allow users' assets to move from layer 2 (L2) to layer 2. With that being said, users will not be able to utilize this functionality at launch, but L2 to L2 movement is included in our future roadmap.

### What are some of the main use cases for Astar zkEVM?

**DeFi Applications**: Because of Astar zkEVM’s high security and censorship resistance nature, it's a good fit for DeFi applications. zkRollups don’t have to wait for long periods for deposits and withdrawals; Astar zkEVM offers better capital efficiency for DeFi dApps/users.

**NFT, Gamefi, and Enterprise Applications**: Low gas cost, high transaction speed, and a greater level of security coupled with Ethereum composability are attractive to blue chip NFTs, GameFi, and Enterprise applications.

**Payments**: Users interested in transacting with each other in real-time within a near-instantaneous and low-fee environment will appreciate the value Astar zkEVM provides.

### When Astar zkEVM publishes a proof on L1, how can someone trust that that proof is accurate and includes all the transactions it claims it does?

Our zkRollup smart contract warranties it. It's trustworthy due to data availability and the fact that the published validity proofs are quick and easily verifiable SNARK proofs.

### Does Astar zkEVM have support for both Solidity and Vyper?

Yes, any language that gets compiled to EVM opcode should work with Astar zkEVM. In other words, if it can run on Ethereum, it can run on the Astar zkEVM.

### What is an RPC node?

**RPC (Remote Procedure Call)** is a JSON-RPC interface compatible with Ethereum. It enables the integration of Astar zkEVM with existing tools, such as Metamask, Etherscan, and Infura. It adds transactions to the pool and interacts with the state using read-only methods.

Additionally, for a software application to interact with the Ethereum blockchain (by reading blockchain data and/or sending transactions to the network), it must connect to an Ethereum node. It works the same way as other nodes such as geth.

Learn how to set up your production zkNode [here](../zk-node/setup-production-node.md).

### Do you support the JSON-RPC EVM query spec? What are the unsupported queries?

All official queries are supported (`eth_*` endpoints). We are working on support from some "extra official endpoints" such as `debug_*`.
