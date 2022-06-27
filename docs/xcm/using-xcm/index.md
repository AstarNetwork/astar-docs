# XCM

Astar Network is a multi-virtual machine smart contract dApp hub that supports WebAssembly smart contracts and EVM smart contracts. We imagine various dApps within the Astar ecosystem utilizing XCM for their projects to leverage assets from other parachains and create a dApp that is XCM native, from both EVM and Wasm.

XCM is still under heavy development and not all features and possibilities have yet been enabled. The current version of XCM allows us to move assets between chains.

For e.g. a user can move their **DOT** from Polkadot over to **Astar**, and vice-versa. This **DOT** in the Astar ecosystem is interfaced to smart contracts and any application can make use of it. E.g. a DeFi dApp can use this to enable **DOT** trading without having to use a bridge, which makes it much simpler, cheaper, and safer.

In this section, we will describe the technical details for using XCM so that developers can adopt this for their own dApps. Astar/Polkadot and Shiden/Kusama examples are interchangeable as the features are supported on both networks.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
