---
sidebar_position: 1
---

# Add wallets into Astar Portal

Developers can create a PR to [our portal](https://github.com/AstarNetwork/astar-apps) for adding wallets to our portal. Here’s what you need to know about the integration of Substrate and Ethereum wallets into our portal.

## Define the wallets variables

The extension name `enum` value comes from:

```js
const extensions = await getInjectedExtensions();
console.log('extensions', extensions); -> extensions[index] -> name
```

1. Add the `extension name` at the [SupportWallet](https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L8) enum.
2. Add the `SupportWallet.[new_value]` to the [WalletModalOption](https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L23) array.
3. Add the `SupportWallet.[new_value]` to the [SubstrateWallets](https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L48) array only if it is a Substrate wallet.


## Add the wallets information

Add the Substrate wallets information to the [supportWalletObj](https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L64) object variable.

e.g.

```js
export const supportWalletObj = {
  [SupportWallet.TalismanNative]: {
    img: require('/src/assets/img/logo-talisman.svg'),
    name: 'Talisman (Native)',
    source: SupportWallet.TalismanNative,
    walletUrl: 'https://app.talisman.xyz/',
    guideUrl: 'https://app.talisman.xyz/',
    isSupportBrowserExtension: true,
    isSupportMobileApp: false,
  }
};
```

Add the Ethereum wallets information to the [supportEvmWalletObj](https://github.com/AstarNetwork/astar-apps/blob/ecb067e9683eb5224fac96c5bf9fa9ce4c123a7d/src/config/wallets.ts#L130) object variable.

e.g.

```js
export const supportEvmWalletObj = {
  [SupportWallet.TalismanEvm]: {
    img: require('/src/assets/img/logo-talisman.svg'),
    name: 'Talisman (EVM)',
    source: SupportWallet.TalismanEvm,
    walletUrl: 'https://app.talisman.xyz/',
    guideUrl: 'https://app.talisman.xyz/',
    isSupportBrowserExtension: true,
    isSupportMobileApp: false,
    ethExtension: 'talismanEth',
  }
};
```

## Add a visual asset representing your wallet

Add a small `.svg` or `.png` to the [assets](https://github.com/AstarNetwork/astar-apps/tree/main/src/assets/img) directory

## Requirement for creating a PR

1. Developers should have tested for sending both deposit and withdrawal transactions from our portal.
2. Developers should have tested for dApps Staking transactions.
3. Developers should have tested for account switch (Substrate & EVM).
4. Submit the Subscan links of the transaction details of these tests for all wallets you've registered.
5. Submit the screen recording of the connect, a transaction and account switch visual interactions. 
