---
title: ETH <-> zkEVM Bridge
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

Astar bridge is a canonical Layer 1 &rarr; Layer 2 bridge connecting Sepolia and Astar zKatana testnets that is trustless at the protocol level. This means that if the infrastructure on Layer 2 powering Astar zkEVM is somehow compromised or goes offline, the assets and data integrity on Layer 1 are still provided by Ethereum, and anyone can spin up a (zkNode) Prover to recompute the transaction data. This is currently the safest option for bridging assets to the zkEVM as it does not inherit any additional counterparty risk compared to using 3rd party asset bridges.

## How to bridge ETH to the zkEVM using Astar Portal

1. Visit the [Astar Portal](https://portal.astar.network) and connect MetaMask. 


<div style={{textAlign: 'center'}}>
  <img src={walletselect} style={{width: 400}} />
  </div>


2. Use the network selector and switch to zKatana network, or allow MetaMask to switch to zKatana network for you.


<div style={{textAlign: 'center'}}>
  <img src={network} style={{width: 400}} />
  </div>


3. Click on the Bridge tab on the left-hand side. Ensure Sepolia is selected as Bridge source, and zKatana is selected as destination. After you have entered the amount of ETH to transfer, press the Confirm button. 


<div style={{textAlign: 'center'}}>
  <img src={bridge2} style={{width: 1000}} />
  </div>


4. Sign the MetaMask transaction. 


<div style={{textAlign: 'center'}}>
  <img src={bridge3} caption="Confirming" style={{width: 1000}} />
  </div>

:::note
Once the transaction shows as confirmed on the MetaMask Activity tab, it will take approximately 5-10 minutes for the Astar Portal and MetaMask to update your balance on the zKatana network side.
:::

<div style={{textAlign: 'center'}}>
  <img src={bridge4} caption="Confirmed" style={{width: 1000}} />
  </div>


  You should now see the bridged ETH within MetaMask for use on Astar zkEVM. Visit the [smart contracts section](/docs/build/zkEVM/smart-contracts/) to start building!

  

