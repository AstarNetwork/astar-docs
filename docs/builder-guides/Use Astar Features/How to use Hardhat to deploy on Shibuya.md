# How to use Hardhat to deploy on Shibuya

## TL;DR

This cookbook gives you a basic tutorial of how to use Hardhat and deploy a simple test smart contract on our Shibuya test net.

---

## What is Hardhat?

Hardhat is a development environment that helps developers in testing, compiling, deploying, and debugging dApps on the Ethereum based blockchain. It serves a crucial role in supporting coders and developers with the management of tasks, which are important for smart contract and dApp development. 

## Step1

As a first step, we set out the environment.

First, let’s create a directory we will use for this testing.

```bash
mkdir hardhat_test
cd hardhat_test
```

---

Then, let’s initialize npm environment.

```bash
npm init -y
```

After the command above, you will see something like this.

```
Wrote to /Users/suguruseo/Documents/Astar Work/hardhat/test-hardhat/hardhat_test/package.json:{
  "name": "hardhat_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Finally, we install Hardhat.

```bash
npm install hardhat
```

![1](img/1.png)

We’ll basically say yes to every subsequent questions.

After a while, you will see “project created” message.

## Step2

In this section, we will set up a private key.

```bash
touch private.json
vim private.json
```

Then, we add private key which Hardhat prepared as default.

```
{"privateKey":"0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"}
```

## Step3

Now, we need to add network settings in hardhat.config.js file like below.

```jsx
require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const { privateKey } = require('./private.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {
        url:"http://localhost:8545",
        chainId:31337,
        accounts: [privateKey],
      },
    shibuya: {
      url:"https://evm.shibuya.astar.network",
      chainId:81,
      accounts: [privateKey],
    }
  }
};
```

## Step4

Now, we can manually add Shibuya test net in MetaMask like below.

![2](img/2.png)

## Step5

Now, we need gas fee to deploy smart contract. 

For this purpose, we use our Shibuya faucet from our [discord](https://discord.gg/astarnetwork) like below.

We need to type something like below.

```jsx
/drip network: Your Shibuya Address
```

![3](img/3.png)

We can confirm we got some Shibuya token now.

![4](img/4.png)

## Step6

Finally, we deploy our smart contract by running the command below.

```bash
npx hardhat run --network shibuya scripts/sample-script.js
```

Thats’s it! We see smart contract is successfully deployed.

![5](img/5.png)

You can also confirm that the contract was deployed successfully by checking [Blackscout](https://blockscout.com/shibuya/).

![6](img/6.png)

Happy Hacking!

## Reference

Official Document for Hardhat: [https://hardhat.org/hardhat-runner/docs/getting-started#overview](https://hardhat.org/hardhat-runner/docs/getting-started#overview)

Astar Document for Hardhat: [https://docs.astar.network/docs/EVM/developer-tooling/#hardhat](https://docs.astar.network/docs/EVM/developer-tooling/#hardhat)