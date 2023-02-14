# Events
The last thing our contract will need at this point is an event handler.

## What are Events for Smart Contracts?
Events are important for smart contracts because they facilitate communication between the contract itself and the user interface. In traditional Web2 development, a server response is provided in a callback to the frontend. In Web3, when a transaction is executed, smart contracts emit events to the blockchain that the frontend is able to process. 

## Minting Event
In our contract, an event should be emitted when a token is minted.
One could expect that by calling the Openbrush `_mint_to()` function an event will be emitted, but upon closer examination we can see that `_emit_transfer_event()` has an empty default [implementation](https://github1s.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/token/psp34/psp34.rs#L151-L152). This grants developers flexibility to create events that are suitable for their own needs.

```rust
default fn _emit_transfer_event(&self, _from: Option<AccountId>, _to: Option<AccountId>, _id: Id) {}
```

Let's define two events that are required for token handling, *Transfer* and *Approve*, in the contracts's `lib.rs` file. Please note that there is no `Mint` event, as it's covered by the *Transfer* event, in which case `from` will be the contract address.
```rust
use ink_lang::codegen::{
    EmitEvent,
    Env,
};

/// Event emitted when a token transfer occurs.
#[ink(event)]
pub struct Transfer {
    #[ink(topic)]
    from: Option<AccountId>,
    #[ink(topic)]
    to: Option<AccountId>,
    #[ink(topic)]
    id: Id,
}

/// Event emitted when a token approve occurs.
#[ink(event)]
pub struct Approval {
    #[ink(topic)]
    from: AccountId,
    #[ink(topic)]
    to: AccountId,
    #[ink(topic)]
    id: Option<Id>,
    approved: bool,
}
```

Override the default event emission function:
```rust
impl psp34::Internal for Shiden34Contract {
    fn _emit_transfer_event(&self, from: Option<AccountId>, to: Option<AccountId>, id: Id) {
        self.env().emit_event(Transfer { from, to, id });
    }

    fn _emit_approval_event(
        &self,
        from: AccountId,
        to: AccountId,
        id: Option<Id>,
        approved: bool,
    ) {
        self.env().emit_event(Approval {
            from,
            to,
            id,
            approved,
        });
    }
}
```

## Update Unit Test
As a final check let's add an event check at the end of our unit test. Since our test minted 5 tokens, we should expect 5 events to be emitted.
```rust
assert_eq!(5, ink_env::test::recorded_events().count());
```

At this stage, your code should look something like [this](https://github.com/swanky-dapps/nft/tree/tutorial/events).

## Next Step
Congratulations! You've made it through all the steps required to build your NFT Contract!

As a next step, review the code in the [main](https://github.com/swanky-dapps/nft/) branch for the repository used for this tutorial. There you can enhance your knowledge about:
- Improving the unit test coverage.
- Adding new useful functions.
- End-to-end testing.
- Improving error handling.
