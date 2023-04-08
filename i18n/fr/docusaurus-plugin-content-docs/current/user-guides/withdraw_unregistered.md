---
sidebar_position: 9
---

# Retirer les tokens en staking d'un contrat non enregistré

Occassionnellement mais rarement, certains projets ont décidé de modifier leur adresse de contrat sur le portail ou certains projets sont retirés. Dans ce cas, certains tokens stakés ne sont pas automatiquement retirés. Les stakers doivent retirer manuellement leurs tokens. Ce tutoriel vous guidera sur la façon de retirer vos tokens d'une dApp qui a été retirée du portail.

**La façon la plus simple**, est de se connecter au portail avec l'adresse qui est utilisée pour staker sur la dApp non enregistrée et cliquer sur 'Claim'. Au moment où vous cliquez sur réclamer, vos tokens liés seront déverrouillés et entreront en période de libération (unbonding period). Dans le cas où ce qui précède ne fonctionnerait pas, vous pouvez suivre le guide ci-dessous.

---

## Étape 1 : Trouvez l'adresse du contrat sur laquelle vous êtes en staking
1. Allez sur [l'application web Polkadot.js] (https://polkadot.js.org/apps/#/chainstate).
2. Assurez-vous que vous êtes bien connecté à la bonne chaîne (Astar/Shiden/Shibuya).
3. Assurez-vous d'être connecté avec le bon portefeuille.
4. Cliquez sur `Développeur` et `État de Chaîne`.
5. Dans le menu déroulant de gauche, sélectionnez `dappsStaking`.
6. Dans le menu déroulant à droite, sélectionnez `generalStakerInfo`.
7. Désélectionnez `include option`.
8. Cliquez sur le signe **+**. ![image] (https://user-images.githubusercontent.com/37278708/199924502-e833a53e-ce7f-4b7d-bdee-b2ea1b377904.png)

9. Vous pouvez maintenant voir tous les contrats sur lesquels vous êtes en staking. ![image] (https://user-images.githubusercontent.com/37278708/199924710-61d994f3-ddae-4dfb-b4c3-f186138d86de.png)

10. Laissez cette page telle qu'elle est.
11. Ouvrez un autre onglet du navigateur et allez sur [le portail d'Astar] (https://portal.astar.network/astar/dapp-staking/discover).
12. Se connecter en utilisant le même portefeuille.
13. Allez dans dApp Staking -> Mes dApps.
14. Vous pouvez maintenant voir toutes les dApps sur lesquels vous êtes en staking. ![image] (https://user-images.githubusercontent.com/37278708/199926165-909fa598-d9b2-4811-8619-f3ae414b9fb3.png)

15. Accédez aux informations de chaque dApp sur laquelle vous êtes en staking et vous pouvez voir l'adresse du contrat. ![image] (https://user-images.githubusercontent.com/37278708/199926265-f1913a1a-0635-4ed2-9f9b-91e7c8e0a2ec.png)

16. Vérifiez les adresses de contrat avec celles que vous avez sur l'application Web Polkadot.js. Si vous rencontrez une adresse contractuelle qui est disponible sur l'application web Polkadot.js mais indisponible sur le portail d'Astar, c'est l'adresse du contrat qui a été supprimée, c'est ce que vous recherchez.
17. Copiez cette adresse de contrat et collez-la sur un bloc-notes comme référence pour les étapes suivantes.

---

## Étape 2 : Réclamer toutes les récompenses non réclamées
1. Ouvrez un nouvel onglet du navigateur et allez sur [l'application Web Polkadot.js] (https://polkadot.js.org/apps/#/extrinsics).
2. Assurez-vous que vous êtes bien connecté à la bonne chaîne (Astar/Shiden/Shibuya).
3. Assurez-vous d'être connecté avec le bon portefeuille.
4. Cliquez sur `Développeur` et `Extrinsèques`.
5. Dans le menu déroulant de gauche, sélectionnez `dappsStaking`.
6. Dans le menu déroulant à droite, sélectionnez `claimStaker`.
7. Sur EVM : H160, collez l'adresse de contrat que vous avez sur le bloc-notes, par exemple `0xaab44542c72f88f7b98fffda418e3efe94bc13af`.
8. Soumettez la transaction et ajoutez un tip avant de signer la transaction.
9. Si vous avez du retard sur la réclamation de vos récompenses, vous devez répéter cette étape plusieurs fois jusqu'à ce qu'elles soient collectées. Sinon, vous ne pourrez pas passer à l'étape suivante.
![image] (https://user-images.githubusercontent.com/37278708/199938229-92e8eb7d-46fa-450f-a16f-d583da7bf48c.png)
---

## Étape 3 : Retirer les tokens en staking du contrat
1. Restez sur le même navigateur.
2. Dans le menu déroulant de gauche, sélectionnez `dappsStaking`.
3. Dans le menu déroulant à droite, sélectionnez `withdrawFromUnregistered`.
4. Sur EVM : H160, collez l'adresse de contrat que vous avez sur le bloc-notes, par exemple `0xaab44542c72f88f7b98fffda418e3efe94bc13af`.
5. Soumettez la transaction et ajoutez un tip avant de signer la transaction. ![image] (https://user-images.githubusercontent.com/37278708/199930565-fff88330-bc9d-4680-aea3-de8d52052c00.png)

6. Votre staking est maintenant retiré du contrat non enregistré.

---

C'est tout. Si vous rencontrez un problème quelconque, veuillez contacter l'un des membres de l'équipe ou des ambassadeurs sur [Discord] (https://discord.gg/2FGq5KqwBh).



