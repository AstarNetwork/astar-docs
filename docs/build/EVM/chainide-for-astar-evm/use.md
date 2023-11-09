---
sidebar_position: 2
---

import Figure from '/src/components/figure'

# How to Use Astar EVM IDE?

> Set the entire process of writing, compiling, deploying, interacting, and querying with Astar EVM smart contracts

<iframe width="100%" height="500" src="https://www.youtube.com/embed/5m3-Ff17mjo?si=Rf5pLIlbZ1upWh-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 1. Write a contract

Upon entering the project, the README.md file included in the folder will be automatically previewed.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE5.png').default} width="100%" />

In the Explorer panel, you can create new files (or folders), refresh the directory, and download files. You can also directly click on the files that come with the template.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE6.png').default} width="25%" />

Click on a contract file to edit the code.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE7.png').default} width="100%" />

### 2. Compile the contract

Once your contract code is written, click on the "Compiler" button in the right-side menu to open the compilation module. Choose the compiler version and decide whether to enable optimization, then click "Compile \*\*\*.sol" to initiate the compilation.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE8.png').default} width="100%" />

After successful compilation, the ABI and BYTE CODE will be displayed below, and you'll see a message in the console stating "Compile contract success."

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE9.png').default} width="65%" />

### 3. Connect to Astar EVM

Before deploying the contract, you need to click on "Connect Wallet" in the upper right corner and select to connect to JavaScript VM (used for testing, implemented in JavaScript) or Metamask (for deployment on the Astar blockchain).

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE10.png').default} width="25%" />

### 4. Deploy the contract

Click the "Deploy & Interaction" button on the right-hand side, which will bring up the deployment and interaction pages. Select the compiled contract and click "Deploy" to initiate the deployment (then confirm in Metamask). After successful contract deployment, the console will display the contract deployment result and relevant information.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE11.png').default} width="100%" />

In addition, you can click "Import Deployed Contract" to import a contract that has already been deployed for contract interactions.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE12.png').default} width="100%" />

### 5. Contract interaction

After a successful contract deployment, you can interact with the contract. Click on the deployed contract, choose the corresponding interface, and click "Submit" or "Get" to perform interactions.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE13.png').default} width="100%" />

### 6. Transaction Query

Click on the transaction hash in the Output section to view the specific details of each transaction.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE14.png').default} width="100%" />

### 7. Verify the contract

Click on the "Scan Verifier" plugin on the right, select the contract you want to verify, enter the deployed contract address, and click "Verify."

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE15.png').default} width="100%" />

After successful verification, you can view the link to the verified contract on BlockScout scan.

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE16.png').default} width="65%" />

### 8. Astar EVM Sandbox

If you prefer using the command line for development, you can open the Astar EVM Sandbox, which comes pre-loaded with [Hardhat](https://hardhat.org/), [Truffle](https://trufflesuite.com/), [Brownie](https://eth-brownie.readthedocs.io/en/stable/) [Ganache](https://trufflesuite.com/ganache/), [Git](https://git-scm.com/) and [Node.js V16](https://nodejs.org/en).

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE17.png').default} width="100%" />

### 9. Serve your dApp

ChainIDE Sandbox makes it easier to develop full-stack dApps by providing powerful features such as port-forwarding. This means you can build a frontend for your Astar dApps using frontend frameworks (React/Vue/VanillaJS) in the browser. To build the frontend for Astar dApps, please use Voting dApp or Hardhat dApp Wave template. Follow the steps below showcasing how the port manager can be used to access the frontend.

#### 9.1 Open Port Manager

Click on the left side's Port Manager

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE18.png').default} width="65%" />

Click on "Add Port"

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE19.png').default} width="65%" />

Select the relevant options and click "Add"

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE20.png').default} width="65%" />

#### 10.2 Access the frontend

Click the jump button to access the corresponding port

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE21.png').default} width="65%" />

<Figure src={require('/docs/build/EVM/chainide-for-astar-evm/img/chainIDE22.png').default} width="100%" />
