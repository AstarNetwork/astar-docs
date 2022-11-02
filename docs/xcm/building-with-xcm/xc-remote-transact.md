---
sidebar_position: 6
---

# Remote Transact via Smart Contracts

XCM's `Transact` instructions allows sender to execute arbitrary call in the destination chain. This allows us to execute remote transactions
in other chains, in case they support or allow such functionality.

E.g. a user could send `Transact` instruction from **Astar** to **Polkadot** that will transfer some `DOT` from user's derived account on **Polkadot** to an arbitrary receiver account on **Polkadot**. The end user does't directly interact with **Polkadot** chain, but can still change its state. It's important to note that this is just an example - any call that can be interpreted by the remote (destination) chain can potentially be sent and executed.

This is of particular use to smart contracts since it allows them to build custom cross-chain interoperable logic.

It's important to understand the difference between sending an XCM instruction sequence and receiving/interpreting it. Even though sending an XCM from `Astar` or `Shiden` might succeed, execution on the destination chain might fail.

A user must ensure that the destination chain supports the encoded call and remote transaction in general. It is possible that remote chain doesn't support remote transaction (it's blocked by them) or that only a subset of calls can be executed remotely. This doesn't fall under `Astar` or `Shiden` chains though.

## XCM Instructions

A parachain is responsible for configuring it's own `XCM executor` and which calls it exposes to users, therefore it's important to make sure that not just anyone can execute any XCM instruction sequence. To simplify the API via which smart contracts send the `Transact` instruction, we expose an **API** that builds a sequence like:
1. `DescendOrigin`
2. `WithdrawAsset`
3. `BuyExecution`
4. `Transact`

### DescendOrigin

 Ensures that the origin isn't a parachain but a more complex junction like `{ parachain: 2006, accountId: 0x123aff....ff }`. If this was omitted, any call would be executed as if it was sent from the *root-only* parachain's sovereign account, and we cannot allow that.

 Some chains might allow direct mapping, where the same account can be controlled on the destination chain as the one that was used to send the instruction on the origin chain. Other chains might use the received account Id and the origin parachain Id to derive an entirely new account Id (private account). This is not controlled by `Astar` and can differ from parachain to parachain.

 ### WithdrawAsset

 Withdraws assets on the destination chain from the derived sender account. The account must have the specified asset and the requested amount, otherwise the instruction will fail. These assets are used to pay for the execution time - both XCM execution and the remote call execution.

 ### BuyExecution

 Using the withdrawn assets, buy execution time using all the withdrawn assets in the previous step.
 The `weight_limit` parameter is set to `Unlimited`. This isn't too important for the used instruction sequence since user controls the maximum allowed weight via the amount of withdrawn assets.

 There are no refunds at the end of sequence. Unused weight will be handled by the remote chain.

 ### Transact

 At this point, the `origin` has been configured and execution time has been bought. Assuming origin is supported and enough execution time was bought, the remote call can be executed.

 Two important parameter of the `Transact` instruction:
 * `origin_type` - this is set to `SovereignAccount` and cannot be changed by the end user
 * `require_weight_at_most` - maximum amount of weight that will be consumed by the remote call (doesn't include XCM instructions weight)

 It's important to configure the weight correctly since if it is too low, the remote execution will be blocked.

 See TODO for more info on how to calculate correct parameters.

## EVM

`Transact` functionality is exposed to EVM smart contracts via precompiles. Interface can be found [here](https://github.com/AstarNetwork/astar-frame) under the XCM precompiles.

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

`destination` can either be a sibling parachain Id or relay chain (in which case parachain Id is ignored)
`payment asset Id & amount` - which asset to withdraw in the destination chain and how much. Used to pay for execution time. Current limitation is that the asset used must have a local derivative since it's referenced via H160 address
`call` - encoded call to be executed on the remote chain
`transact_weight` - max weight that can be consumed by the call execution on remote chain

## Payment Asset and Transact Weight

Specifying the correct amount of assets to withdraw and buy execution time with, as well as the correct transact weight can be tricky. Neither are actually controlled by `Astar` or `Shiden` runtime, instead the destination chain's runtime handles it. There are a few points and tips that can help user calculate the correct values.

The payment asset amount is used to pay for two distinct executions:
1. XCM instructions - there are 4 XCM instructions in the sequence we're sending and each one is weighed by the destination chain in order to determine how much should be paid for the execution. At the moment most of the parachains (and relay chains) have XCM instruction weight configured to be `1_000_000_000` units of weight
2. Call weight - weight of the `call` on the remote chain

The withdrawn asset amount must therefore cover `4_000_000_000 + weight(call)` units of weight.

The weight of the `call` is determined by the destination chain's runtime, it's not controlled either by `Astar` or `Shiden`. A user should ensure to correctly weigh the remote call on the destination chain before sending it via XCM.

Keep in mind that these values can change - if destination runtime gets upgraded or reconfigured, the values might change and you will need to adjust values in your smart contract.

### Calculating Values

Astar docs page cannot guarantee that the following approach will work on all parachains since each of them can be customized differently. But in general, all parachains should have access to these methods.

Let's assume for this example that we're on some other chain and want to execute remote transaction `Astar`.

**Step 1** is to open `Astar` in *polkadot-js* and find the extrinsic we want to execute. For the sake of simplicity, let's assume it's `dappsStaking->claimStaker` although it could be any call.

![1-encoded-call](img/remote-transact/001_dapps_staking_claim.png)

**Step 2** is to sign the transaction without submitting it.
![2-sign-no-submit](img/remote-transact/002_unsigned_transaction.png)

**Step 3** is to press **Sign** and store the *Signed transaction* data for further use.
![3-signed-tx-data](img/remote-transact/003_non_signed_tx_data.png)

**Step 4** is to open the **RPC** handle under **Developer** and select `payment->QueryInfo`. Copy the stored `Signed transaction` data into prompt and submit the RPC call. Reply will show how much this transaction weights and how much does it cost to execute it.
In this particular case, we can see it costs **941_000_000** units of weight to execute.
![4-query-sig-tx-info](img/remote-transact/004_rpc_query_info_weight_transact_call.png)

**Step 5** is a bit hacky. We need to know how much does it cost to execute a **single** XCM instruction in the destination chain. For `Astar` and `Shiden` it's `1_000_000_000` units of weight per instruction. This is more or less used by every parachain, but there's no guarantee so user should make sure to check this themselves or contact the other parachains team.

Since we are sending 4 XCM instructions, the total weight of *raw* XCM instructions will be 4 times the weight of a single XCM instruction: `4 x 1_000_000_000`. There's the additional weight of the transact call being executed - this is summed up with the raw XCM instructions weight.

| Name      | Amount |
| ----------- | ----------- |
| Call      | 941_000_000       |
| XCM instructions   | 4_000_000_000 |
| Total  | 4_941_000_000  |

The total weight is **4_941_000_000** units of weight.

**Step 6** is yet again hacky - open the `polkadotXcm->execute` extrinsic call and specify `maxWeight` to equal the previously calculated value of **4_941_000_000**. As in step 2, get the signed transaction data.

![5-empty-execute](img/remote-transact/005_xcm_execute_weight_hack.png)

Repeat step 3 and query the fee details.
![6-final-fee-details](img/remote-transact/006_total_fee_for_execution.png)

The calculated fee is **5.2682 mASTR**.

To summarize, in case we want to do remote execution on `Astar`, we should:
* withdraw about **0.0053 ASTR** 
* specify max transact weight to be **941_000_000** units of weight.
