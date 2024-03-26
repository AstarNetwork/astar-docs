import Figure from "/src/components/figure"

# Para desarrolladores

## Vista general

Descubre [dApp Staking](/docs/learn/dapp-staking/), un mecanismo único que permite a las comunidades apoyar a sus equipos favoritos apostando por ASTR o SDN con ellos. Al apostar ASTR o SDN en una dApp, los usuarios no sólo apoyan el desarrollo de aplicaciones innovadoras, sino que también reciben recompensas por la inflación.

Puedes informarte mejor leyendo la documentación técnica sobre [dApp Staking](/docs/learn/dapp-staking/).

**¿Eres propietario de un producto y quieres incluir tu dApp en nuestro mecanismo de apuestas para ganar recompensas?**

Tenga en cuenta los siguientes parámetros y asegúrese de que cumple los [requisitos](/docs/use/dapp-staking/for-devs/requirements):

:::tip

Antes de leer la sección de dApp Staking para dApp owner, asegúrese de entender el concepto de periodos, subperiodos y eras, así como los parámetros de dApp Staking V3 explicados [aquí](/docs/use/dapp-staking/#periods-subperiods--eras).

:::

### Sistema de niveles y recompensas

dApp Staking introduce el concepto de un sistema de niveles para dApps. Es importante entender completamente el [mecanismo de niveles](/docs/learn/dapp-staking/dapp-staking-protocol#tier-system) antes de proceder con la aplicación dApp Staking y el registro como propietario de una dApp.

Actualmente hay **4 niveles** con un número limitado de ranuras por nivel. La capacidad de niveles para el staking de dApps se calcula al inicio de cada periodo en función del precio ASTR, tal y como se describe [aquí](/docs/learn/dapp-staking/dapp-staking-protocol#tier-system).

Las franjas de slots asignadas a cada nivel pueden consultarse en la [dApp Staking Page](https://portal.astar.network/astar/dapp-staking/discover) del Astar Portal.

Al final de cada subperíodo **Build\&Earn**, las dApps se asignan a un nivel en función del valor total apostado en ellas por los usuarios. Cada nivel tiene un **umbral** que una dApp debe alcanzar para poder acceder a él.

El umbral para el nivel 4 es fijo, pero para los demás niveles, el umbral es **dinámico** y se calcula al comienzo de cada nuevo periodo en función del número total de franjas de slots del periodo. Para obtener más información, [haga clic aquí](/docs/learn/dapp-staking/dapp-staking-protocol#tier-threshold-entry).

**Las recompensas** de las dApps también son **dinámicas** y varían de un nivel a otro. Cuanto más alto sea el nivel, mayor será el número de fichas ASTR asignadas a partir de la inflación como recompensa por ese nivel.

| Recompensas asignadas | Nivel 1 | Nivel 2 | Nivel 3 | Nivel 4 |
| --------------------- | ------- | ------- | ------- | ------- |
| Astar Network         | TBD     | TBD     | TBD     | TBD     |
| Shiden Network        | TBD     | TBD     | TBD     | TBD     |
| Shibuya Network       | TBD     | TBD     | TBD     | TBD     |

Las recompensas de un nivel se dividen entre todas las franjas horarias disponibles y se distribuyen entre las dApps que las ocupan. Esto significa que las recompensas para las dApps dentro de un nivel son las mismas para cada dApp, incluso si no todas las ranuras dentro de un nivel están ocupadas.

:::tip
You have to claim your rewards to receive them. We recommend that you claim your rewards at least once a week or, optimistically, 2 or 3 times a week.

:::

:::info

**Ejemplo:**

- El nivel 1 tiene 5 ranuras para dApps y se asignan 50.000 tokens ASTR como recompensa;
- Al final del subperíodo de votación, sólo 3 ranuras están ocupadas por dApps en el nivel 1;
- Cada una de estas 3 dApps recibirá 10.000 ASTR como recompensa;
- Los 20.000 tokens ASTR restantes no serán acuñados por la red y se considerarán quemados;

:::

If there are more dApps eligible for a tier than there is capacity, the dApps with the higher score get the advantage. dApps which missed out on a higher tier get priority for entry into the next lower tier (if there still is any).

En caso de que una dApp no alcance el umbral de entrada para cualquier nivel, aunque siga habiendo capacidad, la dApp simplemente quedará fuera de los niveles y no obtendrá ninguna recompensa.

Si tiene alguna pregunta, consulte la [página de preguntas frecuentes](/docs/learn/dapp-staking/dapp-staking-faq/) en la sección Aprender o únase a nuestro [canal de Discord](https://discord.com/invite/astarnetwork).

### Otras páginas pueden ser de interés:

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
