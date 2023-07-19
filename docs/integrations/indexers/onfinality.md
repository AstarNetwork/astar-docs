---
sidebar_position: 5
---

# OnFinality Unified NFT API

## Introduction

OnFinality's Unified NFT API will provide access to NFTs and their metadata for all popular standards across the Polkadot and Kusama ecosystems and beyond, in a single, simple request.

The highly flexible GraphQL Unified API includes Collections, NFTs, Transactions and Metadata for all ERC721 and ERC1155 NFTs on different Polkadot and Kusama networks (including Astar and Shiden).

The OnFinality NFT API will just be the first Unified API offered by OnFinality, with plans to expand to transactions, staking, and more.

## Prerequisites

OnFinality's Unified NFT API is provided as an open source project, and a publicly hosted GraphQL API that developers can start querying today

## Getting started

Paste your queries into [https://nft-beta.onfinality.io](https://nft-beta.onfinality.io) and press play.

Public GraphQL Endpoint (Beta): [nft-beta.api.onfinality.io](https://nft-beta.api.onfinality.io).

*The Beta version of our public endpoint is intended for development, experimentation, and validation purposes. It should not be used in a production environment. We will be launching the production endpoint and service in the coming weeks.*

A public rate limit is applied, contact support@onfinality.io to receive a higher rate limit.

## Troubleshooting

For optimal performance and responsible use of our shared resources, we recommend:

- ❌ Avoid using the equalToInsensitive filter, which has poor performance.
- ✅ Convert addresses to lower case and use the equalTo filter
- ✅ Use pagination, e.g. first: 10

## Learn more

The complete schema is available here [https://github.com/OnFinality-io/api-nft/blob/main/schema.graphql](https://github.com/OnFinality-io/api-nft/blob/main/schema.graphql)

Visit our official docs for  the list of supported networks/standards and latest updates to this feature! [https://documentation.onfinality.io/support/unified-nft-api](https://documentation.onfinality.io/support/unified-nft-api)

We'd also love to hear from you, contact support@onfinality.io to put in a request for more networks and standards!
