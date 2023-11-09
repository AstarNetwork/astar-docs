---
sidebar_position: 2
---

import Figure from '/src/components/figure'

# How to Use Astar WASM IDE?

> Set up the entire process of writing, compiling, deploying, interacting, querying, and verifying with Astar WASM smart contracts."

<iframe width="100%" height="500" src="https://www.youtube.com/embed/q-Bf5RHSt4s?si=WNcJpgmWA-xqCE5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 1. Write a contract

Upon entering the project, the README.md file included in the folder will be automatically previewed.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE26.png').default} width="100%" />

In the Explorer panel, you can create new files (or folders), refresh the directory, and download files. You can also directly click on the files that come with the template.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE27_25pct.png').default} width="25%" />

Click on a contract file to edit the code.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE28.png').default} width="100%" />

### 2. Compile the contract

Once the contract code is written, click the "Compiler" button on the right-hand menu to open the compilation module. Choose whether to enable "release" and "nightly" (usually not required), and then click "Build \*\*\*.rs" to initiate the compilation.

> Compiling WASM contracts takes a few minutes, so in the meantime, we can proceed with the next step.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE29.png').default} width="100%" />

After a successful compilation, the left-hand Explorer panel will display the "target/ink" folder, and within that folder, you will find the "\*\*\*.contract" file (used for deploying the contract).

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE30.png').default} width="100%" />

### 3. Connect to Astar WASM

Before deploying the contract, you need to click on "Connect Wallet" in the upper right corner, choose your wallet, and use it to connect to the Astar blockchain.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE31_25pct.png').default} width="25%" />

By default, it's connected to the Shibuya testnet. If you need to switch to another network, you can click on "Shibuya Testnet" in the bottom right corner to change the network.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE32.png').default} width="100%" />

ChainIDE supports switching between four networks: Astar Mainnet, Shibuya Testnet, Shiden Mainnet, and Custom Network.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE33_65pct.png').default} width="65%" />

#### 3.1 Connect to Swanky Node

> Swanky Node is a Substrate-based blockchain designed to facilitate local development of Wasm smart contracts. If you require a substantial amount of tokens for testing and have high-speed interaction requirements, this section is worth exploring.

ChainIDE has integrated a graphical Swanky Node. Click on "Astar Swanky Node" on the right-hand side and then click "Start."

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE34.png').default} width="100%" />

Wait for a few seconds until the Sandbox displays the following two lines.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE35.png').default} width="100%" />

Click on the "Jump" link in the Faucet URL to obtain test tokens on the Swanky Node's local network.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE36_65pct.png').default} width="65%" />

Choose an account with tokens and transfer some tokens to your own wallet.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE37.png').default} width="100%" />

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE38.png').default} width="100%" />

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE39.png').default} width="100%" />

Return to the ChainIDE for Astar page and copy the WebSocket URL.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE40_25pct.png').default} width="25%" />

Refer to [step 3, "Connect to Astar WASM"](#3. Connect to Astar WASM), select "Custom Mode," and enter the WebSocket URL you copied in the previous step. Then, click "Switch."

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE41_65pct.png').default} width="65%" />

Congratulations, you have successfully switched to the Swanky Node local network.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE42.png').default} width="100%" />

### 4. Deploy the contract

Click the "Deploy & Interaction" button on the right-hand side, which will bring up the deployment and interaction pages. Select the compiled contract, click "Deploy" to initiate the deployment (then confirm in your wallet). After successful contract deployment, the console will display the contract deployment result and relevant information.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE43.png').default} width="100%" />

In addition, you can click on "Import Deployed Contract" to import contracts that have already been deployed, or you can use "On-Chain Contract Code" to deploy contracts using a CodeHash.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE44_25pct.png').default} width="25%" />

### 5. Contract interaction

After a successful contract deployment, you can interact with the contract. Click on the deployed contract, choose the corresponding interface, and click "Submit" or "Get" to perform interactions.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE45.png').default} width="100%" />

### 6. Transaction Query

Click on the transaction hash in the Output section to view the specific details of each transaction.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE46.png').default} width="100%" />

### 7. Contract verification

Contracts compiled using ChainIDE can be submitted to Polkaholic for contract verification.

Click the "Scan Verifier" button on the right-hand side, select the network, code hash, and public mode, then click "Publish Verified Code" to initiate the contract verification process.

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE47.png').default} width="100%" />

### 8. View WASM Developer dashboard

ChainIDE and Polkaholic have collaborated to develop the WASM Developer Dashboard.

Click the "WASM Developer Dashboard" button on the right-hand side to view information such as "Recent Code Stored," "Recent Contracts Instantiated," and "Recent Calls."

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE48.png').default} width="100%" />
### 9. Astar WASM Sandbox

If you prefer command-line development, you can open the Astar WASM Sandbox, which comes pre-loaded with [Swanky Suite](https://docs.astar.network/docs/build/wasm/swanky-suite/), [Git](https://git-scm.com/) and [Node.js V16](https://nodejs.org/en).

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE49.png').default} width="100%" />

### 10. Serve your dApp

ChainIDE Sandbox makes it easier to develop full-stack dApps by providing powerful features such as port-forwarding. To build the frontend for Astar dApps, you can utilize the magink-dApp template (ref: https://github.com/inkdevhub/magink-dapp) inside ChainIDE and build and test the frontend alongside smart contracts. Follow the below steps to set up the port manager to access the frontend.

#### 10.1 Open Port Manager

Click on the left side's Port Manager

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE50.png').default} width="100%" />

Click on "Add Port"

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE51.png').default} width="65%" />

Select the relevant options and click "Add"

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE52.png').default} width="65%" />

#### 10.2 Access the frontend

Click the jump button to access the corresponding port

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE53.png').default} width="65%" />

<Figure src={require('/docs/build/wasm/chainide-for-astar-wasm/img/chainIDE54.png').default} width="100%" />
