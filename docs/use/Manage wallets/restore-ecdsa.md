---
sidebar_position: 6
---

# Restore a ECDSA wallet on Polkadot.js

During Lockdrop 1 & 2, some of you might have claimed PLM tokens to the default wallet. If you are one of them and have lost access to your Polkadot.js wallet, this tutorial will guide you on how to restore that wallet.

<br />

This is a 2-step process.
1. Restore the wallet on Polkadot.js.
2. Restore the json file on Polkadot.js extension.

## Step 1:
1. Go to [Polkadot.js](https://polkadot.js.org/apps/#/settings).
2. Go to "Settings".
3. On the Account Options dropdown menu, select `Allow local in-browser account storage`
4. Click Save".
![image](https://user-images.githubusercontent.com/37278708/214497161-f31e7685-f090-4e4c-806e-6a47bf18e48f.png)

6. Next, go to Account and click on Add Account.
7. Change “Mnemonic” to “Raw Seed”.
8. Expand "Advanced creation options".
9. On "keypair crypto type", and select `ECDSA`.
10. On the SEED box, type 0x and paste your ETH private key.
11. Tick the box “I have saved my mnemonic phrase safely”.
12. Click “Next”.
![image](https://user-images.githubusercontent.com/37278708/214499043-aacc13c5-8e31-4a91-8384-e943169011a6.png)

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
7. Your ECDSA wallet is now restored on Polkadot.js and you can use it with Astar Portal.
