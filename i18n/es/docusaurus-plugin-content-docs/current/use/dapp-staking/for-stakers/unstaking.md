---
sidebar_position: 4
---

import Figure from "/src/components/figure"

# Desvincularse de las dApps

## Vista general

**El bloqueo** es un proceso por el cual las fichas se `bloquean` temporalmente. El staking es uno de los escenarios que requieren la vinculación de tokens.\
**Desbloquear** es la acción de decirle a la red que quieres desbloquear estos tokens. Una vez transcurrido el periodo de desbloqueo, podrá retirar los tokens, que pasarán a ser `transferibles`.

Tenga en cuenta que esto se basa en una producción perfecta de bloques de 12 segundos. En caso de retraso, su periodo de desbloqueo puede ser un poco más largo.\
Los plazos de desbloqueo pueden consultarse [aquí](/docs/use/dapp-staking/for-stakers/#parameters).

:::warning

Cuando desbloquees o retires tus tokens de dApps Staking, ¡no obtendrás recompensas durante el periodo de desbloqueo!

:::

### Cómo desbloquear fichas stakeadas:

Si ha hecho staking en una de las dApps, ahora puede hacer clic en `Desbloquear` en **Mi panel de dApps** en la [Página de activos](https://portal.astar.network/astar/assets) para que sus tokens sean transferibles.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" />

1. Haz clic en el **botón Desbloquear (↑)** de la dApp de la que quieres desvincularte;

2. Seleccione la cantidad que desea **Desbloquear**, o haga clic en **Máximo** para `desbloquear` toda su apuesta.

3. Para firmar su transacción, haga clic en **Iniciar desbloqueo**.

:::tip

Si `retiras` parte de tus fichas de una dApp y tus fichas restantes están por debajo de la cantidad mínima apostada para una dApp, todas tus fichas serán retiradas de esa dApp;\
Si usted `retira` sus tokens de una dApp durante el subperiodo de Build\&Earn y sus tokens apostados en esta dApp son inferiores a sus tokens apostados al final del subperiodo de Voting para la misma dApp, ya no podrá optar a las Bonus Rewards para esa dApp;

:::

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_2.png').default } width="100%" />

Al desbloquear fichas, aparece una nueva ventana en su Panel de staking: **Desbloqueo**.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="100%" />

- **Días restantes** te da una estimación de cuántos días o `Eras` tienes que esperar antes de poder retirar tus tokens.
- Una vez finalizado el periodo de desbloqueo, deberá retirar sus fondos haciendo clic en el botón **retirar fondos**. Firma la transacción y tus tokens serán transferibles a tu monedero.

**Chunks**

Cada desbloqueo se llama Chunk. Pero, ¿qué es un chunk?

Un chunk de desbloqueo es una cantidad de ASTR que se encuentra en periodo de desbloqueo.

_**E.g.**_: Un chunk puede describirse como: _"1000 ASTR se encuentra en periodo de desbloqueo y estará disponible para su transferencia en el bloque 42000000"_.

### Cómo desbloquear fichas stakeadas:

Si tienes fichas que aún están bloqueadas pero no en staking, puedes desbloquearlas para que sean transferibles.

:::note

Estas fichas estarán siempre sujetas al periodo de desbloqueo.

:::

En el **Panel de mi staking** de la [Página de Activos](https://portal.astar.network/astar/assets), es posible que tenga fichas en **Importe bloqueado**, que son fichas que no están apostadas pero que podrían desbloquearse.

1. Para liberarlas, haga clic en **Desbloquear (↑)**, lo que desencadenará una transacción para `desbloquearlas` todas.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Panel_1.png').default } width="100%" />

2. Al final del periodo de desbloqueo, podrá retirarlos haciendo clic en el **botón de retirada**.
3. Firma la transacción y tus tokens serán transferibles a tu monedero.
