---
sidebar_position: 2
---

# Developer Tooling

Deploying and interacting with EVM-based smart contracts on Astar is as easy as any other EVM-compatible network. Getting started requires just two steps:

1. Configuring (and funding) your Ethereum account on the respective network.
2. Adding Astar networks to your Ethereum client.

:::caution
For Astar and Shiden applications, we *highly* recommend [running your own network node](../../nodes/index.md) and not relying on our RPC endpoints. This further decentralizes the network, and puts you in control of your uptime requirements.
:::

## Hardhat

### Initialize Your Project

If you're starting your Hardhat project from scratch, we recommend you read the [Hardhat Quick Start](https://hardhat.org/getting-started/#quick-start#overview) page.

### Setting up Your Account

The quickest way to get Hardhat to deploy contracts to a non-local testnet, is to export and use an existing MetaMask account.

To get an account's private key from MetaMask:

1. Open MetaMask.
2. Select the account you want to export.
3. Click the three dots on the right side.
4. Select "Account Details".
5. Select "Export Private Key".
6. Enter your password and select "Confirm".

You should see a 64-character hex string similar to the following:

`60ed0dd24087f00faea4e2b556c74ebfa2f0e705f8169733b01530ce4c619883`

Create a new file in your root folder called `private.json` with your private key in it:

```json
{
    "privateKey": "60ed0dd24087f00faea4e2b556c74ebfa2f0e705f8169733b01530ce4c619883"
}
```

Modify your `hardhat.config.js` file to include:

```js
// hardhat.config.js

// ... 

const { privateKey } = require('./private.json');

// ... 

module.exports = {

  // ... 

  networks: {
    // Shibuya faucet: use #shibuya-faucet room in https://discord.gg/astarnetwork
    shibuya: {
      url: "https://evm.shibuya.astar.network",
      chainId: 81,
      accounts: [ privateKey ]
    },
    
    // Astar community faucet (please don't abuse): https://as-faucet.xyz/en/astar#
    astar: {
      url: "https://evm.astar.network",
      chainId: 592,
      accounts: [ privateKey ]
    },

    // Shiden community faucet (please don't abuse): https://as-faucet.xyz/en/shiden#
    shiden: {
      url: "https://evm.shiden.astar.network",
      chainId: 336,
      accounts: [ privateKey ]
    }
  }
};
```

Once your accounts are funded, you can deploy the sample contract to Shibuya with `npx hardhat run --network shibuya scripts/sample-script.js`.

## Truffle

### Create an Ethereum Account

We recommend using the `@truffle/hdwallet-provider` package for key management. Instructions can be found [here](https://github.com/trufflesuite/truffle/blob/develop/packages/hdwallet-provider/README.md).

### Add Networks to `truffle-config.js`

To deploy and interact with Astar, modify `networks` in `truffle-config.js` to include Astar's networks:

```js
// truffle-config.js
module.exports = {

  networks: {
  
    // ... any existing networks (development, test, etc.)

    // Shibuya faucet: use #shibuya-faucet room in https://discord.gg/astarnetwork
    shibuya: {
      url: "https://evm.shibuya.astar.network",
      network_id: 81
    },
    
    // Astar community faucet (please don't abuse): https://as-faucet.xyz/en/astar#
    astar: {
      url: "https://evm.astar.network",
      network_id: 592
    },

    // Shiden community faucet (please don't abuse): https://as-faucet.xyz/en/shiden#
    shiden: {
      url: "https://evm.shiden.astar.network",
      network_id: 336
    }
  }

  // ...

};
```

Deploy/Migrate by running `truffle migrate --network shibuya`, replacing `shibuya` with your chosen network. If `--network` is not specified, the network values under`development` will be used.

## Your Own RPC Server

For EVM developers and projects, it is not an unreasonable expectation that they should have their own managed EVM endpoints. Relying on public endpoints can introduce additional risk due to centralizaion or improper maintenance, and make them single points of failure.

:::note
Astar team highly recommends that projects use and maintain their own EVM endpoints.
:::

Launching an Astar Network endpoint is easy.

:::note
The EVM RPC server is disabled by default. To enable it, append the `--enable-evm-rpc` flag to the launch string.
:::

```
astar-collator --chain=shiden --enable-evm-rpc --unsafe-rpc-external --unsafe-ws-external
```

The launch string above will start an Astar Collator on Shiden network, open up an HTTP endpoint on port `9933`, and a WS endpoint on port `9944`.

We also recommend paying attention to the `--ws-max-connections` parameter. By default this value is relatively small, so it may be beneficial to increase it to a few thousand.