---
sidebar_position: 2
title: Technical Guide
---

import Figure from "/src/components/figure"

## Intro

The purpose of this guide is to demonstrate how to perform Governance actions using the `polkadot-js app` (or any other app that allows direct extrinsic call construction).

This knowledge isn't mandatory to use the dedicated governance UI, but can be very helpful to understand what's happening _underneath the hood_.

## Extrinsic Calls Overview Per Actor

This chapter and subchapters will provide an overview of _extrinsic calls_ used in the governance.

### Collectives

All _collectives_, which include `Main Council`, `Technical Committee` and the `Community Council` need to initiate & execute their calls via the _pallet-collective_ interface.

* `execute`
  * allows a collective member to _execute_ a call with a special origin as _the member of the collective_
  * no voting, no delay
  * e.g. this is used by the `Tech Committee` when they _veto_ the external proposal made by the `Main Council`
* `propose`
  * proposes a call for voting to the collective
  * needs to specify the voting threshold _manually_ - user/UI needs to ensure they know this based on the _proportion_ of _aye_ votes required for the proposal to be passed
  * e.g. if there are 5 collective members, and 2/3 is required for a motion to pass, the threshold should be set to 4
    * from the code side, the proportion will need to be **hardcoded**, but member count can be read off the chain
  * when a proposal is made, it will be assigned a unique `proposal index`, and `hash` will be calculated from the actual proposal call
    * these values are important for further interaction with the _proposal_
* `vote`
  * collective member can vote to either approve or disapprove the proposal
  * **need** to specify both the proposal hash and proposal index as emitted by the `propose` call
  * when an account votes for the first time (not changing the vote), the extrinsic call is free
* `close`
  * attempt to _close_ the proposal, executing the call in case of the achieved approval or removing the proposal in case of rejection or expiry
  * in case threshold hasn’t been achieved, but a _prime_ logic is in place, and allocated `motion duration` has expired, missing votes might be derived from the prime strategy, and proposal will be closed
  * **need** to specify both the proposal hash and the proposal index as emitted by the `propose` call
    * in addition, also need to know the max weight of the proposal to execute & its encoded length
    * unlike previous calls, can be called by **any signed origin**, no need to be part of the collective
      * however, this account will pay the transaction fee for the execution

The _pallet-collective-proxy_ is a special pallet that allows calls to be made on behalf of another account. It's similar to a proxy, but also works on collectives. It only has a single call that can be used:

* `execute_call`
  * wraps an extrinsic call, e.g. from the dApp staking pallet
  * can only be successfully executed by the proxy account Id if collective decision has been reached
  * in practice this means that when collective makes a proposal to execute a dApp staking action, they will need to _wrap_ the dApp staking call into the `execute_call`

### Main Council

* `Democracy->externalPropose` - make an external proposal with `super majority approve` voting scheme
* `Democracy->externalProposeMajority` - make an external proposal with `simple majority` voting scheme
* `Democracy->externalProposeDefault` - make an external proposal with `super majority against` voting scheme
* `Democracy->emergencyCancel` - cancel a referendum during the voting phase

* `Treasury->rejectProposal` - reject the treasury spending proposal
* `Treasury->approveProposal` - approve the treasury spending proposal

### Technical Committee

* `Democracy->fastTrack` - fast-tracks an external proposal
* `Democracy->cancelProposal` - cancels a public proposal
* `Democracy->vetoExternal` - vetoes an external proposal
* `DappStaking->maintenanceMode` - enable or disable maintenance mode
* `SafeMode->forceEnter/forceExit` - 	enables/disables **Safe Mode** for the chain
* `TxPause->pause/unpause` - 	pauses/unpauses specific transactions

### Community Council

* `CollectiveProxy->executeCall(DappStaking->*)` - any dApp staking call related to token locking/staking can be executed by wrapping it into collective proxy call
* `DappStaking->register` - register a new dApp into dApp staking
* `CommunityTreasury->rejectProposal` - reject the community treasury spending proposal
* `CommunityTreasury->approveProposal` - approve the community treasury spending proposal

### Token Holders

* `Democracy->propose` - make a proposal, reserving some **ASTR** as the deposit
* `Democracy->second` - endorse the existing proposal, reserving some **ASTR** as the deposit
* `Democracy->vote` - vote _aye_ or _nay_, with some amount of **ASTR**
* `Democracy->delegate` - delegate voting power to someone else
* `Democracy->undelegate` - removes delegation of the voting power
* `Democracy->removeVote` - removes the vote from the referendum, releasing the funds if no locks are applicable anymore
* `Democracy->unlock` - remove the expired **ASTR** locks

* `Treasury->proposeSpend` - proposes the spending of the main on-chain treasury funds (requires a deposit)
* `CommunityTreasury->proposeSpend` - proposes the spending of the community treasury funds (requires a deposit)

## User Guide

:::note
All of the examples below were done on a `local` test network which can be easily started by downloading Astar binary from [the official releases](https://github.com/AstarNetwork/Astar/releases) (or building it manually), and starting it as `./astar-collator --dev --tmp`.

The settings & parameters of the `local` test network **DO NOT** reflect what will be used on Shibuya or on Astar.
:::

This does not describe how users are expected to use the governance since majority of this logic will be hidden behind a frontend.

### Token Holder

#### Preimage

To put it simply, _preimage_ of the call hash is the call itself - the proposal we want to execute.

The first step is to select `Governance -> Preimage` as shown in the image below.

<Figure caption="Governance Preimage - 1" src={require('/docs/learn/governance/img/01_Preimage/01_governance_preimage.png').default } width="100%" />

The second step is to click on the `Add preimage` button. Now the user can _define_ the call they wish to propose. For the sake of this example, it will be a registration of a smart contract into the dApp staking protocol.

<Figure caption="Governance Preimage - 2" src={require('/docs/learn/governance/img/01_Preimage/02_governance_preimage.png').default } width="100%" />

This is the definition of the call that we’d like to see become a referendum, and ideally executed afterwards. It’s important to note the values of the `preimage hash` (and `preimage length`) as it serves as the _identifier_ of the actual call.

For this particular example, the preimage hash is: `0xfb7f2d6ab9c04e75969988166cf09365eb9c8d698345dc9853a31618d9802fb9` and length of the preimage is `55 bytes`.

Click on the `Submit preimage`, and now the call has been stored on-chain. As such, it can be referred to from the `Democracy` pallet which we’ll cover in the following chapters. Once the call has been executed, it can be observed under the stored preimages.

<Figure caption="Governance Preimage - 3" src={require('/docs/learn/governance/img/01_Preimage/03_governance_preimage.png').default } width="100%" />

Do note that this action will result in some tokens from the caller being _reserved_ as a security deposit (prevention of spam attacks). Once (or if) the call has been executed, the deposit can be reclaimed. It’s also possible to do this before making the actual proposal. The amount of tokens reserved is defined by the runtime logic - in general, the larger the call, the larger the security deposit will be.

User only needs to click on `Unnote`, and it will clear the deposit if possible (e.g. the preimage is not being used for a submitted democracy proposal).

<Figure caption="Governance Preimage - 4" src={require('/docs/learn/governance/img/01_Preimage/04_governance_preimage.png').default } width="100%" />

#### Submitting & Endorsing A Proposal

:::note
The previous steps with preimage upload are mandatory for the following example.
:::

The first step is to select `Governance -> Democracy` as show in the image below.

<Figure caption="Public proposal - 1" src={require('/docs/learn/governance/img/02_Public_proposal/01_public_proposal.png').default } width="100%" />

The second step is to click on the `Submit proposal` button - this will reserve some currency and put the proposal into the queue.

<Figure caption="Public proposal - 2" src={require('/docs/learn/governance/img/02_Public_proposal/02_public_proposal.png').default } width="100%" />

Note that `preimage hash` and `preimage length` are reused from the previous chapter.

The `minimum deposit` is defined by the runtime logic and cannot be changed - it’s the minimum amount user  needs to _reserve_ in order to submit a public proposal. The `locked balance` prompt is a bit misleading since it refers to the _actual_ value user wants to _reserve_ for this proposal. Any subsequent _secondment (endorsement)_ of this proposal will also need to _reserve_ that amount.

:::note
In case the proposal is canceled (e.g. due to it being malicious), the _reserved_ funds are **slashed (burned).** It’s important to keep this in mind since making a proposal carries _weight_.
:::

When someone makes a proposal, it isn’t guaranteed it will be upgraded to a referendum. So the proposal submitter can ask others to endorse their proposal to increase the likelihood of the proposal being upgraded to a referendum. The proposal with the highest endorsement (i.e. number of tokens used to _pre-vote_) will get upgraded.

Endorsement cannot be done with locked/frozen tokens. E.g. tokens locked in dApp staking cannot be used here. This is because endorsing a proposal will _reserve_ tokens, making them _slashable_ in case proposal is canceled.

Anyone can decide to endorse the proposal, as show in the following images.

<Figure caption="Public proposal - 3" src={require('/docs/learn/governance/img/02_Public_proposal/04_public_proposal.png').default } width="100%" />

Click on the `Endorse` and a new window will pop out.

<Figure caption="Public proposal - 4" src={require('/docs/learn/governance/img/02_Public_proposal/05_public_proposal.png').default } width="100%" />

Whoever decides to endorse the proposal needs to _reserve_ the exact same amount that was reserved by the original proposer. By endorsing and reserving funds, they also become _slashable_ in the case of an canceled proposal.

Once the `Launch Period` ends, and if the proposal has the most endorsement, it will be upgraded into a public referendum. In the case of our example, it’s the only proposal so it will most definitely be upgraded. After that, the `Voting Period` begins, where users can either vote `aye` or `nay`.

Please check the following chapter for description of the voting procedure.

#### Voting

<Figure caption="Public proposal - 5" src={require('/docs/learn/governance/img/02_Public_proposal/06_public_proposal.png').default } width="100%" />

By clicking on the `Vote` button, a new window will open where user can decide whether to vote `aye` or `nay`, as well as the amount they are willing to use for voting, and the conviction.

<Figure caption="Public proposal - 6" src={require('/docs/learn/governance/img/02_Public_proposal/07_public_proposal.png').default } width="100%" />

The _amount used_, in case the referendum plays out in favor of the user’s vote, will be locked according to the rules of the conviction.

<Figure caption="Public proposal - 7" src={require('/docs/learn/governance/img/02_Public_proposal/08_public_proposal.png').default } width="100%" />

After the vote has been cast, the UI will update number of votes, turnout, etc.

User can also observe two timers:

* `remaining` - how long until the voting period ends
* `activate` - how long until the call is enacted on-chain, in case it passes

<Figure caption="Public proposal - 8" src={require('/docs/learn/governance/img/02_Public_proposal/09_public_proposal.png').default } width="100%" />

Once the `remaining` timer from the above reaches **zero**, referendum will be passed, and will be scheduled for enactment. This can be observed in the `Network` explorer part of the polkadot-js apps.

<Figure caption="Public proposal - 9" src={require('/docs/learn/governance/img/02_Public_proposal/10_public_proposal.png').default } width="100%" />

Note that referendum was passed (`democracy.Passed`), preimage was requested (`preimage.Requested`), and call execution was scheduled for block `1800` (`scheduler.Scheduled`).

Once this happens, user is free to remove the preimage to get back their reserved funds (see previous chapter for the explanation).

Once block `1800` is reached, the `Scheduler` will dispatch the call (`scheduler.Dispatched`), resulting in an EVM smart contract being registered for dApp staking (`dappStaking.DAppRegistered`).

<Figure caption="Public proposal - 10" src={require('/docs/learn/governance/img/02_Public_proposal/11_public_proposal.png').default } width="100%" />

#### Vote Delegation

User can decide to delegate their voting power to someone else. The approach is shown in the following pictures. First step is to select `Developer -> Extrinsics`, and find the `democracy` pallet calls. Select `delegate` and select the account to which delegation is done.

<Figure caption="Vote Delegation - 1" src={require('/docs/learn/governance/img/03_Vote_delegation/01_vote_delegation.png').default } width="100%" />

The `conviction` works the same way as with regular voting. The `balance` fields represents how muck tokens will be used for delegation.

User must not be actively participating in any _vote_ if they want to delegate. In case they are, they need to withdraw their votes if they wish to delegate.

<Figure caption="Vote Delegation - 2" src={require('/docs/learn/governance/img/03_Vote_delegation/03_vote_delegation.png').default } width="100%" />

The `index` is the referendum index for which the user voted. In case vote was cast for multiple referendums, the vote should be removed from all of them.

#### Main Treasury Spending Proposal

Any native token holder can propose treasury spending. For the main chain treasury it’s very straightforward, as the image demonstrates.

First select `Governance -> Treasury`, and click on the `Submit proposal` button.

<Figure caption="Main Treasury Proposal - 1" src={require('/docs/learn/governance/img/04_Treasury_proposal/01_treasury_proposal.png').default } width="100%" />

Select the `beneficiary` of the spending (the account who will receive funds), and the amount requested. Note that some amount needs to be reserved - percentage of the requested amount, but limited by an interval between the minimum and maximum bond amount.

<Figure caption="Main Treasury Proposal - 2" src={require('/docs/learn/governance/img/04_Treasury_proposal/02_treasury_proposal.png').default } width="100%" />

After the call is executed, proposal is made and can be either approved or rejected by the main council.

In case the proposal is **rejected**, the reserved amount is slashed.

#### Community Treasury Spending Proposal

The underlying logic & approach is exactly the same as the main treasury, however, polkadot-js apps does not support community treasury in its `Governance` UI.

Same functionality can be achieved by selecting `Developer -> Extrinsics` and `communityTreasury` as the pallet. Following image demonstrates it:

<Figure caption="Community Treasury Proposal - 1" src={require('/docs/learn/governance/img/05_Community_treasury_proposal/01_community_treasury_proposal.png').default } width="100%" />

If call is successful, proposal will have been made. However, due to missing UI support, it won’t be visible as the main treasury proposal would be.

However, successful proposal can be observed in the `Network`'s tab block explorer. It’s important to note the `proposalIndex` as it’s the unique identifier of the proposal.

<Figure caption="Community Treasury Proposal - 2" src={require('/docs/learn/governance/img/05_Community_treasury_proposal/02_community_treasury_proposal.png').default } width="100%" />

### Main Council

#### External Proposal With Simple Majority Voting Scheme

The first step is to repeat the step of creating an preimage. Before the external proposal can be registered, preimage of the call hash (in other words, the call itself) needs to be stored on chain.

Then, user should select `Governance -> Council` in the polkadot-js apps.

<Figure caption="Simple Majority Proposal - 1" src={require('/docs/learn/governance/img/06_Council_external_proposal_simple_majority/01_council_external_proposal.png').default } width="100%" />

Here on the picture, under the `Overview` tab, we can see the council members. Clicking on the `Motions` tab takes us to the interface for proposing calls.

<Figure caption="Simple Majority Proposal - 2" src={require('/docs/learn/governance/img/06_Council_external_proposal_simple_majority/02_council_external_proposal.png').default } width="100%" />

There are two options:

* `Propose motion` - proposes to execute a call with `Council` collective as the origin. This can be used for certain actions, like approving or rejecting the treasury proposal.
* `Propose external` - proposes a new external proposal for the democracy system. At the next applicable _launch period_, the active external proposal gets upgraded to a public referendum.

For the purpose of this example, we’ll be making an external proposal. As a reminder, the dApp staking register call (preimage) hash is `0xfb7f2d6ab9c04e75969988166cf09365eb9c8d698345dc9853a31618d9802fb9` and `preimage length` is `55` bytes.

Clicking on the `Propose external` will open up a new window where user should input the aforementioned data.

<Figure caption="Simple Majority Proposal - 3" src={require('/docs/learn/governance/img/06_Council_external_proposal_simple_majority/03_council_external_propose.png').default } width="100%" />

Note that this will make an external propose with the `simple majority` voting scheme. This is what the UI does by default.

Executing the proposal will create a council motion which should be either approved or rejected by the council members. For the sake of this example, approve with sufficient number of the council members by voting `aye` and closing the proposal.

<Figure caption="Simple Majority Proposal - 4" src={require('/docs/learn/governance/img/06_Council_external_proposal_simple_majority/04_council_external_propose.png').default } width="100%" />

As a result, a new external proposal will be created.

<Figure caption="Simple Majority Proposal - 5" src={require('/docs/learn/governance/img/06_Council_external_proposal_simple_majority/06_council_external_propose.png').default } width="100%" />

Once the launch period passes, it will be upgraded to the public referendum which can be voted on by the token holders (for explanation see the _token holder_ chapters).
<Figure caption="Simple Majority Proposal - 6" src={require('/docs/learn/governance/img/06_Council_external_proposal_simple_majority/07_council_external_propose.png').default } width="100%" />

#### External Proposal With Super Majority Against Voting Scheme

Repeat the first step as described in the previous chapter - register preimage of the dApp staking register call (if you haven’t already for the purpose of this demonstration).

Under the `Council` UI, select `Propose motion`.

<Figure caption="Super Majority Against Proposal - 1" src={require('/docs/learn/governance/img/07_Council_external_majority_super_majority_against/01_council_super_majority_against.png').default } width="100%" />

This is a generic interface for proposing motion of any kind.

The first value that needs to be set is the `threshold`. In the current scheme, we have 5 council members, and in order to make an external proposal with `Super Majority Against` voting scheme, we require the **entire** council to unanimously agree. Hence, the threshold value is set to **5**.

The second value is the actual `proposal` itself.

Under pallet `democracy`, `externalProposeDefault` call needs to be selected.

For the proposal type, it should be `Lookup`, and the preimage hash with preimage length should be reused - in our case hash is `0xfb7f2d6ab9c04e75969988166cf09365eb9c8d698345dc9853a31618d9802fb9` and length is `55` bytes.

<Figure caption="Super Majority Against Proposal - 2" src={require('/docs/learn/governance/img/07_Council_external_majority_super_majority_against/02_council_super_majority_against.png').default } width="100%" />

Similar as in previous examples, before the motion is executed on the behalf of the council, it needs to be voted on. Make sure to vote `aye` with all 5 council members before closing the call.

<Figure caption="Super Majority Against Proposal - 3" src={require('/docs/learn/governance/img/07_Council_external_majority_super_majority_against/03_council_super_majority_against.png').default } width="100%" />

Once the motion is _closed_, a new external proposal will appear.

<Figure caption="Super Majority Against Proposal - 4" src={require('/docs/learn/governance/img/07_Council_external_majority_super_majority_against/04_council_super_majority_against.png').default } width="100%" />

After the launch period ends, the proposal will be upgraded to a public referendum.

<Figure caption="Super Majority Against Proposal - 5" src={require('/docs/learn/governance/img/07_Council_external_majority_super_majority_against/05_council_super_majority_against.png').default } width="100%" />

#### Cancel An Ongoing Referendum

As the preparation step, make either a public or an external proposal as described in previous steps, and let it be upgraded to a public referendum.

With the referendum created, take note of the _referendum index_. In the case of our example (image below) it is **2**. Note that this number can differ for your local test so make sure to adjust the following steps accordingly.

<Figure caption="Referendum Emergency Cancel - 1" src={require('/docs/learn/governance/img/08_Council_emergency_cancel/01_emergency_cancel.png').default } width="100%" />

Open the `Council` UI, and select `Motions` tab. Press the `Propose motion` button.

<Figure caption="Referendum Emergency Cancel - 2" src={require('/docs/learn/governance/img/08_Council_emergency_cancel/02_emergency_cancel.png').default } width="100%" />

Since `Council` size is 5 members, and 2/3 majority approval is required to execute `emergency cancel`, select **4** as the threshold.

For the `proposal` value, select pallet `democracy` and the `emergencyCancel` call. Make sure to set `refIndex` to the observed value in the previous step (in this case, **ref index is 2**). Execute the call.

Now make sure to vote `aye` with at least 4 distinct `Council` members, and `close` the motion. As a result, the referendum will be canceled.

<Figure caption="Referendum Emergency Cancel - 3" src={require('/docs/learn/governance/img/08_Council_emergency_cancel/03_emergency_cancel.png').default } width="100%" />

<Figure caption="Referendum Emergency Cancel - 4" src={require('/docs/learn/governance/img/08_Council_emergency_cancel/04_emergency_cancel.png').default } width="100%" />

#### Approve/Reject On-chain Treasury Spending Proposal

First step is to make an on-chain treasury spending proposal as described in one of the _token holder_ chapters.
This is the treasury spending proposal for this example:

<Figure caption="Main Council Treasury - 1" src={require('/docs/learn/governance/img/09_Council_treasury_approval/01_council_treasury_approval.png').default } width="100%" />

`Alice` is requesting to payout 1000 LOC tokens to `Bob`. 5% of the requested amount will be reserved from `Alice's` account.

We can observe that this treasury proposal has `index` **0**, (first value on the line). To the right is a `To council` button which _could_ be used to request council’s approval. However, the problem here is that the voting threshold is hardcoded to be **3** which makes this approach unusable for our example.

<Figure caption="Main Council Treasury - 2" src={require('/docs/learn/governance/img/09_Council_treasury_approval/02_council_treasury_approval.png').default } width="100%" />

Because of this UI shortcoming, we’ll reuse the same approach from the previous `Council` interaction examples, by manually building the motion.

<Figure caption="Main Council Treasury - 3" src={require('/docs/learn/governance/img/09_Council_treasury_approval/04_council_treasury_approval.png').default } width="100%" />

The threshold should be set to **4** since _2/3 majority approval_ is required for the motion to pass. The `proposal` must be set to `treasury` and:

* `approveProposal` if the council member wants to approve the spending proposal
* `rejectProposal` if the council member wants to reject the spending proposal

Once the motion is created, user should vote `aye` with council members, and `close` the proposal. In case `approveProposal` was selected, the spending proposal will be approved, and executed when the next spending period occurs.

Here we can observer that the requested amount was awarded to `Bob`, and `Alice's` reserved amount was released. 

<Figure caption="Main Council Treasury - 4" src={require('/docs/learn/governance/img/09_Council_treasury_approval/05_council_treasury_approval.png').default } width="100%" />

In case the spending proposal was rejected, `Bob` wouldn’t be awarded anything, and `Alice's` proposal would have been _slashed_.

#### Membership Management

The `Council` has the ability to change who is the member of each collective - `Council`, `Technical Committee` & the `Community Council`.

For the sake of this example, we’ll swap out an existing `Technical Committee` member with a new one. However, the principle is the same for any other collective.

Under the `Governance -> Tech Comm.` we can observe the current `Technical Committee` members.

<Figure caption="Membership Management - 1" src={require('/docs/learn/governance/img/10_Membership_management/01_membership_management.png').default } width="100%" />

Back under the `Governance -> Council` selection, we select `Propose motion` and fill out the params.

For `threshold` we set it to **4**, since 2/3 majority approval is needed for the membership management actions.

We find the `technicalCommitteeMembership` pallet (name is cutoff in the UI a bit), and select `swapMembers` call. For this example, we’ll swap out `Charlie` for `Dave`.

<Figure caption="Membership Management - 2" src={require('/docs/learn/governance/img/10_Membership_management/02_membership_management.png').default } width="100%" />

After the motion is proposed, make sure to vote `aye` 4 times, then `close` the proposal.

As a result, `Technical Committee` members will be updated.

<Figure caption="Membership Management - 3" src={require('/docs/learn/governance/img/10_Membership_management/03_membership_management.png').default } width="100%" />

The same approach can be reused for all 4 memberships:

* `oracleMembership` (not available on _local-dev_ node, not important for governance)
* `councilMembership`
* `technicalCommitteeMembership`
* `communityCouncilMembership`

Actions which can be taken on membership pallets by the council are:

* `addMember` - adds a new member to the collective
* `swapMember` - swaps out an existing member for a new one
* `removeMember` - remove an existing member from the collective
* `resetMembers` - swap out the entire old membership set for a new one
* `setPrime` - sets the new prime (not important since we don’t plan to utilize it)
* `removePrime` - removes the set prime

### Technical Committee

#### Fast Tracking External Proposals

The first step is to prepare an external proposal. Please refer to the _token holder_ guide for an explanation.

Under the `Governance - Democracy` overview, we can notice the _external_ proposal from the previous step, and the `Fast track` button to the right.

<Figure caption="Fast Track - 1" src={require('/docs/learn/governance/img/11_Fast_track_proposal/01_fast_track.png').default } width="100%" />

Clicking on that button opens up a new window where the _fast track_ call can be prepared.

The `voting period` value is the forced length of the voting period expressed in the number of blocks. In the case of the _local-dev_ node, blocks are produced every 2 seconds, so value **60** means **120 seconds**.

The `delay` value is the forced enactment delay expressed in the number of blocks.

Caller can also immediately vote _aye_ for the proposal if they wish to do so.

Note that the `threshold` is hardcoded to **2.** This is enough for regular fast track where the `voting period` MUST BE greater than the value configured on the runtime level called `FastTrackVotingPeriod`. This is the minimum fast tracking voting period duration.

<Figure caption="Fast Track - 2" src={require('/docs/learn/governance/img/11_Fast_track_proposal/02_fast_track.png').default } width="100%" />

Once the `Fast track` action is complete, a new motion under the `Governance -> Tech. Committee -> Proposals` tab is created.

Since `Alice` already voted _aye_ in the previous step, it’s enough for another account (e.g. `Bob`) to vote _aye_ for the threshold of **2** to be reached, and the motion to be closed.

<Figure caption="Fast Track - 3" src={require('/docs/learn/governance/img/11_Fast_track_proposal/03_fast_track.png').default } width="100%" />

As a result, the external proposals has been fast tracked ahead of the end of the _launch period_, and is immediately upgraded to a public referendum.

<Figure caption="Fast Track - 4" src={require('/docs/learn/governance/img/11_Fast_track_proposal/04_fast_track.png').default } width="100%" />

#### Instant Fast Tracking External Proposals

This is very similar to the previous example with the regular fast track with a small difference - the minimum voting period duration check is ignored. This means that the _voting period_ length can be arbitrary.

The existing UI does not support proposing such a call since as shown in the previous example, `threshold` is hardcoded. However, this can be bypassed quite easily.

As the first step, prepare an external proposal as in the previous example.

Now, under the `Governance -> Tech Comm. -> Motions` tab, prepare a new motion.

The `threshold` is set to **3** because `Technical Committee` has 3 members, and instant fast track requires unanimous agreement.

The proposal hash is the one that’s been already reused in the previous calls many times.

The `votingPeriod` is set to **10 blocks**, even though minimum allowed duration is actually **15 blocks**. But because of the _instant_ approach, this limit is bypassed.

The `delay` of the enactment is set to **10 blocks**.

<Figure caption="Instant Fast Track - 1" src={require('/docs/learn/governance/img/12_Instant_fast_track_proposal/01_instant_fast_track.png').default } width="100%" />

As with all proposals, in order for it to be executed, members need to vote. Make sure to vote `aye` with all **3** `Technical Committee` members, and `close` the proposal.

<Figure caption="Instant Fast Track - 2" src={require('/docs/learn/governance/img/12_Instant_fast_track_proposal/02_instant_fast_track.png').default } width="100%" />

As a result, the external proposal will be upgraded to a _very fast_ fast tracked referendum.

<Figure caption="Instant Fast Track - 3" src={require('/docs/learn/governance/img/12_Instant_fast_track_proposal/03_instant_fast_track.png').default } width="100%" />

#### Veto External Proposal

Any `Technical Committee` member can decide to _veto_ an external proposal that was proposed by the council.

The initial step for this example is to make an external proposal as described in the previous steps.

The next step is to prepare a call like in the following image.

Select `Developer -> Extrinsics`.

The `submit` value should be selected as `technicalCommittee` pallet, `execute` call.

The call that should be executed is `democracy` pallet’s `veto`.

Specify the previously used `preimage hash` and `preimage length`.

Call needs to be executed by a member of the `Technical Committee`.

<Figure caption="Veto - 1" src={require('/docs/learn/governance/img/13_Veto_external_proposal/02_veto.png').default } width="100%" />

The call is executed, and the external proposal is vetoed.

This is just a temporary action, and the `Council` can again make the same proposal after the veto duration passes. It’s still a useful tool in order to potentially protect the network from an internal bad proposal.

<Figure caption="Veto - 2" src={require('/docs/learn/governance/img/13_Veto_external_proposal/03_veto.png').default } width="100%" />

Note that this wasn’t done through a regular _motion_, instead the call was executed directly without any voting.

### Community Council

Unlike previous collectives, there’s no simple-to-use UI available in polkadot-js apps, even though the underlying logic is exactly the same.

The first _example_ will focus on displaying how to make general proposals, vote for them & close them. Since this approach will be required for all the other examples, it made sense to put it into a separate chapter.

#### Making Proposals, Voting & Closing

Unlike for the `Council` and the `Technical Committee`, *polkadot-js apps* does not provide a neat interface for the `Community Council`. This is because the original Polkadot’s Governance V1 only had two collectives - Council and Tech committee.

<Figure caption="Community Council Proposals - 1" src={require('/docs/learn/governance/img/14_Community_council_proposal/01_community_council_proposal.png').default } width="100%" />

Note that Community council does not exist in the dropdown menu.

Regardless of that, polkadot-js apps _extrinsic_ is good enough to provide the functionality required for this to function.

The first step for making a proposal is to select `Developer -> Extrinsics`.

Then the `communityCouncil` pallet must be selected, and the `propose` extrinsic call.

<Figure caption="Community Council Proposals - 2" src={require('/docs/learn/governance/img/14_Community_council_proposal/02_community_council_proposal.png').default } width="100%" />

Even though there’s no neat interface to check who the council members are, it’s easy to do so as shown in the following image. Selecting `Developer -> Chain state`, pallet `communityCouncil` and _members_ storage will list all the accounts that are part of the council.

<Figure caption="Community Council Proposals - 3" src={require('/docs/learn/governance/img/14_Community_council_proposal/03_community_council_proposal.png').default } width="100%" />

Back to the proposal call definition - for the sake of this example, we’ll use dApp registration call, same as before.

The `threshold` value should be set to **4** because 2/3 majority approval is required, and there are **5** members in the council.

<Figure caption="Community Council Proposals - 4" src={require('/docs/learn/governance/img/14_Community_council_proposal/04_community_council_proposal.png').default } width="100%" />

The `lengthBound` parameter refers to the length of the encoded proposal call. It might seem redundant in this case, since clearly the call is well defined above, but due to configurable runtime, this parameter needs to be defined.

The simplest, but not 100% correct approach, is to take the `encoded call data` below, and count the number of bytes it has (don’t do it manually 🙂), and use that as the `lengthBound`. It will be a slight overestimate but it will work just fine. If the user wants to skip this, they can just define a large enough number, like `1000` and it will be ok in most of the cases.

For this particular example, there are 59 bytes in the encoded call.

<Figure caption="Community Council Proposals - 5" src={require('/docs/learn/governance/img/14_Community_council_proposal/05_community_council_proposal.png').default } width="100%" />

Once the transaction is submitted & executed, the following event will be emitted:

<Figure caption="Community Council Proposals - 6" src={require('/docs/learn/governance/img/14_Community_council_proposal/06_community_council_proposal.png').default } width="100%" />

User must take note of the `proposalIndex` and `proposalHash` since those serve as identifiers and will be required for voting & closing.

To vote, select the `vote` call.

For the `proposal` use the `proposalHash` from before, and do the same for `index`.

Vote can either be `aye` or `nay`.

<Figure caption="Community Council Proposals - 7" src={require('/docs/learn/governance/img/14_Community_council_proposal/08_community_council_proposal.png').default } width="100%" />

If at any point user wants to check the status of the proposal, it can be done so by selecting `Developer -> Chain state` and `communityCouncil` as the pallet.

The `proposalOf` storage map will display the call behind the call hash.

The `voting` storage map will display the current status of the voting - number of aye and nay votes, threshold & index.

<Figure caption="Community Council Proposals - 8" src={require('/docs/learn/governance/img/14_Community_council_proposal/09_community_council_proposal.png').default } width="100%" />

Once sufficient number of aye (or nay) votes has been accrued, the proposal can be _closed_. This simply means _executed_ in case enough support, or _canceled_ otherwise. The call can also fail if voting period hasn’t expired.

<Figure caption="Community Council Proposals - 9" src={require('/docs/learn/governance/img/14_Community_council_proposal/10_community_council_proposal.png').default } width="100%" />

The `proposalHash` and `index` are reused from the before. Same goes for the `lengthBound`.

For the `proposalWeightBound` it’s a bit more complicated.

A _good enough solution most of the time_ is to just put in large enough numbers. This will usually be ok for the local dev network. With `refTime` set to `10000000000` and `proofSize` to `10000` it should be good enough.

Programmatically the call weight can be more easily checked but for the sake of this guide, the above hardcoded values should be sufficient.

Once the transaction is submitted & executed, the dApp staking register call will be successfully executed.

This entire process can also be reused for other collectives - `Council` and `Technical Committee`. The UI does the exact same thing _under the hood_.

#### Registering dApps Into dApp Staking

Already covered completely in the introduction chapter **Making Proposals, Voting & Closing**. Please refer to it for the guide on how to do this.

#### Staking On Behalf Of The Community Treasury

Utilizing dApp staking on behalf of the community treasury follows the same approach as already described, but requires an additional wrapping of dApp staking calls.

The first step is to craft the proposal, as explained in the first chapter.

The `proposal` call is a complex one, built from multiple sub-calls.

* `collectiveProxy -> executeCall` - this will ensure the call is executed on behalf of the community treasury account
* `utility -> batch` (`batchAll` can also be used) - allows user to batch calls, to make it easier to stake/unstake/lock/unlock/etc. via collective. Alternative would be making a separate proposal for each action.
* `dappStaking -> lock/stake` - this will lock 1000 LOC tokens & immediately stake them on a dApp
* `lengthBound` - can be calculated as suggested before or some large enough value (e.g. 200) can be used as the placeholder

<Figure caption="Community Council Staking - 1" src={require('/docs/learn/governance/img/15_Community_council_staking/04_community_council_staking.png').default } width="100%" />

Once the `proposal` call is executed, user can observe the `proposalHash` and `index`. This can be used to vote & close the proposal as described in the first chapter.

<Figure caption="Community Council Staking - 2" src={require('/docs/learn/governance/img/15_Community_council_staking/05_community_council_staking.png').default } width="100%" />

Once the call is closed with approval, we can observe that dApp staking actions were executed on behalf of the _community treasury account_.

<Figure caption="Community Council Staking - 3" src={require('/docs/learn/governance/img/15_Community_council_staking/06_community_council_staking.png').default } width="100%" />

#### Approving Community Treasury Spending

For the first step, user should follow the guide for creating a community treasury spending proposal described in the _token holder_ guide.

Once the proposal has been created, community council can either approve it or reject it. For the sake of this example, we will reject it so it differs from the on-chain treasury spending proposal approval example.

Example of the community treasury spending proposal. Note that this is done on the `communityTreasury` pallet.

<Figure caption="Community Council Treasury Handling - 1" src={require('/docs/learn/governance/img/16_Community_council_treasury_request_handling/01_Community_council_treasury.png').default } width="100%" />

<Figure caption="Community Council Treasury Handling - 2" src={require('/docs/learn/governance/img/16_Community_council_treasury_request_handling/02_Community_council_treasury.png').default } width="100%" />

Council proposal is made to _reject_ the spending proposal.

<Figure caption="Community Council Treasury Handling - 3" src={require('/docs/learn/governance/img/16_Community_council_treasury_request_handling/03_Community_council_treasury.png').default } width="100%" />

Following the voting & closing of the proposal, it is executed and spending proposer (in this case `Alice`) is slashed.

<Figure caption="Community Council Treasury Handling - 4" src={require('/docs/learn/governance/img/16_Community_council_treasury_request_handling/04_Community_council_treasury.png').default } width="100%" />
