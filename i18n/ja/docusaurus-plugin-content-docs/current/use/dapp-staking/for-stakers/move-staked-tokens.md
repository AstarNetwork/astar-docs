---
sidebar_position: 0
---

import Figure from "/src/components/figure"

# dApps間でステークされたトークンの移動

dAppにトークンをステーキングした後は、いつでも決定を見直し、別のdAppに移動するオプションがあります。

1. [Asset Page](https://portal.astar.network/astar/assets)で **STAKING** パネルにアクセスしてください;
2. **「MY DAPPS」** で、トークンを移動したいdAppの **移動ボタン（→）** をクリックします。

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" />

3. `Move`を希望するdAppを選択し、希望する金額を入力します;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Page_3.png').default } width="85%" />

4. 決定を確認するために **Confirm** をクリックし、ネットワーク上のトランザクションに署名をします;

トークンをあるdAppから別のdAppに移動する際には、一つのdAppから`unstaking`して新しいdAppに`stake`することになるため、それぞれのdAppでの報酬に影響を与えることに注意してください：

- dAppからトークンを移動し、ステークキングされたトークンがdAppの [最小ステーキング額](/docs/use/dapp-staking/for-stakers/#parameters)  を下回る場合、そのdAppからすべてのトークンが `unstaked` されます;
- dAppからトークンを別のdAppに移動すると、移動したdAppの現在の`Era`に対する**基本ステーキング報酬**を失い、次の`Era`まで新しいdAppで報酬を得ることはできません;
- Build\&Earn subperiod中に、あるdAppから別のdAppにトークンを移動し、**Build\&Earn subperiod**の終わりに初期dAppにステーキングされたトークンが、同じdAppの**Vote subperiod**の終わりにステーキングされたトークンより少ない場合、そのdAppの**ボーナス報酬**の対象とはなりません;

通常、ユーザーは`Era`の最初のブロックから最後のブロックまでずっと存在していたステーキングに対してのみ報酬を受け取ります。 実行時のロジックでは、プロトコルは`Era`の最後のブロックでステーキングを開始したユーザーに対して、`Era`全体を通じてステーキングしたユーザーと比較して報酬を配布しません。
