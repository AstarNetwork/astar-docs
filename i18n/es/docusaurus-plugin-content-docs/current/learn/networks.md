---
sidebar_position: 6
---

# Redes

## Vista general

Antes de iniciar el desarrollo, es importante conocer la familia de redes Astar y elegir la red adecuada en función de lo que quieras hacer. Actualmente, hay varias redes disponibles, incluida la red Local que funciona exclusivamente dentro de su entorno de desarrollo. Todas las redes admiten RPC de Substrate y EVM.

## Redes locales

### Nodo local

Puedes clonar el repositorio Astar y ejecutar el nodo local proporcionado, o descargar el binario precompilado y ejecutarlo, en su lugar. Ambos métodos se describen en la sección [Build](/docs/build).

### Nodo Swanky

Nodo Swanky es una blockchain basada en Substrate configurada para habilitar el módulo de contratos inteligentes `pallet-contracts`, y otras características que ayudan al desarrollo local de contratos inteligentes Wasm.
Para obtener más información sobre nodo Swanky, consulte la sección [Swanky Suite](https://docs.astar.network/docs/build/wasm/swanky-suite/).

### Zombienet

Con Zombienet los usuarios pueden descargar binarios arbitrarios de Relay Chain y parachain (o utilizar imágenes) para configurar una red local de prueba configurable. Los usuarios tendrán acceso a todas las acciones privilegiadas en la Cadena de Retransmisión y los parachains, lo que simplifica las pruebas. Para más información sobre Zombienet, consulta el capítulo [Entorno de compilación](https://docs.astar.network/docs/build/environment/zombienet-testing).

## Redes de prueba

### Shibuya

Shibuya tiene casi las mismas especificaciones de cadena que Shiden y Astar, y proporciona un entorno ideal para que los desarrolladores prueben y depuren antes de lanzar su dApp en la red principal.
Shibuya funciona como parachain de la Relay Chain de Tokio, gestionada internamente por el equipo de Astar, y apoya a Shibuya, únicamente, como paracaidista de prueba.

El símbolo del token nativo de Shibuya es SBY.

Para obtener fichas de prueba del grifo, visita el Portal Astar y conéctate a Shibuya. Si por alguna razón el grifo está vacío, ponte en contacto con el equipo Astar en Discord.

### Rocstar

Rococo es una Relay Chain de prueba utilizada por las comunidades Polkadot y Kusama. El equipo de Astar ha desplegado una parachain para ello llamada Rocstar, que se utiliza principalmente para integraciones entre cadenas con otros equipos del ecosistema. Para obtener fichas de prueba para Rocstar, por favor contacta con el equipo de Astar en Discord.

El símbolo del token nativo de Rocstar es ROC.

## Redes Principales

Astar tiene dos redes principales, como la mayoría de parachains en el ecosistema de Polkadot. Una en la Relay Chain de Kusama, y otra en la Relay chain de Polkadot.

### Shiden

Shiden es una parachain conectada a la Relay Chain de Kusama, y se utiliza para desplegar y probar nuevas versiones del tiempo de ejecución de Astar en un entorno de producción en vivo (canario). Shiden no se considera una red de pruebas, ya que SDN tiene su propio tokenomics y valor, pero se utiliza para validar y estabilizar nuevas versiones y actualizaciones de software para Astar Network.

El símbolo del token nativo de Shiden es SDN.

### Astar

A estas alturas ya habrás adivinado que la red Astar es una parachain de la Relay Chain de Polkadot.

El símbolo del token nativo de Astar es ASTR.
