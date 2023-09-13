import Figure from "/src/components/figure"

# Astar zkEVM FAQs

## Frequently Asked Questions

Here you will find answers to the most common questions about Astar zkEVM such as how it works, how to interact, and how it relates to Astar's Polkadot parachain, Polygon PoS chain, and the Ethereum network.

### What is the difference between Polygon PoS and Astar zkEVM?
  
Polygon PoS and Astar zkEVM both provide scaling solutions for Ethereum, though they differ in their architecture, consensus mechanisms, and data availability options. 

Astar zkEVM, in particular, leverages zk-rollup technology on Ethereum Layer 2 to achieve improved scalability, shared security, and EVM equivalence, while Polygon PoS is an independent side-chain of Ethereum, acting as its own Layer 1, with its own consensus mechanism and security. 

The bridge between Ethereum and Layer 2 is trustless, meaning Astar zkEVM inherits the security of Ethereum, whereas bridges between Ethereum and other Layer 1 chains such as Polygon PoS rely on the specific bridge provider to provide security assurances. 

### Is Astar leaving Polkadot?

Astar is not leaving Polkadot. We will support the chain as before. In fact, we've just secured a parachain slot for the next two years, with our primary focus being the development of tools for smart contract creation and the regular onboarding of new projects. So, we're wholeheartedly committed to Polkadot.

### Are all three (EVM, Astar zkEVM and Wasm) VMs interoperable?

Yes. Astar zkEVM will be interoperable with existing chains on day because of its EVM equivalence, and also via partners such as Layer Zero that supports traditional asset bridging, arbitrary cross-chain message passing, and remote smart contract calls. 

### What is unique about Astar zkEVM?

There are several key features that make Astar zkEVM unique:
        
- Bridging the Japanese market with global projects, enterprises, and developers.
- High EVM equivalency.
- High scalability via zero-knowledge technology.
- Trustless interoperability and shared security inherited from Ethereum.
- Significantly reduced transaction cost compared to Ethereum mainnet.

### What is Astar zkEVM’s gas option?
        
sETH is the gas token on Astar zkEVM testnet.

### Does Astar zkEVM use a ZK-Rollup architecture? Why so? 
        
Astar team has decided to use ZK-Rollup architecture for the testnet. ZK-Rollups are fully secured and backed by Ethereum. 
        
### What is the difference between Astar zkEVM and Ethereum mainnet?
        
Astar zkEVM distinguishes itself from the Ethereum mainnet primarily by offering a much lower transaction cost (gas fees) and a greater transaction throughput. This enhanced throughput, combined with reduced transaction costs, provides developers with the ideal environment to create applications demanding high transaction speeds without the burden of high costs.
        
### Is Astar zkEVM going to become a Layer 2 on Ethereum, or Polygon PoS chain? 

Astar zkEVM will be deployed on Ethereum Layer 2, and will be powered by Polygon zkEVM technology.
        
### Are you planning to support all ecosystems equally, or have some priorities?
        
Astar zkEVM will be focusing on the Japanese market, in coordination with Polygon Labs. Having different solutions will facilitate diverse needs for different dApp developers and enterprise solutions depending on their specific requirements. 
        
### Why is Astar expanding to Layer 2, as a zkEVM network? 
       
Our projects and partners have shown a growing interest in zero-knowledge technology and layer 2 solutions, both emerging trends. Scaling our current blockchain through zero-knowledge solutions could meet demand growth by accessing the Ethereum ecosystem.
        
### What is the benefit for the current Astar ecosystem of deploying a Layer 2 zkEVM on Ethereum?
  
Launching a layer 2 on Ethereum offers several advantages for the Astar ecosystem:
        
- **More Choices for Builders**: With both Astar Substrate (layer 1) and Astar zkEVM (layer 2), developers have more places and tools to create/build with.
- Expanding to a bigger community.
- Astar can work more closely with Tier 1 projects on Ethereum. This means they can benefit from Astar's unique features, for example: Astar's dApp Staking.
- The Astar ecosystem will benefit from increased growth in transactions, active users, and liquidity. All are key factors for network success.
- More Japanese enterprises and real-world use cases are coming to the Astar ecosystem

### Is Astar zkEVM Censorship Resistant?

Astar zkEVM is censorship resistant from the protocol level, even though in the current architecture there is only a single sequencer proposing the batches to L1 but it cannot censor anyone since it is always possible to *force* batches directly into L1 rollup smart contract. That means essentially even if sequencer in theory can censor your TX going through it but it cannot censor you to send your TX directly to L1 smart contract
        
### How can developers get started with building on Astar zkEVM? Are there any specific toolkits or SDKs available?

Detailed information regarding development will be unveiled alongside the testnet launch. Additionally, we'll release comprehensive documentation simultaneously with the testnet, enabling developers to begin building immediately. 
        
Current developers within the Astar community will gain significantly from the expansive developer resources present in the Ethereum ecosystem. Familiar Ethereum developer tools, including Hardhat, and Truffle, will remain accessible. As we progress, Astar will introduce tools and SDKs tailored to any unique Astar zkEVM functionalities.
        
### How does gas pricing on Astar zkEVM compare to Ethereum and Polygon?
        
Though transactions on Astar zkEVM will be significantly cheaper than those on Ethereum mainnet, it is nonetheless going be more expensive compared to Astar Substrate on Polkadot. The reason is that as Astar zkEVM is a Layer 2 solution of Ethereum, the cost of the network is largely affected by the cost of Ethereum mainnet, which is significantly higher than Astar Substrate. 
        
### What's the roadmap for the future development and deployment of Astar zkEVM?
Astar zkEVM testnet will begin to roll out in October 2023 (Q4) with a planned rollout of mainnet after battle testing our testnet environment. We plan to launch Astar zkEVM mainnet in full coordination with our infrastructure partners to ensure zkEVM dApp developers have all the tools and features they need to get started building right away, such as cross-chain messaging (or bridging) and account abstraction!
        
### Can assets be bridged or migrated from other chains to Astar zkEVM? If so, how?
- ETH can be natively transferred in both directions using a trustless bridge.
- ASTR and additional tokens will be transitioned via the LayerZero protocol.

### How are transactions collected and ordered?
1. A user initiates a transaction in a wallet, such as Metamask, and forwards it to a Sequencer.
2. The transaction gets finalized on Astar zkEVM once the Sequencer commits to processing it. At this point, it's finalized on Astar zkEVM but not Ethereum, and referred to as the **Trusted State**.
3. The Sequencer submits batch data to the Ethereum smart contract. This allows any node to trustlessly sync from Ethereum, a phase called **Virtual State**.
4. An Aggregator collects pending transactions, verifies them, and constructs a Proof to confirm them on Ethereum.
5. With Proof validation, transactions achieve Ethereum finality, essential for withdrawals, termed as the **Consolidated State**.
       
The above process is a summarized version of the transactions flow on Astar zkEVM. We recommend you to take a look at the complete [transaction life cycle](https://wiki.polygon.technology/docs/zkevm/protocol/l2-transaction-cycle-intro/) document for now if you'd like to learn more.
        
### What types of dApps can be deployed on Astar zkEVM?

Any dApps that are EVM compatible can be deployed on Astar zkEVM due to its EVM equivalence. This means that dApps built for Ethereum can be deployed on Astar's zkEVM, where they will benefit from scalability improvements and parallel processing due to the nature of rollups, and lower transaction costs.
        
### How is consensus achieved within the Astar zkEVM ecosystem?
        
Astar zkEVM itself exists as a rollup, which doesn’t require independent consensus, therefore, Astar zkEVM inherits Ethereum’s security.

### What is the value of Astar zkEVM for ASTR token holders?

Astar zkEVM uses the ASTR token in three new ways: as the gas fee for tooling, in the burning mechanism with the sequencer, and burning incentivized tokens to the network aggregator. This model will be evaluated on our testnet to maximize the value for ASTR holders. The final design is subject to change based on analysis from testing the model.

<Figure caption="Astar zkEVM Value" src={require('./img/astar-zkevm-value.png').default } width="65%" />
        