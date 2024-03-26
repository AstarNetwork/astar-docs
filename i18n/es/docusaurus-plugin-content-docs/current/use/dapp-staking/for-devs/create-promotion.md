---
sidebar_position: 4
---

import Figure from '/src/components/figure'

# Crear una tarjeta de promoción en la página superior

Si tienes una campaña o un nuevo producto que te gustaría compartir en la comunidad, esto te ayudará a difundir la noticia. Creará una tarjeta que se mostrará en la parte superior de la página de dApp Staking, así como en la página de activos del Portal.

Puedes crear un RP una vez al mes, como mucho.

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Promotion_card_1.png').default} width="100%" />

# Pasos para crear un PR para la tarjeta de promoción

- Forkea nuestro repositorio [astar-apps](https://github.com/AstarNetwork/astar-apps).

- Busca un archivo [dapp_promotion.json](https://github.com/AstarNetwork/astar-apps/blob/main/src/data/dapp_promotions.json) y pon ahí los detalles de la promoción.

- añada una imagen de promoción a la carpeta [public/images/dapp_promotions](https://github.com/AstarNetwork/astar-apps/tree/main/public/images/dapp_promotions).

- Crear un PR a la rama <code>release-hotfix</code> en [astar-apps](https://github.com/AstarNetwork/astar-apps).

:::info

- **La imagen debe ser de 16:9 y el tamaño recomendado es inferior a 1MB.**
- **La descripción está limitada a 65 caracteres máximo**.
- Tu PR se fusionará después de ser revisado por el equipo de operación de dApp staking.
- La tarjeta se puede retirar en cualquier momento, por cualquier razón, a discreción del equipo de operación.
- Múltiples PRs o más de un PR dentro de un mes del mismo equipo no serán aprobados.
  :::
