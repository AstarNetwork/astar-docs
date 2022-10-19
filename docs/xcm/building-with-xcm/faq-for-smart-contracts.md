---
sidebar_position: 9
---

# FAQ for Smart Contracts

## Q: Unable to use `transferFrom` for XC20 (DOT, KSM...) in Solidity contract

This was an issue before when an account had to hold some native currency in order to be eligible to receive foreign currency.
Since this was causing problems for our users, it was changed and no is no longer a requirement for payable foreign assets.

Please note that for custom assets, which aren't supported as payment asset by Astar or Shiden, account (or contract) still has
to hold at least ED in native currency to be eligible to receive custom asset.

