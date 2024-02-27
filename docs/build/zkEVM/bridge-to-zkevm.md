---
sidebar_position: 3
title: Bridge to Astar zkEVM
sidebar_label: Bridge to zkEVM
---

import bridge1 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya1.jpg'
import bridge2 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya2.jpg'
import bridge3 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya3.jpg'
import bridge4 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya4.jpg'
import network from '/docs/build/zkEVM/img/zKatana-network1.jpg'
import network1 from '/docs/build/zkEVM/img/add_zkEVM_network1.jpg'
import network2 from '/docs/build/zkEVM/img/add_zkEVM_network2.jpg'
import walletselect from '/docs/build/zkEVM/img/wallet-select.jpg'

## Overview

Here you will find information about how to bridge assets to the Astar zkEVM, both to **zKatana testnet** and to **Astar zkEVM mainnet**. Presently, there are two options for bridging assets to the zkEVM:

1. Ethereum L1 to Astar zkEVM -> Bridged ETH is the native token required for testing and deployment of dApps on the Astar zkEVM, so before using the network, developers need to bridge some ETH from Layer 1 to Layer 2. Accessible through the Astar Portal, which can take approximately 10-30 minutes, depending on network usage.
2. _Astar Parachain to Astar zkEVM (currently under development) -> A 3rd-party asset bridge or message network facilitating locking and minting of synthetic (wrapped) assets between Astar Substrate EVM and Astar zkEVM. See the [integrations section](/docs/build/zkEVM/integrations/bridges-relays/) for more information about how to use 3rd-party bridge services and compatible assets._

### Transfer ETH using the Astar Portal

Visit the [Astar Portal](https://portal.astar.network) and connect MetaMask. This example is for the testnet but same applies for the mainnet.


<div style={{textAlign: 'center'}}>
  <img src={walletselect} style={{width: 400}} />
  </div>


Use the network selector and switch to zKatana network, or allow MetaMask to switch to zKatana network for you.


<div style={{textAlign: 'center'}}>
  <img src={network} style={{width: 400}} />
  </div>


Click on the Bridge tab on the left-hand side. Ensure Sepolia is selected as Bridge source, and zKatana is selected as destination. After you have entered the amount of ETH to transfer, press the Confirm button.


<div style={{textAlign: 'center'}}>
  <img src={bridge2} style={{width: 1000}} />
  </div>


Sign the MetaMask transaction.

:::note
Once the transaction shows as confirmed on the MetaMask Activity tab, it will take approximately 5-10 minutes for the Astar Portal and MetaMask to update your balance on the zKatana network side.
:::


<div style={{textAlign: 'center'}}>
  <img src={bridge3} caption="Confirming" style={{width: 1000}} />
  </div>
<div style={{textAlign: 'center'}}>
  <img src={bridge4} caption="Confirmed" style={{width: 1000}} />
  </div>


  You should now see the bridged ETH within MetaMask for use on Astar zkEVM.
