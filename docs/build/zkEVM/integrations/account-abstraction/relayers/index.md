# Relayers
 
Account Abstraction (EIP-4337) provides a mechanism for native Meta Transactions to be a part of the Ethereum protocol. 

## Meta Transactions

Meta transactions allow users to perform Ethereum transactions without having ETH for gas fees. Instead, they sign a transaction with their private key and then pass it to a third party, known as a Relayer, that broadcasts the transaction to the Ethereum network. The Relayer pays the gas fee and, in turn, can be compensated by the user in another token or even off-chain.

### How Relayers work

**User-Signed Payloads:** Users create and sign transaction payloads but don't broadcast them to the network directly.

**Relayer Role:** Instead of broadcasting transactions, users send their signed payloads to a Relayer. The Relayer then wraps these payloads in standard Ethereum transactions and broadcasts them to the network.

**Gas Payment:** The gas for transactions is paid by the Relayer. However, it is also possible for the Relayer to be reimbursed by users in a token other than ETH.

**Sponsorship:** Sponsors cover transaction fees. In this context, the sponsor could be considered a specific type of Relayer that willingly pays transaction fees on behalf of users without expecting reimbursement.



```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
