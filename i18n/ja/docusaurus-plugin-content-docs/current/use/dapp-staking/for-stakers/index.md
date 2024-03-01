import Figure from "/src/components/figure"

# ステーカー向け

## 概要

あなたはステークすることが好きですか？ Astar NetworkまたはShiden Networkでお気に入りのプロジェクトを支援したいですか?

Discover [dApp Staking](/docs/learn/dapp-staking/), a unique mechanism that allows communities to support their favorite teams by staking ASTR or SDN with them. When staking ASTR or SDN on a dApp, users not only support the development of innovative apps but also receive staking rewards from inflation.

You can educate yourself more by reading the technical documentation about [dApp Staking](/docs/learn/dapp-staking/).

:::tip

ステーカーのためのdApp Stakingセクションを読む前に、Periods、Subperiods、Erasの概念を理解していることを確認してください。 同様に、dApp Staking V3パラメータには、 [ここ](/docs/use/dapp-staking/#periods-subperiods---eras) で説明されています。

:::

### 基本ステーキング報酬

dApp Staking報酬は、トークンが少なくとも1つの完全な`Era`に対してdAppにステークされ、次の`Era`(Era+1)に配布されている場合にのみ生成されます。

:::tip

ステーカーには、本日ステーキングを行うと、明日（次のEra）から報酬の獲得が開始され、明後日に報酬が配布されます。\
dAppsに関しては、今日ティアに参加すると、明日（次のEra）から報酬を獲得し始め、明後日に報酬が配布されます。

:::

ステーカーにとって、どのdAppにステーキングしても、APR（年間利回り）は全てのステーカーに対して同じです。
dAppsに関しては、ステーキング報酬はティアシステムに依存しており、ユーザーがステーキングしたトークンの量に基づいて、dAppsは報酬ティアに入ります。

報酬は、`stake` または `unstake` にしようとする前に請求される必要があります。
_(Astar Portalを使用している場合、Voting時に自動的に報酬を受け取ることができます)_

もしプロジェクトがdApp Stakingから **unregistered** された場合でも、そのプロジェクトにステーキングされたトークンは、トークンがステーキングされている限り、**basic rewards** を受け取り続けます。

:::warning

dApp Staking からアンステーキングする際、ロック解除期間中に報酬はありません。

:::

### ボーナスステーキング報酬:

ユーザーが **Voting Subperiod** 中にdApp(s)にステーキングし、その後の **Build\&Earn Subperiod** を通じて同額以上のステーキングを維持した場合、ユーザーはそのdAppの **Bonus Reward** を受け取る資格があります。

:::info

**例**

- ユーザーが `Voting Subperiod` 中、**dApp A** に1500 ASTR、**dApp B** に1000 ASTRをステーキング
- `Build&Earn Subperiod` 中、ユーザーは500 ASTRを **dApp B** から **dApp A** に移動
- 現在このユーザーは、**dApp A** に2000 ASTR、**dApp B** に500 ASTRを持っているため、まだ **dApp A** の `Bonus reward` を受け取る資格はあるが、`Voting Subperiod`の終わりにステーキングされたトークンよりも **dApp B** にステーキングされたトークンは少なくなったため（500 < 1000 ASTR）、**dApp B** のボーナス報酬を受け取る資格はなくなりました。
- **dApp B** のボーナス報酬を受け取る資格を得るためには、ユーザーは **dApp B** に追加で500 ASTRをステーキングして、合計1000 ASTRに達する必要があります。

:::

Period 中のボーナス報酬は、期間が終了した後にのみ請求することができます。

### その他:

- ステーキング後に、最低10 ASTRまたは5 SDNトークンを譲渡可能な額として保持する必要があります。
- **報酬を受け取るためには請求が必要であり、ステーキング報酬は週に一度請求することをお勧めします。**
- トークンをロック解除する際には、AstarとShidenの両方にロック解除期間が設けられています。 ロック解除期間の長さは [こちら](/docs/use/dapp-staking/for-stakers/#parameters) で確認することができます。\
  これは完全なブロック生成の時間がおよそ12秒である事に基づいてることに注意してください。 遅延が発生した場合は、ロック解除期間が少し長くなることがあります。

In case you have any questions, please check the [FAQ page](/docs/learn/dapp-staking/dapp-staking-faq/) in the Learn section or join our [Discord channel](https://discord.com/invite/astarnetwork).

### Other pages may be of interest:

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
