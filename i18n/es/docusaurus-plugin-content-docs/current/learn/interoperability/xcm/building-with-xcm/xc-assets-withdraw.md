---
sidebar_position: 8
---

# Retirar activos

En el ecosistema de Polkadot hay dos formas de transferir activos entre cadenas remotas: teletransporte y transferencia de reservas. El teletransporte consiste esencialmente en quemar un activo por un lado y acuñarlo por el otro, de modo que el saldo total antes y después del teletransporte siga siendo el mismo.

La segunda forma de transferir activos utiliza tokens envueltos, respaldados por activos en la cadena de origen. Los activos que se van a transferir se bloquean en la cadena de origen y se crean versiones 1:1 en la de destino. Dependiendo de la lógica de negocio, la cadena de origen que aún posee los activos, puede querer acuñar algunos derivados para reflejar esa propiedad. De este modo, los activos originales no abandonan realmente la cadena, pero su propiedad pasa a ser transferible.

Supongamos que queremos importar tokens `SBY` de Shibuya como activos envueltos en Shiden, dando como resultado `wSBY`.

- La red Shibuya necesitará tener la cuenta soberana de Shiden. Esta cuenta está controlada por Shiden y representa todos los fondos que se le envían, desde la cadena remota (Shiden, desde la perspectiva de Shibuya en este ejemplo).
- La red Shiden deberá crear el activo `wSBY` y configurarlo para que actúe como activo de cadena cruzada (XC20).
- Los canales HRMP deben estar habilitados y configurados para que las parachains se comuniquen e intercambien mensajes XCM.
- Para pagar el tiempo de ejecución, `wSBY` debe configurarse como activo de pago en Shiden.

Durante la transferencia ocurrirá lo siguiente:

1. Se mueve una cantidad de `SBY` de la cuenta de origen a la cuenta soberana de Shiden en Shibuya.
2. Se envía a Shiden un mensaje XCM que contiene la instrucción `ReserveTransferAssets`.
3. La instrucción `ReserveTransferAssets` es procesada por la paleta `assets` en Shiden, y la cantidad correspondiente de `wSBY` es acuñada en Shiden.
4. Las fichas `wSBY` acuñadas se depositan en la cuenta de destino.
5. Se deduce una pequeña cantidad de `wSBY` de la cuenta de destino como pago por el tiempo de ejecución

**Nota:** El ejemplo anterior es específico de la implementación de dos parachains concretas. XCM no dicta ni impone ninguna restricción sobre cómo interpretar los mensajes entrantes o cómo gestionar los activos derivados. Otras parachains pueden, o no, utilizar la paleta `assets`; la única suposición es que `assets_reserve_transfer` formará un mensaje XCM con un origen especificado por su `parachain_id`. Todo lo demás depende de la cadena remota y su lógica, y no habrá reintentos en caso de fallo.

# Precompilados EVM

Esta funcionalidad se expone a los contratos inteligentes EVM a través de precompilaciones. La interfaz se puede conseguir [aquí](https://github.com/AstarNetwork/Astar) bajo los precompilados XCM.

```js
    function assets_reserve_transfer(
        address[] calldata asset_id,
        uint256[] calldata asset_amount,
        bytes32   recipient_account_id,
        bool      is_relay,
        uint256   parachain_id,
        uint256   fee_index
    ) external payable returns (bool);
```

- `asset_id` - Una lista de activos a transferir; para transferir activos nativos, véase la siguiente sección.
- `asset_amount` - El monto correspondiente de activos.
- `recipient_account_id` - El account id del destinatario en la cadena de destino (o en una Relay Chain).
- `is_relay` Es verdadero si la cuenta de destino está en la Relay Chain.
- `parachain_id` - El id de la parachain de destino.
- `fee_index` - Qué activo de `asset_id` se utiliza para pagar el gas de XCM.

**Nota:** existe otra versión de `assets_reserve_transfer` precompilada que acepta `address` en lugar de `bytes32` para el `recipient_account_id`.

# Detalles de implementación

Astar usa un pallet XCM personalizado que fue ampliado por `reserve_withdraw_assets`.
