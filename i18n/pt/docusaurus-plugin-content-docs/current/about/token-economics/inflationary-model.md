---
sidebar_position: 4
---

# Tokenomics & Modelo de Inflação

:::nota
Esse é um conteúdo avançado.
:::

:::dica
Os modelos para Astar & Shiden são os mesmos, mas algumas diferenças de configuração poderão existir. Nos capítulos seguintes, mencionaremos apenas o token Astar e ASTR, mas o mesmo se aplica à Shiden e seu token SDN.
:::

O modelo de tokenomics de [Astar Network][] é construído para o suporte a desenvolvedores via dApps staking. Em sua essência, os tokens ASTR têm várias funções:

1. Pagamento de taxas de transações
2. Staking em dApps
3. Recompensas do dApps staking & recompensas dos coletores

## Modelo de Inflação

### Visão Geral

Os capítulos anteriores definiram a distribuição inicial do token ASTR. No entanto, Astar usa um modelo de tokenomics inflacionário (suprimento não vinculado) em que os tokens são emitidos cada vez que um novo bloco é produzido. Esses tokens impulsionam o sistema de dApp staking e são usados para recompensar os stakers e os coletores.

Para cada bloco produzido, Astar emitirá um número fixo de tokens. Esses números foram escolhidos para atingir uma inflação aproximada de 10% no primeiro ano, considerando que um novo bloco é produzido a cada **12** segundos.

| Rede   | Emissão por Bloco |
| ------ | ----------------- |
| Astar  | 266.4 ASTR        |
| Shiden | 2.664 SDN         |

O leitor pode notar que Astar emite 100 vezes mais tokens por bloco do que Shiden. Isso se deve ao fato de Astar ter um suprimento inicial 100 vezes maior que o de Shiden.

### Beneficiários

Cada recompensa do bloco é distribuída a um conjunto de beneficiários. ​
#### > Coletores

O coletor responsável por construir o bloco receberá a parte da recompensa do **coletor**. Este é o principal incentivo financeiro para os coletores. A parte é configurada como porcentagem da recompensa do bloco na cadeia e é constante por bloco, a menos que seja alterada manualmente.

Além disso, receberá as taxas pagas pelos usuários pelas transações que foram incluídas no bloco produzido. Em Shiden, **20%** das taxas são queimadas para fornecer força deflacionária ao modelo. O mesmo poderá em breve ser adotado em Astar.

#### > Tesouro On-chain

O Tesouro recebe uma parcela variável da recompensa do bloco. É usado principalmente como reserva para o leilão de parachain e para apoiar vários projetos e atividades no ecossistema Astar.

#### > dApps Staking

`dApps staking`, o mecanismo inovador de incentivo ao desenvolvedor de Astar, recebe uma parte variável das recompensas do bloco dependendo do **valor total bloqueado** atual (ou **TVL**) no dApps staking.

Parte dele é dedicada ao suporte aos desenvolvedores de dApp, enquanto outra parte é direcionada aos stakers que bloquearam seu ASTR para *stake* ou para *votar * em um dApp.

### Visão Geral do Modelo

Os capítulos anteriores descreveram que a inflação por bloco é fixa - porém, a forma como distribuímos essa recompensa para alguns beneficiários é dinâmica e depende de alguns parâmetros. É importante enfatizar que todos os parâmetros relacionados do modelo são lidos na cadeia - **nada** é fornecido fora da cadeia. Isso o torna seguro e facilmente verificável.

Há duas coisas principais para entender antes de se aprofundar no modelo - **TVL** e **parâmetros configuráveis de recompensa do bloco**.

#### TVL

A principal variável no sistema que varia de bloco para bloco, com base nas ações do usuário é, **TVL** de dApps staking. :::observação  
O TVL neste contexto não considera tokens não-ASTR bloqueados por outros protocolos construídos em Astar (por exemplo, protocolos DeFi) e, como tal, não tem efeito no esquema de distribuição de recompensas.
:::

Estamos especialmente interessados na **porcentagem de TVL**
- $total\_issuance$ - quantidade total de tokens **ASTR** emitidos
- $TVL$ - quantidade total de tokens bloqueados no dApps-staking
- $TVL_{\%} = {total \over TVL}$

Caso **total_issuance** seja igual a 1.000 e **TVL** seja 242 a **porcentagem de TVL ** será `24,2%`.

#### Parâmetros configuráveis

Os parâmetros a seguir influenciam como cada recompensa do bloco é distribuída.

| Nome                         | Descrição                                                                      | Valor Exemplo |
| ---------------------------- | ------------------------------------------------------------------------------ | ------------- |
| Porcentagem dos Coletores    | Percentual fixo dos coletores                                                  | 10%           |
| Porcentagem Base do Tesouro  | Percentual mínimo que sempre vai para a tesouraria                             | 10%           |
| Porcentagem Base dos Stakers | Percentual mínimo que sempre vai para a pool de recompensas do staker de dApps | 20%           |
| Porcentagem de dApps         | Porcentagem fixa que vai para a pool de recompensas do dApp do dApps-staking   | 15%           |
| Porcentagem Ajustável        | Percentual que é dividido entre tesouro e stakers, dependendo do TVL           | 45%           |
| TVL ideal do dApps-staking   | Percentual de TVL que é considerado ideal                                      | 60%           |

O valor recebido pelos stakers e pelo tesouro é dinâmico e depende do TVL. No entanto, há um limite inferior de quanto vai para eles. Estes são os parâmetros *base*. Coletores e dApps sempre recebem uma porcentagem fixa da recompensa.

##### Porcentagem Ajustável

Dependendo do TVL, a **porcentagem ajustável** da recompensa do bloco é dividida entre os stakers e o tesouro. $$ \begin{aligned} a&djustable_{staker} = min(1, {TVL_{\%} \over TVL_{ideal}}) * adjustable_{\%} \newline\newline t&otal_{staker} = base_{staker} + adjustable_{staker} \newline\newline t&otal_{treasury} = base_{treasury} + (adjustable_{\%} - adjustable_{staker}) \end{aligned} $$

À medida que mais tokens são colocados em stake e o TVL aumenta, a parte das recompensas dos stakers aumentará para compensar, assim o stake será um *jogo soma-zero*. Esse aumento é linear até um certo limite, $TVL_{ideal}$, após o qual satura. Qualquer aumento adicional no TVL não resultará em aumento nas recompensas dos stakers.

Observe que no modelo de Polkadot, quando o TVL ideal é alcançado, as recompensas dos stakers caem exponencialmente. No nosso caso, eles só ficam saturados, tornando-se um *jogo soma-zero*. A motivação por trás de nossa abordagem é a simplicidade.

##### Taxa de juro

Usando os parâmetros dos capítulos anteriores, podemos expressar a taxa de juros anual para os stakers: $$ i = {inflation_{anual} * total_{staker} \over TVL_{\%}} $$

Por exemplo, no caso $total_{staker} = 55\%$ e $TVL_{\%} = 40\%$, acabamos com ${0,1 * 0,55 \over 0,4}$ que é `13,75%` de taxa de juros anual.

No entanto, a inflação dilui a taxa de juros, então é mais preciso considerar a *taxa de juros anual ajustada pela inflação*.

$$ i_{adjusted} = {i + 1 \over inflation_{anual} + 1} - 1 $$

Para acompanhar o exemplo acima, o valor *ajustado pela inflação* seria ${0,1375 + 1 \over 0,1 + 1} - 1$ que é `3,4%`.

### Visualização do modelo

O gráfico a seguir é uma visualização do modelo descrito.

* a linha verde é a taxa de juros $i$
* a linha azul é a inflação total do staker $total_{staker}$
* a linha vermelha é a taxa de juros ajustada pela inflação $i_{adjusted}$

![tokenomics_model_visualização](img/tokenomics_1.png)

Você pode verificar o modelo e configurá-lo [aqui](https://www.desmos.com/calculator/cjjkt6smk5).

[Astar Network]: https://astar.network/