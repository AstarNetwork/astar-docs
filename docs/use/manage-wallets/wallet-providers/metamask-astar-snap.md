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
    <Figure caption='Review Elevated Permissions' src={require('/docs/use/manage-wallets/wallet-providers/img/07.png').default } width="100%" />
  </div>
  <div style={{ marginRight: '10px' }}>
    <Figure caption='Confirm Elevated Permissions' src={require('/docs/use/manage-wallets/wallet-providers/img/08.png').default } width="100%" />
  </div>
  <div>
    <Figure caption='Installation is Complete' src={require('/docs/use/manage-wallets/wallet-providers/img/09.png').default } width="100%" />
  </div>
</div>

## Review Account Details

The Astar Wallet snap is configured to default to the
[Shibuya Network](https://wiki.polkadot.network/docs/maintain-networks#westend-test-network),
which is the official test network of the Astar ecosystem. Notice the address
& the public key for the account that were derived using the entropy from your
MetaMask seed phrase. The address will change depending on the selected
network - for this example, only the Shibuya Network is used. The public key
does _not_ depend on the network and will always be the same. As with all
asymmetric cryptography systems, the public key is complemented by a private
key, which will be used to sign a message in the next step.

<Figure caption='Account Details' src={require('/docs/use/manage-wallets/wallet-providers/img/10.png').default } width="100%" />

## How to remove

## How to restore

## Disclaimer

## Conclusion

That concludes the Astar Wallet snap Portal dApp demo. If you have any
questions or believe you have found an error or bug, please
[open an Issue](https://github.com/AstarNetwork/metamask-snap-astar/issues/new).
