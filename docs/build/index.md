# Build on Astar

## Why Build on Astar
Astar is the most flexible and interoperable decentralized application (dApp) platform in the Polkadot ecosystem, supporting both Wasm and EVM smart contracts, and hybrid Cross-VM dApps able to call into one another. Astar network provides native access to the Polkadot ecosystem through its parachain slot, and asset bridges and general message passing protocols integrated with the ecosystem  provide routes to other major blockchains, including [Ethereum](https://cbridge.celer.network/#/transfer), [BSC](https://cbridge.celer.network/#/transfer), Cosmos, Polygon, and more. Astar network's innovative dApp staking program allows developers to earn a basic income while they build out their products and communities; and Foundation, in coordination with the community, may also provide direct funding to projects through a variety of ecosystem incubation initiatives, such as #MVP2Earn.

## Wasm Smart Contracts
Wasm smart contracts empower developers, and bridge the gap between Web2 and Web3 development, allowing them to build complex dApps with tools and languages they already know. Wasm provides direct access to the runtime in a number of ways, so developers can build dApps that aren't possible on the Ethereum Virtual Machine. Any programming language that compiles to Wasm is supported, making Astar network a secure and versatile environment for deployment of highly-optimized smart contracts. See the [Wasm chapter](/docs/build/wasm) for more information.

## EVM Smart contracts
Solidity developers will feel right at home building on Astar EVM, as it provides an equivalent environment, but simultaneously allows them to fragment smart contracts and offload logic selectively to the Wasm Virtual Machine for applications that may demand higher performance, security, or lower operating costs. See the [EVM chapter.](/docs/build/evm) for more information.

## DApp Staking (#Build2Earn)
On Astar Network, users are able to support projects by staking on them, which adds to the passive income developers earn. DApp staking encourages projects to stand out and provide value directly to the end-users. See the [dApp staking](/docs/dapp-staking/#dapp-staking--web3) section for more information.

## XVM - The Cross Virtual Machine
The Cross Virtual Machine allows developers to call smart contracts from one VM to another (e.g. Wasm to EVM), and `XVM`, the innovative protocol that makes creation of these hybrid cross-VM dApps possible, is *only* available on Astar network.

## Secured by Polkadot
The Polkadot Relay Chain provides the best security for Layer 1 blockchains in the industry, and facilitates creation of true multi-chain smart contracts able to communicate trustlessly with one another across chains.

## Cross Chain Connectivity
Astar network is connected to the Relay Chain and a variety of other parachains in the Polkadot ecosystem through the message transport system, XCMP, using vertical channels (VMP + DMP) to the Relay Chain, and parachain-parachain communication operating horizontally, often referred to as HRMP channels.

## Powered by Substrate
Astar is built with Substrate, a framework for building custom blockchain solutions more intuitively using the Rust programming language. Substrate's modular architecture makes it easy for developers to utilize only the components they need to support their networks and decentralized applications such as consensus, smart contracts, and storage, and reduces the need to focus on low-level implementation details. 

Some benefits of using Subtrate to build blockchain networks include: forkless upgrades, cross-language compatibility using WebAssemby, deterministic finality that is light client-friendly, and seamless integration with other blockchains.

Polkadot itself is reliant on the Substrate framework, and use of which is similarly fundamental for blockchains such as Astar network that wish to easily interface with the Polkadot network directly, without the need for intermediaries.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```