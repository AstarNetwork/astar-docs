# Events
Last missing piece for our contract is event handling.

## What is an event for smart contract?
Events are important for smart contracts because they facilitate communication between smart contracts and their user interfaces. In traditional web development, a server response is provided in a callback to the frontend. In blockchain, when a transaction is executed, smart contracts can emit events to the blockchain that the frontend can then process. 

## Minting Event
In our contract there is one occasion where an event should be emitted and that is when token is minted.
One could expect that by calling Openbrush `mint_to()`, and event will be emitted but upon closer examination we can see that `emit_transfer_event()` has empty default [implementation](https://github1s.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/token/psp34/psp34.rs#L151-L152). This gives flexibility to create events for our needs.

```rust
default fn _emit_transfer_event(&self, _from: Option<AccountId>, _to: Option<AccountId>, _id: Id) {}
```
Let's define two events that are needed for token handling, *Transfer* and *Approve*. This needs to be done in the contracts's `lib.rs`. Please note that there is no mint event. Mint is covered by *Transfer* event where `from` will be the contract address.
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
And override event emission methods:
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
As a last check let's add event check at the end of our unit test. Since our test minted 5 tokens we expect 5 events to be emitted.
```rust
assert_eq!(5, ink_env::test::recorded_events().count());
```

After this step your code should look like [this](https://github.com/swanky-dapps/nft/tree/tutorial/events).
## Next step
Congratulations on the successful completion of this tutorial!
As a next step check the code from [main](https://github.com/swanky-dapps/nft/) branch for the repository used for this tutorial. There you can enhance your knowledge on:
- Better unit test coverage.
- Several new methods.
- End-to-end test.
- Better error handling.
