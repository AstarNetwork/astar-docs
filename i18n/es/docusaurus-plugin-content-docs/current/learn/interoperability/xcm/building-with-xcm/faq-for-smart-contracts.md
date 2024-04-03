---
sidebar_position: 10
---

# FAQ sobre contratos inteligentes

## Pregunta: No se puede utilizar `transferFrom` para XC20 (DOT, KSM...) en el contrato de Solidity

Esto era un problema cuando una cuenta tenía que tener cierta cantidad de moneda nativa para poder recibir monedas externas.
Como esto estaba causando problemas a nuestros usuarios, se cambió y ya no es un requisito; ahora se puede pagar el gas con activos externos.

Tenga en cuenta que en el caso de los activos personalizados, Astar o Shiden no los admiten como activos de pago, la cuenta (o el contrato) tiene que mantener al menos el ED en la moneda nativa para poder recibir un activo personalizado.
