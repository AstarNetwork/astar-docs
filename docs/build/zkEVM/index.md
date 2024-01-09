import introduction from "/docs/build/img/buildZkEvm.png" 

# Build on Astar zkEVM

<div style={{textAlign: 'center'}}>
    <img src={introduction} style={{width: 1200}} />
</div>

## Overview of Monolithic versus Modular blockchains

Blockchains are monolithic, by nature, and while each are able to perform four critical functions independently: **Consensus, Execution, Data Storage, and Settlement**, it's impossible for any single blockchain to perform all of them *well*. This is where more granular blockchain solutions come in. 

By modularizing the blockchain protocol stack, Layer-2 solutions selectively offload functions normally provided by the Layer-1 to *highly specialized* off-chain workers designed not only to provide an equivalent, but ***superior*** experience compared to that of the underlying chain. 

Modular blockchain solutions are purpose-built to *excel* at performing only the functions they are specifically intended for, such as transaction **Execution** and **Data Availability**, leaving **Settlement** to the underlying Layer-1 and in theory, advancing the challenges of blockchain scaling past those originally imposed by the blockchain trilemma.

## What is Astar zkEVM?

Astar zkEVM is a modular Layer-2 scaling solution leveraging Polygon's zero-knowledge rollups combined with Avail's validium-based storage to facilitate off-chain execution and data availability, with finality guaranteed by Ethereum. 

In coordination with our key partners, Astar zkEVM is well-positioned to take advantage of the extensive developer base and well-established toolset existing in the Ethereum ecosystem, and boasts the following key features:

- **Higher TPS than Ethereum or Astar Substrate EVM** - Leveraging zk rollup architecture, transactions are parallelized on Layer-2 and submitted on-chain to Layer-1 in batches, supercharging web3 games and DeFi applications requiring high performance.
- **Some of the lowest transaction fees in the Ethereum ecosystem** - Off-chain transaction batching and data availability provides some of the lowest costs for transacting in the Ethereum ecosystem.
- **Full EVM-equivalence** - Not only EVM compatibility; Equivalence. Smart contracts that work on Ethereum also work on Astar zkEVM. See the [smart contract section](/docs/build/zkEVM/smart-contracts/) for more information.
- **Native Account Abstraction** - The Astar zkEVM provides native features designed to revolutionize the end-user experience, and make it seamless. See the [Account Abstraction section](/docs/build/zkEVM/integrations/account-abstraction/) to learn more about how to refine the end-user experience.
- **Recognized Partners** - Established names and brands that developers trust power the Astar zkEVM. See the [integrations section](/docs/build/zkEVM/integrations/) for more information about 3rd party service providers.
- **Interoperability and Exposure** - With Astar zkEVM, we are supporting interoperability between the Ethereum, Polkadot, and Polygon ecosystems, uniting communities through a common vision.
- **Established Tools and Libraries** - Compatible with tools and libraries developers already know how to use, such as Remix, Hardhat, and Open Zeppelin. 

## Section Overview

The following sections walk through the process of setting up a development environment and introduce common tools and partner services useful for powering highly scalable dApps and seamless user onboarding experiences on the Astar zkEVM.

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
