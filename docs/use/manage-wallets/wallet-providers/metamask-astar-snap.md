---
sidebar_position: 1
---

# MetaMask Astar Wallet Snap

import Figure from '/src/components/figure'

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

## Acquire Tokens for the Shibuya Test Network

Go to the token section and click on the faucet button
for the Shibuya Network. If you are not a robot, check the box
labeled "I'm not a robot" (the faucet for the Shibuya Network does not currently
support robots 🤖). Click the button labeled "Confirm".

Optionally, you can view the transaction (extrinsic) details for the faucet
transaction. If you'd like to view these details, copy the transaction hash from the notification toast.
Visit [https://shibuya.subscan.io](https://shibuya.subscan.io) and search for the hash.

Return to the portal dApp and review your account balance - it should be 10
SBYs.

<Figure caption='Click Faucet Button' src={require('/docs/use/manage-wallets/wallet-providers/img/11.png').default } width="100%" />
<Figure caption='Review Faucet Confirmation' src={require('/docs/use/manage-wallets/wallet-providers/img/12.png').default } width="100%" />
<Figure caption='Review Faucet Transaction' src={require('/docs/use/manage-wallets/wallet-providers/img/13.png').default } width="100%" />

## Transfer Tokens to Another Account

Enter a valid Shibuya Network address in the portal dApp's "Transfer" tab and
field labeled "To" - for example, use the address:
`aCiXU739xA4wGb8Sipp8T1XhDsfcLACmRFJTSYqCiLqWdJ2`. In the "Transfer" tab, amount field
labeled "SBY" enter a relatively small (e.g. 10) number that represents the
number of tokens to transfer. Click the "Transfer" tab button labeled
"Confirm". Review the MetaMask notification that describes the action that will be
taken and, if you approve, click the MetaMask button labeled "Approve". After a
second or two, a dialog with transaction details will appear at the top of
the page. The transaction details notification toast will appear in the portal
dApp's and you can click it.

<Figure caption='Enter Account Address' src={require('/docs/use/manage-wallets/wallet-providers/img/18.png').default } width="100%" />
<Figure caption='Review Faucet Confirmation' src={require('/docs/use/manage-wallets/wallet-providers/img/19.png').default } width="40%" />
<Figure caption='Review Faucet Transaction' src={require('/docs/use/manage-wallets/wallet-providers/img/20.png').default } width="100%" />

## Conclusion

That concludes the Astar Wallet snapPortal dApp demo. If you have any
questions or believe you have found an error or bug, please
[open an Issue](https://github.com/AstarNetwork/metamask-snap-astar/issues/new).
