---
sidebar_position: 4
---

import Figure from "/src/components/figure"
//do not translate lines above

# Tokenomics & Modèle d’inflation

:::note
Ceci est du contenu avancé.
:::

:::tip
Les modèles pour Astar & Shiden sont les mêmes, mais les configurations peuvent être différentes. Dans les chapitres suivants, nous ne mentionnerons que Astar et le jeton ASTR, mais il en est de même pour Shiden et son jeton SDN.
:::

Les tokenomics du [résau Astar][] ont été construites pour soutenir les développeurs via le dApps staking. Fondamentalement, les jetons ASTR ont plusieurs rôles :

1. Payer les frais de transaction
2. Staker sur les dApps
3. Récompenser les dApps & récompenser les collateurs

## Taux d'inflation

### Vue d'ensemble

Les chapitres précédents ont décrit la distribution initiale du jeton ASTR. Cependant, Astar utilise un modèle de tokenomics inflationniste (unbound supply) où des jetons sont émis chaque fois qu'un nouveau bloc est produit. Ces jetons permettent d'alimenter le système du dApps staking et sont utilisés pour récompenser les stakers et les collateurs.

A chaque bloc produit, Astar émettra un nombre fixe de jetons. Ce nombre a été choisi pour atteindre environ 10% d'inflation pour la première année, en supposant qu'un nouveau bloc est produit toutes les **12** secondes.

| Réseau | Émission par bloc |
| ------ | ----------------- |
| Astar  | 266.4 ASTR        |
| Shiden | 2.664 SDN         |

Le lecteur peut remarquer que Astar émet 100 fois plus de jetons par bloc que Shiden. Cela est dû au fait que le nombre de tokens d'Astar est 100 fois plus élevé que celui de Shiden.

### Bénéficiaires

Chaque récompense par bloc est distribuée à un ensemble de bénéficiaires. ​
#### > Collateurs

Les collateurs sont responsables de la construction du bloc et reçoivent une partie des récompenses. Il s'agit de leur principale incitation financière. La récompense des collateurs est exprimée en pourcentage et est constante par bloc, sauf modification manuelle.

De plus, ils recevront des frais payés par les utilisateurs pour les transactions qui ont été incluses dans les blocs produits. Pour Shiden, **20%** des frais sont brûlés pour fournir une force déflationniste au modèle. La même chose pourrait bientôt être adoptée sur Astar.

#### > Trésorerie on-chain

La trésorerie reçoit une partie variable des récompenses de bloc. Cela sert principalement de réserve aux enchères de parachain et de soutien à divers projets et activités dans l'écosystème Astar.

#### > dApps Staking

`dApps staking`, le mécanisme d'incitation innovant pour les développeurs d'Astar, reçoit une partie variable des récompenses de bloc en fonction de la **valeur totale verrouillée** (ou **TVL** ) dans le dApps staking.

Une partie de celles-ci est dédiée au soutien des développeurs de dApps alors qu'une autre partie va vers les stakers qui ont verrouillé leur ASTR pour *staker* ou *voter* pour une dApp.

### Vue d'ensemble du modèle

Les chapitres précédents ont décrit que l'inflation par bloc est fixe - cependant, la façon dont nous distribuons ces récompenses est dynamique et dépend de certains paramètres. Il est important de souligner que tous les paramètres associés au modèle sont lus on-chain - **rien** n'est fourni hors chaîne. Cela le rend sûr et facilement vérifiable.

Il y a deux choses principales à comprendre avant de plonger plus profondément dans le modèle - **TVL** et **les paramètres configurables pour les récompenses de bloc **.

#### TVL

La principale variable dans le système, qui fluctue d'un bloc à l'autre, en fonction des actions de l'utilisateur, est la **TVL** dans le dApps staking. 
:::note  
La TVL dans ce contexte ne prend pas en compte les jetons non ASTR verrouillés par d'autres protocoles construits au-dessus d'Astar (par exemple les protocoles DeFi) et n'a donc aucun effet sur le schéma de distribution des récompenses.
:::

Nous sommes particulièrement intéressés par **le pourcentage de TVL**
- $total\_emis$ - montant total des jetons **ASTR** émis
- $TVL$ - nombre total de jetons verrouillés dans le dApps-staking
- $TVL_{\%} = {total_emis \over TVL}$

Dans le cas où **total_emis** équivaut à 1000 et la **TVL** à 242, **le pourcentage de la TVL** sera `24,2%`.

#### Paramètres configurables

Les paramètres suivants influencent la manière dont chaque récompense de bloc est distribuée.

| Nom                                 | Description                                                                 | Exemple de valeur |
| ----------------------------------- | --------------------------------------------------------------------------- | ----------------- |
| Pourcentage aux collateurs          | Pourcentage fixe qui va aux collateurs                                      | 10%               |
| Pourcentage de base à la trésorerie | Pourcentage minimum qui va toujours à la trésorerie                         | 10 %              |
| Pourcentage de base aux stakers     | Pourcentage minimum attribuée aux stakers du dApps Staking                  | 20 %              |
| Pourcentage aux dApps               | Pourcentage fixe attribuée aux dApps du dApps Staking                       | 15 %              |
| Pourcentage Ajustable               | Pourcentage qui est divisé entre la trésorerie et les stakers, selon la TVL | 45%               |
| TVL idéale pour le dApps staking    | Pourcentage de la TVL qui est considéré comme idéal                         | 60 %              |

Le montant reçu par les stakers et la trésorerie est dynamique et dépend de la TVL. Toutefois, il y a une limite inférieure sur ce qui leur est destiné. Ce sont les paramètres de *base*. Les collateurs et les dApps reçoivent toujours un pourcentage fixe de la récompense.

##### Pourcentage ajustable

Selon la TVL, le **pourcent ajustable** de la récompense de bloc est divisé entre les stakers et la trésorerie. 
$$
\begin{aligned} a&justable_{staker} = min(1, {TVL_{\%} \over TVL_{idéale}}) * ajustable_{\%} \newline\newline t&otal_{staker} = base_{staker} + ajustable_{staker} \newline\newline t&otal_{trésorerie} = base_{trésorerie} + (ajustable_{\%} - ajustable_{staker}) \end{aligned}
$$

Au fur et à mesure que les jetons sont stakés et que la TVL augmente, la partie des récompenses versée aux stakers augmentera pour éviter que le staking devienne un *jeu à somme nulle*. Cette augmentation est linéaire jusqu'à un certain seuil, $TVL_{idéale}$, après quoi elle plafonne. Toute augmentation supplémentaire de la TVL n'entrainera pas d'augmentation des récompenses aux stakers.

Notez que dans le modèle de Polkadot, lorsque la TVL idéale est atteinte, les récompenses de staking chutent de façon exponentielle. Dans notre cas, ils ne font que plafonnés, ce qui en fait un *jeu à somme nulle*. La motivation derrière notre approche est la simplicité.

##### Taux d’intérêt

En utilisant les paramètres des chapitres précédents, nous pouvons exprimer le taux d'intérêt annuel pour les stakers : 
$$
i = {inflation_{anuelle} * total_{staker} \over TVL_{\%}}
$$

Par exemple, dans le cas où $total_{staker} = 55\%$ et $TVL_{\%} = 40\%$, on obtient ${0. * 0.55 \over 0.4}$ qui est `13,75%` le taux d'intérêt annuel.

Cependant, l'inflation dilue le taux d'intérêt, il est donc plus précis de considérer *le taux d'intérêt annuel ajusté en fonction de l'inflation*.

$$
i_{ajusté} = {i + 1 \over inflation_{anuelle} + 1} - 1
$$

Pour suivre l'exemple ci-dessus, *l'inflation ajustée* serait de ${0. 375 + 1 \over 0.1 + 1} - 1$ à savoir `3.4%`.

### Visualisation du modèle

Le graphique suivant est une visualisation du modèle décrit.

* la ligne verte est le taux d'intérêt $i$
* la droite bleue est le nombre grandissant de stakers $total_{staker}$
* la ligne rouge est le taux d'intérêt ajusté en fonction de l'inflation $i_{ajusté}$

<Figure caption="Tokenomics Model" src={require('/docs/about/token-economics/img/tokenomics_1.png').default } width="100%" />

Vous pouvez vérifier le modèle et le configurer vous-même [ici](https://www.desmos.com/calculator/cjjkt6smk5).

[résau Astar]: https://astar.network/
