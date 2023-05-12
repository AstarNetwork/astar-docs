---
sidebar_position: 7
---

# Chopsticks & E2E Tests

:::note
Create parallel realities of our Substrate networks.
:::

Forking a live blockchain at any block with the corresponding memory and state offers several benefits for developers, users, and the blockchain ecosystem as a whole. This capability allows for more accurate testing of transactions and upgrades, which can lead to better decision-making and more robust blockchain networks. Key benefits include:

1. Improved security: By forking a live blockchain, developers can test proposed changes, identify vulnerabilities, and address potential security threats in a controlled environment, reducing the risk of attacks on the main network.

2. Enhanced performance: Testing transactions and upgrades on a forked version of the blockchain enables developers to analyze the performance implications of their changes, such as transaction throughput and latency.

3. Reduced downtime: Forking a live blockchain for testing purposes can help minimize network downtime during upgrades or other maintenance activities, as it allows developers to thoroughly test and validate changes before implementation on the main network.

4. Increased user confidence: Users can feel more confident in the stability and reliability of the blockchain network when they know that proposed changes have been rigorously tested in an environment that closely mirrors the live network.

5. Facilitated innovation: Forking a live blockchain provides a space for experimentation, allowing developers to test new features, protocols, and consensus algorithms without disrupting the main network.

6. Streamlined consensus-building: Forking a live blockchain enables developers to present real-world test results to stakeholders, which can help build consensus for proposed changes.

7. Simplified debugging: Debugging transactions and smart contracts on a forked version of the blockchain allows developers to isolate and address issues more easily, ensuring that only well-vetted code is introduced to the main network.

## Chopsticks

Setting up a parallel reality for our networks is easy with chopsticks.

This documentation focuses on the use of chopsticks with the Astar networks.
For more details on the options and settings, refer to the [Chopsticks repository readme file](https://github.com/AcalaNetwork/chopsticks)

### Dev mode

You can run forked version of the network at any block using this command.

```sh
npx @acala-network/chopsticks@latest -c astar
```

or

```sh
npx @acala-network/chopsticks@latest -c shiden
```

and simply examine the local setup by using PJS on it.
<https://polkadot.js.org/apps/?rpc=ws://localhost:8000#/explorer>

### XCM mode

You can also run continous modes for XCM development with HRMP channesl

Just Astar connected to Shiden:

```sh
npx @acala-network/chopsticks@latest xcm -p astar -p shiden
```

Or with a relaychain like so:

```sh
npx @acala-network/chopsticks@latest xcm -r polkadot -p astar -p statemint
```

## Config Settings

In the short form of the parachain/relaychain cli parameter, the configs are getting pulled from the github repo on demand. For example, here is [Astar's](https://github.com/AcalaNetwork/chopsticks/blob/master/configs/astar.yml) config. You can always download it locally and modify it's content to suit your needs. Note that the configs already has Alice with:
- 100k of ASTR, DOT & USDT on Polkadot and 100k of SDN, KSM & USDT on Kusama

## E2E Tests

End-to-end (E2E) tests offers numerous benefits, such as it enables developers to accurately assess the security, performance, and scalability of proposed changes in a controlled environment that closely mirrors the live network. This approach fosters innovation, simplifies debugging, and streamlines consensus-building among stakeholders. Ultimately, it contributes to more stable, reliable, and efficient blockchain networks, increasing user confidence and promoting long-term success.

These tests uses chopstick to do end to end testing and validate results with previous tests.

```sh
git clone git@github.com:AcalaNetwork/e2e-tests.git
cd e2e-tests
yarn
yarn test ./tests/xcm-transfer/kusama-relay.test.ts
```

or for more verbose logging when developping tests, use the playground:

```sh
yarn vitest --inspect playground --single-thread
```
