---
sidebar_position: 1
---

# Abrir canales HRMP

## Resumen

Antes de que dos parachains puedan comunicarse directamente, deben abrir canales entre sí. Como cada canal es unidireccional, hay que abrir dos, uno en cada dirección.

## Instrucciones técnicas

### Entendiendo los parámetros

La apertura de un canal requiere que la cuenta soberana parachain en la Relay Chain tenga saldo en el token nativo (KSM o DOT). Esto es obligatorio, de lo contrario, la apertura del canal fallará, ya que las transacciones no se ejecutarán.

La forma más sencilla de comprobar los parámetros requeridos es abriendo la Relay Chain en [Polkadot.js Apps](https://polkadot.js.org/apps/#/explorer), en Developer -> Chain State -> `configuration` -> `activeConfig`. Lo que te interesa se verá así (tomado de Polkadot):

```json
hrmpMaxParachainOutboundChannels: 30
hrmpMaxParathreadOutboundChannels: 0
hrmpSenderDeposit: 100,000,000,000
hrmpRecipientDeposit: 100,000,000,000
hrmpChannelMaxCapacity: 1,000
hrmpChannelMaxTotalSize: 102,400
hrmpMaxParachainInboundChannels: 30
hrmpMaxParathreadInboundChannels: 0
hrmpChannelMaxMessageSize: 102,400
```

Basándonos en la información anterior, podemos ver que se requieren **10 DOT** para abrir un canal o para confirmarlo. También podemos ver que hay un número máximo de canales de entrada y salida por parachain - 30 en el caso de Polkadot, en el momento de escribir esto.

Los dos parámetros que hay que especificar al abrir un canal son:

- `max_capacity` - número máximo de mensajes que pueden ser puestos en cola en el canal.
- `max_message_size` - tamaño máximo del mensaje enviado.

Podemos elegir los valores máximos al abrir el canal en consecuencia.

## Llamada codificada en Relay Chain

El primer paso consiste en preparar los datos de llamada codificados para solicitar la apertura de un canal o aceptar una solicitud de canal abierto existente.

1. Visite la aplicación polkadot.js en su navegador y seleccione Polkadot o Kusama.
2. Ve a `Developer -> Extrinsics`.
3. Encuentre hrmp bajo todos los palets disponibles y selecciónelos.
4. Selecciona la llamada `hrmpInitOpenChannel` y llena los parámetros.
   1. **recipient**: la parachain con la que quieres abrir el canal.
   2. **proposedMaxCapacity**: escoja el valor de activeConfig.
   3. **proposedMaxMessageSize**: elija el valor de activeConfig.
5. Copia y almacena los datos de llamada codificados para más tarde:
   1. e.g. `0x3c00d6070000e803000000900100`

Puede repetir exactamente los mismos pasos para obtener los datos de llamadas codificadas para hrmpAcceptOpenChannel.

## XCM a Relay Chain

La suposición aquí es que usted está usando el estándar de Polkadot `pallet-xcm`, que tiene una llamada de envío.

Utilizando una llamada **root** desde tu parachain, debes enviar un mensaje XCM a la Relay Chain, indicándole que ejecute los datos de llamada codificados que has preparado en el paso anterior.

1. Abre tu parachain en [polkadot.js app](https://polkadot.js.org/apps)
2. Click en `Developer -> Extrinsic`
3. Busque la paleta XCM en el menú desplegable (probablemente se llame `polkadotXcm` o `xcmPallet`)
4. Selecciona `enviar` como la llamada:
   1. **destination**: `V1 {XcmV1MultiLocation { parents: 1, interior: Here}}`
   2. **message**:
      1. `V2` (o última versión soportada)
      2. Ahora añada 5 instrucciones al mensaje.
   3. **WithdrawAsset**: `{Concrete {0, Here}, Fungible {1000000000000}}`:
      1. 1 DOT o 1 KSM es suficiente para ejecutar esto.
      2. Debe asegurarse de que su cuenta soberana en la Relay Chain tiene fondos suficientes.
      3. Consulte la página [Herramientas XCM](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/~/changes/AhpKoCvdYLwztMP8vCAb/xcm/xcm-integration/xcm-tools) para obtener ayuda sobre el cálculo de la cuenta soberana.
   4. **BuyExecution**: `{Concrete {0, Here}, Fungible {1000000000000}, Unlimited}`
   5. **Transact**: `{Native, 1000000000, <encoded_call_data>}`:
      1. Utilice los datos de llamadas codificados que ha preparado anteriormente.
   6. **RefundSurplus**
   7. **DepositAsset**: `{Wild {All}, 1, {parents: 0, interior: X1(Parachain(2007))}}`
5. Enviar y luego verificar la ejecución en la Relay Chain

Deberá enviar dos llamadas de este tipo tanto para aceptar la solicitud como para iniciarla (o puede preparar una llamada por lotes). Una vez aceptado un canal, estará disponible al inicio de la siguiente sesión.

## Enviar solicitud para abrir el canal HRMP

Para abrir un canal HRMP con Astar o Shiden tendrá que crear una propuesta en nuestro [forum](https://forum.astar.network/). Crea tu propuesta en la categoría correcta:

- Shiden Network: [https://forum.astar.network/c/shiden/proposal/10](https://forum.astar.network/c/shiden/proposal/10)
- Astar Network: [https://forum.astar.network/c/astar/proposal/20](https://forum.astar.network/c/astar/proposal/20)

Hemos creado una plantilla que puede utilizar para publicar su propuesta, que encontrará [aquí](https://astarnetwork.notion.site/Open-HRMP-Channel-Template-166eb1b8202d4439a8c00e4a50fe0d89).

## Flujo de trabajo

### Crear Propuesta

Después de crear su propuesta, informaremos a nuestra comunidad, y se espera que usted haga un seguimiento en caso de que la comunidad tenga preguntas. Para continuar con el siguiente paso necesitarás la aprobación de nuestro consejo (gobernanza), que se realizará a través de una encuesta en nuestro foro.

### Integración en Testnet

El primer paso es que la parachain incorpore su red de pruebas a la Relay Chain Rococo. Una vez hecho esto, debe informarnos sobre su endpoint y parachain Id.

- Intercambiar puntos finales públicos.
- Intercambio de parachain-Ids.

Abriremos canales, registraremos activos e iniciaremos transferencias de prueba.

### Abriendo un canal HRMP

Tras las pruebas en Rococo, iniciaremos el proceso de apertura del canal HRMP y, si es necesario, iniciaremos también el proceso de adición del activo XCM. Lee más sobre la incorporación de activos XCM [aquí](https://app.gitbook.com/o/-LgGrgOEDyFYjYWIb1DT/s/-M8GVK5H7hOsGnYqg-7q-872737601/xcm/xcm-integration/xcm-asset-registration).
