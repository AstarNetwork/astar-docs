---
sidebar_position: 1
---

# Open HRMP Channel

## Overview

Before two parachains can directly communicate with one another, we must open a channel between them. Since each channel is uni-directional, we must open one per direction.

## Technical Instructions

### Understanding Parameters

Opening a channel requires that the parachain sovereign account on the relay chain has some native token (KSM or DOT). This is mandatory, otherwise, the channel cannot be opened and transactions cannot be executed.

Best way to check the values is to open the relay chain in `Polkadot.js`, go under `Developer -> Chain State -> configuration -> activeConfig`. The piece of info we’re interested in looks like this (taken from Polkadot):

```json
hrmpMaxParachainOutboundChannels: 10
hrmpMaxParathreadOutboundChannels: 0
hrmpSenderDeposit: 100,000,000,000
hrmpRecipientDeposit: 100,000,000,000
hrmpChannelMaxCapacity: 1,000 <==
hrmpChannelMaxTotalSize: 102,400
hrmpMaxParachainInboundChannels: 10
hrmpMaxParathreadInboundChannels: 0
hrmpChannelMaxMessageSize: 102,400
```

From the information above, we can see that we require **10 DOTs** to open a channel or to confirm it. We can also see that there is a max number of inbound and outbound channels per parachain - 10 in the case of Polkadot at the time of writing this.

Two parameters that need to be specified when opening a channel are:

- `max_capacity` - max number of messages that can be queued in the channel.
- `max_message_size` - max size of the message being sent.

We can just pick the max values when opening the channel.

## Relay Chain Encoded Call

The first step is to prepare an encoded call data for either requesting channel opening or accepting an existing open channel request.

1. Open polkadot.js app in your browser and select either Polkadot or Kusama
2. Go under `Developer -> Extrinsic`
3. Find hrmp under all the available pallets and select it
4. Select `hrmpInitOpenChannel` call and fill out the parameters
   1. **recipient**: the parachain with which you want to open the channel
   2. **proposedMaxCapacity**: pick the value from activeConfig
   3. **proposedMaxMessageSize**: pick the value from activeConfig
5. Copy and store the encoded call data for later:
   1. e.g. `0x3c00d6070000e803000000900100`

You can repeat the exact same steps to get the encoded call data for hrmpAcceptOpenChannel.

## XCM To Relay Chain

The assumption here is that you're using polkadot's standard `pallet-xcm` which has a send call.

Using a **root** call from your parachain, you should send an XCM to the relay chain, instructing it to execute the encoded call data you've prepared in the previous step.

1. Open your parachain in [polkadot.js app](https://polkadot.js.org/apps)
2. Go under `Developer -> Extrinsic`
3. Find the XCM pallet in the dropdown menu (probably called `polkadotXcm` or `xcmPallet`)
4. Select `send` as the call
   1. **destination**: `V1 {XcmV1MultiLocation { parents: 1, interior: Here}}`
   2. **message**:
      1. `V2` (or latest supported version)
      2. Now add 5 instructions to the message
   3. **WithdrawAsset**: `{Concrete {0, Here}, Fungible {1000000000000}}`
      1. 1 DOT or 1 KSM is sufficient to execute this
      2. You must ensure that your sovereign account on the relay chain is sufficiently funded
      3. Refer to [XCM Tools](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/~/changes/AhpKoCvdYLwztMP8vCAb/xcm/xcm-integration/xcm-tools) page for help with calculating the sovereign account
   4. **BuyExecution**: `{Concrete {0, Here}, Fungible {1000000000000}, Unlimited}`
   5. **Transact**: `{Native, 1000000000, <encoded_call_data>}`
       1. use the encoded call data you've prepared before
   6. **RefundSurplus**
   7. **DepositAsset**: `{Wild {All}, 1, {parents: 0, interior: X1(Parachain(2007))}}`
5. Send and verify execution on the relay chain

You will need to send two such calls for both accepting request and initiating it (or you can prepare a batch call). Once channel has been accepted, it will become available at the start of next session.

## Request to Open HRMP Channel

To open an HRMP channel with Astar or Shiden you need to create a proposal on our [forum](https://forum.astar.network/). Create your proposal in the correct category:

- Shiden Network: <https://forum.astar.network/c/shiden/proposal/10>
- Astar Network: <https://forum.astar.network/c/astar/proposal/20>

We created a template that you can use to post your proposal. You can find the template [here](https://astarnetwork.notion.site/Open-HRMP-Channel-Template-166eb1b8202d4439a8c00e4a50fe0d89).

## Workflow

### Create Proposal

After creating your proposal, we will inform our community. It would be great to follow up in case the community has questions. To continue with the next step you need to be approved by our council (governance), this will be done with a poll on our forum.

### Onboarding on Testnet

The first step is for the parachain to onboard their testnet on the Rococo relay chain. Once that is done, you should inform us about your endpoint and parachain Id.

- Exchange public endpoints.
- Exchange parachain-Ids.

We will open channels, register assets and test how transfer works.

### Opening an HRMP Channel

After the testing on Rococo, we will start with opening the HRMP channel. If needed we can also start with adding the XCM asset. Read more about adding XCM assets [here](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/xcm/xcm-integration/xcm-asset-registration).
