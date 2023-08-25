---
sidebar_position: 7
---

# Restore Ledger wallet on Polkadot.js

Some of you might have issues making transactions with Ledger wallet on the portal. This is because the Ledger App that you are using is a minimal version. For now, restoring the Ledger seed phrase on Polkadot.js may help the issue.

<br />

This is a 2-step process.
1. Restore the wallet on Polkadot.js.
2. Restore the json file on Polkadot.js extension.

## Step 1:
1. Go to [Polkadot.js](https://polkadot.js.org/apps/#/settings).
2. Go to Settings.
4. On the Account Options dropdown menus, select `Allow local in-browser account storage`and `Attach Ledger via WebUSB (Chrome, recommended)`.
5. Click "Save".
![image](https://user-images.githubusercontent.com/37278708/218649665-db576329-7a93-4286-9b46-965e9bed3b2d.png)

6. Next, go to "Account" and click on “Add Account”.
7. Replace the mnemonic seed with your Ledger seed.
8. Expand "Advanced creation options".
9. On "keypair crypto type", select `Ledger (ed25519, BIP32 derivation)`.
10. On "ledger app type", select `Astar Network`.
11. Tick the box “I have saved my mnemonic phrase safely”.
12. Click “Next”.
![image](https://user-images.githubusercontent.com/37278708/218649577-6eaf7936-bf3b-4610-8d3e-458b39353780.png)

12. Give the account a name and a password, and click “Next”. Make sure to save the password.
13. Click “Save”.
![image](https://user-images.githubusercontent.com/37278708/214498123-dab270e0-9534-410f-8115-e254ac707041.png)

14. You will be prompted to save the json file. Please save the json file safely as you will need this in the next step.

## Step 2:
1. Go to https://polkadot.js.org/extension/ to download and install the browser extension wallet.
2. After installation, click on the “+’ icon and select “Restore account from a backup json file”
3. Select the json file that you saved from Step 1 and click “Restore”.
4. Enter the password that you saved from Step 1 and click”Restore”.
5. The wallet is now restored on the Polkadot.js extension.
6. Click on the 3 dots and select “Allow use on any chain”.
7. Your Ledger wallet is now restored on Polkadot.js and you can use it with Astar Portal.
