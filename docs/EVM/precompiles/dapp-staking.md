# DApp Staking Precompile

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
