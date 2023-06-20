---
sidebar_position: 3
---

# Light Client node with no RPC

:::note
Integrate with the Astar networks using a light client.
:::

This documentation will guide you on how to connect to the Astar Network using a light client (ScProvider) with the Polkadot.js API and Substrate Connect.

Prerequisites:
- Node.js (https://nodejs.org/en/download/)
- npm (https://www.npmjs.com/get-npm)

## Overview
Astar Network is a scalable smart contract platform on Polkadot that supports Ethereum compatibility. Connecting to the Astar Network using a light client (ScProvider) allows you to interact with the network without having to sync the entire blockchain.

1. Initialize a new Node.js project
Create a new directory for your project and navigate to it in your terminal or command prompt. Initialize a new Node.js project by running:

```bash
mkdir astar-light-client
cd astar-light-client
npm init -y
```

2. Install required packages
Install the required packages by running:

```bash
npm install @polkadot/api @substrate/connect
```

3. Create the chain specification file
Create a new file named `astar.json` in the `chain-specs` directory of your project. You can download the latest Astar chain specification file from the Astar GitHub repository or use this link.

Create a new directory named `chain-specs` and save the `astar.json` file in it:

```bash
mkdir chain-specs
wget https://raw.githubusercontent.com/AstarNetwork/astar-apps/main/src/config/api/polkadot/chain-specs/astar.json -P chain-specs
```

4. Create a script to connect to the Astar Network
Create a new file named `connect-astar.js` in your project directory and paste the following script into it:

```javascript
const { ApiPromise, ScProvider } = require("@polkadot/api");
const Sc = require("@substrate/connect");

async function queryInfo(api) {
  const assetMetadata = await api.query.assets.metadata.entries();

  assetMetadata.map((asset) => {
    let h = asset[1].toHuman();
    console.log(JSON.stringify(h));
  });
}

async function setup() {
  const jsonParachainSpecAstar = require("./chain-specs/astar.json");
  const astarSpec = JSON.stringify(jsonParachainSpecAstar);

  const relayProvider = new ScProvider(Sc, Sc.WellKnownChain.polkadot);
  const provider = new ScProvider(Sc, astarSpec, relayProvider);

  await provider.connect();
  const api = await ApiPromise.create({ provider });

  console.log("Connected to Astar Network using ScProvider (light client)");
  await queryInfo(api);
  process.exit();
}

setup();
```

This script sets up a connection to the Astar Network using a light client (ScProvider) by leveraging Substrate Connect and the Polkadot.js API.

5. Run the script
Now, you can run the script to connect to the Astar Network:

```bash
node connect-astar.js
```

If the connection is successful, the script will output the following message:

```txt
Connected to Astar Network using ScProvider (light client)
{"deposit":"86,000,000,000","name":"MochiMochiCoin","symbol":"MMC","decimals":"2","isFrozen":false}
...
{"deposit":"0","name":"Liquid DOT","symbol":"LDOT","decimals":"10","isFrozen":false}
```

Congratulations! You have successfully connected to the Astar Network using a light client (ScProvider) with the Polkadot.js API and Substrate Connect. You can now use the api instance to interact with the Astar Network and query data or submit transactions.

## Run it in Replit

```mdx-code-block
`import Iframe from 'react-iframe';`

<Iframe
  url="https://replit.com/@gluneau/Light-Client-Demo-for-Astar-and-Shiden?embed=true"
  width="100%"
  height="500px"
  id="myId"
  className="myClassname"
  display="initial"
  position="relative"
  allowFullScreen
/>
```
