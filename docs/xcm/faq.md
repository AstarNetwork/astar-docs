---
sidebar_position: 4
---

# FAQ

## Q: Is there a way to see my DOT/SDN balance (on Astar/Shiden) on the Polkadot.js?

Yes. Go to Polkadot.js, connect with your wallet and go to Network > Balances and select the token you are interested in. Example below shows viewing SDN balance:

![Viewing KSM balance on Shiden Network](img/1.png)

## Q: I used XCM to transfer 5 DOTs from Polkadot to Astar, but only received 4.999

Please note that the gas amount will be deducted from the amount entered. The transferred amount should be adjusted with the gas fee estimate. For more info, please look [here](https://docs.astar.network/docs/xcm/using-xcm/xcm-transactions).

## Q: My balance should be 1.00012 DOTs but the Portal is displaying 1 DOT, where are they?

Please note that the current version of Astar Portal is rounding balances to the 3rd decimal. If you have a similar issue please refer to the [previous FAQ entry](building-with-xcm/faq-for-smart-contracts.md) and instructions on how to use Polkadot.js to investigate exact balance of your tokens.

## Q: Can I send my DOT token to other Parachains?

Not at the moment.

## Q: How can I send my DOT token back to Polkadot?

You can send back DOT/KSM to relay chain using both EVM and native wallets. Just go under the Assets Page and choose XCM link of the relevant token.

## Q: Why is XCM button for DOT/KSM disabled when I connect my wallet on the Astar Portal?

Please make sure you have non-zero balance of your native token as described in [this documentation section](https://docs.astar.network/docs/xcm/using-xcm/xcm-transactions).

## Q: I transferred X tokens to another account, but the amount transferred and received by the target account is greater than X. What is going on?

XC20 asset's have a defined minimum-balance. The minimum-balance is the minimum balance of an asset that any single account must have. In this specific case, if an account's balance would be reduced below this amount in an asset transfer transaction, then the amount actually transferred would include the remaining amount of specific asset on initiating account.

Take a look at an example of a transaction in case of an asset whose minimum-balance is 10: Alice has 10.9 tokens and tries to send to Bob 10 tokens. Remaining balance of Alice would become 0.9 which is less than minimum amount. In this case, transaction amount would automatically equal 10.9 tokens, and Alice's account end balance would be 0.

For more details take a look in the [documentation pages](building-with-xcm/send-xc20-evm.md).

## Q: Where can I find other chains' addresses?

You can check all different chains' addresses in Polkadot/Kusama :

1. Using [Sub ID](https://sub.id/)

Simply input your Astar native address and you will be able to see all the related addresses with the account.

2. Showing it on Polkadot.js extension by selecting the chain you would like to know the address of.

Please note that you can only make a XCM withdrawal when the receiver Relay chain has more than the Minimum Balance (1.1DOT for Polkadot and 0.01KSM for Kusama).

<img src="https://user-images.githubusercontent.com/77480847/182851296-cb2b540c-a7ab-470d-9a73-be99f94cac53.png" width="400">
