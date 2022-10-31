
TODO: mention that XVM is still alpha

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
