---
sidebar_position: 2
---

# Flipper 

This is step-by-step explanation of ink! smart contract by using the most simple app, which is flipper. You will understand the basic structure of ink! smart-contract.

#### What is Flipper

Flipper is the simplest application. It has only one boolean in the storage(`true` or `false`), and when you flip, the value will be changed in to the other.

#### Preparation

Please refer to [Prerequisites](./prerequisites.md)

#### Flipper App

In a folder run:

```bash
$ cargo contract new flipper # flipper is introduced from the beginning.
```

```bash
$ cd flipper/
$ cargo contract build #build flipper app
```


💡 If you get an error saying:
```bash
ERROR: cargo-contract cannot build using the "stable" channel. Switch to nightly.
```
Please try:
```bash
$ rustup default nightly
```

Then, you get the full package and code for the flipper App.

Let’s dive.

#### The File Structure of Flipper App

- `target`: build info, binary info
- `Cargo.lock`: lock file for dependency package
- `Cargo.toml`: Package Config
- `lib.rs`: Your contract logic

#### Flipper contract(lib.rs)

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod flipper {

    /// Defines the storage of your contract.
    /// Add new fields to the below struct in order
    /// to add new static storage fields to your contract.
    #[ink(storage)]
			    pub struct Flipper {
        /// Stores a single `bool` value on the storage.
        value: bool,
    }

    impl Flipper {
        /// Constructor that initializes the `bool` value to the given `init_value`.
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        /// Constructor that initializes the `bool` value to `false`.
        ///
        /// Constructors can delegate to other constructors.
        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        /// A message that can be called on instantiated contracts.
        /// This one flips the value of the stored `bool` from `true`
        /// to `false` and vice versa.
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Simply returns the current value of our `bool`.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }

    /// Unit tests in Rust are normally defined within such a `#[cfg(test)]`
    /// module and test functions are marked with a `#[test]` attribute.
    /// The below code is technically just normal Rust code.
    #[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use them here.
        use super::*;

        /// Imports `ink_lang` so we can use `#[ink::test]`.
        use ink_lang as ink;

        /// We test if the default constructor does its job.
        #[ink::test]
        fn default_works() {
            let flipper = Flipper::default();
            assert_eq!(flipper.get(), false);
        }

        /// We test a simple use case of our contract.
        #[ink::test]
        fn it_works() {
            let mut flipper = Flipper::new(false);
            assert_eq!(flipper.get(), false);
            flipper.flip();
            assert_eq!(flipper.get(), true);
        }
    }
}
```

#### Contract structure(lib.rs)

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod flipper {

		// This area is to define storage in the contract.
    #[ink(storage)]
    pub struct Flipper {
    }

		// This area is to define functional logic of the contract.
    impl Flipper {
    }

		// This area is to test. You basically need this to make sure your contract is valid.
    #[cfg(test)]
    mod tests {
    }
}
```

#### Storage

```rust
    #[ink(storage)]
    pub struct Flipper {

    }
```

This annotates a struct that represents the **contract's internal state.** ([details](https://use.ink/macros-attributes/storage)):
```rust
#[ink(storage)]
```

Storage types;

- Rust primitives types
    - `bool`
    - `u{8,16,32,64,128}`
    - `i{8,16,32,64,128}`
    - `String`
- Substrate specific types
    - `AccountId`
    - `Balance`
    - `Hash`
- ink! storage type
    - `Mapping`
- Custom data Structure [details](https://use.ink/datastructures/custom-datastructure)

This means the contract(called Flipper) stores a single `bool` value on the storage.

```rust
#[ink(storage)]
pub struct Flipper {
    value: bool,
}
```

#### Callable Functions

This Is called when the contract is deployed and is responsible for **bootstrapping the initial contract state** into the storage. ([details](https://use.ink/4.0.0-alpha.1/macros-attributes/constructor/))

```rust
#[ink(constructor)]
```

Constructor that initializes the `bool` value to the given `init_value`.

```rust
#[ink(constructor)]
pub fn new(init_value: bool) -> Self {
    Self { value: init_value }
}
```

Contracts are able to have multiple constructors. This is how to set default value of `bool`. As other language, default value of `bool` is `false`.

```rust
#[ink(constructor)]
pub fn default() -> Self {
    Self::new(Default::default())
}
```

This marks a function as **publicly dispatchable**, meaning that it is exposed in the contract interface to the outside world. ([details](https://use.ink/4.0.0-alpha.1/macros-attributes/message))
Note that all public functions must use the `#[ink(message)]` attribute.

```rust
#[ink(message)]
```

`flip` function modify storage items and, `get` function get the storage item.

```rust
#[ink(message)]
pub fn flip(&mut self) {
    self.value = !self.value;
}

#[ink(message)]
pub fn get(&self) -> bool {
    self.value
}
```

💡 If you are simply *reading* from the contract storage, you only need to pass `&self`. But if you want to *modify* storage items, you will need to explicitly mark it as mutable `&mut self`.

```rust
impl Flipper {
       
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        /// Constructor that initializes the `bool` value to `false`.
        ///
        /// Constructors can delegate to other constructors.
        #[ink(constructor)]
        pub fn default() -> Self {
            Self::new(Default::default())
        }

        /// A message that can be called on instantiated contracts.
        /// This one flips the value of the stored `bool` from `true`
        /// to `false` and vice versa.
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Simply returns the current value of our `bool`.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
```

#### Test

```rust
#[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use them here.
        use super::*;

        /// Imports `ink_lang` so we can use `#[ink::test]`.
        use ink_lang as ink;

        /// We test if the default constructor does its job.
        #[ink::test]
        fn default_works() {
            let flipper = Flipper::default();
            assert_eq!(flipper.get(), false);
        }

        /// We test a simple use case of our contract.
        #[ink::test]
        fn it_works() {
            let mut flipper = Flipper::new(false);
            assert_eq!(flipper.get(), false);
            flipper.flip();
            assert_eq!(flipper.get(), true);
        }
    }
```

#### Compile, Deploy and interact with contracts

Here is the guide how to deploy your contract. Once you deploy it, you can interact with the contracts there:

[Deploy using Polkadot UI](https://docs.astar.network/docs/wasm/sc-dev/polkadotjs-ui/)