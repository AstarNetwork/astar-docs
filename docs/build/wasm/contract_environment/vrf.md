---
sidebar_position: 2
---

# Verifiable Randomness Function

Unfortunately at the moment there is no way to generate randomness using ink!
The available options are:

* Creating a VRF oracle contract that will generate randomness.
  * (DIA is working on it for Astar.)
* On the runtime level, adding a Chain Extension to the RandomnessCollectiveFlip pallet so it's accessible within ink! contracts.
  * Astar team is working on this.
* Add a function in the ink_env to retrieve the current and previous block hashes, on which to base randomness.