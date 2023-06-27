---
sidebar_position: 2
---
# Truffle

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