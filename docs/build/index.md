---
sidebar_position: 2
---
# Build on Astar
![Documentation of all the resources builders need in order to start testing, deploying and interacting with smart contracts on the Astar network](assets/build.png)


## Why build on Astar?

Astar Network is multichain-native and supports both EVM and WebAssembly (Wasm) virtual machine environments, offering the ultimate flexibility for smart contract deployments, with interoperability powered by Polkadot and an innovative cross-virtual machine (XVM) technology.

Being multichain-native means developers are able to use trustless interoperability protocols to unleash the full potential of web3 and build uniquely innovative solutions that simply can’t be replicated in any other environment.

As one of the highest TVL parachains on Polkadot, Astar offers deep liquidity for a superior user experience, an abundance of on/offramps and communications channels to other chains via bridges, and support for the native token on the most popular centralized exchanges.

Creators are incentivized to build and deploy on Astar Network by a unique Build2Earn program, which rewards innovation while growing the ecosystem overall. It allows innovators to overcome typical startup challenges associated with development of decentralized applications and other web3-based solutions, and helps kickstart organic community growth.

## Wasm smart contracts
Wasm smart contracts empower developers and bridge a gap between blockchain and traditional software development, offering greater flexibility than their EVM counterparts. Wasm provides direct access to the runtime in a number of ways, so developers can build dApps that aren't possible on the Ethereum Virtual Machine. Any programming language that compiles to Wasm may eventually be supported, such as Rust, making Astar network a versatile environment for deployment of all kinds of smart contracts. See the [Wasm chapter](/docs/build/wasm) for more information.

## EVM smart contracts
Solidity developers will feel right at home building on Astar EVM, as it provides an equivalent environment, and simultaneously allows them the flexibility to fragment and offload smart contract logic selectively to the Wasm Virtual Machine for applications that may have different operating requirements. See the [EVM chapter.](/docs/build/evm) for more information.

## Build2Earn
Astar network's innovative Build2Earn program allows developers to overcome common startup challenges while building out their products and communities. Network users are able to support their favorite projects through staking, which adds to the passive income developers earn. Build2Earn encourages projects to stand out and provide value directly to end-users. See the [dApp staking](/docs/dapp-staking/#dapp-staking--web3) section for more information.

## XVM - The cross virtual machine
The Cross Virtual Machine allows developers to make smart contract calls from one VM to another (e.g. Wasm to EVM), and `XVM`, the innovative protocol for building cross-VM dApps, is *only* available on Astar network.

## Secured by Polkadot
The Polkadot Relay Chain provides the best security for Layer 1 blockchains in the industry, and facilitates creation of true multi-chain smart contracts able to communicate trustlessly with one another across chains.

## Cross chain connectivity
Astar network is connected to the Relay Chain and a variety of other parachains in the Polkadot ecosystem through the message transport system, XCMP, using vertical channels (VMP + DMP) to the Relay Chain, and parachain-parachain communication operating horizontally, referred to as HRMP channels.

## Powered by Substrate
Astar is built with Substrate, a framework for building custom blockchain solutions more intuitively using the Rust programming language. Substrate's modular architecture makes it easy for developers to utilize only the components they need to support their networks and decentralized applications such as consensus, smart contracts, and storage, and reduces the need to focus on low-level implementation details. 

Some benefits of using Subtrate to build blockchain networks include: forkless upgrades, cross-language compatibility using WebAssemby, deterministic finality that is light client-friendly, and seamless integration with other blockchains.

Polkadot itself is reliant on the Substrate framework, and use of which is similarly fundamental for blockchains such as Astar network that wish to easily interface with the Polkadot network directly, without the need for intermediaries.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
