---
sidebar_position: 7
---

# Reserve Transfer Assets

XCM allows us to transfer assets from one chain to another in several ways. In this chapter we'll see how to use reserve transfers.

Suppose we want Shibuya `SBY` tokens to be present on Shiden as a wrapped asset `wSBY`.

- Shibuya chain will need to have Shiden's sovereign account. This account is controlled by Shiden and would represent funds that were sent to the remote chain (Shiden from Shibuya's perspective)
- Shiden should create `wSBY` asset and configure it to act as a cross-chain asset
- HRMP channels should also be configured for chains to communicate and exchange XCM messages
- To pay for execution time `wSBY` should be configured as a payment asset on Shiden

During the actual transfer the following happens:
1. Some `SBY`s are moved from source account to the sovereign account of Shiden on Shibuya
2. `ReserveTransferAssets` message is sent to Shiden
3. That message is processed by assets pallet on Shiden, the corresponding amount of `wSBY`s is minted on Shiden
4. Minted `wSBY` tokens are deposited to the destination account
5. Some amount is deducted as a payment for execution time

**Note:** Please keep in mind that everything above is just an example specific to the implementation of two particular parachains. XCM does not dictate or impose any restrictions on how to interpret incoming messages, or how to manage derivative assets. Other parachains may or may not use `assets` pallet and technically the only thing we can say for sure is that `assets_reserve_transfer` will form a XCM message that would be sent to a remote chain specified by its `parachain_id`. Everything else is dependent on the remote chain and its logic.

# EVM precompile

This functionality is exposed to EVM smart contracts via precompiles. Interface can be found [here](https://github.com/AstarNetwork/astar-frame) under the XCM precompiles.

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

- `asset_id` is a list of assets to transfer; for transferring native assets see the next section.
- `asset_amount` - the corresponding amounts of assets
- `recipient_account_id` - recepient account id on the destination chain (or a relay chain)
- `is_relay` is true if destination account is on the relay chain
- `parachain_id` - destination parachain id
- `fee_index` - which asset from `asset_id` to use for paying XCM fee

**Note:** there is another version of `assets_reserve_transfer` precompile that accepts `address` instead of `bytes32` for `recipient_account_id`.

# Transferring native assets

Current API identifes assets being transferred by specifying an H160 style address (XC20). This prevents us from sending native token since there's no representation for it. However, there is a workaround for that which uses EVM `msg.value` API.

Precompile implemenation checks `msg.value` and, if positive, treats it as another asset to be sent (`MultiLocation { parents: 0, interior: Here }`). In that case, native asset is added to the tail of `asset_id` and `asset_amount` lists and can be indexed by `fee_index` as any other asset in the list. Its value would be set equal to `msg.value`.

For example, if we have an EVM call like
```
reserve_transfer:
    // for the sake of example, let's say this is
    // { parents: 1, interior: X1(Parachain(2007)) }
    asset_id = [ "0x123....000" ]

    asset_amount = [ 333333333 ]
    ...
    fee_index = 1
    msg.value = 111111,
```

…then precompile internals will transform call args into something like this:
```
assets = [
    { parents: 1, interior: X1(Parachain(2007)) },
    { parents: 0, interior: Here }
]

asset_amounts = [ 333333333, 111111 ]
```

# Transaction fees and asset sufficiency

Every transaction must be paid. This is done to prevent transaction floods by creating economical pressure to sender. So, technically only those tokens that have some real value can be used to pay for transactions.

Usually we pay for transactions using chain's native token. It's expected that its emission was controlled and will not cause any problems. But in some cases we may want to allow users pay for transactions using foreign assets only.

To do that remote chain should be configured to allow XCM execution payment using that asset.
