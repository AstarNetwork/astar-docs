---
sidebar_position: 3
---

# Asset MultiLocation

You can use these `MultiLocation` values to add Astar native assets to a parachains' foreign token list, along with other assets minted on our chain.

## Rococo Astar

`{ parents: 1, interior: X1(Parachain(2006)) }`

- Decimals: **18**
- Existential deposit: **1_000_000**

## Astar

`{ parents: 1, interior: X1(Parachain(2006)) }`

- Name: **Astar**
- Symbol: **ASTR**
- Decimals: **18**
- Existential deposit: **1_000_000**

## Shiden

`{ parents: 1, interior: X1(Parachain(2007)) }`

- Name: **Shiden**
- Symbol: **SDN**
- Decimals: **18**
- Existential deposit: **1_000_000**

## Custom asset

`{ parents: 1, interior: X3(Parachain(2006/7), PalletInstance(36), GeneralIndex(*asset_id*) }`

- Please note that these assets can be created by any user.
- Asset metadata (if available) can be found on-chain, by consulting the asset owner, or in our [official asset list](/docs/learn/interoperability/xcm/asset-list).
