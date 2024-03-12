---
title: Crossmint
sidebar_position: 2
---

# Overview 
[Crossmint](https://crossmint.com/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar) is an enterprise-grade web3 development platform that lets you deploy smart contracts, create email wallets, enable credit-card and cross chain payments, and use APIs to create, distribute, sell, store, and edit NFTs. 

By abstracting away the core complexities of the Blockchain, Crossmint allows you to build NFT applications without requiring any blockchain experience or holding cryptocurrency, and making the blockchain invisible to end users. Crossmint enables you to provide a Web2 experience for your Web3 apps and onboard users.

Crossmint allows you to create email wallets for your users to store NFTs. You can use Crossmint's API to create a custodial wallet that will be assigned to the user's wallet address. 
Using this, you can facilitate a Web 2 user experience for your Web 3 app on Astar zkEVM.

## Prerequisites

1. Create an account on Crossmint's [Console](https://crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar)

:::caution
Crossmint has two different consoles, they are, Production (Mainnet) and Staging (Testnet). It is highly recommended that you use the Staging Console (Testnet) first before proceeding with the Production Console (Mainnet). 
Click [here](https://staging.crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar) to head over to the Staging Console.

:::

## How to Create an Email Wallet for your users

1. Create an API Key using Crossmint's [Console.](https://crossmint.com/console/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar)
2. Use the code snippet below to create a custodial wallet for your user's email address.

```javascript
const options = {
  method: "POST",
  headers: {
    "X-API-KEY":
      "<API_KEY_HERE>",
    "Content-Type": "application/json",
  },
  body: '{"chain":"astar-zkevm","email":"youremail@email.com"}',
};

fetch("https://www.crossmint.com/api/v1-alpha1/wallets", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

```
3. You can now Mint, Airdrop or Transfer NFTs to this email address using Crossmint's APIs.
4. The user can login into [Crossmint's Wallet](https://www.crossmint.com/user/collection/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar) using the same email address to access the NFTs that the wallet owns.

You can read the complete documentation on the docs [here](https://docs.crossmint.com/wallets/custodial-wallets/overview/?utm_source=backlinks&utm_medium=docs&utm_campaign=astar). Refer to the complete list of Wallet APIs available and their respective references [here](https://docs.crossmint.com/api-reference/wallets/create-wallet?utm_source=astar&utm_medium=docs&utm_campaign=backlinks)

Please refer to this detailed step-by-step [guide](https://blog.crossmint.com/how-to-enable-credit-card-payments-for-nfts-on-astar-zkevm/?utm_source=astar&utm_medium=docs&utm_campaign=backlinks) on how you can achieve this.
