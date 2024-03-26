---
sidebar_position: 1
---

import Figure from "/src/components/figure"

# Modelo de comisión

Cada bloque es un recurso limitado - sólo puede caber una cantidad limitada de transacciones. Esta es una simplificación excesiva, pero el punto es que cada transacción incluida en el bloque consume una parte de los recursos del bloque.

Astar es una parachain en el ecosistema Polkadot, que se basa en la seguridad compartida que proporciona la relay chain de Polkadot. Sin embargo, se produce a costa de que se impongan determinadas limitaciones a los recursos de bloque. La mayoría de los lectores deben saber que en Astar se produce un bloque cada 12 segundos, una limitación impuesta por Polkadot. Sólo 0,5 de esos 12 segundos cuenta por el tiempo necesario para **ejecutar** el bloque. Esto significa que se necesitan **0,5 segundos** de tiempo de ejecución en alguna CPU para ejecutar la lógica del bloque. Se trata del primer recurso limitador, que suele denominarse "tiempo de referencia" (tiempo necesario para ejecutarse en la máquina de referencia).

Un ejemplo sencillo: un token transferido de **Alice** a **Bob**. Si una transacción de este tipo consume **0,001 segundos** de tiempo de ejecución, la ejecución de dos transacciones de este tipo en un solo bloque consumiría **0,002 segundos**. Llamar a un contrato inteligente, por ejemplo, un intercambio DEX, consume muchos más recursos y puede, por ejemplo, consumir **0,01 segundos, o 100 veces más que una simple transferencia de una cuenta a otra**.

El otro factor limitador es el tamaño **Prueba de Valididad** (PoV). Dado que los validadores de Polkadot proporcionan seguridad mediante la validación de bloques creados por recopiladores de parachain, necesitan acceder a los datos necesarios para validar el bloque. Ampliando el ejemplo anterior con **Alice** y **Bob**, Astar necesitaría proporcionar a los validadores de Polkadot información sobre cuántos tokens iniciales tenían **Alice** y **Bob** y la transacción en sí. Son datos (casi) suficientes para que trabajen los validadores, pero están estrictamente limitados a **5 MB (megabytes)** por bloque.

En resumen, hay dos factores principales que limitan la producción de bloques: `tiempo de referencia` y `tamaño de PoV`, que se tomaron en conjunto son colectivamente referidos como `peso`, un concepto importante al calcular las tarifas de transacción.

 <Figure caption="Block Consumption" src={require('/docs/learn/tokenomics2/img/Astar-Block-Consumption.jpeg').default } width="100%" />

Las comisiones por transacción en Astar comprenden las comisiones nativas (substrate) y las comisiones EVM. Las comisiones por transacciones nativas y EVM se calculan de forma diferente. Tokenomics 2.0 alinea el cálculo de las comisiones entre los dos sistemas para que las transacciones que consuman la misma cantidad de recursos de bloque tengan aproximadamente el mismo precio, independientemente del tipo de transacción (Nativa o EVM).

Esta sección describe los detalles de cálculo del modelo de comisiones de Tokenomics 2.0.

## Tarifas nativa

Las tasas nativas se aplican a las transacciones nativas de Substrate. Por ejemplo, transferir saldo, utilizar dApp staking, crear un multisig, votar en un referéndum, etc.

Las tasas se calculan utilizando un [modelo](https://research.web3.foundation/Polkadot/overview/token-economics#adjustment-of-fees-over-time) comúnmente utilizado por Polkadot y (probablemente) todas las parachains:

$$
\begin{align}
native\_fee &= base\_fee + c * weight\_fee + length\_fee + rent\_fee + tip
\end{align}
$$

donde se aplica lo siguiente:

$$
\begin{align}
weight\_fee &= weight_{factor} * \frac{transaction_{weight}}{base_{weight}}
\\
length\_fee &= length_{factor} * transaction\_length
\\
rent\_fee &= storage\_items*price\_per\_item + storage\_bytes*price\_per\_byte
\end{align}
$$

- $base_weight$ - peso base fijo de cada transacción incluida en el bloque.
- $base_fee$ - una comisión fija que debe pagarse por cada transacción incluida en el bloque.
- $weight_fee$ - es la tasa relacionada con el peso de la transacción.
- $c$ - multiplicador de la tarifa; si la utilización de la red es superior a la ideal, el factor "c" aumentará, obligando a los usuarios a pagar más. Y viceversa, cuando la congestión de la red sea baja, el multiplicador de tasas disminuirá.
- $length_fee$ - se trata de una parte de la tarifa relacionada con la longitud de la transacción (número de bytes).
- $rent_fee$ - tasa de depósito por almacenar datos en cadena. Puede encontrar una explicación detallada del cálculo de las tasas de alquiler en el caso de las transacciones de Wasm en la sección [en la sección Construir](/docs/build/wasm/transaction-fees#storage-rent).
- $tip$ - El remitente de una transacción de pago adicional paga para garantizar que su transacción se incluya más rápidamente en un bloque.

Las tasas nativas son intrínsecamente dinámicas mediante el multiplicador de tasas `c`, que se calcula en cada bloque mediante las siguientes fórmulas:

$$
\begin{align}
c_{n} &= c_{n-1} * (1 + adjustment + \frac{adjustment^2}{2})
\\
adjustment &= v * (s - s^*)
\\
s &= \frac{block\_weight}{max\_block\_normal\_dispatch\_weight}
\end{align}
$$

con varios parámetros de configuración:

- $s\*$ - llenado ideal de los bloques; llenado medio de los bloques deseado a largo plazo.
- $v$ - Factor de variabilidad; controla la rapidez con la que cambia el factor de ajuste. Si el valor es pequeño, se ajustará lentamente y si es grande, se ajustará rápidamente.
- $block_weight$ - peso total del bloque anterior.
- $c_{min}$ - el menor valor posible del multiplicador de tasas $c$.
- $c_{max}$ - el mayor valor posible del multiplicador de tasas $c$.

y utilizando $s$ para describir el llenado actual del bloque:

- Si $s > s\*$, lo que significa que el llenado del bloque es **más** que el ideal, el ajuste será un número positivo.
- Si $s < s\*$, lo que significa que la plenitud del bloque es **menor** que la idea, el ajuste será un número negativo.

Basado en el uso de la red (congestión), el factor $c$ aumentará o disminuirá de bloque a bloque. Si la red se utiliza fuertemente y los bloques están llenos, se incrementará, aumentando la cuota de peso y haciendo las transacciones más caras. Si la congestión de red está por debajo del ideal el multiplicador de comisiones disminuirá, haciendo que las transacciones sean menos caras.

## Tarifas EVM

Astar es totalmente compatible con Ethereum. Esto significa que también soporta el [concepto de gas](https://ethereum.org/en/developeropers/docs/gas/). El gas es similar al peso pero no es exactamente el mismo. Como resultado, las tasas de transacción de Ethereum se calculan de forma algo diferente. Una fórmula simplificada se parece a esto

$$ethereum\_fee = used\_gas * (base\_fee\_per\_gas + priority\_fee\_per\_gas)$$

- $used_gas$ - encapsula todos los recursos gastados para ejecutar la transacción.
- $base_fee_per_gas$ - cuánto debe pagar el usuario por unidad de gas.
- $priority_fee_per_gas$ - a cuánto asciende la propina del usuario por cada unidad de gas.

Comparándolo con el ejemplo anterior usando tarifas nativas, es evidente que las transacciones de Ethereum son menos configurables y que se abstrae más información del usuario. Una de las diferencias importantes con respecto al modelo de tarifa nativa es la inexistencia de tarifas de alquiler: cuando se crea almacenamiento, el precio de ese almacenamiento se incluye en la tarifa de gas, e incluso si se elimina parte del almacenamiento más tarde, el usuario no recibe ningún reembolso.

Con el fin de alinear las tarifas entre dos sistemas diferentes, la fórmula de la tarifa EVM para la red Astar se ajusta de manera que $base_fee_per_gas$ se convierte en un parámetro dinámico calculado en cada bloque $n$:

$$
\begin{align}
EVM\_fee &= used\_gas * (base\_fee\_per\_gas + priority\_fee\_per\_gas)
\\
base\_fee\_per\_gas_{n} &= base\_fee\_per\_gas_{n-1} * (1 + adjustment + \frac{adjustment^2}{2})
\\
\end{align}
$$

con los siguientes parámetros de configuración:

- $base_fee_per_gas_{min}$ - el valor más pequeño posible de base_fee_per_gas.
- $base_fee_per_gas_{max}$ - el mayor valor posible de base_fee_per_gas.

## Parámetros del modelo de tarifas

Los valores de todos los parámetros del modelo de tarifa están listados en la tabla siguiente.

| Nombre del parámetro                                                                                                   | Valor en Shibuya | Valor en Shiden | Valor en Astar  |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------- | --------------- | --------------- |
| $base_weight$                                                                                     | 98974            | 98974           | 98974           |
| $weight_{factor}$ (per byte)                                                   | 0.030855 SBY     | 0.00030855 SDN  | 0.030855 ASTR   |
| $length_{factor}$ (per byte)                                                   | 0.0000235 SBY    | 0.000000235 SDN | 0.0000235 ASTR  |
| $max_block_normal_dispatch_weight$ | 375,000,000,000  | 375,000,000,000 | 375,000,000,000 |
| $s\*$                                                                                                                  | 0.25             | 0.25            | 0.25            |
| $v$                                                                                                                    | 0.000015         | 0.000015        | 0.000015        |
| $c_{min}$                                                                                         | 0.1              | 0.1             | 0.1             |
| $c_{max}$                                                                                         | 10               | 10              | 10              |
| $price_per_item$                                                             | 0.00004 SBY      | 0.0000004 SDN   | 0.00004 ASTR    |
| $price_per_item$                                                             | 0.000001 SBY     | 0.00000001 SDN  | 0.000001 ASTR   |
| $base_fee_per_gas_{min}$           | 0.0000008 SBY    | 0.000000008 SDN | 0.0000008 ASTR  |
| $base_fee_per_gas_{max}$           | 0.00008 SBY      | 0.0000008 SDN   | 0.00008 ASTR    |

Los valores de los parámetros anteriores se fijan de modo que la tasa EVM y la tasa Nativa sean iguales e iguales a 0,5 ASTR o 0,005 SDN para una transacción de peso y longitud medios sin tasa de alquiler.

## Período de alineación de tarifa

El modelo heredado de tarifas tokenómicas de Astar Network no estaba alineado entre los dos sistemas: el mismo consumo de recursos a través de transacciones nativas o Ethereum daba lugar a tarifas significativamente diferentes. Para permitir que las partes interesadas de la red se adapten al modelo de tarifas de Tokenomics 2.0, la alineación de las tarifas entre los dos sistemas se introducirá gradualmente una vez que el cambio se aplique (en directo) en la red.
