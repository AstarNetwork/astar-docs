---
sidebar_position: 2
title: zkEVM and EVM Equivalence FAQs
sidebar_label: EVM Equivalence
---

This document compiles some of the frequently asked questions related to the Astar zkEVM's equivalence with EVM. For more details, check out [Polygon zkEVM documentation](https://wiki.polygon.technology/docs/category/zkevm-protocol/).

---

### What is the difference between EVM Compatibility and EVM Equivalence?

The ultimate goal is not **compatibility**. The ultimate goal is **equivalence**. **Solutions that are compatible enable most existing apps to work, but sometimes with code changes**. Additionally, compatibility may lead to the breaking of developer toolings.

**zkEVM strives for EVM Equivalence because it means that most applications, tools, and infrastructure built on Ethereum can immediately port over to Astar zkEVM with limited to no changes needed**. Things are designed to work 100% on day one. This is critical because:

1. **Development teams don't have to make changes to their code**, which could introduce security vulnerabilities.
2. **No code changes are needed**. You don't need additional audits, which saves time and money. 
3. **zkEVM ultimately benefits from the security and decentralization of Ethereum**, since transactions are finalized on Ethereum.
4. Astar zkEVM **benefits from the already vibrant and active Ethereum community**.
5. Allows for **fast user onboarding**, since dApps built on Ethereum are already compatible.

### Why is EVM Equivalence needed?

Ethereum isn’t just a blockchain. It’s a rich ecosystem of smart contracts, developer tools, infrastructure, and wallets. It’s a vibrant community of developers, auditors, and users.

The best way to scale Ethereum is to strive to maintain equivalence with this ecosystem. Astar zkEVM will give users and developers an almost identical experience to Ethereum L1 with significant scalability and user experience improvements.

### What EVM opcodes are different on Astar zkEVM?

The following EVM opcodes are different in Astar zkEVM: **SELFDESTRUCT**, **EXTCODEHASH**, **DIFFICULTY**, **BLOCKHASH**, and **NUMBER**.

### What precompiled smart contract functions does Astar zkEVM support?

The following precompiled contracts are supported in the zkEVM: **ecRecover** and **identity**.

Other precompiled contracts have no effect on the zkEVM state tree and are treated as a `revert`, returning all gas to the previous context and setting the `success` flag to "0".

### Which precompiled contracts are missing in the current zkEVM version?

Astar zkEVM supports all precompiled contracts except **SHA256**, **BLAKE**, and **PAIRINGS**.

### When will we get Type 2 EVM Equivalence?

Currently, Astar zkEVM has Type 3 equivalence with EVM. It will reach Type 2 and full equivalence when all pre-compiled contracts are supported.

### Can you explain the process of rollbacks and reverts in Astar zkEVM? Are they similar to EVM?

The process of rollbacks and reverts is similar to regular EVMs. Whenever there is an error or a condition that triggers a revert, it uses the `REVERT` instruction to stop the execution and then returns an error message.

Rollbacks can also happen sometimes because of an invalid zk-proof (this triggers something new to Astar zkEVM) which would cause the transaction to be aborted and all the state changes to be undone.

### How does the Astar zkEVM handle events and logging?

Astar zkEVM handles events and logging in a similar way to other EVMs, by emitting events and logging them on the blockchain for future reference.

### How similar are Astar zkEVM error messages with Ethereum?

Astar zkEVM has a high level of compatibility with Ethereum errors. You need to bear in mind that Astar zkEVM has more constraints than Ethereum and also uses different concepts (for example, batches instead of blocks). Therefore, it will give more types of errors with more precision (for example, the concept of gas in Astar zkEVM is more broken down).

### Can Chainlink use their token (ERC677) in Astar zkEVM?

You can deploy any smart contract on Astar zkEVM, just like you would on Ethereum, so you can deploy any token. If you want to send the token to Ethereum, the bridge will convert it to an ERC20 token (bi-directional bridge).

The bridge also has **low-level message passing functionality** that can be used to bridge any type of value, including NFTs and other token standards.
