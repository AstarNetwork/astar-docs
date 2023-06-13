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

## What’s ink!redible?

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la  

![inkredible_guide00](img/inkredible_guide00.png)

<br />

## Step by steps

In this section we explain basic RMRK NFT functions step by step. The functions you can play around within ink!redible NFT are Mint/ Approve/ Add/ Equip. In other word, you will need to do all functions in order to equip a NFT to a parent NFT.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide01} style={{width: 1200}} />
  </div>

### Mint
First, you get tokens. With ink! environment it is required to have a Storage Deposit per token as well as gas fee. This is to prevent unnecessary data entries and keep the database clean. [About Storage Deposit](https://docs.astar.network/docs/build/wasm/transaction-fees/#storage-rent).

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide02} style={{width: 600}} />
  </div>

### What is Inventory?

Inventory is a place where you can see all family tokens owned by a parent NFT. What you can do in the inventory section are

1. Find tokens that can be equippable to the parent token and add to the inventory.
2. Once you add a child token to inventory, you can now equip the child token.
3. you can also unequip a child token.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide03} style={{width: 600}} />
  </div>

### Add

When you mint a parent-to-be token, you will see only a “Add” button. This means the parent token doesn’t have anything to equip.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide04} style={{width: 600}} />
  </div>

### Approve and Add Child

When you mint a child-to-be token, you will be able to see the token from a parent-to-be token like this. The child token is belonging to you when you mint and you are the owner, however, in RMRK when you add a child to be an inventory of a parent, the parent token needs to have the ownership of the child. So here, you first need to give the ownership of the child token to the parent token by approving.

After approving you will be able to see the “Add inventory button enabled. You can now ask the parent to add the child in the inventory.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide05} style={{width: 600}} />
  </div>

### Equip

Now, after you added a child NFT to the inventory of a parent NFT, you can see the child NFT in there. This means the child NFT is owned by the parent. And other Parent-to-be NFT cannot have the child in their inventory until you remove the parenting (It’s not implemented yet)

Next, you can equip this child NFT to the parent NFT. Click the child NFT and got to the NFT page. You will see the parent of this Child NFT and you can equip.

You will then see the child NFT is added to Parent NFT and see all together.

<div style={{textAlign: 'center'}}>
  <img src={inkredible_guide06} style={{width: 600}} />
  </div>