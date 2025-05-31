---
sidebar_position: 2
sidebar_label: Arthswap
title: Buying ASTR on a DEX using Arthswap
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Figure from '/src/components/figure'


There are a few DEXs built on the Astar network. Arthswap is one of them, and since it's built on EVM, you need to interact with the Astar EVM environment.

## Setting up MetaMask or any Astar EVM wallet

Go Metamask extension -> Settings -> Network -> Add Network

<Figure src={require('/docs/use/get-started/astar-evm-wallet/wallet/metamask/img/metamask_8.png').default} width="100%" /> 

<br></br>

<TabItem value="astar" label="Astar Network" default>

|   | Public endpoint Astar |
| --- | --- |
| Network name | Astar Network |
| New RPC URL | Astar Team: https://evm.astar.network |
|         | BlastAPI: https://astar.public.blastapi.io |
|         | Dwellir: https://astar-rpc.dwellir.com |
|         | OnFinality: https://astar.api.onfinality.io/public |
| Chain ID | 592 |
| Currency symbol | ASTR |
| Block Explorer URL | https://astar.blockscout.com/ |

</TabItem>

## Bridge Ethereum Assets To Astar Network

To buy ASTR, you need to have other assets you can use to swap. One way to do this is to bridge your Ethereum assets such as wETH, USDT and USDC to Astar Network.

1. Go to [Arthswap](http://app.arthswap.org/#/swap);
2. Click on `Bridge` and you will be taken to [Celer Bridge](https://cbridge.celer.network/#/transfer);
3. Go to `Transfer`, select **From Ethereum** and **To Astar** and connect Astar EVM wallet;
4. Select the asset that you would like to bridge e.g USDT;
5. Click `Transfer` and you will have USDT on Astar Network;
6. You will have to pay the bridge fee and you will also receive some ASTR tokens for gas fees which you need when interacting on Astar Network.

<Figure src={require('/docs/use/how-to-guides/layer-1/get-astr-token/img/celerbridge_1.png').default } width="70%" /> 

## Swap On Arthswap

1. Go to [Arthswap](http://app.arthswap.org/#/swap) and connect your Astar EVM wallet;
2. Select swap USDT to ASTR and enter the amount you want;
3. Execute the swap and sign the transaction;
4. You now have ASTR tokens in your wallet;

Once you have ASTR in your Astar EVM wallet, you can use them for dApp staking on Astar EVM or send them to a native Astar wallet if you want to dApp staking on Astar native.
