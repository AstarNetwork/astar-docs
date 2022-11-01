
# XVM Precompile

XVM Precompile provides an interface for EVM to call into XVM.

XVM is designed to be an universal execution engine communication layer on Astar Network. The idea is to provide an abstract execution environment that can be used by different execution engines to seamlessly interact. For example, XVM allows EVM smart contract written in Solidity to call into WebAssembly smart contract written in ink! and vice versa.

Please note that XVM is still in its alpha.

```js
    /**
     * @dev Execute external VM call
     * @param context - execution context
     * @param to - call recepient
     * @param input - SCALE-encoded call arguments
     * @param metadata - input encoding metadata
     */
    function xvm_call(
        bytes calldata context,
        bytes calldata to,
        bytes calldata input,
        bytes calldata metadata
    ) external;
```

Since the interface is abstract and extensible and each VM treats its parameters differently, the only way to provide future-proof API is to use byte strings. Under the hood it uses XVM Codec based on SCALE.

This API can then be used to build idiomatic wrappers for specific execution environments.