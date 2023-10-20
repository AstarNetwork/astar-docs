---
sidebar_position: 1
---

# Acurast

[Acurast]: https://acurast.com/

## Overview

[Acurast](https://acurast.com/) is a platform and protocol designed to enable Web3 projects and enterprises to realize the full potential of Web3 by interconnecting worlds like Web2, Web3, AI, IOT through Acurast's Universal Interoperability.

## Using Acurast

Through Acurast developers can arbitrarly fetch data from public or permissioned APIs for the "Oracle" use case such as price feeds for DeFi platforms through a decentralized execution layer of off-chain workers. These [Processors](https://docs.acurast.com/acurast-processors), hosted by individuals, provide the resources of their Trusted Execution Environment that can be utilized to run computation yielding a verifiable output directly on chain. Developers can use the [Acurast Console](https://console.acurast.com/) to create new request and to get access to these interoperability resources.

Acurast supports Astar's **WASM** and **EVM** environments. Contract Examples address can be found below:

### Astar Destination Example

WASM Smart Contract: b2o6ENagNWAxQT9f9yHFxfVMSpJA7kK6ouMhNN6veKXi3jw

### Shiden Destination

WASM Smart Contract: 0xDA7a001b254CD22e46d3eAB04d937489c93174C3

## Obtain Data with Acurast on WASM and EVM

### How to Get Started

1. Deploy one of the example contracts to WASM or EVM
1. Define your script detailing where to fetch data, computation etc.
1. Create a Job on the [Acurast Console](https://console.acurast.com/)
1. Processors will fulfill verifiable outputs in your defined interval to your contract

### WASM Example

The following example shows simple WASM smart contracts implemented with [ink!](https://use.ink/).

Keep in mind that you can do much more with Acurast and get access to all interoperability modules besides these examples.

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink;

#[ink::contract]
mod receiver {
    #[ink(storage)]
    pub struct Receiver {
        price: u128,
    }

    impl Receiver {
        #[ink(constructor)]
        pub fn default() -> Self {
            Self {
                price: Default::default(),
            }
        }

        #[ink(message)]
        pub fn fulfill(&mut self, price: u128) {
            self.price = price;
        }

        #[ink(message)]
        pub fn get_price(&self) -> u128 {
            self.price
        }
    }
}

```

### EVM Example

```ts
pragma solidity 0.8.10;

/**
 * @title Simple price feed contract
 */
contract PriceFeed {
    // Account authorized to update the prices
    address public provider = 0xF7498512502f90aA1ff299b93927417461EC7Bd5;

    // Callable by other contracts
    uint128 public price;

    /**
     * Provide the latest price
     */
    function fulfill(uint128 new_price) external {
        require(msg.sender == provider, "NOT_PROVIDER");
        price = new_price;
    }
}
```

### Script

This example script shows how a "Price Feeds" is fetched from Binance and pushed to a WASM smart contract. You can view and test the your script on the Acurast Console.

```js
const callIndex = "0x4606"; // the call index for the 'call' extrinsic.
const destination = "b2o6ENagNWAxQT9f9yHFxfVMSpJA7kK6ouMhNN6veKXi3jw"; // contract address that will receive the 'fulfill' call.
_STD_.chains.substrate.signer.setSigner("SECP256K1"); // the type of signer used for sign the extrinsic call
httpGET(
  "https://api.binance.com/api/v3/ticker/price?symbol=AAVEBUSD",
  {},
  (response, _certificate) => {
    const price = JSON.parse(response)["price"] * 10 ** 18;
    const payload = _STD_.chains.substrate.codec.encodeUnsignedNumber(
      price,
      128
    );
    _STD_.chains.substrate.contract.fulfill(
      "https://rpc.astar.network",
      callIndex,
      destination,
      payload,
      {
        refTime: "3951114240",
        proofSize: "125952",
      },
      (opHash) => {
        print("Succeeded: " + opHash);
      },
      (err) => {
        print("Failed fulfill: " + err);
      }
    );
  },
  (err) => {
    print("Failed get price: " + err);
  }
);
```

### Job Specification

1. Go to the [Acurast Console](https://console.acurast.com/) and log in with your [Talisman Wallet](https://www.talisman.xyz/wallet) or your [PolkadotJS Extension](https://polkadot.js.org/extension/).
1. Go to "Create Job" and select your destination, the ecosystem you're building in.
1. Select an existing template, adapt it or write your own code that fits your needs. Test your code with "Test Code".
1. Select your own Processor or use public ones.
1. Define your execution schedule with the parameters such as start and endtime, interval etc.
1. Specify your usage parameters.
1. Specify your additional parameters such as the reward.
1. Publish your Job and wait for your first fulfillment.

Or check out [How to get started with the Acurast Console](https://console.acurast.com/developers/introduction#get-started) to register your Job.

## Full Documentation

You can find Acurast's official documentation [here](https://docs.acurast.com/).
