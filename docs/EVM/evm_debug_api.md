---
sidebar_position: 7
---

# Debug EVM transactions 

Geth's debug APIs and OpenEthereum's trace module provide non-standard RPC methods for getting a deeper insight into transaction processing.

> Thanks to the PureStake team, the Polkadot ecosystem has tracing capabilities similar to that of Geth, and OpenEthereum. Astar Network implements the same approach for Astar EVM tracing, due to it being the best solution we have at the moment, in the Polkadot ecosystem.

## Supported RPC Methods

The following RPC methods are available:

* debug_traceTransaction - requires the hash of the transaction to be traced, optional parameters:
  - `disableStorage(boolean)` - (default: false) setting this to true disables storage capture
  - `disableMemory(boolean)` - (default: false) setting this to true disables memory capture
  - `disableStack(boolean)` - (default: false) setting this to true disables stack capture
* [trace_filter](https://openethereum.github.io/JSONRPC-trace-module#trace_filter) - optional parameters:
  - `fromBlock(uint blockNumber)` - either block number (hex), earliest which is the genesis block or latest (default) best block available. Trace starting block
  - `toBlock(uint blockNumber)` - either block number (hex), earliest which is the genesis block or latest best block available. Trace ending block
  - `fromAddress(array addresses)` - filter transactions done from these addresses only. If an empty array is provided, no filtering is done with this field
  - `toAddress(array addresses)` - filter transactions done from these addresses only. If an empty array is provided, no filtering is done with this field
  - `after(uint offset)` - default offset is 0. Trace offset (or starting) number
  - `count(uint numberOfTraces)` - number of traces to display in a batch

There are some default values that you should be aware of:

* The maximum number of trace entries a single request of `trace_filter` is allowed to return is `500`. A request exceeding this limit will return an error
* Blocks processed by requests are temporarily stored in cache for `300` seconds, after which they are deleted.

To change the default values you can add CLI flags when spinning up your tracing node.

## Run a debug node


To use the supported RPC methods, you need to run a node in debug mode, which is slightly different than running a full node. Additional flags will also need to be used to tell the node which of the non-standard features to support.

Spinning up a debug or tracing node is similar to running a full node. However, there are some additional flags that you may want to enable specific tracing features:

* `--ethapi=debug` - optional flag that enables `debug_traceTransaction`
* `--ethapi=trace` - optional flag that enables `trace_filter`
* `--wasm-runtime-overrides=<path/to/overrides>` - required flag for tracing that specifies the path where the local Wasm runtimes are stored
* `--runtime-cache-size 64` - required flag that configures the number of different runtime versions preserved in the in-memory cache to 64
* `--ethapi-trace-max-count <uint>` - sets the maximum number of trace entries to be returned by the node. _The default maximum number of trace entries a single request of trace_filter returns is_ **500**
* `--ethapi-trace-cache-duration <uint>` - sets the duration (in seconds) after which the cache of `trace_filter`, for a given block, is discarded. _The default amount of time blocks are stored in the cache is **300** seconds_

> EVM debug RPC available in Astar Collator **v5.0 and later**.

For example, launch node with debug RPC enabled on Shibuya testnet.

```
astar-collator --ethapi=debug --chain=shibuya
```

### Using debug/tracing API

Once you have a running tracing node, you can open your terminal to run curl commands and start to call any of the available JSON RPC methods.

For example, for the `debug_traceTransaction` method, you can make the following JSON RPC request in your terminal:

```
curl http://127.0.0.1:9933 -H "Content-Type:application/json;charset=utf-8" -d \
  '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"debug_traceTransaction",
    "params": ["0x04978f83e778d715eb074352091b2159c0689b5ae2da2554e8fe8e609ab463bf"]
  }'
```

The node responds with the step-by-step replayed transaction information.

For the `trace_filter` call, you can make the following JSON RPC request in your terminal (in this case, the filter is from block 20000 to 25000, only for transactions where the recipient is 0x4E0078423a39EfBC1F8B5104540aC2650a756577, it will start with a zero offset and provide the first 20 traces):

```
curl http://127.0.0.1:9933 -H "Content-Type:application/json;charset=utf-8" -d \
  '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"trace_filter", "params":[{"fromBlock":"0x4E20","toBlock":"0x5014","toAddress":["0x4E0078423a39EfBC1F8B5104540aC2650a756577"],"after":0,"count":20}]
  }'
```

The node responds with the trace information corresponding to the filter.
