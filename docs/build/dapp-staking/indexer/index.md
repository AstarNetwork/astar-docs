# The API

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
