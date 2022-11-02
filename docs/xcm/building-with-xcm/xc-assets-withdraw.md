---
sidebar_position: 8
---

# Withdraw Assets

In polkadot ecosystem there are two ways to transfer assets between remote chains: teleportation and reserve transfer. The first is essentially burning thing on one side and minting it on the other, so that the total balance before and after the teleportation remains the same.

The second way to transfer assets uses cross chain assets backed by some assets on the sending side. Assets to be transferred are locked on the sender's side but are then said to be belonging to the remote side. Depending on the business logic, remote side now owning the assets can mint some derivatives to reflect that ownership. That way, original assets never actually leave the chain, but their ownership does. Such transfer can be done using [`assets_reserve_transfer`](xc-reserve-transfer) API.

Suppose we want Shibuya `SBY` tokens to be present on Shiden as a wrapped asset `wSBY`.

- Shibuya chain will need to have Shiden's sovereign account. This account is controlled by Shiden and would represent funds that were sent to the remote chain (Shiden from Shibuya's perspective)
- Shiden should create `wSBY` asset and configure it to act as a cross-chain asset
- HRMP channels should also be configured for chains to communicate and exchange XCM messages
- To pay for execution time `wSBY` should be configured as a payment asset on Shiden

During the actual transfer the following happens:
1. Some `SBY`s are moved from source account to the sovereign account of Shiden on Shibuya
2. An XCM containing `ReserveTransferAssets` instruction is sent to Shiden
3. That message is processed by the `assets` pallet on Shiden, the corresponding amount of `wSBY`s is minted on Shiden
4. Minted `wSBY` tokens are deposited to the destination account
5. Some amount is deducted as a payment for execution time

Afterwards, when Shiden chain wishes to redeem some original `SBY`s it can use `assets_withdraw` to perform the reverse operation.

**Note:** Please keep in mind that everything above is just an example specific to the implementation of affected parachains. XCM does not dictate or impose any restrictions on how to interpret incoming messages, or how to manage derivative assets. Other parachains may or may not use `assets` pallet may or may not mint derivative tokens and so on.

# EVM precompile

This functionality is exposed to EVM smart contracts via precompiles. Interface can be found [here](https://github.com/AstarNetwork/astar-frame) under the XCM precompiles.

```js
    function assets_withdraw(
        address[] calldata asset_id,
        uint256[] calldata asset_amount,
        bytes32   recipient_account_id,
        bool      is_relay,
        uint256   parachain_id,
        uint256   fee_index
    ) external returns (bool);
```

- `asset_id` is a list of XC20 assets to withdraw
- `asset_amount` - the corresponding amounts of assets
- `recipient_account_id` - recepient account id on the destination chain (or a relay chain)
- `is_relay` is true if destination account is on the relay chain
- `parachain_id` - destination parachain id
- `fee_index` - which asset from `asset_id` to use for paying XCM fee

**Note:** there is another version of `assets_withdraw` precompile that accepts `address` instead of `bytes32` for `recipient_account_id`.

# Implementation details

Astar uses custom XCM pallet that was extended by `reserve_withdraw_assets`.
