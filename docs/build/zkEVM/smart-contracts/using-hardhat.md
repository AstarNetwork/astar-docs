---
sidebar_position: 3
title: Deploy Smart Contracts Using Hardhat
sidebar_label: Deploy Using Hardhat
---
import Figure from '/src/components/figure'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Hardhat is a popular smart contract development frameworks. In this tutorial, we will be using Hardhat to deploy a simple Counter smart contract to the Astar zkEVM Testnet.
We will explore the basics of creating a Hardhat project with a sample contract and a script to deploy it.

For the full instruction on how to use Hardhat, please refer to the [official Hardhat documentation](https://hardhat.org/getting-started/).

## Create New Project
Start with creating an npm project by going to an empty folder, running `npm init`, and following its instructions. You can use another package manager, like yarn, but Hardhat recommends you use npm 7 or later, as it makes installing Hardhat plugins simpler.


## Hardhat Smart Contract

To create the sample project, run `npx hardhat init` in your project folder:

<Figure src={require('/docs/build/zkEVM/smart-contracts/img/hardhat-init.png').default} width="100%" />

- **Press** `<ENTER>` choose javascript, typescript or empty project
- **Press** `<ENTER>` to set the project root 
- **Press** `<ENTER>` again to accept addition of `.gitignore`
- **Press** `<ENTER>` to install `hardhat @nomicfoundation/hardhat-toolbox` 

## Create deployer account
- Create the `.env` file in your project root folder and add the following line:

```bash
ACCOUNT_PRIVATE_KEY='my private key'
```

- Populate the `.env` file with your private key. You can get your private key from Metamask. See the section below on how to get your private key from Metamask.

<details>
<summary>How to get your Private Key in Metamask</summary>

- Click the vertical 3 dots in the upper-right corner of Metamask window

- Select **Account details** and then click **Show private key**

- Enter your Metamask password to reveal the private key

- Copy the private key and paste it into the `.env` file.

</details>

:::warning
**Do not commit your private key to a public repository!**

Verify that your .gitignore file contains `.env` to prevent your private key from being committed to a public repository.
:::

## Configure Hardhat
- Open the `hardhat.config.js` file and paste the code below:

<Tabs>
<TabItem value="javascript" label="Javascript" default>

```js
    require("dotenv").config();
    require("@nomicfoundation/hardhat-toolbox");

    module.exports = {
        solidity: "0.8.19",
        paths: {
            artifacts: "./src",
        },
        networks: {
            zKatana: {
            url: `https://rpc.zkatana.gelato.digital`,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            },
        },
    };
```
</TabItem>
<TabItem value="typescript" label="Typescript" >

```js
    import { HardhatUserConfig } from "hardhat/config";
    import "@nomicfoundation/hardhat-toolbox";
    import * as dotenv from "dotenv";

    dotenv.config({ path: __dirname + "/.env" });
    const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || "";
    console.log("PrivateKey set:", !!ACCOUNT_PRIVATE_KEY)

    const config: HardhatUserConfig = {
        solidity: "0.8.19",
        paths: {
        artifacts: "./src",
        },
        networks: {
            zKatana: {
            url: `https://rpc.zkatana.gelato.digital`,
            accounts: [ACCOUNT_PRIVATE_KEY]
            },
        },
    };

    export default config;
```

</TabItem>
</Tabs>

## Write Smart Contract
:::info
**Note:** The existing smart contract code that comes with the sample project is a `Lock.sol` contract. Feel free to delete it or leave it.
:::
- Create a new file, in the contracts folder, named `Counter.sol`:
```bash
touch contracts/Counter.sol
```

- Copy the below code and paste it in the `Counter.sol` contract code:

```solidity
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
uint256 currentCount = 0;

    function increment() public {
        currentCount = currentCount + 1;
    }

    function retrieve() public view returns (uint256){
        return currentCount;
    }
}
```

## Create Deploy Script

- Delete the content of the `scripts/deploy.js` file and add the code below:

```js
    const hre = require("hardhat");

    async function main() {
        const deployedContract = await hre.ethers.deployContract("Counter");
        await deployedContract.waitForDeployment();
        console.log(
            `Counter contract deployed to https://zkatana.explorer.startale.com/address/${deployedContract.target}`
        );
    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
```

## Compile Contract
- Install dotenv package: `npm install dotenv`
- Compile your contract code (i.e., go back to the project root in the CLI),
    ```bash
    npx hardhat compile
    ```

## Deploy Contract
- Run the deploy script:
    ```bash
    npx hardhat run scripts/deploy.js --network zKatana
    ```

    ​Here's an output example:

    ```bash
    Counter contract deployed to https://zkatana.explorer.startale.com/address/0x8731DC57f9C7e01f5Ba733E7a10692cA540862f8
    ```
