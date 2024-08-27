---
sidebar_position: 7
---

import Figure from "/src/components/figure"

# Portal Troubleshooting Guide

This section will guide you to troubleshoot and solve most issues when connecting to the portal.

## Can't Connect Wallet To The Portal;

**Allow Polkadot.js to access the portal**
1. Go to Polkadot.js browser extension.
2. Click on the `Gear` icon.
3. Click on `Manage Website Access`.
4. Make sure `https://portal.astar.network` is allowed.

**Allow Polkadot.js to be used on Astar/Shiden**
1. Go to Polkadot.js browser extension.
2. Click on the `3 dots`.
3. On the dropdown menu, select `Allow use on any chain`.
4. If you have other extensions installed, please revoke access of those extensions.

## Getting Errors Or Unable To Execute Certain Functions;
Some of you may be unable to execute certain functions. Please try these steps.
1. Update metadata (if required).
2. Clear cache, restart browser and connect wallet to the portal again.
3. On the top right corner, switch to a different endpoint.
4. Brave browser is known to give errors. Use Chrome or Firefox instead.
5. Use VPN.

## Unable To Claim Staking Rewards;
1. If you can't claim the staking rewards on the portal. Visit [HERE](/docs/use/dapp-staking/for-stakers/manage-dApp-Staking.md#my-staking-panel).
2. If the transferrable balance in the wallet is too low, you might not be able to claim the staking rewards. Top up your wallet and then claim the rewards.

## After signing the transaction, the portal spins indefinitely;
1. If the portal spins indefinitely after you've signed a transaction, your transferable balance in the wallet is too low to pay for the transaction. 
2. Top up your wallet with new ASTR tokens and you'll be able to complete your transaction.

## My staking is not displayed on the dApp Staking page of the Astar Portal ;

<Figure src={require('/docs/use/img/Troubleshooting_dApp_Staking.png').default } width="100%" /> 

1. Two dApps have been delisted from the dApp Staking and if you were a staker on these dApps, you may not see your staking position on the dApp Staking page.
2. dApps concerned:
    - **Arthswap**, contract: `0xE915D2393a08a00c5A463053edD31bAe2199b9e7`
    - **Sirius Finance**, contract: `0x9448610696659de8F72e1831d392214aE1ca4838`
    - **ADAO**, contract: `0x1de7c3A07918fb4BE9159703e73D6e0b0736CaBC`
3. To release these funds, you must `claim` all your pending ASTR rewards.
4. Once all your pending rewards have been claimed, your tokens will be unlocked without any unbonding period and will become directly transferable.

## "You do not have enough tokens to pay the transaction fee."

1. As the sentence indicates, you do not have enough transferable tokens to cover the transaction fees.
2. Top up your wallet with new ASTR or SDN tokens and you'll be able to complete your transaction.
3. Bear in mind that tokens locked in dApp Staking, vesting or reserved balances cannot be used to pay gas fees.

## "No reponse received from RPC endpoint in 60s."

<Figure src={require('/docs/use/img/Endpoint_error.png').default } width="35%" /> 

1. If you encounter this problem, it's probably due to a synchronization problem with the RPC endpoint used by the portal.
2. To solve this problem, you need to reset the connection with the RPC by changing the Portal endpoint.
3. On the Astar portal, click on the Astar logo in the top right-hand corner.
4. Under `Network`, expand the **advanced** panel by clicking on the 3 dots.
5. Modify the endpoint and click on the `Change Network` button to confirm your action.

<Figure src={require('/docs/use/img/Network_modal.png').default } width="40%" /> 

If none of the above is helpful, please contact any of the team members or agents on [Discord](https://discord.gg/2FGq5KqwBh).
