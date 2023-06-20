---
sidebar_position: 1
---
# Hardhat

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

const { privateKey } = require("./private.json");

// ...

module.exports = {
  // ...

  networks: {
    // Shibuya faucet: use #shibuya-faucet room in https://discord.gg/astarnetwork
    shibuya: {
      url: "https://evm.shibuya.astar.network",
      chainId: 81,
      accounts: [privateKey],
    },

    // Astar community faucet (please don't abuse): https://as-faucet.xyz/en/astar#
    astar: {
      url: "https://evm.astar.network",
      chainId: 592,
      accounts: [privateKey],
    },

    // Shiden community faucet (please don't abuse): https://as-faucet.xyz/en/shiden#
    shiden: {
      url: "https://evm.shiden.astar.network",
      chainId: 336,
      accounts: [privateKey],
    },
  },
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
      network_id: 81,
    },

    // Astar community faucet (please don't abuse): https://as-faucet.xyz/en/astar#
    astar: {
      url: "https://evm.astar.network",
      network_id: 592,
    },

    // Shiden community faucet (please don't abuse): https://as-faucet.xyz/en/shiden#
    shiden: {
      url: "https://evm.shiden.astar.network",
      network_id: 336,
    },
  },

  // ...
};
```

Deploy/Migrate by running `truffle migrate --network shibuya`, replacing `shibuya` with your chosen network. If `--network` is not specified, the network values under`development` will be used.