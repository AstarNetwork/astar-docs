---
sidebar_position: 4
title: ASTR Liquid dApp Staking
---

import Figure from "/src/components/figure"

# Bifrost Finance による ASTR Liquid dApp Staking

このページでは、**Astar zkEVM**上でBifrost Liquid Stakingソリューションを通じてAstar dApp Stakingに参加する方法について説明します。
[dApp Stakingについて詳細情報](/docs/use/dapp-staking/index/)。

Astar L1 (SubtrateまたはEVM)上に`ASTR`を持っている場合は、[このガイド](/docs/use/zkevm-guides/Bridge-Astar-EVM/) を参照して、それらをAstarからAstar zkEVMに転送してください。

## Bifrost Finance

*Astar Foundationは、当社のドキュメンテーションで紹介される第三者アプリケーションの利用により生じる直接的、間接的、偶発的、特別、結果的、または例示的な損害について、一切の責任を負わないことをご了承ください。*

[Bifrost](https://bifrost.app/) は、Polkadotに基づくモジュラー型、スケーラブル、非預託型のオムニチェーンリキッドステーキングパラチェーンです。それはXCMを通じてWeb3のための標準化された、高利回り、安全で信頼性のある元本保証付き資産を提供し、任意のLSTを任意のチェーンで使用するオムニチェーンビジョンを実現しています。[詳細情報](https://docs.bifrost.finance/)。

Bifrostは、その[SLPx Omichain protocol](https://omni.ls/)  (OmiLS)を介してAstar zkEVM上で利用可能であり、これはAstar EVMやAstar zkEVMなどのEVMチェーンからBifrostパラチェーンにLSDトークンを発行するクロスチェーンメカニズムを可能にします。

ASTRトークンのLiquid Stakingバージョンは**vASTR** (voucher ASTR)と呼ばれ、ステーキングされたASTRのシャドウトークンで、完全な下位のASTRリザーブとASTR dApp Staking報酬の利回り特性を持っています。ユーザーはASTRをAstar zkEVM上のBifrost OmniLSプロトコルに預け、vASTRを返してもらうことができ、vASTRはオープンマーケットで取引されるか、ASTRに引き換えることができます。vASTRを保持することは、ASTRのステーキングポジションを保持することと同等で、ステーキング報酬はvASTRの交換価格を上昇させます。

:::info
ステーキング報酬に10%の手数料を課金します。
:::

## ASTRをステーキングしてvASTRを受け取る方法：

1. [Bifrost OmniLS](https://omni.ls/) にアクセスし、`vASTR`を選択し、**Astar zkEVM**ネットワーク上のEVMウォレットを接続します。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_1.png').default} width="70%" />

2. Liquid Stakingでステーキングしたい`ASTR`の量を入力します。その結果、ASTR/vASTRの比率に従って`vASTR`トークンを受け取ります。
*クロスチェーン取引手数料（ステーキング額から差し引かれる）を考慮に入れてください。*

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_2.png').default} width="80%" />

3. `Approve`をクリックしてBifrostに資金へのアクセスを許可し、ウォレットでトランザクションに署名します。

4. `Stake Now`をクリックしてトランザクションを開始し、ウォレットで署名します。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_3.png').default} width="80%" />

5. トランザクションは複数のネットワーク（*Astar zkEVM、Astar EVM、Bifrost*）で行われるため、トランザクションがファイナライズされ、vASTRがウォレットに表示されるまでに**最大10分**かかることがあります。
6. vASTRトークンを受け取ったら、それらはAstar zkEVMで使用する準備ができています。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_4.png').default} width="80%" />

:::info
手動でEVMウォレットにトークンを追加するには、以下のコントラクトアドレスを使用します。
- **vASTR:** `0x7746ef546d562b443AE4B4145541a3b1a3D75717`
:::

## vASTRをアンステーキングしてASTRを受け取る方法：

1. [Bifrost OmniLS](https://omni.ls/) にアクセスし、`vASTR`を選択し、**Astar zkEVM**ネットワーク上のEVMウォレットを接続します。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_1.png').default} width="70%" />

2. **Unstake Panel**に切り替え、引き換え(償還)たい`vASTR`の量を入力します。その結果、ASTR/vASTRの比率に従って、ステーキング報酬を含む`ASTR`トークンを受け取ります。
*クロスチェーン取引手数料（ステーキング額から差し引かれる）を考慮に入れてください。*

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_5.png').default} width="90%" />

3. `Approve`をクリックしてBifrostに資金へのアクセスを許可し、ウォレットでトランザクションに署名します。

4. `Unstake Now`をクリックしてトランザクションを開始し、ウォレットで署名します。

:::warning
アンステーキング期間は**0日から10日**です、ご注意ください。
:::

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_6.png').default} width="90%" />

5. トランザクションは複数のネットワーク（*Astar zkEVM、Astar EVM、Bifrost*）で行われるため、トランザクションがファイナライズされ、アンステーキングプロセスが開始されるまでに**最大10分**かかることがあります。

6. アンステーキング期間が終了すると、あなたのASTRトークンと報酬は自動的にあなたのウォレットに届きます。
