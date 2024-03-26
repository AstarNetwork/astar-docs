---
sidebar_position: 3
---

# Multilocalización de activos

Puedes utilizar estos valores `MultiLocation` para añadir activos nativos de Astar a la lista de tokens extranjeros de una parachain, junto con otros activos minteados en nuestra cadena.

## Rococo Astar

`{ parents: 1, interior: X1(Parachain(2006)) }`

- Decimales: **18**
- Depósito existencial: **1_000_000**

## Astar

`{ parents: 1, interior: X1(Parachain(2006)) }`

- Nombre: **Astar**
- Símbolo: **ASTR**
- Decimales: **18**
- Depósito existencial: **1_000_000**

## Shiden

`{ parents: 1, interior: X1(Parachain(2007)) }`

- Nombre: **Shiden**
- Símbolo: **SDN**
- Decimales: **18**
- Depósito existencial: **1_000_000**

## Activo personalizado

`{ parents: 1, interior: X3(Parachain(2006/7), PalletInstance(36), GeneralIndex(*asset_id*) }`

- Tenga en cuenta que estos recursos pueden ser creados por cualquier usuario.
- Los metadatos de los activos (si están disponibles) pueden encontrarse en la cadena, consultando al propietario del activo o en nuestra [lista oficial de activos](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/xcm/xcm-asset-list).
