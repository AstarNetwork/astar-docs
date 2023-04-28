---
sidebar_position: 1
---

# Open HRMP Channels

## Overview

Before two parachains can communicate directly with one another, they must open channels with one another. Since each channel is uni-directional, two of them must be opened: one in each direction.

## Technical Instructions

### Understanding the Parameters

Opening a channel requires that the parachain sovereign account on the Relay Chain have a balance in the native token (KSM or DOT). This is mandatory, otherwise, the channel opening will fail, as the transactions won't be executed.

The easiest way to check the required parameters is by opening the Relay Chain in [Polkadot.js Apps] (https://polkadot.js.org/apps/#/explorer), under Developer -> Chain State -> `configuration` -> `activeConfig`. What you're interested in will look like this (taken from Polkadot):

```json
hrmpMaxParachainOutboundChannels: 30
hrmpMaxParathreadOutboundChannels: 0
hrmpSenderDeposit: 100,000,000,000
hrmpRecipientDeposit: 100,000,000,000
hrmpChannelMaxCapacity: 1,000
hrmpChannelMaxTotalSize: 102,400
hrmpMaxParachainInboundChannels: 30
hrmpMaxParathreadInboundChannels: 0
hrmpChannelMaxMessageSize: 102,400
```

Based on the information above, we can see that **10 DOT** is required to open a channel or to confirm it. We can also see that there are a maximum number of inbound and outbound channels per parachain - 30 in the case of Polkadot, at the time of this writing.

The two parameters that need to be specified when opening a channel are:

- `max_capacity` - max number of messages that can be queued in the channel.
- `max_message_size` - max size of the message being sent.

We can choose the max values when opening the channel accordingly.

## Relay Chain Encoded Call

The first step is to prepare the encoded call data for either requesting channel opening, or accepting an existing open channel request.

1. Visit polkadot.js app in your browser and select either Polkadot or Kusama.
2. Click on `Developer -> Extrinsic`.
3. Find hrmp under all the available pallets and select it.
4. Select the `hrmpInitOpenChannel` call and fill out the parameters.
   1. **recipient**: the parachain with which you want to open the channel.
   2. **proposedMaxCapacity**: pick the value from activeConfig.
   3. **proposedMaxMessageSize**: pick the value from activeConfig.
5. Copy and store the encoded call data for later:
   1. e.g. `0x3c00d6070000e803000000900100`

You can repeat the exact same steps to get the encoded call data for hrmpAcceptOpenChannel.

## XCM To Relay Chain

The assumption here is that you're using Polkadot's standard `pallet-xcm`, which has a send call.

Using a **root** call from your parachain, you should send an XCM message to the Relay Chain, instructing it to execute the encoded call data you've prepared in the previous step.

1. Open your parachain in [polkadot.js app] (https://polkadot.js.org/apps)
2. Click on `Developer -> Extrinsic`
3. Find the XCM pallet in the dropdown menu (probably called `polkadotXcm` or `xcmPallet`)
4. Select `send` as the call:
   1. **destination**: `V1 {XcmV1MultiLocation { parents: 1, interior: Here}}`
   2. **message**:
      1. `V2` (or latest supported version)
      2. Now add 5 instructions to the message.
   3. **WithdrawAsset**: `{Concrete {0, Here}, Fungible {1000000000000}}`:
      1. 1 DOT or 1 KSM is sufficient to execute this.
      2. You must ensure that your sovereign account on the Relay Chain is sufficiently funded.
      3. Refer to [XCM Tools] (https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/~/changes/AhpKoCvdYLwztMP8vCAb/xcm/xcm-integration/xcm-tools) page for help with calculating the sovereign account.
   4. **BuyExecution**: `{Concrete {0, Here}, Fungible {1000000000000}, Unlimited}`
   5. **Transact**: `{Native, 1000000000, <encoded_call_data>}`:
       1. Use the encoded call data you've prepared before.
   6. **RefundSurplus**
   7. **DepositAsset**: `{Wild {All}, 1, {parents: 0, interior: X1(Parachain(2007))}}`
5. Send and then verify the execution on the Relay Chain

You will need to send two such calls for both accepting request, and initiating it (or you can prepare a batch call). Once a channel has been accepted, it will become available at the start of next session.

## Submit Request to Open HRMP Channel

To open an HRMP channel with Astar or Shiden you will need to create a proposal on our [forum] (https://forum.astar.network/). Create your proposal in the correct category:

- Shiden Network: <https://forum.astar.network/c/shiden/proposal/10>
- Astar Network: <https://forum.astar.network/c/astar/proposal/20>

We have created a template that you can use to post your proposal, which you can find [here] (https://astarnetwork.notion.site/Open-HRMP-Channel-Template-166eb1b8202d4439a8c00e4a50fe0d89).

## Workflow

### Create Proposal

After creating your proposal, we will inform our community, and it is expected that you should follow up in case the community has questions. To continue with the next step you will need to be approved by our council (governance), which will be done through a poll on our forum.

### Onboarding on Testnet

The first step is for the parachain to onboard their testnet to the Rococo Relay Chain. Once that is done, you should inform us about your endpoint and parachain Id.

- Exchange public endpoints.
- Exchange parachain-Ids.

We will open channels, register assets and initiate test transfers.

### Opening an HRMP Channel

After testing on Rococo, we will begin the process of opening the HRMP channel, and if necessary, will also initiate the process adding the XCM asset. Read more about adding XCM assets [here] (https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/xcm/xcm-integration/xcm-asset-registration).
