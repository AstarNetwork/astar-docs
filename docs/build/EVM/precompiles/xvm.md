
# XVM

The XVM Precompile provides an interface for EVM to call into XVM.

XVM is designed to be a communication layer and universal execution engine on Astar Network. The idea being that it provides an abstract execution environment which can be used by different execution engines to seamlessly interact with one another. For example, XVM allows EVM smart contract written in Solidity to call into WebAssembly smart contracts written in ink! and vice versa.

Please note that XVM is still in its alpha.

# Call API

```js
    function xvm_call(
        bytes calldata context,
        bytes calldata to,
        bytes calldata input,
    ) external;
```

Since the interface is abstract and extensible, and each VM treats its parameters differently, the only way to provide a future-proof API is to use byte strings. Under the hood it uses XVM Codec based on SCALE.

- `context` is a set of data built by caller that is specific to a particular execution environment. Depending on a VM it may contain the id of a virtual machine and its exexcution environment, gas limits and execution tickets, apparent value, continuation info and other information.
- `to` is an abstraction of an address, anything can be viewed as a destination of a XVM call
- `input` is a SCALE encoded input parameters specific to this particular call which is created by a sender

Please note that this is a low-level interface that is not expected to be used directly. Instead, library authors use such an API to build idiomatic wrappers for specific execution environments.

For example, [ink! XVM SDK](https://github.com/AstarNetwork/ink-xvm-sdk) uses this API to provide XVM functionality for smart contracts written in ink!:
```rust
    #[ink(message)]
    pub fn claim(&mut self) -> bool {
        let to = [0xffu8; 20];
        let value = 424242u128;
        self.erc20.transfer(to, value)
    }
```

In this example we can see that an ink message is created that seamlessly calls into an ERC20 contract that resides in EVM. In its implementation it uses `xvm_call` to dispatch the call.

# Notes

1. In future, the XVM API will be be extended to support asynchronous methods like `xvm_query` and `xvm_send`.
2. Currently the API does not support nested XVM calls.
