---
sidebar_position: 7
---

# Transfer Reserve Assets

XCM allows us to transfer assets from one chain to another in several ways. In this chapter we'll examine how to use reserve transfers.

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

# Transferring Native Assets

Current API identifes assets being transferred by specifying an H160 style address (XC20). This prevents us from sending native tokens since there's no representation for it. However, there is a workaround for that which uses a special H160 address, padded with zeroes `0x0000000000000000000000000000000000000000` and by convention, is interpreted as a command to send the native token (`MultiLocation { parents: 0, interior: Here }`).

For example, an EVM call such as:
```
reserve_transfer:
    asset_id = [ "0x00...0" ]
    asset_amount = [ "333333333" ]
    ...
    fee_index = 0
```

The precompile internals will transform call args into something like this:
```
assets = [{ parents: 0, interior: Here }]
asset_amounts = [ 333333333 ]
```

Native assets can be used for paying transaction fees like any other assets. In that case, the `fee_index` should point to the `asset_id` entry containing `0x00...0`.

# Transaction Fees

Every transaction must be paid for. This mechanism is implemented to prevent transaction floods by disincentivizing misuse of the network, so only those tokens that have real value can be used to pay for execution fees.

Commonly, we will pay for transactions using the network native token, and it's expected that its emission is controlled and will not cause problems, however in some cases it may be necessary to allow users to pay for transactions, using foreign assets only.

To achieve that, the remote chain should be configured to allow payment of XCM execution, in that particular asset.
