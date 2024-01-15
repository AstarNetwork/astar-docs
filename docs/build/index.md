import build from '/docs/build/img/build.png'

# Build on Astar

<div style={{textAlign: 'center'}}>
  <img src={build} caption="Documentation of all the resources builders need in order to start testing, deploying and interacting with smart contracts on the Astar network" style={{width: 1200}} />
  </div>

## Why build on Astar?

Astar is a interoperable smart contract platform providing native access to both the Polkadot and Ethereum blockchain ecosystems and supporting both Wasm and EVM environments on its Layer 2 scaling and Parachain-based networks. 

## Astar Network Key Features:

✅ Stable & scalable blockchain APIs <br/>
✅ Flexibility to deploy dApps on the platform and ecosystem that best suits their needs, while retaining interoperability with others. <br/> 
✅ Familiar Tools and Libraries (Remix, Hardhat, Open Zeppelin) <br/>
✅ Social & biometric login and recovery (Google, x.com, LINE, Kakao, [Banana](/docs/build/integrations/account-abstraction/banana/)) <br/>
✅ Gasless payments ([Gelato](/docs/build/zkEVM/integrations/account-abstraction/relayers/gelato-relay), [Safe](/docs/build/zkEVM/integrations/account-abstraction/safe--aa/))<br/>
✅ NFT checkout with credit/debit cards <br/>
✅ Onramp / offramp solutions (Banxa, [Transak](/docs/build/integrations/wallets/transak)) <br/>
✅ Interoperability between dApps & other blockchains ([The Graph](/docs/build/integrations/indexers/thegraph), [LayerZero](/docs/build/zkEVM/integrations/bridges-relays/AstarEVM-zkEVM)) <br/>
✅ Global Standard NFT Marketplace & DEX (Dew, Rarible, Quickswap) <br/>

## Build2Earn
Astar network's innovative Build2Earn program allows developers to earn a basic income while they build out their products and communities. Users are able to support projects by staking on them, which adds to the passive income developers earn and forms the basis of an *unstoppable grant*. Build2Earn encourages projects to stand out and provide value directly to end-users. See the [dApp staking section](/docs/use/dapp-staking/) for more information.

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
