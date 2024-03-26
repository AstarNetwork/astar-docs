---
sidebar_position: 3
---

import Figure from "/src/components/figure"

# Mover tokens en staking entre dApps

Una vez que tus tokens han sido apostados en una dApp, siempre tienes la opción de reconsiderar tus decisiones y moverlos a otra dApp.

1. Vaya al **panel de staking** en la [página de activos](https://portal.astar.network/astar/assets);
2. En **mis dApps**, haz clic en el botón **Mover (→)** de la dApp desde la que quieres mover tus tokens.

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" />

3. Seleccione la(s) dApp(s) a la(s) que desea `Mover` sus tokens e introduzca la cantidad deseada;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Page_3.png').default } width="85%" />

4. Confirme sus decisiones pulsando el **botón confirmar** y firme la transacción en la red;

Ten en cuenta que cuando mueves tokens de una dApp a otra, estás `desaprovechando` una dApp para `aprovechar` una nueva dApp, lo que por tanto tiene un impacto en tus recompensas para esas dApps:

- Si mueves tokens de una dApp y tus tokens estacados son inferiores a la cantidad de [staking mínimo](/docs/use/dapp-staking/for-stakers/#parameters) para una dApp, todos tus tokens serán `unstaked` de esa dApp;
- Si trasladas tus tokens de una dApp a otra, perderás las **recompensas de staking básico** de la `Era` actual para la dApp que trasladaste, y no ganarás recompensas en la nueva dApp hasta la siguiente `Era`;
- Durante el subperíodo Build\&Earn, si traslada sus tokens de una dApp a otra y sus tokens apostados en la dApp inicial al final del **subperíodo Build\&Earn** son inferiores a sus tokens apostados al final del **subperíodo Voting** para la misma dApp, ya no podrá optar a las **recompensas de bonificación** para esa dApp;

Normalmente, los usuarios sólo reciben recompensas por las apuestas que han estado presentes durante toda la `Era`, desde el primer bloque hasta el último. En una lógica de tiempo de ejecución, el protocolo no distribuye recompensas a un usuario que empezó a apostar en el último bloque de la `Era` en comparación con un usuario que apostó durante toda la `Era`.
