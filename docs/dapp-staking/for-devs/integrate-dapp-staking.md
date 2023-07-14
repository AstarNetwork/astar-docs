---
sidebar_position: 3
---

# Interacting With dApp Staking

## Offchain

:::note
The following documentation refers to **dApp Staking v2**. The next iteration, **v3** is being designed & implemented.
Once it's ready & deployed, **v2** docs will become deprecated and users will need to update their code if they want to
keep on using the functionality.
:::

### Bond & Stake

The first thing regular user has to do when they start using dApp staking is to lock some of their ASTR or SDN, and select a dApp on which to stake.
This is done by submitting `bond_and_stake` extrinsic call with the following parameters:
* `contract_id` - unique dApp identifier, denotes on which dApp will the funds be staked on
* `value` - the amount the transaction submitter wants to stake

If call is successful, transaction submitter has successfully entered dApp staking.
Once current era has finished, user can claim their rewards.

In case `value` exceeds what user has available for staking, the max available value will be staked instead.

#### Errors
There are various reasons why the call might fail:
1. Contract already has a maximum number of unique stakers.
    * user should pick another contract instead
2. There are too many era stake values in storage.
    * user should claim pending rewards to reduce storage size before trying to stake again
3. Total staked amount would be below minimum staking amount requirement.
    * user should increase their staking value to at least match the minimum required amount
    * this relates to total staked amount, not necessarily the value in the call
4. Contract is not operated.
    * either the contract doesn't exist in dApp staking or it has been unregistered

#### Code Example

```js
console.log('Add example with JavaScript usage of bondAndStake, and maybe add code snippet of how to read staked amount?');
```

### Unstaking & Unbonding Period

When user wants to remove their funds from dApp staking, they can do so by calling `unbond_and_unstake` extrinsic call with the following parameters:
* `contract_id` - unique dApp identifier, denotes from which dApp will the funds be unstaked from
* `value` - amount which the transaction submitter wants to unstake & unbond

In case unstaking `value` would take the staker below minimum staking amount, **entire** stake is unstaked.

If call is successful, a new unbonding chunk is created, and it starts undergoing the unbonding period.
During the unbonding period, some amount of ASTR or SDN remain locked and don't earn any rewards.
Once a chunk has undergone the entire unbonding period, it can be withdrawn back into the free balance of the user.
The extrinsic call used for this is `withdraw_unbonded` which takes no arguments.

#### Errors

1. User has no stake on the specified contract.
2. There are too many era stake values in storage.
    * same situation as in the case of `bond_and_stake`, user should make sure to claim existing rewards to reduce storage size.
3. There are too many unlocking chunks in storage.
    * user has reached the limit of the amount of unique unbonding chunks that can be in storage and cannot create any new ones
    * user must wait for any of the chunks to finish the unbonding period, withdraw it, and then it can try to unbond & unstake again
4. Not operated contract.
    * specified contract doesn't exist in dApp staking or has been unregistered.
    * in case contract is unregistered, user should use `withdraw_from_unregistered` extrinsic call

#### Code Example

```js
console.log('Add example with JavaScript usage of unbondAndUnstake and withdrawUnbonded');
console.log('Demonstrate how to read unbonding chunks and check how much is available for withdrawal');
console.log('Demonstrate how to read configured unbonding period');
```

### Unstaking From Unregistered Contract

In case contract has been unregistered from dApp staking while user was staking on it, staked funds can be withdrawn immediately to the free balance, skipping the unbonding period.
This is done using the `withdraw_from_unregistered` extrinsic call with the following parameter:
* `contract_id` - unique dApp identifier, denotes from which dApp will the funds be unstaked from

#### Errors

1. Contract is not in the `Unregistered` state.
2. Not staked contract.
    * User has no stake on the specified contract.
3. There are unclaimed rewards for this contract.
    * user must claim all pending rewards for the contract before withdrawing all staked funds from it 
4. Not operated contract.
    * specified contract doesn't exist in dApp staking

#### Code Example

```js
console.log('Add example with JavaScript usage of withdrawFromUnregistered');
console.log('Demonstrate how to check if contract is unregistered');
```

### Nomination Transfer

Nomination transfer allows users to transfer their nomination from one dApp to another.
This is useful since without such a call, users would need to undergo the unbonding period whenever they wanted to do the switch.
Used extrinsic call is `nomination_transfer` with the following parameters:
* `origin_smart_contract` - unique dApp identifier, denotes from which dApp will the funds be unstaked from
* `value` - amount which we want to transfer from origin to target dApp
* `target_contract_id` - unique dApp identifier, denotes to which dApp will the funds be staked on

In case unstaking `value` from the origin smart contract would take the staker below minimum staking amount, **entire** stake is unstaked.

#### Errors

1. Nomination transfer between the same smart contracts.
2. Either origin or target contracts don't exist in dApp staking or have been unregistered.
3. There are too many era stake values in storage.
    * user should claim pending rewards to reduce storage size before trying to stake again
4. Not staked contract.
    * user has no stake on the specified origin contract
5. Target contract already has a maximum number of unique stakers.
    * user should pick another target contract instead
6. Total staked amount would be below minimum staking amount requirement.

```js
console.log('Add example with JavaScript usage of nominationTransfer');
```

### Claim Staker Rewards

Once an era finishes, if user was an active staker, they can claim staker rewards.
This is done using `claim_staker` extrinsic call with the following parameter:
* `contract_id` - unique dApp identifier, denotes for which dApp stake rewards should be claimed

Rewards are always claimed for the oldest available era, onwards.
One successfull call equals 1 era claimed - to claim multiple era rewards, multiple calls should be submitted (or a single batch call).

It is possible to automatically re-stake the claimed rewards.
This can be controlled by the user by setting the reward destination via `set_reward_destination` extrinsic call.
Options are:
* `FreeBalance` - rewards are deposited into users free balance, and they can be used immediately for any purpose
* `StakeBalance` - rewards are deposited into users account, and are immediatelly locked & staked on the same contract

#### Errors
1. Contract has no stake.
    * user isn't staking on the contract or if they were staking previously, all pending rewards have already been claimed
2. Contract isn't operated.
    * Contract either doesn't exist in dApp staking or has been unregistered.
3. Era out of bounds.
    * Cannot claim reward for the current era since it's still ongoing.
4. There are too many era stake values in storage.
    * user can either turn off reward re-staking, or claim all pending rewards to free up some storage

```js
console.log('Add example with JavaScript usage of claim_staker and set_reward_destination');
```

### Claim dApp/Developer Reward

Similar to claiming staker rewards, this call will claim dApp reward into the developers account.
Reward is always deposited as free balance.
Used extrinsic call is `claim_dapp` with the following parameters:
* `contract_id` - unique dApp identifier, denotes for which dApp the rewards should be claimed
* `era` - era for which the rewards should be claimed

Unlike claiming staker rewards, dApp rewards require caller to specify the era for which the rewards are claimed.

#### Errors

1. Not operated contract.
    * contract either doesn't exist in the dApp staking protocol.
2. Era is out of bounds.
    * invalid era specified, must be lesser than the current era value
3. Reward already claimed for the specified era.
4. Not staked contract
    * contract had no stake at the specified era, making it ineligible for rewards

```js
console.log('Add example with JavaScript usage of claim_dapp');
```

## Usage From EVM dApps

Learn how to integrate dApp staking into your EVM dApp in the precompiles chapter:

[EVM Precompiled Contracts](/docs/build/evm/precompiles/staking/)
