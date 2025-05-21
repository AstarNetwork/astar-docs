---
sidebar_position: 2
sidebar_label: How to Apply
title: Astar dApp Staking Application Guide
---

import Figure from "/src/components/figure"


# Astar dApp Staking Application Guide

This guide provides a complete overview of how to apply for **dApp Staking on Astar** — whether your project is deployed **natively on Astar Network** or operates externally (e.g., on **Soneium**, **Ethereum**, **Polkadot**, or other parachains).

While all projects must meet baseline technical and governance requirements, **external dApps** must show **measurable contributions** to the Astar ecosystem, including:

- **Meaningful ASTR token utility**
- **Long-term commitment** to Astar

To be eligible, external projects must clearly demonstrate value to the Astar ecosystem, especially via ASTR token integration (e.g., payment, staking, rewards, governance).

---

## Overview of the Process

This guide walks you through the process from **application to onchain approval**, covering both native and external deployment scenarios.

---

## Step 1: Submit an Application on the Astar Forum

Before applying, ensure your project meets the **latest Astar dApp Staking requirements**, including:

- Use or utility of the **ASTR token**
- **Deployed and verified** smart contract
- Clear **value proposition** for Astar
- Active and transparent **community engagement**
- Evidence of **long-term commitment**
- A plan to support **ASTR visibility and utility**

### How to Apply

1. Go to the [Astar Forum](https://forum.astar.network).
2. Create a **new topic** under the **dApp Staking** category.
3. Title your thread:  `[Project Name] – dApp Staking Application`
4. Use previous submissions or the official **[application template](/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/requirements.md#template-for-dapp-staking-application)** for guidance.

> **Community feedback is encouraged**. Be responsive and transparent.  
> A **5–7 day minimum discussion period** is required before moving to onchain governance.

---

## Step 2: Set Up a Wallet & Deploy a Verified Smart Contract

### 1. Set Up a Native Astar Developer Wallet

You will need a **native Astar wallet** (not Ledger or EVM-only) with some ASTR for gas fees.

**Supported wallets**:

<details>
<summary>**[Polkadot.js](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en)** *(Recommended)*</summary>

The Polkadot\{.js\} plugin provides a reasonable balance of security and usability. It provides a separate local mechanism to generate your address and interact with the Astar portal. We recommend users who are new to our ecosystem and want to create an Astar native address use this wallet. If you don't have the Polkadot JS extension you will receive a popup in our portal when you try to connect your wallet.

#### Install the Browser Plugin

The browser plugin is available for both [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (and Chromium-based browsers like Brave) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension). After installing the plugin, you should see the orange and white Polkadot\{.js\} logo in your browser menu bar.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Polkadotjs_1.png').default } width="75%" /> 

#### Create Account

Open the Polkadot\{.js\} browser extension by clicking the logo on the top bar of your browser. You will see a browser popup.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Polkadotjs_2.png').default } width="70%" /> 

Click the big plus button `Create new account`. The Polkadot\{.js\} plugin will then use system randomness to make a new seed for you and display it to you in the form of twelve words.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Polkadotjs_3.png').default } width="70%" /> 

You should back up these words. Please, store the seed somewhere safe, secret, and secure. If you cannot access your account via Polkadot\{.js\} for some reason, you can re-enter your seed through the `Add account menu` by selecting `Import account from pre-existing seed`.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Polkadotjs_4.png').default } width="70%" /> 

Best to create an account that is allowed on any chain in the Polkadot ecosystem including Astar or Shiden Network. Your account will automatically change format when connected to a chain.

A **descriptive name** is arbitrary and for your use only. It is not stored on the blockchain and will not be visible to other users who look at your address via a block explorer. If you're juggling multiple accounts, it helps to make this as descriptive and detailed as needed.

The **password** will be used to encrypt this account's information. You will need to re-enter it when using the account for any kind of outgoing transaction or when using it to cryptographically sign a message.

After clicking on `Add the account with the generated seed`, your account is created. We recommend also saving your account as json file somewhere safe.

</details>

<details>
<summary>**[Talisman](https://www.talisman.xyz/)**</summary>

#### Install the Browser Extension

The extension is available on [chrome](https://chromewebstore.google.com/detail/talisman-ethereum-and-pol/fijngjgcjhjmmpcmkeiomlglpeiijkld?hl=en-GB) and [firefox](https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/).


#### Create a New Account

Once the extension is downloaded you can proceed to setup your account.

1. In order to set up a wallet, click `New wallet`. 

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Talisman_1.webp').default } width="90%" /> 

2. Add a password for your account and click `Continue`.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Talisman_2.webp').default } width="70%" /> 

3. Last step is to decide on allowing anonymous information to help talisman improve the wallet. Click any option and the setup is finished!

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Talisman_3.webp').default } width="70%" /> 

#### Create a new account in video

<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/JevNbPem3gQ?si=WzEGaZZ5cy4dcVkZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>

**Don't forget to Back Up Your Secret Phrase! Consult [this guide](https://docs.talisman.xyz/talisman/start/installing-talisman/back-up-your-secret-phrase) if necessary.**

</details>

<details>
<summary>**[Subwallet](https://www.subwallet.app/)**</summary>

#### Install the Browser Extension

The extension is available on [chrome](https://chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn) and [firefox](https://addons.mozilla.org/en-US/firefox/addon/subwallet/).

#### Create a New Account

1. After installing SubWallet extension, open the wallet and choose `Create a new account`;

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Subwallet_1.webp').default } width="30%" /> 

2. Create a master password and click `Continue`;

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Subwallet_2.webp').default } width="30%" /> 

3. Keep your recovery phrase (also known as seed phrase or secret phrase) in a safe place;

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Subwallet_3.png').default } width="30%" /> 

4. Your account has been successfully set up. Click `Exit` to get to Homepage;

#### Create a new account in video

<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/WPZvZixXz3k?si=LdWnrFfkdJVZa3-m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>

</details>

:::tip

Connect your wallet to the [Astar Portal](https://portal.astar.network)  
Your native address will look like: `YQnbw3oWxBnCUarnbePrjFcrSgVPP2jqTZYzWcccmN8fXhd`

:::

### 2. Deploy and Verify a Smart Contract

Your project must have a **verified smart contract** to register for dApp Staking.

You can either:

- Use your own smart contract (**recommended for active protocols**)
- Use the provided `helloworld.sol` [template](https://github.com/AstarNetwork/builders-program/blob/main/hellowold.sol) (**for non-technical teams**)

**Supported Networks**:
- **Astar Native (WASM)**
- **Astar EVM (Public Endpoints)**

**Verification Tools**:
- [Subscan](https://astar.subscan.io/) (for Astar Native)
- [Blockscout](https://blockscout.com/astar) (for Astar EVM)

---

## Step 3: Onchain Approval (Community Council or Public Referendum)

Once your [forum](https://forum.astar.network/) post has had time for discussion and feedback, you can proceed via one of two approval paths:

---

### Option A: Astar Community Council  
**Recommended for Most Projects**

1. Tag `@CommunityCouncil` in your forum thread.
2. The Astar Community Council (ACC) will:
   - Review your application
   - Ask follow-up questions if needed
   - Respond within **2 weeks** with approval or feedback

If approved:

- A **whitelist motion** is submitted for your smart contract and ASTR address
- The motion requires **4 out of 6 votes** from the Council
- Once passed, your project is **officially added to dApp Staking**

> The ACC is elected from the **Astar Collective** and oversees:
> - dApp Staking approvals  
> - Community Treasury allocations  
> - Ecosystem governance

You can view Council identities on **[Polkadot.js](https://polkadot.js.org/apps/)** or **[Subscan](https://astar.subscan.io/)**, and contact them via forum profiles.

**Note**: If rejected, you may pursue approval via the **Public Referendum** path.

---

### Option B: Public Referendum  
**Token Holder Governance**

Projects may also apply via **community vote**.

**Steps:**

1. Submit a **preimage** on [Astar Subsquare](https://app.subsquare.io).
2. Create a **public proposal** referencing the preimage.
3. Proposal becomes a **referendum** for voting.

- **Voting period**: 7 days
- If the referendum **passes** → your project is **whitelisted** for dApp Staking.
- If it **fails** → you may revise and **resubmit** the proposal.

You can refer to the [Onchain Governance](/docs/use/how-to-guides/layer-1/governance/subsquare_guide.md) section to learn more about how to interact with Astar’s onchain governance system.

## Step 4: Register your dApp on the Astar Portal

After whitelisting, visit the dApp Staking page on the [Astar portal](https://portal.astar.network/astar/dapp-staking/discover).  

Connect your native wallet and choose the network on which you are going to register for dApp Staking *(Astar Network or Shiden Network)*;

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-stakers/img/Networks.png').default } width="90%" /> 

If the wallet has been whitelisted, a banner with a `Register Now` button, like the one below, will appear:

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Registration_banner.png').default} width="85%" />

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

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Registration_1.png').default} width="80%" />

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Registration_2.png').default} width="80%" />

Once you've filled in all your details, click **Next** button and enter the description that will appear on your **New Listing Card**;

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/Promotion_card_2.png').default} width="85%" />

Finally, click on **Register** and sign the transaction on the network;

Congratulations! 🎉 Your project is now listed in dApp Staking and you can start your campaign and communication to attract stakers.

<Figure src={require('/docs/use/how-to-guides/layer-1/dapp-staking/for-devs/img/dApp_page_2.png').default} width="90%" />

---

### Need Help?

If you have any questions or need support:

- Join the conversation on the [Astar Forum](https://forum.astar.network)
- Reach out via the [official Astar Discord](https://discord.gg/astarnetwork)
- Or use the [Astar Contact Form](https://astar.network/contact)
