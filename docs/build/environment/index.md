import Figure from "/src/components/figure"

# Set up the Development Environment
<Figure src={require('/docs/build/img/environment.png').default} width="100%" /> 

Knowledge about how to set up various environments is not required before you get started, however, it may be helpful to review the following sections to learn more about the purpose of each Environment, and their specific requirements.

For example, to build and test Wasm smart contracts, an ink! Environment with a Swanky node is appropriate. On the zkEVM, a [different kind of environment](/docs/build/zkEVM/quickstart.md) is required. 

When you are ready to deploy a smart contract to production, you can use the information contained within this section to configure an RPC endpoint.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
