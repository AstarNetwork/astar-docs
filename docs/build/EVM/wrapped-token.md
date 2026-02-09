---
sidebar_position: 11
---

# Wrapped Tokens

This documentation provides details about the WASTR and WSBY tokens deployed on the Astar and Shibuya networks respectively.

---

## WASTR (Wrapped ASTR)

WASTR is a wrapped version of the native ASTR token on the Astar network. Wrapping ASTR enables its use in various dApps and smart contracts while maintaining compatibility with ERC20 standards.

### Two WASTR Implementations

Astar EVM supports two WASTR contracts for different use cases. **Both are safe and fully functional.** Choose based on your specific needs.

#### Official Astar WASTR (Recommended)
**Contract Address:** `0x37795fdd8c165cab4d6c05771d564d80439cd093`

- **Standard:** WETH9 (ERC-20 compatible)
- **Deployed by:** Astar Foundation
- **Chainlink CCIP Compatible:** Yes

**Use for:**
- Cross-chain bridging to Soneium via CCIP
- All new dApp integrations
- Future Astar ecosystem development

**Block Explorer:** [View on Blockscout](https://astar.blockscout.com/token/0x37795FdD8C165CaB4D6c05771D564d80439CD093)

#### Community WASTR (Legacy Support)
**Contract Address:** `0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720`

- **Standard:** WETH10 (ERC-20 compatible with additional features)
- **Deployed by:** Arthswap
- **Additional Features:** Flash loans (ERC-3156), Permit, withdrawTo

**Use for:**
- Existing positions in Arthswap and legacy DeFi protocols
- Applications requiring WETH10-specific features (flash loans, permit)

**Block Explorer:** [View on Blockscout](https://astar.blockscout.com/token/0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720)

### Quick Decision Guide

**Are you bridging to Soneium?**  
→ Use Official Astar WASTR (`0x3779...`)

**Building a new dApp?**  
→ Use Official Astar WASTR (`0x3779...`)

**Using Arthswap or legacy Astar DeFi protocols?**  
→ Use Community WASTR (`0xAeaa...`)

**Need flash loan functionality?**  
→ Use Community WASTR (`0xAeaa...`)

### For Developers

#### Why Two Contracts?

The Official Astar WASTR uses WETH9 for seamless integration with Chainlink CCIP's cross-chain messaging infrastructure, enabling native bridging to Soneium and future networks.

The Community WASTR uses WETH10, offering advanced features like gasless approvals (permit) and flash loans, beneficial for complex DeFi interactions.

#### Contract Compatibility

Both contracts implement standard WETH functionality:
- `deposit()` / `withdraw()`
- Full ERC-20 interface
- 1:1 ASTR backing

**WETH10 additional methods:**
```solidity
flashLoan(IERC3156FlashBorrower receiver, address token, uint256 value, bytes calldata data)
permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s)
withdrawTo(address to, uint256 value)
```

If you don't need these specific features, use the Official Astar WASTR for maximum ecosystem compatibility.

---

## WSBY (Wrapped SBY)

**WSBY** is a wrapped version of the native SBY token on the Shibuya testnet. Wrapping SBY enables its use in various dApps and smart contracts while maintaining compatibility with ERC20 standards.

- **Contract Address**: [0xbd5F3751856E11f3e80dBdA567Ef91Eb7e874791](https://shibuya.blockscout.com/address/0xbd5F3751856E11f3e80dBdA567Ef91Eb7e874791?tab=contract)

---

