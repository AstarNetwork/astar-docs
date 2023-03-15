---
sidebar_position: 4
description: "Alchemy is a developer platform that helps companies to build scalable and reliable decentralized applications without the difficulty of managing blockchain infrastructure in-house."
---

# Alchemy
[Alchemy] is a developer-focused platform that helps companies build scalable and reliable decentralized applications, without the difficulty of managing blockchain infrastructure in-house.

- Alchemy Supernode offers the most reliable, scalable and accurate way to connect and build on the Astar blockchain.
- Alchemy SDK gives Astar developers the easiest way to connect their dApps to the blockchain with just two lines of code.
- Websockets & Webhooks allows you to subscribe and get notified for any address activity events as well as mined and dropped transactions.

## Overview
There are many ways to make requests to Astar network. This guide will show you how to use Alchemy and API it provides that allow us to communicate with the Astar mainnet without having to run our own nodes. 

### Step 1. Create an Alchemy account

To use API's and ifrastructure provided by Alchemy, create an Alchemy account for free [here](https://www.alchemy.com/).

### Step 2. Create App.


To authenticate your requests you need an API key. 

Once you’ve created an Alchemy account, you can generate an API key by creating an app. This will allow you to make requests to Astar network.

Navigate to the “Create App” page in your Alchemy Dashboard by hovering over “Apps” in the nav bar and clicking “Create App”.

![](https://i.imgur.com/kC5t94Q.jpg)

### Step 3. Enter App details.

In the "Create App" window, choose the chain you are connecting to (Astar) and the network (Astar Mainnet). Currently Alchemy only supports the Astar Mainnet. Give your App a name and a description. 

![](https://i.imgur.com/LBbPAEC.jpg)


### Step 4. Get your API key

Perfect! Now we have created our app and by doing so, generated the API key and an endpoint. To see the API key, choose your newly created App in the list of your Apps and click on the "View Key" button.

![](https://i.imgur.com/SFern1V.jpg)

### Step 5. Save your API key

Copy and save your API Key - you will need it to send request to query data from Astar.

![](https://i.imgur.com/X4aGtSu.jpg)



### Step 6.  Install Alchemy SDK

To interact with Astar blockchain using Alchemy's infrastructure we need to instal Alchemy SDK. 

Depending on your package manager run the commands below in a terminal or a command line:

```
(npm)
mkdir alchemy-astar-api
cd alchemy-astar-api
npm init --yes
```

```
(yarn)
mkdir alchemy-astar-api
cd alchemy-astar-api
yarn init --yes
```


### Step 7. Make your first request

You are all set to make your first request! For instance, lets make a request to get `latest block`. Create an `index.js` file and paste the following code snippet into the file.

Ensure to paste your saved API key into the `apiKey` field instead of `demo`.

```
const { Network, Alchemy } = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ASTAR_MAINNET, 
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();
```


To run the above node script, use `cmd node index.js`, and you should see the output:

```
The latest block number is 2404244
```



### Step 8

You are now ready to start building on Astar with Alchemy!
For more requests explore API endpoints [here](https://docs.alchemy.com/reference/astar-api-endpoints). 


[Alchemy]: https://www.alchemy.com/