---
sidebar_position: 9
---

# Client Applications

In this chapter, we will look into how we can use TypeScript to interact with the XCM pallet and construct XCM transactions. With this information, you can create your XCM dApp or bridges.

Because we need to interact with the XCM pallet via the Substrate RPC, we will use the [`polkadot/api`](https://github.com/polkadot-js/api) package throughout this chapter.

First, you need to initialize the API like you would with any Substrate application.

```js
import { ApiPromise, WsProvider } from '@polkadot/api';

const myApp = async () => {
    const provider = new WsProvider('wss://rpc.shiden.astar.network');
    const chainApi = await (new ApiPromise({ provider })).isReady;

  const paraId = await chainApi.query.parachainInfo.parachainId.toString();
 
  // Should output 2007
  console.log(paraId)
};
```

In Astar Network, we use the [Substrate Assets pallet](https://github.com/paritytech/substrate/tree/master/frame/assets) to handle the XCM multi-asset representation. Let’s try to get the list of assets from the network.

```js
 
// import the known types
import { AssetMetadata, AssetDetails } from '@polkadot/types/interfaces';

// we create a custom interface for convenience
interface ChainAsset extends AssetDetails {
    id: string;
    metadata: AssetMetadata;
}

  //...snip

  // note that this function requires the chain to implement the Assets pallet

    // note: The asset ID will have different meanings depending on the range
    // 1 ~ 2^32-1 = User-defined assets. Anyone can register this assets on chain.
    // 2^32 ~ 2^64-1 = Statemine/Statemint assets map. This is a direct map of all the assets stored in the common-goods state chain.
    // 2^64 ~ 2^128-1 = Ecosystem assets like native assets on another parachain or other valuable tokens.
    // 2^128 ~ 1 = Relaychain native token (DOT or KSM).

    const assetsListRaw = await chainApi.query.assets.asset.entries();
    const assetMetadataListRaw = await chainApi.query.assets.metadata.entries();

    const assetInfos = assetsListRaw.map((i, index) => {
        const assetId = (i[0].toHuman() as string[])[0].replaceAll(',', '');
        const assetInfo = i[1].toHuman() as any as AssetDetails;
        const metadata = assetMetadataListRaw[index][1].toHuman() as any as AssetMetadata;
        return {
            id: assetId,
            ...assetInfo,
            metadata,
        } as ChainAsset;
    });
    // convert the list into a string array of numbers without the comma and no nested entries
};
```

Running this function should give you the list of assets that are registered on the chain. This is useful when you want to create a UI that lists all possible assets and XCM-compatible assets too.

Next, let’s try executing a cross-consensus function. Parachains will have the pallet called `polkadotXcm`, while relaychains will use the pallet `xcmPallet`. Both of them will have the same function and syntax for sending XCM transactions.

For this example, we’ll send the relaychain asset to the parachain, which is what we did in the previous chapters, but here, we’ll do it in TypeScript.

Let’s first create two API instances, one for the parachain and the other for the relaychain. Although for our example, we will only call the extrinsic from the relaychain, we will initialize the parachain API instance to dynamically obtain the parachain ID.

```js
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Vec, u32 } from '@polkadot/types';

const parachainApi = async () => {
    const provider = new WsProvider('wss://rpc.shiden.astar.network');
    const chainApi = await (new ApiPromise({ provider })).isReady;

    const paraId = (await chainApi.query.parachainInfo.parachainId()).toString();

    // Should output 2007
    console.log(paraId);
    return chainApi;
};

const relaychainApi = async () => {
    const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
    const chainApi = await (new ApiPromise({ provider })).isReady;

    const parachains = ((await chainApi.query.paras.parachains()) as Vec<u32>).map((i) => i.toNumber());

    // Should output a list of parachain IDs
    console.log(parachains);
    return chainApi;
};
```

Next, we create the main function for handling the actual XCM transaction.

```js
import { Keyring } from '@polkadot/keyring';
import { decodeAddress, cryptoWaitReady } from '@polkadot/util-crypto';

const myApp = async () => {
  await cryptoWaitReady();

    const keyring = new Keyring({ type: 'sr25519' });
    // ensure that this account has some KSM
    const account = keyring.addFromUri('account seed', { name: 'Default' }, 'sr25519');

    const parachainApiInst = await parachainApi();
    const relaychainApiInst = await relaychainApi();

    const parachainId = await parachainApiInst.query.parachainInfo.parachainId.toString();
    
    // the target parachain connected to the current relaychain
    const dest = {
        V1: {
            interior: {
                X1: {
                    Parachain: parachainId,
                },
            },
            parents: 0,
        },
    };
    // the account ID within the destination parachain
    const beneficiary = {
        V1: {
            interior: {
                X1: {
                    AccountId32: {
                        network: 'Any',
                        id: decodeAddress(account.address),
                    },
                },
            },
            parents: 0,
        },
    };

  // 1 KSM
    const amountToSend = new BN(10).pow(new BN(12));
    // amount of fungible tokens to be transferred
    const assets = {
        V1: [
            {
                fun: {
                    Fungible: amountToSend,
                },
                id: {
                    Concrete: {
                        interior: 'Here',
                        parents: 0,
                    },
                },
            },
        ],
    };

    const txHash = await relaychainApiInst.tx.xcmPallet.reserveTransferAssets(dest, beneficiary, assets, 0).signAndSend(account);
};
```

The first half of the function is about loading the account that will send the KSM and initializing the API. The real magic happens in the latter half of the function.

```js
    // the target parachain connected to the current relaychain
    const dest = {
        V1: {
            interior: {
                X1: {
                    Parachain: parachainId,
                },
            },
            parents: 0,
        },
    };
    // the account ID within the destination parachain
    const beneficiary = {
        V1: {
            interior: {
                X1: {
                    AccountId32: {
                        network: 'Any',
                        id: decodeAddress(account.address),
                    },
                },
            },
            parents: 0,
        },
    };

  // 1 KSM
    const amountToSend = new BN(10).pow(new BN(12));
    // amount of fungible tokens to be transferred
    const assets = {
        V1: [
            {
                fun: {
                    Fungible: amountToSend,
                },
                id: {
                    Concrete: {
                        interior: 'Here',
                        parents: 0,
                    },
                },
            },
        ],
    };
```

As you can see, the `dest` refers to the destination or the target chain that will receive the asset identified by the parachain ID. The `beneficiary` refers to the account within the parachain that will receive the token. Finally, the `assets` parameter simply refers to the amount you wish to send. Finally, we can sign the transaction with the following function:

```js
// This can be zero
const feeAsset = 0;
const txHash = await relaychainApiInst.tx.xcmPallet.reserveTransferAssets(dest, beneficiary, assets, feeAsset).signAndSend(account);
```

Now once you finish the XCM transaction, you can list all the assets with the following script:

```js
const assetsListRaw = await parachainApiInst.query.assets.asset.entries();
const assetMetadataListRaw = await parachainApiInst.query.assets.metadata.entries();

const assetInfos = assetsListRaw.map((i, index) => {
    const assetId = (i[0].toHuman() as string[])[0].replaceAll(',', '');
    const assetInfo = i[1].toHuman() as any as AssetDetails;
    const metadata = assetMetadataListRaw[index][1].toHuman() as any as AssetMetadata;
    return {
        id: assetId,
        ...assetInfo,
        metadata,
    } as ChainAsset;
});

const assetBalance = await Promise.all(assetInfos.map(async (i) => {
    const balance = await parachainApiInst.query.assets.account(i.id, account.address);
    return {
        symbol: i.metadata.symbol.toString(),
        balance: balance.toString(),
    }
}))

console.log(assetBalance);
```

Now, you should be able to transfer the asset from the relaychain to the parachain, and check if it was successful by listing all the assets within the asset pallet that the current account holds.

Please note that the gas amount will be deduced from the transferred amount. Transferred amount should be adjusted with gas fee estimate. Please refer to [Gas Price API](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/~/changes/aJQFFWQNMjlao1SSjj4a/build/api/gas-price-api) if needed for specific use case.

You can find the full project that deals with similar functionality from [this repository](https://github.com/AstarNetwork/astar-xcm-tools).
