---
sidebar_position: 2
sidebar_label: Burndrop PoC
title: Burndrop PoC FAQs
description: Answers to the most common questions about the Burndrop Proof-of-Conviction on Astar Network.
---

Welcome to the **Burndrop PoC FAQ**. Here you'll find answers to the most common questions about how the Burndrop PoC works, who can participate, and what to expect.

## Q: What is the Burndrop PoC?

A: The Burndrop Proof-of-Conviction is a small-scale experiment that allows ASTR holders to experience the deposit → lock → burn → claim lifecycle. The goal is to gather real data, collect feedback, improve communication, and ensure future Astar economic initiatives are fair, clear, and community-aligned.

## Q: Why are we running the Burndrop PoC?

A: The Burndrop PoC is a practical demonstration of the mechanism proposed in the [RFC](https://forum.astar.network/t/request-for-comments-astar-evolution-phase-2/9045). Instead of relying only on theoretical descriptions, diagrams or debate, the PoC allows the community to observe the deposit → lock → burn → claim lifecycle directly onchain. This lets everyone evaluate fairness, user experience and feasibility before any formal Burndrop-related proposal is drafted or presented to governance.

## Q: Is this a token launch, reward program or swap?

A: No. The PoC is not a token distribution, reward mechanism or swap. It includes a small, fixed ASTR burn and a non-transferable Burndrop Passport as proof of participation.

## Q: How much do I deposit?

A: A fixed amount of **2026 ASTR**. This amount is symbolic, equal for everyone and intentionally small to minimize financial exposure.

## Q: Is participation optional?

A: Yes. The PoC is fully voluntary and has no negative impact on ASTR holders who choose not to participate.

## Q: Can I participate using multiple wallets?

A: Each wallet can only deposit once. Any additional sybil-related restrictions will be communicated separately if applicable.

## Q: What are the key dates?

A: The PoC runs across three phases:

- **Pledge Period:** 17 December 2025 – 28 December 2025 (deposit)
- **Obligation Period:** 28 December 2025 – 4 January 2026 (lock)
- **Consolidation Period:** 4 January 2026 – 18 January 2026 (mint Passport, finalize burn)

All dates inclusive.

## Q: How does the PoC flow work?

A: During the Pledge Period, users deposit 2026 ASTR on Astar EVM or Soneium networks. Tokens are locked upon deposit and remain locked during the Obligation Period. In the Consolidation Period, the deposited ASTR is burned and users can mint the Burndrop Passport on Astar EVM. All actions are recorded onchain and displayed on the PoC dashboard.

## Q: Why is the PoC on the Astar mainnet and not on the testnet?

A: The goal of the PoC is to observe real user behavior, real transaction flows and real onchain outcomes. Testnets cannot replicate the incentives, caution, decision-making patterns or UX friction that appear when users interact with actual assets. By using a small, fixed 2026 ASTR deposit, the PoC keeps exposure low while ensuring the collected insights accurately reflect how a Burndrop-style mechanism would function in a real environment.

## Q: Is the burn real?

A: Yes. Burned ASTR is permanently removed from circulation. This burn is intentionally small and equal-entry.

## Q: What is the Burndrop Passport?

A: The Burndrop Passport is a non-transferable SBT (Soulbound Token) minted on Astar EVM as proof of participation in the PoC.

## Q: Does the Passport offer benefits in 2026?

A: The Passport does not carry financial value, however, it may grant benefits to holders in future Astar-related initiatives.

## Q: Which networks are supported?

A: Deposits are planned to be supported from both **Astar EVM** and **Soneium**.

## Q: How does cross-chain participation work?

A: If you deposit from Soneium, your ASTR is automatically transferred to the Astar EVM vault through Chainlink CCIP. The transfer happens behind the scenes, and bridge fees are paid in ETH. You only need to submit one deposit transaction; the rest of the flow is handled by the protocol.

## Q: Do I need to bridge manually?

A: No. Manual bridging is not required. All Soneium deposits automatically route to the Astar EVM vault through CCIP as part of the deposit process.

## Q: Where is the Passport minted?

A: Always on **Astar EVM**, regardless of where the initial deposit came from.

## Q: What wallets are supported?

A: Standard web3 wallets compatible with Astar EVM or Soneium are supported.

## Q: Are there gas fees?

A: Yes. Deposits and SBT minting require gas on their respective networks. Users should ensure they hold enough native tokens to complete transactions.

## Q: Is the contract audited?

A: This Proof of Concept uses simple, purpose-built contracts that do not require a full audit. The Burndrop Passport uses a standard SBT implementation that has already been audited, and all PoC contracts will be publicly verified onchain so participants can review the logic directly.

## Q: Can I withdraw my deposit?

A: No, tokens are locked upon deposit. Tokens are locked throughout the Obligation Period and burned during the Consolidation Period. The PoC is designed this way to test the real mechanics safely.

## Q: Will participating affect ASTR's value?

A: The PoC includes only a small symbolic burn. It is not intended to influence market conditions.

## Q: Why does the PoC use real ASTR instead of test tokens?

A: Using real ASTR allows us to observe genuine user behaviour, surface real UX issues and validate the mechanism under realistic conditions.

Because the tokens are actually burned, the PoC also lets us test supply-reduction mechanics in a real environment and coordinate with external data providers (such as CMC and CoinGecko) so the burn is accurately reflected on external platforms.

## Q: Do I lose anything by not participating?

A: No. The PoC is optional.

## Q: How will results be published?

A: A public dashboard will display participation metrics and burn data. After the Consolidation Period, a full post-event report will summarize learnings and explain how insights may inform future Astar initiatives.

## Q: How will feedback be collected?

A: Through the Astar forum, a feedback form linked from the dashboard, and questions raised during AMAs and community events. Feedback themes will be included in the post-event report.

## Q: What does "success" look like for the PoC?

A: Success is defined by clarity of insights, quality of feedback, observable user behavior, technical validation and community understanding — and not participation volume.

## Q: Are there legal or tax implications?

A: Tax treatment of token burns or onchain participation varies by jurisdiction. Participants should consult a professional advisor. Nothing in this FAQ is legal or tax advice.

## Q: Where can I get help?

A: Official links will be posted on [Astar's verified channels](https://astar.network/). Use the [forum thread](https://forum.astar.network/) for structured questions. Join AMAs during the Pledge period. For urgent concerns, reach out to us on [Discord](https://discord.com/invite/astarnetwork).
