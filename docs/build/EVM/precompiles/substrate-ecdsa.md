# Substrate ECDSA

The Substrate ECDSA precompile provides an interface to verify a message signed with ECDSA algorithm.

> Most cryptocurrencies, including Bitcoin and Ethereum, currently use ECDSA signatures on the secp256k1 curve. This curve is considered much more secure than NIST curves, which have possible backdoors from the NSA. The Curve25519 is considered possibly even more secure than this one and allows for easier implementation of Schnorr signatures. A recent patent expiration on it has made it the preferred choice for use in Polkadot.

For [more context](https://wiki.polkadot.network/docs/learn-keys#why-was-ed25519-selected-over-secp256k1) see the Polkadot Wiki.

```js
    function verify(
        bytes32 public_key,
        bytes calldata signature,
        bytes calldata message
    ) external view returns (bool);
```

The `verify` function can be used to check that `public_key` was used to generate `signature` for `message`.
