---
sidebar_position: 1
---

# How to get started with AstarBase

## TL;DR

This cookbook will learn you on how to started using AstarBase. AstarBase is an on-chain EVM database in Astar Ecosystem. After reading this, you will be able to make a small "Hello World" use case of AstarBase yourself.

## What is AstarBase

AstarBase is an on-chain EVM database. AstarBase contains the mapping of users's EVM and native address. An EVM address is usually referred as a Metamask address or H160, native address can be referred as a SS58 address. These two are now interchangeable through the mapping that AstarBase offers. 

The main goal of AstarBase is creating more end-user cases for users to participate in the Astar ecosystem by offering some mechanisms such as rewarding users easily.

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
This code snippet checks if the pair of addresses (SS58 & EVM) is an active staker in dApps Staking and returns the staked amount.

```jsx
function checkStakerStatusOnContract(address evmAddress, address stakingContract)
    external view
    returns (uint128);
```
This code snippet checks if the pair of addresses (SS58 & EVM) is an active staker in dApps Staking on the specified contract and returns the staked amount.

## Create a simple dApp using AstarBase

We will work on a simple “Hello World” dApp which has a simple frontend to show a practical use case of AstarBase. 

Our showcase checks if certain user is a registered user in AstarBase. One application of this would be to pick a loyal user.

### Step 1:
First, we will create a simple front end. In this example, we use React.js by running the command below.

```bash
npx create-react-app my-app
cd my-app
npm start
```

### Step 2:
We slightly modify the frontend in App.js file so that now when a user clicks a button. The log on console shows if a certain user is registered in AstarBase.

```jsx
return (
    <div className="App">
      <button onClick={handleCall}>Try this</button>
    </div>
  );
```

### Step 3:

We use a Shibuya address for this example. Add the a necessary details available from [here](https://github.com/AstarNetwork/astarbase/blob/main/public/config/config.json) in App.js file.

```jsx
const web3 = new Web3(new Web3.providers.HttpProvider("[https://evm.shibuya.astar.network](https://evm.shibuya.astar.network/)"));
```

### Step 4:
The ABI is available [here](https://github.com/AstarNetwork/astarbase/blob/main/public/config/register_abi.json), we can now add it in App.js file. For this, we put ABI in the same file to make is easy, but you can put it in a different folder to make your code cleaner.

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
Finally, we add an example contract address available from [here](https://github.com/AstarNetwork/astarbase/blob/main/contract/deployment-info.md). In this example, we use the Shibuya version but you can use Astar version as well as Shiden version.

```jsx
const address = "0xF183f51D3E8dfb2513c15B046F848D4a68bd3F5D";
```

### Step 6:
We will combine all what we wrote in the previous steps. For #EVM_ADDRESS, you can replace it with your specified address in EVM format. 

```jsx
const smartContract = new web3.eth.Contract(abi, address);
const stakerStatus = await smartContract.methods.isRegistered("#EVM_ADDRESS").call();
console.log(stakerStatus);
```

In the end, this returns if a certain address is registered in AstarBase.
That’s a wrap! Happy hacking!

## Reference

- Official Document for AstarBase: 
   - [https://docs.astar.network/docs/EVM/astarbase/](https://docs.astar.network/docs/EVM/astarbase/)
- Official Document for creating a React app:
   - [https://reactjs.org/docs/create-a-new-react-app.html](https://reactjs.org/docs/create-a-new-react-app.html)
