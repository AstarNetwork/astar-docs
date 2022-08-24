---
sidebar_position: 9
---

# Portal Minimum Transfer Amount and Minimum Balance

We set the following numbers as Minimum Transfer Amount and Minimum Balance within Astar/Shiden Portal. This is due to Existential Deposit(ED) Polkadot Network and parachains have and we set Minimum Transfer Amount that should greater than ED + FEE so our users can avoid losing funds. 

## Minimum Transfer Balance
When you deposit tokens from other chains, Portal checks the origin chain's balance and will restrict transfer when the balance is below Minimum Balance. 

## Minimum Transfer Amount
Portal will only allow making transactions when the amount is above Minimum Transfer Amount to avoid users losing funds. (The amount will be reaped when the fund arrives at less than ED)


| Chain | Token | ED | Official docs | Portal Minimum Balance (Deposit) | Portal Minimum Transfer Amount |
| --- | --- | --- | --- | --- | --- |
| Polkadot | DOT | 1 | [Polkadot / Kusama Docs](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-) | (Native token)1.1 | 1.1 |
| Kusama | KSM | 0.0000333333 |  | (Native token)0.0001 | 0.1 |
| Acala | AC  A | 0.1 | [Acala Docs](https://wiki.acala.network/get-started/acala-network/acala-account#existential-deposit) | (Native token)0.11 | 0.4 |
|  | aUSD | 0.1 |  | n/a | 0.11 |
|  | LDOT | 0.05 |  | n/a | 0.13 |
| Karura | KAR | 0.1 | [Karura Docs](https://wiki.acala.network/integrate/integration-1/protocol-info#existential-deposit) | (Native token) | 0.11 |
|  | aUSD | 0.01 |  | n/a |  |
|  | LKSM | 0.0005 |  | n/a | 0.0024 |
| Moonbeam | GLMR | n/a | [Moonbeam/ Moonriver Docs](https://docs.moonbeam.network/) | (Native token) |  |
|  | MOVR | n/a |  | (Native token) | 0.007 |
| Statemine | USDT |  | [Statemine Docs](https://guide.kusama.network/docs/kusama-statemine) |  |  |
