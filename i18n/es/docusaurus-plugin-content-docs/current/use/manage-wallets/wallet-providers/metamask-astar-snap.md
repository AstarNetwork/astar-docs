---
sidebar_position: 1
---

# MetaMask Astar wallet snap

import Figure from '/src/components/figure'

<!-- markdownlint-disable MD033 -->
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    ## Introducción

    ```
    El Astar Wallet Snap extiende la funcionalidad de MetaMask, específicamente para blockchains construidas con la tecnología Substrate de Astar, impulsada por Polkadot. El Astar Wallet Snap le permite generar rápidamente una cartera Substrate con MetaMask para firmar transacciones e interactuar con aplicaciones descentralizadas (dApps) que utilizan el paquete @polkadot/extension-dapp. Puede interactuar sin problemas con todas las dApps en el ecosistema Astar a través de MetaMask, ampliando así la utilidad de MetaMask más allá de Ethereum y redes compatibles con EVM.

    ## Cómo instalar

    Sigue estos pasos para interactuar con el snap Astar Wallet
    [Portal](https://portal.astar.network/). El
    [código fuente](https://github.com/AstarNetwork/metamask-snap-astar/tree/master/packages/example)
    para la dApp de ejemplo está disponible como parte del repositorio. Esta guía asume
    que MetaMask está [instalado](https://metamask.io/download/) y correctamente
    correctamente configurada.
    ```
  </div>
  <div>
    <video width="400" controls>
      <source src={require('/docs/use/manage-wallets/wallet-providers/img/astar_snap_30s_v1.mp4').default } />
    </video>
  </div>
</div>

## Conectar al Portal

Haga clic en el botón de página web etiquetado "Astar Snap" con el logotipo de MetaMask

<Figure caption='Connect to the Portal' src={require('/docs/use/manage-wallets/wallet-providers/img/01.png').default } width="100%" />

## Revisar y aceptar avisos de software de terceros

Haga clic en la flecha para ver todo el aviso de software de terceros y, si lo aceptarlo, haga clic en el botón de MetaMask "Aviso de software de terceros" etiquetado como "Aceptar" para aceptar el aviso de software de terceros de MetaMask.

<!-- markdownlint-disable MD033 -->
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Review 3rd-Party Software Notice' src={require('/docs/use/manage-wallets/wallet-providers/img/02.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Accept 3rd-Party Software Notice' src={require('/docs/use/manage-wallets/wallet-providers/img/03.png').default } width="100%" />
  </div>
</div>

## Revisar y aceptar la solicitud de conexión

Revisa la solicitud de conexión y, si la aceptas, haz clic en el botón MetaMask "Solicitud de conexión" etiquetado como "Conectar" para aceptar la solicitud de conexión de Astar Wallet snap
de Astar Wallet.

<Figure caption='Connection Request' src={require('/docs/use/manage-wallets/wallet-providers/img/04.png').default } width="40%" />

## Revisar permisos de ajuste y comenzar la instalación

Haz clic en la flecha para ver la lista completa de permisos requeridos por el snap Astar y, si los acepta, haga clic en el botón "Instalar snap" de MetaMask
etiquetado "Instalar" para comenzar a instalar el snap de Astar Wallet.

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Review Permissions' src={require('/docs/use/manage-wallets/wallet-providers/img/05.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Begin Installation' src={require('/docs/use/manage-wallets/wallet-providers/img/06.png').default } width="100%" />
  </div>
</div>

## Confirmar permisos entrelazados y completar la instalación

Debido a que el complemento Astar Wallet tiene permiso para controlar las cuentas de la Astar y Shiden (cuyos tokens tienen un valor económico real), es necesario revisar y confirmar este elevado nivel de acceso, necesario revisar y confirmar este elevado nivel de acceso. Si aceptas
este nivel de acceso más elevado, marque las casillas y haga clic en el botón "Proceder con
Precaución" etiquetado "Confirmar" para confirmar el nivel elevado de acceso e
instalar el Snap de la wallet Astar. Haga clic en el botón "Instalación completada"
etiquetado como "OK" para continuar al ejemplo de la dApp.

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Confirm Elevated Permissions' src={require('/docs/use/manage-wallets/wallet-providers/img/08.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Installation is Complete' src={require('/docs/use/manage-wallets/wallet-providers/img/09.png').default } width="100%" />
  </div>
</div>

## Conectar la cartera Snap

La cartera Astar Snap ha sido configurada. Observe que la dirección fue derivada usando la entropía de su frase semilla MetaMask y el snapId.
La clave pública _no_ depende de la red y siempre será la misma.

<Figure caption='Connect' src={require('/docs/use/manage-wallets/wallet-providers/img/10.png').default } width="100%" />

<Figure caption='Account Details' src={require('/docs/use/manage-wallets/wallet-providers/img/13.png').default } width="100%" />

## Cómo eliminar

En MetaMask, haz clic en el icono del punto triple en la parte superior derecha de la extensión y, a continuación, en Snap, por último, haga clic en **Astar Wallet**, desplácese hasta la parte inferior y haga clic en **Remove Astar Wallet**

Esta acción no destruirá tu cuenta ni tus fondos. Pero eliminar su cuenta de MetaMask y/o semilla podría.

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Remove Astar Wallet' src={require('/docs/use/manage-wallets/wallet-providers/img/11.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Remove Snap' src={require('/docs/use/manage-wallets/wallet-providers/img/12.png').default } width="100%" />
  </div>
</div>

## Cómo restaurar

Simplemente vuelve a conectar a la [Portal](https://portal.astar.network/) y elige la Cartera Astar Snap de nuevo.
Usted obtendrá la misma dirección que antes con todos los fondos adjuntos.

## Descargo de responsabilidad

XCM no es recomendado

## Conclusión

Con esto concluye las instrucciones de instalación del monedero Astar [Portal](https://portal.astar.network/). Si tienes alguna pregunta
o crees que has encontrado un error o un error, por favor
[abre un issue](https://github.com/AstarNetwork/metamask-snap-astar/issues/new).
