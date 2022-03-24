---
sidebar_position: 5
---

# Account scheme
## **Using Astar Native Account Between Substrate and EVM**
### **Introduction**
This documentation will show you the various types of accounts that can be used within Substrate, and how you can use EVM within Substrate. As the concept of keys in Substrate is very expandable and complex, we will narrow our focus as a user who is managing keys from different layers within Substrate, such as the native blockchain layer, and the EVM layer.

**TL;DR:**
- Substrate supports multiple signer types.
- You can add the EVM pallet to use EVM within Substrate.
- Substrate native accounts are in SS58 format, while EVM accounts are in H160 format.
- Although Substrate can access the EVM state, the EVM cannot access the Substrate state.
- You can map the SS58 account to H160 to transfer between the two accounts.

### **Substrate and SS58**
Substrate is a layer 1 blockchain framework that is used to create various blockchains with custom functionality. By default, Substrate blockchains use the SS58 address format to send and receive transactions. SS58 is a modification of Base-58-check from Bitcoin with some minor changes. Notably, the format contains an *address type* prefix that identifies an address as belonging to a specific network ([https://docs.substrate.io/v3/advanced/ss58/](https://docs.substrate.io/v3/advanced/ss58/)).

Example of an SS58 address: `aLoNHLwqd75cniRoF2k2DrXgsbUWacuCxqc6d6BBmvG3NVQ`.

### **EVM and H160**

EVM is a virtual machine that allows arbitrary code execution with transactions within Ethereum ([https://ethdocs.org/en/latest/introduction/what-is-ethereum.html#ethereum-virtual-machine](https://ethdocs.org/en/latest/introduction/what-is-ethereum.html#ethereum-virtual-machine)). Although EVM started with Ethereum, with modern-day blockchains, EVM is more of a standard that allows a blockchain to be ‘Ethereum-compatible’ and share the vast Ethereum ecosystem within other blockchains. Substrate has a collection of pallets called the Frontier framework ([https://github.com/paritytech/frontier](https://github.com/paritytech/frontier)) that adds Ethereum compatibility and accounts alongside Substrate native environments.

Ethereum uses a 160-bit hex string as its public address, which users can send and receive transactions. On Substrate, we call this format H160, for 160-bit hash. For a blockchain to be Ethereum-compatible, they must use H160 accounts, as that is the only account format that EVM and all tools within the Ethereum ecosystem will recognize. This rule applies to Substrate chains with the EVM pallet as well.

Example of an H160 address: `0x4C40D74739A7C95D8358191D68E6d5C77a867E12`.

## **Accounts**

### **Substrate Public Key Types**

Substrate natively supports three types of accounts ([source](https://docs.substrate.io/v3/advanced/cryptography/)):

- ECDSA: a signature scheme using the [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) curve. This is the same cryptographic algorithm used to secure [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin) and [Ethereum](https://en.wikipedia.org/wiki/Ethereum).
- Ed25519: [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) is an EdDSA signature scheme using [Curve25519](https://en.wikipedia.org/wiki/Curve25519). It is carefully engineered at several levels of design and implementation to achieve very high speeds without compromising security.
- SR25519: [SR25519](https://research.web3.foundation/en/latest/polkadot/keys/1-accounts-more.html) is based on the same underlying curve as [Ed25519](https://docs.substrate.io/v3/advanced/cryptography/#ed25519). However, it uses Schnorr signatures instead of the EdDSA scheme. SR25519 does not expose its public keys.

Users can sign transactions and invoke extrinsic calls using any of these keys from the Polkadot-js wallet or wallets based on the same framework.

Generally, the SR25519 scheme is used to generate the keys that can produce blocks using the Aura. The Ed25519 scheme with the same seed phrase as the SR25519 is used to generate the key for finalizing the block using Grandpa ([https://docs.substrate.io/tutorials/v3/private-network/#alice-and-bob-start-a-blockchain](https://docs.substrate.io/tutorials/v3/private-network/#alice-and-bob-start-a-blockchain)). ECDSA is an alternative scheme for keys that can sign Substrate transactions first added to [Substrate in 2019](https://github.com/paritytech/substrate/pull/3861) by Gavin Wood. The ECDSA scheme is used to add public key compatibility for accounts that are used in Bitcoin or Ethereum.

Although Substrate supports multiple cryptographic algorithms, for the users to receive and make transactions, the algorithm will not matter at all as all three of them will show the exact same behavior.

For example, consider the seed phrase `chimney manage ritual space armed kick angle cram indoor valid pipe margin`. Using this phrase will result in the following accounts:

```
SR25519: XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK
Ed25519: bBfbreU46m2NMLcvDsPMUVkfRNZm7fcXbJJ4drZXParAYaY
ECDSA: Y7hpF7NCiSbG15xvVHj4ktntqFCgBurutKaCBPnhVUV5ecn
```

With a single seed phrase, we can create three different public addresses, and by changing the cryptographic scheme, the user can control all three of these accounts.

### **Ethereum Keys**

Ethereum only supports the ECDSA signature scheme that is the same throughout all Ethereum-compatible networks. The major difference between Substrate ECDSA and Ethereum ECDSA is the produced address format.

<center>
<img src="https://miro.medium.com/max/486/1*9rewWI0WcPnFDWdkJjAQfw.png" alt="Ethereum Keys" border="1"></img>
</center>

To oversimplify the process, both Substrate and Ethereum ECDSA accounts will share the public key, but the final hashing algorithm is different which will produce a different result. Furthermore, Substrate accounts will encode the Blake2 hashed public key to SS58, while the Ethereum address uses a different hashing algorithm. Note that this is a very general explanation, so some technical details have been ignored.

For the end-users, the difference between which accounts they use to sign Substrate transactions or Ethereum transactions will depend on the type of wallet they use. For example, users signing with MetaMask will only be able to sign Ethereum-compatible network transactions while users using Polkadot-js wallet will only be able to sign Substrate-based transactions.

## **EVM on Substrate**

### **Architecture**

The architecture for a Substrate blockchain that implements the EVM pallet may seem complicated at a glance, but once you understand that the EVM is a separate sandbox with its own accounts and balances that only shares the block state as the host Substrate blockchain, then it will be much easier to understand in isolation.

![https://miro.medium.com/max/1400/1*WAj7eNBvh05s3RoaC7AYFA.jpeg](https://miro.medium.com/max/1400/1*WAj7eNBvh05s3RoaC7AYFA.jpeg)

The overall architecture can be expressed like the above diagram. There are a couple of important points to note:

- The EVM environment works on top of Substrate. This means that the block height of the EVM sandbox will depend on the host Substrate network and the host Substrate network will be able to access the EVM state, but the EVM sandbox will not be able to access or mutate the host Substrate network’s state through normal means. Substrate state transition from EVM can only be achieved via custom EVM precompiled contracts.
- The EVM environment exposes its own RPC endpoint. The endpoint can be exposed by implementing the [Frontier RPC client](https://github.com/paritytech/frontier/blob/master/client/rpc/src/lib.rs) and the endpoint is [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474) compatible, which means tools and sites that work with Ethereum will be fully compatible with the EVM sandbox within Substrate. You can use MetaMask to connect to the network and view or send tokens like you would on other Ethereum-compatible chains.
- The EVM environment has its own balance called the EVM deposit, which can be withdrawn by Substrate native accounts. A native Substrate SS58 address can be converted to an H160 address that is mapped to an EVM deposit, and an EVM H160 address can be converted to an SS58 address. This allows the accounts to transfer tokens from the native balance to an EVM balance, and vice versa. However, this is a lossy conversion, so you cannot convert an SS58 to H160 and back to the same SS58 address. Furthermore, you can only sign transactions within the environment that which the account was created. So for example, through normal ways, you cannot sign an EVM transaction with a native account or the other way around.

If we ignore the address conversion and transaction between EVM and native Substrate balances, you can view the overall architecture of Substrate with EVM as having two separate blockchains that work from a single node. Users can use EVM with MetaMask without having to ever touch or understand Substrate, or use Substrate with Polkadot-js wallet without ever touching EVM at all.

### **The EVM Layer in Perspective**

To illustrate the fact that the EVM pallet works on top of Substrate, consider the following example.

![https://miro.medium.com/max/1400/1*yr35oqgxPJsUK0uR3Aybmw.png](https://miro.medium.com/max/1400/1*yr35oqgxPJsUK0uR3Aybmw.png)

On Astar mainnet [block 539982](https://astar.subscan.io/block/539982), there were 6 extrinsic calls. Excluding the three intrinsic calls (calls that were executed by the blockchain), there are two Substrate balance transfers and one Ethereum transaction.

![https://miro.medium.com/max/1400/1*_thmN46O149p-GPMUd37UQ.png](https://miro.medium.com/max/1400/1*_thmN46O149p-GPMUd37UQ.png)

If we look at the same block number with an [EVM explorer](https://blockscout.com/astar/block/539982/transactions), you can see that there is only one transaction.

The Substrate RPC allows you to view the native transactions and the transactions within the EVM sandbox while accessing the chain through the EVM RPC will only allow you to view the transactions that happened within the EVM pallet.

![https://miro.medium.com/max/1400/1*X_FI5-GfEdx0zYBYb6U37A.png](https://miro.medium.com/max/1400/1*X_FI5-GfEdx0zYBYb6U37A.png)

The Ethereum extrinsic call will emit the `ethereum.Executed` event which contains the caller’s H160 address, the target H160 address, and the EVM transaction hash (which is different from the Substrate transaction hash. Also note that EVM calls do not have a Substrate transaction hash). This event is formatted for Substrate networks to passively read the state transition within the EVM sandbox.

![https://miro.medium.com/max/1400/1*FgNXP1Edrb8mTYAbh7Id7w.png](https://miro.medium.com/max/1400/1*FgNXP1Edrb8mTYAbh7Id7w.png)

Looking at the [transaction hash](https://blockscout.com/astar/tx/0x49d6f414f196442dfcd726cb2c5c61f9861d81e9074ca2e5a21ecf62c1b3aa9f/token-transfers) from the EVM RPC will return the detailed transaction. You can see that the `from` and the `to` address is the same as the ones from the Substrate block event, though the EVM RPC will return the detailed transaction data.

This is a bridge transaction, where the user is swapping 610 WASTR tokens from another blockchain.

![https://miro.medium.com/max/1400/1*WT1W1ZP9w-OYxkNo6z2n-A.png](https://miro.medium.com/max/1400/1*WT1W1ZP9w-OYxkNo6z2n-A.png)

Looking at the block event shows that the token minting and token burning event were emitted.

However, if we look into this account’s state transition within Substrate, something interesting will happen.

![https://miro.medium.com/max/1400/1*UAv99QigipjX6yAkEvpgPA.png](https://miro.medium.com/max/1400/1*UAv99QigipjX6yAkEvpgPA.png)

If we look at the [Ethereum transaction event](https://astar.subscan.io/extrinsic/539982-5) in detail, we can see the token minting event and the burning event with the correct amount. However, one interesting detail is the account. Although the EVM RPC returns an H160 address, the Substrate RPC will return an SS58 address for all accounts within the EVM sandbox. This is because, in Substrate, the default address format is always SS58.

So how does Substrate convert the address format, and how does it handle the balances?

### **EVM Deposits and Address Conversion**

The `@polkadot-js/util-crypto` package exports the function `evmToAddress`. This function will take an H160 address and prefix it with `evm:`, convert the string into a byte array, hash the bytes with Blake2, and encode the public key to SS58. If the provided H160 address is from a valid EVM signer (as in, the account was created from wallets like MetaMask), this will result in a mapped SS58 address. Sending tokens from an SS58 account to this mapped SS58 address will allow the original H160 account to access the funds within the EVM sandbox.

It is also possible to convert an SS58 address to an H160 address by using the `addressToEvm` function from the same package. Substrate converts the address by first decoding the SS58 string to retrieve the hashed public key (which is a 180-bit hash, or H180), and remove the trailing 20 bits so we result in a 160-bit hash. If the provided SS58 address is from a valid Substrate signer, the resulting string will be a mapped H160 address. If an EVM signer sends a token to this address, the tokens will be held in the EVM deposit of the original SS58 account. The account can reclaim the tokens through the `[evm.withdraw](https://github.com/paritytech/frontier/blob/1ef659002e96ca63a9383d5b5c7aaa77cce4c9b2/frame/evm/src/lib.rs#L155)` extrinsic call.

The EVM pallet keeps a [hash map](https://github.com/paritytech/frontier/blob/1ef659002e96ca63a9383d5b5c7aaa77cce4c9b2/frame/evm/src/lib.rs#L533) of the H160 and SS58 accounts, which is how Substrate can associate between the mapped H160 address to a mapped SS58 address.

You might have also noticed that the address conversion is a lossy operation, meaning that you cannot reverse the conversion process. Once you convert an SS58 address to an H160 address, you cannot convert that back. So when converting an address to a valid mapped address, you must be aware of the original signer. Substrate signer can be converted from an SS58 address to an H160, and an EVM signer can be converted to an SS58 address. The other way around will not create a valid mapped address.

Now going back to the [extrinsic call 539982–5](https://astar.subscan.io/extrinsic/539982-5) and the EVM [transaction hash 0x49d6f414f196442dfcd726cb2c5c61f9861d81e9074ca2e5a21ecf62c1b3aa9f](https://blockscout.com/astar/tx/0x49d6f414f196442dfcd726cb2c5c61f9861d81e9074ca2e5a21ecf62c1b3aa9f/token-transfers). Where did the SS58 address displayed from the Substrate RPC come from?

The EVM transaction shows that address `0x3c0561dd616cb7cc25ef728869f93c01b6225ee0` sent 610 ASTR tokens to `0x7cae7feb55349feadb8f84468f692450d92597bc`. But the Substrate event shows that address `Z3oCmw6ndSgoWvFUU1vsvC7KK1hQNBRUKQXjJs9iLY7Pp7i` sent 610 ASTR tokens to `bVM2ih735Pftf2KCGh8H7CZaFfDZo8pdAextigMz8mkeYBK`.

One thing we can make sure of is that both of the H160 address from the EVM RPC is the original signer. This is because they were able to sign an EVM transaction. Mapped H160 address cannot sign an EVM transaction as the original signer is a Substrate account.

So let’s try converting the address to SS58. Using pseudo-code, we can express the conversion process like the following (You can use an [online tool](https://hoonsubin.github.io/evm-substrate-address-converter/) to convert the address yourself):

```
let astarAddressPrefix = 5let step1 = toByteArray(["evm:", "0x3c0561dd616cb7cc25ef728869f93c01b6225ee0"])
let step2 = blake2Hash(step1)
let step3 = ss58Encode(step2, astarAddressPrefix)
let mappedSs58Address = step3mappedSs58Address == "Z3oCmw6ndSgoWvFUU1vsvC7KK1hQNBRUKQXjJs9iLY7Pp7i"
```

We can see that `Z3oCmw6ndSgoWvFUU1vsvC7KK1hQNBRUKQXjJs9iLY7Pp7i` is actually mapped SS58 address of `0x3c0561dd616cb7cc25ef728869f93c01b6225ee0`. This is also the same for `0x7cae7feb55349feadb8f84468f692450d92597bc` and `bVM2ih735Pftf2KCGh8H7CZaFfDZo8pdAextigMz8mkeYBK`. This is consistent with the address shown in the previous section.

Then what about converting from SS58 to H160?

Let’s say we want to convert an SS58 account `XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK` to a mapped H160 address. The process can be expressed like the following:

```
let step1 = ss58Decode(XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK)
let mappedH160Address = dropTrailingBytes(step1, 20)mappedH160Address == "0x4aa7df162dc5543a3c1a5e216d16d260f9ead5ed"
```

You can also see the decoded public key of an SS58 address by using the Substrate key utility:

```
hoonkim@Hoons-MacBook-Pro Astar % ./target/release/astar-collator key inspect XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK
Public Key URI `XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK` is account:
  Network ID/version: astar
  Public key (hex):   0x4aa7df162dc5543a3c1a5e216d16d260f9ead5ed6204baeceb461cd568a7cf56
  Account ID:         0x4aa7df162dc5543a3c1a5e216d16d260f9ead5ed6204baeceb461cd568a7cf56
  Public key (SS58):  XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK
  SS58 Address:       XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK
```

The public key for `XdBhqfbg5Jsqp5YgNJVNLzMMBrzGsmBkZypS5Z7nr214fkK` is `0x4aa7df162dc5543a3c1a5e216d16d260f9ead5ed6204baeceb461cd568a7cf56` and the mapped H160 address is `0x4aa7df162dc5543a3c1a5e216d16d260f9ead5ed`, notice the trailing `6204baeceb461cd568a7cf56` is gone from the public key when creating the mapped H160.

Now that we know how the address conversion works and how the Substrate RPC will display EVM accounts, let’s send a token to a mapped address and access it from an EVM account, and withdraw the EVM deposit from a Substrate account.

For this example, I created two accounts from two different wallets:

- MetaMask: `0xA843c5d2B2dFc45e6799EAE9b8dbEE0189e6CcAa`
- Polkadot-js: `ZyakNoVJnDXcKFLYfnsTY9EZLYd6PHifzXG5jFyTbSM9dvd`

Now let’s send 10 ASTR tokens from a Substrate account to my MetaMask account that can only access the EVM sandbox.

To do this, first, I must convert the MetaMask address to a mapped SS58 address. Converting `0xA843c5d2B2dFc45e6799EAE9b8dbEE0189e6CcAa` will give me `ZaZgWyUczTxo8Zi8V4frbdHtnjbPr8RE24b3qCjCaMsKUfM`**.**

<center>
<img src="https://miro.medium.com/max/718/1*vMquH0BTPFiwyA1GUpVTGw.png" alt="MetaMask" border="1"></img>
</center>

Now when I send 10 tokens to this SS58 address from polkadot-js ([https://astar.subscan.io/extrinsic/540604-2?event=540604-10](https://astar.subscan.io/extrinsic/540604-2?event=540604-10)), the balance will appear on my MetaMask.

![https://miro.medium.com/max/1400/1*N11gFUx9LSfMcez8F25_Gg.png](https://miro.medium.com/max/1400/1*N11gFUx9LSfMcez8F25_Gg.png)

The balance change is also reflected on the [EVM explorer](https://blockscout.com/astar/address/0xA843c5d2B2dFc45e6799EAE9b8dbEE0189e6CcAa/transactions). However, when we look at the block event, we will not see any block events for this transfer as I sent the tokens within the Substrate layer with a Substrate signer. So this event will not be accessible within EVM, even though it is visible within Substrate RPC.

Now let’s send the tokens back to the SS58 account. Converting `ZyakNoVJnDXcKFLYfnsTY9EZLYd6PHifzXG5jFyTbSM9dvd` will give me `0xb2aed18d6495133a43dd6ecd9a5abd1fcae57150`**.**

![https://miro.medium.com/max/1400/1*CGXs0NoAbnoflS-rb9qqhQ.png](https://miro.medium.com/max/1400/1*CGXs0NoAbnoflS-rb9qqhQ.png)

I have sent 9.99 tokens (minus gas fee) to the [mapped H160 account](https://blockscout.com/astar/tx/0xee1da0d478cf2987b4a72f2869584d8be95468b42159db437a0772bb4d8cec94/internal-transactions). However, this token will not go directly to the Substrate balance of account `ZyakNoVJnDXcKFLYfnsTY9EZLYd6PHifzXG5jFyTbSM9dvd`. Instead, this token is kept in the EVM deposit, which is essentially the balance of the mapped H160 account within the EVM sandbox. To withdraw the tokens in the EVM deposit, the original SS58 account has to call the `evm.withdraw` function.

![https://miro.medium.com/max/1400/1*Il4gL4kSt-lHQ_uUfJ_U1Q.png](https://miro.medium.com/max/1400/1*Il4gL4kSt-lHQ_uUfJ_U1Q.png)

This function will require the parameter of the mapped H160 address, and the number of tokens the account wishes to withdraw. I will withdraw 9.9 tokens using the polkadot-js portal for this example.

![https://miro.medium.com/max/1400/1*heSa3DbmokVHgXKAjmxJ4w.png](https://miro.medium.com/max/1400/1*heSa3DbmokVHgXKAjmxJ4w.png)

You can see that after [calling the function](https://astar.subscan.io/extrinsic/540712-2), the balance of `ZyakNoVJnDXcKFLYfnsTY9EZLYd6PHifzXG5jFyTbSM9dvd` has increased by 9.9 ASTR tokens. With this, I was able to transfer back and forth between an EVM account to a Substrate account.

And that is all you need to know about using EVM within Substrate!