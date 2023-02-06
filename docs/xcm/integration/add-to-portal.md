---
sidebar_position: 5
---

# Add assets to Astar Portal

Once a channel is opened between parachains and assets have been registered, developers can create a PR on [Astar Portal](https://github.com/AstarNetwork/astar-apps) Github, to have their assets added. Here’s what you need to know about the integration of the XCM assets into Astar Portal.

## Define the parachain information

1. Add the `Chain name` for the [Chain](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/models/XcmModels.ts#L2) enum.
2. Add the `parachain id` for the [parachainIds](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/models/XcmModels.ts#L17) enum.
3. Add the `chain metadata` for the [xcmChainObj](https://github.com/AstarNetwork/astar-apps/blob/main/src/modules/xcm/index.ts#L48) object variable.

   e.g.

```
  interface XcmChain {
    name: Chain;
    parachainId: parachainIds;
    relayChain: Chain;
    subscan: string;
    // Note: an image URL address for the chain logo
    img: string;
    // Note: websocket endpoint for connecting to the parachains API
    endpoint: string;
    // Note: `true` if ASTR/SDN is listed on the parachains
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

## Define the assets information

Add the asset information for the [xcmToken](https://github.com/AstarNetwork/astar-apps/blob/main/src/modules/xcm/tokens/index.ts#L15) object variable.

e.g.

```
interface XcmTokenInformation {
  symbol: string;
  logo: string;
  originChain: string;
  isNativeToken: boolean;
  isXcmCompatible: boolean;
  // Note: Asset ID on Astar/Shiden
  assetId: string;
  // Note: Asset ID on the origin chain
  originAssetId: string;
  // Note: this amount should be at lest higher than the Existential Deposit on the origin chain
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

## Define the methods for the XCM transferring and the getter for fetching asset balance

1. Create a class (Repository) that inherits from [XcmRepository](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/repositories/implementations/XcmRepository.ts) class and define the logic under `getTransferCall` and `getTokenBalance` methods [(e.g.)](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/repositories/implementations/xcm/AcalaXcmRepository.ts).
2. Export the Repository class in [/src/v2/repositories/implementations/index.ts](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/repositories/implementations/index.ts)
3. Add the Repository at [XcmRepositoryConfiguration](https://github.com/AstarNetwork/astar-apps/blob/main/src/v2/config/xcm/XcmRepositoryConfiguration.ts#L11) object variable.

## Requirements for creating a PR

1. Deposit and withdrawal transactions have each been tested on Astar Portal.
2. Deposit and withdrawal transactions have additionally been tested with the `minBridgeAmount`.
3. Developers have tested withdrawing assets to wallet accounts that have 0 balance of the assets being withdrawn (to check whether `minBridgeAmount` is higher than `Existential Deposit` defined on the origin chain).
4. Submit the Subscan link for transaction details of the XCM transfers for all assets you've registered.
5. Deploy the forked app and submit the staging URL([ref](../../builder-guides/integration_toolings/deploy-astar-portal.md)).
