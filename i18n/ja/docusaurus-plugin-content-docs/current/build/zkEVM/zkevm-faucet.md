---
sidebar_position: 4
title: Astar zkEVM Faucet
sidebar_label: Faucet
---

import sepolia from '/docs/build/zkEVM/img/metamask-sepolia-select.png'
import useBaseUrl from '@docusaurus/useBaseUrl';

## 概要

zKatana テストネット上の ETH を直接手にいれる faucet はありません。 [Astar Bridge](./bridge-to-zkevm.md) を使って Sepolia ETH を zKatana テストネットにブリッジすることができます。

## MetaMask を Sepolia テストネットに接続してください。

MetaMask を開き、左上にあるネットワークの一覧をクリックしてください。 「Show test networks」のトグルを開き、「Sepolia」を選択してください。

<div style={{textAlign: 'center'}}>
  <img src={sepolia} style={{width: 400}} />
  </div>

## Faucet

**Faucet** は Testnet トークンを獲得するために用意されているツールです。

公開されている Sepolia ETH の faucet はこちらから利用可能です：

- アカウント作成は必要ありません。 2.5 sETH 手に入ります。
- https\://faucet.quicknode.com/ethereum/sepolia - QuickNode により運営されています。 アカウント作成は必要ありません。 0.1 sETH 手に入ります。
- https\://sepoliafaucet.com/ - Alchemy により運営されています。 Alchemy のアカウントが必要です。 0.5 sETH 手に入ります。
- https\://www\.infura.io/faucet/sepolia - Infura により運営されています。 Alchemy のアカウントが必要です。

Sepolia ETH を手に入れたら、[Astar Bridge](./bridge-to-zkevm)を使用して Astar zKatana にアセットをブリッジしてください。
