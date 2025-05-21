---
sidebar_position: 3
sidebar_label: Restore a ECDSA wallet
title: Restore a ECDSA wallet on Polkadot.js
---

import Figure from '/src/components/figure'

During Lockdrop 1 & 2, some of you may have claimed PLM tokens, renamed ASTR, in the default wallet.  
If you're one of them and have lost access to your Polkadot\{.js\} wallet, this tutorial will guide you through how to restore that wallet.

This is a 2-step process.
1. Restore the wallet on Polkadot\{.js\}.
2. Restore the json file on Polkadot\{.js\} extension.

## Restore the wallet on Polkadot\{.js\}.
1. Go to [Polkadot\{.js\}](https://polkadot.js.org/apps/#/settings);
2. Go to `Settings`;
3. On the Account Options dropdown menu, select `Allow local in-browser account storage`;
4. Click Save";

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_ecdsa_1.png').default} width="100%" />

6. Next, go to `Account` and click on `Add Account`;
7. Change **Mnemonic** to **Raw Seed**;
8. Expand **Advanced creation options**;
9. On **keypair crypto type**, and select `ECDSA`;
10. On the SEED box, type 0x and paste your ETH private key;
11. Tick the box **I have saved my mnemonic phrase safely**;
12. Click `Next`;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_ecdsa_2.png').default} width="100%" />

12. Give the account a name and a password, and click `Next`. Make sure to save the password;
13. Click `Save`;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_ecdsa_3.png').default} width="100%" />

14. You will be prompted to save the json file. Please save the json file safely as you will need this in the next step.

## Restore the json file on Polkadot\{.js\} extension.
1. Go to https://polkadot.js.org/extension/ to download and install the browser extension wallet;
2. After installation, click on the `+` icon and select **Restore account from a backup json file**;
3. Select the json file that you saved from Step 1 and click `Restore`;
4. Enter the password that you saved from Step 1 and click `Restore`;
5. The wallet is now restored on the Polkadot\{.js\} extension;
6. Click on the 3 dots and select `Allow use on any chain`;
7. Your ECDSA wallet is now restored on Polkadot\{.js\} and you can use it with Astar Portal.
