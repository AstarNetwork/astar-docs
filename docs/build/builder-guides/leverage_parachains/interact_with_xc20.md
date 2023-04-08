# How to create and interact with a mintable XC20 asset via Solidity smart contract

## TL;DR

XC20 is an asset standard that enables users and developers to interact with them through a familiar [ERC20 interface] (https://github.com/PureStake/moonbeam/blob/master/precompiles/assets-erc20/ERC20.sol) via a precompile contract (Ethereum API) while having XCM cross-chain compatibility as native Substrate assets. Since ERC20 assets can not be transferred via XCM in the Polkadot/Kusama ecosystem, you will need XC20 if you want to build cross-chain compatible assets usable in EVM.

There are two types of XC20 assets, **mintable XC20**, and **external XC20** assets. Mintable XC20 assets can be issued on Astar Network based on the owner’s implementation logic. External XC20 assets are XC20 assets originally from other parachain/relaychain and transferred to Astar Network via XCM and issued by the sovereign account. 

In this guide, we will support you on:   
- How to create mintable XC20 assets. 
- How to send them to EVM
- How to interact with XC20 assets via Solidity smart contract.

---

## Overview
### What is an XC20

XC20 is an asset standard introduced by PureStake Technologies, which combines the power of Substrate assets (native cross-chain interoperability) but allows users and developers to interact with them through a familiar [ERC20 interface] (https://github.com/PureStake/moonbeam/blob/master/precompiles/assets-erc20/ERC20.sol) via a precompile contract (Ethereum API). With XC20, developers will be able to create assets that are both EVM-usable and cross-chain compatible via XCM.

### What are mintable XC20 and external XC20

There are two types of XC20 assets, mintable XC20, and external XC20 assets. Mintable XC20 assets can be issued on Astar Network based on the owner’s implementation logic. And external XC20 assets are XC20 assets originally from other parachain/relaychain and transferred to Astar Network via XCM and issued by the sovereign account. 

### What is XCM

**Cross-Consensus Message Format (XCM)** aims to be a language to communicate ideas between consensus systems. One of Polkadot's promises is interoperability, and XCM is the vehicle through which it will deliver this promise. Simply, it is a standard that allows protocol developers to define the data and origins that their chains can send and receive from, including cross-chain asset transfer between parachains.

---

## Instructions
### Register an XC20 asset

Currently, the best way to create XC20 asset is via [Polkadot.js] (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/explorer). In this guide, we will create an XC20 asset using Shibuya (Astar's Testnet) as a demo.

- Please visit [Polkadot.js] (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/explorer)
- Go to `Network` → `Asset` → `Create`
- Please set the following parameters for your asset
    - `creater account`: the account that will create this asset and set up the initial metadata.
    - `asset name`: the descriptive name for this asset, e.g. Cookbook Token.
    - `asset symbol`: the ticker for this asset, e.g. CKT.
    - `asset decimals`: the number of decimals for this token. Max allowed via the UI is set to 20.
    - `minimum balance`: the minimum balance for the asset. This is specified in the units and decimals as requested.
        - **Note**: `minimum malance` is the same as the `Existential Deposit (ED)` of your asset. The ED exists so that accounts with very small balances, or completely empty, do not "bloat" the state of the blockchain in order to maintain high performance.
        - **Note**:  We suggest setting the `minimum balance` to `1 Pico`, which will only require 0.000000000001 unit of the asset.
    - `asset id`: the selected id for the asset. This should not match an already-existing asset id.

![Untitled] (mintable-xc20-cookbook/Untitled.png)

- Set the managing addresses for the XC20 asset:
    - `creator`: the account responsible for creating the asset.
    - `issuer`: the designated account capable of issuing or minting tokens.
    - `admin`: the designated account capable of burning tokens and unfreezing accounts and assets.
    - `freezer`: the designated account capable of freezing accounts and assets.

![Untitled] (mintable-xc20-cookbook/Untitled%201.png)

---

### Mint the registered XC20 asset

To mint the initial supply of the registered XC20 asset, we need to open Polkadot.js with the issuer address.

- Go to `Network` → `Assets` → Find the asset that you just created
- Set the minting amount and recipient address:
    - `mint to address`: the recipient account for this minting operation.
    - `amount to issue`: the amount of assets to issue to the account.

![Untitled] (mintable-xc20-cookbook/Untitled%202.png)

---

### Transfer the asset parameters to a multi-sig account (suggested)

The owner of the XC20 asset has many high-level accesses. Thus, to ensure the security of the mintable XC20 assets, we suggest transferring the owner, issuer, freezer, and admin to a multi-sig account after the creation and initial mint. Click [here] (https://docs.astar.network/docs/user-guides/create-multisig) for the guide to create a multi-sig wallet.

- Go to `Developer` → `Extrinsics`
- Choose `assets` extrinsics and `transferOwnership` method
- Enter the `asset ID` of the new asset (you may find it under `Network` → `Assets`)
- Choose `Id` for `target` and enter the address

![Untitled] (mintable-xc20-cookbook/Untitled%203.png)

- Go to `Developer` → `Extrinsics`
- Choose `assets` extrinsics and `setTeam` method
- Enter the `asset ID` of the new asset (you may find it under `Network` → `Assets`)
- Choose `Id` for `target` and enter the address

![Untitled] (mintable-xc20-cookbook/Untitled%204.png)

---

### Send the asset to EVM

Since Astar Network is building a multi-VM smart contract hub, we support both EVM and WASM with two different account systems, H160 and SS58 respectively.

In order to send the asset to an H160 address (address B) from the Substrate-native SS58 address (address A), we need to convert the H160 address to its mapped Substrate-native SS58 address (address B) and send the asset directly from address A to address B via [Polkadot.js] (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/accounts).

Here are the full steps:

- Convert the destination H160 address to its mapped Substrate-native SS58 address by using our [address converter] (https://hoonsubin.github.io/evm-substrate-address-converter/).
    
    ![Untitled] (mintable-xc20-cookbook/Untitled%205.png)
    
- Visit [Polkadot.js] (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/accounts).
- Go to `Developer` → `Extrinsics`
- Choose `assets` extrinsics and `transfer` method
- Enter the `asset ID` of the new asset (you may find it under `Network` → `Assets`)
- Choose `id` for `target`
- Enter the mapped Substrate-native SS58 address for `AccountId`
- Enter the amount that you hope to transfer for `Balance`
    - Please notice if the decimal is 18, `1000000000000000000` refers to 1 unit of the asset.
    - Call data for reference: `0x2405950300d6e68e3d545d18f2298dda31e70b63283a3ecc664f7bead5f174f6cc2f5df65d1b000000a1edccce1bc2d3`

![Untitled] (mintable-xc20-cookbook/Untitled%206.png)

---

### Confirm receiving the asset on EVM

In order to confirm receiving the asset on EVM, we need to add the specific asset to the Metamask wallet, which requires the asset address on EVM. To generate the asset address on EVM, we need to use the asset ID with the following steps:

- Convert the `asset ID` from hexadecimal to decimal
- Add the prefix of `0xffffffff`
    - for example, our Cookbook Token, CKT, has `asset ID` of `229`. Following the step above, we will have the converted address of `0xffffffff000000000000000000000000000000E5`.
- More information can be found in the following guide: [Send XC20 Assets to EVM] (../../../xcm/building-with-xcm/send-xc20-evm.md)

![Untitled] (mintable-xc20-cookbook/Untitled%207.png)

---

### Interact with XC20 assets via Solidity smart contract

In the following section, we will demonstrate how to interact with the Cookbook Token that we created via Solidity smart contract.

:::note
💡 In order to make the mintable XC20 asset interactable via Solidity smart contract, `insufficient` needs to be set to `true`, and the EVM revert code needs to be registered. It may require technical support from the Astar Foundation team. Please submit the support request in [Astar Discord] (https://discord.gg/astarnetwork) or DM `@neutrino4` on Telegram.
:::

The Solidity Interface of Mintable XC20 on Astar includes IERC20 and IERC20Plus interfaces, which are declared in [ERC20.sol] (https://github.com/AstarNetwork/astar-frame/blob/polkadot-v0.9.33/precompiles/assets-erc20/ERC20.sol), and are as follows:

```solidity
interface IERC20 {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint256);
    function balanceOf(address who) external view returns (uint256);
    function allowance(address owner, address spender)
        external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function approve(address spender, uint256 value)
        external returns (bool);
    function transferFrom(address from, address to, uint256 value)
        external returns (bool);
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 value
    );
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

interface IERC20Plus is IERC20 {
    /**
     * @dev Returns minimum balance an account must have to exist
     */
    function minimumBalance() external view returns (uint256);

    /**
     * @dev Mints the specified amount of asset for the beneficiary.
     * This operation will increase the total supply.
     * Only usable by asset admin.
     */
    function mint(address beneficiary, uint256 amount) external returns (bool);

    /**
     * @dev Burns by up to the specified amount of asset from the target.
     * This operation will increase decrease the total supply.
     * Only usable by asset admin.
     */
    function burn(address who, uint256 amount) external returns (bool);
}
```

In this guide, we are building a simple faucet to demonstrate how to interact with the XC20 assets via a Solidity smart contract. You can find the code below:

```solidity
pragma solidity >=0.8.3;

import './IERC20.sol';

contract CookbookFaucet {

    uint256 public amountAllowed = 1000000000000000000;
    address public tokenContract = 0xFFFFfFFf000000000000000000000000000000E5;
    mapping(address => bool) public requestedAddress;

    event SendToken(address indexed Receiver, uint256 indexed Amount);

    function requestTokens() external {
        require(requestedAddress[msg.sender] == false, "You have already claimed!");
        IERC20 cktToken = IERC20(tokenContract);
        require(cktToken.balanceOf(address(this)) >= amountAllowed, "Faucet is empty!");

        cktToken.transfer(msg.sender, amountAllowed);
        requestedAddress[msg.sender] = true;
        
        emit SendToken(msg.sender, amountAllowed);
    }
}
```

For the next step, we use [Remix] (https://remix.ethereum.org/) to deploy our code on Shibuya testnet. You can find the tutorial about using Remix for Astar deployment [here] (../astar_features/use_remix.md).

![Untitled] (mintable-xc20-cookbook/Untitled%208.png)

After sending the initial funding to the faucet contract via MetaMask, you can successfully request tokens from the faucet now!

![Untitled] (mintable-xc20-cookbook/Untitled%209.png)

---

## FAQ

Please feel free to join our [Discord] (https://discord.gg/astarnetwork) for technical support.

## Reference

- [ERC20.sol] (https://github.com/AstarNetwork/astar-frame/blob/polkadot-v0.9.33/precompiles/assets-erc20/ERC20.sol)