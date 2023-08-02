---
sidebar_position: 2
---

# Band Protocol

[Band Protocol]: https://bandprotocol.com/

## Overview

[Band Protocol] is a cross-chain data oracle that aggregates and connects real-world data and APIs, to smart contracts.

### Why do Blockchains Require Oracles?

Blockchains are great at providing immutable storage and deterministically verifiable computations. However, they cannot access trusted real-world information available outside their networks. Band Protocol enhances smart contract functionality by granting access to reliable data, without relying on centralized authorities, or points of failure.

## Using Band Protocol

Decentralized application developers have two ways to fetch prices from Band’s oracle infrastructure. The first option, is to use Band’s smart contracts on Astar. By doing so, developers can access on-chain data updated either at regular intervals, or when price slippage is greater than a threshold amount (different for each token). Currently, **the interval is set at 10 minutes, or price slippage of 0.5%.** The second option, allows developers to use the JavaScript helper library, which relies on an API endpoint to fetch data using similar functions as those used with the smart contracts, to obtain price quotes off-chain. This can be useful if your dApp front-end needs direct access to data.

The Aggregator Contract address can be found in the following table:

### Astar

Smart Contract (Aggregator): 0xDA7a001b254CD22e46d3eAB04d937489c93174C3

### Shiden

Smart Contract (Aggregator): 0xDA7a001b254CD22e46d3eAB04d937489c93174C3

## Supported Tokens

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

## Obtain Data Using Smart Contracts

To query prices from Band's oracle through smart contracts, the contract requiring the price values should reference Band's `StdReference` contract. This contract exposes the `getReferenceData`  and `getReferenceDataBulk` functions.

`getReferenceData` takes two strings as inputs, the base and quote symbol, respectively. It then queries the `StdReference` contract for the latest rates for those two tokens, and returns a `ReferenceData` struct, shown below:

```rust
struct ReferenceData {
    uint256 rate; // base/quote exchange rate, multiplied by 1e18.
    uint256 lastUpdatedBase; // UNIX epoch of the last time when base price gets updated.
    uint256 lastUpdatedQuote; // UNIX epoch of the last time when quote price gets updated.
}
```

`getReferenceDataBulk` instead takes two lists, one of the base tokens, and one of the quotes. It then queries the price for each base/quote pair at each index, and returns an array of `ReferenceData` structs.

For example, if we call `getReferenceDataBulk` with `['BTC','BTC','ETH']` and `['USD','ETH','BNB']`, the ReferenceData array returned will contain information regarding the pairs:

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

You can find the Band Protocol official documentation [here](https://docs.bandchain.org/).
