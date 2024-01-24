---
sidebar_position: 2
---

import Figure from "/src/components/figure"

# Register dApp

Once you have been approved by the Astar Council under Astar governance, you can take the following steps:

## Step 1

Before you can register your dApp or project, make sure you have :

- An [Astar Native developer wallet](/docs/use/manage-wallets/create-wallet) with some tokens to cover gas fee;
- Deploy a smart contract in our ecosystem and verify the contract in an explorer. The smart contract can be on Astar Native (WASM) or Astar EVM. For the explorer, you can use [Subscan](https://astar.subscan.io/) for Native or [Blockscout](https://astar.blockscout.com/) for EVM.

:::info

- The first option is to use one of your own smart contracts and verify it.
- The second option is only for those who don't deal with smart contracts. Deploy our `helloworld.sol` contract and provide all the information in the header of the contract. [Template contract](https://github.com/AstarNetwork/builders-program/blob/main/hellowold.sol).

:::

Once the vote is passed, you can share your **developer address** and the **verified smart-contract address** in the discussion of your dApp Staking application on the Astar Forum;

The Astar Foundation will whitelist your addresses for dApp Staking registration and inform you that you can proceed to step 2.

## Step 2

After whitelisting, visit the dApp Staking page on the [Astar portal](https://portal.astar.network/astar/dapp-staking/discover).  
Connect your wallet and choose the network on which you are going to register for dApp Staking *(Astar Network or Shiden Network)*;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Networks.png').default } width="90%" /> 

If the wallet has been whitelisted, a banner with a `Register Now` button, like the one below, will appear:

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Registration_banner.png').default} width="80%" />

Click on **Register Now** and fill in the form with all your project details:

- Name of your dApp or project;
- Logo (Recommended size 512x512 px);
- Contract addres *(automatically filled)*;
- Project URL;
- At least 4 images of your project (Recommended a images with size 16:9 within 1 MB);
- Builders information (person contributing to the project);
- Description of the project;
- Community links;
- Category and tags;

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Registration_1.png').default} width="80%" />

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Registration_2.png').default} width="80%" />

Once you've filled in all your details, click **Next** button and enter the description that will appear on your **New Listing Card**;

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Promotion_card_2.png').default} width="100%" />

Finally, click on **Register** and sign the transaction on the network;

Congratulations! 🎉 Your project is now listed in dApp Staking and you can start your campaign and communication to attract stakers.

<Figure src={require('/docs/use/dapp-staking/for-devs/img/dApp_page_2.png').default} width="80%" />

:::tip

When your dApp is deployed, we would appreciate it if you shared this with your community. We have created a template that you can use to write the article. You can find it [here](https://astarnetwork.notion.site/dApp-staking-template-Astar-Network-07d029f2d89644f48a17650522968682).

:::