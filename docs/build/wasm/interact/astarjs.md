---
sidebar_position: 1
---

# Astar.js for Wasm Smart Contracts

[Astar.js](https://github.com/AstarNetwork/astar.js/wiki) is a JavaScript library for interacting with the Astar blockchain. It is a collection of modules that allow you to interact with the Astar blockchain through a local or remote node. It can be used in the browser or in Node.js.

## Installation

```bash
yarn add @polkadot/api@9.13.6 @astar-network/astar-api@0.1.14
```

Example: Here is a dapp example that uses Astar.js to interact with WASM smart contract. You can find the source code [dApp](https://github.com/astarNetwork/wasm-lottery)
This is a simple lottery dapp that allows users to enter and draw the lottery. The lottery is implemented as a WASM smart contract.

## Usage

### Connecting to API

```js
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@astar-network/astar-api';
import { sendTransaction } from '@astar-network/astar-sdk-core';

async function main() {
    const provider = new WsProvider('ws://localhost:9944');
    // OR
    // const provider = new WsProvider('wss://shiden.api.onfinality.io/public-ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // Use the api
    // For example:
    console.log((await api.rpc.system.properties()).toHuman());

    process.exit(0);
}

main()
```

### Initialise Contract Class

```js
import { Abi, ContractPromise } from '@polkadot/api-contract'

// After compiling the contract a ABI json is created in the artifacts. Import the ABI:
import ABI from './artifacts/lottery.json'

const abi = new Abi(ABI, api.registry.getChainProperties())

// Initialise the contract class
const contract = new ContractPromise(api, abi, address) // address is the deployed contract address
```

### Query Contract Messages

```js

// Get the gas WeightV2 using api.consts.system.blockWeights['maxBlock']
const gasLimit = api.registry.createType(
    'WeightV2',
    api.consts.system.blockWeights['maxBlock']
  )

// Query the contract message
const { gasRequired, result, output } = await contract.query.pot(
    account.address,
    {
      gasLimit,
    }
  )
```

### Send Contract Transaction

Sending contract transaction normally is a 2 step process. First is to query the transaction and check for errors. We have a helper function to do this for you. The second step is to send the transaction. The helper function will return the transaction object which you can use to sign and send the transaction.
The parameters for the helper function are:

- api: The api instance
- contract: The contract instance
- message: The message to send
- sender: The sender address
- value: The value to send with the transaction
- ...params: The parameters for the message

```js

import { sendTransaction } from '@astar-network/astar-sdk-core';

try {
  const result = await sendTransaction(
    api, // The api instance of type ApiPromise
    contract, // The contract instance of type ContractPromise
    'enter', // The message to send or transaction to call
    account.address, // The sender address
    new BN('1000000000000000000') // 1 TOKEN or it could be value you want to send to the contract in title
  )

  result.signAndSend(account.address, (res) => {
    if (res.status.isInBlock) {
      console.log('in a block')
    }
    if (res.status.isFinalized) {
      console.log('finalized')
      console.log('Successfully entered in lottery!')
    }
  })
} catch (error) {
  if (error.isErr) {
    let display = ''
    if (error.asErr.isModule) {
      const dispatchError = api.registry.findMetaError(error.asErr.asModule)
      console.log('error', dispatchError.name)
      display = dispatchError.docs.length ? dispatchError.docs.concat().toString() : dispatchError.name
    } else {
      display = error.asErr.toString()
    }

    console.log(display)
    return
  }

  if (error.isOk) {
    const flags = error.asOk.flags.toHuman()
    if (flags.includes('Revert')) {
      console.log('Revert')
      const type = contract.abi.messages[5].returnType
      const typeName = type?.lookupName || type?.type || ''
      const error = contract.abi.registry.createTypeUnsafe(typeName, [error.asOk.data]).toHuman()

      console.log(error ? (error as any).Err : 'Revert')
      return
    }
  }
}
```