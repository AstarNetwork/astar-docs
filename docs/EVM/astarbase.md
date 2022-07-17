---
sidebar_position: 4
---

# AstarBase

There are couple of facts for Astar ecosystem:

- Majority of the crowdloan participants used their Polkadot native addresses (ss58) and these users are the majority of dApps-Staking participants.
- While Astar is building multi virtual Machine future, today most of the dApps are using Ethereum Virtual Machine (EVM) which uses Ethereum address space, usually referred as MetaMask accounts or H160.
- Astar's unique feature is dApps Staking which provides basic income for developers and a staking mechanism for the users. Both dApps developers and users benefit from it.

The goals of AstarBase product is:

- Bring more users to EVM dApps;
- Create more opportunities for end users to participate in the Astar ecosystem;
- Enable EVM dApps to attract and reward users even though they have majority of their funds staked on dApps Staking;
- Encourage users to stake and use dApps Staking mechanism.

AstarBase is an on-chain EVM database. AstarBase contains a mapping of users's EVM and Native ss58 address. Such mapping on it's own does not bring any benefit to the projects since anyone can register this address pair. What brings the value is the call `checkStakerStatus()` which checks if the ss58 address of the pair is an active staker. The AstarBase contracts are available on each of Shibuya/Shiden/Astar Networks. The deploy addresses can be found in the [AstarBase github repository](https://github.com/AstarNetwork/astarbase/blob/main/contract/deployment-info.md).

There are 3 interface functions that can be used.

- `isRegistered()` checks if the given address was registered in AstarBase

```
function isRegistered(address evmAddress) 
    external view 
    returns (bool);
```

- `checkStakerStatus()` Checks if pair of addresses (ss58, evm) is an active staker in dApps-staking and returns staked amount

```
function checkStakerStatus(address evmAddress)
    external view
    returns (uint128);
```

`checkStakerStatusOnContract()` Checks if pair of addresses (ss58, evm) is an active staker in dApps-staking on the specified contract and returns staked amount

```
function checkStakerStatusOnContract(address evmAddress, address stakingContract)
    external view
    returns (uint128);
```

The interface file `IAstarBase.sol` can be found in the [ERC20 example](https://github.com/AstarNetwork/astarbase/tree/main/contract/example).

## Use from Client side

The `abi` for the contract can be found in [AstarBase Github repository](https://github.com/AstarNetwork/astarbase/tree/main/public/config).
The following is an example usage of the Astarbase from the client side.

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

### Read native address for H160 address

To read the address mapping do following:

```js
const abi = [
  "function addressMap(address evmAddress) public view returns (bytes native)"
];
const contract = new ethers.Contract(providerRPC.astarPass.contract, abi, provider);
const native = await contract.addressMap(evmAddress);
console.log(native);
```

The complete script to read address mapping is in the example folder on [Github repo](https://github.com/AstarNetwork/astarbase/tree/main/contract/example).

## Use from Contract side

The following is an example usage when EVM contract wants to check staker status for H160 address

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

## Example use case: NFT discount price

In the [minting-dapp Github repository](https://github.com/AstarNetwork/minting-dapp/blob/main/contract/contracts/ShidenPass_flat.sol) you will find example NFT minting dApp which uses AstarBase to mint free NFT for active dApp-stakers. The same example could be easily adapted to give discount price instead of free NFT.

## Example use case: ERC20 airdrop claim

A new project coming to Astar ecosystem would like to attract users by ERC20 token airdrop. But they want users who are active participants in the ecosystem and not one-time users who will disappear once the airdrop is claimed. AstarBase can be used to allow airdrop claim only to registered users.

`if ASTARBASE.checkStakerStatus(user) > 0;`

## Example use case: Rewards for stakers

A project is using dApps-staking as basic income but would also like to reward stakers who are staking on them. Since those stakes use their native Astar address (s58) for staking and this project is based on EVM, there was no way to give EVM based rewards. Astarbase gives the possibility to reward such users if they are registered in AstarBase

`if ASTARBASE.checkStakerStatusOnContract(address evmAddress, address stakingContract) > 0;`

See the [example ERC20 contract](https://github.com/AstarNetwork/astarbase/tree/main/contract/example) on the Github which allows minting only for the specified contract stakers.

## Example use case: Bot protection

There is no absolute protection against bots, but at least their usage might be financially questionable. The registered accounts which are also stakers will need to have the minimum staked amount for the dApps-staking and there is also unbound period. This will limit the bots creating unlimited number of addresses to claim the rewards or buy your NFTs. By using AstarBase you force bots to use active stakers' address in case they want to reap your project's rewards.

## ECDSA address registration

Besides SS58 address scheme, the [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) addresses are also supported.
