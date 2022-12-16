---
sidebar_position: 3
---

# Mint

If you start tutorial from here, Please checkout this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/storage-end) and open it in your IDE.

### Add Mint functions to Pair trait

We will implement [mint](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Pair.sol#L110) function of Pair contract.
In *./logics/traits/pair.rs* add the **mint** function to Pair trait. You should also add two internal **_mint_fee** and **_update**.