---
sidebar_position: 7
---

# Arquitectura de Astar

## Vista general

Antes de que empieces tu viaje para convertirte en un hacker de la red Astar, será beneficioso saber qué es Polkadot y su relación con Astar. Si ya estás construyendo en Astar no necesitarás repasar las secciones que cubren Substrate y cómo crear un Runtime, pero te será útil para entender el entorno, la terminología y cómo aprovechar esta red interconectada de blockchains, que está justo a tu alcance.

Polkadot es un entorno multicadena que permite a blockchains especializadas (llamadas Parachains) comunicarse entre sí en un entorno seguro y sin confianza.

Astar es una blockchain conectada a la Polkadot Relay Chain, especializada para:

- Ejecución de todo tipo de contratos inteligentes.
- Proporcionar un entorno híbrido que soporte contratos inteligentes EVM + Wasm con interoperabilidad.
- Incentivar la innovación del ecosistema y proporcionar ingresos básicos a los desarrolladores de dApps.
- Agregación sin fisuras de características o activos de parachains en el ecosistema.

## Conceptos Básicos de Blockchain

Una cadena de bloques es un libro de contabilidad descentralizado que registra información en una secuencia de bloques. La información contenida en un bloque es un conjunto ordenado de instrucciones que pueden dar lugar o no a un cambio de estado.

En una red blockchain, los ordenadores individuales -llamados nodos- se comunican entre sí para formar una red descentralizada entre iguales (P2P). No existe una autoridad central que controle la red y, normalmente, cada nodo que participa en la producción de bloques almacena una copia de los bloques que componen la cadena canónica.

En la mayoría de los casos, los usuarios interactúan con una cadena de bloques enviando una solicitud que puede dar lugar a un cambio de estado, por ejemplo, una solicitud para cambiar el propietario de un archivo o para transferir fondos de una cuenta a otra. Estas solicitudes de transacciones se difunden a otros nodos de la red y un autor de bloque las ensambla en un bloque. Para garantizar la seguridad de los datos en la cadena y el progreso continuo de la misma, los nodos utilizan alguna forma de consenso para acordar el estado de los datos en cada bloque y el orden de las transacciones ejecutadas. [Leer más...](https://docs.substrate.io/fundamentals/blockchain-basics/)

## Qué es Polkadot

Para empezar, veamos dos vídeos cortos que explican muy bien algunos conceptos básicos de Polkadot. En primer lugar, Bill Laboon, Director de Educación y Apoyo de la Fundación Web3, explica los fundamentos de Polkadot.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/29Ty-VTDnh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Ok, no puedes aprender todo en un minuto. Pero, ¿en 5 minutos? Echa un vistazo a este excelente video de DeFi Teller, explicando cómo funciona Polkadot.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/BQ60bTU1bPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Cómo funciona la Relay Chain

La red Polkadot utiliza un modelo de fragmentación en el que las fragmentaciones, denominadas "parachains", permiten procesar las transacciones en paralelo en lugar de secuencialmente. Cada parachain de la red tiene una función de transición de estado única. Polkadot es una Relay Chain que actúa como cadena principal del sistema.

Las parachains construyen y proponen bloques a los validadores de la cadena de retransmisión, donde los bloques se someten a rigurosas comprobaciones de disponibilidad y validez antes de añadirse a la cadena finalizada. Dado que la Cadena de Retransmisión proporciona las garantías de seguridad, los recopiladores -nodos completos de estas parachains- no tienen ninguna responsabilidad en materia de seguridad, por lo que no necesitan un sistema de incentivos sólido. Así es como toda la red se mantiene al día de las numerosas transacciones que tienen lugar.

## Substrate

Basado en el diseño de Polkadot, siempre que la lógica de una cadena pueda compilar a Wasm y se adhiera a la API de la Relay Chain, entonces puede conectarse a la red Polkadot como una parachain.
Sin embargo, la mayoría de las parachains actuales se construyen utilizando [Substrate](https://substrate.io/) porque las cadenas basadas en Substrate son fáciles de integrar en Polkadot o Kusama para convertirse en una parachain. Esencialmente, Substrate es el SDK que se puede utilizar para construir parachains y Polkadot es el medio de asegurar las cadenas y permitir que se comuniquen entre sí.

Astar Network está construido con Substrate y hereda muchas características de Substrate, como las cuentas.

A alto nivel, un nodo Substrate proporciona un entorno en capas con dos elementos principales:

1. Nodo externo que gestiona la actividad de la red, como el descubrimiento de pares, la gestión de solicitudes de transacciones, el logro de consenso con los pares y la respuesta a las llamadas RPC.
2. Un tiempo de ejecución que contiene toda la lógica empresarial para ejecutar la función de transición de estado de la cadena de bloques.
   Lee más sobre [arquitectura](https://docs.substrate.io/fundamentals/architecture/).

### FRAME

FRAME es el acrónimo de Framework for Runtime Aggregation of Modularized Entities, que engloba un importante número de módulos y bibliotecas de apoyo que simplifican el desarrollo en tiempo de ejecución. En Substrate, estos módulos (denominados paletas) ofrecen una lógica empresarial personalizable para diferentes casos de uso y funciones que es posible que desee incluir en su tiempo de ejecución. Por ejemplo, hay paletas que proporcionan un marco de lógica empresarial para las apuestas, el consenso, la gobernanza y otras actividades comunes.
Lee más sobre [desarrollo del runtime](https://docs.substrate.io/fundamentals/runtime-development/)

## Aplicaciones que funcionan en una blockchain

Las aplicaciones que se ejecutan en una cadena de bloques, a menudo denominadas aplicaciones descentralizadas o dApps, suelen ser aplicaciones web escritas utilizando marcos frontales, pero impulsadas por contratos inteligentes en el backend, para afectar al estado de la cadena de bloques.

Un **contrato inteligente** es un programa que se ejecuta en una blockchain y ejecuta transacciones en nombre de los usuarios bajo condiciones específicas. Los desarrolladores pueden redactar contratos inteligentes para garantizar que los resultados de las transacciones ejecutadas mediante programación queden registrados y no puedan manipularse. Sin embargo, los contratos inteligentes operan en un entorno aislado, en el que los desarrolladores no tienen acceso a la funcionalidad subyacente de la cadena de bloques, como el consenso, el almacenamiento o las capas de transacciones, sino que se rigen por las normas y restricciones fijas de la cadena. Los desarrolladores de contratos inteligentes suelen aceptar estas limitaciones como una compensación que acorta el ciclo de vida del desarrollo, al evitar tener que tomar decisiones de diseño fundamentales.

## ¿Dónde ejecutar contratos inteligentes?

El Polkadot Relay Chain no soporta contratos inteligentes. Los contratos inteligentes requieren un entorno de Máquina Virtual (VM) donde puedan ejecutarse los contratos, y la plataforma más conocida y ampliamente soportada es la Máquina Virtual Ethereum (EVM). El Substrate FRAME contiene módulos que soportan la ejecución de contratos inteligentes Wasm, así como EVM.

### Máquina virtual de Ethereum (EVM)

La máquina virtual Ethereum (EVM) es un ordenador virtual con componentes que permiten a los participantes en la red Ethereum almacenar datos y acordar el estado de los mismos. En una cadena de bloques basada en Substrate, las principales responsabilidades del EVM se implementan en la paleta EVM, que se encarga de ejecutar el código de bytes del contrato de Ethereum escrito en un lenguaje de alto nivel como Solidity. Astar EVM proporciona una plataforma totalmente compatible con la Máquina Virtual Ethereum, de la que puedes aprender más en el [capítulo EVM](/docs/build/evm).

### Máquina virtual de Substrate para contratos Wasm

Substrate también incluye un módulo para contratos inteligentes, llamado `pallet-contracts`. Si se desarrolla una parachain sobre Substrate se puede añadir fácilmente funcionalidad de contrato inteligente incluyendo esta paleta. Astar soporta este enfoque Polkadot Native para contratos inteligentes, y puedes aprender más en el [capítulo Wasm](/docs/build/wasm).
