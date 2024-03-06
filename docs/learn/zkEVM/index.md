---
title: Astar zkEVM
---

import Figure from '/src/components/figure'

# Background

Before we can describe what the zkEVM is and how it works, we need to explain a few background concepts. Layer-2 networks on Ethereum are a bit like Parachains on the Polkadot network, but here's how they differ:

The Substrate framework Polkadot is built with is *modular*, meaning developers are able to customize the features supported by their parachains; often choosing only those required to achieve the goals of their applications. 

Although parachains are sovereign networks, they also benefit from the shared security of Polkadot as a whole, allowing them to interoperate with one another seamlessly through a separate, unified mechanism of consensus and finality. 

This is unlike Ethereum, where Layer-2 networks, although sharing a common method of finality, do not share a common method of consensus (ie: no shared Sequencers), so cross-chain interoperability and fast withdrawals to other networks are limited.

## What do we mean by Monolithic versus Modular blockchains?

Layer-1 Blockchains are monolithic by nature and while each are able to perform four critical functions independently: **achieving Consensus amid disputes, Executing transactions, Storing data, and performing Settlement (Finality)** it's impossible for any single blockchain to perform them all *well* without making tradeoffs and running into theoretical limitations. This is where more granular blockchain solutions come in.

By modularizing the blockchain protocol stack, Layer-2 solutions selectively offload functions normally provided by the Layer-1 to *highly specialized* off-chain workers designed not only to provide an equivalent, but ***superior*** experience compared to that of the underlying chain. 

Modular blockchain solutions are purpose-built to *excel* at performing only the functions they are specifically intended for, such as transaction **Execution** and **Data Availability**, leaving **Settlement** to the underlying Layer-1, theoretically advancing the challenges of blockchain scaling past those originally imposed by the *[blockchain trilemma](https://coinmarketcap.com/alexandria/glossary/blockchain-trilemma)*. 

## So, what is Astar zkEVM? 

Astar zkEVM is a Layer-2 scaling solution leveraging Polygon's zero-knowledge technology and Aggregation Layer (AggLayer) to facilitate off-chain execution and data availability, otherwise known as a **Validium**, with finality guaranteed by Ethereum. This approach synthesizes the benefits of both fully integrated (monolithic) as well modular architectures, combining the best features of each. 

Astar zkEVM serves as a versatile solution for global enterprises, accelerating the adoption of blockchain technology not only in Japan, but on a global scale. 

In coordination with our key partners, Astar zkEVM is well-positioned to take advantage of the extensive developer base and well-established toolset existing in the Ethereum ecosystem, and boasts the following key features:

- **Some of the lowest transaction fees in the Ethereum ecosystem** - Off-chain transaction batching and data availability provides some of the lowest costs for transacting in the Ethereum ecosystem.
- **Full EVM-equivalence** - Smart contracts that work on Ethereum also work on Astar zkEVM. See the [smart contract section](/docs/build/zkEVM/smart-contracts/) for more technical information.
- **Native Account Abstraction** - The Astar zkEVM provides native features designed to revolutionize the end-user experience and make it seamless. See the [Account Abstraction section](/docs/build/zkEVM/integrations/account-abstraction/) for more technical information about how to refine the end-user experience.
- **Top-Tier Infrastructure Integrations** - Established names and brands that developers trust power the Astar zkEVM. See the [integrations section](/docs/build/zkEVM/integrations/) for more information about our 3rd party service providers.
- **Interoperability and Exposure** - With Astar zkEVM, we are supporting interoperability between the Ethereum, Polkadot, and Polygon ecosystems, uniting communities through a common vision.
- **Established Tools and Libraries** - The zkEVM is compatible with tools and libraries developers already know how to use, such as Remix, Hardhat, and Open Zeppelin. 

For more general information, check out the zkEVM [FAQ](/docs/learn/zkEVM/faq.md) page.