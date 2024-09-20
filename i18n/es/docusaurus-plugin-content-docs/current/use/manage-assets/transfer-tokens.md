---
sidebar_position: 8
---

# Transferir tokens

En este tutorial te guiaremos a través del proceso de envío y recepción de tokens usando el Portal.

<br />

- [Cómo transferir tokens](#how-to-transfer-tokens)
  - [Cómo crear cuentas Astar (nativas y EVM)](#how-to-create-astar-accounts-native-and-evm)
  - [Envío de ASTR/SDN a la red Astar desde exchanges centralizados](#sending-astrsdn-to-astar-network-from-centralized-exchanges)
  - [Envío de ASTR/SDN a exchanges centralizados desde la red Astar](#sending-astrsdn-to-centralized-exchanges-from-astar-network)
  - [Envío de ASTR/SDN a Astar EVM desde Astar Native (o cualquier token de la cuenta)](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)
  - [Envío de ASTR/SDN a cuentas nativas de Astar desde Astar EVM](#sending-astrsdn-to-astar-native-accounts-from-astar-evm)
  - [Transferencia Cross-chain (XCM)](#cross-chain-transfer-xcm)
  - [Transferencia de activos de cadena cruzada (XCM) a Astar Network](#transferring-cross-chain-xcm-assets-to-astar-network)
  - [Transferencia de activos entre cadenas (XCM) a otras cadenas desde Astar Network](#transferring-cross-chain-xcm-assets-to-other-chains-from-astar-network)

<br />

## Cómo crear cuentas Astar (Native y EVM)

Astar Network soporta direcciones con dos formatos diferentes:

- Una dirección nativa se utiliza para apostar e interactuar con proyectos Wasm
- Una dirección EVM se utiliza para interactuar con dApps en el Astar EVM

Si quieres crear una cuenta de Astar Native [esta página](/docs/use/manage-wallets/create-wallet) te guiará a través del proceso.

Si aún no has añadido Astar Network a MetaMask, puedes hacerlo rápida y fácilmente en nuestro [Portal](https://portal.astar.network/) eligiendo MetaMask en el menú Seleccionar Cartera, que debería aparecer automáticamente. Tras la selección, MetaMask te pedirá permiso para añadir Astar Network. Alternativamente, puedes visitar [aquí](/docs/use/evm-guides/setup-metamask) para más detalles sobre cómo añadir Astar Network a tu monedero manualmente.

<br />

## Envío de ASTR/SDN a la red Astar desde exchanges centralizados

La mayoría de los Exchanges sólo soportan tokens Astar Network (Native), excepto Gate.io que soporta la versión Astar (EVM). Necesitarás una cuenta nativa de Astar para recibir tokens ASTR, y desde allí podrás transferirlos a una cuenta Astar EVM, si así lo deseas.

:::tip

La mayoría de los exchanges centralizados sólo enumeran "Astar Network" como destino, lo que significa Astar Network (Native).

:::

:::danger

**Comprueba la red soportada, si dice Astar (EVM) entonces sólo puedes transferir tokens a cuentas Astar EVM**.

:::

1. Visita el Astar [Portal](https://portal.astar.network/).

2. Conecte la red a Astar/Shiden (Astar Network usa el token ASTR, y Shiden Network utiliza SDN).

<img width="1000" alt="network" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png" />

3. Conecta tu monedero Polkadot.js - si aún no lo has hecho por favor vuelve a [Crear cuentas Astar](/docs/use/manage-wallets/create-wallet).

<img width="1000" alt="wallet" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png" />　

4. Esta es la página de Activos para tu Cuenta Nativa Astar, donde verás tu dirección cerca de la parte superior de la página. Copia la dirección.

<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png" />

5. Visita un exchange que soporte el token ASTR. Una vez que haya obtenido algunos ASTR, podrá iniciar una retirada desde su cuenta de cambio a la dirección indicada anteriormente.

6. Una vez que el retiro se haya completado, vuelva a visitar el Portal y compruebe su saldo.

<br />

## Enviando ASTR/SDN a exchanges centralizados desde la red Astar

:::tip

- **Utiliza una cuenta Astar Native para enviar tokens a exchanges que admitan Astar Network**
- **Usa una cuenta de Astar EVM para enviar tokens a exchanges que soporten Astar EVM**
- **NO intente enviar desde EVM a la dirección de depósito de exchanges, ya que podría perder los fondos.**

:::

:::caution

Además de las instrucciones que figuran a continuación, lea atentamente también las instrucciones facilitadas por el exchange (tipo de dirección, formato y selección de red).

:::

1. Copie una dirección de depósito de un exchange al que desee hacer una transferencia.
2. Visita el [Portal] Astar (https\://portal.astar.network/) y cambia la red a Astar o Shiden (la red Astar utiliza el token ASTR y la Shiden utiliza SDN).
3. Conecta tu monedero (Nativo o EVM dependerá del exchange) - si aún no lo has hecho por favor revisa [Crear Cuentas Astar](/docs/use/manage-wallets/create-wallet).
4. Haga clic en el botón transferir. <img width="1000" alt="Native-Asset-transfer" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png"/>
5. Añada la dirección de destino del exchange y la cantidad que desea transferir. <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png" />

<br />

## Enviando ASTR/SDN a Astar EVM desde Astar Native (o cualquier ficha en la cuenta)

Como se mencionó anteriormente, la mayoría de los exchanges sólo admiten Astar Native, y tendrás que transferir tokens ASTR a Astar EVM si deseas interactuar con dApps EVM.

1. Visite el [Portal] Astar (https\://portal.astar.network/) y copie la dirección de su EVM Astar. <img width="1000" alt="account-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png" />

2. Alternativamente, abra la extensión MetaMask y copie su dirección. <img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png" />

3. Conéctate a la cuenta de Astar Native.

4. Pulse el botón de transferencia situado junto a la ficha ASTR.
   ![image](https://user-images.githubusercontent.com/37278708/210126359-b31d52c4-2e5e-4da7-a421-478439e71ba8.png)

5. Ahora estás en la página de transferencia. Añada la dirección de destino y la cantidad que desea transferir, luego pulse el botón de confirmación. <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png" />

<br />

## Enviando ASTR/SDN a cuentas nativas de Astar desde Astar EVM

Puedes seguir los siguientes pasos si deseas transferir tokens ASTR/SDN a Astar Native.

:::caution

los xcAssets (tokens XCM compatibles con las redes EVM) no son transferibles a cuentas Native, aunque en algún momento se hayan originado en una cuenta Native. Para convertir xcAssets a Astar Native, primero tendría que realizar una transferencia a través de la cadena (XCM) de vuelta a la cadena de origen, y luego otra transferencia XCM a Astar Native. Si quieres saber más, puedes seguir [los pasos aquí](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network).

:::
:::danger

\*\*Tenga en cuenta que la mayoría de los exchanges sólo admiten direcciones Astar Native, así que no utilice este método para transferir tokens a exchanges a menos que admitan específicamente Astar EVM

:::

1. Visita el [Portal] Astar (https\://portal.astar.network/) y conecta tu cuenta Astar Native para copiar la dirección que deseas utilizar. <img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png" />

2. Conéctese a la cuenta Astar EVM cambiando de cadena desde el botón de cabecera. <img width="1000" alt="Switch-to-EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png" />

3. Pulsa el botón de transferencia al lado del token que deseas enviar. <img width="1000" alt="EVM-transfer" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png" />

4. Ahora estás en la página de transferencia. Añade la dirección Astar Native de destino y el importe que deseas transferir, después pulsa el botón confirmar. **Esta transacción retirará tokens a un depósito Astar EVM.**
   ![image](https://user-images.githubusercontent.com/37278708/210047489-797cbfae-004f-4860-9681-1a2f1390e57b.png)

5. Necesitará retirar el depósito EVM antes de poder utilizar los tokens.

6. Vuelve a tu cuenta Nativa y presiona el botón Retirar. <img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png" />

7. La modal aparecerá y podrá continuar con el proceso de retiro firmando la operación. <img width="945" alt="depo-withdraw" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png" />

<br />

## Transferencia Cross-chain (XCM)

Hay algunas cosas que usted necesitará saber antes de iniciar una transferencia.

:::note

- Al transferir tokens nativos de vuelta a las cadenas de origen, recomendamos dejar una pequeña cantidad en la cuenta, para evitar la posibilidad de quedarse sin gasolina para transacciones en el futuro.

- El Saldo Mínimo se aplica a la mayoría de los tokens nativos de la red en el Ecosistema Polkadot, y el Portal Astar sólo iniciará transacciones por importes superiores al Saldo Mínimo.

:::

<br />

## Transfiriendo recursos de cadena cruzada (XCM) a la red Astar

1. Visite el Astar [Portal](https://portal.astar.network/) y conecte su Astar Native Account \*\*(Depositar en Astar EVM sólo es posible a través de Astar Native account) \*\*

2. Elija la ficha que desea depositar en Astar Network.

3. Haga clic en Transferir y mover a la página de transferencia. Seleccione la pestaña Transferencia entre cadenas. <img width="1000" alt="Native-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png" />

Polkadot.js soporta todos los parachains, por lo tanto podrás ver todos los activos de otros parachains, incluyendo DOT. Cualquier activo puede ser transferido con un solo clic.

:::caution

Astar ha fijado el saldo mínimo de DOT de Polkadot en 1,1DOT y el importe mínimo de transferencia en 1,1, por lo que los usuarios tendrán que tener al menos 2,2DOT + gas para realizar una transferencia mínima. Esto es para proteger los fondos del usuario de ser cosechados por su Depósito Existencial (ED) (más información sobre ED, por favor visite [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).)

:::

4. Si desea que los tokens se depositen en una cuenta Astar EVM, cambie el destino a Astar (EVM) e introduzca la dirección EVM.

<img width="1000" alt="Chain-select" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png" />
<img width="1000" alt="XCM-Native-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png" />

1. Introduzca la cantidad que desea enviar a Astar Network, luego pulse el botón de confirmación.

2. Encontrar un historial de transacciones XCM puede ser complicado, por lo que el Portal Astar dispone de un historial de navegación, que proporciona información sobre las transacciones que has realizado.

<img width="1000" alt="history" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png" />

<br />

## Transferencia de activos entre cadenas (XCM) a otras cadenas desde Astar Network

1. Visite el Astar [Portal](https://portal.astar.network/) y copie la dirección de su EVM Astar.

:::tip

Si desea mover activos de cadena cruzada (XCM) a cuentas Astar Native desde cuentas Astar EVM, primero tendrá que enviar tokens de vuelta a la cadena de origen e iniciar otra transferencia de cadena cruzada (XCM) de vuelta a su cuenta Astar Native.

:::

2. Elija el token que desea retirar de Astar Network a otra cadena.

3. Haga clic en Transferir y mover a la página de transferencia. Seleccione la pestaña Transferencia entre cadenas.

4. Si está en Astar EVM, introduzca la dirección de destino. Deberá utilizar la [dirección de la cadena de origen](https://docs.astar.network/docs/learn/interoperability/xcm/faq#q-where-can-i-find-other-chains-addresses). <img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png" />

5. Si está en Astar Native y desea transferir tokens a una cadena diferente dentro de la misma cuenta, no necesita introducir la dirección. De lo contrario, introduzca la dirección manualmente si desea transferir a otra cuenta. También puedes transferir tokens de otra cadena a Astar Native haciendo clic en el botón reverso. <img width="1000" alt="XCM-reverse" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png" />

<img width="1000" alt="Input-manually" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png" />

6. Introduzca la cantidad que desea transferir y pulse el botón de confirmación.
