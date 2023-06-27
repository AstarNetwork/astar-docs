---
sidebar_position: 9
---

# AstarBase

A few important facts about the Astar ecosystem:

- The majority of crowdloan participants used their Polkadot native addresses (ss58 format), and also make up the majority of dApp staking participants.
- Although Astar has built a Wasm smart contract platform, most dApps still use the Ethereum Virtual Machine (EVM) and address format (H160), native to MetaMask accounts.
- DApp staking, which simultaneously provides a basic income for developers, and staking mechanism for users, is a system which both dApp developers and users benefit from.

AstarBase aims to:

- Bring more users to EVM dApps;
- Create more opportunities for end users to participate in the Astar ecosystem;
- Allow EVM dApps to attract attention and reward users, even though their funds may be illiquid, and locked in dApp Staking;
- Encourage users to stake and use the dApp Staking mechanism.

AstarBase is an on-chain EVM database, which contains a mapping between a user's EVM, and Astar Native ss58 address. Such mapping on its own does not bring any value to ecosystem projects, since anyone can register an address pair, but the `checkStakerStatus()` call, which checks to see if the ss58 address of the pair is an active staker, does. 
The AstarBase contracts are available on each of the Shibuya/Shiden/Astar Networks, and deployment addresses can be found in the [AstarBase github repository] (https://github.com/AstarNetwork/astarbase/blob/main/contract/deployment-info.md).

There are 3 functions that can be used to interact with AstarBase.

- `isRegistered()` checks to see if the given address is registered in AstarBase

```
function isRegistered(address evmAddress) 
    external view 
    returns (bool);
```

- `checkStakerStatus()` Checks to see if a pair of addresses (ss58, evm) is an active staker in dApp staking, and returns the staked amount

```
function checkStakerStatus(address evmAddress)
    external view
    returns (uint128);
```

`checkStakerStatusOnContract()` Checks to see if a pair of addresses (ss58, evm) is an active staker in dApp staking on the specified contract, and returns the staked amount

```
function checkStakerStatusOnContract(address evmAddress, address stakingContract)
    external view
    returns (uint128);
```

The interface file `IAstarBase.sol` can be found in the [ERC20 example] (https://github.com/AstarNetwork/astarbase/tree/main/contract/example).

## How to Use AstarBase From the Client Side

The `abi` for the contract can be found in [AstarBase Github repository] (https://github.com/AstarNetwork/astarbase/tree/main/public/config).

The following is an example usage of Astarbase from the client side:

```js
if (metamaskIsInstalled) {
  Web3EthContract.setProvider(ethereum);
  try {
    
    const smartContract = new Web3EthContract(
      abi,
      CONFIG.ASTARBASE_ADDRESS
    );

    const stakerStatus = await smartContract.methods.checkStakerStatus(user).call();
    const isRegistered = await smartContract.methods.isRegistered(user).call();

    return isRegistered && stakerStatus > 0;
  } catch (err) {
    console.log(err);
    return false;
  }
} else {
  console.log('Install Metamask.');
}
```

### How to Determine the Native Address From an H160 Address

To read the address mapping perform the following:

```js
const abi = [
  "function addressMap(address evmAddress) public view returns (bytes native)"
];
const contract = new ethers.Contract(providerRPC.astarPass.contract, abi, provider);
const native = await contract.addressMap(evmAddress);
console.log(native);
```

The complete script to read the address mapping is in the example folder on [Github repo] (https://github.com/AstarNetwork/astarbase/tree/main/contract/example).

## How to Use AstarBase From the Contract Side

The following is an example usage for when an EVM contract wants to check dApp staking status for an H160 address:

```sol
import "./IAstarBase.sol"
contract A {
    // Deployed on Shibuya
    AstarBase public ASTARBASE = AstarBase(0xF183f51D3E8dfb2513c15B046F848D4a68bd3F5D);
    ...
    
    function stakedAmount(address user) private view returns (uint128) {

        // The returned value from checkStakerStatus() call is the staked amount
        return ASTARBASE.checkStakerStatus(user);
    }
}
```

## Example Use Case: Discount Price on an NFT

In the [minting-dapp Github repository] (https://github.com/AstarNetwork/minting-dapp/blob/main/contract/contracts/ShidenPass_flat.sol) you will find an example NFT minting dApp, which uses AstarBase to mint a free NFT for active dApp stakers. The same example could easily be adapted to issue a discount price instead of a free NFT.

## Example Use Case: Permissioned Claim for an ERC20 Airdrop

A new project coming to Astar ecosystem would like to attract users by issuing an ERC20 token airdrop, but they want to qualify users who are active participants in the ecosystem only, not one-time users who will disappear after the airdrop is claimed. AstarBase can be used to create a permissioned airdrop claim, and make it available to dApp stakers, only.

`if ASTARBASE.checkStakerStatus(user) > 0;`

## Example Use Case: Rewards for Participants

A project is using dApp staking as basic income, and would like to reward staking participants who are specifically staking on their dApp. Since those stakers use their native Astar address (s58),and the project is based on EVM, there is no way to issue EVM-based rewards. Astarbase, though, gives them the opportunity to do so, as long as they are registered for an AstarPass.

`if ASTARBASE.checkStakerStatusOnContract(address evmAddress, address stakingContract) > 0;`

See the [example ERC20 contract] (https://github.com/AstarNetwork/astarbase/tree/main/contract/example) on Github, which mints rewards only to stakers of a specified contract. 

## Example Use Case: Bot Protection

There is no absolute protection against bots, but at the very least, their activity can be disincentivized. In this example, the registered accounts will need to have the minimum staked amount in dApp staking, and there is also a configurable unbonding period. This will eliminate a bots ability to create an unlimited number of addresses, in order to claim rewards or buy NFTs. By using AstarBase, bots are forced to stake actively with the minimum amount, in the event they want to reap your project's rewards.

## ECDSA Address Registration

Besides the ss58 address scheme, [ECDSA] (https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) addresses are also supported.