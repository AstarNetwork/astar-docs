# XCM

Astar Network is a flexible and highly interoperable decentralized application hub supporting not only WebAssembly and EVM smart contracts, but cross-VM communications (XVM), as well. DApps within the Astar ecosystem commonly utilize XCM to leverage assets from other parachains, however, XCM can also be used as a smart contract development language to build purely native dApps, for deployment on either Astar EVM or Wasm virtual machines, or both, allowing developers to build true multi-chain dApps. 


XCM is still under heavy development and not all features have yet been enabled. Commonly, XCM facilitates the transfer of assets between parachains on Polkadot.

For example, users are able to move their **DOT** from Polkadot over to **Astar**, and vice-versa. The Astar ecosystem version of **DOT** can then be used for smart contracts, or dApps can integrate it. As another example, a DeFi dApp can use XCM to enable **DOT** trading without requiring a bridge, and offer asset swaps across multiple chains that would have previously required many steps, with only one or two clicks.

In this section, we will describe the technical details surrounding the use of XCM so that developers can adopt it for use in their dApps. Do note Astar/Polkadot and Shiden/Kusama examples are interchangeable as the features are supported on both networks.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
