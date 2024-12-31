---
sidebar_position: 1
---

# Precompiles

A precompile is a common functionality used in smart contracts that has been compiled in advance, so Ethereum nodes can run it more efficiently. From a contract's perspective, this is a single command like an opcode.
The Frontier EVM used on Astar network provides several useful precompiled contracts. These contracts are implemented in our ecosystem as a native implementation. The precompiled contracts `0x01` through `0x08` are the same as those in Ethereum (see list below). Additionally, Astar implements precompiled contracts starting from `0x5001`, that support new Astar features.

## Ethereum Native Precompiles

| Precompile    | Address                                      |
| ------------- | -------------------------------------------- |
| ECRecover     | 0x0000000000000000000000000000000000000001   |
| Sha256        | 0x0000000000000000000000000000000000000002   |
| Ripemd160     | 0x0000000000000000000000000000000000000003   |
| Identity      | 0x0000000000000000000000000000000000000004   |
| Modexp        | 0x0000000000000000000000000000000000000005   |
| Bn128Add      | 0x0000000000000000000000000000000000000006   |
| Bn128Mul      | 0x0000000000000000000000000000000000000007   |
| Bn128Pairing  | 0x0000000000000000000000000000000000000008   |

## Non-Ethereum Native Precompiles

| Precompile          | Address                                      |
| ------------------- | -------------------------------------------- |
| Sha3FIPS256         | 0x0000000000000000000000000000000000000400   |
| Dispatch            | 0x0000000000000000000000000000000000000401   |
| ECRecoverPublicKey  | 0x0000000000000000000000000000000000000402   |
| Ed25519Verify       | 0x0000000000000000000000000000000000000403   |

## Astar Specific Precompiles

| Precompile                        | Address                                      |
| --------------------------------- | -------------------------------------------- |
| [DappsStaking](staking.md)        | 0x0000000000000000000000000000000000005001   |
| [Sr25519](sr25519.md)             | 0x0000000000000000000000000000000000005002   |
| [SubstrateEcdsa](substrate-ecdsa.md) | 0x0000000000000000000000000000000000005003   |
| [XCM](xcm/xcm.md)                 | 0x0000000000000000000000000000000000005004   |
| [assets-erc20](xc20.md)           | ASSET_PRECOMPILE_ADDRESS_PREFIX              |

The interface descriptions for these precompiles can be found in the `precompiles` folder: [Astar repo](https://github.com/AstarNetwork/Astar/).
The Addresses can be checked in the [Astar repo](https://github.com/AstarNetwork/Astar/tree/master/runtime) for each runtime in `precompile.rs` files.

## Usage Example

This section demonstrates how to interact with the dApp Staking precompile from your contract or using Remix IDE. Other precompiles can be accessed in a similar manner.

### From contract

`DappsStakingV3.sol` contains functions that _mimic_ the interface of the latest version of `dApp Staking`. The interface can be found in the [Astar repository](https://github.com/AstarNetwork/Astar/blob/master/precompiles/dapp-staking/DappsStakingV3.sol).
Developers are encouraged to use this interface to fully utilize dApp staking functionality.

```solidity
import "./DappsStakingV3.sol";

contract A {
    DAppStaking public constant DAPPS_STAKING = DAppStaking(0x0000000000000000000000000000000000005001);

    /// @notice Check protocol state
    /// @return ProtocolState: The current protocol state.
    function checkProtocolState() public view returns (DAppStaking.ProtocolState memory) {
        DAppStaking.ProtocolState memory protocolState = DAPPS_STAKING.protocol_state();
        return protocolState;
    }
}
```

### Using Remix IDE

:::caution The example below uses a soft-deprecated interface from the older dApp Staking v2. While it is still supported by the network, it does not reflect the recommended usage for dApp Staking v3. Please use the `v3` interface in a similar way for the latest version of the dApp Staking precompile. :::

Example use: check `current era` and `total staked amount` in the `pallet-dapps-staking` for Shiden Network. For this example we will use Remix.

1. Copy `DappsStakingV2.sol` from [Astar repo](https://github.com/AstarNetwork/Astar/blob/master/precompiles/dapp-staking/DappsStakingV2.sol) and create new contract in Remix:

![](https://i.imgur.com/mr0TcLq.png)

2. Compile the dAppStaking contract:

![](https://i.imgur.com/6Wgg9rf.jpg)

3. The precompile does not need to be deployed since it is already on the network, but you will need to tell Remix where to find it.
After you connect your EVM wallet to Shiden Network (same applies for Astar Network and for Shibuya Testnet) follow these steps:
    1. Open the Deploy tab.
    2. Use injected Web3 environment. It should point to Shiden Mainnet with `ChainId 336`.
    3. Make sure you have the selected dAppStaking contract.
    4. Provide the address of the precompiled contract `0x0000000000000000000000000000000000005001`.
    5. The dApp Staking contract will appear under Deployed contracts.

![](https://i.imgur.com/6RnQlkb.jpg)

4. Interact with the contract.
    1. Check the current era.
    2. Use the current era as input to check total staked amount on the network.

![precompile-interact](https://user-images.githubusercontent.com/34627453/159696985-19f67e95-807e-4c20-b74c-c9f4944ada32.jpg)
