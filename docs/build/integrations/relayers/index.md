# Relayers
 
Relayers allow the user to send a transaction without a native token balance. Ideally, we would also like to still utilise the excellent security of a user signature, but for the transaction to be sent by a different EOA, one controlled by a relayer, who abstracts gas payment away from the user.
This is a very import context shift to understand. Relayers have shifted from a user signing and sending a transaction themselves, to a user signing a standardised message and passing that on to a relayer. This relayer will, first, verify the user's signature for security, and then pass their message along on-chain. 


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
