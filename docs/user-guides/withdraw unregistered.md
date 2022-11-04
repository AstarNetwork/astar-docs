# Withdrawing Stake From Unregistered Contract

**Occassionally but rare, some projects decided to change their contract address on the portal or some projects might get delisted. In this cases, some stakes are not automatically removed so stakers need to manually withdraw their stake. This tutorial will guide you on how to withdraw stake from a dApp that has been removed from the portal.**
---

## Step 1: Find The Contract Address That You Are Staked On
1. Go to [Polkadot.js web app](https://polkadot.js.org/apps/#/chainstate)
2. Make sure you are connected to the correct chain; either Astar or Shiden.
3. Make sure you are connected with the correct wallet.
4. Click "Developer" and "Chain State". 
5. On the left dropdown menu, select "dappsStaking".
6. On the right dropdown menu, select "generalStakerInfo".
7. Unselect "include option".
8. Click the "+" sign.

![image](https://user-images.githubusercontent.com/37278708/199924502-e833a53e-ce7f-4b7d-bdee-b2ea1b377904.png)

9. You are now able to see all the contracts that you are staked on.
![image](https://user-images.githubusercontent.com/37278708/199924710-61d994f3-ddae-4dfb-b4c3-f186138d86de.png)

10. Leave that page as it is.
11. Now open another browser tab and go to [Astar Portal](https://portal.astar.network/#/astar/dapp-staking/discover).
12. Connect using the same wallet.
13. Go to dApp Staking -> My dApps.
14. You can see the list of dApps that you are staked on.

![image](https://user-images.githubusercontent.com/37278708/199926165-909fa598-d9b2-4811-8619-f3ae414b9fb3.png)

15. Go to the info of each dApp that you are staked on and you can see the contract address. 

![image](https://user-images.githubusercontent.com/37278708/199926265-f1913a1a-0635-4ed2-9f9b-91e7c8e0a2ec.png)

16. Cross check the contract addresses with the ones you have on Polkadot.js web app. If you come across a contract address that is available on Polkadot.js web app but not available on Astar Portal, that is the contract address that has been removed, which is what you are looking for.
17. Copy that contract address and paste it on a notepad as a reference for the next steps.

---

## Step 2: Claim All The Unclaimed Rewards
1. Open a new browser tab and go to [Polkadot.js web app](https://polkadot.js.org/apps/#/extrinsics).
2. Make sure you are connected to the correct chain; either Astar or Shiden.
3. Make sure you are connected with the correct wallet.
4. Click "Developer" and "Extrinsics". 
5. On the left dropdown menu, select "dappsStaking".
6. On the right dropdown menu, select "claimStaker".
7. On EVM: H160, paste the contract address that you have on the notepad e.g 0xaab44542c72f88f7b98fffda418e3efe94bc13af.
8. Submit transaction and add a tip before signing the transaction.
9. If you have a huge backlog, you need to repeat this step many times until all the rewards are claimed. Otherwise, you won't be able to proceed with the next step.

![image](https://user-images.githubusercontent.com/37278708/199938229-92e8eb7d-46fa-450f-a16f-d583da7bf48c.png)
---

## Step 3: Withdraw The Stake From The Contract
1. Stay on the same browser.
2. On the left dropdown menu, select "dappsStaking".
3. On the right dropdown menu, select "withdrawFromUnregistered".
4. On EVM: H160, paste the contract address that you have on the notepad e.g 0xaab44542c72f88f7b98fffda418e3efe94bc13af.
5. Submit transaction and add a small tip before signing the transaction.

![image](https://user-images.githubusercontent.com/37278708/199930565-fff88330-bc9d-4680-aea3-de8d52052c00.png)

6. Your stake is now withdrawn from the unregistered contract. 

---
That's all. If you happen to come across any issue, please contact any of the Team members or Ambassadors on [Discord](https://discord.gg/2FGq5KqwBh).



