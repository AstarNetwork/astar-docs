# XCM

Astar Network is a modular and flexible decentralized application (dApp) platform that supports not only WebAssembly and EVM smart contracts, but cross-VM communications (XVM), as well. dApps within the Astar ecosystem are able to utilize XCM to leverage assets from other parachains, but it can also be used to build purely Native dApps, which can be deployed on either EVM or Wasm virtual machines.



XCM is still under heavy development and not all features and capabilities have yet been enabled. The current version of XCM allows assets to move between chains.

For example, a user can move their **DOT** from Polkadot over to **Astar**, and vice-versa. This **DOT** in the Astar ecosystem can be used for smart contracts, and applications are able to integrate it should they choose to. Or as another example, a DeFi dApp can use it to enable **DOT** trading without having to use a bridge, which makes it much simpler, safer, and cost less.

In this section, we will describe technical details surrounding the use of XCM so that developers can adopt it for use in their dApps. Astar/Polkadot and Shiden/Kusama examples are interchangeable as the features are supported on both networks.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
