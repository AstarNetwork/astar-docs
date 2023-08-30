# XCM

Astar Network stands as a flexible and highly interoperable decentralized application hub supporting not only WebAssembly and EVM smart contracts, but cross-VM communications (XVM), as well.
Astar commonly utilize XCM to leverage assets from other parachains. Furthermore, XCM finds utility within smart contracts to build purely cross-chain dApps, for deployment on either EVM or Wasm stack, or both.



The most frequently encountered scenario involves users transferring their **DOT** from Polkadot over to **Astar**, and vice-versa. The Astar ecosystem version of **DOT** can then be used for smart contracts, and dApps can integrate it. Another commonly observed application is within DeFi dApps, where XCM enables **DOT** trading without requiring a bridge, and offer asset swaps across multiple chains that would have previously required many steps, requiring only one transaction.

In this section, we will describe the technical details of XCM so that developers can leverage it in their dApps. Do note that Astar/Polkadot and Shiden/Kusama examples are interchangeable as the features are supported on both networks.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
