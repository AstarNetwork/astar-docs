import Figure from "/src/components/figure"

# Astar zkEVM FAQs

## Często zadawane pytania

Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące Astar zkEVM, takie jak działanie, interakcja oraz związki z parachainem Polkadot Astar, Polygon i siecią Ethereum.

### Jaka jest relacja między Polygon a Astar zkEVM?

Zarówno Polygon PoS, jak i Astar zkEVM zapewniają rozwiązania skalujące dla sieci Ethereum. Istnieją jednak różnice w architekturze, mechanizmach konsensusu oraz możliwościach dostępności do danych.

Astar zkEVM w szczególności wykorzystuje technologię zk rollup warstwy drugiej Ethereum, aby osiągnąć lepszą skalowalność, bezpieczeństwo i równoważność EVM. Z drugiej strony Polygon PoS jest niezależnym łańcuchem bocznym Ethereum, który działa jako własna warstwa 1 z własnym mechanizmem konsensusu i zabezpieczeniami.

Most pomiędzy Ethereum a warstwą 2 jest pozbawiony zaufania (trustless). Oznacza to, że podczas gdy mosty pomiędzy Ethereum a innymi łańcuchami warstwy 1, takimi jak Polygon Pos, korzystają z usług konkretnego dostawcy mostów, który gwarantuje bezpieczeństwo, Astar zkEVM dziedziczy bezpieczeństwo Ethereum.

### Astar は Polkadot を離れようとしているのですか?

Astar は Polkadot のエコシステムから離れようとしているわけではありません。私たちはこれまでと同様に Polkadot を支えていきます。実際のところ、スマートコントラクト構築と新しいプロジェクトの最適なオンボーディングに向けた開発ツールという当初の目的とともに私たちはパラチェーンスロットを以降 2 年間分確保したところです。つまり、私たちは Polkadot に心の底から貢献しようとしているということです。

### 3 つの Virtual Machine (EVM、Astar zkEVM、Wasm) は全て相互運用可能なのですか?

はい。 Astar zkEVM はその EVM 等価性とアセットのブリッジや任意のチェーン間メッセージ送信、遠隔でのスマートコントラクト呼び出しをサポートする Layer Zero 等のパートナーを通して、ローンチ直後から既存のチェーンと相互運用可能になる予定です。

### Astar zkEVM ならではの特徴はなんですか?

Astar zkEVM ならではの主な特徴はいくつか存在します：

- 日本市場とグローバルのプロジェクトや企業、開発者との架け橋となる。
- 高い EVM 等価性
- ゼロ知識技術を通した高いスケーラビリティ
- Ethereum から継承したトラストレスな相互運用性とセキュリティ
- Ethereum メインネットと比較して明かに削減されたトランザクションコスト

### Astar zkEVM のガスの選択肢は?

ブリッジされた ETH が Astar zkEVM テストネットのガスに使用されるトークンで、ブリッジされた ASTR も将来的には同様に扱えるようにオプションとして追加されると思われます。

### Astar は zkEVM に向けて新たなトークンをリリースする予定ですか?

いいえ。Astar ネットワーク全体としての価値は ASTR トークンに反映されます。そして、私たちがビジネスの観点で行うすべてのことは ASTR トークンの価値を高めたり、維持したりすることを目標としています。私たちに、zkEVM に固有のトークンを新たに導入する意図はありません。

### zkEVM のエコシステムでエアドロップが行われる予定はありますか?

zkEVM エコシステムで参加者がインセンティブを得る方法はいくつもありますが、少なくとも現時点ではエアドロップは計画されていません。より詳しいことを知り、成長段階のうちにコミュニティに関わりたいという人は zkEVM ジャーニーキャンペーンをチェックしてみてください。

### Astar zkEVM は ZK-Rollup アーキテクチャを採用しているのですか? また、その理由はなぜですか?

Astar チームはテストネットに ZK-Rollup アーキテクチャを使用することを決定しています。ZK-Rollups は完全に安全性が担保されていて、Ethereum によって支えられています。

### Astar zkEVM 　と Ethereum メインネットの違いはなんですか?

Astar zkEVM は、主にガス料金がはるかに安く、トランザクションの処理能力が大幅に向上していることによって、Ethereum メインネットから差別化されています。この高い処理能力と低い取引コストの組み合わせは、高い取引速度を必要とするアプリケーションの開発者に、高コストの負担なしに理想的な環境を提供します。

### Astar zkEVM は Ethereum または Polygon PoS の Layer 2 になる予定ですか?

Astar zkEVM は Polygon の zkEVM 技術によって実現され、Ethereum Layer 2 上にデプロイされる予定です。

### すべてのエコシステムを平等にサポートするつもりですか？ それとも、何らかの優先順位がありますか?

Astar zkEVM は、Polygon Labs と協力して、日本市場に焦点を当てています。異なるソリューションを提供することで、特定の要件に応じて、さまざまな dApp 開発者や企業ソリューションの多様なニーズを容易にするでしょう。

### どうして Astar は zkEVM ネットワークとして Layer 2 に事業を拡大しているのですか?

当社のプロジェクトとパートナーは、成長傾向にあるゼロナレッジ技術とレイヤー 2 のソリューションにますます興味を示しています。ゼロナレッジソリューションを介して現在のブロックチェーンをスケーリングすることは、Ethereum エコシステムへのアクセスによって需要の成長に応じることができます。

### 現在の Astar エコシステムにとって Ethereum の Layer 2 をデプロイすることの利点はなんですか？

Ethereum 上に Layer 2 を立ち上げることは Astar エコシステムに幾つかの利点を提供します：

- **開発者たちにより多くの選択肢を**: layer 1 の Astar Substrate と layer 2 の Astar zkEVM の両方によって、開発者たちは開発に用いるより多くの環境とツールを手に入れることができます。
- より大きなコミュニティに拡大することができます。
- Astar は、Ethereum の Tier 1 プロジェクトとより密接に協力できます。これは、dApp ステーキングをはじめとする Astar のユニークな機能から Tier 1 プロジェクトが利益を得ることができることを意味します。
- Astar エコシステムは、取引数やアクティブユーザー数の増加、そして流動性の向上から利益を受けるでしょう。これらはすべてネットワークの成功にとって重要な要因です。
- ますます多くの日本企業と実世界のユースケースが Astar エコシステムに参加しています。

### Astar zkEVM は検閲耐性を備えていますか?

Astar zkEVM はプロトコルレベルで検閲に対抗できる構造を持っています。現在のアーキテクチャでは L1 にバッチを提案するシーケンサーが 1 つしかないものの、それは常に L1 ロールアップスマートコントラクトにバッチを直接送ることができるため、誰かを検閲することはできません。つまり、理論的にはシーケンサーがトランザクションを通過する際にそれを検閲できるかもしれませんが、 L1 スマートコントラクトにトランザクションを直接送信するためには検閲することはできないということです。

### 開発者はどのようにして Astar zkEVM 上での開発を開始できますか?利用可能な特定のツールや SDK はありますか?

開発に関する詳細情報は、テストネットのローンチと共に明らかにされます。
それに加えて、テストネットと同時に包括的なドキュメンテーションを公開し、開発者がすぐに開発を開始できるようにします。

Astar コミュニティ内の現在の開発者は、Ethereum エコシステムに存在する豊富な開発リソースから大きな利益を得るでしょう。Hardhat や Truffle を含むお馴染みの Ethereum の開発者向けツールは引き続き利用可能です。Astar は進化するにつれて、Astar zkEVM の特別な機能に合わせたツールや SDK を導入していきます。

### Astar zkEVM 上のガス価格は Ethereum や Polygon と比べてどのようになりますか?

Astar zkEVM 上での取引は Ethereum メインネット上のものより格段に安価ですが、それにもかかわらず、Polkadot 上の Astar Substrate と比較すると、より高価になるでしょう。その理由は、Astar zkEVM が Ethereum の Layer 2 ソリューションであるため、ネットワークのコストは主に Ethereum メインネットのコストに大きく影響を受け、これは Astar Substrate よりも大幅に高いからです。

### 将来的な Astar zkEVM の開発とデプロイのロードマップはどのようなものですか?

Astar zkEVM のテストネットは 2023 年 10 月（第 4 四半期）から段階的に展開され、テストネット環境のバトルテストが終了した後にメインネットを展開する予定です。zkEVM dApp 開発者が直ちに開発を始めるために必要なツールや機能、例えばクロスチェーンメッセージング（ブリッジング）やアカウントアブストラクションなどを提供するために、Astar zkEVM メインネットをインフラストラクチャパートナーと完全に連携して展開する予定です！

### 他のチェーンから Astar zkEVM 上にアセットをブリッジすることは可能ですか?もし可能であれば、どのようにすればいいですか?

- ETH はトラストレスなブリッジを用いて、スムーズに双方向への送金が可能です。
- ASTR とその他のトークンは LayerZero プロトコルを通してやりとりされます。

### トランザクションはどのようにして集められ、順序づけられますか?

1. ユーザーが、Metamask などのウォレットでトランザクションを開始し、それをシーケンサーに転送します。
2. トランザクションは、シーケンサーが処理をコミットすると、Astar zkEVM 上で確定されます。この時点で、Astar zkEVM 上では確定していますが、Ethereum 上では確定しておらず、これを**Trusted State**と呼びます。
3. シーケンサーはバッチデータを Ethereum のスマートコントラクトに提出します。これにより、どのノードでも信頼性のある方法で Ethereum から同期できるようになり、このフェーズが**Virtual State**と呼ばれます。
4. アグリゲーターは保留中のトランザクションを収集し、これらを検証し、Ethereum 上で確認するためのプルーフを構築します。
5. プルーフの検証によって、トランザクションは Ethereum 上で、出金のために必要不可欠な確定性を達成します。この状態を**Consolidated State**と表現します。

上記のプロセスは Astar zkEVM 上でのトランザクションフローの要約です。さらに詳しい情報が必要な場合は完全版の[transaction life cycle](https://wiki.polygon.technology/docs/zkevm/protocol/l2-transaction-cycle-intro/)ドキュメントをご覧になることをお勧めいたします。

### Astar zkEVM 上ではどのようなタイプの dApp がデプロイできますか?

Astar zkEVM は EVM 等価性を持つため、EVM 互換のどんな dApp も展開できます。これは、Ethereum 向けに開発された dApp が Astar の zkEVM 上に展開でき、ロールアップの性質によるスケーラビリティの向上と並列処理、そして低い取引コストの恩恵を受けることができることを意味します。

### Astar zkEVM エコシステム内ではどのようにしてコンセンサスが達成されますか?

Astar zkEVM 自体はロールアップとして存在し、独立したコンセンサスは不要です。したがって Astar zkEVM は Ethereum のセキュリティを受け継いでいます。

### ASTR トークンの保有者にとって、Asrar zkEVM の価値はなんですか?

Astar zkEVM は ASTR トークンを新たな 3 つの方法で使用します：

- ツール開発のガス代
- シーケンサーのバーニングメカニズム
- そしてネットワークアグリゲーターへのバーニングインセンティブ

このモデルはテストネットで評価され、ASTR トークンの保有者にとっての価値を最大化するために調整されます。最終的な設計はモデルのテストと分析に基づいて変更される可能性があります。

<Figure caption="Astar zkEVM の価値" src={require('./img/astar-zkevm-value.png').default } width="65%" />
