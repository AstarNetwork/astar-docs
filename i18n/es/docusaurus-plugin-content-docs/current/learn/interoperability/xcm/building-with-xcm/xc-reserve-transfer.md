---
sidebar_position: 7
---

# Transferir activos reservados

XCM nos permite transferir activos de una cadena a otra de varias maneras. En este capítulo examinaremos cómo utilizar las transferencias de reserva.

Supongamos que queremos importar tokens `SBY` de Shibuya como activos envueltos en Shiden, dando como resultado `wSBY`.

- La red Shibuya necesitará tener la cuenta soberana de Shiden. Esta cuenta está controlada por Shiden y representa todos los fondos que se le envían, desde la cadena remota (Shiden, desde la perspectiva de Shibuya en este ejemplo).
- La red Shiden deberá crear el activo `wSBY` y configurarlo para que actúe como activo de cadena cruzada (XC20).
- Los canales HRMP deben estar habilitados y configurados para que las parachains se comuniquen e intercambien mensajes XCM.
- Para pagar el tiempo de ejecución, `wSBY` debe configurarse como activo de pago en Shiden.

Durante la transferencia ocurrirá lo siguiente:

1. Se mueve una cantidad de `SBY` de la cuenta de origen a la cuenta soberana de Shiden en Shibuya.
2. Se envía a Shiden un mensaje XCM que contiene la instrucción `ReserveTransferAssets`.
3. La instrucción `ReserveTransferAssets` es procesada por la paleta `assets` en Shiden, y la cantidad correspondiente de `wSBY` es acuñada en Shiden.
4. Las fichas `wSBY` minteadas se depositan en la cuenta de destino.
5. Se cobra una pequeña cantidad de `wSBY` de la cuenta de destino como pago por el tiempo de ejecución

**Nota:** El ejemplo anterior es específico de la implementación de dos parachains concretas. XCM no dicta ni impone ninguna restricción sobre cómo interpretar los mensajes entrantes o cómo gestionar los activos derivados. Otras parachains pueden, o no, utilizar la paleta `assets`; la única suposición es que `assets_reserve_transfer` formará un mensaje XCM con un origen especificado por su `parachain_id`. Todo lo demás depende de la cadena remota y su lógica, y no habrá reintentos en caso de fallo.

# Precompilados EVM

Esta funcionalidad se expone a los contratos inteligentes EVM a través de precompilaciones. La interfaz se puede conseguir [aquí](https://github.com/AstarNetwork/Astar) debajo de precompilados XCM.

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

# Transfiriendo activos nativos

La actual API identifica los activos que se están transfiriendo especificando una dirección de estilo H160 (XC20). Esto nos impide enviar tokens nativos ya que no hay representación para ello. Sin embargo, hay una solución que utiliza una dirección H160 especial, acolchada con ceros `0x0000000000000000000000000000000000000000` y por convención, se interpreta como un comando para enviar el token nativo (`MultiLocation { parents: 0, interior: Here }`).

Por ejemplo, una llamada EVM como:

```
reserve_transfer:
    asset_id = [ "0x00...0" ]
    asset_amount = [ "333333333" ]
    ...
    fee_index = 0
```

Los internos de precompilación transformarán los argumentos de llamada en algo como esto:

```
assets = [{ parents: 0, interior: Here }]
asset_amounts = [ 333333333 ]
```

Los activos nativos se pueden utilizar para pagar comisiones de transacción como cualquier otro activo. En ese caso, el `fee_index` debería apuntar a la entrada `asset_id` que contiene `0x00...0`.

# Tarifas de transacción

Cada transacción debe ser pagada. Este mecanismo se implementa para prevenir las inundaciones de transacciones por desviar el uso indebido de la red, sólo aquellas fichas que tengan valor real pueden ser utilizadas para pagar los honorarios de ejecución.

Comúnmente, pagaremos por las transacciones usando el token nativo de la red, y se espera que su emisión esté controlada y no cause problemas, Sin embargo, en algunos casos puede ser necesario permitir que los usuarios paguen por las transacciones, utilizando únicamente activos extranjeros.

Para lograrlo, la cadena remota debe configurarse para permitir el pago de la ejecución de XCM, en ese activo en particular.
