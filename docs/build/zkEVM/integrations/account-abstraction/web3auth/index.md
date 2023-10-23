# What is Web3Auth?
Web3Auth is a pluggable wallet infrastructure for Web3 wallets and applications. It streamlines the onboarding of both mainstream and crypto native users in under a minute by providing experiences that they're most comfortable with. With support for all OAuth based logins systems, web & mobile native platforms, Web3Auth provides a seamless onboarding experience for your users.

## What does Web3Auth do?
By integrating Web3Auth into your decentralized application (dApp) or blockchain wallet, you can significantly streamline the user onboarding process, making it an effortless and straightforward experience for your users. At the same time, Web3Auth allows you to retain the non-custodial characteristic of your wallet management system, which means users maintain full control and ownership of their cryptographic wallets, reinforcing the principles of privacy and security inherent in blockchain technology.

**Versatile Sign-in Options & Passwordless Registration:** Users can sign up through various OAuth providers such as Google, Twitter, GitHub, etc., or opt for a passwordless registration where a sign-in link is sent directly to their email.

**Customizable Login Systems:** Developers have the flexibility to create their own login systems, incorporating traditional methods and Web3Auth's wallet management infrastructure. This can be integrated into existing user bases or authentication processes without the need for migration.

**Comprehensive Web3 Wallet/Key Management:** Web3Auth's MPC-based wallet management infrastructure provides secure, non-custodial wallet management, where users maintain control of their cryptographic key pair. The login service only accesses a single share, preventing the provider from retrieving the user's wallet independently.

**Effortless Wallet Recovery:** Multiple factor authentication methods, such as social accounts, email, SMS, or trusted devices, facilitate easy key recovery. Users can restore their wallets without fear of losing them.

## Is Web3Auth a Wallet?
Web3Auth isn't a wallet itself, but serves as an essential wallet infrastructure that can be integrated seamlessly into any application. Its primary function is to offer more tailored flows for decentralized applications (dApps) or even blockchain wallets alike, solving the user onboarding and key management problem.

For a dApp, using a traditional wallet might seem straightforward, but it can limit control over the user flow and necessitate users' understanding of complex blockchain transactions. Web3Auth helps avoid these complications by allowing for customized flow adjustments based on specific needs.

Implementing Web3Auth yields a standard cryptographic key provider unique to each user and application. This key provider, which can be used to sign transactions or perform other wallet operations, gives developers the flexibility to create a custom wallet within their application or utilize one of Web3Auth's pre-existing external wallet adapters.

Although it significantly enhances wallet functionality, it's important to note that Web3Auth remains a wallet infrastructure, not a wallet in itself.

For more information about Web3Auth check out their [official documentation](https://web3auth.io/docs/what-is-web3auth)

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

