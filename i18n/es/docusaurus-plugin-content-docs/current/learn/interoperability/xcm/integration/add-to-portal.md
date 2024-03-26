---
sidebar_position: 5
---

# Añadir activos al Portal Astar

Una vez que un canal está abierto entre parachains y los activos han sido registrados, los desarrolladores pueden crear un PR en el GitHub de [Astar Portal](https://github.com/AstarNetwork/astar-apps) para que se añadan sus activos. Esto es lo que necesita saber sobre la integración de los activos XCM en Astar Portal.

## Definir la información de Parachain

1. Añade el `nombre de la cadena` para el enum [Chain](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/models/XcmModels.ts#L2).
2. Añade el `parachain id` para el enum [parachainIds](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/models/XcmModels.ts#L17).
3. Añade la `metadata de la cadena` para el enum [Chain](https://github.com/AstarNetwork/astar-apps/blob/main/src/modules/xcm/index.ts#L48).

   e.g.

```
  interface XcmChain {
    name: Chain;
    parachainId: parachainIds;
    relayChain: Chain;
    subscan: string;
    // Nota: una dirección URL de imagen para el logotipo de la cadena
    img: string;
    // Nota: punto final de websocket para conectarse a la API de parachains
    endpoint: string;
    // Nota: `true` si ASTR/SDN aparece en los parachains
    isAstarNativeToken: boolean;
}

  const xcmChainObj = {
    [Chain.STATEMINT]: {
    name: Chain.STATEMINT,
    relayChain: Chain.POLKADOT,
    img: 'https://polkadot.js.org/apps/static/statemine.65437936..svg',
    parachainId: parachainIds.STATEMINT,
    endpoint: 'wss://statemint-rpc.dwellir.com',
    subscan: 'https://statemint.subscan.io',
    isAstarNativeToken: false,
  }
```

## Definir la información de Parachain

Agregue la información del activo para la variable de objeto [xcmToken](https://github.com/AstarNetwork/astar-apps/blob/main/src/modules/xcm/tokens/index.ts#L15).

e.g.

```
interface XcmTokenInformation {
  symbol: string;
  logo: string;
  originChain: string;
  isNativeToken: boolean;
  isXcmCompatible: boolean;
  // Note: ID del activo en Astar/Shiden
  assetId: string;
  // Note: ID del activo en la cadena de origen
  originAssetId: string;
  // Nota: este importe debe ser como mínimo superior al Depósito Existencial en la cadena de origen.
  minBridgeAmount: string;
}

const xcmToken = {
  [endpointKey.ASTAR]: [
    {
      symbol: 'USDT',
      isNativeToken: false,
      assetId: '4294969280',
      originAssetId: '1984',
      logo: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707',
      isXcmCompatible: true,
      originChain: Chain.STATEMINT,
      minBridgeAmount: '0.21',
    },
  ],
  [endpointKey.SHIDEN]: [
  {
      symbol: 'KAR',
      isNativeToken: true,
      assetId: '18446744073709551618',
      originAssetId: 'KAR',
      logo: 'https://assets.coingecko.com/coins/images/17172/small/karura.jpeg?1626782066',
      isXcmCompatible: true,
      originChain: Chain.KARURA,
      minBridgeAmount: '0.11',
    },
  ],
}
```

## Definir métodos para transferencias XCM y obtener saldos de activos

1. Crea una clase (Repository) que hereda de la clase [XcmRepository](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/repositories/implementations/XcmRepository.ts) y define la lógica bajo los métodos `getTransferCall` y `getTokenBalance` [(e.g.)](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/repositories/implementations/xcm/AcalaXcmRepository.ts).
2. Exportar la clase del repositorio en [/src/v2/repositories/implementations/index.ts](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/repositories/implementations/index.ts)
3. Agregue el repositorio en la variable del objeto [XcmRepositoryConfiguration](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/config/xcm/XcmRepositoryConfiguration.ts#L11).

## Requisitos para crear PR

1. Ha probado las funciones de depósito y retiro en Astar Portal.
2. Las funciones de depósito y retiro se han probado adicionalmente con el `minBridgeAmount`.
3. Ha probado el retiro de activos a cuentas que tienen 0 saldos de activos retirados (para comprobar si `minBridgeAmount` es mayor que `Existential Deposit` definido en la cadena de origen).
4. Usted ha incluido el o los enlaces de Subscan a los detalles de la transacción XCM, para cada uno de los activos que se ha registrado.
5. Y finalmente, ha implementado la aplicación bifurcada, y han enviado la URL de staging [ref](/docs/build/builder-guides/integration_toolings/deploy-astar-portal.md).
