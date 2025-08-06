---
sidebar_position: 1
sidebar_label: Onchain Governance
title: Astar Onchain Governance
description: Practical Guide to the Different Modules of On-Chain Governance.
---

import Figure from "/src/components/figure"

## 1. Introduction

Astar Onchain Governance is a decentralized mechanism where ASTR token holders can propose, discuss, and vote on important changes and initiatives within the **Astar Collective**. This onchain governance system empowers stakeholders to directly influence key network decisions, including protocol improvements, runtime updates, treasury funding requests, and the management of dApp Staking applications.

The governance system ensures that decisions are made collectively and transparently by the community, reflecting the interests of the network's stakeholders. Proposals may cover a wide range of topics that affect the network's development, security, and long-term sustainability. To participate in Astar onchain governance, users have two primary interfaces available: [**Subsquare**](https://astar.subsquare.io/) and the traditional [**Polkadot.js**](https://dotapps-io.ipns.dweb.link/?rpc=wss://astar.public.blastapi.io#/explorer) interface. Subsquare provides a user-friendly interface designed for broader community participation, while Polkadot.js offers a more technical approach for advanced users.

This guide will walk you through the process of participating in Astar onchain governance using the **Subsquare** platform. For those who prefer the technical approach, you can refer to the [**Astar Governance Technical Guide**](/docs/learn/governance/technical_guide.md). For a comprehensive understanding of Astar governance structure and processes, we encourage you to read the [**Astar Governance Overview**](/docs/learn/governance/index.md) in our documentation.

:::info Polkadot.js

If you want to learn more about Polkadot.js, check out this [**Polkadot Official guide**](https://wiki.polkadot.com/general/polkadotjs-ui/).

:::
## 2. Subsquare for Onchain Governance

[**Subsquare**](https://astar.subsquare.io/) serves as the primary governance platform for Astar Network, providing a comprehensive and user-friendly interface that makes onchain governance participation accessible to all community members regardless of their technical expertise. The platform represents the cornerstone of Astar's democratic decision-making process, offering a sophisticated yet intuitive environment where ASTR token holders can actively shape the network's future.

Through **Subsquare**, you can:

- View active proposals.
- Create your own proposals.
- Participate in discussions.
- Cast your votes on governance decisions.
- Track the progress of proposals from submission to execution.

The purpose of this guide is to demonstrate how to utilize the **Subsquare** platform for governance actions on **Astar Network**.
Working assumption is that the reader has familiarized themselves with the governance model, and will refer back to the docs if needed. This will be a **practical guide** for users.

:::info Astar Subsquare

Check out the Subsquare version for [**Astar here**](https://astar.subsquare.io/) and get familiar with the existing proposals.

:::
### 1. Account Selection

Both **Substrate** and **EVM** style accounts can participate in governance actions on **Astar Network** through the Subsquare platform, providing flexibility for users across different blockchain ecosystems.

When the user visits [**Astar Subsquare**](https://astar.subsquare.io/) and clicks the **connect** button, they will be able to choose from multiple wallet options displayed on the screen.

<Figure caption="Substrate Account Selection" src={require('/docs/use/img/25_Subsquare_wallet_account_selection/wallet_account_1.png').default } width="100%" />

By default, the available compatible Substrate wallet options will be displayed.

<Figure caption="EVM Account Selection" src={require('/docs/use/img/25_Subsquare_wallet_account_selection/wallet_account_2.png').default } width="100%" />

If the users wants to use their EVM accounts, they should select `EVM` under the option. Here, the users can select the desired EVM wallets.

## 3. Governance Roles

The **Astar Network governance** system is composed of multiple roles, each with distinct responsibilities and powers within the onchain decision-making process.

This section outlines the main governance roles, such as **Token Holders**, **Community Council**, **Main Council**, and **Technical Committee**. Finally, explains the specific actions each can perform within the network. Understanding these roles is key to participating meaningfully in proposals, voting, treasury management, and overall protocol evolution.

## 3.1. Token Holder

Token holders are the core of Astar Network’s governance system, holding primary decision-making power through their ASTR tokens. They play a central role in shaping the network’s evolution by proposing and voting on runtime upgrades, treasury funding, and referenda that influence key parameters. The stake-weighted and conviction voting systems allow them to increase their influence by locking tokens for longer periods, encouraging long-term alignment with the network’s success.

Now let’s understand what **Token Holders** can **do** and **how**, using the Subsquare platform.

### 3.1.1 Submitting an Onchain Proposal

All ASTR holders can create an onchain proposal through three different tracks: **Public Proposal**, **Main Treasury**, or **Community Treasury**. In this guide, we’ll walk through the step-by-step process for creating a proposal in each of these tracks.

**Track #1: Public Proposal**

**Step 1: Create the Preimage**

The first thing you need to do is create a `preimage`, which will contain the actions you want to execute onchain. To do this, go to the `Advanced/Preimages` section in the Subsquare left sidebar.

<Figure caption="Create a preimage - Part 1" src={require('/docs/use/img/17_Subsquare_preimage/preimage-1.png').default } width="100%" />

The existing preimages are displayed on the page. They can be reused by anyone to propose a governance action, any number of times. Review the selected params and copy the preimage hash.

In order to create a new preimage, click on the `+ New Preimage` button.

<Figure caption="Create a preimage - Part 2" src={require('/docs/use/img/17_Subsquare_preimage/preimage_2.png').default } width="100%" />

As you can see on the screen, you can either create the preimage, which is the first option, or create a remark proposal using the second option. This time, we’ll go with the **first option** (New Preimage).

For the sake of this example, we will create a preimage of a `remarkWithEvent` extrinsic call, containing **LGM!** as the _message_.

:::info Hash and Lenght

Please take note of the *hash* and *length*; these will be important for later use.

:::
Submit the message and wait for the transaction to be confirmed and finalized.

<Figure caption="Create a preimage - Part 3" src={require('/docs/use/img/17_Subsquare_preimage/preimage_3.png').default } width="100%" />

:::info Treasury Spending

If your intention is to request treasury funds through a Public Proposal, there are a few steps you must take before creating the preimage:

* First, go to `Treasury` or `Community Treasury` and create your proposal. Once it’s created, you’ll be able to edit the description and other visual elements of your proposal.
* As soon as the proposal is created, it will provide you with a numeric ID (e.g., 4). You’ll need this ID to create your preimage.
* Finally, in your preimage, you should select the extrinsic `treasury.approveProposal` (or `communitytreasury.approveProposal`, depending on where you created the proposal) and paste the ID you obtained.

That’s it! With this preimage, you’ll be able to create a Public Proposal and allow any ASTR holder to vote on the treasury spending proposal you have selected. You can follow the steps below.

:::
Once the preimage has been created, it will be displayed on the main `Preimage` page.

<Figure caption="Create a preimage - Part 4" src={require('/docs/use/img/17_Subsquare_preimage/preimage_4.png').default } width="100%" />

:::info Unnote button

Note that the newly created image has an `Unnote` button. This is because the current user is the creator of the preimage.

Since at this point the preimage is not yet used in any proposal, it can be unnoted, which will remove it from the list of preimages, refunding the deposit.

:::
**Step 2: Create a Public Proposal**

Once the `preimage` has been created, we can proceed to create the Public Proposal. To do this, go to the `Democracy/Public Proposals` section in the sidebar.

Here the existing public proposals are displayed. Some have been tabled (upgraded to a referendum), some have been proposed, and others might be canceled.

<Figure caption="Public Proposal - Part 1" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-1.png').default } width="100%" />

Click on the `New Proposal` button to create a new `Public Proposal`. Since a preimage was created in the previous step, it can be used to create a new proposal.

<Figure caption="Public Proposal - Part 2" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-2.png').default } width="100%" />

The hash of the preimage is required to create a new proposal. In this case, hash of the preimage created earlier is simply copied and pasted into the `Preimage` field and the lengh will be automatically filled out.

:::info Locked Balance

The `Locked Balance` refers to the amount being _deposited_ **(not locked)** for the proposal. In case the proposal is canceled, the deposit will be slashed. In case the proposal is tabled, the deposit will be refunded.

:::
<Figure caption="Public Proposal - Part 3" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-3.png').default } width="100%" />

After submitting the proposal, some time needs to pass before the transaction is confirmed and finalized.

<Figure caption="Public Proposal - Part 4" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-4.png').default } width="100%" />

Afterwards, it can be observed under the list of public proposals. The status will be marked as `Proposed`, since it hasn't been _tabled_ (or _canceled_) yet.

<Figure caption="Public Proposal - Part 5" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-5.png').default } width="100%" />

Clicking on the proposal will display more details, and allow to take further actions.

<Figure caption="Public Proposal - Part 6" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-6.png').default } width="100%" />

Proposals can be edited by clicking on the `Edit` button. Title and description can be changed, even a graphic image can be uploaded. Users can discuss the proposal in the comments section.

<Figure caption="Public Proposal - Part 7" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-7.png').default } width="100%" />

Clicking the `Second` button to support the proposal, increase its chances of being tabled and upgraded to a referendum. The user has to _match_ the deposit of the proposal, which is displayed on the page. It is possible to second a proposal multiple times.

:::info Seconds

Any user, including the proposer, may support their proposal as many times as they wish. These **seconds** will be released once the proposal is **tabled** (upgraded to a referendum).

:::
<Figure caption="Public Proposal - Part 8" src={require('/docs/use/img/18_Subsquare_public_proposal/public-proposal-8.png').default } width="100%" />

**Track #2: Main Treasury**

Another way to execute onchain actions without going through public referenda is through the approval of the **Main Council** or the **Technical Committee**. Clicking on the `Treasury` tab on the sidebar will display the current state of the treasury & spending requests.

<Figure caption="Treasury - Part 1" src={require('/docs/use/img/19_Subsquare_Treasury/treasury_1.png').default } width="100%" />

Clicking on the `New Proposal` button will allow the creation of a new spending proposal. 

User needs to pick the `payout amount` & the `beneficiary`. The `Proposal bond` refers to the amount that needs to be deposited in order to create the proposal. 

:::info Approve or Rejected

If the proposal is rejected, the bond will be `slashed`. Otherwise, the bond will be `refunded`.

:::
<Figure caption="Treasury - Part 2" src={require('/docs/use/img/19_Subsquare_Treasury/treasury_2.png').default } width="100%" />

After submitting the proposal, it will be displayed on the treasury page.
The proposal name & description can be edited.

<Figure caption="Treasury - Part 3" src={require('/docs/use/img/19_Subsquare_Treasury/treasury_3.png').default } width="100%" />

**Track #3: Community Treasury**

:::info Community Treasury

The third track for creating onchain proposals is using the Community Treasury, which allows you to request spending, include/exclude dApps from dApp Staking, and execute other actions. To do this, you can reuse the same steps mentioned above.

:::
:::tip Community Council

All proposals requesting actions or expenditures from the Community Treasury will be reviewed, approved, or rejected by the Community Council. More details on this below.

:::
### 3.1.2 Vote Delegation

Any ASTR token holder can delegate their tokens so that their voting power can be used in governance proposals. It’s important to highlight that when you delegate your tokens, they never leave your wallet. Once delegated, you can revoke the delegation at any time.

Now, let's understand how to delegate your tokens using the **Subsquare** interface.

**Steps to delegate**

Click on the `Delegation` tab on the sidebar to access the vote delegation page. This is an overview of _delegation_ related actions and statistics.

Clicking on the `+ Delegate` button allows you to delegate votes to another account

<Figure caption="Vote Delegation - Part 1" src={require('/docs/use/img/20_Subsquare_Delegation/delegation_1.png').default } width="100%" />

The `Target` is the account to which the votes are being delegated to. The `Balance` is the amount of native currency we're delegating. This is the amount that will be _locked_.

:::info Delegating Votes

The action of delegating voting power **DOES NOT** transfer the ownership of the tokens. They are merely _locked_ for normal use, but remain in the ownership of the delegator.

:::
The `Conviction` setting determines how much your voting power is amplified in exchange for a longer token lock period.

<Figure caption="Vote Delegation - Part 2" src={require('/docs/use/img/20_Subsquare_Delegation/delegation_2.png').default } width="100%" />

Once the delegation has been submitted, it will be displayed on the delegation page. Clicking on the `Details` label will display more information about the delegation.

<Figure caption="Vote Delegation - Part 3" src={require('/docs/use/img/20_Subsquare_Delegation/delegation_3.png').default } width="100%" />

The amount and conviction are displayed. Clicking on the `X` button allows to _undelegate_ the votes, which will begin the unlocking period for the tokens.

<Figure caption="Vote Delegation - Part 4" src={require('/docs/use/img/20_Subsquare_Delegation/delegation_4.png').default } width="100%" />

Clicking on the `Account` tab on the sidebar will display the account details. The 100 SBY locked in previous steps with conviction set to **3** is displayed, equaling a total of 8 days of unlocking period.

<Figure caption="Vote Delegation - Part 5" src={require('/docs/use/img/20_Subsquare_Delegation/delegation_5.png').default } width="100%" />

### 3.1.3 Voting

Any ASTR token holder can vote on active proposals within Astar’s governance. Tokens in both the `Transferable` and `Locked` sections can be used to participate in governance processes, meaning that tokens staked in Astar dApp Staking can also be used for voting.

With that said, let’s understand how the voting process works on **Astar Subsquare**.

**Steps to vote**

Clicking on the `Referenda` tab on the sidebar, under the `Democracy` tab, will display all of the referenda, including the ongoing ones, failed ones & executed ones.

For the sake of this example, the referendum named **"Proposal for docs"** will be used.

<Figure caption="Voting - Part 1" src={require('/docs/use/img/21_Subsquare_voting/voting_1.png').default } width="100%" />

Clicking on it will display more details about the referendum as can be seen below.

The user can decide to vote by clicking on the `Vote` button.

<Figure caption="Voting - Part 2" src={require('/docs/use/img/21_Subsquare_voting/voting_2.png').default } width="100%" />

Vote can be `Aye` or `Nay`, or can even be split between the two options if the user desires.

The token amount to be used for voting needs to be specified, this is the amount that will be _locked_ for the duration of the referendum and more if the referendum passes in the favor of the users vote. E.g. voting `aye` for a referendum, and having it _fail_ will result in the tokens being immediately unlockable, without any waiting period.

Conviction can be set to amplify (or diminish) the voting power, at the expense of a longer (or shorter) unlocking period.

<Figure caption="Voting - Part 3" src={require('/docs/use/img/21_Subsquare_voting/voting_3.png').default } width="100%" />

After the transaction is confirmed and finalized, the vote will be displayed on the referendum page. Since only one user has voted (us), the total sum of the _aye_ votes is equal to the amount we've voted with.

<Figure caption="Voting - Part 4" src={require('/docs/use/img/21_Subsquare_voting/voting_4.png').default } width="100%" />

In case a user changes their mind, the vote can be removed by clicking on the `Remove Vote` button. This won't trigger any _unlocking period_ and the user is free to cast their vote again.

<Figure caption="Voting - Part 5" src={require('/docs/use/img/21_Subsquare_voting/voting_5.png').default } width="100%" />

:::tip Example Case

This is an example of an account that is voting but has some votes delegated to it. In this particular situation, the account has:

* 100 SBY free balance
* 300 SBY worth of voting power delegated to it.

Although not visible on this image, the account who delegated the votes did it with 100 SBY and conviction set to **3**.

The account votes with 50 SBY, conviction set to **4**. This means that the total amount of votes for this account will be: **50 SBY x 4 + 300 SBY = 500 SBY**.

:::
<Figure caption="Voting - Part 6" src={require('/docs/use/img/21_Subsquare_voting/voting_6.png').default } width="100%" />

The new total turnout is 200 SBY, 50 SBY from the first `aye` vote, another 50 SBY from the second `aye` vote, and 100 SBY from the delegated vote.

The total votes toward `aye` is 600 SBY in total, 100 SBY from the first `aye` vote, and another 500 SBY from the second `aye` vote.

<Figure caption="Voting - Part 7" src={require('/docs/use/img/21_Subsquare_voting/voting_7.png').default } width="100%" />

## 3.2. Community Council

### Treasury Spending Approval

Clicking on the `Motions` tab under the `Community Council` sidebar tab will open a view of the `Community Council` motions.

Clicking on the `New Proposal` button will prompt the user to create a new motion.

<Figure caption="Community Treasury Voting - 1" src={require('/docs/use/img/22_Subsquare_comm_treasury/comm_treasury_1.png').default } width="100%" />

---

The focus of this example is community treasury spending approval.

<Figure caption="Community Treasury Voting - 2" src={require('/docs/use/img/22_Subsquare_comm_treasury/comm_treasury_2.png').default } width="100%" />

---

The proposal Id (can be checked under the Community Treasury tab) is required to create a new motion.
Selecting an Id will display the proposal name, which also links to the proposal details.
Community council members should ensure they're proposing and voting on the correct proposal.

<Figure caption="Community Treasury Voting - 3" src={require('/docs/use/img/22_Subsquare_comm_treasury/comm_treasury_3.png').default } width="100%" />

---

Once the proposal creation is submitted, it will be displayed on the `Motions` page.

<Figure caption="Community Treasury Voting - 4" src={require('/docs/use/img/22_Subsquare_comm_treasury/comm_treasury_4.png').default } width="100%" />

---

Clicking on it will display more details, and allow for a vote to be cast.

<Figure caption="Community Treasury Voting - 5" src={require('/docs/use/img/22_Subsquare_comm_treasury/comm_treasury_5.png').default } width="100%" />

---

In this case, one of the council members votes _aye_.

<Figure caption="Community Treasury Voting - 6" src={require('/docs/use/img/22_Subsquare_comm_treasury/comm_treasury_6.png').default } width="100%" />

### dApp Staking With Community Treasury

This is more complex since it requires the user to understand the basics of dApp staking backend.
The proposal call needs to be manually crafted and submitted to the blockchain.

The first thing to select is the threshold.
This can be calculated by taking the expected vote threshold (e.g. 50% or 2/3 of the quorum) and comparing it to the total number of members in the council.
For this particular case, the threshold is set to 2/3 of the council members and we have 3 council members so we set it to 2.

The next is the call builder.
When utilizing the community treasury, the call needs to start with `collectiveProxy -> executeCall`.
After that, the dApp staking call needs to be built. It's possible, and encouraged, to use the _batch_ calls to simplify the voting process.

<Figure caption="dApp Staking - 1" src={require('/docs/use/img/23_Subsquare_dapp_staking/comm_council_ds_1.png').default } width="100%" />

### Registering a New dApp

Unlike the actual staking with the community treasury, registering a new dApp **does not** require the `collectiveProxy`.
Instead, the call should directly propose `dappStaking -> register`.

<Figure caption="dApp Staking - 2" src={require('/docs/use/img/23_Subsquare_dapp_staking/comm_council_ds_2.png').default } width="100%" />

## Main Council

The `Main Council` UI support is rudimentary at the moment.
They can approve & reject _main treasury_ spending proposals, same as the `Community Council`.
However, other actions require building the call manually.

Please refer to [the technical guide](/docs/learn/governance/technical_guide) for more information on how to construct these calls using the Polkadot-js App interface.

Calls can also be constructed using the `Subsquare` interface, but users should refer to the linked technical guide for more information.

<Figure caption="Main Council - 1" src={require('/docs/use/img/24_Subsquare_main_council/main_council_1.png').default } width="100%" />

Clicking on `New Common` will allow the council member to create a new motion.
It's important to keep the threshold number in mind, since requirement may differ between different calls.

For external proposals, it is recommended to use the Polkadot-js App interface.

## Technical Committee

The `Technical Committee` UI support is rudimentary and requires manual call construction.

Please refer to [the technical guide](/docs/learn/governance/technical_guide) for more information on how to construct this calls using the Polkadot-js App interface.

The assumption is that technical committee members are technically proficient and will refer to the linked technical guide for more information.
