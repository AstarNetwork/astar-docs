---
sidebar_position: 3
sidebar_label: Off-chain Governance
title: Astar Townhall - Off-chain Governance
---
import Figure from '/src/components/figure'

[Astar Off-chain Governance](https://astargov.com/astar) is powered by Townhall, a platform designed to empower Protocol or DAO communities with governance tools and features. For more information, visit the [Townhall website](https://polkadot.townhallgov.com/).

Currently, Astar Governance operates off-chain, meaning no governance actions occur or are executed on the blockchain directly. Voting power on Astar Townhall is determined by ASTR stakeholders' token balances. ASTR holders can vote using tokens that are either transferable or locked in dApp Staking on Astar Native (Substrate), or transferable on Astar EVM. However, ASTR tokens used in DeFi smart contracts or in dApp staking on Astar EVM do not count towards voting power.

This documentation explains the entire process of a governance proposal on Astar Network, from initiating a discussion to opening a vote and participating in voting as Astar stakeholders.

**Important pages :**

- Astar forum: https://forum.astar.network/
- Astar Townhall: https://astargov.com/astar

A governance proposal can address protocol improvements, runtime updates, dApp Staking listings or delistings, treasury funding requests for infrastructure, dApps, projects, events, community activities, or any other topic or technical enhancement beneficial to the network, ecosystem, and ASTR stakeholders.

For additional information about the platform not covered here, please refer to the [Townhall documentation](https://docs.townhallgov.com/townhall).

:::tip
A governance proposal is divided into three parts:

- A discussion period lasting a minimum of 7 days;
- A voting period lasting 7 days;
- An execution period lasting a few days to a few weeks, depending on the complexity of the proposal.
:::

## Initiating a governance discussion

The first step is to publish a governance proposal on one of Astar Network's platforms: the [Astar forum](https://forum.astar.network/) or [Astar Townhall](https://astargov.com/astar). The choice of platform is up to the proposer, and there is no difference between them.

The initial post should clearly state the goal of the discussion or proposal and provide all relevant information to help the community understand and make an informed decision.

You can refer to one of the proposals on the Astar forum as an example:

- [dApp Staking Application](https://forum.astar.network/t/talisman-dapp-staking-proposal/5747)
- [Treasury Funding](https://forum.astar.network/t/incentives-grant-from-astar-treasury-bringing-bifrost-vdot-to-astar-for-the-dot-unlock/5262)
- [Tokenomic update](https://forum.astar.network/t/astar-foundation-burning-proposal-of-5-of-astar-genesis-allocation/6923)

### A. Initiate a forum discussion. *(Recommended)*

1. Log in or register on the [Astar forum](https://forum.astar.network/);
2. Click on the `+ New topic` to start a new topic;
3. Enter a clear title, choose the appropriate category (`Astar Network Polkadot`, `Astar Initiatives`, `Astar zkEVM`, `Shiden`, etc.) Make sure it has the `Proposal` tag too;
4. Enter your message in the text box and format it according to your preferences;
5. Review your proposal in the preview box and confirm by clicking on `+ Create topic` .

<Figure src={require('/docs/use/img/astar_townhall_1.png').default } width="90%" /> 

### B. Initiate an Astar Townhall discussion.

1. Access [Astar House on Astar Townhall](https://astargov.com/astar/discussions) and connect your Astar wallet (Native or EVM);
2. In the Discussions tab, click on `+ New post` to start a new discussion;
3. Fill in the required details such as Title, Description, and optionally, Tags;
    
<Figure src={require('/docs/use/img/astar_townhall_2.png').default } width="100%" /> 
    
4. Click on `Save And Preview` to review the discussion details;
    
<Figure src={require('/docs/use/img/astar_townhall_3.png').default } width="100%" /> 
    
5. Click on `Create Discussion` and sign with your Astar wallet to publish it.  
**Important: A discussion cannot not be edited once published.**

Once published on the forum or Astar Townhall, the proposal enters a discussion period of at least 7 days. During this time, community members and stakeholders can ask questions and share feedback and opinions in order to decide on their vote.  
This period is crucial for convincing voters to support your proposal.

## Moving a discussion to a governance proposal

After the discussion period ends, you should start the governance voting proposal on the Astar Townhall for an additional 7 days.

**A. Initiate Voting on Astar Townhall:**

1. Access [Astar House on Astar Townhall](https://astargov.com/astar/proposals) and connect your Astar wallet (Native or EVM);

2. In the Proposal tab, click on `+ New post` to start a new proposal;

3. Fill in the required details such as Title, Description, and optionally, Tags;
    
<Figure src={require('/docs/use/img/astar_townhall_4.png').default } width="100%" /> 
    
4. Include the link to the discussion from the Astar Forum or Astar townhall in your proposal description;

5. Select one of the six available Voting Types. We strongly advise opting for the **basic voting** option.
    1. ***Basic voting*** - *Users can choose to vote for, against or abstain.*
    2. ***Single choice voting*** - *User can choose one out of the provided options.*
    3. ***Approval voting*** - *User needs to either approve or disapprove of each provided option. It is mandatory to provide a stance on each listed option.*
    4. ***Quadratic voting*** - *Users can choose to allocate more voting power to  preferred options. Ensure  distributing  votes accordingly.*
    5. ***Ranked choice voting*** - *Users are required to rank all options in order of preference. Make sure to assign a unique rank to each choice*
    6. ***Weighted voting*** - *Users can assign different weights to their votes. Ensure allocating weights to each option as per preference of choice*

6. Set the voting period for **7 days**, starting from the moment the proposal is published.

7. Click `Save And Preview` to review the proposal details;
    
<Figure src={require('/docs/use/img/astar_townhall_5.png').default } width="100%" /> 
    
8. Click `Create Post` and sign with your Astar wallet to publish it.  
**Important: A proposal cannot be edited once published.**

After creating the proposal on Astar Townhall, inform the community to participate in the vote. Be sure to share the voting proposal link in the related discussion on the Astar Forum or on Astar Townhall.

## Voting power & How to Vote

When the proposal is published, a snapshot of the entire network is taken and voting powers are calculated and allocated to ASTR holders according to their ASTR balance.

Voting powers include:

- Tokens transferable on Astar Native
- Tokens locked in dApp Staking on Astar Native
- Tokens transferable on Astar EVM

**Vote on a governance proposal:**.

1. Access [Astar House on Astar Townhall](https://astargov.com/astar/proposals) and connect your Astar wallet (Native or EVM) ;
2. In the Proposal tab, select the proposal you want to vote on;
3. Select your voting choice(s) and add a comment if you want;
4. Sign the message via your wallet provider to confirm the vote;
5. Share the proposal with your network to encourage participation.

<Figure src={require('/docs/use/img/astar_townhall_6.png').default } width="100%" /> 

## Enactment phase

If the proposal has been approved by the Astar community after the end of voting and requires on-chain implementations or actions, inform the Astar Foundation in the Astar channels (Forum, Discord, Telegram). 

<Figure src={require('/docs/use/img/astar_townhall_7.png').default } width="60%" /> 

The Astar Foundation will implement the proposal in accordance with the community's decision, unless it is deemed harmful to the network and the interests of the ecosystem.

If you need further support or have any questions, please don't hesitate to contact the official team on the [Astar Discord server](https://discord.com/invite/astarnetwork).