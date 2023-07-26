---
title: Bluez.app NFT API
sidebar_position: 6
---

# Bluez.app OpenAPI

Bluez.app is a community driven marketplace for Astar network. Bluez API provides quick and convenient access to comprehensive NFT data for developers such as transaction history, ownership details, pricing trends, and more. 

:::note
You will need to [obtain an API key](https://docs.google.com/forms/d/e/1FAIpQLSf5Fa3Tapwakj5O--peMN9woGc54gXLyOXB1aSG5ewciT0FPQ/viewform) to use the Bluez API.
:::

## How to use the Bluez.app OpenAPI

First, obtain an API key [here](https://docs.google.com/forms/d/e/1FAIpQLSf5Fa3Tapwakj5O--peMN9woGc54gXLyOXB1aSG5ewciT0FPQ/viewform). Once you have obtained your key, head over to the [playground](https://api.bluez.app/api/#/) where you'll be able to reference various queries, and try them live before using them within your specific application.

### Examples of GET queries available through this API:

/nft/v3/{apiKey}/getNFTsForOwner

/nft/v3/{apiKey}/getNFTMetadata

/nft/v3/{apiKey}/getNFTsForContract

/nft/v3/{apiKey}/getOwnersForNFT

/nft/v3/{apiKey}/getOwnersForContract

/nft/v3/{apiKey}/getNFTSales
