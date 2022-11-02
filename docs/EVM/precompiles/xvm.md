
# XVM Precompile

XVM Precompile provides an interface for EVM to call into XVM.

XVM is designed to be an universal execution engine communication layer on Astar Network. The idea is to provide an abstract execution environment that can be used by different execution engines to seamlessly interact. For example, XVM allows EVM smart contract written in Solidity to call into WebAssembly smart contract written in ink! and vice versa.

Please note that XVM is still in its alpha.

# Call API

```js
    function xvm_call(
        bytes calldata context,
        bytes calldata to,
        bytes calldata input,
        bytes calldata metadata
    ) external;
```

Since the interface is abstract and extensible and each VM treats its parameters differently, the only way to provide future-proof API is to use byte strings. Under the hood it uses XVM Codec based on SCALE.

- `context` is a set of data built by caller that is specific to a particular execution environment. Depending on a VM it may contain id of a virtual machine and its exexcution environment, gas limits and execution tickets, apparent value, continuation info and other information.
- `to` is an abstraction of an address, anything can be viewed as a destination of a XVM call
- `input` is a SCALE encoded input parameters specific to this particular call which is created by a sender
- `metadata` now outdated and will be removed in future editions

Please note that this is a low-level interface that is not expected to be used by directly. Instead, library authors use such an API to build idiomatic wrappers for specific execution environments.

For example, [ink! XVM SDK](https://github.com/AstarNetwork/ink-xvm-sdk) uses this API to provide XVM functionality for smart contracts written in ink!:
```rust
    #[ink(message)]
    pub fn claim(&mut self) -> bool {
        let to = [0xffu8; 20];
        let value = 424242u128;
        self.erc20.transfer(to, value)
    }
```

In this example we can see that an ink message is created that seamlessly calls into ERC20 contract that resides in EVM. In its implementation it uses `xvm_call` to dispatch the call.

# Notes

1. In the future XVM API would be extended by acynchronous methods like `xvm_query` and `xvm_send`.
2. Current the API does not support nested XVM calls.
