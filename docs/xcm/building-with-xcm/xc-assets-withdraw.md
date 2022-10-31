
# Withdraw Assets

`assets_withdraw` can be used to redeem assets that were previously sent to a remote chain.


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

