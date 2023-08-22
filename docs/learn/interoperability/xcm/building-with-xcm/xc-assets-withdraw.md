---
sidebar_position: 8
---

# Withdraw Assets

In the Polkadot ecosystem there are two ways to transfer assets between remote chains: teleportation and reserve transfer. Teleportation is essentially burning an asset on one side, and minting it on the other, so that the total balance before and after the teleportation remains the same.

The second way to transfer assets uses wrapped tokens, backed by assets on the origin chain. Assets to be transferred are locked on the origin chain, and 1:1 versions are created on the destination. Depending on the business logic, the origin chain that still owns the assets, may want to mint some derivatives to reflect that ownership. In this way, the original assets don't actually leave the chain, but their ownership becomes transferrable.

Suppose we would like to import Shibuya `SBY` tokens as wrapped assets on Shiden, resulting in `wSBY`.

- Shibuya network will need to have Shiden's sovereign account. This account is controlled by Shiden and represents all funds sent to it, from the remote chain (Shiden, from Shibuya's perspective in this example).
- Shiden network will need create the `wSBY` asset, and configure it to act as a cross-chain (XC20) asset.
- HRMP channels should both be enabled, and configured for parachains to communicate and exchange XCM messages.
- In order pay for execution time, `wSBY` should be configured as a payment asset on Shiden.

During the transfer the following will occur:
1. An amount of `SBY` are moved from the source account to the sovereign account of Shiden on Shibuya.
2. An XCM message containing the `ReserveTransferAssets` instruction is sent to Shiden.
3. The `ReserveTransferAssets` instruction is processed by the `assets` pallet on Shiden, and the corresponding amount of `wSBY` is minted on Shiden.
4. Minted `wSBY` tokens are deposited to the destination account.
5. A small amount of `wSBY` is deducted from the destination account as payment for execution time

**Note:** The above example is specific to the implementation of two particular parachains. XCM does not dictate or impose any restrictions on how to interpret incoming messages, or how to manage derivative assets. Other parachains may or may not use the `assets` pallet; the only assumption is that `assets_reserve_transfer` will form an XCM message with an origin specified by its `parachain_id`. Everything else is dependent on the remote chain and its logic, and there are no retries attempted on failure.

# EVM precompiles

This functionality is exposed to EVM smart contracts via precompiles. The interface can be found [here](https://github.com/AstarNetwork/astar-frame) under XCM precompiles.

```js
    function assets_reserve_transfer(
        address[] calldata asset_id,
        uint256[] calldata asset_amount,
        bytes32   recipient_account_id,
        bool      is_relay,
        uint256   parachain_id,
        uint256   fee_index
    ) external payable returns (bool);
```

- `asset_id` - A list of assets to transfer; for transferring native assets, see the next section.
- `asset_amount` - The corresponding amount of assets.
- `recipient_account_id` - The recipient account id on the destination chain (or a Relay Chain).
- `is_relay` Is true if destination account is on the Relay Chain.
- `parachain_id` - The destination parachain id.
- `fee_index` - Which asset from `asset_id` is use for paying XCM fees.

**Note:** there is another version of `assets_reserve_transfer` precompile that accepts `address` instead of `bytes32` for the `recipient_account_id`.


# Implementation details

Astar uses a custom XCM pallet that was extended by `reserve_withdraw_assets`.
