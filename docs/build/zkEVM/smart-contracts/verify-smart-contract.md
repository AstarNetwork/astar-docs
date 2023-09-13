---
sidebar_position: 4
title: Verifying Smart Contracts
sidebar_label: Verify Contracts
---

Once a smart contract is deployed to zkEVM, it can be verified in various ways depending on the framework of deployment as well as the complexity of the contract. The aim here is to use examples to illustrate how you can manually verify a deployed smart contract. 

Ensure that your wallet is connected while following this guide. We will use Metamask wallet throughout this tutorial.

## Manual Verification

After successfully compiling a smart contract, follow the next steps to verify your smart contract.

1. Copy the **Address** to which the smart contract is deployed. 

2. Navigate to the [zkEVM Explorer](https://testnet-zkevm.polygonscan.com) and paste the contract address into the Search box. This opens a window with a box labelled **Contract Address Details**.

3. Scroll down to the box with tabs labelled - **Transactions**, **Internal Transactions**, **Coin Balance History**, **Logs**, and **Code**.

4. Click the **Transaction Hash** in the **Contract Creation** box, which is the _super long_ number.

5. Select the **Code** tab.

6. Click the **Verify and Publish** button.

7. There are 3 options to provide the Contract's code. We will be diving into the following two options:

<details>
<summary>Flattened Source Code</summary>

Click **Next** after selecting the **via Flattened Source Code** option. Various frameworks have specific ways to flatten the source code. Our examples are **Remix** and **Foundry**.

#### Using Remix

In order to flatten the contract code with Remix, one needs to only right-click on the contract name and select **Flatten** option from the drop-down menu that appears. See the below figure for reference.

![Selecting the flatten code option](figures/flatten-code-remix.png)

After selecting **Flatten**, a new `.sol` file with the suffix `_flatten.sol` is automatically created. Copy the contents of the new `<Original-Name>_flatten.sol` file and paste into the `Enter the Solidity Contract` field in the explorer.

#### Using Foundry

In order to flatten the code using Foundry, the following command can be used: 

```bash
forge flatten src/<Contract-Name> -o <Any-Name-For-Flattened-Code>.sol
```

With this command, the flattened code gets saved in the `<Any-Name-For-Flattened-Code>.sol` file. Copy the contents of the new `<Any-Name-For-Flattened-Code>.sol` file and paste into the `Enter the Solodity Contract` field in the [explorer](https://testnet-zkevm.polygonscan.com).
</details>

<details>
<summary>Standard Input JSON</summary>

Click **Next** after selecting the **via Standard Input JSON** option.

1. In order to update the **Compiler** based on your contract's compiler version, 

    - Click the &#8595; for a list of compiler versions. 

    - Select the corresponding version. For example, select `v0.8.9+commit.e5eed63a` if your code has `pragma solidity ^0.8.9;`.

2. Paste the **Standard Input JSON** file into the *Drop the standard input JSON file or Click here* field. You can find it in your local project folder.

    - The **Standard Input JSON** file is the `{"superlongnumberfile"}.json` in the `build-info` subfolder. Path example: `fullstack-zkevm/src/build-info/{"superlongnumberfile"}.json` 

    - Save this file to parse it with [Prettier](https://prettier.io/)

    - Find the input JSON object. It will look [something like this](https://docs.soliditylang.org/en/latest/using-the-compiler.html#input-description) &rarr; `"input": {}`

    - Copy the **input** object value into a new file

    - **Name and save** this file locally in the **root folder**. Check this [example file](https://github.com/oceans404/zkevm-hardhat-demo/blob/main/example-standard-input.json) for reference

    - Drag and drop the **Standard Input JSON** file into *Drop the standard input JSON file or Click here* field. Once pasted, the **Verify & Publish** button becomes active.

3. Since you have provided an input, set *Try to fetch constructor arguments automatically* to **No**.

4. To add your ABI-encoded constructor arguments: 

    - Open the [Online ABI Encoder](https://abi.hashex.org/)  
    - Choose the `Auto-parse` tab.
    - Copy the ABI-encoded output.
    - Paste it into `ABI-encoded Constructor Arguments` if required by the contract.

</details>

8. Once you paste the contents of the newly created `.sol` file to the *Enter the Solidity Contract* field, the **Verify & Publish** button will be active.

9. Click on **Verify & Publish** to verify your deployed smart contract.

## Verify Using Remix

We will be using the ready-made `Storage.sol` contract in Remix. Compile the contract and follow the steps provided below. 

1. Deploy the `Storage.sol` contract:

    - Click the **Deploy** icon on the left-side of the IDE window
    - Change `ENVIRONMENT` to "Injected Provider - MetaMask" (ensure that your wallet is already connected to Goerli network)
    - Confirm the connection request when MetaMask pops up
    - Click the **Deploy** button and confirm

2. Check the deployed smart contract on Etherscan:

    - Copy the contract address below the **Deploy Contracts**
    - Navigate to the [Goerli explorer](https://goerli.etherscan.io) 
    - Paste the contract address in the *Search by address* field and press **ENTER**
    - Click on the **Transaction Hash** to see transaction details.

3. You are going to need your **Etherscan API Key** in order to verify.

    - Login to Etherscan
    - Hover the cursor over your username for a drop-down menu.
    - Select **API Keys** 
    - Click **API Keys** again below the **Others** option.
    - Copy the API Key. 

4. Next, in the Remix IDE:

    - Click **Plugin Manager** icon on the bottom-left corner of the Remix IDE

    - Type **Etherscan** in the search field at the top

    - Click **Activate** button as the Etherscan option appears. Etherscan icon will appear on the left-side of the IDE.

    - Click on the Etherscan icon

    - Ensure that **Goerli** is present in the **Selected Network** field

    - Click within the *Contract Name* field and type in the name of your deployed contract, or select it if it appears.

    - Paste the address in the *Contract Address* field.

    - **Verify** button will be active if all information has been provided.

    - Click the **Verify** button to complete verification of your smart contract.
