---
sidebar_position: 4
title: Astar zkEVM Faucet
sidebar_label: Faucet
---
import sepolia from '/docs/build/zkEVM/img/metamask-sepolia-select.png'
import useBaseUrl from '@docusaurus/useBaseUrl';

## 概要

zKatanaテストネット上のETHを直接手にいれるfaucetはありません。 [Astar Bridge](./bridge-to-zkevm.md) を使ってSepolia ETHをzKatanaテストネットにブリッジすることができます。

## MetaMaskをSepoliaテストネットに接続してください。

MetaMaskを開き、左上にあるネットワークの一覧をクリックしてください。 「Show test networks」のトグルを開き、「Sepolia」を選択してください。

<div style={{textAlign: 'center'}}>
  <img src={sepolia} style={{width: 400}} />
  </div>

## Faucet

**Faucet** は Testnet トークンを獲得するために用意されているツールです。

公開されているSepolia ETHのfaucetはこちらから利用可能です：

- アカウント作成は必要ありません。 2.5 sETH 手に入ります。
- https\://faucet.quicknode.com/ethereum/sepolia - QuickNodeにより運営されています。 アカウント作成は必要ありません。 0.1 sETH 手に入ります。
- https\://sepoliafaucet.com/ - Alchemyにより運営されています。 Alchemyのアカウントが必要です。 0.5 sETH 手に入ります。
- https\://www\.infura.io/faucet/sepolia - Infuraにより運営されています。 Alchemyのアカウントが必要です。

Sepolia ETH を手に入れたら、[Astar Bridge](./bridge-to-zkevm)を使用して Astar zKatana にアセットをブリッジしてください。
