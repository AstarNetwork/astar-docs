# File & Folder Structure

## Each Contract Should be in its Own Crate

ink! uses [macros](https://use.ink/macros-attributes) to define your contract. It is composed of a struct that define your contract storage and implementation of associated methods and functions.

```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
pub mod contract {
    #[ink(storage)]
    pub struct ContractStorage {
        any_value: bool,
    }

    impl ContractStorage {
        #[ink(constructor)]
        pub fn constructor(init_value: bool) -> Self {
            Self { any_value: init_value }
        }
        
        #[ink(message)]
        pub fn callable_method(&mut self) {
            self.value = !self.value;
        }
    }
}
```

As defining an inherent `impl` for a type that is external to the crate where the type is defined is not [supported](https://doc.rust-lang.org/error_codes/E0116.html), we will need to define a Trait in an external crate and implement it, instead. This functionality is supported using the ink! macro `#[ink::trait_definition]` (see [ink! trait-definitions doc](https://use.ink/basics/trait-definitions/) for more information), but has some limitations, and it is not possible to have a default implementation.  

Therefore, the only solution, in ink!, is to implement an omnibus contract with all the code in the same file, which will not be easily readable or maintainable.

## Trait and Generic Implementation in Separate Files

In order to organise the business logic into different files, Openbrush uses [specialization](https://github.com/rust-lang/rfcs/pull/1210) that permits multiple `impl` blocks to be applied to the same type.  
With Openbrush, you can define as many Trait and generic implementations as are needed, which allows you to split up your code to more easily implement it into your contract. Of course, specialization also allows you to override a default implementation (if the method or impl is specialized with the [`default`](https://github.com/rust-lang/rfcs/blob/master/text/1210-impl-specialization.md#the-default-keyword) keyword).   
So you define a Trait and a generic implementation in a crate and within the contract you implement this Trait. If this impl block is empty `{}` specialization will implement the most specific implementation, which is the one you defined in the file. Every generic implementation in Openbrush (PSP22, PSP34, ..) uses the `default` keyword that makes these functions *overrideable*.

Define your Trait in a file:

```rust
#[openbrush::trait_definition]
pub trait MyTrait {
    #[ink(message)]
    fn method(&self) -> u32;
}
```
*trait.rs*

And a generic implementation in another file:
```rust
impl MyTrait for T
{
    #[ink(message)]
    fn method(&self) -> u32 {
        unimplemented!()
    }
}
```
*impl.rs*

And implement it in your contract file:
```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
pub mod contract {
    // Import everything from the crate
    use external_crate::traits::*;
    #[ink(storage)]
    pub struct ContractStorage {
        any_value: bool,
    }
    
    // Implement the Trait
    // Even if this impl block is empty
    // Specialization will implement the one defined in the impl.rs file
    impl MyTrait for ContractStorage {}

    impl ContractStorage {
        #[ink(constructor)]
        pub fn constructor(init_value: bool) -> Self {
            Self { any_value: init_value }
        }
        
        #[ink(message)]
        pub fn callable_method(&mut self) {
            self.value = !self.value;
        }
    }
}
```
*lib.rs*

## File Structure of the DEX Project

We will put the Trait and generic implementations in separate files, as described below, when building the DEX.
The contracts will be in the `contracts` folder and the Traits & generic implementation will be in the `logics` folder. All of these will be within the same project workspace.

```bash
├── uniswap-v2
│   ├── contracts
│   └── logics
├── Cargo.lock
├── Cargo.toml
├── .rustfmt
└── .gitignore
```

In the `contracts` folder there should be one folder for each contract, each packaged as crates with their own `Cargo.toml` and `lib.rs` files.    
The `logics` folder is a crate which contains a folder for `traits` and another for `impls`.
Inside the `traits` folder there should be one file per contract. Inside the `impls` there should be one folder per contract and inside, one file for the implementation of the trait, and another 'data' file used for storage.

```bash
├── logics
│   ├── impls
│   │   ├── factory
│   │   │    ├── mod.rs
│   │   │    ├── data.rs
│   │   │    └── factory.rs
│   │   ├── pair
│   │   │    ├── mod.rs
│   │   │    ├── data.rs
│   │   │    └── pair.rs
│   │   └── mod.rs
│   └── traits
│       ├── mod.rs
│       ├── factory.rs
│       ├── pair.rs
│       ├── math.rs
├── Cargo.toml
└── lib.rs
```


## Resources 
OpenBrush - [Setup a project](https://docs.openbrush.io/smart-contracts/example/setup_project).


