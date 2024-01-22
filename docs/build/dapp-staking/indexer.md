# The API and the Indexer

The API is accessible from a [Swagger User Interface](https://api.astar.network/) to test the endpoints out.

|        |                                                                |
| ------ | -------------------------------------------------------------- |
| UI     | https://api.astar.network/                                     |
| API    | https://api.astar.network/api/v3/{network}/dapps-staking/{...} |
| Github | https://github.com/AstarNetwork/astar-token-api                |

## Available endpoints

| Data                                                   | Endpoint, start with `/api/v3/{network}/dapps-staking` |
| ------------------------------------------------------ | ------------------------------------------------------ |
| List of dapps registed for staking                     | `/chaindapps`                                          |
| TVL for a given network and period                     | `/tvl/{period}`                                        |
| List of stakers per dapp with total stake              | `/stakerslist/{address}`                               |
| Stakers count for a given network for a dapp by period | `/stakerscount/{contractAddress}/{period}`             |
| Total stakers count for a given network and period     | `/stakerscount-total/{period}`                         |
| All reward events by type (optional) and network       | `/rewards/{period}/?transaction=BonusReward,Reward`    |
| Aggregated daily rewards by staker or dapp by period   | `/rewards-aggregated/{address}/{period}`               |

## The Indexer

The indexer is accessible from a [GraphQL Explorer UI](https://squid.subsquid.io/dapps-staking-indexer-shibuya/v/v1/graphql).

|        |                                                                      |
| ------ | -------------------------------------------------------------------- |
| UI     | https://squid.subsquid.io/dapps-staking-indexer-shibuya/v/v1/graphql |
| API    | https://squid.subsquid.io/dapps-staking-indexer-shibuya/v/v1/graphql |
| Github | https://github.com/AstarNetwork/dapps-staking-indexer-v3             |

### Available indexes

| Table                         | Fields                                                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| dapps                         | beneficiary, dappId, id, owner, registeredAt, registrationBlockNumber, stakersCount, state, unregisteredAt, unregistrationBlockNumber |
| dappAggregatedDailies         | timestamp, stakersCount, id, dappAddress                                                                                              |
| rewardEvents                  | amount, blockNumber, contractAddress, era, id, period, tierId, timestamp, transaction, userAddress                                    |
| rewardAggregatedDailies       | amount, beneficiary, id, timestamp                                                                                                    |
| stakes                        | amount, dappAddress, stakerAddress, blockNumber, expiredAt, expiredBlockNumber, id, timestamp                                         |
| stakersCountAggregatedDailies | blockNumber, id, stakersCount                                                                                                         |
| subperiods                    | blockNumber, id, timestamp, type                                                                                                      |
| tvlAggregatedDailies          | blockNumber, id, tvl                                                                                                                  |
