# File & Folder structure

## Each contract should be in its own crate

ink! use [macros](https://use.ink/macros-attributes) to define your contract. It is composed of a struct that define your contract storage and implementation of associated methods and functions.

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

As defining inherent `impl` for a type outside of the crate where the type is defined is not [supported](https://doc.rust-lang.org/error_codes/E0116.html) in Rust, it is however possible to define a Trait in an outside crate and implement it. ink! implemented this functionality with the macro `#[ink::trait_definition]` (see [ink! trait-definitions doc](https://use.ink/basics/trait-definitions/)) but it has some limitations as it is not possible to have a default implementation.  

So the only solution, in ink!, to implement a big contract is to have all the code in the same file. It will not be easily readable and maintainable.

## Trait and generic implementation in separate files

In order to organise business logic in different files Openbrush use [specialization](https://github.com/rust-lang/rfcs/pull/1210) that permits multiple `impl` blocks to apply to the same type. So you can define as many Trait and its generic implementation as needed. This allows to split your code and also to be easily implemented into your contract. 

Of course specialization also allow to override a default implementation (if the method or the impl is specialized with the [`default`](https://github.com/rust-lang/rfcs/blob/master/text/1210-impl-specialization.md#the-default-keyword) keyword). So you define a Trait and a generic implementation in a crate and in the contract you implement this Trait. If this impl block is empty `{}` specialization will implement the most specific implementation which is the one you defined in the file.
Every generic implementation in openbrush (PSP22, PSP34, ..) use the `default` keyword that makes this functions *overrideable*.    
Define your Trait in a file:

```rust
#[openbrush::trait_definition]
pub trait MyTrait {
    #[ink(message)]
    fn method(&self) -> u32;
}
```
*trait.rs*

The generic implementation in another file:
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

## Structure of DEX Project

We will use the Trait and generic implementation in separate files described below for the DEX.
The contracts will be on `contracts` folder and the Traits & generic implementation in `logics` folder. All this in the same workspace.

```bash
├── uniswap-v2
│   ├── contracts
│   └── logics
├── Cargo.lock
├── Cargo.toml
├── .rustfmt
└── .gitignore
```

In the `contracts` folder there is one folder by contract and inside the folder a crate with a `Cargo.toml` and a `lib.rs`.    
The `logics` folder is a crate that is composed of Traits & and implementations. There is one folder for `traits` and one fore `impls`.
Inside the `traits` folder there is one file per contract. Inside the `impls` there is one folder per contract and inside one file for the implementation of the trait and one 'data' file for the storage.

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
OpenBrush - [Setup a project](https://docs.openbrush.io/smart-contracts/example/setup_project)


