# Build on Astar

## Why Build on Astar
Astar is the largest smart contract platform in the Polkadot ecosystem, supporting both Wasm and EVM. While providing native access to the Polkadot ecosystem through it's parachain slot, Astar also has bridges into other major ecosystems, including [Ethereum](https://cbridge.celer.network/#/transfer), [BSC](https://cbridge.celer.network/#/transfer), Cosmos, Polygon, and more. Through the #Build2Earn program, Astar offers a basic income to dApps through inflation, and provides direct funding to projects through the Astar Incubation Program.

## WASM Smart Contracts
WASM smart contracts empower developers. Developers can build complex dApps, use familiar languages, and directly access the runtime to an extent. Developers can build dApps that is not possible with EVM. [Wasm chapter.](/docs/build/wasm)

## EVM Smart contracts
EVM is still the most popular smart contract platform and Astar provides all infrastructure for it. Any Solidity developer would feel at home using EVM on Astar. [EVM chapter.](/docs/build/evm)

## dApps Staking (#Build2Earn)
In Astar Network, users can directly support projects by staking on them, which will become a passive income for the developers. dApps Staking encourages projects to stand out and provide value directly to the end-users. [See also chapter...](/docs/dapp-staking/#dapp-staking--web3)

## XVM - Cross Virtual Machine
Cross Virtual Machine allows the developers to call smart contracts from one VM to another (e.g. WASM to EVM) and build unique features. Only available on Astar.

## Secured by Polkadot
The Polkadot Relay chain provides the best blockchain security in the whole industry. 

## Cross Chain Connectivity
Astar is connected with plethora of other blockchains/parachains in Polkadot ecosystem through the cross chain message protocol XCMP.

## Powered by Substrate
Astar is built with Substrate components which, among others, provide: Forkless Update, Cross-Language Support with WebAssembly, Light-Client Friendly, Deterministic Finality, Seamless Integration

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```