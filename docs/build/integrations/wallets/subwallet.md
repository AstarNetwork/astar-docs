---
sidebar_position: 2
---

# SubWallet

## Overview

SubWallet, Polkadot{.js}, and Talisman extensions allow dApps to connect to them via public interaction with the `injectedWeb3` object of the window browser.

- SubWallet (public with properties `subwallet-js`)
- Polkadot{.js} (public with properties `polkadot-js`)
- Talisman (public with properties `talisman`)

![20] (img/20.png)

You can open the `injectedWeb3` object in your browser's devtools.

![21] (img/21.png)

## How to integrate with a dApp

:::info
Refer to these examples:

- Github Repository <https://github.com/Koniverse/SubConnect>
- Demo App: <https://connect.subwallet.app/>
- Video Demo: <https://bit.ly/38QhmfI>
  :::

- Check the extension is active:
  - When a wallet extension is active in a browser it will modify `window.injectedWeb3` by adding its interaction and specifying the name.
  - For example: check the SubWallet extension by this code: `window.injectedWeb3 && window.injectedWeb3['subwallet-js']`
- Enable integration with your dApp by using the method `enable()` of the extension interaction object

```js
const SubWalletExtension = window.injectedWeb3['subwallet-js'];
const extension = await SubWalletExtension.enable();
```

After running the code extension, a popup will appear to confirm integration with your dApp.

- After enabling, the `extension` variable may contain the following objects:
  - `accounts`: Allow getting account data with 2 methods: `get()` and `subscribe()`.
  - `signer`: Allow to sign data with 2 methods: `signPayload()` and `signRaw()`.
  - `metadata`: Allow getting additional metadata list with method `get()` and add/update with `provide()`.

## Use with TypeScript

If your dApp is written with TypeScript you will need to add `@polkadot/extension-inject` to your `package.json` to get the extension interfaces.
