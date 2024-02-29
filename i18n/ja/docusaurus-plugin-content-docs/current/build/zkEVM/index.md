import introduction from "/docs/build/img/buildZkEvm.png" 

# Astar zkEVM 上での開発

<div style={{textAlign: 'center'}}>
    <img src={introduction} style={{width: 1200}} />
</div>

## What is Astar zkEVM?

Astar zkEVM は、Polygon の Chain Development Kit (チェーン開発ツール、CDK) および最先端のゼロ知識暗号技術を活用し、オフチェーンでのトランザクション実行を可能にする Ethereum Layer-2 スケーリングソリューションです。ファイナリティおよびセキュリティは、Ethereum によって保証されます。 主要なパートナーとの連携を通じて、Astar zkEVM は Ethereum エコシステム内に存在する膨大な開発者ベースと確立されたツールセットを有効活用することができ、主に以下のような特徴を誇ります：

- **Ethereum や Astar Substrate EVM よりも高い TPS(Transaction Per Second)** - zk ロールアップのアーキテクチャを活用し、トランザクションは Layer 2 上で並列化、バッチ化されて Layer 1 に送信されます。これにより、高性能を必要とする Web3 ゲームや DeFi アプリケーションのパフォーマンスが大幅に向上します。
- **Ethereum と比較して安いトランザクション手数料** - 上述の通り、トランザクションのバッチ処理を行うことで安いトランザクション手数料を実現しています。
- **完全な EVM 等価性** - EVM 互換性ではなく、EVM 等価性を実現しています。 すなわち、Ethereum 上のスマートコントラクトが Astar zkEVM 上でも同じように動いているということです。 詳細は[smart contract](/docs/build/zkEVM/smart-contracts/)をご確認ください。
- **ネイティブの Account Abstraction** - Astar zkEVM は、エンドユーザーの UX を刷新し、シームレスにするために設計された機能をネイティブで提供しています。 詳細については、[Account Abstraction](/docs/build/zkEVM/integrations/account-abstraction/)を参照して、UX を向上させる方法についてご覧ください。
- **著名なパートナー** - Astar zkEVM は、開発者の信頼を得ている組織やブランドにサポートされています。 詳細については、[integrations](/docs/build/zkEVM/integrations/)を参照して、サードパーティのサービスを提供する企業や組織に関する情報をご覧ください。
- **相互運用性とマルチチェーン** - Astar zkEVM では、Ethereum と Polkadot のエコシステム間の相互運用性をサポートし、コミュニティを結びつけ、広く知られているマルチチェーンの理念を通じて Web3 のアクセシビリティを強化しています。
- **確立されたツールとライブラリ** - Remix、Hardhat、および Open Zeppelin などの、既に Web3 開発者が使い慣れているツールと互換性があります。

## セクションの全体像

以下のセクションでは、開発環境をセットアップする手順を詳しく説明し、Astar zkEVM 上で高いスケーラビリティを持つ dApp とシームレスなユーザーオンボーディングを実現するためによく用いられるツールやサービスを紹介します。

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
