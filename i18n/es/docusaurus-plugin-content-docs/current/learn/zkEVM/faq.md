import Figure from "/src/components/figure"

# Astar zkEVM FAQs

## Preguntas frecuentes (FAQ)

Aquí encontrarás respuestas a las preguntas más comunes sobre Astar zkEVM, como por ejemplo cómo funciona, cómo interactuar y cómo se relaciona con la parachain Polkadot de Astar, la cadena PoS Polygon y la red Ethereum.

### ¿Cuál es la diferencia entre Polygon PoS y Astar zkEVM?

Polygon PoS y Astar zkEVM ofrecen soluciones de escalado para Ethereum, aunque difieren en su arquitectura, mecanismos de consenso y opciones de disponibilidad de datos.

Astar zkEVM, en particular, aprovecha la tecnología zk-rollup en la capa 2 de Ethereum para lograr una escalabilidad mejorada, seguridad compartida y equivalencia EVM, mientras que Polygon PoS es una cadena lateral independiente de Ethereum, que actúa como su propia capa 1, con su propio mecanismo de consenso y seguridad.

El puente entre Ethereum y la Capa 2 es trustless, lo que significa que Astar zkEVM hereda la seguridad de Ethereum, mientras que los puentes entre Ethereum y otras cadenas de Capa 1 como Polygon PoS dependen del proveedor específico del puente para proporcionar garantías de seguridad.

### ¿Está Astar abandonando Polkadot?

Astar no está abandonando Polkadot. Apoyaremos la cadena como hasta ahora. De hecho, acabamos de conseguir un puesto de paracaidista para los próximos dos años, y nuestro principal objetivo es el desarrollo de herramientas para la creación de contratos inteligentes y la incorporación regular de nuevos proyectos. Así que estamos comprometidos incondicionalmente con Polkadot.

### ¿Las tres máquinas virtuales (EVM, Astar zkEVM y Wasm) son interoperables?

Sí. Astar zkEVM será interoperable con las cadenas existentes desde el primer día debido a su equivalencia EVM, y también a través de socios como Layer Zero que soportan el puente tradicional de activos, el paso arbitrario de mensajes entre cadenas y las llamadas a contratos inteligentes remotos.

### ¿Qué es único en Astar zkEVM?

Hay varias características clave que hacen a Astar zkEVM único:

- Tendiendo puentes entre el mercado japonés y los proyectos, empresas y promotores de todo el mundo.
- Equivalencia alta de EVM.
- Alta escalabilidad a través de tecnología de conocimiento cero.
- Interoperabilidad sin confianza y seguridad compartida heredada de Ethereum.
- Coste de transacción significativamente reducido en comparación con Ethereum mainnet.

### ¿Cuál es la opción de gas de Astar zkEVM?

ETH puenteado es el token de gas en Astar zkEVM testnet, y ASTR puenteado puede ser añadido como una opción en algún momento en el futuro.

### ¿Astar lanzará un nuevo token para el zkEVM?

No. El valor de la red Astar en su conjunto se refleja en el token ASTR, y todo lo que hacemos desde el punto de vista empresarial está destinado a mejorarlo o preservarlo. No tenemos intención de introducir un token nativo de la zkEVM.

### ¿Habrá un airdrop para el ecosistema zkEVM?

Los participantes en el ecosistema zkEVM podrán obtener incentivos de distintas formas, aunque, al menos por ahora, airdrop no es una de ellas. Sigue la campaña zkEVM Journey si quieres saber más y participar en la fase de lanzamiento.

### ¿Astar zkEVM utiliza una arquitectura ZK-Rollup? ¿Eso por qué?

El equipo de Astar ha decidido utilizar la arquitectura ZK-Rollup para la red de pruebas. ZK-Rollups están completamente asegurados y respaldados por Ethereum.

### ¿Cuál es la diferencia entre Astar zkEVM y Ethereum mainnet?

Astar zkEVM se distingue de la red principal de Ethereum ofreciendo un coste de transacción mucho más bajo (tasas de gas) y un mayor rendimiento de transacción. Esta mejora del rendimiento, combinada con la reducción de los costes de transacción, ofrece a los desarrolladores el entorno ideal para crear aplicaciones que exigen altas velocidades de transacción sin la carga de unos costes elevados.

### ¿Astar zkEVM va a convertirse en una Capa 2 en Ethereum, o Polygon PoS chain?

Astar zkEVM será desplegado en Ethereum Layer 2, y será propulsado por la tecnología Polygon zkEVM.

### ¿Tiene previsto apoyar a todos los ecosistemas por igual, o tiene algunas prioridades?

Astar zkEVM se centrará en el mercado japonés, en coordinación con Polygon Labs. Tener diferentes soluciones facilitará diversas necesidades para diferentes desarrolladores de dApp y soluciones empresariales dependiendo de sus necesidades específicas.

### ¿Por qué Astar se expande a la Capa 2, como una red zkEVM?

Nuestros proyectos y socios han mostrado un creciente interés por la tecnología de conocimiento cero y las soluciones de capa 2, ambas tendencias emergentes. Escalar nuestro actual blockchain a través de soluciones de conocimiento cero podría satisfacer el crecimiento de la demanda accediendo al ecosistema Ethereum.

### ¿Cuál es el beneficio para el ecosistema Astar actual de desplegar una capa 2 zkEVM en Ethereum?

El lanzamiento de una capa 2 en Ethereum ofrece varias ventajas para el ecosistema Astar:

- **Más opciones para los constructores**: Con Astar Substrate (capa 1) y Astar zkEVM (capa 2), los desarrolladores tienen más lugares y herramientas con las que crear/construir.
- Expandiendo hacia una comunidad más grande.
- Astar puede trabajar más estrechamente con los proyectos de nivel 1 en Ethereum. Esto significa que pueden beneficiarse de las características únicas de Astar, por ejemplo: dApp Staking de Astar.
- El ecosistema Astar se beneficiará de un mayor crecimiento de las transacciones, los usuarios activos y la liquidez. Todos son factores clave para el éxito de la red.
- Más empresas japonesas y casos de uso del mundo real están llegando al ecosistema Astar

### ¿Es Astar zkEVM resistente a la censura?

Astar zkEVM es resistente a la censura desde el nivel de protocolo, aunque en la arquitectura actual sólo hay un único secuenciador que propone los lotes a L1, pero no puede censurar a nadie ya que siempre es posible _forzar_ los lotes directamente en el contrato inteligente de rollup de L1. Eso significa esencialmente que incluso si el secuenciador en teoría puede censurar su TX pasando a través de él, pero no puede censurar a enviar su TX directamente a L1 contrato inteligente

### ¿Cómo pueden empezar los desarrolladores con la construcción en Astar zkEVM? ¿Hay algún kit de herramientas o SDKs específicos disponibles?

La información detallada sobre desarrollo será revelada junto con el lanzamiento de la red de pruebas. Adicionalmente, publicaremos documentación completa simultáneamente con el testnet, permitiendo a los desarrolladores comenzar a compilar inmediatamente.

Los desarrolladores actuales de la comunidad Astar se beneficiarán significativamente de los extensos recursos de los desarrolladores presentes en el ecosistema Ethereum. Las herramientas de desarrollo de Ethereum familiares, incluyendo Hardhat, y Truffle, seguirán siendo accesibles. A medida que avanzamos, Astar presentará herramientas y SDKs adaptados a cualquier funcionalidad única de Astar zkEVM.

### ¿Cómo se compara el precio del gas en Astar zkEVM con Ethereum y Polygon?

Aunque las transacciones en Astar zkEVM serán significativamente más baratas que las de la red principal de Ethereum, serán más caras en comparación con Astar Substrate en Polkadot. La razón es que como Astar zkEVM es una solución de capa 2 de Ethereum, el costo de la red se ve afectado en gran medida por el costo de Ethereum mainnet, que es significativamente más alto que Astar Substrate.

### ¿Cuál es el mapa de ruta para el futuro desarrollo y despliegue de Astar zkEVM?

Astar zkEVM testnet comenzará a desplegarse en octubre de 2023 (Q4) con un despliegue previsto de mainnet después de las pruebas de batalla de nuestro entorno testnet. Tenemos previsto lanzar la mainnet Astar zkEVM en plena coordinación con nuestros socios de infraestructura para garantizar que los desarrolladores de aplicaciones digitales zkEVM dispongan de todas las herramientas y funciones que necesitan para empezar a crear desde el primer momento, como la mensajería entre cadenas (o bridging) y la abstracción de cuentas (AU).

### ¿Se pueden acumular activos o migrar de otras cadenas a Astar zkEVM? Si es así, ¿cómo?

- ETH puede ser transferido nativamente en ambas direcciones usando un puente sin confianza.
- ASTR y fichas adicionales serán transitadas a través del protocolo LayerZero.

### ¿Cómo se recogen y ordenan las transacciones?

1. Un usuario inicia una transacción en una billetera, como Metamask, y la reenvía a un Sequencer.
2. La transacción se finaliza en Astar zkEVM una vez que el secuenciador se compromete a procesarla. En este punto, está finalizado en Astar zkEVM pero no Ethereum, y referido como el **Estado de confianza**.
3. El secuenciador envía los datos por lotes al contrato inteligente de Ethereum. Esto permite que cualquier nodo sincronice sin confianza desde Ethereum, una fase llamada **Estado Virtual**.
4. Un agregador recoge transacciones pendientes, las verifica y construye una Prueba para confirmarlas en Ethereum.
5. Con la validación de la prueba, las transacciones alcanzan la finalidad de Ethereum, esencial para las retiradas, denominadas como el **Estado Consolidado**.

El proceso anterior es una versión resumida del flujo de transacciones en Astar zkEVM. Te recomendamos que eches un vistazo al documento completo [ciclo de vida de las transacciones](https://wiki.polygon.technology/docs/zkevm/protocol/l2-transaction-cycle-intro/) por ahora si quieres saber más.

### ¿Qué tipos de dApps se pueden desplegar en Astar zkEVM?

Cualquier dApps compatible con EVM puede ser desplegado en Astar zkEVM debido a su equivalencia EVM. Esto significa que dApps construidos para Ethereum puede ser desplegado en zkEVM de Astar, donde se beneficiarán de mejoras de escalabilidad y procesamiento paralelo debido a la naturaleza de los rollups, y menores costos de transacción.

### ¿Cómo se logra el consenso en el ecosistema zkEVM de Astar?

Astar zkEVM existe en sí mismo como un programa acumulativo, que no requiere un consentimiento independiente, por lo tanto, Astar zkEVM hereda la seguridad de Ethereum.

### ¿Cuál es el valor de Astar zkEVM para los poseedores de tokens ASTR?

Astar zkEVM utiliza el token ASTR de tres nuevas maneras: como la tasa de gas para el utillaje, en el mecanismo de quema con el secuenciador, y quemando tokens incentivados al agregador de la red. Este modelo será evaluado en nuestra red de pruebas para maximizar el valor de los poseedores de ASTR. El diseño final está sujeto a cambios basados en análisis de la prueba del modelo.

<Figure caption="Astar zkEVM Value" src={require('./img/astar-zkevm-value.png').default } width="65%" />
