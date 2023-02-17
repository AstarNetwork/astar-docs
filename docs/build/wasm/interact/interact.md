# Interact with Wasm Smart Contract

## Wallets

## Astar.js

[Astar.js](https://github.com/AstarNetwork/astar.js/wiki) is a JavaScript library for interacting with the Astar blockchain. It is a collection of modules that allow you to interact with the Astar blockchain through a local or remote node. It can be used in the browser or in Node.js.

### Installation

```bash
yarn add @polkadot/api@9.13.6 @astar-network/astar-api@0.1.14
```

Example: Here is a dapp example that uses Astar.js to interact with WASM smart contract. You can find the source code [dApp](https://github.com/astarNetwork/wasm-lottery)
This is a simple lottery dapp that allows users to enter and draw the lottery. The lottery is implemented as a WASM smart contract.

### Usage

#### Connecting to API

```js
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@astar-network/astar-api';

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

#### Initialise Contract Class

```js
import { Abi, ContractPromise } from '@polkadot/api-contract'

// After compiling the contract a ABI json is created in the artifacts. Import the ABI:
// If you didn't use swanky the name will be metadata.json
import ABI from './artifacts/lottery.json'

const abi = new Abi(ABI, api.registry.getChainProperties())

// Initialise the contract class
const contract = new ContractPromise(api, abi, address) // address is the deployed contract address
```

#### Query Contract Messages

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

#### Send Contract Transaction

```js
const gasLimit = api.registry.createType(
  'WeightV2',
  api.consts.system.blockWeights['maxBlock']
)

// First dry run the transaction to get the gas required and storage deposit
const { gasRequired, storageDeposit, result } = await contract.query.enter(
  account.address,
  {
    gasLimit: gasLimit,
    storageDepositLimit: null,
    value: new BN('1000000000000000000')
  }
)

console.log('gasRequired', gasRequired.toHuman())
console.log('storageDeposit', storageDeposit.toHuman())

// Handle the error
if (result.isErr) {
  let error = ''
  if (result.asErr.isModule) {
    const dispatchError = api.registry.findMetaError(result.asErr.asModule)
    console.log('error', dispatchError.name)
    error = dispatchError.docs.length ? dispatchError.docs.concat().toString() : dispatchError.name
  } else {
    error = result.asErr.toString()
  }

  console.log(error)
  return
}

// Handle the revert
if (result.isOk) {
  const flags = result.asOk.flags.toHuman()
  if (flags.includes('Revert')) {
    console.log('Revert')
    console.log(result.toHuman())
    const type = contract.abi.messages[5].returnType
    const typeName = type?.lookupName || type?.type || ''
    const error = contract.abi.registry.createTypeUnsafe(typeName, [result.asOk.data]).toHuman()

    console.log(error ? (error as any).Err : 'Revert')
    return
  }
}

await contract.tx
  .enter({
    gasLimit: gasRequired,
  // in case storage deposit is charged for the transaction set this as storageDeposit
    storageDepositLimit:  storageDeposit.isCharge ? storageDeposit.asCharge.toString() : null,
    value: new BN('1000000000000000000')
  })
  .signAndSend(account.address, (res) => {
    if (res.status.isInBlock) {
      console.log('in a block')
    }
    if (res.status.isFinalized) {
      console.log('finalized')
      console.log('Successfully entered in lottery!')
    }
  })
```
