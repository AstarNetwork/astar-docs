import introduction from "/docs/build/img/buildZkEvm.png" 

# Build on Astar zkEVM

<div style={{textAlign: 'center'}}>
    <img src={introduction} style={{width: 1200}} />
</div>

## What is Astar zkEVM?

Astar zkEVM is an Ethereum Layer-2 scaling solution leveraging Polygon's Chain Development Kit and cutting edge zero-knowledge cryptography to enable off-chain transaction execution, with finality and security guarantees provided by Ethereum. In coordination with our key partners, Astar zkEVM is well-positioned to take advantage of the extensive developer base and well-established toolset existing in the Ethereum ecosystem, and boasts the following key features:

- **Lower Transaction Fees compared to Ethereum** - Due to the transaction batching, as explained above.
- **Full EVM-equivalence** - Not only EVM compatibility; Equivalence. Smart contracts that work on Ethereum also work on Astar zkEVM. See the [smart contract section](/docs/build/zkEVM/smart-contracts/) for more information.
- **Native Account Abstraction** - The Astar zkEVM provides native features designed to revolutionize the end-user experience, and make it seamless. See the [Account Abstraction section](/docs/build/zkEVM/integrations/account-abstraction/) to learn more about how to refine the end-user experience.
- **Recognized Partners** - Established names and brands that developers trust power the Astar zkEVM. See the [integrations section](/docs/build/zkEVM/integrations/) for more information about 3rd party service providers.
- **Interoperability and Exposure** - With Astar zkEVM, we are supporting interoperability between the Ethereum and Polkadot ecosystems, uniting communities, and empowering web3 accessibility through a common Multichain vision.
- **Established Tools and Libraries** - Compatible with the tools web3 developers already know how to use, such as Remix, Hardhat, and Open Zeppelin. 

## Section Overview

The following sections walk through the process of setting up a development environment and introduce common tools and partner services useful for powering highly scalable dApps and seamless user onboarding experiences on the Astar zkEVM.

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
