---
sidebar_position: 3
---

# Custom Modifier

in factory contract prior entering **setFeeTo** and **setFeeToSetter** there is a [check](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Factory.sol#L41) that caller is `feeToSetter`.
Let's create a custom modifier for it

### only_fee_setter

In *.logics/impls/factory/factory.rs* import `modifier_definition` and `modifiers` 