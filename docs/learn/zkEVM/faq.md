import Figure from "/src/components/figure"

# Astar zkEVM FAQs

## Frequently Asked Questions

Here you will find answers to the most common questions about Astar zkEVM such as how it works, how to interact, and how it relates to Astar's Polkadot parachain, Polygon, and the Ethereum network.

### What is the relationship between Polygon and Astar zkEVM?
  
At a high level, Polygon and Astar zkEVM are both scaling solutions for Ethereum, however, Polygon recently introduced an Aggregation Layer (AggLayer) designed to provide shared consensus, data availability, and liquidity across their supported Layer 2 networks, technically referred to as **Validiums.** Astar zkEVM is the first Validium connected to this AggLayer. 

### Is Astar leaving Polkadot?

Astar is not leaving Polkadot. In fact, Astar has recently secured a parachain slot for the next two years to focus primarily on the development of tools for smart contract creation as well as the regular onboarding of new projects. 

### Are all three (EVM, Astar zkEVM and Wasm) VMs interoperable?

Yes. Astar zkEVM will be interoperable with existing chains on day one because of its EVM equivalence, and also via partners such as Layer Zero that support traditional asset bridging, arbitrary cross-chain message passing, and remote smart contract calls. 

### What is unique about Astar zkEVM?

There are several key features that make Astar zkEVM unique:
        
- Bridging the Japanese market with global projects, enterprises, and developers.
- High EVM equivalency.
- High scalability via zero-knowledge technology.
- Trustless interoperability and shared security inherited from Ethereum.
- Significantly reduced transaction cost compared to Ethereum mainnet.

### What is Astar zkEVM’s gas option?
        
Bridged ETH is the gas token on Astar zkEVM testnet, and bridged ASTR may be added as an option at some point in the future.

### Will Astar release a new token for the zkEVM?

No. The value of Astar network as a whole is reflected in the ASTR token, and everything we do from a business-perspective is intended to either enhance or preseve it. We have no intention of introducing a token native to the zkEVM.

### Will there be an airdrop for the zkEVM ecosystem?

There will be a number of different ways participants in the zkEVM ecosystem can earn incentives, although, at least for now, a planned airdrop is not one of them. Please follow the zkEVM Journey campaign if you'd like to learn more, and to get involved during the launch phase. 

### Is Astar zkEVM a zk rollup? 
        
Early iterations used zk rollup architecture exclusively, however, adding modular data availability while connecting to Polygon AggLayer means Astar zkEVM may be more accurately categorized as a **Validium** (zk proofs + data availability) though transactions are still 'rolled up' and submitted on-chain to be finalized in batches.
        
### What is the difference between Astar zkEVM and Ethereum mainnet?
        
From a user perspective, Astar zkEVM distinguishes itself from the Ethereum mainnet primarily by offering a much lower transaction cost and faster speeds. These features open the door to developers to create products that weren't possible or that became impractical to run on Ethereum mainnet, such as web3 gaming or high-speed trading .
        
### Is Astar zkEVM going to become a Layer 2 on Ethereum, or Polygon chain? 

Astar zkEVM will be deployed as a Validium on Ethereum Layer 2, powered by Polygon CDK and AggLayer.
        
### Are you planning to support all ecosystems equally, or have some priorities?
        
Astar zkEVM will be focusing on the Japanese and Korean markets, in coordination with Polygon Labs. Having different solutions will facilitate diverse needs for different dApp developers and enterprise solutions depending on their specific requirements. 
        
### Why is Astar expanding to Layer 2, as a zkEVM network? 
       
Our projects and partners have shown a growing interest in zero-knowledge technology and Layer 2 solutions, both of which are emerging trends. Scaling our current blockchain through zero-knowledge solutions could meet demand growth by accessing the Ethereum ecosystem.
        
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

See the [build section](/docs/build/zkEVM/quickstart.md) for more about how to get started.
        
Current developers within the Astar community can benefit significantly from the expansive developer resources present in the Ethereum ecosystem where support and tools, including Hardhat and Truffle, are highly accessible. Eventually, Astar will introduce tools and SDKs tailored to specific Astar zkEVM functionalities.
        
### How does gas pricing on Astar zkEVM compare to Ethereum and Polygon?
        
Though transactions on Astar zkEVM will cost significantly less than those on Ethereum mainnet, it will be more expensive than Astar Substrate on Polkadot. The cost of transacting on the network is largely affected by transient network activity on Ethereum mainnet, which is typically higher than that of Astar Substrate. 
        
### What's the roadmap for the future development and deployment of Astar zkEVM?

Astar zkEVM testnet rolled out in October 2023, with mainnet following in late Q1 2024.
        
### Can assets be bridged or migrated from other chains to Astar zkEVM? If so, how?

Absolutely!

- ETH can be natively transferred in both directions from Ethereum to the zkEVM using a trustless bridge.
- ASTR and other tokens can be bridged over via the LayerZero protocol, or other supported bridges.
- In the future, Polygon LxLy bridge will facilitate transfer of assets and liquidity between networks connected to Polygon AggLayer.

### How are zkEVM transactions collected and ordered?

1. A user initiates a transaction in a wallet, such as Metamask, and forwards it to a Sequencer.
2. The transaction gets finalized on Astar zkEVM once the Sequencer commits to processing it. At this point, it's finalized on Astar zkEVM but not Ethereum, and referred to as the **Trusted State**.
3. The Sequencer submits batch data to the Ethereum smart contract. This allows any node to trustlessly sync from Ethereum, a phase called **Virtual State**.
4. An Aggregator collects pending transactions, verifies them, and constructs a Proof to confirm them on Ethereum.
5. With Proof validation, transactions achieve Ethereum finality, essential for withdrawals, termed as the **Consolidated State**.
       
The above process is a summarized version of the transactions flow on Astar zkEVM. We recommend you to take a look at the complete [transaction life cycle](https://wiki.polygon.technology/docs/zkevm/protocol/l2-transaction-cycle-intro/) document if you'd like to learn more.
        
### What types of dApps can be deployed on Astar zkEVM?

Any dApps that are EVM compatible can be deployed on Astar zkEVM due to its EVM equivalence. This means that dApps built for Ethereum can be deployed on Astar's zkEVM, where they will benefit from scalability improvements and parallel processing due to the nature of how rollups work, and lower transaction costs.
        
### What is the value of Astar zkEVM for ASTR token holders?

Astar zkEVM uses the ASTR token in three new ways: as the gas fee for tooling, in the burning mechanism of the sequencer, and burning incentivized tokens to the network aggregator. This model will be evaluated on our testnet to maximize the value for ASTR holders. The final design is subject to change based on analysis from testing the model.

<Figure caption="Astar zkEVM Value" src={require('./img/astar-zkevm-value.png').default } width="65%" />
        
