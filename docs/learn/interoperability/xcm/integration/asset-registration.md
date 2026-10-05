---
sidebar_position: 2
---

# XCM Asset Registration

## Overview

This step mostly concerns the technical side of asset registration, but once we have opened channels, we should agree on which assets to bridge. The most common and expected assets are native assets. E.g. **ACA** from Acala or **GLMR** from Moonbeam.

The first step here is to create a local asset on our network which will represent the token. We will use permissioned `asset_id` (root-only). Asset metadata should reflect what’s used on the reserve parachain, e.g. asset name, symbol name, and number of decimals.

We use unit minimal balance (existential deposit) for supported foregin assets.

Regarding asset location, let’s take **ACA** token as a reference `{ "parents": 1, "interior": { "X2": [{ "Parachain": 2000 }, { "GeneralKey": [0, 128] } ]}}`.

We will need to register the mapping between our local created asset Id and that MultiLocation.

Local asset Id will be chosen from a pre-determined range, starting at **2^64** and increasing from there.

`2 ** 64 + offset`

For **offset** 0, this will produce the permissoned asset id: **18446744073709551616**.

## Request to Add XCM Asset

To add an XCM asset on Astar or Shiden you will need to create a proposal on our [forum](https://forum.astar.network/). Create your proposal in the correct category:

- Shiden Network: [https://forum.astar.network/c/shiden/proposal/10](https://forum.astar.network/c/shiden/proposal/10)
- Astar Network: [https://forum.astar.network/c/astar/proposal/20](https://forum.astar.network/c/astar/proposal/20)

We have created a template that you can use to post your proposal. You can find the template [here](https://astarnetwork.notion.site/XCM-Asset-Registration-Template-ece966dca72d43a38645b54f2fb9f674).

## Workflow

### Create Proposal

After creating your proposal, we will inform our community, and it is expected that you follow up in case there are any questions. To continue with the next step you will need to be approved by our council (governance), which will be done via poll on our forum.

### Mapping Asset

After your proposal receives approval from our council, we will map your asset into our network.
