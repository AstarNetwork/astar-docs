---
sidebar_position: 9
---

import Figure from '/src/components/figure'

# Crear una cuenta proxy

***

Este tutorial utilizará [Polkadot.js Apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shiden.astar.network#/extrinsics) para manipular proxies.

Para crear una cuenta proxy, siga estos pasos:

1. **Vaya a la pestaña "Desarrollador":** Localice y navegue hasta la pestaña "Desarrollador" en el sitio web.

2. **Selecciona Extrínsecos:** Dentro de la pestaña Desarrollador, busca los "Extrínsecos" y selecciónalos.

3. **Seleccione la cuenta principal:** Elija de la lista la cuenta principal para la que desea crear un proxy. Utilizaremos **ALICE** como cuenta principal en este tutorial.

4. \*\*En el menú desplegable "Presentar la siguiente extrínseca", seleccione **Proxy**

5. Elige el **addProxy** extrínseco

6. Seleccione la cuenta de **delegado** para el proxy

7. **Elija el tipo de proxy:** En el menú desplegable de tipo de proxy, elija **Balances**

8. **(Opcional) Añadir un tiempo de retraso:** Si lo desea, puede tener la opción de añadir un tiempo de retraso a la transacción. Esto añade una capa adicional de seguridad al requerir que la cuenta principal revise la transacción pendiente antes de que se ejecute. Especifique el número deseado de bloques para el tiempo de retraso.

9. **Enviar la transacción:** Una vez que haya rellenado todos los datos necesarios, busque el botón para enviar la transacción. Haga clic en él para iniciar el proceso.

<Figure src={require('/docs/use/manage-wallets/img/33.png').default} width="100%" />

A continuación, se le pedirá que autorice y firme la transacción. Adelante, haga clic en **Firmar y Enviar** para crear la relación con el proxy.

<Figure src={require('/docs/use/manage-wallets/img/34.png').default} width="100%" />

Una vez que la transacción se haya enviado con éxito, recibirás notificaciones confirmando la transacción.

También puedes encontrar el evento `proxy.ProxyAdded` en los eventos emitidos recientemente dentro de la pestaña **Red** > **Explorador**.

<Figure src={require('/docs/use/manage-wallets/img/35.png').default} width="100%" />

## **Verificación de Cuenta Proxy**

Hay muchas formas de verificar si tu proxy ha sido añadido o no. La forma más fácil de hacerlo es usar la página **Cuentas**.

1. Navegue a la página de Cuentas haciendo clic en la pestaña **Cuentas** y seleccionando a continuación **Cuentas**.

2. Aquí encontrarás una **Cuenta Primaria** y haz clic en los 3 puntos que aparecen en la imagen proporcionada.

<Figure src={require('/docs/use/manage-wallets/img/36.png').default} width="100%" />

3. Seleccione la opción **Administrar proxies**.

Aquí puede ver la lista de todos los proxies que tiene su cuenta. Para este tutorial, sólo hemos añadido el proxy **Balances** en la sección anterior.

<Figure src={require('/docs/use/manage-wallets/img/37.png').default} width="100%" />

:::tip

También puede eliminar el proxy haciendo clic en el icono (X) situado junto a la cuenta proxy (en nuestro caso **BOB**). Después de hacer clic en (X), el proxy aparecerá de la lista, Haga clic en `Submit`.

Una vez que la transacción se haya enviado correctamente, podrá revisar sus proxies actuales o, si ha eliminado todos los proxies, observará que el icono de proxy ya no aparece junto a la cuenta principal.

:::

## **Ejecutando una transacción de proxy**

Para ejecutar una transacción proxy, vuelve a la página **Extrinsic** y haz lo siguiente:

## Ejecutando una transacción de proxy

Para enviar una transacción proxy, siga estos pasos:

1. **Seleccione la cuenta de representación:** Elija la cuenta de representación desde la que desea enviar la transacción utilizando el menú desplegable "Seleccionar cuenta".

2. **Someta el siguiente extrínseco:** En el menú "Someta el siguiente extrínseco", seleccione "proxy".

3. **Elija el proxy extrínseco:** Seleccione el "proxy" extrinsic.

4. **Seleccione la cuenta principal:** En el desplegable "real", seleccione **Id** y, a continuación, seleccione la **Cuenta principal** (ALICE en nuestro caso)

5. Selecciona la llamada **balances**

6. Elige la **transferencia** extrínseca

7. **Introduzca la dirección de destino:** En el campo "dest", introduzca la dirección a la que desea enviar los fondos.

8. **Introduzca el valor:** En el campo "valor", introduzca la cantidad de fondos a enviar.

9. **Haga clic en Enviar transacción:** Una vez que haya introducido todos los detalles necesarios, haga clic en "Enviar transacción" para iniciar la transacción.

<Figure src={require('/docs/use/manage-wallets/img/38.png').default} width="100%" />

¡Felicidades! Has completado todo el proceso con éxito. Ha creado una cuenta de proxy, ha revisado todas las cuentas de proxy vinculadas a su cuenta principal, realizó una transacción de proxy, e incluso eliminó una cuenta de proxy. ¡Bien hecho!
