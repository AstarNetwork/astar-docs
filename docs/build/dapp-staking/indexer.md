# The API and the Indexer

## Available endpoints

| Data | Endpoint |
|------|----------|
| List of dapps registed for staking | `/api/v3/{network}/dapps-staking/chaindapps` |
| TVL for a given network and period | `/api/v3/{network}/dapps-staking/tvl/{period}` |
| List of stakers per dapp with total stake | `/api/v3/shibuya/dapps-staking/stakerslist/{address}` |
| Stakers count for a given network for a dapp by period | `/api/v3/{network}/dapps-staking/stakerscount/{contractAddress}/{period}` |
| Total stakers count for a given network and period | `/api/v3/{network}/dapps-staking/stakerscount-total/{period}` |
| All reward events by type (optional) and network | `/api/v3/shibuya/dapps-staking/rewards/{period}/?transaction=BonusReward,Reward` |
| Aggregated daily rewards by staker or dapp by period |  `/api/v3/shibuya/dapps-staking/rewards-aggregated/{address}/{period}`|

## Available indexes
