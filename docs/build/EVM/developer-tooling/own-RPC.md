---
sidebar_position: 4
---
## Your Own RPC Server

For EVM developers and projects, it is not an unreasonable expectation that they should have their own managed EVM endpoints. Relying on public endpoints can introduce additional risk due to centralizaion or improper maintenance, and make them single points of failure.

:::note
Astar team highly recommends that projects use and maintain their own EVM endpoints.
:::

Launching an Astar Network endpoint is easy.

:::note
The EVM RPC server is disabled by default. To enable it, append the `--enable-evm-rpc` flag to the launch string.
:::

```
astar-collator --chain=shiden --enable-evm-rpc --unsafe-rpc-external --unsafe-ws-external
```

The launch string above will start an Astar Collator on Shiden network, open up an HTTP endpoint on port `9933`, and a WS endpoint on port `9944`.

We also recommend paying attention to the `--ws-max-connections` parameter. By default this value is relatively small, so it may be beneficial to increase it to a few thousand.