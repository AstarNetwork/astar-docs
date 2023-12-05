---
sidebar_position: 1
---

# MetaMask Astar Wallet Snap

import Figure from '/src/components/figure'

## Introduction

The Astar Wallet Snap extends MetaMask's functionality, specifically for blockchains built with Astar’s Substrate technology, powered by Polkadot. The Astar Wallet Snap enables you to quickly generate a Substrate wallet with MetaMask for signing transactions and interacting with decentralized applications (dApps) that utilize the @polkadot/extension-dapp package. You can seamlessly interact with all dApps in the Astar ecosystem through MetaMask, thereby expanding MetaMask's utility beyond Ethereum and EVM-compatible networks.

## How to install

Follow these steps to interact with the Astar Wallet snap
[Portal](https://portal.astar.network/). The
[source code](https://github.com/AstarNetwork/metamask-snap-astar/tree/master/packages/example)
for the example dApp is available as part of the repository. This guide assumes
that MetaMask is [installed](https://metamask.io/download/) and properly
configured.

## Connect to the Portal

Click the webpage button labeled "Astar Snap" with the MetaMask logo

<Figure caption='Connect to the Portal' src={require('/docs/use/manage-wallets/wallet-providers/img/01.png').default } width="100%" />

## Review & Accept Third-Party Software Notice

Click the arrow to view the entire third-party software notice and, if you
accept it, click the MetaMask "Third-party software notice" button labeled
"Accept" to accept the MetaMask third-party software notice.

<!-- markdownlint-disable MD033 -->
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Review 3rd-Party Software Notice' src={require('/docs/use/manage-wallets/wallet-providers/img/02.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Accept 3rd-Party Software Notice' src={require('/docs/use/manage-wallets/wallet-providers/img/03.png').default } width="100%" />
  </div>
</div>

## Review & Accept Connection Request

Review the connection request and, if you accept it, click the MetaMask
"Connection request" button labeled "Connect" to accept the Astar Wallet snap
connection request.

<Figure caption='Connection Request' src={require('/docs/use/manage-wallets/wallet-providers/img/04.png').default } width="40%" />

## Review Snap Permissions & Begin Installation

Click the arrow to view the entire list of permissions required by the Astar
Wallet snap and, if you accept them, click the MetaMask "Install snap" button
labeled "Install" to begin installing the Astar Wallet snap.

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Review Permissions' src={require('/docs/use/manage-wallets/wallet-providers/img/05.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Begin Installation' src={require('/docs/use/manage-wallets/wallet-providers/img/06.png').default } width="100%" />
  </div>
</div>

## Confirm Elevated Permissions & Complete Installation

Because the Astar Wallet snap has permission to control accounts for the
Astar & Shiden Networks (whose tokens carry real economic value), it's
necessary to review and confirm this elevated level of access. If you accept
this elevated level of access, check the boxes and click the MetaMask "Proceed with
caution" button labeled "Confirm" to confirm the elevated level of access and
install the Astar Wallet snap. Click the MetaMask "Installation complete"
button labeled "OK" to continue to the example dApp.

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Confirm Elevated Permissions' src={require('/docs/use/manage-wallets/wallet-providers/img/08.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Installation is Complete' src={require('/docs/use/manage-wallets/wallet-providers/img/09.png').default } width="100%" />
  </div>
</div>

## Connect the Snap Wallet

The Astar Snap Wallet is now configured. Notice the address
was derived using the entropy from your MetaMask seed phrase and the snapId.
The public key does _not_ depend on the network and will always be the same.

<Figure caption='Connect' src={require('/docs/use/manage-wallets/wallet-providers/img/10.png').default } width="100%" />

<Figure caption='Account Details' src={require('/docs/use/manage-wallets/wallet-providers/img/13.png').default } width="100%" />

## How to Remove

In MetaMask, click on the tripple dot icon on the top right of the extention, then Snap,
lastly click on **Astar Wallet**, scroll to the bottom and click **Remove Astar Wallet**

This action will not destroy your account or your funds. But deleting your MetaMask account and/or seed could.

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Remove Astar Wallet' src={require('/docs/use/manage-wallets/wallet-providers/img/11.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Remove Snap' src={require('/docs/use/manage-wallets/wallet-providers/img/12.png').default } width="100%" />
  </div>
</div>

## How to Restore

Simply reconnect to the [Portal](https://portal.astar.network/) and choose the Astar Snap Wallet again.
You will obtain the same address as before with all the funds attached.

## Disclaimer

XCM is not recommended

## Conclusion

That concludes the Astar Wallet snap [Portal](https://portal.astar.network/) install instructions. If you have any
questions or believe you have found an error or bug, please
[open an Issue](https://github.com/AstarNetwork/metamask-snap-astar/issues/new).
