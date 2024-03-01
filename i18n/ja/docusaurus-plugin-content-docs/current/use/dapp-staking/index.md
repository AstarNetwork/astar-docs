# dApp Staking

AstarとShiden NetworkのdApp Stakingでは、個人が特定のdAppを支援するためにASTR/SDNトークンを指名できるようにする新しいアプローチが導入されています。

ネットワーク上で生成されるすべてのブロックについて、インフレのセグメントはdApp Stakingに特に割り当てられます。 これらの報酬は、dAppの開発者と関係するステーカーの間で分割され、開発者とステーカーの両方に利益を提供します。

dAppが人気を獲得し、より多くのステークホルダーを引き付けるにつれて、開発者はブロック報酬のより大きなシェアを得ることができます。

重要なことは、dAppステーキングプログラムは包括的であり、zkEVMとWasmテクノロジーを利用したプロジェクトに対応していることです。

dApp Stakingの詳細については、[学習セクション](/docs/learn/dapp-staking/)の包括的なプレゼンテーションを参照してください。

### Periods、SubperiodsおよびERA:

`Eras`: ブロック単位で測定された時間単位。 かなり短い、dAppの基本的な時間分割;

**dApp Staking** は **Period** に分割されており、2 つの **Subperiods**、 **Voting** と **Build\&Earn**で構成されています。

**Voting**はステーカーがトークンをステーキングするためにdApp(s)に投票を決定し、dAppsの所有者とチームがプロダクトを市場に出し、キャンペーンを行いステーカーを惹きつけるSubperiodです。\
投票のSubperiod中にステーキング報酬は生成されませんが、このSubperiod中にユーザーが投票してdAppsにステーキングした場合、**ボーナス報酬**の対象となります;

:::important

dAppの所有者とチームにとってVoting Subperiodの前および最中に組織され、自プロダクトを市場に出し、キャンペーンを行い、この期間中にできるだけ多くのステーカーとトークン惹きつけることは非常に重要です。

:::

**Build\&Earn**はステーカーとdAppsが報酬を獲得し始める時のSubperiodです。
このSubperiod中にトークンをステークすることで、獲得する報酬を増やすことができます。 ただし、Build\&Earn 中に賭けられた金額はボーナス報酬には貢献しません。

**Build\&Earn** Subperiodの終了時に、現在のPeriodは終了します。 新しいPeriodが始まり、すべてのトークンは dApp(s) から `unstaked` ですが、`locked` のままです。 新しい**Voting Subperiod**が始まります。

ユーザーまたはdApp所有者として、dApp Stakingを使用する前に以下のパラメータを考慮する必要があります。

### パラメーター:

|                                | Shibuya                          | Shiden Network | Astar Network |
| ------------------------------ | -------------------------------- | -------------- | ------------- |
| Period あたりの Eras               | 28 (\~7日間)    | TBD            | TBD           |
| Eras Per Voting Subperiod      | 8 (\~48時間)    | TBD            | TBD           |
| Eras Per Build\&Earn Subperiod | 20 (\~120時間)  | TBD            | TBD           |
| Blocks Per Era                 | 1800 (\~6時間)  | TBD            | TBD           |
| アンロック期間                        | 4 Eras (\~1日) | 5 Eras（～5日）    | 10 Eras（～10日） |
| ステークの最小金額                      | 5 SBY                            | 50 SDN         | 500 ASTR      |

### ユーザー＆開発ガイド

以下のセクションでは、ステーカーまたはdAppオーナーとしてdApp Stakingを利用するために必要なすべてのヘルプを見つけることができます。

dApp Staking v3への完全移行までは、dApp Staking V2のガイドも参照できます。

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>