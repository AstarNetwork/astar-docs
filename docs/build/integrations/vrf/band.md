---
sidebar_position: 1
---

# Band Protocol VRF

[Band VRF]: https://bandprotocol.com/vrf

## Overview

[Band VRF] provides a verifiable pseudorandomness solution based on the BandChain blockchain. Our protocol uses a Verifiable Random Function (VRF) to cryptographically secure and verify that output results have not and cannot be tampered with.

Similar to the BandChain Oracle Network, the Band VRF is a VRF system that serves requests from dApps. Validators on the BandChain and the VRF Oracle Script are responsible for generating the random number requests that are verifiably random. Final validated results are stored on the BandChain as proof of the random number generation process before returning the results to the requested dApps.

## Integrate with Band VRF

This guide serves as a quick reference about how to request random data from the Band VRF. For a more detailed reference with examples, refer to the [VRF Integration] (https://docs.bandchain.org/vrf/vrf-integration.html) section.

### Step 1: Prepare a VRF Consumer Contract

1. Create a VRF consumer contract that can call the `requestRandomData` function on the `VRFProvider` contract.
2. Implement a callback function (e.g. `consume`) on the VRF consumer contract, which allows the `VRFProvider` contract to call back and execute some logic against the returned result. It is critical that this callback function can only be called by the `VRFProvider` contract.

### Step 2: Choose a resolving method
There are currently 3 methods for relaying and resolving the VRF request:
- **Band's VRF worker solution** - We provide both standard and customized solutions for all clients. Visit [contact us] (mailto:bd@bandprotolcol.com) for more details.
- **Manually resolve on CosmoScan** - This is an ideal and low cost solution for one-off Band VRF requests. Refer to this [guide] (https://docs.bandchain.org/vrf/vrf-integration.html#manually-request-and-resolve) for how to resolve manually.
- **Implement your own resolver bot** - Anyone can implement their own version of resolver bot. An open-source version of Band's VRF worker bot will be available soon.

### Step 3: Request a Random Value

You are now ready to request a random value from the Band VRF. 

A summary of the Band VRF process is outlined below:
1. Simply call the request function on your VRF consumer contract that implements the `requestRandomData` function in Step 1, providing a `seed` and an optional `msg.value`.
2. Depending on the resolving method chosen in Step 2, the request is sent to the BandChain. 
3. The VRF oracle script on the BandChain forwards the request to a randomly chosen data source, and then retrieves the returned result and the corresponding proof of authenticity.
4. Depending on the resolving method chosen in Step 2, the proof is relayed to the `Bridge` contract for verification on the client chain via the `VRFProvider` contract.
5. If the verification succeeds, the result (random value) is returned to the VRF consumer contract via the callback function mentioned in Step 1.

## Contract Addresses

For `VRFProvider` and other contract addresses on Astar, please refer to the [Supported Blockchains] (https://docs.bandchain.org/vrf/supported-blockchains.html) section.

## Example Usage

The contract below is an example of a simple VRF consumer contract written in Solidity.

```ts
contract MockVRFConsumer {
    IVRFProvider public provider;
    string public latestSeed;
    uint64 public latestTime;
    bytes32 public latestResult;

    constructor(IVRFProvider _provider) {
        provider = _provider;
    }

    function requestRandomDataFromProvider(string calldata seed) external payable {
        provider.requestRandomData{value: msg.value}(seed);
    }
    
    function consume(string calldata seed, uint64 time, bytes32 result) external override {
        require(msg.sender == address(provider), "Caller is not the provider");
        
        latestSeed = seed;
        latestTime = time;
        latestResult = result;
    }
}
```

More complex and detailed examples can be found in the [Example Use Cases] (https://docs.bandchain.org/vrf/example.html) section.

## Full Documentation

[Band VRF Documentation] (https://docs.bandchain.org/vrf/introduction.html)
