---
sidebar_position: 2
---

# Flipper Contract
This is step-by-step explanation of the process behind building an ink! smart contract, using a simple app called Flipper. The examples provided within this guide will help you develop an understanding of the basic elements and structure of ink! smart contracts.

## What is Flipper?
Flipper is a basic smart contract that allows the user to toggle a boolean value located in storage to either `true` or `false`. When the flip function is called, the value will change from one to the other.

## Prerequisites
Please refer to the [previous section](./flipper-contract.md) for the list of prerequisites.

## Flipper Smart Contract
In a new project folder, execute the following:

```bash
$ cargo contract new flipper # flipper is introduced from the beginning.
```

```bash
$ cd flipper/
$ cargo contract build #build flipper app
```

💡 If you receive an error such as:
```bash
ERROR: cargo-contract cannot build using the "stable" channel. Switch to nightly.
```
Execute:
```bash
$ rustup default nightly
```
to reconfigure the default Rust toolchain to use the nightly build, or
```
$ cargo +nightly contract build
```
to use the nightly build explicitly, which may be appropriate for developers working exclusively with ink!

Once the operation has finished, and the Flipper project environment has been initialized, we can perform an examination of the file and folder structure.
Let’s dive a bit deeper into the project structure:

### The File Structure of Flipper

- `target`: Contains build / binary information.
- `Cargo.lock`: The lock file for dependency package.
- `Cargo.toml`: The package configuration.
- `lib.rs`: The contract logic.

### Flipper Contract `lib.rs`

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

### Contract Structure `lib.rs`

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod flipper {

		// This section defines storage for the contract.
    #[ink(storage)]
    pub struct Flipper {
    }

		// This section defines the functional logic of the contract.
    impl Flipper {
    }

		// This section is used for testing, in order to verify contract validity.
    #[cfg(test)]
    mod tests {
    }
}
```

### Storage

```rust
    #[ink(storage)]
    pub struct Flipper {

    }
```

This annotates a struct that represents the **contract's internal state.** ([details](https://use.ink/macros-attributes/storage)):
```rust
#[ink(storage)]
```

Storage types:
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

This means the contract (Flipper) stores a single `bool` value in storage.

```rust
#[ink(storage)]
pub struct Flipper {
    value: bool,
}
```

### Callable Functions
At the time the contract is deployed, a constructor is responsible for **bootstrapping the initial state** into storage. [For more information](https://use.ink/macros-attributes/constructor).

```rust
#[ink(constructor)]
```

The addition of the following function will initialize `bool` to the specified `init_value`.

```rust
#[ink(constructor)]
pub fn new(init_value: bool) -> Self {
    Self { value: init_value }
}
```

Contracts can also contain multiple constructors. Here is a constructor that assigns a default value to `bool`. As other language, default value of `bool` is `false`.

```rust
#[ink(constructor)]
pub fn default() -> Self {
    Self::new(Default::default())
}
```

The following will permit a function to be **publicly dispatchable**, meaning that it will be exposed in the contract interface to the outside world. [For more information](https://use.ink/4.0.0-alpha.1/macros-attributes/message)). Note that all public functions **must** use the `#[ink(message)]` attribute.

```rust
#[ink(message)]
```

The `flip` function modifies storage items, and `get` function retrieves a storage item.

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

💡 If you are simply *reading* from contract storage, you will only need to pass `&self`, but if you wish to *modify* storage items, you will need to explicitly mark it as mutable `&mut self`.

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

### Test

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

### Compile, Deploy and Interact with Contracts

Follow this guide to deploy your contract [using Polkadot UI](https://docs.astar.network/docs/wasm/sc-dev/polkadotjs-ui/). Once deployed, you will be able to interact with it.

