---
sidebar_position: 1
---

# XCM Overview

## Basic information

One of the killer features of the Dotsama ecosystem is the interconnection of all the parachains. Sharing the same security layer, all parachains have an innate shared platform to securely communicate with one another.

The two core parts of cross-chain communication are:

- Cross-Consensus Message Format (XCM)
- Cross-Consensus Protocols

XCM is just a generic message format, designed to be a language for communication between two systems. As the name suggests, it’s not necessarily only bound to Substrate-based or Dotsama chains - it can be adopted and used by any system using any consensus.

Cross-Consensus Protocols specify how to pass and act on XCM messages. Polkadot provides two protocols at the moment which are supported by both Astar and Shiden Networks:
- Vertical Message Passing (VMP)
- Cross-Chain Message Passing (XCMP)
  - Currently, only XCMP-lite (HRMP) is supported

## External References

Readers and developers are encouraged to go over the official documentation to learn more about XCM and the protocols before diving in on the specific usage of XCM on Astar and Shiden Networks:

- [Learn Cross-chain](https://wiki.polkadot.network/docs/learn-crosschain)
- XCM articles by Gavin Wood: [part 1](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392), [part 2](https://medium.com/polkadot-network/xcm-part-ii-versioning-and-compatibility-b313fc257b83), and [part 3](https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166).
- [XCM format](https://github.com/paritytech/xcm-format) (consult while reading the articles)
- [Sub0 - Getting Started with XCM](https://www.youtube.com/watch?v=5cgq5jOZx9g)
- [How to make a cross-chain transfer](https://www.youtube.com/watch?v=5cgq5jOZx9g)