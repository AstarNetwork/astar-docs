# dApp Staking

El staking de dApps en Astar y Shiden Network introduce un enfoque novedoso, facultando a los individuos a nominar sus tokens ASTR/SDN para apoyar dApps específicas.

Por cada bloque producido en la red, un segmento de inflación se asigna específicamente al staking de dApp. Estas recompensas se dividen entre los desarrolladores de la dApp y los stakers implicados, ofreciendo beneficios tanto a los desarrolladores como a los stakers.

A medida que una dApp gana popularidad y atrae a más stakers, los desarrolladores pueden recibir una mayor parte de las recompensas de los bloques.

Es importante destacar que el programa de apuestas de dApps es inclusivo, dando cabida a proyectos que utilizan tecnologías EVM y Wasm, junto con dApps zkEVM.

Para una exploración más detallada de dApp Staking, consulte la presentación completa en la sección [Learn](/docs/learn/dapp-staking/).

### Períodos, subperíodos y Eras:

`Eras`: Unidades de tiempo medidas en bloques. Muy breve, una división de tiempo básica en apuestas de dApp;

El **dApp staking** se divide en **Períodos** que constan de dos **Subperíodos**: **Votar** y **Build\&Earn**.

**La votación** es el subperíodo en el que los participantes pueden decidir votar por una o varias aplicaciones para apostar sus tokens y en el que los propietarios y el equipo de las aplicaciones pueden comercializar sus productos, realizar campañas y atraer a los participantes.\
Durante el subperiodo de votaciones no se generan recompensas por apostar, pero si los usuarios votan y apuestan en dApps durante este subperiodo, podrán optar a la **Recompensa de bonificación**;

:::important

Es muy importante que los propietarios de las dApps y sus equipos se organicen antes y durante el subperíodo de votación para comercializar sus productos, realizar campañas para atraer al mayor número posible de stakers y tokens durante este periodo.

:::

**Build\&Earn** es el subperíodo en el que los stakers y las dApps empiezan a ganar recompensas;
Los usuarios pueden seguir apostando tokens durante el subperíodo Build\&Earn para aumentar las recompensas que obtienen por apostar. Sin embargo, la cantidad apostada durante Build\&Earn no contribuye a la Recompensa de bonificación.

Al final de un subperíodo de **Build\&Earn**, el período actual termina. Comienza un nuevo período, y todos los tokens son `desbloqueados` de la(s) dApp(s) pero permanecen `bloqueados`. Comienza un nuevo **Subperiodo de Votación**.

Como usuario o propietario de una dApp, debe tener en cuenta los siguientes parámetros antes de utilizar dApp Staking:

### Parámetros:

|                                | Shibuya                             | Shiden Network                       | Astar Network                          |
| ------------------------------ | ----------------------------------- | ------------------------------------ | -------------------------------------- |
| Eras por período               | 28 (\~7días)     | TBD                                  | TBD                                    |
| Eras Per Voting Subperiod      | 8 (\~48horas)    | TBD                                  | TBD                                    |
| Eras Per Build\&Earn Subperiod | 20 (\~120horas)  | TBD                                  | TBD                                    |
| Blocks Per Era                 | 1800 (\~6horas)  | TBD                                  | TBD                                    |
| Período de desbloqueo          | 4 Eras (\~1 día) | 5 Eras (\~5 días) | 10 Eras (\~10 días) |
| Cantidad mínima para apostar   | 5 SBY                               | 50 SDN                               | 500 ASTR                               |

### Guías de usuario y devs

En las siguientes secciones, encontrará toda la ayuda que necesita para interactuar con dApp Staking como staker o propietario de una dApp.

También encontrará guías para dApp Staking V2 como referencia hasta la transición completa a dApp Staking v3.

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
