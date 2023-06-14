---
sidebar_position: 14
---
import inkredible_guide00 from "./img/inkredible_guide00.png"
import inkredible_guide01 from "./img/inkredible_guide01.png"
import inkredible_guide02 from "./img/inkredible_guide02.png"
import inkredible_guide03 from "./img/inkredible_guide03.png"
import inkredible_guide04 from "./img/inkredible_guide04.png"
import inkredible_guide05 from "./img/inkredible_guide05.png"
import inkredible_guide06 from "./img/inkredible_guide06.png"

# How to use ink!redible NFT

## What are ink!redible NFTs?

Astar brings you ink!redible NFTs - a new way for users and builders to engage with, and create, NFTs. Originally derived from the RMRK standard, ink!redible NFTs brings the latest in NFT technology to the Astar Network, and in the dedicated, more efficient, domain-specific language that is ink!

![inkredible_guide00](img/inkredible_guide00.png)

<br />

## Step by Step

In this section we give a step-by-step breakdown of basic ink!redible NFT functions. In order to better understand, we first take a look at one of the main features of this new NFT standard: its capacity to allow NFTs to equip onto each other. To help in the organization of these equipables, we give them a hierarchy and distinguish between them with the labels "parent NFT", and the equipable "child NFT". Meaning that child NFTs are meant to be added to the parent NFT, thereby resulting in one visual composition of multiple NFTs. In order to equip child NFTs to a parent NFT, four main functions will be utilized: Mint/ Approve/ Add/ Equip.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide01} style={{width: 1200}} />
  </div>

### Mint
You will need native tokens in order to mint these NFTs. Within the ink! environment, it's required to have enough tokens for the gas transaction and for the Storage Deposit per NFT. This is to prevent unnecessary data entries and keep the database clean. [About Storage Deposit](https://docs.astar.network/docs/build/wasm/transaction-fees/#storage-rent).

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide02} style={{width: 600}} />
  </div>

### What is the Inventory?

The inventory is home to all the child NFTs that are owned by a parent NFT. By default, when the child NFT is first minted, they are not added to the inventory, nor equipped to the parent NFT. You can preform the following actions in the inventory section:

1. When a child NFT is minted, you'll be able add them to the parent NFT inventory and locate them here.
2. You can select a child NFT and equip it to your parent NFT.
3. You can unequip a child NFT from the parent NFT.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide03} style={{width: 600}} />
  </div>

### Add

When you mint a parent NFT, an “Add” button will be the only option available. This signifies that the parent NFT is childless, and doesn’t own child NFTs to equip yet. Let's find them a child.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide04} style={{width: 600}} />
  </div>

### Approve and Add Child

When you mint a child NFT, you will be able to see that NFT from a parent NFT like in the image below. Full ownership of the child NFT is yours upon minting. However, when you add a child NFT into the inventory of a parent NFT, the parent NFT will need full ownership of the child NFT. It's in this step that you allow the parent NFT to receieve full ownership of the child NFT by approving.

After approving, you will be able to see the “Add to the inventory" button enabled. You can now add the child NFT to the parent NFT inventory.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide05} style={{width: 600}} />
  </div>

### Equip

After you have added a child NFT to the inventory of a parent NFT, you will see the child NFT in there. This means the child NFT is owned by the parent NFT. Please note, other parent NFTs cannot have that same child NFT in their inventory until you remove the ownership from its current parent NFT - and this funtion is not yet implemented.

Next, you can equip this child NFT to the parent NFT by selecting the child NFT and going to the NFT page. You can equip it from here and see the child NFT added to Parent NFT all together.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide06} style={{width: 600}} />
  </div>
