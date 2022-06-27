---
sidebar_position: 2
---

# Band Protocol

[Band Protocol]: https://bandprotocol.com/

## Overview

[Band Protocol] is a cross-chain data oracle aggregating and connecting real-world data and APIs to smart contracts.

### Why do blockchains need oracles?

Blockchains are great at providing immutable storage and deterministic verifiable computations. However, they cannot access trusted real-world information available outside their networks. Band Protocol enhances smart contract functionalities by granting access to reliable data without any central authority or points of failure.

## Use Band Protocol

Developers have two ways to fetch prices from Band’s oracle infrastructure. On one hand, they can use Band’s smart contracts on Astar. Doing so, they access data that is on-chain and is updated either at regular intervals or when price slippage is more than a target amount (different for each token). Currently, **the interval is set at 10 minutes or a price slippage of 0.5%.** The second way for devs is to use the JavaScript helper library, which uses an API endpoint to fetch the data using similar functions as those from the smart contracts, but this implementation bypasses the blockchain entirely. This can be useful if your DApp front-end needs direct access to the data.

The Aggregator Contract address can be found in the following table:

### Astar

Smart Contract (Aggregator): 0xDA7a001b254CD22e46d3eAB04d937489c93174C3

### Shiden

Smart Contract (Aggregator): 0xDA7a001b254CD22e46d3eAB04d937489c93174C3

## Supported Token

Price queries with any denomination are available as long as the base and quote symbols are supported (base/quote). For example:

- `BTC/USD`
- `BTC/ETH`
- `ETH/EUR`

We provide feeds for the following assets:

- ASTR
- ATOM
- AVAX
- BNB
- BUSD
- DAI
- DOT
- ETH
- FTM
- MATIC
- SOL
- USDC
- USDT
- WBTC

## Get Data Using Smart Contracts

To query prices from Band's oracle through smart contracts, the contract looking to use the price values should reference Band's `StdReference` contract. This contract exposes `getReferenceData`  and `getReferenceDataBulk` functions.

`getReferenceData` takes two strings as the inputs, the base and quote symbol, respectively. It then queries the `StdReference` contract for the latest rates for those two tokens and returns a `ReferenceData` struct, shown below.

```rust
struct ReferenceData {
    uint256 rate; // base/quote exchange rate, multiplied by 1e18.
    uint256 lastUpdatedBase; // UNIX epoch of the last time when base price gets updated.
    uint256 lastUpdatedQuote; // UNIX epoch of the last time when quote price gets updated.
}
```

`getReferenceDataBulk` instead takes two lists, one of the base tokens, and one of the quotes. It then proceeds to similarly queries the price for each base/quote pair at each index, and returns an array of `ReferenceData` structs.

For example, if we call `getReferenceDataBulk` with `['BTC','BTC','ETH']` and `['USD','ETH','BNB']`, the returned ReferenceData array will contain information regarding the pairs:

- `BTC/USD`
- `BTC/ETH`
- `ETH/BNB`

## Example Usage

The contract code below demonstrates a simple usage of the new `StdReference` contract and the `getReferenceData` function.

```ts
pragma solidity 0.6.11;
pragma experimental ABIEncoderV2;

interface IStdReference {
    /// A structure returned whenever someone requests for standard reference data.
    struct ReferenceData {
        uint256 rate; // base/quote exchange rate, multiplied by 1e18.
        uint256 lastUpdatedBase; // UNIX epoch of the last time when base price gets updated.
        uint256 lastUpdatedQuote; // UNIX epoch of the last time when quote price gets updated.
    }

    /// Returns the price data for the given base/quote pair. Revert if not available.
    function getReferenceData(string memory _base, string memory _quote)
        external
        view
        returns (ReferenceData memory);

    /// Similar to getReferenceData, but with multiple base/quote pairs at once.
    function getReferenceDataBulk(string[] memory _bases, string[] memory _quotes)
        external
        view
        returns (ReferenceData[] memory);
}

contract DemoOracle {
    IStdReference ref;

    uint256 public price;

    constructor(IStdReference _ref) public {
        ref = _ref;
    }

    function getPrice() external view returns (uint256){
        IStdReference.ReferenceData memory data = ref.getReferenceData("BTC","USD");
        return data.rate;
    }

    function getMultiPrices() external view returns (uint256[] memory){
        string[] memory baseSymbols = new string[](2);
        baseSymbols[0] = "WBTC";
        baseSymbols[1] = "DOT";

        string[] memory quoteSymbols = new string[](2);
        quoteSymbols[0] = "USD";
        quoteSymbols[1] = "USDT";
        IStdReference.ReferenceData[] memory data = ref.getReferenceDataBulk(baseSymbols,quoteSymbols);

        uint256[] memory prices = new uint256[](2);
        prices[0] = data[0].rate;
        prices[1] = data[1].rate;

        return prices;
    }

    function savePrice(string memory base, string memory quote) external {
        IStdReference.ReferenceData memory data = ref.getReferenceData(base,quote);
        price = data.rate;
    }
}
```

## Full Documentation

[Band Protocol Documentation](https://docs.bandchain.org/)
