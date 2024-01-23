---
sidebar_position: 2
---
# Accounts
## Overview

An account on Astar Network consists of two parts - a private key and a public key. A public key is also known as an address of an account because it is accessible and known to the public - just like an e-mail address, for example. A private key is a key to access and manage your address. With that said, anybody can send tokens to your address, but only you can access them with your private key. Therefore, it is crucial to keep your private keys safe at all times. 

Astar Network supports two virtual machines (Wasm VM and EVM) and therefore utilizes two account formats. 

## Substrate Accounts

Astar is built with Substrate, a framework to build blockchains, and uses Substrate accounts. Substrate-based chains use the underlying public key to derive one or more public addresses. Instead of using the public key directly, Substrate allows you generate multiple addresses and address formats for an account, meaning you only need to generate your public key, private key pair once and derive different addresses for different Substrate-chains. 

The private key is a cryptographically-secure sequence of randomly-generated numbers. For human readability, the private key generates a random sequence of words called a secret seed phrase or mnemonic.

The address format used in Substrate-based chains like Astar is ss58. ss58 is a modification of Base-58-check from Bitcoin, with some minor modifications. Notably, the format contains an address type prefix that identifies an address as belonging to a specific network.

Astar supports spezialized accounts, such as Proxy and Keyless accounts. 
You can read more about Proxy accounts [here](/docs/learn/Proxies).

## EVM Accounts

Astar EVM side allows Ethereum-style addresses (H160 format), which is 40+2 hex-characters long, in a Substrate based chain. This address matches a private key, which can be used to sign transactions in the Ethereum side of the chain. Furthermore, the address is mapped into a storage slot inside the Substrate Balance pallet to a Substrate-style address (H256 format).


## Learn more
[Create a Substrate account](/docs/use/manage-wallets/create-wallet/)

[Create an EVM account](/docs/use/evm-guides/setup-metamask/)

[Read about Substrate accounts](https://docs.substrate.io/learn/accounts-addresses-keys/)