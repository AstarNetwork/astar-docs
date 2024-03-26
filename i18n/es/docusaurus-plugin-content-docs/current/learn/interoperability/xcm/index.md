# XCM

## Visión de Astar

[La visión de Astar parte 1: Interoperabilidad y dApps multicadena](https://medium.com/astar-network/the-astar-vision-part-1-interoperability-and-multi-chain-dapps-30f014087831)

[La visión de Astar parte 2: Diversidad de activos mediante dApps y contratos inteligentes de XCM](https://medium.com/astar-network/the-astar-vision-part-2-asset-diversity-through-xcm-dapps-and-smart-contracts-3a689dee5b77)

[La visión de Astar parte 3: El centro de innovación de la Web3.0](https://medium.com/astar-network/the-astar-vision-part-3-the-innovation-hub-of-web3-0-1cace547aba3)

## Información básica

XCM, el formato Cross(X)-Consensus Message format, es un protocolo de mensajería que permite la comunicación entre las redes blockchain con diferentes modelos de consenso, no sólo Polkadot Parachains. XCM soporta pases arbitrarios de mensajes, transferencia de activos y llamadas a funciones remotas, facilitando la interoperabilidad entre diferentes cadenas. Esto significa que los desarrolladores pueden usar XCM para construir no sólo dApps Parachain-nativo, sino también dApps multicadena que abarcan múltiples blockchains.

Con XCM, los desarrolladores pueden crear aplicaciones descentralizadas que ejecuten funciones en múltiples cadenas, mejorar la experiencia del usuario y crear nuevas oportunidades de cooperación e integración con otros proyectos. XCM permite el desarrollo de DEXs de cadena cruzada y otras aplicaciones que requieren comunicación a través de múltiples redes de blockchain.

Mientras que XCM es sólo un formato de mensaje soportado por la red Polkadot, ofrece beneficios significativos sobre otros sistemas de transmisión de mensajes. Por ejemplo, XCMP (a veces conocido como HRMP) es un sistema de transporte altamente escalable y protocolosal para el paso de mensajes horizontales entre parachains que soporta todos los mensajes arbitrarios. En contraste, VMP (Vertical Message Passing) implica pasar mensajes entre el Relay Chain y un parachain, donde todos los datos de mensajes existen en la cadena Relay. Esto hace que VMP sea menos escalable que XCMP.

## Referencias externas

Se anima a los lectores y desarrolladores a revisar la documentación oficial para aprender más sobre XCM y los protocolos, antes de entrar en el uso específico de XCM en Astar y Shiden Networks:

- [Aprende Cross-chain](https://wiki.polkadot.network/docs/learn-crosschain)
- Artículos sobre XCM por Gavin Wood: [part 1](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392), [part 2](https://medium.com/polkadot-network/xcm-part-ii-versioning-and-compatibility-b313fc257b83), y [part 3](https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166).
- [formato XCM](https://github.com/paritytech/xcm-format) (consulta mientras lees los artículos)
- [Sub0 - Comenzar con XCM](https://www.youtube.com/watch?v=5cgq5jOZx9g)
- [¿Cómo hacer una transferencia de cadena cruzada?](https://www.youtube.com/watch?v=5cgq5jOZx9g)

## Empezar

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
