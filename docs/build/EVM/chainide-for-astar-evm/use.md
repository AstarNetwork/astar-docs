---
sidebar_position: 2
---

# How to Use Astar EVM IDE?

> Set the entire process of writing, compiling, deploying, interacting, and querying with Astar EVM smart contracts

<iframe width="100%" height="500" src="https://www.youtube.com/embed/5m3-Ff17mjo?si=Rf5pLIlbZ1upWh-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 1. Write a contract

Upon entering the project, the README.md file included in the folder will be automatically previewed.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FXlOvuSg0NjRdEaR8zpad%2Fimage.png?alt=media&token=fccb3f22-8cd5-4047-bf5f-80b5cc3e21b4)

In the Explorer panel, you can create new files (or folders), refresh the directory, and download files. You can also directly click on the files that come with the template.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FE2cSwSZdbKLZK5YN7XGK%2Fimage.png?alt=media&token=47ea9493-d238-474e-ab62-17a9d1f83dd3)

Click on a contract file to edit the code.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2Fc3NCif0cmQb6idg1jY4z%2Fimage.png?alt=media&token=a3bfae68-88a5-480d-b296-de50afd1b019)

### 2. Compile the contract

Once your contract code is written, click on the "Compiler" button in the right-side menu to open the compilation module. Choose the compiler version and decide whether to enable optimization, then click "Compile \*\*\*.sol" to initiate the compilation.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FQZbNokWNSvFgonXwTbJp%2Fimage.png?alt=media&token=0e4f3887-8b97-413d-8517-fcaead085d62)

After successful compilation, the ABI and BYTE CODE will be displayed below, and you'll see a message in the console stating "Compile contract success."

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FczE48oDmrmEi2hNWpGds%2Fimage.png?alt=media&token=3f51d9b4-063e-48dd-a60e-b13b54bc0781)

### 3. Connect to Astar EVM

Before deploying the contract, you need to click on "Connect Wallet" in the upper right corner and select to connect to JavaScript VM (used for testing, implemented in JavaScript) or Metamask (for deployment on the Astar blockchain).

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FLRhasXHh6XnfX6AsxOko%2Fimage.png?alt=media&token=81c389b6-c8b0-43c2-a26e-7f5ee01d60c9)

### 4. Deploy the contract

Click the "Deploy & Interaction" button on the right-hand side, which will bring up the deployment and interaction pages. Select the compiled contract and click "Deploy" to initiate the deployment (then confirm in Metamask). After successful contract deployment, the console will display the contract deployment result and relevant information.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2Fln6jNoeLtMlVkXYdRToD%2Fimage.png?alt=media&token=f45eeeb9-5a03-4f1b-9d30-7381903497bd)

In addition, you can click "Import Deployed Contract" to import a contract that has already been deployed for contract interactions.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2Fvs7JD4L1ByOYlg609PKg%2Fimage.png?alt=media&token=492fd5a0-21d4-45d3-af3d-46a9980c6800)

### 5. Contract interaction

After a successful contract deployment, you can interact with the contract. Click on the deployed contract, choose the corresponding interface, and click "Submit" or "Get" to perform interactions.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2F2W7d4EBGj5c5cZ4DdJTH%2Fimage.png?alt=media&token=15101c1a-a115-44ba-be8f-b30621d35528)

### 6. Transaction Query

Click on the transaction hash in the Output section to view the specific details of each transaction.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FhPClEEbEHXfKlahiWt1V%2Fimage.png?alt=media&token=8f6caec5-6be4-44bb-bdc7-11dee067ee14)

### 7. Verify the contract

Click on the "Scan Verifier" plugin on the right, select the contract you want to verify, enter the deployed contract address, and click "Verify."

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FB6FyC40PqzdcwYJjWlKv%2Fimage.png?alt=media&token=b61e484d-4ced-4a1b-a58e-d28cea41d85c)

After successful verification, you can view the link to the verified contract on BlockScout scan.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FwFhSzT1bdiDYld5cWQJt%2Fimage.png?alt=media&token=a8b1cdf7-658b-43d7-8608-88fb49fe2ef7)

### 8. Astar EVM Sandbox

If you prefer using the command line for development, you can open the Astar EVM Sandbox, which comes pre-loaded with [Hardhat](https://hardhat.org/), [Truffle](https://trufflesuite.com/), [Brownie](https://eth-brownie.readthedocs.io/en/stable/) [Ganache](https://trufflesuite.com/ganache/), [Git](https://git-scm.com/) and [Node.js V16](https://nodejs.org/en).

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2F246ekmxAbc8yLacVah0J%2Fimage.png?alt=media&token=db1d1d7c-a38c-4c8c-b39a-1053eaa97787)

### 9. serve your dApp

ChainIDE Sandbox makes it easier to develop full-stack dApps by providing powerful features such as port-forwarding. This means you can build a frontend for your Astar dApps using frontend frameworks (React/Vue/VanillaJS) in the browser. To build the frontend for Astar dApps, please use Voting dApp or Hardhat dApp Wave template. Follow the steps below showcasing how the port manager can be used to access the frontend.

#### 9.1 Open Port Manager

Click on the left side's Port Manager

![image-20231026183219456](https://d3gvnlbntpm4ho.cloudfront.net/astar_evm_Ide/image-20231026183219456.png)

Click on "Add Port"

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FjsLBwBqMkYaUC6DLktk2%2Fimage.png?alt=media&token=722f87a8-4ba3-4f2a-8086-a6d1cb6ebcc9)

Select the relevant options and click "Add"

![image-20231026183248705](https://d3gvnlbntpm4ho.cloudfront.net/astar_evm_Ide/image-20231026183248705.png)

#### 10.2 Access the frontend

Click the jump button to access the corresponding port

![image-20231026183332884](https://d3gvnlbntpm4ho.cloudfront.net/astar_evm_Ide/image-20231026183332884.png)

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FvICzLC9sWXColFYm4WQg%2Fimage.png?alt=media&token=1043c42d-8c65-40b4-907d-99921105e428)
