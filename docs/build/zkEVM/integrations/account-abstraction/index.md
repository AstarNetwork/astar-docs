# Account Abstraction

:::note
Please note that this section is under active development. 
:::

## Overview

Here you will find all the information required to refine the end-user experience and allow for seamless web2-like interactions with dApps and accounts on the Astar zkEVM.

Account Abstraction is a blockchain technology that enables users to utilize smart contracts as their accounts. While the default account for most users is an Externally Owned Account (EOA), which is controlled by an external private key, it requires users to have a considerable understanding of blockchain technology to use them securely. Fortunately, smart contract accounts can create superior user experiences.

### Using Account Abstraction on zKatana

There are two primary ways users can use account abstraction: with third party Meta Transaction services or by sending ERC-4337 transactions.

#### Meta Transactions
Meta Transactions are bespoke third party services for achieving account abstraction, for example: 
- [A custom `safe-sdk` that works together with Gelato Relay](/docs/build/zkEVM/integrations/account-abstraction/safe--aa/) on zKatana.

#### ERC-4337
ERC-4337, also known as EIP-4337.
- [Biconomy SDK Account Abstraction toolkit](/docs/build/zkEVM/integrations/account-abstraction/safe--aa/)

<br/>

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
