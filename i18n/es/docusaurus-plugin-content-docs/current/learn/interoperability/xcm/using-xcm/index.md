# XCM

Astar Network es un centro de aplicaciones descentralizado, flexible y altamente interoperable que admite WebAssembly y contratos inteligentes EVM.
Astar suele utilizar XCM para aprovechar los activos de otras parachains. Además, XCM encuentra utilidad dentro de los contratos inteligentes para construir dApps puramente cross-chain, para su despliegue en EVM o Wasm stack, o ambos.

El caso más frecuente es el de usuarios que transfieren su **DOT** de Polkadot a **Astar**, y viceversa. La versión del ecosistema Astar de **DOT** puede utilizarse para contratos inteligentes, y las dApps pueden integrarla. Otra aplicación comúnmente observada es dentro de las dApps DeFi, donde XCM permite el comercio **DOT** sin necesidad de un puente, y ofrece intercambios de activos a través de múltiples cadenas que anteriormente habrían requerido muchos pasos, requiriendo sólo una transacción. La versión del ecosistema Astar de **DOT** puede entonces ser utilizada para contratos inteligentes, y las dApps pueden integrarla.

En esta sección, describiremos los detalles técnicos de XCM para que los desarrolladores puedan aprovecharlo en sus dApps. Tenga en cuenta que los ejemplos de Astar/Polkadot y Shiden/Kusama son intercambiables, ya que ambas redes admiten las mismas funciones.

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
