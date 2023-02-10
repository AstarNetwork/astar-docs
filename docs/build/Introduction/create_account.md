---
sidebar_position: 3
---

# Create Account

## Install the Polkadot.js Browser Extension
While you can create an account in the Polkadot.js portal, a more convenient method of keeping accounts stored on your computer is by using the [Polkadot.js browser extension](https://polkadot.js.org/extension/). This extension will remember your accounts, and allow you to clear your browser cache without worrying about losing your progress.
In other words, the Polkadot browser extension will serve as your wallet.

## Create a New Account

Open the Polkadot{.js} browser extension by finding and clicking on it from the top bar of your browser. You will see a browser popup.

![6](img/6.png)

Click the big plus button - "Create new account". The Polkadot{.js} plugin will use system randomness to generate a new seed phrase for you, consisting of twelve words.

![7](img/7.png)

:::danger 
Remember to store the seed phrase used to generate your account safely, off-line! If you lose access to the device you're on, or the Polkadot.js extension crashes beyond repair, your seed phrase(s) may be invaluable.
:::

If you cannot access your account via Polkadot{.js} for some reason, you can re-enter your seed phrase through the "Add account menu", by selecting "Import account from pre-existing seed".

![8](img/8.png)

It may be best to create an account that is allowed on any chain in the Polkadot ecosystem. The account can then be used for both Polkadot and Kusama, and all connected parachains. Your account will automatically adapt to the connected chains' account format, as you roam from chain to chain.

A **descriptive name** is arbitrary, and helps you to identify your account visually. It is not stored on the blockchain, so is not visible to other users who examine your address in a block explorer. If you're using multiple accounts, it helps to make this as descriptive as possible.

The **password** will be used to encrypt this account's information. You will need to re-enter it when interacting with smart contracts, or cryptographically signing a message.

:::danger
Note that this password does **NOT** protect your seed phrase. If someone knows the twelve words in your mnemonic seed, they still have control over your account even if they do not know the password.
:::

After clicking on "Add the account with the generated seed", your account will be created. Additionally, we recommend saving your account as a JSON file, which is sometimes done automatically, and is secured by your account password.

## Connect Your Wallet to the Astar Portal

Return to the [Astar Portal](https://portal.astar.network) and refresh the page. You will receive a popup that indicates Astar Portal needs to be authorized to interact with your account. Sign the transaction.

![9](img/9.png)

After you have authorized the extension, you will be able to connect your wallet. A popup will disply a list of all supported wallet extensions, and in our case we select Polkadot.js.

<img width="500" alt="10" src="https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png" />

Once you have clicked on Polkadot JS, you can select your newly created account. Select your account and press confirm.

<img width="530" alt="11" src="https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png" />

You have now connected your wallet to Astar Portal! You will also be able to use this wallet on any chain within the Polkadot ecosystem.

