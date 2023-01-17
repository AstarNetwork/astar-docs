---
sidebar_position: 2
---

# Create Pair

If you start tutorial from here, Please checkout this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/storage-end) and open it in your IDE.

## 1. Add Create Pair to Factory Trait

We will implement [createPair](https://github.com/Uniswap/v2-core/blob/ee547b17853e71ed4e0101ccfd52e70d5acded58/contracts/UniswapV2Factory.sol#L23) function of Factory contract.   
In *./logics/traits/factory.rs* add the **create_pair** function to Factory trait as well as the internal child function **_instantiate_pair** that will have to be implemented in the contract crate.
The reason why we need an internal **_instantiate_pair** here is because the instantiate builder is not part of `#[openbrush::wrapper]` so we need to use the one from ink! by importing Pair contract as `ink-as-dependancy`.
The **create_pair** message function returns the address of the instantiated Pair contract.
Add also the function to emit create_pair event that will have to be implemented in the contract:
```rust
pub trait Factory {
    ...
    #[ink(message)]
    fn create_pair(
        &mut self,
        token_a: AccountId,
        token_b: AccountId,
    ) -> Result<AccountId, FactoryError>;

    fn _instantiate_pair(&mut self, salt_bytes: &[u8]) -> Result<AccountId, FactoryError>;
    ...
    fn _emit_create_pair_event(
        &self,
        _token_0: AccountId,
        _token_1: AccountId,
        _pair: AccountId,
        _pair_len: u64,
    );
}
```

## 2. Implement Create Pair

In *./logics/impls/factory/factory.rs* let's implement **create_pair** function body:
#### 1. Checks that addresses are not identical

AccountId derives `Eq` trait, so comparison operators can be used:
```rust
impl<T: Storage<data::Data>> Factory for T {
    ...
    fn create_pair(
        &mut self,
        token_a: AccountId,
        token_b: AccountId,
    ) -> Result<AccountId, FactoryError> {
        if token_a == token_b {
            return Err(FactoryError::IdenticalAddresses)
        }
    }
}
```

### 2. Order The Tuple
```rust
let token_pair = if token_a < token_b {
    (token_a, token_b)
} else {
    (token_b, token_a)
};
```

#### 3. Checks if first tuple address is not ZERO_ADDRESS
```rust
if token_pair.0 == ZERO_ADDRESS.into() {
    return Err(FactoryError::ZeroAddress)
}
```

### 4. Instantiate Pair Contract     
The [generate_address](https://github.com/paritytech/substrate/blob/982f5998c59bd2bd455808345ae1bd2b1767f353/frame/contracts/src/lib.rs#L187) function in `pallet_contract` is akin to the formula of ETH's CREATE2 opcode. There is no CREATE equivalent because CREATE2 is strictly more powerful. Formula: `hash(deploying_address ++ code_hash ++ salt)`
Instantiation of a contract will determine deterministically the address of the instantiated contract with the concatenated hash of:
- salt (in bytes)
- address of deployer
- code_hash    

As `code_hash` and `deployer` (factory contract address) will be unchanged at each call, the `salt_bytes` must be unique for each call. As factory will instance an unique Pair contract for each pair, we can use hash of tokens address as unique salt:
```rust
let salt = Self::env().hash_encoded::<Blake2x256, _>(&token_pair);
let pair_contract = self._instantiate_pair(salt.as_ref())?;
```

## 5. Initialize Pair
```rust
PairRef::initialize(&pair_contract, token_pair.0, token_pair.1)?;
```

#### 6. Save in storage mapping in both direction and push par address to all_pairs
```rust
self.data::<data::Data>()
    .get_pair
    .insert(&(token_pair.0, token_pair.1), &pair_contract);
self.data::<data::Data>()
    .get_pair
    .insert(&(token_pair.1, token_pair.0), &pair_contract);
self.data::<data::Data>().all_pairs.push(pair_contract);
```

#### 6. Emit create_pair event
```rust
self._emit_create_pair_event(
    token_pair.0,
    token_pair.1,
    pair_contract,
    self.all_pair_length(),
);
```

#### 7. Return the address of the instantiated contract
```rust
Ok(pair_contract)
```

Full function should look like this:
```rust
    fn create_pair(
    &mut self,
    token_a: AccountId,
    token_b: AccountId,
) -> Result<AccountId, FactoryError> {
    if token_a == token_b {
        return Err(FactoryError::IdenticalAddresses)
    }
    let token_pair = if token_a < token_b {
        (token_a, token_b)
    } else {
        (token_b, token_a)
    };
    if token_pair.0 == ZERO_ADDRESS.into() {
        return Err(FactoryError::ZeroAddress)
    }

    let salt = Self::env().hash_encoded::<Blake2x256, _>(&token_pair);
    let pair_contract = self._instantiate_pair(salt.as_ref())?;

    PairRef::initialize(&pair_contract, token_pair.0, token_pair.1)?;

    self.data::<data::Data>()
        .get_pair
        .insert(&(token_pair.0, token_pair.1), &pair_contract);
    self.data::<data::Data>()
        .get_pair
        .insert(&(token_pair.1, token_pair.0), &pair_contract);
    self.data::<data::Data>().all_pairs.push(pair_contract);

    self._emit_create_pair_event(
        token_pair.0,
        token_pair.1,
        pair_contract,
        self.all_pair_length(),
    );

    Ok(pair_contract)
}
```

Also implement **_instantiate_pair** with `unimplemented!()` macro in body to ensure it will be overridden in contract (so `default` keyword should be added):
```rust
default fn _instantiate_pair(&mut self, _salt_bytes: &[u8]) -> Result<AccountId, FactoryError> {
    // need to be overridden in contract
    unimplemented!()
}
```

Add import statements:
```rust
use crate::traits::pair::PairRef;
pub use crate::{
    impls::factory::*,
    traits::factory::*,
};
use ink_env::hash::Blake2x256;
use openbrush::traits::{
    AccountId,
    Storage,
    ZERO_ADDRESS,
};
...
```

### 3. Implement Event

In *./logics/impls/factory/factory.rs* add empty implementation of **_emit_create_pair_event**:
```rust
default fn _emit_create_pair_event(
    &self,
    _token_0: AccountId,
    _token_1: AccountId,
    _pair: AccountId,
    _pair_len: u64,
) {
}
```

in the contracts *./contracts/factory/lib.rs* add the `PairCreated` event struct and override the implementation of emit event:
```rust
...
use ink_lang::{
    codegen::{
        EmitEvent,
        Env,
    },
};
...
#[ink(event)]
pub struct PairCreated {
    #[ink(topic)]
    pub token_0: AccountId,
    #[ink(topic)]
    pub token_1: AccountId,
    pub pair: AccountId,
    pub pair_len: u64,
}
...
impl Factory for FactoryContract {
    fn _emit_create_pair_event(
        &self,
        token_0: AccountId,
        token_1: AccountId,
        pair: AccountId,
        pair_len: u64,
    ) {
        EmitEvent::<FactoryContract>::emit_event(
            self.env(),
            PairCreated {
                token_0,
                token_1,
                pair,
                pair_len,
            },
        )
    }
}
```

### 4. Override _instantiate_pair

As you cannot call constructor of contract using `#[openbrush::wrapper]`, we need to use contract Ref from ink!.     
If you want to import a contract as `ink-as-dependency` it should be built as a library crate `rlib`. Add this to the `Cargo.toml` of Pair contract in *./contracts/pair/Cargo.toml*:
```toml
...
[lib]
name = "pair_contract"
path = "lib.rs"
crate-type = [
    "cdylib",
    "rlib"
]
...
```

Then import Pair contract as `ink-as-dependency` in Factory contract. Add dependency to the `Cargo.toml` of Factory contract in *./contracts/factory/Cargo.toml*:
```toml
...
pair_contract = { path = "../pair", default-features = false, features = ["ink-as-dependency"] }
...
[features]
default = ["std"]
std = [
"ink_primitives/std",
"ink_metadata",
"ink_metadata/std",
"ink_env/std",
"ink_storage/std",
"ink_lang/std",
"scale/std",
"scale-info",
"scale-info/std",
"pair_contract/std",
"openbrush/std",
"uniswap_v2/std"
]
```

In the contract crate  *./contracts/factory/lib.rs* add imports statements:
```rust
...
use ink_lang::{
    codegen::{
        EmitEvent,
        Env,
    },
    ToAccountId,
};
use pair_contract::pair::PairContractRef;
```

In **_instantiate_pair** function body:
#### 1. Get pair code_hash from storage
```rust
...
impl Factory for FactoryContract {
    fn _instantiate_pair(&mut self, salt_bytes: &[u8]) -> Result<AccountId, FactoryError> {
        let pair_hash = self.factory.pair_contract_code_hash;
    }
    ...
}
```

#### 2. Instantiate Pair
Use [create builder](https://github.com/paritytech/ink/blob/v3.4.0/crates/env/src/call/create_builder.rs) from ink!. we call **new** constructor from Pair and pass no endowment (as storage rent has been removed it is not needed). it returns the accountId back to the caller:
```rust
...
let pair = PairContractRef::new()
    .endowment(0)
    .code_hash(pair_hash)
    .salt_bytes(&salt_bytes[..4])
    .instantiate()
    .map_err(|_| FactoryError::PairInstantiationFailed)?;
```

#### 3. Return Pair Address
```rust
...
Ok(pair.to_account_id())
```

Full function:
```rust
fn _instantiate_pair(&mut self, salt_bytes: &[u8]) -> Result<AccountId, FactoryError> {
    let pair_hash = self.factory.pair_contract_code_hash;
    let pair = PairContractRef::new()
        .endowment(0)
        .code_hash(pair_hash)
        .salt_bytes(&salt_bytes[..4])
        .instantiate()
        .map_err(|_| FactoryError::PairInstantiationFailed)?;
    Ok(pair.to_account_id())
}
```

### 5. Implement Errros

In *./logics/traits/factory.rs* implement `From` trait from `PairError` and add it to `FactoryError`. Also add Error variants used in create pair implementation:
```rust
use crate::traits::pair::PairError;
...
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum FactoryError {
    PairError(PairError),
    ZeroAddress,
    IdenticalAddresses,
    PairInstantiationFailed,
}

impl From<PairError> for FactoryError {
    fn from(error: PairError) -> Self {
        FactoryError::PairError(error)
    }
}
```


And that's it! Check your Factory contract with (to run in contract folder):
```console
cargo contract build
```
It should now look like this [branch](https://github.com/AstarNetwork/wasm-tutorial-dex/tree/tutorial/factory_create_pair_end).
