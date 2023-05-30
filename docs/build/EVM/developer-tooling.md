---
sidebar_position: 2
---

# Developer Tooling

Deploying and interacting with EVM-based smart contracts on Astar is as easy as any other EVM-compatible network. Getting started requires just two steps:

1. Configuring (and funding) your Ethereum account on the respective network.
2. Adding Astar networks to your Ethereum client.

:::caution
For Astar and Shiden applications, we _highly_ recommend [running your own network node](../../nodes/index.md) and not relying on our RPC endpoints. This further decentralizes the network, and puts you in control of your uptime requirements.
:::

## thirdweb

### Create contract

To create a new smart contract using thirdweb CLI, follow these steps:

1. In your CLI run the following command:

   ```
   npx thirdweb create contract
   ```

2. Input your preferences for the command line prompts:
   1. Give your project a name
   2. Choose your preferred framework: Hardhat or Foundry
   3. Name your smart contract
   4. Choose the type of base contract: Empty, [ERC20](https://portal.thirdweb.com/solidity/base-contracts/erc20base), [ERC721](https://portal.thirdweb.com/solidity/base-contracts/erc721base), or [ERC1155](https://portal.thirdweb.com/solidity/base-contracts/erc1155base)
   5. Add any desired [extensions](https://portal.thirdweb.com/solidity/extensions)
3. Once created, navigate to your project’s directory and open in your preferred code editor.
4. If you open the `contracts` folder, you will find your smart contract; this is your smart contract written in Solidity.

   The following is code for an ERC721Base contract without specified extensions. It implements all of the logic inside the [`ERC721Base.sol`](https://github.com/thirdweb-dev/contracts/blob/main/contracts/base/ERC721Base.sol) contract; which implements the [`ERC721A`](https://github.com/thirdweb-dev/contracts/blob/main/contracts/eip/ERC721A.sol) standard.

   ```bash
   // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   import "@thirdweb-dev/contracts/base/ERC721Base.sol";

   contract Contract is ERC721Base {
       constructor(
           string memory _name,
           string memory _symbol,
           address _royaltyRecipient,
           uint128 _royaltyBps
       ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}
   }
   ```

   This contract inherits the functionality of ERC721Base through the following steps:

   - Importing the ERC721Base contract
   - Inheriting the contract by declaring that our contract is an ERC721Base contract
   - Implementing any required methods, such as the constructor.

5. After modifying your contract with your desired custom logic, you may deploy it to Astar using [Deploy](https://portal.thirdweb.com/deploy).

---

Alternatively, you can deploy a prebuilt contract for NFTs, tokens, or marketplace directly from the thirdweb Explore page:

1. Go to the thirdweb Explore page: https://thirdweb.com/explore

   ![thirdweb Explore page featuring pre-built smart contracts](/img/thirdweb-explore.png)

2. Choose the type of contract you want to deploy from the available options: NFTs, tokens, marketplace, and more.
3. Follow the on-screen prompts to configure and deploy your contract.

> For more information on different contracts available on Explore, check out [thirdweb’s documentation.](https://portal.thirdweb.com/pre-built-contracts)

### Deploy contract

Deploy allows you to deploy a smart contract to any EVM compatible network without configuring RPC URLs, exposing your private keys, writing scripts, and other additional setup such as verifying your contract.

1. To deploy your smart contract using deploy, navigate to the root directory of your project and execute the following command:

   ```bash
   npx thirdweb deploy
   ```

   Executing this command will trigger the following actions:

   - Compiling all the contracts in the current directory.
   - Providing the option to select which contract(s) you wish to deploy.
   - Uploading your contract source code (ABI) to IPFS.

2. When it is completed, it will open a dashboard interface to finish filling out the parameters.
   - `_name`: contract name
   - `_symbol`: symbol or "ticker"
   - `_royaltyRecipient`: wallet address to receive royalties from secondary sales
   - `_royaltyBps`: basis points (bps) that will be given to the royalty recipient for each secondary sale, e.g. 500 = 5%
3. Select Astar as the network
4. Manage additional settings on your contract’s dashboard as needed such as uploading NFTs, configuring permissions, and more.

For additional information on Deploy, please reference [thirdweb’s documentation](https://portal.thirdweb.com/deploy).

If you have any further questions or encounter any issues during the process, please reach out to thirdweb support at [support.thirdweb.com](http://support.thirdweb.com/).

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
