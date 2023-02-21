---
sidebar_position: 1
---

# Astar.js

## Overview

The astar.js library provides application developers with the ability to query nodes and interact with Astar/Shiden/Shibuya chains using Javascript/Typescript.

# Getting Started

- Install dependencies

```bash
yarn add @polkadot/api @astar-network/astar-api@beta
```

- Create API instance

```ts
import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@astar-network/astar-api';

async function main() {
    const provider = new WsProvider('ws://localhost:9944');
    // OR
    // const provider = new WsProvider('wss://shiden.api.onfinality.io/public-ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // Use the api
    // For example:
    console.log((await api.rpc.system.properties()).toHuman());

    process.exit(0);
}

main()
```

- Use api to interact with node

```ts
// query and display account data
const data = await api.query.system.account('5F98oWfz2r5rcRVnP9VCndg33DAAsky3iuoBSpaPUbgN9AJn');
console.log(data.toHuman())
```

## Cookbook

More documentation and examples can be found in the astar.js [wiki](https://github.com/astarNetwork/astar.js/wiki)