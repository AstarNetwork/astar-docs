---
sidebar_position: 2
---

# How to Use Astar WASM IDE?

> Set up the entire process of writing, compiling, deploying, interacting, querying, and verifying with Astar WASM smart contracts."

<iframe width="100%" height="500" src="https://www.youtube.com/embed/q-Bf5RHSt4s?si=WNcJpgmWA-xqCE5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 1. Write a contract

Upon entering the project, the README.md file included in the folder will be automatically previewed.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FWeeVCEJ73jLedlRAKoxV%2Fimage.png?alt=media&token=e4e05e51-afb8-4b49-be38-062ea3675e63)

In the Explorer panel, you can create new files (or folders), refresh the directory, and download files. You can also directly click on the files that come with the template.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FGGYdT9agJlf7Ph0rXSms%2Fimage.png?alt=media&token=1c1f82a8-78d9-4c8b-bcaf-5d59630fe08d)

Click on a contract file to edit the code.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FMY5bewzZ7DfGwGO5nWRR%2Fimage.png?alt=media&token=c35a9405-7926-46c3-b2eb-76743a579761)

### 2. Compile the contract

Once the contract code is written, click the "Compiler" button on the right-hand menu to open the compilation module. Choose whether to enable "release" and "nightly" (usually not required), and then click "Build \*\*\*.rs" to initiate the compilation.

> Compiling WASM contracts takes a few minutes, so in the meantime, we can proceed with the next step.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FY0tSy2rK1GwK9ZuTNA9s%2Fimage.png?alt=media&token=18a9fb40-1ee5-43cf-a0c1-2f8fd5ebf0d2)

After a successful compilation, the left-hand Explorer panel will display the "target/ink" folder, and within that folder, you will find the "\*\*\*.contract" file (used for deploying the contract).

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FnWu7x82UnQDLddSCaCX5%2Fimage.png?alt=media&token=db9683ac-a6ed-4484-aaa9-1c7fe95a8c63)

### 3. Connect to Astar WASM

Before deploying the contract, you need to click on "Connect Wallet" in the upper right corner, choose your wallet, and use it to connect to the Astar blockchain.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FqGHKAWaMl6bWi3Yd8n9s%2Fimage.png?alt=media&token=c59a0e98-ee1a-4bbe-8a5c-2e79957c8601)

By default, it's connected to the Shibuya testnet. If you need to switch to another network, you can click on "Shibuya Testnet" in the bottom right corner to change the network.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FurEAknTY3HMezZCJ1Aqc%2Fimage.png?alt=media&token=806e022a-9d70-40c0-a7c4-71d9e0be2de5)

ChainIDE supports switching between four networks: Astar Mainnet, Shibuya Testnet, Shiden Mainnet, and Custom Network.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FVTfQUs58NQqPzSK13rlF%2Fimage.png?alt=media&token=fd67febc-4540-42de-8231-f998568e132d)

#### 3.1 Connect to Swanky Node

> Swanky Node is a Substrate-based blockchain designed to facilitate local development of Wasm smart contracts. If you require a substantial amount of tokens for testing and have high-speed interaction requirements, this section is worth exploring.

ChainIDE has integrated a graphical Swanky Node. Click on "Astar Swanky Node" on the right-hand side and then click "Start."

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2Fd9ryBSYgJDzZ4hLYgqV8%2Fimage.png?alt=media&token=b0084087-ea1b-4b00-8156-86a87a3d8e9e)

Wait for a few seconds until the Sandbox displays the following two lines.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FkTXeTf1tKbEUAa9fWk00%2Fimage.png?alt=media&token=43f82d46-7072-46e7-8c47-5acdd9e83a75)

Click on the "Jump" link in the Faucet URL to obtain test tokens on the Swanky Node's local network.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FFMlEK1IRGNY2P5aiKjCX%2Fimage.png?alt=media&token=e789cfb3-b618-43c6-8e55-334637776c22)

Choose an account with tokens and transfer some tokens to your own wallet.

![](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FztN6TAtFx1xaNFrrGqff%2Fimage.png?alt=media&token=5b670d83-2a54-4294-816f-735af8ad6e1b)

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FAfXYIT7xUDBJLGFhyfHp%2Fimage.png?alt=media&token=c68e5db1-ab22-40b4-b34a-970027cff32f)

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FdtwiBB7VmQ9lG6bf6XXO%2Fimage.png?alt=media&token=e1a0a625-c594-4203-9dfe-c748cb7a6e7c)

Return to the ChainIDE for Astar page and copy the WebSocket URL.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FTLwkw4HDVbuZaj2N9LGR%2Fimage.png?alt=media&token=ac675926-b03e-415f-b0b8-b27d9b8a6246)

Refer to [step 3, "Connect to Astar WASM"](#3. Connect to Astar WASM), select "Custom Mode," and enter the WebSocket URL you copied in the previous step. Then, click "Switch."

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FQU3zJmkPbnd34GGwg7xS%2Fimage.png?alt=media&token=c17229e2-53e0-4eb4-999f-071566dd4d92)

Congratulations, you have successfully switched to the Swanky Node local network.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2F3cfN5dOiVj9CtQVoMY3u%2Fimage.png?alt=media&token=0dda4980-ab7d-414d-aa37-594505930847)

### 4. Deploy the contract

Click the "Deploy & Interaction" button on the right-hand side, which will bring up the deployment and interaction pages. Select the compiled contract, click "Deploy" to initiate the deployment (then confirm in your wallet). After successful contract deployment, the console will display the contract deployment result and relevant information.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2F7M7qeIO6QoBFgLGeAdlT%2Fimage.png?alt=media&token=56f3e375-0ac9-49b6-a2e1-dc855b433204)

In addition, you can click on "Import Deployed Contract" to import contracts that have already been deployed, or you can use "On-Chain Contract Code" to deploy contracts using a CodeHash.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FhetQ818kb3arcnxtWpje%2Fimage.png?alt=media&token=d80aa523-7cda-4658-8bf7-a4d8d56e90be)

### 5. Contract interaction

After a successful contract deployment, you can interact with the contract. Click on the deployed contract, choose the corresponding interface, and click "Submit" or "Get" to perform interactions.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FrCHoqS8429KSMrp5KDl9%2Fimage.png?alt=media&token=38e8385e-d8de-4694-a449-0fbae10c6dc9)

### 6. Transaction Query

Click on the transaction hash in the Output section to view the specific details of each transaction.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2F1RJBRpDyZB2TD7rooN3D%2Fimage.png?alt=media&token=61cfa1b7-eb1c-45c2-aa15-26ab1493f07a)

### 7. Contract verification

Contracts compiled using ChainIDE can be submitted to Polkaholic for contract verification.

Click the "Scan Verifier" button on the right-hand side, select the network, code hash, and public mode, then click "Publish Verified Code" to initiate the contract verification process.

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2Fi2XKtzbpnFhA4n4cRR9O%2Fimage.png?alt=media&token=fe8d392f-5661-4c33-9c6f-9666a5349efb)

### 8. View WASM Developer dashboard

ChainIDE and Polkaholic have collaborated to develop the WASM Developer Dashboard.

Click the "WASM Developer Dashboard" button on the right-hand side to view information such as "Recent Code Stored," "Recent Contracts Instantiated," and "Recent Calls."

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2Fdq8uRpcEo4iIXiropWEe%2Fimage.png?alt=media&token=a537caf0-4463-4b19-a0d7-95dd558241f1)

### 9. Astar WASM Sandbox

If you prefer command-line development, you can open the Astar WASM Sandbox, which comes pre-loaded with [Swanky Suite](https://docs.astar.network/docs/build/wasm/swanky-suite/), [Git](https://git-scm.com/) and [Node.js V16](https://nodejs.org/en).

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FehdI1phVyiBrFrREipp1%2Fimage.png?alt=media&token=52e289cf-4e15-4b46-94b2-cadfebaf58f8)

### 10. Serve your dApp

ChainIDE Sandbox makes it easier to develop full-stack dApps by providing powerful features such as port-forwarding. To build the frontend for Astar dApps, you can utilize the magink-dApp template (ref: https://github.com/inkdevhub/magink-dapp) inside ChainIDE and build and test the frontend alongside smart contracts. Follow the below steps to set up the port manager to access the frontend.

#### 10.1 Open Port Manager

Click on the left side's Port Manager

![image-20231026171540725](https://d3gvnlbntpm4ho.cloudfront.net/astar_wasm_ide/image-20231026171540725.png)

Click on "Add Port"

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2FjsLBwBqMkYaUC6DLktk2%2Fimage.png?alt=media&token=722f87a8-4ba3-4f2a-8086-a6d1cb6ebcc9)

Select the relevant options and click "Add"

![image-20231026171611778](https://d3gvnlbntpm4ho.cloudfront.net/astar_wasm_ide/image-20231026171611778.png)

#### 10.2 Access the frontend

Click the jump button to access the corresponding port

![image-20231026171651956](https://d3gvnlbntpm4ho.cloudfront.net/astar_wasm_ide/image-20231026171651956.png)

![image-20231026171710121](https://d3gvnlbntpm4ho.cloudfront.net/astar_wasm_ide/image-20231026171710121.png)
