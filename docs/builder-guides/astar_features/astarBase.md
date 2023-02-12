---
sidebar_position: 2
---

# How to get started with AstarBase

## TL;DR

This cookbook will teach you on how to start using AstarBase. AstarBase is an on-chain EVM database in Astar ecosystem. After reading this, you will be able to make a small "Hello World" use case of AstarBase yourself.

## What is AstarBase

AstarBase is an on-chain EVM database. AstarBase maps a users's EVM and native address. An EVM address is usually referred as a Metamask address or H160, native address can be referred as an SS58 address. These two are now interchangeable through the mapping that AstarBase offers.

The main goal of AstarBase is create more cases for users to participate in the Astar ecosystem by offering a mechanism that connects EVM to native. For example, a project can reward ASTR tokens to a users' native address for participating an EVM dApp.

The EVM and native addresses are treated as a pair.

### Functions available in AstarBase

We have three major functions in AstarBase.

```jsx
function isRegistered(address evmAddress) 
    external view 
    returns (bool);
```
This code snippet checks if the given address was registered in AstarBase.

```jsx
function checkStakerStatus(address evmAddress)
    external view
    returns (uint128);
```
This code snippet checks if the pair of addresses (SS58 & EVM) is an active staker in dApp staking and returns the staked amount.

```jsx
function checkStakerStatusOnContract(address evmAddress, address stakingContract)
    external view
    returns (uint128);
```
This code snippet checks if the pair of addresses (SS58 & EVM) is an active staker in dApp staking on the specified contract and returns the staked amount.

## Create a simple dApp using AstarBase

Let's work on a simple “Hello World” dApp with a simple front end, to show a practical use case of AstarBase.

Our showcase checks if certain user is a registered user in AstarBase. An application of this would be to pick a loyal user and reward them.

### Step 1:
First, we will create a simple front end. In this example, we use React.js by running the command below.

```bash
npx create-react-app my-app
cd my-app
npm start
```

### Step 2:
We slightly modify the front end in App.js file. Now, when a user clicks this button the log-on console will show if a certain user is registered in AstarBase.

```jsx
return (
    <div className="App">
      <button onClick={handleCall}>Try this</button>
    </div>
  );
```

### Step 3:

We use a Shibuya address for this example. Use this [repo](https://github.com/AstarNetwork/astarbase/blob/main/public/config/config.json) to add the necessary details in the App.js file.

```jsx
const web3 = new Web3(new Web3.providers.HttpProvider("[https://evm.shibuya.astar.network](https://evm.shibuya.astar.network/)"));
```

### Step 4:
The ABI is available [here](https://github.com/AstarNetwork/astarbase/blob/main/public/config/register_abi.json). We can now add it in App.js file. Here we put ABI in the same file to make is easy, but you can place it in a different folder to make your code cleaner.

```jsx
const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "DAPPS_STAKING",
        "outputs": [
          {
            "internalType": "contract DappsStaking",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "SR25519Contract",
        "outputs": [
          {
            "internalType": "contract SR25519",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "addressMap",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "beneficiary",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "evmAddress",
            "type": "address"
          }
        ],
        "name": "checkStakerStatus",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "evmAddress",
            "type": "address"
          }
        ],
        "name": "isRegistered",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "_state",
            "type": "bool"
          }
        ],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "ss58PublicKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signedMsg",
            "type": "bytes"
          }
        ],
        "name": "register",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registeredCnt",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newBeneficiary",
            "type": "address"
          }
        ],
        "name": "setBeneficiary",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_newCost",
            "type": "uint256"
          }
        ],
        "name": "setUnregisterFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "ss58Map",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "evmAddress",
            "type": "address"
          }
        ],
        "name": "sudoUnRegister",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unRegister",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unregisterFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ];
```

### Step 5:
Next, we add an example contract address, available [here](https://github.com/AstarNetwork/astarbase/blob/main/contract/deployment-info.md). In this example, we use the Shibuya version, but you can use Astar or Shiden versions, too.

```jsx
const address = "0xF183f51D3E8dfb2513c15B046F848D4a68bd3F5D";
```

### Step 6:
Finally, let's combine all that we wrote in the previous steps. Replace #EVM_ADDRESS with your specific address in EVM format.

```jsx
const smartContract = new web3.eth.Contract(abi, address);
const stakerStatus = await smartContract.methods.isRegistered("#EVM_ADDRESS").call();
console.log(stakerStatus);
```

That's a wrap! This example will return if a certain address is registered in AstarBase.

Happy hacking!

## Reference

- Official Document for AstarBase: 
   - [https://docs.astar.network/docs/EVM/astarbase/](https://docs.astar.network/docs/EVM/astarbase/)
- Official Document for creating a React app:
   - [https://reactjs.org/docs/create-a-new-react-app.html](https://reactjs.org/docs/create-a-new-react-app.html)
