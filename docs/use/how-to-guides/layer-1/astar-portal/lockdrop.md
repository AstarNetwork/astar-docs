---
sidebar_position: 2
sidebar_label: Lockdrop
title: Interact with Lockdrop accounts
---

import Figure from "/src/components/figure"

## Regaining Access to Lockdrop Accounts

We want to remind our users that lockdrop accounts were specifically created for the purpose of claiming ASTR lockdrop rewards and were not intended for ongoing transactions or use as regular accounts. Importantly, access to these accounts was disabled one and a half years following the claim period, impacting users who had not withdrawn their funds within this extended timeframe.

To support our users in accessing their funds, we are temporarily updating Shiden and Astar to restore access to these lockdrop accounts. This initiative represents a limited support window aimed at facilitating the withdrawal of funds from a feature that is gradually being phased out.

### Reconnecting Your Lockdrop Account:

#### Prerequesite:
The EVM address will be used to dispatch the call on behalf of the lockdrop account. Please ensure that the **EVM address holds native tokens (ASTR or SDN) to cover gas fees** for the dispatch call.

#### Steps:
1. Visit the Astar portal.
2. Log in using your Ethereum lockdrop address.
3. Select "Switch to lockdrop account."

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/lockdrop_1.png').default } width="100%" />

4. Authenticate by signing the message.
5. Carefully read and comprehend the warnings.

:::caution

Please note that the access will be discontinued 31-Aug 2024, so move your funds ASAP.

Be aware that engaging in transactions from lockdrop accounts incurs higher fees than usual. This is specific to the use of lockdrop accounts and underlines the need of transferring your funds out of this account.     

Every call implying moving of funds are possible in Astar Portal:
- Native transfer
- Asset transfer
- dApp Staking unbond and withdraw
:::

## How to claim ETH from Lockdrop

This section will guide you on how to claim the ETH that you locked during Lockdrop 1 and 2.

1. Go to the [Lockdrop page](https://lockdrop.astar.network/).
2. Select either **Lockdrop 1** or **Lockdrop 2**.
3. You will be prompted to connect Metamask.
4. Connect the wallet that you used to lock the ETH and make sure that you are on the Ethereum Network.
5. Click `Unlock Tokens`.
6. Click the 🔒.

<Figure src={require('/docs/use/how-to-guides/layer-1/astar-portal/img/lockdrop_2.png').default } width="100%" />

6. You will need to pay the gas fee to complete the transaction.
7. The ETH shall be in your wallet after the transaction is complete.
8. If you have troubles connecting, use VPN.


The other method to claim is by simply sending 0 ETH to the lock address. This will trigger the claim.
