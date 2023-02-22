---
sidebar_position: 9
---

# How to Generate Pseudo-Random Numbers in Ink! Smart Contract
Generating random numbers is an essential feature of many decentralized applications, but generating truly random numbers in a trustless, decentralized environment is a challenging problem. In this article, we will show you how to implement a simple pseudo-random function in your Ink! smart contract and generate pseudo-random numbers within a specified range.

## **Implementation**

First, create a new Ink! smart contract and modify the **`PseudoRandom`** struct to include the **`salt`** variable. The **`salt`** will be incremented by 1 each time the **`get_pseudo_random`** function is called.

```rust
#[ink(storage)]
pub struct PseudoRandom {
    salt: u64,
}
```

Then, update the **`get_pseudo_random`** function to take an input parameter for the maximum value in the range, and to return a number between 0 and the maximum value in the range using the following code:

```rust
use ink::env::hash;

#[ink(message)]
pub fn get_pseudo_random(&mut self, max_value: u8) -> u8 {
    let seed = self.env().block_timestamp();
    let mut input: Vec<u8> = Vec::new();
    input.extend_from_slice(&seed.to_be_bytes());
    input.extend_from_slice(&self.salt.to_be_bytes());
    let mut output = <hash::Keccak256 as hash::HashOutput>::Type::default();
    ink::env::hash_bytes::<hash::Keccak256>(&input, &mut output);
    self.salt += 1;
    let number = output[0] % (max_value + 1);
    number
}
```

This function generates a hash value that is based on the block timestamp and the incremented **`salt`** value. The **`max_value`** parameter is used to determine the maximum value in the range. The modulo operator **`% (max_value + 1)`** is then used to return a number between 0 and the maximum value in the range.

## **Usage**

To generate a pseudo-random number within a specified range, simply call the **`get_pseudo_random`** function with the maximum value in the range as the input parameter. For example, to generate a number between 0 and 99, you would call the function with a **`max_value`** of 99:

```rust
let mut my_contract = PseudoRandom::new();
let random_number = my_contract.get_pseudo_random(99);
```

### **Example Unit Test**

To ensure that the **`get_pseudo_random`** function works as expected, you can write a unit test that calls the function with different **`max_value`** parameters and checks that the generated random numbers are within the expected range. Here's an example unit test that you can add to your Ink! smart contract:

```rust
#[test]
fn test_get_pseudo_random() {
    let mut contract = PseudoRandom::new();
    for max_value in 1..=100 {
        let result = contract.get_pseudo_random(max_value);
        assert!(result <= max_value);
    }
}
```

## **Conclusion**

By implementing a pseudo-random function in your Ink! smart contract, you can generate pseudo-random numbers within a specified range in a decentralized and trustless environment. However, it is important to note that the **`get_pseudo_random`** function does not provide the same level of security and trust as a true verifiable random function (VRF).

While the function uses the block timestamp and a salt value to generate a hash value, which is then used to generate a pseudo-random number, it may still be possible for an attacker to predict the output of the function. Additionally, this implementation may not be suitable for applications that require high levels of security, such as gambling or financial applications.

If you require a truly verifiable and secure random function for your smart contract, you may want to consider using an external oracle solution or a specialized random number generator that is specifically designed for use in smart contracts.
