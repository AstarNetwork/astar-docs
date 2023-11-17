# XCM

## Astar's Vision

[The Astar Vision Part 1: Interoperability and Multi-chain dApps](https://medium.com/astar-network/the-astar-vision-part-1-interoperability-and-multi-chain-dapps-30f014087831)

[The Astar Vision Part 2: Asset Diversity Through XCM dApps and Smart Contracts](https://medium.com/astar-network/the-astar-vision-part-2-asset-diversity-through-xcm-dapps-and-smart-contracts-3a689dee5b77)

[The Astar Vision Part 3: The Innovation Hub of Web3.0](https://medium.com/astar-network/the-astar-vision-part-3-the-innovation-hub-of-web3-0-1cace547aba3)


## Basic information

XCM, the Cross(X)-Consensus Message format, is a messaging protocol that enables communication between blockchain networks with different consensus models, not just Polkadot Parachains. XCM supports arbitrary message passing, asset transfer, and remote function calls, facilitating interoperability between different chains. This means that developers can use XCM to build not only Parachain-native dApps, but also true multi-chain dApps that span multiple blockchains.

With XCM, developers can create decentralized applications that execute functions across multiple chains, improving the user experience and creating new opportunities for cooperation and integration with other projects. XCM enables the development of cross-chain DEXs and other applications that require communication across multiple blockchain networks.

While XCM is only one message format supported by the Polkadot network, it offers significant benefits over other message passing systems. For example, XCMP (sometimes known as HRMP) is a highly scalable and protocol-agnostic transport system for horizontal message passing between parachains that supports all arbitrary messages. In contrast, VMP (Vertical Message Passing) involves message passing between the Relay Chain and a parachain, where all message data exists on the Relay Chain. This makes VMP less scalable than XCMP.

## External References

Readers and developers are encouraged to go over the official documentation to learn more about XCM and the protocols, before diving in on the specific usage of XCM on Astar and Shiden Networks:

- [Learn Cross-chain](https://wiki.polkadot.network/docs/learn-crosschain)
- XCM articles by Gavin Wood: [part 1](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392), [part 2](https://medium.com/polkadot-network/xcm-part-ii-versioning-and-compatibility-b313fc257b83), and [part 3](https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166).
- [XCM format](https://github.com/paritytech/xcm-format) (consult while reading the articles)
- [Sub0 - Getting Started with XCM](https://www.youtube.com/watch?v=5cgq5jOZx9g)
- [How to make a cross-chain transfer](https://www.youtube.com/watch?v=5cgq5jOZx9g)

## Get Started

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>

