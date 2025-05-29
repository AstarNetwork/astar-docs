---
sidebar_position: 5
sidebar_label: Troubleshooting
title: Soneium Troubleshooting Guide
description: Solve common Soneium transfer issues.
---

import Figure from "/src/components/figure"

This section will guide you to troubleshoot and solve most issues when connecting to the Soneium.

## 1. Why can't I see my tokens after bridging to Soneium?

Issue: After bridging to Soneium, tokens don't appear in your wallet.

Solution:

- Ensure Wallet Compatibility: Use wallets that support custom networks, such as MetaMask, Trust Wallet (Android or browser extension), or Rainbow Wallet (browser extension).

Note: Some wallets may not support adding custom networks. In such cases, consider importing your wallet into a compatible one.

## 2. My wallet doesn't support custom networks. What should I do?

Issue: Your current wallet doesn't allow adding custom networks, preventing interaction with Soneium.

Solution:

- Import Wallet into a Compatible One: Transfer your wallet credentials (seed phrase or private key) into a wallet that supports custom networks, such as MetaMask or Trust Wallet (Android or browser extension) .

## 3. What do transaction statuses like "Unsafe," "Safe," and "Finalized" mean?

Issue: Understanding the meaning of different transaction statuses on Soneium.

Explanation:

- Unsafe: Transaction processed by Soneium but not yet posted to Ethereum; it might be reverted if issues occur.
- Safe: Transaction posted to Ethereum but not finalized; minimal chance of reorganization.
- Finalized: Transaction permanently recorded on Ethereum and cannot be reverted .

You can check the status of your transaction using the Soneium Block Explorer: Soneium Block Explorer

## 4. My bridge transaction failed. What could be the reason?

Issue: Bridge transactions to or from Soneium are failing.

Possible Causes & Solutions:

- Insufficient Gas Fees: Ensure you have enough ETH in your wallet to cover gas fees on both source and destination networks.
- Token Approval Missing: Before bridging, you must approve the token for transfer. Check if you've granted the necessary permissions.
- Network Congestion: High traffic can delay or fail transactions. Try again later or increase gas fees for priority.
- Unsupported Tokens: Verify that the token you're trying to bridge is supported by the bridge service.

Refer to the bridge's official documentation or support channels for specific guidance.

## 5. How can I verify the status of my transaction?

Issue: Need to confirm if a transaction was successful or identify its current status.

Solution:

- Use Soneium Block Explorer: Visit Soneium Block Explorer and enter your transaction hash to view details.
- Check Wallet History: Most wallets provide a transaction history where you can see pending, successful, or failed transactions.
- Bridge Interface: If you used a bridge service, their interface might offer transaction tracking features.

## 6. My transaction is stuck or pending for a long time. What should I do?

Issue: Transactions remain pending without confirmation.

Solutions:

- Increase Gas Fees: If the transaction is pending due to low gas fees, consider resubmitting with higher fees.
- Replace Transaction: Some wallets allow you to replace a pending transaction with a new one using the same nonce but higher gas fees.
- Wait: Network congestion can cause delays. If the network is busy, waiting might resolve the issue.
- Contact Support: If the transaction remains stuck, reach out to us in our [**Astar Discord Server**](https://discord.com/invite/AstarNetwork).

## 7. I'm unsure if my wallet is compatible with Soneium. How can I check?

Issue: Determining wallet compatibility with Soneium.

Solution:

- Check Wallet Documentation: Review your wallet's official documentation or support resources to see if it supports adding custom networks.
- Attempt to Add Network: Try adding Soneium manually using the network details provided earlier. If the wallet allows this, it's compatible.
- Community Forums: Search community forums or discussions for insights on wallet compatibility with Soneium.

## 8. I sent tokens to the wrong address. Can I recover them?

Issue: Tokens were sent to an incorrect or unintended address.

Explanation:

- Irreversible Transactions: Blockchain transactions are immutable. Once confirmed, they cannot be reversed.
- Contact Recipient: If you know the owner of the address, you can request them to return the tokens.
- Preventive Measures: Always double-check addresses before confirming transactions to avoid such issues.

## 9. How do I bridge tokens from Ethereum or other L2s to Soneium?

Issue: Need guidance on transferring tokens from Ethereum or other Layer 2 networks to Soneium.

Solution:

- Use Supported Bridges: Platforms like Superbridge, Stargate, and Rhino.fi support bridging to Soneium.

Steps:

1. Visit the bridge platform's website.
2. Connect your wallet.
3. Select the source network and token.
4. Choose Soneium as the destination network.
5. Enter the amount and confirm the transaction.
6. Wait for Confirmation: Bridging might take some time. Monitor the transaction status via the bridge interface or block explorer.

## 10. Where can I get further assistance or report issues?

Issue: Need additional help or wish to report a problem.

Resources:

- Official Documentation: [**Soneium Docs**](https://docs.soneium.org/)
- Soneium Website: [**Soneium**](https://soneium.org/en/)
- Community Support: Join the [**Astar Network Discord**](https://discord.com/invite/AstarNetwork) for community assistance.
- Bridge Support: If the issue is with a specific bridge, contact their support channels directly.