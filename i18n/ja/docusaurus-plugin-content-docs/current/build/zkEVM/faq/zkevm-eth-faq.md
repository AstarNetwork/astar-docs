---
sidebar_position: 2
title: zkEVMとEVM等価性に関するよくある質問
sidebar_label: EVM等価性
---

このドキュメントでは、Astar zkEVM のEVM等価性に関するよくある質問を解説します。 詳細については、[Polygon zkEVM documentation](https://wiki.polygon.technology/docs/category/zkevm-protocol/)をご覧ください。

***

### EVM互換性とEVM等価性の違いは何ですか?

最終的な目標は**互換性**ではありません。 究極の目標は**等価性**です。 **互換性のあるソリューションでは、既存のアプリのほとんどを動作させることができますが、コードの変更を要する場合があります**。 また、互換性があっても、開発者ツールが動作しない可能性があります。

**zkEVMはEVM等価性を目指して開発されています。なぜなら、EVM等価性によりEthereum上に構築されたアプリ、ツール、インフラは、一切の変更を必要とせず、すぐにAstar zkEVMに移植できるからです**。 すなわち、インフラがローンチ初日から100%動作するように設計されているのです。 これは、以下の理由により非常に重要です:

1. **開発チームはコードを変更する必要はありません。** むしろ、変更によりセキュリティの脆弱性が生まれる可能性があります。
2. **コードの変更は必要ありません**。 コードの変更に伴う監査が不要なため、時間とお金を節約できます。
3. **zkEVMは突き詰めると、Ethereumのセキュリティと分散性から恩恵を受けます。** これは、Ethereum上でトランザクションが確定されるためです。
4. Astar zkEVM は**活気に満ちたアクティブなEthereumコミュニティの恩恵を受けることができます**。
5. ローンチ時点でEthereum上に構築されたdAppと互換性があるため、**ユーザーの素早いオンボーディング**が可能になります。

### どうしてEVM等価性が必要なのか？

Ethereumは単なるブロックチェーンではありません。 スマートコントラクト、開発ツール、インフラ、ウォレットが豊富に存在するエコシステムなのです。 そして同時に、開発者、監査役、ユーザーの活気に満ちたコミュニティでもあります。

Ethereumをスケールさせる最善の方法は、このEthereumエコシステムとの等価性を維持することです。 Astar zkEVMはユーザーと開発者に、絶大なスケーラビリティとUX (ユーザー体験) の向上を備えたEthereum L1と同じレベルの環境を提供します。

### EVMオペコードはAstar zkEVM上でどのように異なりますか？

Astar zkEVM では以下の EVM オペコードが異なります: **SELFDESTRUCT**、**EXTCODEHASH**、**BLOCKHASH**、**NUMBER**

### Astar zkEVMがサポートしているプリコンパイル済みスマートコントラクトの機能を教えてください。

zkEVMでは、以下のプリコンパイル済みコントラクトがサポートされています: **ecRecover** と **identity** 。

他のプリコンパイル済みコントラクトは zkEVM のステートツリーに影響を与えず、 `revert` として扱われます。 全てのガスを前のコンテキストに戻し、 `success` フラグを "0" に設定します

### 現在のzkEVMバージョンに存在しないプリコンパイル済みコントラクトを教えてください。

Astar zkEVMは、**SHA256**、**BLAKE**、**PAIRINGS**以外の全てのプリコンパイル済みコントラクトをサポートしています。

### Type 2のEVM等価性はいつ達成されますか？

現在、Astar zkEVMはType 3のEVM等価性があります。 プリコンパイル済みのコントラクトがすべてサポートされた時、Type 2 または完全なEVM等価性を実現することができます。

### Astar zkEVM でのロールバックとリバートのプロセスを教えてください。 EVMと類似の構造でしょうか？

ロールバックとリバートのプロセスは、通常のEVMと似たものです。 revertを起こすエラーまたは条件がある場合は常に、`REVERT` 命令を使用して実行を停止し、エラーメッセージを返します。

ロールバックは、無効なZKプルーフが原因で発生することもあります。(これは、Astar zkEVMに未定義動作を引き起こします。) この場合、トランザクションは中断され、すべての状態変更が取り消されます。

### Astar zkEVMはどのようにイベントやログを処理しますか?

Astar zkEVMは、イベントを発生させ、将来参照するためにブロックチェーンにログを記録するという、他のEVMと同様の方法でイベントやログを処理します。

### Astar zkEVMとEthereumのエラーメッセージの共通点を教えてください。

Astar zkEVMは、Ethereumのエラーと高い互換性を持っています。 Astar zkEVMはEthereumよりも制約が多く、異なる概念(例えばブロックの代わりにバッチを用いるなど) を使用することに注意する必要があります。 したがって、より精密で種類の多いエラーが発生します。(例えば、Astar zkEVMにおけるガスの構想はより細分化されています)。

### ChainlinkはAstar zkEVMでトークン(ERC677) を使用できますか?

Ethereumと同じように、Astar zkEVMにはどのようなスマートコントラクトも展開できるので、任意のトークンをデプロイできます。 ERC677をEthereumに送金したい場合、ブリッジはERC20トークン(双方向ブリッジ) に変換し、送金します。

ブリッジには、NFTやその他の規格のトークンを含むあらゆる値をブリッジできる、**低レベルでのメッセージ受け渡し機能**もあります。
