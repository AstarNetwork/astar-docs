import Figure from "/src/components/figure"

# Para stakers

## Vista general

¿Te gusta hacer stake? ¿O quieres apoyar tu proyecto favorito en Astar Network o Shiden Network?

Descubre [dApp Staking](/docs/learn/dapp-staking/), un mecanismo único que permite a las comunidades apoyar a sus equipos favoritos apostando por ASTR o SDN con ellos. Al apostar ASTR o SDN en una dApp, los usuarios no sólo apoyan el desarrollo de aplicaciones innovadoras, sino que también reciben recompensas por la inflación.

Puedes informarte mejor leyendo la documentación técnica sobre [dApp Staking](/docs/learn/dapp-staking/).

:::tip

Antes de leer la sección de dApp Staking para stakers, asegúrese de entender el concepto de periodos, subperiodos y eras, así como los parámetros de dApp Staking V3 explicados [aquí](/docs/use/dapp-staking/#periods-subperiods--eras).

:::

### Recompensas básicas de staking:

Las recompensas del staking de la dApp sólo se generan si los tokens se han apostado en una dApp durante al menos 1 `Era` completa y se han distribuido en la siguiente `Era` (Era+1);

:::tip

Para los stakers, si apuestan hoy, empezarán a ganar mañana (la próxima era), y las recompensas se distribuirán pasado mañana.\
Para las dApps, si entras en un tier hoy, empezarás a ganar recompensas mañana (próxima era) y las recompensas se distribuirán pasado mañana.

:::

Para los stakers, el APR es la misma para todos, independientemente de la dApp en la que apuesten;\
Para las dApps, las recompensas dependen del sistema de niveles, las dApps entran en niveles de recompensa basados en la cantidad de tokens apostados por los usuarios.

Las recompensas deben ser reclamadas antes de intentar `stake` o `unstake`.
_(Si utiliza el Portal Astar, la interfaz reclamará automáticamente las recompensas al votar)_

Si un proyecto es **no registrado** de dApp Staking, los tokens apostados en ese proyecto seguirán recibiendo **recompensas básicas** mientras los tokens permanezcan stakeados.

:::warning

No hay recompensas durante el periodo de desbloqueo cuando se desbloquea de dApp Staking;

:::

### Bonificaciones por staking:

Si un usuario apuesta en dApp(s) durante el **Subperiodo de Votación** y mantiene la misma cantidad apostada o superior en una dApp durante todo el **Subperiodo de Build\&Earn**, podrá optar a la **Recompensa Extra** por esta dApp.

:::info

**Ejemplo**

- El usuario apuesta 1500 ASTR en **dApp A** y 1000 ASTR en **dApp B** durante el subperiodo de `Votación`.
- Durante el subperiodo `Build&Earn` el usuario mueve 500 ASTR de **dApp B** a **dApp A**;
- Ahora tiene 2000 ASTR en **dApp A** y 500 ASTR en **dApp B**, por lo que aún puede optar a la "Bonificación" por **dApp A** pero ya no por **dApp B** porque los tokens apostados en **dApp** B son menores que los apostados al final del subperiodo de `Votación` (500 < 1000 ASTR).
- Para poder optar por la `Bonificación` de **dApp B**, el usuario debe apostar 500 ASTR adicionales en **dApp B** para alcanzar los 1000 ASTR.

:::

Las recompensas de bonificación para un período sólo se pueden reclamar después de que el período termine.

### Otros:

- Es necesario mantener un mínimo de 10 ASTR o 5 SDN fichas como transferibles después del staking.
- **Es necesario reclamar para recibir las recompensas. Recomendamos reclamar las recompensas una vez a la semana.**
- Al desbloquear fichas, hay un periodo de desbloqueo en Astar y en Shiden. Los plazos de desbloqueo pueden consultarse [aquí](/docs/use/dapp-staking/for-stakers/#parameters).\
  Tenga en cuenta que esto se basa en una producción perfecta de bloques de 12 segundos. En caso de retraso, su periodo de desbloqueo puede ser un poco más largo.

Si tiene alguna pregunta, consulte la [página de preguntas frecuentes](/docs/learn/dapp-staking/dapp-staking-faq/) en la sección Aprender o únase a nuestro [canal de Discord](https://discord.com/invite/astarnetwork).

### Otras páginas pueden ser de interés:

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
