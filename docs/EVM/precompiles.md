---
sidebar_position: 1
---

# Precompiles

A precompile means a common functionality for smart contracts which has been compiled, so that Ethereum nodes can run this efficiently. From a contract's perspective, this is just a single command like an opcode.
The Frontier EVM used in Astar provides several useful precompiled contracts. These contracts are implemented in our ecosystem as a native implementation. The precompiled contracts `0x01` through `0x08` are the same as those in Ethereum (see list below). Astar additionally implements precompiled contracts start from `0x5001`, and support new Astar features.

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

The interface descriptions for these precompiles can be found in the `precompiles` folder: [astar-frame repo](https://github.com/AstarNetwork/astar-frame/).

The Addresses can be checked in the [Astar repo](https://github.com/AstarNetwork/Astar/tree/master/runtime) for each runtime in `precompile.rs` files.

### DappsStaking Precompile
DappsStaking Precompile enables EVM smart contract to access `pallet-dapps-staking` functionality. 
Example use of this precompile from Contract A:
```
import "./DappsStaking.sol";
contract A {
    DappsStaking public constant DAPPS_STAKING = DappsStaking(0x0000000000000000000000000000000000005001);

    /// @notice Check current era
    function checkCurrentEra() public view {
        uint256 currentEra = DAPPS_STAKING.read_current_era();
    }
}
```

Example use: check `current era` and `total staked amount` in the `pallet-dapps-staking` for Shiden Network. For this example we will use Remix.

1. Copy `DappsStaking.sol` from [astar-frame repo](https://github.com/AstarNetwork/astar-frame/) and create new contract in Remix:
![](https://i.imgur.com/mr0TcLq.png)

2. Compile the dAppStaking contract:
![](https://i.imgur.com/6Wgg9rf.jpg)

3. The precompile does not need to be deployed since it is already on the network, but you need to tell Remix where to find it. 
After you connect your EVM wallet to Shiden Network (same applies for Astar Network and for Shibuya Testnet) follow these steps:
    1. Go to Deploy tab
    2. Use injected Web3 environment. It should point to Shiden Mainnet with `ChainId 336`
    3. Make sure you have the selected dAppStaking contract
    4. Provide the address of the precompiled contract `0x0000000000000000000000000000000000005001`
    5. The dAppStaking contract will appear under Deployed contracts
    
![](https://i.imgur.com/6RnQlkb.jpg)

4. Interact with the contract.
    1. Check the current era 
    2. Use the current era as input to check total staked amount on the network
![precompile-interact](https://user-images.githubusercontent.com/34627453/159696985-19f67e95-807e-4c20-b74c-c9f4944ada32.jpg)


