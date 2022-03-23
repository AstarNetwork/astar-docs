---
sidebar_position: 1
---

# Precompiles

A precompile just means a common functionality for smart contracts which has been compiled, so Ethereum nodes can run this efficiently. From a contract's perspective this is just a single command like an opcode.
The Frontier EVM used in Astar provides several useful precompiled contracts. These contracts are implemented in the platform itself as a native implementations. The precompiled contracts from address `0x01` through` 0x08` are the same as those in Ethereum. Astar additionally implements precompiled contracts starting from `0x5001`, to support new Astar features.

## Ethereum Native Precompiles
| Precompile | Address |
| -------- | -------- |
| ECRecover     | 0x0000000000000000000000000000000000000001     |
| Sha256     | 0x0000000000000000000000000000000000000002     |
| Ripemd160     | 0x0000000000000000000000000000000000000003     |
| Identity     | 0x0000000000000000000000000000000000000004     |
| Modexp     | 0x0000000000000000000000000000000000000005     |
| Bn128Add     | 0x0000000000000000000000000000000000000006     |
| Bn128Mul     | 0x0000000000000000000000000000000000000007     |
| Bn128Pairing     | 0x0000000000000000000000000000000000000008     |

## Astar Specific Precompiles
| Precompile | Address |
| -------- | -------- |
| DappsStaking     | 0x0000000000000000000000000000000000005001     |
| Sr25519     | 0x0000000000000000000000000000000000005002     |

The interface descriptions for these precompiles can be found in the [astar-frame repo](https://github.com/AstarNetwork/astar-frame/) in the `precompiles` folder

### DappsStaking Precompile
DappsStaking Precompile enables EVM smart contract to access `pallet-dapps-staking` functionality. 
Example use of this precompile from Contract A:
```
contract A {

    DappsStaking public constant DAPPS_STAKING = DappsStaking(0x0000000000000000000000000000000000005001);

    /// @notice Check current era
    function checkCurrentEra() public view {
        uint128 stakedAmount = DAPPS_STAKING.read_current_era();
    }
}

```

Let's now use this precompile to check `current era` and `total staked amount` in the `pallet-dapps-staking` for the Shiden network. For this excercise we will use Remix.

1. Copy `DappsStaking.sol` from [astar-frame repo](https://github.com/AstarNetwork/astar-frame/) and create new contract in the Remix
![](https://i.imgur.com/mr0TcLq.png)

2. Compile the DappsStaking contract
![](https://i.imgur.com/6Wgg9rf.jpg)

3. The precompile does not need to be deployed since it is already on the network, but you need to tell Remix where to find it. 
After you connect your EVM wallet to Shiden network (same applies for Astar mainnet and for Shibuya testnet) follow these steps
    1. Go to Deploy tab
    2. Use injected Web3 environment. It should point to Shiden Mainnet with id 336
    3. Make sure you have selected DappsStaking contract
    4. Provide the address of the precompiled contract `0x0000000000000000000000000000000000005001`
    5. The DAPPSSTAKING contract will appear under Deployed contracts
    
![](https://i.imgur.com/6RnQlkb.jpg)

4. Interact with the contract. (TODO update after precompile is deployed on Shiden)
    1. Check the current era 
    2. Use current era to check total staked amount on the network

![](https://i.imgur.com/NTh0T8K.png)

