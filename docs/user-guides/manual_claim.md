---
sidebar_position: 13
---

# Manually Claim dApp Staking Rewards On Polkadot.Js
The portal has a limit of 50 claims per batch. If this is exceeded, you won't be able to claim your rewards and have to manually do it on Polkadot.js. For example:

1. You are staked on a dApp and left the rewards unclaimed for more than 50 eras.
2. You are staked on 5 dApps and left the rewards unclaimed for more than 10 eras.

If you are caught in this situation, this tutorial will guide you on how to claim the rewards on Polkadot.js.

---

**Step 1: Identify the contract address that you are staked on**
1. Go to [Astar Portal](https://portal.astar.network/) and connect to the desired network.
2. Go to dApp Staking and turn off `Re-Stake after claiming`.
![image](https://user-images.githubusercontent.com/37278708/201064005-8f8f6a84-f509-46d4-b0a0-493dba981957.png)
3. Go to `My dApps`.
4. You can see the list of dApps that you are staked on.
5. Go to the info of each dApp that you are staked on and copy the contract address.
6. Save the contract address as a reference for the next steps.
![image](https://user-images.githubusercontent.com/37278708/201061933-81f7fe93-49f9-4c68-a1a1-ccdb6acf2e48.png)

---

**Step 2: Claim the rewards on Polkadot.js**
1. Open a new browser tab and go to [Polkadot.Js web app](https://polkadot.js.org/apps/#/extrinsics).
2. Make sure you are connected to the correct chain (Astar/Shiden/Shibuya).
3. Make sure you are connected with the correct wallet.
4. Click `Developer` and `Extrinsics`.
5. On the left dropdown menu, select `dappsStaking`.
6. On the right dropdown menu, select `claimStaker`.
7. On `EVM: H160`, paste the contract address that you have on the notepad e.g `0xaab44542c72f88f7b98fffda418e3efe94bc13af`.
8. Submit transaction and add a tip before signing the transaction.
9. If you have a huge backlog, you need to repeat this step many times until all the rewards are claimed.
![image](https://user-images.githubusercontent.com/37278708/199938229-92e8eb7d-46fa-450f-a16f-d583da7bf48c.png)
10. You have to claim one era at a time.
11. After claiming all the rewards, you can go back to the Portal and turn on `Re-Stake after claiming`.

---

That's all, and please claim your rewards regularly to avoid this situation. If you happen to come across any issue, please contact any of the Team Members or Ambassadors on [Discord](https://discord.gg/2FGq5KqwBh).

