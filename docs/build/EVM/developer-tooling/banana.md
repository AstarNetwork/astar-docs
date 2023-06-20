---
sidebar_position: 3
---
# Banana SDK Integration

## Introduction
In this tutorial we will show how you can integrate Banana Wallet to your JavaScript or TypeScript-based frontend. We will demonstrate how to create a new wallet or connect an existing Banana Wallet on any dApp on Astar Network.

 
## Prerequisites

 - Basic JavaScript/Typescript knowledge.
 - Enthusiasm to build an amazing dApp on Astar.

## Getting started

### Step 1: Create a new repo with create-react-app
Create a new react project with react with name `banana-sdk-demo` and now let's move into to the it.
```
npx create-react-app banana-sdk-demo
cd banana-sdk-demo
```

### Step 2: Installing banana sdk package

Install @rize-labs/banana-wallet-sdk package with

```
npm install @rize-labs/banana-wallet-sdk
or
yarn add @rize-labs/banana-wallet-sdk
```

### Step 3: Smart Contract deployment

For this demo we will be using a  very basic smart contract with only two functionalities:

- Make a transaction to the blockchain by making a state variable change its value.
- Fetch value of state variable.

Code for smart contract

```
pragma solidity ^0.8.12;

contract Sample {

    uint public stakedAmount = 0;
    
    function stake() external payable {
        stakedAmount = stakedAmount + msg.value;
    }

    function returnStake() external {
        payable(0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5).transfer(stakedAmount);
    }
}
```

You can deploy the contract on Shibuya Testnet using [remix](https://remix.ethereum.org/) or something of your own choice. 

For this demo we had already deployed it here: `0xCC497f137C3A5036C043EBd62c36F1b8C8A636C0`

### Step 4: Building the front end

We will have a simple front end with some buttons to interact with the blockchain. Although Banana SDK provides you with a smart contract wallet you don't need worry about its deployment. Everything is handled by us in the SDK so you can just concentrate on building your Dapp.

![](https://hackmd.io/_uploads/ryPnrYEPh.png)

For more information about building the fron tend please refer to this  [guide](https://banana-wallet-docs.rizelabs.io/integration/sdk-integration-tutorial/banana-less-than-greater-than-shibuya#building-the-frontend).

### Step 5: Imports

```
import "./App.css";
import { Banana, Chains } from '@rize-labs/banana-wallet-sdk';
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { SampleAbi } from "./SampleAbi";
```

Download app.css and SampleAbi from here [App.css](https://github.com/Banana-Wallet/banana-tutorial/blob/feat/chaido-tutorial/src/App.css) and [SampleAbi.js](https://github.com/Banana-Wallet/banana-tutorial/blob/feat/chaido-tutorial/src/SampleAbi.js)

Initializing some states for demo

```
const [walletAddress, setWalletAddress] = useState("");
const [bananaSdkInstance, setBananSdkInstance] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [walletInstance, setWalletInstance] = useState(null);
const [output, setOutput] = useState("Welcome to Banana Demo");
const SampleContractAddress =   "0xCB8a3Ca479aa171aE895A5D2215A9115D261A566";
```

### Step 6: Initializing Banana SDK instance and creating methods

```
// calling it in useEffect

useEffect(() => {
    getBananaInstance();
}, []);

  const getBananaInstance = () => {
    const bananaInstance = new Banana(Chains.shibuyaTestnet);
    setBananSdkInstance(bananaInstance);
  };
```

For simplicity here we are creating SDK instance for Shibuya testnet network.

Creating Wallet

```
const createWallet = async () => {
    // starts loading
    setIsLoading(true);
    
    // creating wallet
    const wallet = await bananaSdkInstance.createWallet();
    setWalletInstance(wallet);
    
    // getting address for wallet created
    const address = await wallet.getAddress();
    setWalletAddress(address);
    setOutput("Wallet Address: " + address);
    setIsLoading(false);
 };
 
```

Developers need to call the `createWallet` method which will inherently ask user for wallet name once username is provided wallet would be initialized for user and the method would return an instance of wallet.

Connecting wallet

```
const connectWallet = async () => {
    
    // checking does wallet name is cached in cookie 
    const walletName = bananaSdkInstance.getWalletName();
    
    // if cached we will use it 
    if (walletName) {
      setIsLoading(true);

     // connect wallet with cached wallet name
      const wallet = await bananaSdkInstance.connectWallet(walletName);
      setWalletInstance(wallet);

      // extracting wallet address for display purpose
      const address = await wallet.getAddress();
      setWalletAddress(address);
      setOutput("Wallet Address: " + address);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      alert("You don't have wallet created!");
    }
  };
  
```
When the user wallet is created the wallet's public data is already cached into the user's cookie. The `getWalletName` function fetches the `walletName` from the cookie and once fetched we need to pass `walletName` into `connectWallet` which internally initializes and configures some wallet parameters and returns a wallet instance

Get ChainId

```
  const getChainId = async () => {
    setIsLoading(true);
    const signer = walletInstance.getSigner();
    const chainid = await signer.getChainId();
    setOutput(JSON.stringify(chainid));
    setIsLoading(false);
  };
```
Getting `chainId` is pretty straightforward forward devs just have to extract the signer from wallet once signer is extracted you can do `getChainId` to get the `chainId` of the current network.

Get Network

```
  const getNetwork = async () => {
    setIsLoading(true);
    const provider = walletInstance.getProvider();
    const network = await provider.getNetwork();
    setOutput(JSON.stringify(network));
    setIsLoading(false);
  };
```

Extracting the network is as easy as it looks. Developers just need to extract provider from wallet and from provider get network info using `getNetwork` method.

Make transaction

```
   const makeTransaction = async () => {
    setIsLoading(true);
    
    // getting signer
    const signer = walletInstance.getSigner();
    const amount = "0.00001";
    const tx = {
      gasLimit: "0x55555",
      to: SampleContractAddress,
      value: ethers.utils.parseEther(amount),
      data: new ethers.utils.Interface(SampleAbi).encodeFunctionData(
        "stake",
        []
      ),
    };

    try {
      // sending txn object via signer
      const txn = signer.sendTransaction(tx);
      setOutput(JSON.stringify(txn));
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
```

For making a transaction. you just need to create a transaction object. Then extract signer from the wallet instance you received and just make transaction by passing transaction object to the send transaction method.
PS: Make sure your wallet is funded before you make any transaction.

Signing message

```
  const signMessage = async () => {
    setIsLoading(true);
    const sampleMsg = "Hello World";
    const signer = walletInstance.getSigner();
    const signMessageResponse = await signer.signBananaMessage(sampleMsg);
    setOutput(JSON.stringify(signMessageResponse));
    setIsLoading(false);
  };
```

Signing a message is as simple as it looks. You just need to pass a message which you need to get signed once signed the method returns an object { messageSigned: "", signature: "" }

messageSigned: message that was signed. 

signature: signature for the signed message.

### Step 7: Putting frontend

JSX code for front end

```
<div className="App">
  <h1>Banana SDK Demo</h1>
  {walletAddress && <p> Wallet Address: {walletAddress}</p>}
  <button className="btn" onClick={() => createWallet()}>
    Create Wallet
  </button>
  <button className="btn" onClick={() => connectWallet()}>
    Connect Wallet
  </button>
  <button className="btn" onClick={() => getChainId()}>
    ChainId
  </button>
  <button className="btn" onClick={() => getNetwork()}>
    Network
  </button>
  <button className="btn" onClick={() => makeTransaction()}>
    Make transaction
  </button>
  <button className="btn" onClick={() => signMessage()}>
    Sign message
  </button>
  <h1> Output Panel</h1>
  <div className="output-div">
    <p>{isLoading ? "Loading.." : output}</p>
  </div>
</div>
```

## Troubleshooting

If you are facing webpack 5 polyfill issue please try to get it fixed using `react-app-rewired`.

```
npm install react-app-rewired 

npm install stream-browserify constants-browserify crypto-browserify os-browserify path-browserify process stream-browserify buffer ethers@^5.7.2
```

create a file name `config-overrides.js` with below content.
```
const { ProvidePlugin }= require("webpack")

module.exports = {
  webpack: function (config, env) {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
      }
      return rule;
    });
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      process: require.resolve("process"),
      os: require.resolve("os-browserify"),
      path: require.resolve("path-browserify"),
      constants: require.resolve("constants-browserify"), 
      fs: false
    }
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.ignoreWarnings = [/Failed to parse source map/];
    config.plugins = [
      ...config.plugins,
      new ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new ProvidePlugin({
          process: ["process"]
      }),
    ]
    return config;
  },
}
```
Change package.json to start using `react-app-rewired` instead of `react-scripts`.

```
react-scripts start -> react-app-rewired start
react-scripts build -> react-app-rewired build
react-scripts test -> react-app-rewired test
```

If you are still unable to resolve the issue please post your query to Banana Discord [here](https://discord.gg/3fJajWBT3N)


## Learn more

To learn more about Banana Wallet headover to [banana docs](https://banana-wallet-docs.rizelabs.io/)

Full tutorial code is avalaible [here](https://github.com/Banana-Wallet/banana-tutorial/tree/feat/shibuya-tutorial)

If you dapp already uses Rainbowkit then you can direclty use Banana Wallet on Shibuya testnet directly using rainbowkit. Please refer to [this](https://banana-wallet-docs.rizelabs.io/integration/sdk-integration-tutorial/banana-less-than-greater-than-shibuya) doc for more information.