---
sidebar_position: 2
---

import Figure from "/src/components/figure"

# Gestionar el dApp staking y reclamar recompensas

Una vez que hayas hecho stake, aparecerá un nuevo panel llamado **Staking** en la [Página de Activos](https://portal.astar.network/astar/assets).

### Mi panel de staking:

Mi panel de staking es el lugar donde puedes hacer un seguimiento de tu staking y fichas bloqueadas, ver tus recompensas pendientes y realizar acciones con tus fichas y recompensas;

- **Cantidad bloqueada:** Cantidad total de fichas bloqueadas en la dirección;
  - **Desbloquear (↑):** Desbloquea tus fichas bloqueadas _(sujeto a [parámetros de desbloqueo](/docs/use/dapp-staking/for-stakers/unstaking#overview)_);
  - **Stake (↓):** Stake tus tokens bloqueados en dApp Staking;
- **Cantidad apostada**: Cantidad total de fichas que has apostado;
- **Recompensas**: Total de las recompensas básicas y bonificadas estimadas;
  - **Disponible**: Recompensas básicas estimadas obtenidas durante el **subperiodo Build\&Earn**;
  - **Bonificación:** Bonificación estimada de las recompensas obtenidas durante el **subperiodo de votación** si cumple los requisitos;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Panel_1.png').default } width="100%" />

Para reclamar sus recompensas, debe hacer clic en el **botón Reclamar** y firmar la transacción;

Si tiene muchas recompensas no reclamadas (`Eras`), es posible que tenga que hacer varias llamadas de `Reclamación` para recibir todas sus recompensas;

Todas las recompensas pendientes en una dApp deben reclamarse antes de volver a apostar.

### Mi panel de dApps:

Mi panel de dApps es donde puedes ver todas las dApps en las que has apostado y gestionar tu apuesta.

- **Bonus:** si usted es elegible para el [Bonus](/docs/use/dapp-staking/for-stakers/#bonus-staking-rewards) en este dApps;
- **Mover (→) :** puedes mover fichas apostadas entre diferentes dApps;
- **Añadir (↓) :** puedes añadir más tokens en dApp staking en la dApp deseada;
- **Desbloquear (↑) :** puede seleccionar cuántas fichas desea desbloquear de su cantidad apostada.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" />

### Panel de desbloqueo:

El panel de desbloqueo es donde puede ver el progreso del desbloqueo y la retirada.
Para la lógica de ejecución, cuando se desbloquea, no se desbloquea desde una dApp específica sino que se desbloquea como `Chunks`. El primer desbloqueo pendiente da el trozo 1, el segundo desbloqueo pendiente da el trozo 2, etc.

Después de que se haya sacado el stake y cuando pasen esas ERAs, podrá retirarse. Más información sobre [desbloqueo](/docs/use/dapp-staking/for-stakers/unstaking/).\
Los plazos de desbloqueo pueden consultarse [aquí](/docs/use/dapp-staking/for-stakers/#parameters).

- **Días restantes:** El número de días o `Eras` que tienes que esperar antes de poder retirar tus fichas;
- **Disponible para retirar:** Desbloquea tus fichas y hazlas `transferibles`;
- **Re-lock:** Bloquea tus tokens de nuevo para usarlos en dApp Staking;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="100%" />
