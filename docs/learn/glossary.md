---
sidebar_position: 5
---

# Glossary

 ### Archive node 
  A node that stores all historical states of a blockchain between blocks.

 ### ASTR
 The native token of Astar. Used for dApp staking.

 ### Ask!
 An embedded domain-specific language (eDSL) for writing smart contracts based on AssemblyScript.

 ### Bridge 
 A mechanism that allows the transfer of assets or data between two different blockchain networks.

 ### Collator
  A node that maintains a parachain by collecting parachain transactions and producing state transition proofs for the validators.

 ### Cross-chain
 Ability of different blockchain networks to communicate and exchange data or assets with each other, allowing for interoperability and enhancing the functionality and scalability of blockchain ecosystems.

 ### DAO
 Short for Decentralized Autonomous Organization, a blockchain-based organization that allows for decentralized decision-making and management by its members.

 ### DApp
 A generic term for a decentralized application, that is, one that runs as part of a distributed network as opposed to being run on a specific system or set of systems.

 ### Data Availability

Often abbreviated to DA, Data Availability refers to a component of modular blockchains that handles off-chain storage of ephemeral-type data that is referenced rarely, though for which availability needs to be guaranteed for historical reference and security purposes. Data Availability systems are highly specialized to provide resilient data storage for sovereign rollups and layer 1 networks. 

 ### EVM
 Short for Ethereum Virtual Machine.  A software environment that executes smart contracts on the Ethereum compatible blockchain networks.

 ### Existential Deposit
 The minimum amount of a native token required for an account to exist. If at any point in time the balance drops below the existential deposit amount, it is reaped (balance set to zero) to prevent long-term network bloat.  

 ### H160
 An Ethereum format address for Substrate-based blockchains.

 ### HRMP
 Short for Horizontal Relay-routed Message Passing. A precursor to the complete XCMP implementation, that mimics the same interface and semantics of XCMP.  The plan is to retire HRMP once the implementation of XCMP is complete.

 ### Ink!
 An embedded domain-specific language (eDSL) for writing smart contracts based on Rust.

 ### Layer 1
  The underlying infrastructure of a blockchain network, which includes the block production mechanism, the data structure, and the rules for validating transactions.

 ### Layer 2
 Programs built on top of layer 1 such as smart contracts or solutions to improve scalability, reduce transaction costs, and enhance the functionality of the blockchain network.

 ### Light client
 A client that does not download the full blockchain, and instead downloads only block headers. Connects to full nodes to query data.

 ### Mainnet
 Short for "main network": the fully functional production chain that runs its own network.

 ### Modular Blockchain
A concept of layer 2 scaling. Modular blockchain systems move two or more of the four key blockchain functions off-chain to highly specialized workers dedicated solely to providing specific blockchain functions such as transaction execution or data storage.

 ### Monolithic Blockchain
 Like an all-in-one printer/fax/scanner/copier machine, all blockchains are tasked with providing multiple functions: Consensus, Execution, Data Storage, and Settlement, which can be imagined as a vertical, monolithic stack.

 ### Node
 A device connected to a blockchain network that stores a copy of the blockchain ledger and participates in validating transactions and maintaining the network's security and integrity.

 ### Optimiums
 A concept related to layer 2 scaling. Optimiums combine an off-chain execution environment based on Optimistic rollups with a Data Availability layer, effectively moving three of the four key blockchain functions off-chain, freeing up the need for expensive resources on layer 1, leaving it to perform final settlement, only.

 ### Pallet
 A Substrate runtime module.

 ### Parachain 
 A blockchain that meets several characteristics that allow it to work within the confines of the Polkadot Host. Also known as “parallelized chain”.

 ### Polkadot
 A heterogeneous, multi-chain network allowing various blockchains of different characteristics to perform arbitrary, cross-chain communication under shared security.

 ### Relayer
 A node that relays messages between different chains in Polkadot.

 ### Rollup
 A layer 2 scaling solution that moves the smart contract execution environment either to cryptographically (zero-knowledge-based) or optimistically secured off-chain networks with independent means of consensus. Rollups bundle multiple transactions into one to increase throughput and reduce fees on the underlying layer 1 network.

 ### Sharding
 Partition of a blockchain network that allows for parallel processing of transactions to increase scalability and network capacity.

 ### Shiden
 The "canary network" for Astar connected to Kusama, a canary network for Polkadot. It consists of an early-release, unaudited version of the Astar codebase. It is not a testnet. For more info refer to the [Networks](/docs/learn/networks.md) section.

 ### Shibuya
 A testnet for Shiden and Astar. For more info refer to the [Networks](/docs/learn/networks.md) section.

 ### Smart Contract
 A self-executing computer program that automatically enforces and executes the terms of an agreement between parties on a blockchain network.

 ### SS58 
 Standardized format for encoding and decoding account addresses. It stands for Substrate 58, where 58 refers to the base-58 encoding scheme used to encode the address and is used to represent user accounts and public keys in Substrate-based blockchains.

 ### Staking
 Allocating tokens to a process with defined objective (e.g. security, elections etc.) and earn rewards on the network. In Astar used to nominate dApps to provide basic income to developers.

 ### Substrate 
 A modular framework for building blockchains. Astar is built with Substrate.

 ### Swanky Suite 
 A suite of tools for building Wasm smart contracts on Astar that simplify compilation, deployment and testing.

 ### Testnet 
 Short for "test network": an experimental network where testing and development takes place. Networks are often executed on a testnet before they are deployed to a mainnet.

 ### Validium
 A concept related to layer 2 scaling. Validiums combine an off-chain execution environment based on zero-knowledge validity proofs with a Data Availability layer, effectively moving three of the four key blockchain functions over to highly specialized workers, freeing up the need for expensive resources on layer 1, leaving it to perform final settlement, only.

 ### Vesting
 A mechanism where a certain amount of tokens is released to the owner gradually over a period of time, often used for incentivizing long-term commitments and discouraging short-term speculation.

 ### Wallet 
 A program that allows one to store private keys and sign transactions for Astar or other blockchain networks.

 ### Wasm

 Also WebAssembly, a language-agnostic, binary instruction format for a stack-based virtual machine.

 ### XC-20
 A standard for cross-chain assets in Polkadot ecosystem with ERC-20 interface.

 ### XCM 
 Short for Cross-Consensus Messaging, a **messaging format**  and language used to communicate between consensus systems.

 ### Zero-knowledge proof
 A cryptographic protocol that allows one party to prove knowledge of a secret without revealing the secret itself.
 
 ### Zombienet
 A CLI tool to easily spawn ephemeral Substrate-based networks and perform tests against them.


