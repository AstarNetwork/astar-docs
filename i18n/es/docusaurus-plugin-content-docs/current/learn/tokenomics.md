---
sidebar_position: 10
title: Tokenomics
---

import tokenomics from '/docs/learn/img/tokenomics_1.png'
import inflation from '/docs/learn/img/inflation_1.png'

[Astar Network]: https://astar.network/

:::note
Esta sección incluye contenidos para usuarios avanzados.
:::

:::tip
Astar y Shiden comparten el mismo modelo económico, aunque existían diferencias en sus configuraciones iniciales de suministro.
Los siguientes capítulos se centran en Astar y ASTR, sin embargo, esta información también se aplica a Shiden y SDN token.
:::

## Vista general

En los capítulos anteriores definimos la distribución inicial de fichas ASTR. Sin embargo, Astar utiliza un modelo de tokenómica inflacionista (oferta sin límites) en el que se emiten fichas cada vez que se produce un nuevo bloque. Estos tokens alimentan el sistema de staking de la dApp y se utilizan para recompensar a los stakers y collators.

El modelo tokenomics de [Astar Network] se basa en apoyar a los desarrolladores a través del staking de dApp. En su núcleo, el token ASTR tiene una serie de utilidades:

1. Pago por comisiones de transacción
2. Staking dApps
3. recompensas de dApp staking y collator

### Modelo inflacionario

Por cada bloque producido, Astar emite un número fijo de tokens. Inicialmente, estas cifras se eligieron para generar aproximadamente un 10% de inflación, basándose en la oferta inicial.

Desde enero de 2023, la inflación de ASTR se ha reducido un 5% hasta \~665.000.000 ASTR anuales.

| Red    | Emisión por bloque | Emisión por Era |
| ------ | ------------------ | --------------- |
| Astar  | 253.08 ASTR        | 1,822,176 ASTR  |
| Shiden | 2.664 SDN          | 19,180.8 SDN    |

\* 1 era =\~ 1 día, suponiendo que se produce un nuevo bloque cada **12** segundos.

El lector podrá observar que Astar emite 95 veces más fichas por bloque que Shiden. Esto se debe a que Astar tiene un suministro inicial 100 veces mayor que Shiden.

### Beneficiarios

Cada recompensa en bloque se distribuye a un conjunto de beneficiarios.
​

#### > Collators

El collator responsable de la construcción del bloque recibirá **la parte de recompensa del collator**. Este es el principal incentivo financiero para los recopiladores. La porción se configura como porcentaje de la recompensa del bloque en la cadena y es constante por bloque a menos que se cambie manualmente.

Además, recibirá las comisiones pagadas por los usuarios por las transacciones que se incluyeron en el bloque producido.

Para **Shiden**, el **100%** de las comisiones se queman y la punta completa se paga al collator.
En el caso de **Astar**, se quema el **20%** de los honorarios y propinas, y el resto se paga al collator.

#### > Tesorería On-chain

El tesoro recibe una porción variable de la recompensa de bloque. A continuación, se asigna a una serie de iniciativas en todo el ecosistema de Astar. Esto incluye la creación de reservas para las subastas de paracaídas, así como el apoyo a diversos proyectos y actividades que contribuyen a hacer crecer y fortalecer nuestra red.

#### > dApp Staking

`dApp staking`, el innovador mecanismo de incentivos para desarrolladores de Astar, recibe una parte variable de las recompensas del bloque en función del **valor total bloqueado** (o **TVL** en más texto) actual en dApps staking.

Una parte se dedica a apoyar a los desarrolladores de dApps, mientras que otra se destina a los stakers que bloquearon su ASTR para _apostar_ o _votar_ por una dApp.

<div style={{textAlign: 'center'}}>
    <img src={inflation} style={{width: 600}} />
</div>

### Vista general del modelo

En los capítulos anteriores se ha descrito que la inflación por bloque es fija; sin embargo, la forma en que distribuimos esta recompensa para algunos beneficiarios es dinámica y depende de determinados parámetros. Es importante destacar que todos los parámetros relacionados del modelo se leen en la cadena - **nada** se proporciona fuera de la cadena. Esto lo hace seguro y fácilmente verificable.

Hay dos cosas principales que hay que entender antes de profundizar en el modelo: **TVL** y **parámetros configurables de recompensa por bloque**.

#### TVL

La principal variable del sistema que fluctúa de un bloque a otro, en función de las acciones del usuario, es la **TVL** de la estaca de la dApp.
:::nota
TVL en este contexto no considera los tokens no ASTR bloqueados por otros protocolos construidos sobre Astar (por ejemplo, protocolos DeFi) y como tal no tiene ningún efecto sobre el esquema de distribución de recompensas.
:::

Nos interesa particularmente el **porcentaje de TVL**

- $total_issuance$ - cantidad total de tokens emitidos **ASTR**
- $TVL$ - cantidad total de tokens bloqueados en dApps staking
- $TVL_{%} = {TVL \over total}$

En caso de que **emisión_total** sea igual a 1000 y **TVL** sea 242, el **porcentaje deTVL** será `24,2%`.

#### Parámetros configurables

Los siguientes parámetros influyen en cómo se distribuye cada recompensa de bloques.

\| Nombre | Descripción | Ejemplo Valor |
\| ----------------------- | ----------- ------------------------------- | ------------- |
\| Porcentaje de colectores | Porcentaje fijo que va a colectores | 10% | Porcentaje base de tesorería | Porcentaje mínimo que siempre va a tesorería | 10
\| Porcentaje base de tesorería Porcentaje mínimo que siempre va a tesorería 10
\| Porcentaje mínimo que siempre se destina al fondo de recompensas del estafador de dApps.
\| Porcentaje de dApps Porcentaje fijo que se destina al fondo de recompensas de dApps de dApps Staking 15
\| Porcentaje ajustable | Porcentaje que se divide entre tesorería y stakers, dependiendo del TVL | 45 % |
\| Porcentaje que se considera ideal para la TVL de las apuestas de dApps

La cantidad recibida por los interesados y el tesoro es dinámica y depende de la TVL. Sin embargo, hay un límite inferior en cuanto a la cantidad que se destina a ellos. Estos son los parámetros _base_. Collators y dApps siempre reciben un porcentaje fijo de la recompensa.

##### Porcentaje ajustable

En función del TVL, el **porcentaje ajustable** de la recompensa en bloque se reparte entre los stakers y la tesorería.

$$
\begin{aligned}
a&djustable_{staker} = min(1, {TVL_{\%} \over TVL_{ideal}}) * adjustable_{\%}
\newline\newline
t&otal_{staker} = base_{staker} + adjustable_{staker}
\newline\newline
t&otal_{treasury} = base_{treasury} + (adjustable_{\%} - adjustable_{staker})
\end{aligned}
$$

A medida que se apuestan más tokens y aumenta la TVL, la parte de las recompensas de los stakers aumenta en proporción al crecimiento de la red. Este enfoque ayuda a compensar la naturaleza de _suma cero_ de las apuestas e incentiva a más usuarios a participar en la seguridad de la red. Es importante señalar que este aumento de recompensa es lineal hasta un cierto umbral, conocido como punto $TVL_{ideal}$. Una vez alcanzado este umbral, el aumento de la recompensa se saturará, lo que significa que cualquier aumento adicional de la TVL no se traducirá en un aumento de las recompensas del estaqueador. Esto garantiza un sistema de recompensas justo y sostenible que beneficie a todos los miembros de la comunidad Astar.

Ten en cuenta que en el modelo de Polkadot, cuando se alcanza la TVL ideal, las recompensas de juego caen exponencialmente. En nuestro caso, sólo quedan saturados, convirtiéndola en un _juego de suma cero_. La motivación detrás de nuestro enfoque es simplicidad.

##### Tasa de interés

Utilizando los parámetros de los capítulos anteriores, podemos expresar una tasa de interés anual para los interesados:

$$
i = {inflation_{anual} * total_{staker} \over TVL_{\%}}
$$

Por ejemplo, en el caso de que $total_{staker} = 55%$ y $TVL_{%} = 40%$, obtenemos ${0,1 \* 0,55 \over 0,4}$ que es un tipo de interés anual del `13,75%`.

Sin embargo, la inflación diluye el tipo de interés, por lo que es más preciso considerar _tipo de interés anual ajustado a la inflación_.

$$
i_{adjusted} = {i + 1 \over inflation_{anual} + 1} - 1
$$

Siguiendo con el ejemplo anterior, el valor _ajustado a la inflación_ sería ${0,1375 + 1 \over 0,1 + 1} - 1$, lo que equivale a un `3,4%`.

### Visualización del modelo

El siguiente gráfico es una visualización del modelo descrito.

- la línea verde es la tasa de interés $i$
- la línea azul es la inflación total del staker $total_{staker}$
- la línea roja es la inflación ajustada la tasa de interés $i_{adjusted}$

<div style={{textAlign: 'center'}}>
    <figure>
    <img src={tokenomics} style={{width: 600}} />
    
    <figcaption>Model Visualization</figcaption>
    </figure>
</div>

Puede comprobar este modelo y configurar los parámetros usted mismo [aquí](https://www.desmos.com/calculator/cjjkt6smk5).
