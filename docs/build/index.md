import build from '/docs/build/img/build.png'

# Build on Astar

<div style={{textAlign: 'center'}}>
  <img src={build} caption="Documentation of all the resources builders need in order to start testing, deploying and interacting with smart contracts on the Astar network" style={{width: 1200}} />
  </div>

## Why build on Astar?

Astar is an interoperable blockchain platform for the Polkadot and Ethereum ecosystems supporting both Wasm and EVM smart contracts. Astar provides native access to Polkadot and Ethereum through its parachain slot and Layer 2 scaling solution, while also offering bridges to other major blockchain ecosystems.

## Build2Earn
Astar network's innovative Build2Earn program allows developers to earn a basic income while they build out their products and communities. Users are able to support projects by staking on them, which adds to the passive income developers earn and forms the basis of an *unstoppable grant*. Build2Earn encourages projects to stand out and provide value directly to end-users. See the [dApp staking section](/docs/build/dapp-staking/) for more information.

## Wasm smart contracts
See the [Wasm chapter](/docs/build/wasm) for more information.

## EVM smart contracts
Solidity developers feel right at home building on Astar in both the Polkadot and Ethereum ecosystems. See the [EVM](/docs/build/evm) or [zkEVM](/docs/build/zkEVM) sections for more information.

## Secured by Polkadot and Ethereum
Polkadot and Ethereum networks provide some of the best security guarantees in the web3 industry.

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
