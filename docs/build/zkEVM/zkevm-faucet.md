---
sidebar_position: 4
title: Astar zkEVM Faucet
sidebar_label: zkEVM Faucet
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**Astar Faucet** is the official tool provided by Astar team to obtain Testnet tokens. It functions very similar to other such tools provided by ecosystem partners like Quicknode and Alchemy.

The zkEVM ETH faucet allows anyone to request bridged Sepolia ETH tokens on the Astar zkEVM network. Earlier, it was a bottleneck for developers to obtain Sepolia ETH from a faucet and then bridge it over to Astar zkEVM using the Wallet Suite.

With the latest offering, you can seamlessly explore Astar zkEVM's functionalities without the need to utilize real ETH tokens.

:::info

Astar zkEVM network faucet provides 0.02 ETH in a single user request.

:::

## Using the Astar zkETH Faucet

- Navigate to [**faucet.Astar.network**](https://faucet.polygon.technology/)
   <img src={useBaseUrl("img/zkevm/faucet-zketh.png")} />

- Select the network where you want to receive the test tokens. In our case, we will select **Astar zkEVM**.

- Select the type of Testnet token that you want to receive. In our case, we only have the option to receive **zkEVM ETH** which is also the default option.

- Enter your **wallet address** (you can copy it from your MetaMask or any wallet that supports testnet tokens)

- Click on the **Submit** button to send your token request

- Click **Confirm** to finalize the transaction

   <img src={useBaseUrl("img/zkevm/confirm-zketh.png")} />

- After confirmation, you will receive the requested Testnet tokens within ~1 minute. You can also verify the transaction by clicking on the Astarscan link.

   <img src={useBaseUrl("img/zkevm/success-zketh.png")} />
