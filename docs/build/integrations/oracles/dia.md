---
sidebar_position: 3
---

# DIA

[DIA](https://www.diadata.org/) is a cross-chain, trustless oracle network delivering verifiable price feeds for Astar. DIA sources raw trade data directly from primary markets and computes it onchain, ensuring complete transparency and data integrity.

## Key features

- Complete verifiability from source to destination smart contract.
- Direct data sourcing from 100+ primary markets eliminating intermediary risk.
- Support for 20,000+ assets across all major asset classes.
- Custom oracle configuration with tailored sources and methodologies.

## Data products

- **Token Price Feeds**: Real-time market prices for assets across CEXs and DEXs.
- **Fundamental Feeds**: Fair value pricing and backing data (NAV, Proof of Reserve, and more).
- **Real-World Asset (RWA) Feeds**: Traditional financial data including Equities, FX rates,
  commodities, and ETFs.
- **Randomness**: Verifiable random number generation for gaming, lotteries, and more.

## Querying DIA price feeds

Call the `getValue(string memory key)` function on the oracle contract with the
Query Symbol (e.g., "BTC/USD"). The function returns the asset price with 8 decimal precision and the timestamp of the last update. We'll use this address
on Astar:
[`0xd79357ebb0cd724e391f2b49a8De0E31688fEc75`](https://blockscout.com/astar/address/0xd79357ebb0cd724e391f2b49a8De0E31688fEc75/contracts)

```solidity
pragma solidity ^0.8.13;
interface IDIAOracleV2 {
    function getValue(string memory) external view returns (uint128,
             uint128);
}
contract DIAOracleSample {
    /**
    * @notice The DIA oracle to read from.
    * Oracle Address: 0xd79357ebb0cd724e391f2b49a8De0E31688fEc75
    * Network: Astar Network
    */
    address constant diaOracle = 0xd79357ebb0cd724e391f2b49a8De0E31688fEc75;
    function getPrice(string memory key)
    external
    view
    returns (
        uint128 latestPrice,
        uint128 timestampOfLatestPrice
    ) {
        (latestPrice, timestampOfLatestPrice) =
                 IDIAOracleV2(diaOracle).getValue(key);
    }
}
```

View the complete integration guide for Astar [here](https://www.diadata.org/docs/guides/chain-specific-guide/astar).

## Request a custom oracle

For dapps requiring specific configurations, DIA deploys production-grade custom
oracles tailored to your requirements with configurable data sources, pricing
methodologies, update triggers, and coverage for any of 20,000+ supported
assets.

→ [Request a custom oracle](https://www.diadata.org/docs/guides/how-to-guides/request-a-custom-oracle)

## Resources

- Developer support: [Discord](https://discord.com/invite/ZvGjVY5uvs) |
  [Telegram](https://t.me/diadata_org)
- [Astar integration guide](https://www.diadata.org/docs/guides/chain-specific-guide/astar)
- [DIA documentation](https://www.diadata.org/docs)
