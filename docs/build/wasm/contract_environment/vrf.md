---
sidebar_position: 2
---

# Verifiable Randomness Function

Unfortunately there is no way to generate randomness using ink!
The available options are:

* Creating an VRF oracle contract that will generate randomness 
  * (DIA is working on it for Astar)
* On runtime level add pallet RandomnessCollectiveFlip chain-extension to be accessible in ink! contracts
  * Astar team is working on this
* Add a call in ink_env to get current block hash and previous block hash and create randomness from it