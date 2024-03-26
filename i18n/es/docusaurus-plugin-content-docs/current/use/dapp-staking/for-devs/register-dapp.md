---
sidebar_position: 2
---

import Figure from "/src/components/figure"

# Registrar dApp

Una vez que hayas sido aprobado por el consejo de Astar bajo el gobierno de Astar, puedes seguir los siguientes pasos:

## Step 1

Antes de poder registrar tu dApp o proyecto, asegúrate de tener:

- Una [Astar Native developer wallet](/docs/use/manage-wallets/create-wallet) con algunos tokens para cubrir la tasa de gas;
- Despliega un contrato inteligente en nuestro ecosistema y verifica el contrato en un explorador. El contrato inteligente puede estar en Astar Native (WASM) o Astar EVM. Para el explorador, puede utilizar [Subscan](https://astar.subscan.io/) para Native o [Blockscout](https://astar.blockscout.com/) para EVM.

:::info

- La primera opción es utilizar uno de tus propios contratos inteligentes y verificarlo.
- La segunda opción es sólo para aquellos que no se ocupan de los contratos inteligentes. Despliega nuestro contrato `helloworld.sol` y proporciona toda la información en la cabecera del contrato.[Contrato de plantilla](https://github.com/AstarNetwork/builders-program/blob/main/hellowold.sol).

:::

Una vez aprobada la votación, podrás compartir tu **dirección de desarrollador** y la **dirección de smart-contract verificada** en la discusión de tu aplicación dApp Staking en el foro de Astar;

La Fundación Astar incluirá sus direcciones en la lista blanca para el registro de dApp Staking y le informará de que puede continuar con el paso 2.

## Step 2

Una vez estando en la lista blanca, visita la página de dApp Staking en el [portal de Astar](https://portal.astar.network/astar/dapp-staking/discover).\
Conecta tu monedero y elige la red en la que vas a registrarte para dApp Staking _(Astar Network o Shiden Network)_;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Networks.png').default } width="90%" />

Si el monedero ha sido incluido en la lista blanca, aparecerá un banner con el botón "Regístrese ahora", como el que se muestra a continuación:

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Registration_banner.png').default} width="80%" />

Haga clic en **Regístrese ahora** y rellene el formulario con todos los datos de su proyecto:

- Nombre de tu dApp o proyecto;
- Logo (Tamaño recomendado 512x512 px);
- Dirección del contrato _(rellenada automáticamente)_;
- URL del proyecto;
- Al menos 4 imágenes de su proyecto (se recomiendan imágenes de tamaño 16:9 de menos de 1 MB);
- Información sobre los constructores (persona que contribuye al proyecto);
- Descripción del proyecto;
- Enlaces comunitarios;
- Categoría y etiquetas;

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Registration_1.png').default} width="80%" />

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Registration_2.png').default} width="80%" />

Una vez que haya rellenado todos sus datos, haga clic en el botón **Siguiente** e introduzca la descripción que aparecerá en su **Tarjeta de nuevo anuncio**;

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Promotion_card_2.png').default} width="100%" />

Por último, haga clic en **Registrar** y firme la transacción en la red;

¡Felicidades! 🎉 Tu proyecto ya está listado en dApp Staking y puedes empezar tu campaña y comunicación para atraer stakers.

:::tip

Cuando tu dApp esté desplegada, te agradeceríamos que compartieras esto con tu comunidad. Hemos creado una plantilla que puede utilizar para redactar el artículo. Puede encontrarlo [aquí](https://astarnetwork.notion.site/dApp-staking-template-Astar-Network-07d029f2d89644f48a17650522968682).

:::
