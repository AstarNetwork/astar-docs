---
sidebar_position: 3
title: Subsquare Guide
---

import Figure from "/src/components/figure"

## Intro

:::note
This is _work-in-progress_.
All information here should be correct, but the guide will be updated prior to the launch on Astar.
:::

The purpose of this guide is to demonstrate how to utilize **Subsquare** platform for governance actions on Astar & Shibuya.

* [Shibuya Subsquare](https://shibuya.subsquare.io/)
* Astar Subsquare (_coming soon_)

## Preimages

Select the `Preimage` tab on the sidebar.

<Figure caption="Preimage - 1" src={require('/docs/learn/governance/img/17_Subsquare_preimage/preimage_1.png').default } width="100%" />

The existing preimages are displayed on the page.
They can be reused by anyone to propose a governance action, any number of times.

---

In order to create a new preimage, click on the `New Preimage` button.

<Figure caption="Preimage - 2" src={require('/docs/learn/governance/img/17_Subsquare_preimage/preimage_2.png').default } width="100%" />

--

Again, click on the `New preimage` button.
This will allow to create an arbitrary new preimage.

For the sake of this example, we will create a preimage of a `remarkWithEvent` extrinsic call, containing **LGM!** as the _message_.

Note the _hash_ and _length_, as these are important for later use.

Submit the message and wait for the transaction to be confirmed & finalized.

<Figure caption="Preimage - 3" src={require('/docs/learn/governance/img/17_Subsquare_preimage/preimage_3.png').default } width="100%" />

---

Once the preimage has been created, it will be displayed on the main `Preimage` page.

<Figure caption="Preimage - 4" src={require('/docs/learn/governance/img/17_Subsquare_preimage/preimage_4.png').default } width="100%" />

Note that the newly created image has an `Unnote` button. This is because the current user is the creator of the preimage.
Since at this point the preimage is not yet used in any proposal, it can be unnoted, which will remove it from the list of preimages, refunding the deposit.

## Public Proposal

Select the `Public Proposal` tab on the sidebar, under the `Democracy` section.

<Figure caption="Public Proposal - 1" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_1.png').default } width="100%" />

Here the existing public proposals are displayed. Some have been tabled (upgraded to a referendum), some are just proposed, some might be cancelled.

---

Click on the `New Proposal` button to create a new public proposal.
Since a preimage was created in the previous step, it can be used to create a new proposal.

<Figure caption="Public Proposal - 2" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_2.png').default } width="100%" />

---

The hash of the preimage is required to create a new proposal.
In this case, hash of the preimage created earlier is simply copied and pasted into the `Preimage` field.

The `Locked Balance` refers to the amount being _deposited_ (not locked) for the proposal.
In case the proposal is cancelled, the deposit will be slashed.
In case the proposal is tabled, the deposit will be refunded.

<Figure caption="Public Proposal - 3" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_8.png').default } width="100%" />

---

After submitting the proposal, some time needs to pass before the transaction is confirmed and finalized.

<Figure caption="Public Proposal - 4" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_3.png').default } width="100%" />

---

Afterwards, it can be observed under the list of public proposals.
The status will be marked as `Proposed`, since it hasn't been _tabled_ (or _cancelled_) yet.

<Figure caption="Public Proposal - 5" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_4.png').default } width="100%" />

---

Clicking on the proposal will display more details, and allow to take further actions.

<Figure caption="Public Proposal - 6" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_5.png').default } width="100%" />

---

Proposal can be edited by clicking on the `Edit` button. Title and description can be changed, even an graphical image can be uploaded.
Users can discuss the proposal in the comments section.

<Figure caption="Public Proposal - 7" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_6.png').default } width="100%" />

---

Clicking on the `Second` button will allow the user to second the proposal, increasing the chances of it being tabled and upgraded to a referendum.
The user has to _match_ the deposit of the proposal, which is displayed on the page.
It is possible to second a proposal multiple times.

<Figure caption="Public Proposal - 8" src={require('/docs/learn/governance/img/18_Subsquare_public_proposal/public_proposal_7.png').default } width="100%" />

## Treasury

Clicking on the `Treasury` tab on the sidebar will display the current state of the treasury & spending requests.

<Figure caption="Treasury - 1" src={require('/docs/learn/governance/img/19_Subsquare_Treasury/treasury_1.png').default } width="100%" />

---

Clicking on the `New Proposal` button will allow to create a new spending proposal.
User needs to pick the payout amount & the beneficiary.
The _Proposal bond_ refers to the amount that needs to be deposited in order to create the proposal.
In case the proposal is rejected, the bond will be slashed.
Otherwise, the bond will be refunded.

<Figure caption="Treasury - 2" src={require('/docs/learn/governance/img/19_Subsquare_Treasury/treasury_2.png').default } width="100%" />

---

After submitting the proposal, it will be displayed on the treasury page.
The proposal name & description can be edited.

<Figure caption="Treasury - 3" src={require('/docs/learn/governance/img/19_Subsquare_Treasury/treasury_3.png').default } width="100%" />

## Vote Delegation

Click on the `Delegation` tab on the sidebar to access the vote delegation page.
This is an overview of _delegation_ related actions and statistics.

Clicking on the `+ Delegate` button will allow to delegate votes to another account.

<Figure caption="Vote Delegation - 1" src={require('/docs/learn/governance/img/20_Subsquare_Delegation/delegation_1.png').default } width="100%" />

---

The `Target` is the account to which the votes are being delegated to.
The `Balance` is the amount of native currency we're delegating. This is the amount that will be _locked_.
:::important
The action of delegating voting power **DOES NOT** transfer the ownership of the tokens. They are merely _locked_ for normal use, but remain in the ownership of the delegator.
:::

The `Conviction` allows us to amplify the voting power being transferred, at the expense of a longer _unlock_ period.

<Figure caption="Vote Delegation - 2" src={require('/docs/learn/governance/img/20_Subsquare_Delegation/delegation_2.png').default } width="100%" />

---

Once the delegation has been submitted, it will be displayed on the delegation page.
Clicking on the `Details` label will display more information about the delegation.

<Figure caption="Vote Delegation - 3" src={require('/docs/learn/governance/img/20_Subsquare_Delegation/delegation_3.png').default } width="100%" />

---

The amount and conviction are displayed.
Clicking on the `X` button allows to _undelegate_ the votes, which will begin the unlocking period for the tokens.

<Figure caption="Vote Delegation - 4" src={require('/docs/learn/governance/img/20_Subsquare_Delegation/delegation_4.png').default } width="100%" />

---

Clicking on the `Account` tab on the sidebar will display the account details.
The 100 SBY locked in previous steps with conviction set to **3** is displayed - equaling total of 8 days of unlocking period.

<Figure caption="Vote Delegation - 5" src={require('/docs/learn/governance/img/20_Subsquare_Delegation/delegation_5.png').default } width="100%" />
