# XCM

## Astar's Vision

[The Astar Vision Part 1: Interoperability and Multi-chain dApps](https://medium.com/astar-network/the-astar-vision-part-1-interoperability-and-multi-chain-dapps-30f014087831)

[The Astar Vision Part 2: Asset Diversity Through XCM dApps and Smart Contracts](https://medium.com/astar-network/the-astar-vision-part-2-asset-diversity-through-xcm-dapps-and-smart-contracts-3a689dee5b77)

[The Astar Vision Part 3: The Innovation Hub of Web3.0](https://medium.com/astar-network/the-astar-vision-part-3-the-innovation-hub-of-web3-0-1cace547aba3)


## Basic information

XCM, the Cross(X)-Consensus Message format, is a generalized messaging protocol used for communication between blockchain networks of varied consensus models, not exclusive to Polkadot Parachains. XCM facilitates interoperability between different chains by supporting arbitrary message passing, asset transfer, and remote function calls; and can not only be used to build Parachain-native dApps, with no cross-chain functionality at all, but also true multi-chain dApps, that exist in the liminal spaces between blockchains.

Using XCM, developers can create decentralized applications that are able to execute functions across multiple chains, improving the user experience, and creating new opportunities for cooperation and integration with other projects. XCM opens up new possibilities for the development of cross-chain dApps, such as cross-chain DEXs, and future applications that will require communication across multiple blockchain networks.

XCM is only one message format of any number that can be supported by the Polkadot network. XCMP (sometimes known as HRMP) the main transport system for horizontal message passing between parachains, is highly scalable and protocol agnostic, and supports all arbitrary messages. VMP (Vertical Message Passing), on the other hand, is message passing between the Relay Chain itself and a parachain, where all the message data exists on the Relay Chain, including both upward and downward messages. This is far less scalable,

## External References

Readers and developers are encouraged to go over the official documentation to learn more about XCM and the protocols, before diving in on the specific usage of XCM on Astar and Shiden Networks:

- [Learn Cross-chain](https://wiki.polkadot.network/docs/learn-crosschain)
- XCM articles by Gavin Wood: [part 1](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392), [part 2](https://medium.com/polkadot-network/xcm-part-ii-versioning-and-compatibility-b313fc257b83), and [part 3](https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166).
- [XCM format](https://github.com/paritytech/xcm-format) (consult while reading the articles)
- [Sub0 - Getting Started with XCM](https://www.youtube.com/watch?v=5cgq5jOZx9g)
- [How to make a cross-chain transfer](https://www.youtube.com/watch?v=5cgq5jOZx9g)

## Get Started

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
