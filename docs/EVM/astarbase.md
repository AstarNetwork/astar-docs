---
sidebar_position: 4
---

# AstarBase

There are few facts to know about the Astar ecosystem:

- The majority of crowdloan participants used their Polkadot native addresses (ss58 format), and are the majority of dApp staking participants.
- While Astar is building a multi-Virtual Machine capable platform, most dApps today are using the Ethereum Virtual Machine (EVM), which uses Ethereum address space, usually referred to as a MetaMask, or H160 format account.
- DApp staking, which simultaneaously provides a basic income for developers, and staking mechanism for users, is a system which both dApp developers and users benefit from.

The goals of AstarBase is:

- To bring more users to EVM dApps;
- To create more opportunities for end users to participate in the Astar ecosystem;
- To enable EVM dApps to attract attention and reward users, even though their funds may be illiquid, and locked in dApp Staking;
- To encourage users to stake and use the dApp Staking mechanism.

AstarBase is an on-chain EVM database, which contains a mapping between a user's EVM, and Astar Native ss58 address. Such mapping on its own does not bring any value to ecosystem projects, since anyone can register an address pair, but the `checkStakerStatus()` call, which checks to see if the ss58 address of the pair is an active staker, does. 
The AstarBase contracts are available on each of the Shibuya/Shiden/Astar Networks, and deployment addresses can be found in the [AstarBase github repository](https://github.com/AstarNetwork/astarbase/blob/main/contract/deployment-info.md).

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

The interface file `IAstarBase.sol` can be found in the [ERC20 example](https://github.com/AstarNetwork/astarbase/tree/main/contract/example).

## How to Use from the Client side

The `abi` for the contract can be found in [AstarBase Github repository](https://github.com/AstarNetwork/astarbase/tree/main/public/config).
The following is an example detailing how to use Astarbase from the client side.

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

### How to Determine the Native address from an H160 address

To read the address mapping perform the following:

```js
const abi = [
  "function addressMap(address evmAddress) public view returns (bytes native)"
];
const contract = new ethers.Contract(providerRPC.astarPass.contract, abi, provider);
const native = await contract.addressMap(evmAddress);
console.log(native);
```

The complete script to read the address mapping is in the example folder on [Github repo](https://github.com/AstarNetwork/astarbase/tree/main/contract/example).

## How to use from the Contract side

The following is an example usage for when an EVM contract wants to check dApp staking status for an H160 address

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

## Example use case: Discount price for NFT

In the [minting-dapp Github repository](https://github.com/AstarNetwork/minting-dapp/blob/main/contract/contracts/ShidenPass_flat.sol) you will find an example NFT minting dApp, which uses AstarBase to mint a free NFT for active dApp stakers. The same example could easily be adapted to issue a discount price instead of free NFT.

## Example use case: Permissioned claim for ERC20 airdrop

A new project coming to Astar ecosystem would like to attract users by issuing an ERC20 token airdrop, but they want to quialify users who are active participants in the ecosystem, only, and not one-time users who will disappear once the airdrop is claimed. AstarBase can be used to permission the airdrop claim, and make it available to registered users, only.

`if ASTARBASE.checkStakerStatus(user) > 0;`

## Example use case: Rewards for participants

A project is using dApp staking as basic income, and would like to reward dApp staking participants who are staking on them. Since those stakers use their native Astar address (s58),and the project is based on EVM, there is no way to issue EVM-based rewards. Astarbase, though, gives them the opportunity to do so, as long as they are registered for an AstarPass.

`if ASTARBASE.checkStakerStatusOnContract(address evmAddress, address stakingContract) > 0;`

See the [example ERC20 contract](https://github.com/AstarNetwork/astarbase/tree/main/contract/example) on Github, which mints rewards only to stakers of a specified contract. 

## Example use case: Bot protection

There is no absolute protection against bots, but at the very least, their activity can be disincentivized. In this example, the registered accounts will need to have the minimum staked amount for dApp staking, and there is also a configurable unbonding period. This will limit a bots ability to create an unlimited number of addresses, in order to claim rewards or buy NFTs. By using AstarBase, bots are forced to stake actively with the minimum amount, in the event they want to reap your project's rewards.

## ECDSA address registration

Besides the ss58 address scheme, [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) addresses are also supported.
