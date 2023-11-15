---
title: Debugger
sidebar_position: 3
---

import Figure from '/src/components/figure' 

# Sentio Debugger

## Basic

Sentio debugger is a tool that helps developers understand how transactions work, and is compatible with Astar zkEVM.

Search for specific transactions on the [Explorer page](https://app.sentio.xyz/explorer)

<Figure caption="Transaction Search" src={require('./img/sentio1.png').default } width="100%" />

The Transaction Explorer has a few key features, including:

## Transaction Information

Sentio provides standard information about specific transactions.

### Transaction Metadata

For each transaction, Sentio adds standard transaction metadata, and a link to the block explorer page on the **Overview** tab.

<Figure caption="Transaction Metadata" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio2.png').default } width="100%" />

### Events 

Events are decoded where ABIs are available, and are otherwise displayed according to *best effort* on the **Events** tab.

<Figure caption="Events data" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio3.png').default } width="100%" />

### State Diff

When a transaction causes state changes, Sentio lists them on the **State** tab.

<Figure caption="State changes" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio4.png').default } width="100%" />

### Contract Code Explorer

Sentio provides a code explorer for all the related code on the **Contracts** tab.

<Figure caption="Contract explorer" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio5.png').default } width="100%" />

## Trace the Money

The best way to understand a transaction is to trace the money. Sentio provides both **Balance Change** and **Fund Flow** analysis tools.

### Balance Change

While a transaction is executing, multiple contracts may have their balances updated. Sentio displays the balance changes that occur during a transaction.

<Figure caption="Balance Change" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio55.png').default } width="100%" />

For example, in this MEV arbitrage transaction above, each party involved has a balance of different assets increasing and decreasing, except one address (0xa0d...) which has only an increasing asset, indicating that it made the arbitrage profit.

### Fund Flows

Sentio provides detailed and **ordered** fund flows. In the following example we visualize the process of how an arbitrageur made a profit by utilizing several trading venues.

<Figure caption="Fund Flows" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio6.png').default } width="100%" />

## Trace and Call

Sentio provides trace view of transactions.

### Trace modes and options

**Trace mode:** Full trace mode includes cross-contract calls (CALL) and in-contract calls (JUMP).

<Figure caption="Full Trace" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio7.png').default } width="100%" />

You can also hide in-contract calls (JUMP) by turning off Full trace.

**Options:** Users can hide static calls and select the level of trace displayed.

<Figure caption="Trace Levels" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio8.png').default } width="100%" />

**Call Graph:** Sentio provides the call graph that shows the contract interactions within a transaction.

<Figure caption="Call Graph" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio9.png').default } width="100%" />

## Debugging

To understand a transaction even further, developers can use the **Debugger** tab to visualize the execution line-by-line.

<Figure caption="Debugger" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio10.png').default } width="100%" />

### Debugger tab layout

**Traces**

On the upper-left section, Sentio shows the trace of the transaction, this is the same as *trace and call.* Users can use this to select a location and execute directly to that position.

<Figure caption="Call Trace Window" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio11.png').default } width="100%" />


**Stack Traces**

The bottom-left section contains the current call stack information, for example:

<Figure caption="Stack Trace Window" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio12.png').default } width="100%" />

### Single-Step Mode

:::info
To use single-step mode:
- Turn on single-step mode.
- (optional) Use Debug Build -- Sentio will recompile the contract with different compiler parameters to achieve the best source mapping. See **Limitations** below.
:::

<Figure caption="Debugger Options" src={require('/docs/build/zkEVM/integrations/indexers/img/sentio13.png').default } width="100%" />


**Use Debugger**

The debugger has standard definitions of:

- Step-Over: Move to the next line of execution.
- Step-Into: If there is a function, steps into the function.
- Step-Out: If we are in a function, steps out the function to the upper level.
- Continue: This is the standard break-point.
- Restart: Restart from the beginning.

**Inspect Variables**

The debugger automatically shows the local variables within the call context, and all the contract variables.

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio14.png').default } width="100%" />

The debugger also supports adding **user defined watched variables (similar to a regular debugger.)**

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio15.png').default } width="100%" />

**Limitations**

- Contracts compiled with the viaIR option are not fully supported.
- When debugging a release build, since they are fully optimized, source-mapping issues and unexpected execution orders may present themselves.
- When debugging a debug build, gas usage is ignored, which may cause different code execution. e.g. if the original transaction runs out of gas, the debug build will indicate the transaction fully executes.

### Function-only Mode

If single-step mode is turned off, the debugger will behave at the *function* level.

**Use the debugger**

The debugger has standard definitions of:

- Next: proceeds to the next function call (depth first search order)
- Previous: reverts to the previous function call
- Step Over: proceeds to the next function call (**does not** follow nested calls)
- Step Up: goes up one level

**Inspect the variables**

In this mode, developers can visualize **Inputs**, **Return Value** and **Gas info.**

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio16.png').default } width="100%" />

## Simulation

The Sentio simulator allows you to run simulations and analyze the data collected in great detail.
You can quickly begin simulations through the Sentio [UI](https://docs.sentio.xyz/sentio-debugger/simulation/simulation-ui) or by calling the [API](https://docs.sentio.xyz/sentio-debugger/simulation/simulation-api).

### Simulation UI

**From existing transaction**
The simplest way to start a simulation is to click the simulator button as shown below, on a transaction that has been opened. 

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio17.png').default } width="100%" />

In this case, it will copy all the parameters from the existing transaction and you could make adjustments on top of it. Like block number, block index, gas fee, block header, state, etc.

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio18.png').default } width="50%" />

Click the simulate transaction button will save this run to the simulation history of your project and show you the result, just like what you see from the normal debugger UI.

**Direct Build**

You can also click the simulator button on the left navigation bar and go to the simulator page which shows all the history simulations. Click the simulation button on the right corner will pop a similar UI but without prepopulated transaction data.

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio19.png').default } width="85%" />

**Override Contract**

Use the compilations tab to upload a local contract compilation folder.

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio20.png').default } width="50%" />

When doing the simulation, choose the contract override.

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio21.png').default } width="50%" />

### Simulation API

#### Create Simulation

For all simulation API calls, you should have an API key, and pass it by header with the field api-key. Refer to [API Key](https://docs.sentio.xyz/references/concepts/api-key) for how to obtain one.

The simulation body should be included in the request body. You can follow the example below.

```
curl --location 'https://app.sentio.xyz/api/v1/solidity/simulate' \
--header 'api-key: <API_KEY>' \
--header 'Content-Type: application/json' \
--data '{
    "projectOwner": "<USER>",
    "projectSlug": "<PROJECT>",
    "simulation": {
        "networkId": "1",          // Chain ID, "1" for Ethereum mainnet. See chainlist.org for details
        "blockNumber": "17415072",
        "transactionIndex": "97",  // transaction index in the block
        
        // standard field for evm transactions
        "from": "0x5e8bb488e85ea732e17150862b1acfc213a7c13d",
        "to": "0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b",
        "value": "0x0",
        "gas": "0x31ae2",
        "gasPrice": "0xe59a1adbe",
        "input": "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000647dffef0000000000000000000000000000000000000000000000000000000000000002080c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000003077b58d5d378391980000000000000000000000000000000000000000000000000000000032b2ced3e40e9d100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000082646b22a3960da69ef7a778c16dd6fb85dd999000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000032b2ced3e40e9d1",
        
        // overrides
        "stateOverrides": {
            "0x0811fd1808e14f0b93f0514313965a5f142c5539": {
                "balance": "0x1111111111111111"
            }
        },
        "blockOverride": {
            "baseFee": "0x0"
        }
    }
}'
```

Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.

#### Get Detail Trace

State Diff
Endpoint: https://app.sentio.xyz/api/v1/solidity/state_diff
API key is required.

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio22.png').default } width="50%" />

Example:

```
curl --location 'https://app.sentio.xyz/api/v1/solidity/state_diff?networkId=1&txId.simulationId=pVwBCxr3&projectOwner=<USER>&projectSlug=<PROJECT>' \
--header 'api-key: <API_KEY>'
```

#### Trace Decoded Trace

Endpoint: https://app.sentio.xyz/api/v1/solidity/call_trace
API key is required.

<Figure src={require('/docs/build/zkEVM/integrations/indexers/img/sentio23.png').default } width="50%" />

Example:

```
curl --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?withInternalCalls=true&networkId=1&txId.simulationId=pVwBCxr3&projectOwner=<USER>&projectSlug=<PROJECT>' \
--header 'api-key: <API_KEY>'
```

For more information about Sentio Debugger and for information not listed here, visit their [official documentation](https://docs.sentio.xyz) page.