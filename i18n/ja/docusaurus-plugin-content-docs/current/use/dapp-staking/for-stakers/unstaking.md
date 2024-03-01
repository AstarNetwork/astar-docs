---
sidebar_position: 4
---

import Figure from "/src/components/figure"

# dAppsからアンステーキング

## 概要

**Locking**はトークンが一時的に `locked` されたプロセスです。 ステーキングはトークンを結合する必要があるシナリオの1つです。\
**Unlocking**は、これらのトークンをロックを解除することをネットワークに通知することです。 ロック解除期間の後、トークンを引き出すことができ、トークンは `transferable` になります。

これは完全なブロック生成の時間がおよそ12秒である事に基づいてることに注意してください。 遅延が発生した場合は、ロック解除期間が少し長くなることがあります。\
ロック解除期間の長さは [こちら](/docs/use/dapp-staking/for-stakers/#parameters) で確認することができます。

:::warning

dApps Stakingからトークンのロック解除またはアンステーキングすると、ロック解除期間中は報酬を獲得できません！

:::

### ステークキングされたトークンのロックを解除する方法:

dAppのいずれかにステーキングしている場合は、[Asset Page](https://portal.astar.network/astar/assets)の **MY DAPPS** から `Unlock` をクリックすることで、トークンを転送可能にすることができます。

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" />

1. アンステーキングしたいdAppの **Unlock button (↑)** をクリックしてください;

2. **ロック解除**する額を指定するか、**Max** をクリックしてすべての額を`unlock`します。

3. トランザクションに署名するには、**Start Unlocking**をクリックしてください。

:::tip

dAppから一部のトークンを`unstake`し、残りのトークンがdAppの最小ステーキング額を下回る場合、そのdAppからすべてのトークンがアンステーキングされます;
また、Build\&Earn subperiod中にあるdAppからトークンを`unstake`し、このdAppにステーキングされたトークンが同じdAppのVoting subperiodの終わりにステーキングされたトークンより少ない場合、そのdAppのボーナス報酬の対象とはなりません;

:::

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_2.png').default } width="100%" />

トークンのロックを解除すると、新しいウィンドウが STAKING パネルに表示されます: **Unlocking**。

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="100%" />

- **Remaining Days** はトークンを引き出す前に待たなければならない日数または`Eras`を見積ます。
- ロック解除期間が終了したら、**withdraw button**をクリックして資金を引き出す必要があります。 トランザクションに署名すると、トークンはあなたのウォレットで転送可能になります。

**Chunks**

それぞれのロック解除は Chunk と呼ばれます。 Chunk とはなんでしょうか？

ロック解除 Chunk は、ロック解除期間中のASTRの一定量です。

_**例**_:  1 つの Chunk は次のように説明できます：「1000 ASTRがロック解除期間中であり、ブロック42000000で転送可能になります。」

### ロックされているトークンの解除をする方法:

ステーキングされていないがまだロックされているトークンがある場合、それらのロックを解除して転送可能にすることができます。

:::note

これらのトークンは常にロック解除期間の対象となります。

:::

[Asset Page](https://portal.astar.network/astar/assets) の **MY STAKING** パネルには、ステーキングされていないがロック解除可能なトークンが **Locked amount** として表示されることがあります。

1. それらを解除するには、**Unlock (↑)** をクリックしてください。これにより、すべてを`unlock`するトランザクションが開始されます。

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Panel_1.png').default } width="100%" />

2. ロック解除期間の終了時に、**withdraw button**をクリックすることで引き出すことができます。
3. トランザクションに署名すると、トークンはあなたのウォレットで転送可能になります。
