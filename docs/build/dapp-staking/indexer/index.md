# The API and the Indexer

The API is accessible from a [Swagger User Interface](https://api.astar.network/) to test the endpoints out.

:::info
The API is available as a complimentary endpoint for developers with restricted usage and may not be appropriate for high-demand scenarios and continuous fetching of data. Users should note that excessive use could lead to instability of the free Token API. For those requiring high data availability, it is advisable to host their own API.
:::

|        |                                                                |
| ------ | -------------------------------------------------------------- |
| UI     | https://api.astar.network/                                     |
| API    | https://api.astar.network/api/v3/{network}/dapps-staking/{...} |
| Github | https://github.com/AstarNetwork/astar-token-api                |

## Available endpoints

| Data                                                           | Endpoint, start with `/api/v3/{network}/dapps-staking` |
| -------------------------------------------------------------- | ------------------------------------------------------ |
| List of dapps registed for staking                             | `/chaindapps`                                          |
| TVL for a given network and period                             | `/tvl/{period}`                                        |
| List of stakers per dapp with total stake                      | `/stakerslist/{contractAddress}`                       |
| Stakers count for a given network for a dapp by period         | `/stakerscount/{contractAddress}/{period}`             |
| Total stakers count for a given network and period             | `/stakerscount-total/{period}`                         |
| Total stakers count and amount by network and period           | `/stakers-total/{period}`                              |
| Total lockers count and amount by network and period           | `/lockers-total/{period}`                              |
| Total lockers & stakers count and amount by network and period | `/lockers-and-stakers-total/{period}`                  |
| All reward events by type (optional) and network               | `/rewards/{period}/?transaction=BonusReward,Reward`    |
| Aggregated daily rewards by staker or dapp by period           | `/rewards-aggregated/{address}/{period}`               |
| Stake amount for one participant                               | `/stake-info/{address}`                                |

## The Indexer

The indexer is accessible from a [GraphQL Explorer UI](https://squid.subsquid.io/dapps-staking-indexer-shibuya/graphql)

|        |                                                                   |
| ------ | ----------------------------------------------------------------- |
| UI     | https://squid.subsquid.io/dapps-staking-indexer-{network}/graphql |
| API    | https://squid.subsquid.io/dapps-staking-indexer-{network}/graphql |
| Github | https://github.com/AstarNetwork/dapps-staking-indexer-v3          |

### Available indexes

| Table                         | Fields                                                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| dapps                         | beneficiary, dappId, id, owner, registeredAt, registrationBlockNumber, stakersCount, state, unregisteredAt, unregistrationBlockNumber |
| dappAggregatedDailies         | timestamp, stakersCount, id, dappAddress                                                                                              |
| rewardEvents                  | amount, blockNumber, contractAddress, era, id, period, tierId, timestamp, transaction, userAddress                                    |
| rewardAggregatedDailies       | amount, beneficiary, id, timestamp                                                                                                    |
| stakes                        | amount, dappAddress, stakerAddress, blockNumber, expiredAt, expiredBlockNumber, id, timestamp                                         |
| stakers                       | amount, dappAddress, stakerAddress, id                                                                                                |
| stakersCount                  | total                                                                                                                                 |
| stakersCountAggregatedDailies | blockNumber, id, stakersCount, stakersAmount                                                                                          |
| subperiods                    | blockNumber, id, timestamp, type                                                                                                      |
| tvlAggregatedDailies          | blockNumber, id, tvl, lockersCount                                                                                                    |
| uniqueStakerAddresses         | id                                                                                                                                    |
| uniqueLockerAddresses         | id                                                                                                                                    |

## Coding Examples

To obtain data from the API, you can use a GET request like this:

```js
async function getData() {
  try {
    const response = await fetch(
      "https://api.astar.network/api/v3/shibuya/dapps-staking/chaindapps"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem fetching the data: ", error);
  }
}
```

To get data from the indexer directly in case the enpoint you want to use does not include the data you're looking for, uses a POST request like so:

```js
async function tvlDaily() {
  const response = await fetch(
    "https://squid.subsquid.io/dapps-staking-indexer-shibuya/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query MyQuery {
            tvlAggregatedDailies(orderBy: id_ASC) {
              blockNumber
              id
              tvl
            }
          }
        `,
      }),
      next: { revalidate: 10 },
    }
  );
  const { data } = await response.json();
  return data?.tvlAggregatedDailies;
}
```

## Examples on CodeSandBox

```mdx-code-block
import Iframe from 'react-iframe';

<iframe src="https://codesandbox.io/p/github/AstarNetwork/dapps-staking-v3-indexer-and-api-demo-ui/main?embed=1&file=%2Fpages%2Findex.tsx"
  width="100%"
  height="1000px"
  display="initial"
  position="relative"
  allowFullScreen
  title="gluneau/Graph-the-Astar-Staking-V3-GraphQL-Indexer-and-API/main"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>
```

You can also look into [this repo](https://github.com/AstarNetwork/dapps-staking-v3-indexer-and-api-demo-ui) and clone and run it:
