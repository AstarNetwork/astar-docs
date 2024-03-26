---
sidebar_position: 9
---

# Aplicaciones de cliente

En este capítulo, examinaremos cómo utilizar TypeScript para interactuar con la paleta XCM y construir transacciones XCM. Con esta información, podrás crear una dApp o puente XCM.

Al interactuar con la paleta XCM a través del RPC de Substrate, haremos uso del paquete [`polkadot api`](https://github.com/polkadot-js/api) a lo largo de este capítulo.

En primer lugar, tendrás que inicializar la API como harías con cualquier otra aplicación Substrate.

```js
import { ApiPromise, WsProvider } from '@polkadot/api';

const myApp = async () => {
    const provider = new WsProvider('wss://rpc.shiden.astar.network');
    const chainApi = await (new ApiPromise({ provider })).isReady;

  const paraId = await chainApi.query.parachainInfo.parachainId.toString();
 
  // Debería salir 2007
  console.log(paraId)
};
```

En Astar Network, utilizamos la [paleta Assets de Substrate](https://github.com/paritytech/substrate/tree/master/frame/assets) para manejar la representación XCM de multi-asset. Recuperemos la lista de activos de la red.

```js
 
// importamos los tipos conocidos
import { AssetMetadata, AssetDetails } from '@polkadot/types/interfaces';

// creamos una interfaz personalizada para mayor comodidad
interface ChainAsset extends AssetDetails {
    id: string;
    metadata: AssetMetadata;
}

  //...corte rápido

  // nota: Tenga en cuenta que esta función requiere que la cadena implemente la paleta Assets

    // nota: El ID del activo tendrá diferentes significados dependiendo del rango
    // 1 ~ 2^32-1 = Activos definidos por el usuario. Cualquiera puede registrar estos activos en la cadena.
    // 2^32 ~ 2^64-1 = Mapa de activos de Statemine/Statemint. Este es un mapa directo de todos los activos almacenados en la cadena de estado de bienes comunes.
    // 2^64 ~ 2^128-1 = Activos del ecosistema como activos nativos en otro parachain u otros tokens valiosos.
    // 2^128 ~ 1 = Ficha nativa en el Relaychain (DOT o KSM).

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
    // convierte la lista en una cadena de números sin la coma y sin entradas anidadas
};
```

Al ejecutar esta función se obtendrá una lista de los activos registrados en la cadena. Esto resulta útil cuando se desea crear una interfaz de usuario (IU) que enumere todos los activos posibles, incluidos los compatibles con XCM.

A continuación, vamos a ejecutar una función de consenso cruzado. Las parachains tendrán una paleta llamada `polkadotXcm`, mientras que las Relay Chains usarán la paleta `xcmPallet`. Ambos utilizarán las mismas funciones y sintaxis para enviar transacciones XCM.

En este ejemplo, enviaremos el activo de la Relay Chain a la parachain, como hemos hecho en capítulos anteriores, pero esta vez, usaremos TypeScript.

Vamos a crear dos instancias de la API, una para la parachain y otra para la Relay Chain. Aunque para nuestro ejemplo, sólo llamaremos a la extrínseca desde la Relay Chain, e inicializaremos la instancia de la API de la parachain para obtener dinámicamente el ID de dicha parachain.

```js
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Vec, u32 } from '@polkadot/types';

const parachainApi = async () => {
    const provider = new WsProvider('wss://rpc.shiden.astar.network');
    const chainApi = await (new ApiPromise({ provider })).isReady;

    const paraId = (await chainApi.query.parachainInfo.parachainId()).toString();

    // Debería imprimir 2007
    console.log(paraId);
    return chainApi;
};

const relaychainApi = async () => {
    const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
    const chainApi = await (new ApiPromise({ provider })).isReady;

    const parachains = ((await chainApi.query.paras.parachains()) as Vec<u32>).map((i) => i.toNumber());

    // Debería mostrar una lista con los IDs de la parachain 
    console.log(parachains);
    return chainApi;
};
```

A continuación, creamos la función principal para gestionar la transacción XCM real.

```js
import { Keyring } from '@polkadot/keyring';
import { decodeAddress, cryptoWaitReady } from '@polkadot/util-crypto';

const myApp = async () => {
  await cryptoWaitReady();

    const keyring = new Keyring({ type: 'sr25519' });
    // asegúrese de que esta cuenta tiene algo de token KSM
    const account = keyring.addFromUri('account seed', { name: 'Default' }, 'sr25519');

    const parachainApiInst = await parachainApi();
    const relaychainApiInst = await relaychainApi();

    const parachainId = await parachainApiInst.query.parachainInfo.parachainId.toString();
    
    // la parachain objetivo conectada a la relaychain actual
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
    // la identificación de la cuenta dentro de la parachain de destino
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
    // cantidad de tokens fungibles a transferir
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

En resumen, la primera mitad de la función carga la cuenta que enviará los KSM e inicializa la API. La verdadera magia ocurre en la segunda mitad de la función.

```js
    // la parachain objetivo conectada a la relaychain actual
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
    // el ID de la cuenta dentro de la parachin de destino
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
    // cantidad de tokens fungibles a tranferir
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

Como puedes ver, el 'dest' se refiere al destino o cadena objetivo que recibirá el activo identificado por el ID de la parachain. El `beneficiary` se refiere a la cuenta dentro de la parachain que recibirá el token. Finalmente, el parámetro 'assets' se refiere a la cantidad que deseas enviar. Por último, podemos firmar la transacción con la siguiente función:

```js
// Esto puede ser cero
const feeAsset = 0;
const txHash = await relaychainApiInst.tx.xcmPallet.reserveTransferAssets(dest, beneficiary, assets, feeAsset).signAndSend(account);
```

Ahora, una vez que finalices la transacción XCM, puedes listar todos los activos con el siguiente script:

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

Ahora, deberías poder transferir el activo desde la Relay Chain a la parachain y verificar si fue exitoso listando todos los activos dentro del paquete de activos que posee la cuenta actual.

Ten en cuenta que la tarifa de gas se deducirá del monto transferido, por lo que debe ajustarse en consecuencia, basándose en la tarifa de gas estimada. Por favor consulta la [API del precio del gas](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/~/changes/aJQFFWQNMjlao1SSjj4a/build/api/gas-price-api) si es necesario, para casos de uso específicos.

Puedes encontrar un proyecto completo que integra funcionalidades similares en [este repositorio](https://github.com/AstarNetwork/astar-xcm-tools).
