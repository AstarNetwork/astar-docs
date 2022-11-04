---
sidebar_position: 1
---

# Defi Llama {#defillama-en-page-id}

Defi Llama provides inclusive, non-biased, and community-driven statistics for the decentralized finance industry.

Astar/ Shiden is live on Defi Llama. Defi Llama maintains homepages for the top DeFi apps under [Astar Defi](https://defillama.com/chain/Astar) and [Shiden Defi](https://defillama.com/chain/Shiden).

## How to list an Astar/Shiden DeFi project on Defi Llama

To list on Defi Llama:

1. Fork the [Adapters repo](https://github.com/DefiLlama/DefiLlama-Adapters) ("Fork" button towards the top right of the repo page).
2. Add a new folder with the same name as the project to `projects/`.
3. Write an [SDK adapter](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/integration/dapp-listing/defillama#how-to-write-an-sdk-adapter) (or a [fetch adapter](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/integration/dapp-listing/defillama#how-to-write-a-fetch-adapter) if you cant use the SDK for this project) in the new folder.
4. Make a Pull Request with the changes on your fork, to the main Defi Llama Adapters repo, with a brief explanation of what you changed.
5. Wait for someone to either comment on or merge your Pull Request. There is no need to ask for someone to check your PR as there a monitored regularly.
6. Once your PR has been merged, please give 24 hours for the front-end team to load your listing onto the UI.

## How to build an adapter

An adapter is just some code that:

1. Collects data on a protocol by calling some endpoints or making some blockchain calls
2. Computes the TVL of a protocol and returns it

### Types of adapters

Right now there are two types of adapters co-existing within the repository:

- [Fetch adapters](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/integration/dapp-listing/defillama#how-to-write-a-fetch-adapter): These calculate the TVL directly and just export a fetch method
- [SDK adapters](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/integration/dapp-listing/defillama#how-to-write-an-sdk-adapter): These use the SDK and return all the assets locked along with their balances

### Which adapter type should I develop?

Right now Defi Llama SDK only supports EVM chains, so if your project is in any of these chains you should develop an SDK-based adapter, while if your project is on another chain a fetch adapter is likely the way to go. If your project is not on an EVM chain but you are able to give us historical data, we can help support this if you message us in Discord.

## How to write an SDK adapter

### Basic adapter

Below, you can see the one AstridDAO used on Astar Network (ASTR). Let's walk through it to get a better understanding of how it works.

```js
const { sumTokens } = require('../helper/unwrapLPs')
const { getFixBalances } = require('../helper/portedTokens')

const WASTAR = "0x19574c3c8fafc875051b665ec131b7e60773d2c9"
const chain = 'astar'

const CONTRACT_ADDRESSES = {
  // Pools holding ASTR.
  ACTIVE_POOL: "0x70724b57618548eE97623146F76206033E67086e",
  DEFAULT_POOL: "0x2fE3FDf91786f75C92e8AB3B861588D3D051D83F",
};

async function tvl(ts, _block, chainBlocks ) {
  const block = chainBlocks[chain]
  const balances = {}
  const tokensAndOwners = Object.values(CONTRACT_ADDRESSES).map(owner => [WASTAR, owner])
  await sumTokens(balances, tokensAndOwners, block, chain);
  (await getFixBalances(chain))(balances)
  return balances
}

module.exports = {
  timetravel: true,
  start: 915830,
  methodology: "Total locked ASTR (in wrapped ERC-20 form) in ActivePool and DefaultPool",
  astar: {
    tvl,
  },
};
```

The adapter consists of 3 main sections. First, any dependencies we want to use. Next, an async function containing the code for calculating TVL (where the bulk of the code usually is). Finally, the module exports.

**Line 13 - Input Parameters**

1. The first param taken by the function (line 13) will be a timestamp. In your testing, this will be the current timestamp, but when we backfill chart data for your protocol, past timestamps will also be input.
2. Next is the mainnet block height corresponding to the timestamp in the first param.

**Line 15 - Initialising The Balances Object**

SDK adapters always export balance objects, which is a dictionary where all the keys are either token addresses or Coingecko token IDs. On this line, we just initialize the balance object to be empty.

If a token balance has an address key, the Defi Llama SDK will manage any raw to real amount conversion for you (so you don't need to worry about ERC20 decimals). If a token balance has a Coingecko ID key, you will need to process the decimals and use a real token amount in the balances object.

:::caution
If you export token addresses in your balances object that isn't on CoinGecko, Defi Llama won't be able to fetch prices for the tokens. You can check which addresses are supported by going to the token on CoinGecko and checking the 'Contract' field on the right (pictured above).
:::

**Line 17 - Adding Data To The Balances Object**

In the SDK we have utilities to add data to the balances dictionary. sdk.util.sumSingleBalance() takes 3 parameters:

1. The object you want to add token balances to.
2. The token key you want to add to. We will transform the token address.
3. The balance we want to add. (NB: If we were using ae CoinGecko ID in position 2, we'd need to divide collateralBalance by 10 ** `token_decimal_places` to convert the raw balance to a real balance).

**Line 22 - Module Exports**

The module exports must be constructed correctly, and use the correct keys, so that the Defi Llama UI can show your data. Nest chain TVL (and separate types of TVL like staking, pool2 etc) inside the chain key (eg '`astar`', '`shiden`').

Please also let us know:

- timetravel (bool) - if we can backfill data with your adapter. Most SDK adapters will allow this, but not all. For example, if you fetch a list of live contracts from an API before querying data on-chain, timetravel should be 'false'.
- misrepresentedTokens (bool) - if you have used token substitutions at any point in the adapter this should be 'true'.
- methodology (string) - this is a small description that will explain to Defi Llama users how the adapter works out your protocol's TVL.
- start (number) - the earliest block height the adapter will work at.

### Testing

Once you are done writing it you can verify that it returns the correct value by running the following code:

```bash
npm install
# Replace with your adapter's name
node test.js projects/astriddao/index.js 
```

If the adapter runs successfully, the console will show you a breakdown of your project's TVL in USD. If it all looks accurate, you're ready to submit.

## Submit

Just submit a PR to the [adapter repository on Github](https://github.com/DefiLlama/DefiLlama-Adapters)!

---

## How to write a fetch adapter

Fetch adapters export a function, called `fetch`, which returns a project's total TVL (in USD) as a number. The following basic adapter would just always return a TVL of $100:

```js
async function fetch() {
  return 100;
}

module.exports = {
  fetch
}
```

Fetch adapters only allow us to get the TVL at the current time, so it's impossible to fill old values on a protocol's TVL chart or recompute them, thus leading to charts that look jumpy. To solve this we introduced SDK adapters, which allow us to retrieve a protocol's TVL at any point in time.

:::caution
Fetch adapters can only be used for projects on non-EVM chains. Where possible, [SDK adapters](https://docs.llama.fi/list-your-project/how-to-write-a-fetch-adapter) are preferred to fetch adapters because on-chain calls are more transparent.
:::

Third-party APIs should be used where possible to reduce bias. If third-party APIs are not available for the data you need, proprietary APIs can be used if they're open source.

---

Examples

```js
const retry = require('async-retry')
const { GraphQLClient, gql } = require('graphql-request')

async function fetch() {
  var endpoint ='https://api.thegraph.com/subgraphs/name/balancer-labs/balancer';
  var graphQLClient = new GraphQLClient(endpoint)

  var query = gql`
  {
    balancers(first: 5) {
      totalLiquidity,
      totalSwapVolume
    }
  }
  `;
  const results = await retry(async bail => await graphQLClient.request(query))
  return parseFloat(results.balancers[0].totalLiquidity);
}

module.exports = {
  fetch
}
```

```js
const retry = require('async-retry')
const axios = require("axios");
const BigNumber = require("bignumber.js");

async function fetch() {
  let price_feed = await retry(async bail => await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'))
  let response = await retry(async bail => await axios.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xeb4c2781e4eba804ce9a9803c67d0893436bb27d&apikey=H6NGIGG7N74TUH8K2X31J1KB65HFBH2E82'))
  let tvl = new BigNumber(response.data.result).div(10 ** 8).toFixed(2);
  return (tvl * price_feed.data.bitcoin.usd);
}

module.exports = {
  fetch
}
```

```js
const retry = require('async-retry')
const axios = require("axios");
const BigNumber = require("bignumber.js");

async function fetch() {
  var price_feed = await retry(async bail => await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=thorchain&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'))

  var res = await retry(async bail => await axios.get('https://chaosnet-midgard.bepswap.com/v1/network'))
  var tvl = await new BigNumber((parseFloat(res.data.totalStaked) * 2) + parseFloat(res.data.bondMetrics.totalActiveBond) + parseFloat(res.data.bondMetrics.totalStandbyBond)).div(10 ** 8).toFixed(2);
  tvl = tvl * price_feed.data.thorchain.usd;
  return tvl;
}

module.exports = {
  fetch
}
```

## How to update a project

If you'd like to update the code used to calculate the TVL of a DeFi project already listed on DefiLlama:

1. Fork the [Adapters repo](https://github.com/DefiLlama/DefiLlama-Adapters) (button towards the top right of the repo page).
2. Make your changes to the fork (generally easiest by cloning your new fork into a desktop IDE).
3. Make a Pull Request from your fork, to the main Defi Llama Adapters repo, with a brief explanation of what you changed.
4. Wait for someone to either comment on or merge your Pull Request. There is no need to ask for someone to check your PR as there a monitored regularly.

If you'd like to update the metadata (name, logo, description etc) of a project already listed on DefiLlama:

1. Join the [DefiLlama Discord server](https://discord.gg/bQNGsqgD).
2. Message the `#listings` channel about the changes you'd like to make.
3. Wait for a response from the team

If you don't have a Discord account, you can always reach the Defi Llama team through Github or Twitter. Responses are generally quicker on Discord.

If you'd like to list or update the listing for an NFT project, also get in contact with the Defi Llama team over Discord.
