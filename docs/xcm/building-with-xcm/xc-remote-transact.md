---
sidebar_position: 6
---

# Remote Transact via XCM

## Feature Overview

The XCM `Transact` instruction allows the sender to execute arbitrary calls on the destination chain. This feature is extremely useful since it allows us to control an account on a remote chain.

For example, a user is able to send a `Transact` instruction from **Astar** to **Polkadot** that will transfer `DOT` from the user's derived account on **Polkadot** to an arbitrary receiver account on **Polkadot**. The user doesn't need to interact directly with the **Polkadot** chain in this case, but nevertheless is able to change its state. It's important to note that this is only an example - any call that can be interpreted by the remote (destination) chain is able to be sent and executed.

This is of particular use for smart contracts, since it allows them to integrate custom logic for cross-chain interoperability.

It's important to understand the difference between sending an XCM instruction sequence and receiving/interpreting it. 

Sending an XCM transaction from `Astar` or `Shiden` to a remote chain may be successful on the sender side, but fail to execute on the destination, and the same is true for the opposite scenario. This can happen for multiple reasons - the XCM sequence might be incorrect, the remote chain doesn't know how to inrerpret the provided `call`, or the remote chain doesn't allow remote execution, at all.

The developer or user must ensure that the destination chain supports the encoded call and remote transactions, in general.

## Remotely Transact on Astar/Shiden/Shibuya

### XCM Sequence

At the moment, remote execution from origins other than parachain accounts are only allowed to be initiated by the `Shibuya` runtime (including RocStar).

A permissible sequence of instructions will therefore have to start like:
1. `DescendOrigin`
2. `WithdrawAsset`
3. `BuyExecution`
4. `Transact` or `SetAppendix` or _whatever user wants_

This XCM sequence, used as a prefix, may be followed by arbitrary instructions, for example: `Transact`.
Although we cannot guarantee it, other chains will most likely adopt the same or a similar prefix for XCM instruction sequences.

#### DescendOrigin

The DescendOrigin parameter ensures that the origin isn't a parachain, but a more complex junction like `{ parachain: 2006, accountId: 0x123aff....ff }`. If this is omitted, all calls will be executed as if they were sent from the *root-only* parachain's sovereign account, which we do not allow.

#### WithdrawAsset

Withdraws assets on the destination chain from the derived sender account. The account must have the specified asset and the requested amount, otherwise the instruction will fail. These assets are used to pay for the XCM execution time.

#### BuyExecution

Buys XCM executuion time, using the withdrawn assets.

#### Transact

Execute the specified encoded call data, without consuming more weight than specified.
Call data can be virtually anything supported by the remote chain - it doesn't matter what the origin chain supports.

### Remote Wasm Smart Contract Execution

For all our runtimes supporting Wasm smart sontracts & remote transaction via XCM, users are able to fully utilize contract uploads, instantiation, and most important - calls. No special approach or setup is needed since Wasm smart contracts are native to Astar chains. Sending a remote Wasm smart contract call is the same as executing any other remote transaction.

You can prepare the call within the `polkadot.js portal`(see image below), or custom code using the [polkadot-js/api-contract](https://github.com/polkadot-js/api/tree/46076c5595ab62e960a1097611a3e150bfa942f2/packages/api-contract) TypeScript library.

![remote-wasm-call](img/remote-transact/007_wasm_flipper_call.png)

The `data: Bytes` part consists of a function selector (which contract function to call) and [SCALE](https://github.com/paritytech/parity-scale-codec) encoded input arguments. Unfortunately, no tool exists for easily generating the `data` value for the time being. Once a tools becomes available, we'll provide a link to it here.

Until then, developers will need to rely on the aforementioned library, or the `polkadot-js portal` to extract these values.

## Derived Remote Accounts

When executing a remote transaction, the remote chain will derive a new address based on the sender's multilocation.
The way this address is derived is determined by the chain itself.

For Astar runtimes, a generalized approach, aligned with `Polkadot` and `Kusama` is used. A tuple like `("multiloc", sender_multilocation)` is SCALE encoded and hashed using the `Blake2_256` hasher, with the output being the derived address.

For example, let's assume `Alice` is sending an XCM sequence from `Polkadot` to `Astar`.

| Name      | Value       |
| ----------- | ----------- |
| Alice's Address in Polkadot      | 15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5       |
| Alice's Public Key  | 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d  |
| Alice's MultiLoc in Astar | { parents: 1, interior: AccountId32 {network: NetworkId::Polkadot, id: 0xd4359...a27d } } |
| Alice's Derived Account in Astar | 5HNGwjahXUvxBe4wNMJEb3SHhdFWaGxyuSYvsW77K9EMSy4Z |

You can use the `xcm-tools` binary to generate the derived address, based on your needs.

:::caution
Be aware that derived accounts may change with the introduction of **XCM v3**.
This is because `AccountId32` type's `network` parameter will become an `Option<NetworkId>`.

**XCM v3** is still under development so whether this will happen still remains uncertain.
:::

## Remotely Transact via EVM Smart Contracts

Astar allows EVM smart contracts to send `Transact` instructions to remote chains, giving them the ability to execute arbitrary calls.

### XCM Sequence

To simplify the API via which EVM smart contracts send the `Transact` instruction, and to ensure security, we expose a function that builds a sequence like:
1. `DescendOrigin`
2. `WithdrawAsset`
3. `BuyExecution`
4. `Transact`

`DescendOrigin` will ensure that the origin is correctly set to be the smart contract's derived ss58 address.

### Remotely Derived Contract Address

For example, let's assume you have a contract deployed on Shibuya and are calling the XCM precompile `remote_transact` with the intention of sending an XCM sequence to a sibling parachain. This sibling parachain uses the same address derivation as do our runtimes. The address derivation path will look like this:

| Name | Address |
| ---- | ------- |
| Contract H160 Address | `0x48DD0a20a199f96B56eCE7e994D83614A148aA63` |
| Contract Derived SS58 Address | `agn53DdEuRgQsvgxqj5M1AecxB6LpbXT7T1R1hjVcoEBR6M` |
| SS58 Address Public Key | `0xd219fe1b02545c7dd7e718b1530b4e32b23288351f61e5975c7dc49b004ff119` |
| Caller Multilocation | `{ parents: 1, interior: X2 ( Parachain(2000), AccountId32 {network: NetworkId::Any, id: 0xd219f...f119 } ) }` |
| Derived Account32Hash Address | `5FrhDFydxUwbWyXT1XDBhRUUYpQtiJJ6skB6n2XV4NubC9fP` |

This means that the following instructions like `WithdrawAsset` and `Transact` will be executed as if origin was address `5FrhDFydxUwbWyXT1XDBhRUUYpQtiJJ6skB6n2XV4NubC9fP`.

`WithdrawAsset` at the moment requires that asset representation is present in our runtimes. However, it is expected that the remote chain's derived address will be funded so it can pay for XCM execution.

`BuyExecution` will use the previously withdrawn assets. The `weight_limit` will be set to `Unlimited`. This isn't too important for the instruction sequence being used, since the user controls the maximum allowed weight via the amount of withdrawn assets. However, the funds should be sufficient to pay for both the XCM sequence execution, and the encoded remote call.

`Transact` will execute the encoded call. The `origin_type` is set to `SovereignAccount` and cannot be changed by the end user.

There are no refunds at the end of sequence. Unused weight will be handled by the remote chain.

### Precompiles API

`Transact` functionality is exposed to EVM smart contracts via precompiles. The interface can be found [here](https://github.com/AstarNetwork/astar-frame) under XCM precompiles.

```js
function remote_transact(
    uint256 parachain_id,
    bool is_relay,
    address payment_asset_id,
    uint256 payment_amount,
    bytes calldata call,
    uint64 transact_weight
) external returns (bool);
```

The `destination` can either be a sibling parachain Id or the Relay Chain (in which case parachain Id is ignored).
`payment asset Id & amount` - Determines which asset to withdraw on the destination chain and how much. Used to pay for execution time. Current limitation is that the asset used must have a local derivative since it's referenced via H160 address.
`call` - The encoded call to be executed on the remote chain.
`transact_weight` - The max weight that can be consumed by the execution of the call on the remote chain.

Continue reading below to gain a better understanding of how to calculate these parameters.

### Payment Asset

At the moment, users can only specify the paymet asset via a `H160` address. Even though the payment asset references an asset in the destination chain, the remote asset must have a local derivative. This will be updated and improved in the future so that users can specify asset multilocations directly.

In case the user wants to pay using a local currency derivative (wrapped ASTR or SDN) on the destination chain, a specialized H160 address padded with zeroes,`0x0000000000000000000000000000000000000000`, should be used.

### Transaction Weight

Specifying the correct amount of assets to withdraw and buy execution time with, as well as choosing the correct transaction weight, can be tricky. Neither are controlled by the `Astar` or `Shiden` runtimes, instead, these parameters are handled by the runtime of the destination chain. There are a few points and tips that can help user calculate the correct values.

The asset required for payment is used for two distinct executions:
1. XCM instructions - There are 4 XCM instructions in the sequence, and each one is weighed by the destination chain in order to determine how much should be paid for their execution. At the moment, most of the parachains (and Relay Chains) have XCM instruction weight configured with `1_000_000_000` units of weight.
2. Call weight - The weight of the `call` on the remote chain.

The withdrawn asset amount must therefore cover `4_000_000_000 + weight(call)` units of weight.

The weight of the `call` is determined by the destination chain's runtime, so is not controlled by either `Astar` or `Shiden`. Users should be sure to weigh the remote call correctly on the destination chain, before sending it via XCM.

Keep in mind that these values may change - if a destination runtime gets upgraded or reconfigured, the values could change and you will need to adjust them in your smart contract.

### Calculating Values

Astar cannot guarantee that the following approach will work on all parachains, since each of them can be customized independently. But generally, all parachains should have access to these methods.

Let's assume for this example that we're on some other chain, and want to execute a transaction remotely on `Astar`.

**Step 1** Visit `Astar` network in *polkadot-js* and locate the extrinsic we would like to execute. For the sake of simplicity, let's assume it's `dappsStaking->claimStaker`, although it could be any call. **Submit** the transaction.

![1-encoded-call](img/remote-transact/001_dapps_staking_claim.png)

**Step 2** Sign the transaction without submitting it.

![2-sign-no-submit](img/remote-transact/002_unsigned_transaction.png)

**Step 3** Store the *Signed transaction* data for further use, and **Sign** the transaction again 

![3-signed-tx-data](img/remote-transact/003_non_signed_tx_data.png)

**Step 4** is to open the **RPC** handler under **Developer** and select `payment -> QueryInfo`. Paste the `Signed transaction` data into prompt, and submit the RPC call. The result will indicate the transaction weight, and cost to execute it.
In this case, it will cost **941_000_000** units of weight to execute.

![4-query-sig-tx-info](img/remote-transact/004_rpc_query_info_weight_transact_call.png)

**Step 5** requires a bit of a workaround. We need to know how much the cost is to execute a **single** XCM instruction on the destination chain. For `Astar` and `Shiden` it's `1_000_000_000` units of weight per instruction. This can be used as a rough guide, but there's no guarantee other parachains will be the same, so users should ensure they test this value themselves, or contact the other parachain team to learn the exact value.

Since we are sending four XCM instructions, the total weight of the *raw* XCM instructions will be four times the weight of a single XCM instruction: `4 x 1_000_000_000`. Additionally, we will need to add the weight of the `transact` call being executed, so in total, the weight of our example will be `5 x 1_000_000_000`.

| Name      | Amount |
| ----------- | ----------- |
| Call      | 941_000_000       |
| XCM instructions   | 4_000_000_000 |
| Total  | 4_941_000_000  |

The total weight is **4_941_000_000** units of weight.

**Step 6** requires another workaround, where we will need to execute the `polkadotXcm -> execute` extrinsic call, and ensure `maxWeight` is equal to the previously calculated value of **4_941_000_000**. As required in step 2, you will need to copy the signed transaction data.

![5-empty-execute](img/remote-transact/005_xcm_execute_weight_hack.png)

Repeat step 3 and query the fee amount.

![6-final-fee-details](img/remote-transact/006_total_fee_for_execution.png)

The fee calculated is **5.2682 mASTR**.

To summarize, in order to execute functions remotely on `Astar` network, we should:
* withdraw around **0.0053 ASTR** 
* specify the max transact weight as **941_000_000** units.
