---
sidebar_position: 3
---

# DIA Oracle

[DIA]: https://www.diadata.org/

## Overview

DIA is a cross-chain, end-to-end, open-source data and oracle platform for Web3. DIA is an ecosystem for open financial data in a financial smart contract ecosystem. The goal of DIA is to bring together data analysts, data providers, and data users. In general, DIA provides a reliable and verifiable bridge between off-chain data from various sources and on-chain smart contracts that can be used to build a variety of financial dApps. DIA is setup as a hybrid system with off-chain components for storing and processing large amounts of data and on-chain components providing data sources for financial smart contracts.

## DIA's API

Show your users the most transparent data on the market with DIA's API. Whether you're building a financial service, a portfolio management tool, a new media offering, or more, DIA has the most advanced and updated data on the market for your product.

### API Access

The DIA base URL is `https://api.diadata.org/v1`. All API paths are sub-paths of this base URL. You can find specific documentation for the endpoints of our API on the [API documentation site](https://docs.diadata.org/documentation/api-1/api-endpoints).

## DIA's Oracle

Here, we provide an overview of the deployed oracle contracts on each supported chain.

DIA Development Oracle contracts are smart contracts that provide a selected range of asset prices for live testing on our Mainnet and Testnet. The contracts are upgraded and exchanged on a rolling basis and are not maintained indefinitely.

DIA Development Oracle contracts are not intended to be integrated into a dApp. DIA deploys dedicated contracts for dApps. Please request a dedicated oracle by contacting the team on their [Discord](https://discord.com/invite/zFmXtPFgQj) or the [DIA DAO Forum](https://dao.diadata.org/).

## Deployed Contracts

[Key/Value Oracle]: https://docs.diadata.org/documentation/oracle-documentation/access-the-oracle#dia-key-value-oracle-contract-v2

### Astar

**Smart Contract**: [0xd79357ebb0cd724e391f2b49a8De0E31688fEc75](https://blockscout.com/astar/address/0xd79357ebb0cd724e391f2b49a8De0E31688fEc75/contracts)

**Oracle Type**: [Key/Value Oracle]

### Shiden

**Smart Contract**: [0xCe784F99f87dBa11E0906e2fE954b08a8cc9815d](https://blockscout.com/shiden/address/0xCe784F99f87dBa11E0906e2fE954b08a8cc9815d/contracts)

**Oracle Type**: [Key/Value Oracle]

### Shibuya

**Smart Contract**: 0x1232AcD632Dd75f874E357c77295Da3f5Cd7733E

**Oracle Type**: [Key/Value Oracle]

## Price feeds

The oracle contains information about crypto assets. You can access a price quotation (see [sources](https://docs.diadata.org/documentation/methodology/digital-assets/cryptocurrency-trading-data) and [methodology](https://docs.diadata.org/documentation/methodology/digital-assets/exchangeprices)) and the current circulating supply as well as the timestamp of the last update.

1. Access the corresponding oracle smart contract (see table above).
2. Call `getValue(symbol)` with `symbol` being the asset symbol such as `BTC/USD`. You can use the "Read" section on Etherscan to execute this call.
3. The response of the call contains two values:
   1. The current asset price in USD with a fix-comma notation of eight decimals.
   2. The [UNIX timestamp](https://www.unixtimestamp.com/) of the last oracle update.

The development oracle supports price quotations for, at the very least, the following assets:

- BTC
- DIA
- USDC
