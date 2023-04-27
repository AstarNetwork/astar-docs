import Figure from '/src/components/figure'

# Swanky Suite

Swanky Suite aims to be an "all-in-one" tool for Wasm smart contract developers. It is based on existing tools like` cargo contract CLI` and `polkadot.js` but extends their functionality with many additional features such as smart contract templates, and an instant finality (Swanky) node, which reduces the contract development lifecycle.

Swanky Suite is a tool that provides Web3 Wasm dapps developers with an experience that is more in-line with what they're familiar with, compared to popular tooling for EVM.

Swanky Suite offers an extensible set of features, allowing developers to:

- Quickly spin up a local contract development node with instant finality (Swanky Node).
- Easily scaffold new projects using templates for both smart contracts and (soon) front-end dApps.
- Compile projects in various languages that target Wasm (ink! Ask-Lite).
- provide Typescript based integration testing simulating interaction from the client-side.
- Handle and manage network accounts.
- Deploy smart contracts within the Polkadot ecosystem to networks that support `pallet-contracts`.
- Make arbitrary calls to deployed smart contracts.

## Architecture Overview

The Swanky Suite consists of two parts, Swanky CLI and Swanky Node.

Source code for both Swanky CLI and Swanky Node are hosted on GitHub:

- [Swanky CLI] (https://github.com/AstarNetwork/swanky-cli).
- [Swanky Node] (https://github.com/AstarNetwork/swanky-node).

`<Figure caption="The architecture envisioned for Swanky CLI and Swanky Node (Local developer node)" src={require('../img/SwankySuiteAstar.png').default} width="100%"/>`

:::note
The actual state deviates slightly from the above diagram as both the cli and the node are constantly iterated upon and updated, but it illustrates the general idea behind the suite.
:::

## Documentation and resources

This documentation's sub-sections on usage of [Swanky CLI] (/docs/build/wasm/swanky-suite/cli) and [Swanky Node] (/docs/build/wasm/swanky-suite/node) have great instructions on how to setup the tool and start using it right away.

[`swanky` CLI Github repo] with the latest documentation.

[`swanky-node` Github repo] with the latest documentation.

[`pallet-contracts`] documentation on Parity Github

[ink! language] repo and specification

[ask! language] documentation

[`pallet-contracts`]: https://github.com/paritytech/substrate/tree/master/frame/contracts
[`pallet-dapps-staking`]: https://github.com/AstarNetwork/astar-frame/tree/polkadot-v0.9.27/frame/dapps-staking
[`pallet-assets`]: https://github.com/paritytech/substrate/tree/master/frame/assets
[`swanky-node` github repo]: https://github.com/AstarNetwork/swanky-node
[`swanky` cli github repo]: https://github.com/AstarNetwork/swanky-cli
[ink! language]: https://github.com/paritytech/ink
[ask! language]: https://ask-lang.github.io/ask-docs/
