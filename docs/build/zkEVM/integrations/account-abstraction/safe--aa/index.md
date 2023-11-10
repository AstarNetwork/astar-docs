# Safe Account Abstraction
 
The Safe\{Core\} Account Abstraction (AA) SDK aims to bring Account Abstraction to life by integrating Safe with Gelato Relay. This SDK helps developers to abstract the complexity of setting up a smart contract account.

**Account Abstraction Kit**
The AA kit helps user ot create predeterministic smart contract wallets and execute gasless transactions with the Gelato Relay.
The safe will only be deployed when the first transaction is sent.


**Protocol Kit**
The Protocol Kit helps interact with the Safe contracts. It enables the creation of new Safe accounts, updating their configuration, and signing and executing transactions, among other features.

**Relay Kit**
The Relay Kit relays Safe transactions, allowing you to get them sponsored by a third party or paid with any supported ERC-20 token.

## Safe AA SDKs

As part of the Gelato Raas AA offerings, we have deployed a custom safe-sdk creating following packages

| Package| SDK |
| --- | ----------- |
| Safe Protocol Kit | zkatana-gelato-protocol-kit|
| Safe AA Kit | zkatana-gelato-account-abstraction-kit|
| Safe Relay Kit | zkatana-gelato-relay-kit|


There are two different ways to send Gasless Transactions through a Safe, either sponsoring the gas with [1Balance](https://docs.gelato.network/developer-services/1balance) or paying with the Safe balance (SyncFee) 

In following examples examples, it will be called the `increment()` method on this simple counter contract deployed on zKatana [https://zkatana.blockscout.com/address/0x47A9064a8D242860ABb43FC8340B3680487CC088?tab=read_contract](https://zkatana.blockscout.com/address/0x47A9064a8D242860ABb43FC8340B3680487CC088?tab=read_contract)

## Quick Start

1) Clone the [starter-kit](https://github.com/gelatodigital/astar-zkatana-starter-kit) repo

2) Install project dependencies:
```
yarn install
```
in the package.json we have already included zkatana-gelato-protocol-kit, zkatana-gelato-account-abstraction-kit and zkatana-gelato-relay-kit
```shell
  "zkatana-gelato-account-abstraction-kit": "^1.3.2",
  "zkatana-gelato-protocol-kit": "^1.3.1",
  "zkatana-gelato-relay-kit": "^1.3.2"
```

3) Create a .env file with your private config:  
 ```shell
 cp .env.example .env
```
You will need to input your Private Key **PK** and **GELATO_RELAY_API_KEY** for sponsored transactions, you can get it at https://relay.gelato.network

4) Call the respective method:
  - Using 1Balance
      ```tyescript
       yarn aa1Balance
      ```
  - Using SyncFee
      ```tyescript
       yarn aaSyncFee
      ```



### Using 1Balance

```typescript

  const safeTransactionData: MetaTransactionData = {
    to: targetAddress,
    data: nftContract.interface.encodeFunctionData("increment", []),
    value: "0",
    operation: OperationType.Call,
  };
  

  const safeAccountAbstraction = new AccountAbstraction(signer);
  const sdkConfig: AccountAbstractionConfig = {
    relayPack,
  };
  await safeAccountAbstraction.init(sdkConfig);

  const txConfig = {
    TO: targetAddress,
    DATA: safeTransactionData.data,
    VALUE: "0",
    // Options:
    GAS_LIMIT: gasLimit,
  };

  const predictedSafeAddress = await safeAccountAbstraction.getSafeAddress();
  console.log({ predictedSafeAddress });

  const isSafeDeployed = await safeAccountAbstraction.isSafeDeployed();
  console.log({ isSafeDeployed });

  const safeTransactions: MetaTransactionData[] = [
    {
      to: txConfig.TO,
      data: txConfig.DATA,
      value: txConfig.VALUE,
      operation: OperationType.Call,
    },
  ];
  const options: MetaTransactionOptions = {
    gasLimit: txConfig.GAS_LIMIT,
    isSponsored: true,
  };

  const response = await safeAccountAbstraction.relayTransaction(
    safeTransactions,
    options
  );
  console.log(`https://relay.gelato.digital/tasks/status/${response} `);
```
**Output**
```shell
$ ts-node src/aa-safe-gasless/aa1Balance.ts
{ predictedSafeAddress: '0x68D60c586763879c6614e2eFA709cCae708203c4' }
{ isSafeDeployed: true }
https://relay.gelato.digital/tasks/status/0xc34f62e1b057b298c144c79b3cc16e4e24bc2b1e91ce5cd7660f9b8c1791be91 
```

### Using  SyncFee  
Remember to fund your Safe as the gas fees will be deducted from your safe balance

```typescript

  const gasLimit = "10000000";


  const safeTransactionData: MetaTransactionData = {
    to: targetAddress,
    data: nftContract.interface.encodeFunctionData("increment", []),
    value: "0",
    operation: OperationType.Call,
  };

  const safeAccountAbstraction = new AccountAbstraction(signer);
  const sdkConfig: AccountAbstractionConfig = {
    relayPack,
  };
  await safeAccountAbstraction.init(sdkConfig);

  const txConfig = {
    TO: targetAddress,
    DATA: safeTransactionData.data,
    VALUE: "0",
    // Options:
    GAS_LIMIT: gasLimit,
    GAS_TOKEN: ethers.constants.AddressZero,
  };

  const predictedSafeAddress = await safeAccountAbstraction.getSafeAddress();
  console.log({ predictedSafeAddress });

  const isSafeDeployed = await safeAccountAbstraction.isSafeDeployed();
  console.log({ isSafeDeployed });

  const safeTransactions: MetaTransactionData[] = [
    {
      to: txConfig.TO,
      data: txConfig.DATA,
      value: txConfig.VALUE,
      operation: OperationType.Call,
    },
  ];
  const options: MetaTransactionOptions = {
    gasLimit: txConfig.GAS_LIMIT,
    gasToken: txConfig.GAS_TOKEN,
    isSponsored: false,
  };

  const response = await safeAccountAbstraction.relayTransaction(
    safeTransactions,
    options
  );
  console.log(`https://relay.gelato.digital/tasks/status/${response} `);
```

  **Output**
  ```shell
 $ ts-node src/aa-safe-gasless/aaSyncFee.ts
{ predictedSafeAddress: '0x68D60c586763879c6614e2eFA709cCae708203c4' }
{ isSafeDeployed: true }
https://relay.gelato.digital/tasks/status/0x6590f89386d9adb8a6d20ba7dffaa17958d4e66d49e6a0d3b5b1c144022abbc1 
  ```
