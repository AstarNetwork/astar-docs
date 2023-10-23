---
sidebar_position: 1
---

# Acurast

## Introduction

[Acurast](https://acurast.com/) is a platform for Zero Trust applications, leveraging a decentralized and decentralized and trustless off-chain Compute Execution Layer for compute leveraging mobile hardware with its advantages in security, compute performance and energy efficiency. Opening the possibilities for developers to execute arbitrary code and build serverless applications that can interact with Astar's zkEVM and other ecosystems.

## Acurast Price Feeds

Acurast provides price feeds for 10 assets with an update interval of 5 minutes. APIs are called through Acurast's Compute Execution Layer from multiple trustless devices, resulting in a verifiable price feed on-chain.

### Chainlink Compatible Price Feeds

The following price feeds are Chainlink compatible, if your application is already deployed in an environment where Chainlink might be available, you can use these contracts as a drop-in replacement.

| Pair      | Address and info                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ASTR/USD  | [0xde4F97786EAB4e47b96A0A65EdD7755895077073](https://zkatana.blockscout.com/address/0xde4F97786EAB4e47b96A0A65EdD7755895077073) |
| MATIC/USD | [0x77Ed3BAc1B3Dd4DBB8D2636b6f3adFd4f21d15B3](https://zkatana.blockscout.com/address/0x77Ed3BAc1B3Dd4DBB8D2636b6f3adFd4f21d15B3) |
| BTC/USD   | [0xDBb23274EE9354367155C290c673733374d57967](https://zkatana.blockscout.com/address/0xDBb23274EE9354367155C290c673733374d57967) |
| ETH/USD   | [0x448786CD6E53E706AEdd984C620D63d48B720e6A](https://zkatana.blockscout.com/address/0x448786CD6E53E706AEdd984C620D63d48B720e6A) |
| BNB/USD   | [0xb6B94e18957376ac6d22bAF31C7BF1661B238F4A](https://zkatana.blockscout.com/address/0xb6B94e18957376ac6d22bAF31C7BF1661B238F4A) |
| USDT/USD  | [0xD12ad062A6bFBB27024a7B76E4EF7FDC5bf49Aeb](https://zkatana.blockscout.com/address/0xD12ad062A6bFBB27024a7B76E4EF7FDC5bf49Aeb) |
| USDC/USD  | [0x2E23a70dfe6059f9F2DC35C1e940e3B3288BDE04](https://zkatana.blockscout.com/address/0x2E23a70dfe6059f9F2DC35C1e940e3B3288BDE04) |
| DAI/USD   | [0xEC6985D9eA362fb85fEa72263169C375F8f065E7](https://zkatana.blockscout.com/address/0xEC6985D9eA362fb85fEa72263169C375F8f065E7) |
| STETH/USD | [0xA2FB708105a412710Df254D7406A27764408A657](https://zkatana.blockscout.com/address/0xA2FB708105a412710Df254D7406A27764408A657) |
| DOT/USD   | [0x208f799E0EE205bc6607Fae430485c66F9fe6012](https://zkatana.blockscout.com/address/0x208f799E0EE205bc6607Fae430485c66F9fe6012) |

If you need a price feed for assets or pairs not listed here, you can easily build your own price feeds here through the [Acurast Console](https://console.acurast.com/).

## Build Your Own Zero Trust App

Acurast offers off-chain Compute Execution Layer with the following main primitives:

- trustless: trust not in individuals but technology and cryptography, building on hardware Trusted Execution Environments.
- decentralized: anyone across the world can participate in becoming a provider of infrastructure, Acurast Processor.
- versatile: Developers code their apps, tailored to their use cases and deploy them.
- confidential: Data processes on Acurast Processors is not visible to the ones providing compute resources.

Learn More on Acurast in the [Acurast](https://docs.acurast.com/).

### Get Started

1. Go to the [Acurast Console](https://console.acurast.com/), log in with your wallet or [create a wallet](https://docs.acurast.com/developers/create-address).
1. Claim free cACU Canary funds with “Fund Account”.
1. Go to [Create Job](https://console.acurast.com/) and select “Astar” and "zKatana".
1. Deploy your contract that you will use to receive the output of the computation, [find simple examples here](https://docs.acurast.com/integrations/evm).
1. Create your script that you want e.g. a specific price feed, verifiable randomness, on-chain automation etc. Add your destination contract to the script. Templates can be found in the Console, [find simple examples here](https://docs.acurast.com/developers/get-started)
1. Define the job parameters, select “Public Processors”, start and end time, interval, number of Processors and the reward in cACU that you're willing to reward for running your zero trust app.
1. Sign the transaction to “Publish Job”.
1. Your request is being matched to eligible Processors, these Processors will execute your app and provide the output directly to the contract you've provided. You can see the assigned Processors in the Job details, send some zKatana testnet funds to each of the "Ethereum" labeled addresses.
1. Processors will run your app and push the output directly to your contract.

### Learn More

Do you have any questions? Join us on Telegram or Discord.

- [Developer Docs](https://docs.acurast.com/)
- [GitHub](https://github.com/Acurast)
- [Website](https://acurast.com/)
- [Telegram](https://t.me/acurastnetwork)
- [Discord](https://discord.gg/wqgC6b6aKe)
- [X](http://x.com/Acurast)
