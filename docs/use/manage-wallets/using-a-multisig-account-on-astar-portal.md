---
sidebar_position: 4
---

# Use a Multisig Account on Astar Portal

This guide will assist you in utilizing a multisig account on Astar Portal via PolkaSafe.

:::danger
At the time of this release, PolkaSafe only supports Astar Network.
:::


## **Prerequisites**

- Install a Substrate wallet extension (such as Polkadot.js, SubWallet, or Talisman) on your browser.

- Prepare at least two Astar wallet addresses [See reference](/docs/use/manage-wallets/using-a-multisig-account-on-astar-portal.md)

## Understanding the Benefits of Multisig Accounts

Multisig accounts offer several key benefits, particularly in terms of security, control, and flexibility:

1. **Enhanced Security:** The need for more keys reduces the risk of unauthorized access.
2. **Reduced Risk:** You won't lose access to the account even if you lose a single key.
3. **Access Control:** Multisig allows multiple users to share control over an account.
4. **Flexibility:** You can customize the number of required signatures for transactions.
5. **Dispute Resolution:** Multisig prevents unilateral decisions by requiring majority or total agreement.
6. **Auditability:** Multisig accounts provide a clear record of approved transactions.

## Creating a Multisig Account on PolkaSafe

PolkaSafe integrates with Polkadot's multisig solution, offering seamless user experience and robust security features for managing assets in the Polkadot ecosystem. You can use the multisig accounts created on PolkaSafe with the Astar Portal.

1. Visit [PolkaSafe](https://app.polkasafe.xyz/).
2. Select  Astar network and click 'Connect Wallet.'
![multisig_guide_1.png](img/multisig_guide_1.png)
3. Choose a wallet and select an account with more than 0 ASTR.
4. Sign the message via the wallet extension.
5. Select 'Create Multisig.'
![multisig_guide_2.png](img/multisig_guide_2.png)
6. Choose the signatory addresses to include in the multisig account. You can select from your wallet or add an address manually.
:::danger
Ledger accounts cannot be multisig signatories
:::
![multisig_guide_3.png](img/multisig_guide_3.png)
7. Input the threshold number (the minimum required signatures to authorize and execute a transaction) and name the multisig account.
8. Sign the message to add a small Existential Deposit to the multisig account.
![multisig_guide_4.png](img/multisig_guide_4.png)
9. Optionally, you can enable proxy signatory management to allow enhanced functionalities for your multisig account. [See reference](/docs/use/manage-wallets/pallet-proxy.md)
10.  Now, you can manage your multisig account on PolkaSafe.
![multisig_guide_5.png](img/multisig_guide_5.png)

## (Optional) Enabling Proxy Signatory Management for Your Multisig Account on PolkaSafe
Adding a proxy account to your multisig account enhances functionality and flexibility. A proxy allows signatories to alter key parameters and setup account backups. Furthermore, the proxy wallet address remains unchanged even when the multisig account's consensus conditions are modified. A proxy can:

1. Edit the Threshold: Alter the number of required signatures for transaction authorization.
2. Modify Signatories: Change the signatories of the multisig account.
3. Create Backups: Establish a backup of the multisig account, facilitating seamless asset transfers. In other words, all assets will be in the proxy account. This means that when you add or remove any signatory, the multisig address will change, but the proxy address will not. Therefore, assets in the proxy account won't be lost.

You can add a proxy to your multisig account either during multisig creation or from the account dashboard.

![multisig_guide_12.png](img/multisig_guide_12.png)
![multisig_guide_13.png](img/multisig_guide_13.png)

Switch to the proxy account by clicking the switch icon.
![multisig_guide_14.png](img/multisig_guide_14.png)

The address should now display as the proxy account.
![multisig_guide_15.png](img/multisig_guide_15.png)

:::tip
Editing a multisig account (e.g., adding signatories) creates a new multisig address linked to the existing proxy address. This new multisig lacks an Existential Deposit, so you must add some balance to the new multisig address before initiating transactions.
:::

## Sending Transactions on Astar Portal and Approving them on PolkaSafe

1. Go to the Astar Portal and select PolkaSafe.
![multisig_guide_6.png](img/multisig_guide_6.png)
2. Choose one of the signatories (owners) to create multisig transactions.
![multisig_guide_7.png](img/multisig_guide_7.png)
1. Sign the message on the wallet extension (the wallet popup might **take a moment** to appear).<br />
2. Select the multisig account and click Connect.<br />
![multisig_guide_8.png](img/multisig_guide_8.png)
1. You can now use the Astar Portal in the same way you would with normal accounts.
2. Once the transaction is completed, click 'Approve on PolkaSafe' and approve the transaction on PolkaSafe. You should connect to signatory accounts other than the one selected on Astar Portal.<br />
![multisig_guide_9.png](img/multisig_guide_9.png)
1. If you want to understand the transaction details, copy the 'Call Data' and paste it on the [Decode page](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/extrinsics/decode) on the Polkadot.js portal.
![multisig_guide_10.png](img/multisig_guide_10.png)
![multisig_guide_11.png](img/multisig_guide_11.png)

## References:
### PolkaSafe
* [PolkaSafe Documentation](https://docs.polkasafe.xyz/)
* [Introduction to Multisig Accounts](https://wiki.polkadot.network/docs/learn-account-multisig)
* [Creating a pure proxy](https://docs.polkasafe.xyz/setup-polkasafe/creating-a-pure-proxy)
### Polkadot Wiki
* [Multi-Signature Accounts](https://wiki.polkadot.network/docs/learn-account-multisig#introduction-to-multisig-accounts)
* [Proxy Accounts](https://wiki.polkadot.network/docs/learn-proxies)