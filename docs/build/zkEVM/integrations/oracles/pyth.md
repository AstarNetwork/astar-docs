---
sidebar_position: 1
---

# Pyth Network

[Pyth Network]: https://pyth.network/

## Overview

The [Pyth Network] is the largest first-party financial oracle network, delivering real-time market data to over 40 blockchains securely and transparently.

The network comprises some of the world’s largest exchanges, market makers, and financial services providers publishing their proprietary price data on-chain for aggregation and distribution to smart contract applications.

## Using Pyth Network
                                                                                       
The Pyth Network introduced an innovative low-latency [pull oracle design](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand), where users are empowered to “pull” price updates on-chain when needed, enabling everyone in that blockchain environment to access that data point. 

Developers on Astar zkEVM have permissionless access to any of Pyth’s 350+ price feeds for equities, ETFs, commodities, foreign exchange pairs, and cryptocurrencies.

This [package](https://github.com/pyth-network/pyth-crosschain/tree/main/target_chains/ethereum/sdk/solidity) provides utilities for consuming prices from the Pyth Network Oracle using Solidity. Also, it contains the [Pyth Interface ABI](https://github.com/pyth-network/pyth-crosschain/blob/main/target_chains/ethereum/sdk/solidity/abis/IPyth.json) that you can use in your libraries to communicate with the Pyth contract.

It is strongly recommended to follow the consumer [best practices](https://docs.pyth.network/documentation/pythnet-price-feeds/best-practices) when consuming Pyth data. 

For more information and details, please refer to the official documentation [here](https://docs.pyth.network/documentation).

You can find more details on the various functions available to you when interacting with the Pyth smart contract in the [API Reference section](https://docs.pyth.network/evm).

## Pyth on Astar zkEVM

The Pyth Network smart contract is available at the following address: [0xA2aa501b19aff244D90cc15a4Cf739D2725B5729](https://zkatana.explorer.startale.com/address/0xA2aa501b19aff244D90cc15a4Cf739D2725B5729).

You may also refer to this [page](https://docs.pyth.network/documentation/pythnet-price-feeds/evm) to find the various Pyth contracts.

Additionally, you'll be able to find all the Pyth Price Feed IDs [here](https://pyth.network/developers/price-feed-ids). Be sure to select the correct environment as mainnet and testnet price feeds IDs differ.

## Other

The Pyth Network provides additional tools to developers like this [TradingView Integration](https://docs.pyth.network/guides/how-to-create-tradingview-charts) or the [Gelato Web3 Functions](https://docs.pyth.network/guides/how-to-schedule-price-updates-with-gelato).  

If you'd have any questions or issues, you can contact us on the following platforms: [Telegram](https://t.me/Pyth_Network), [Discord](https://discord.gg/invite/PythNetwork), [Website](https://pyth.network/contact).
