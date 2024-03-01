---
sidebar_position: 0
---

import Figure from "/src/components/figure"

# dAppの管理とリワードの受け取り

dAppオーナーになると、Astar portalのAssetページに**Your Project**という新たなパネルが現れます。

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Project.png').default} width="100%" />

**Your Project**のパネルからあなたのdAppをクリックすると、開発者報酬の受け取りからプロジェクト情報の編集まで、dAppに関わるすべての項目へのアクセスが可能です。

### ダッシュボード：

- **現在のティア：** あなたのdAppが割り振られている現在のティア。 詳細は[ティアシステム](/docs/use/dapp-staking/for-devs/#tier-system-and-rewards)をご覧ください。
- \*\*ステーカーの人数：\*\*あなたのdAppにステークしている全ユーザーの数
- **合計で稼いだ報酬：** dApp Stakingプログラムで手に入れたトークンの総額

<Figure src={require('/docs/use/dapp-staking/for-devs/img/dApp_owner_page.png').default} width="80%" />

### あなたが得られる報酬：

ここでは、あなたがこれまでにどれだけのトークンを稼いだかと、あなたがまだクレームしていない報酬を見ることができます。

<Figure src={require('/docs/use/dapp-staking/for-devs/img/dApp_rewards.png').default} width="100%" />

トークン報酬を受け取るには、**Claim your rewards** ボタンをクリックし、ウォレットでトランザクションに署名してください。
報酬を請求すると、ペンディング (受け取り待ち) の報酬がすべてウォレットに入ります。

### 編集方法：

- **プロジェクトページの編集：** あなたのdApp Stakingプロジェクトの情報を編集することが可能です。
- **オーナー情報の編集：** もし登録されているスマートコントラクトのアドレスや開発者報酬を受け取るアドレスを変更したい場合に使用します。
- **プロモーションカードの追加：** キャンペーンを開催する場合、レビューを受けた上でAstar PortalのdApp Stakingセクションに追加されるプロモーションカードを作成することが可能です。
