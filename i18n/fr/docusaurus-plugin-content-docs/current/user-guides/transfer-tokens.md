---
sidebar_position: 4
---

# Comment transférer des jetons

Dans ce tutoriel, nous allons vous guider sur la façon de transférer des jetons en utilisant le portail et en envoyant des jetons vers le portail.

<br />

- [Créer des comptes Astar (Natif et EVM)](#create-astar-accountsnative-and-evm)

- [Envoi d'ASTR/SDN vers Astar Network depuis des exchanges centralisées (CEX)](#sending-astrsdn-to-astar-network-from-central-exchanges)

- [Envoi d'ASTR/SDN vers des exchanges centralisées (CEX) depuis Astar Network](#sending-astrsdn-to-central-exchanges-from-astar-network)

- [Envoi d'ASTR/SDN vers Astar EVM depuis Astar Natif](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)

- [Envoi d'ASTR/SDN vers Astar Natif depuis Astar EVM](#sending-astrsdn-to-astar-native-from-astar-evm)

- [Cross-chain Transfer (XCM)](#cross-chain-transferxcm)

- [Transfert d'actifs Cross-chain (XCM) vers le réseau Astar](#transferring-cross-chainxcm-assets-into-astar-network)

- [Transfert d'actifs Cross-chain (XCM) vers d'autres chaînes depuis Astar Network](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

<br />

## Créer des comptes Astar (Natif et EVM)

Astar a deux adresses dans des formats différents.

- Une adresse Astar native - pour utiliser le dApps Staking et interagir avec les projets WASM
- Une adresse Astar EVM - pour interagir avec les projets EVM

Si vous avez besoin de créer un compte Astar, [cette page](create-wallet.md) vous aidera à créer des comptes.

Si vous n'avez pas ajouté Astar Network à MetaMask, c'est très simple - Allez sur notre [Portail](https://portal.astar.network/) et choisissez MetaMask. MetaMask vous demandera la permission d'ajouter Astar Network. Alternativement, veuillez consulter [ici](setup-metamask.md) pour plus de détails sur le réseau.

<br />

## Envoi d'ASTR/SDN vers Astar Network depuis des exchanges centralisées (CEX)

La plupart des échanges ne prennent en charge que Astar Network (Natif) pour le moment sauf Gate.io qui prend en charge Astar (EVM). Vous aurez besoin d'un compte natif Astar pour recevoir des jetons ASTR et vous pourrez envoyer des jetons vers un compte Astar EVM comme vous le souhaitez.

:::tip

La plupart des échanges ne mentionnent que Astar Network ce qui signifie que le réseau qu'ils supportent est Astar Native.

:::

:::danger

**Vérifiez deux fois le réseau pris en charge, s'il est dit Astar (EVM) vous ne pouvez transférer que des jetons vers les comptes Astar EVM**.

:::

1. Allez sur notre [Portail](https://portal.astar.network/).

2. Connectez le réseau à Astar/Shiden (Astar Network est pour ASTR et Shiden Network est pour le jeton SDN).

<img width="1000" alt="réseau" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png" />

3. Connectez votre portefeuille Polkadot.js - si vous ne l'avez pas encore fait, veuillez retourner sur [Créer des comptes Astar](#create-wallet/#astar-accounts).

<img width="1000" alt="portefeuille" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png" />　

4. Voici la page d'actif de votre compte Astar. Vous verrez l'adresse en haut. Copier l'adresse.

<img width="1000" alt="Copie du compte" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png" />

5. Allez sur l'échange où vous avez des jetons ASTR et faites un retrait à l'adresse ci-dessus.

6. Une fois la transaction effectuée, retournez sur le Portail et vérifiez le solde.

<br />

## Envoi d'ASTR/SDN vers des exchanges centralisées (CEX) depuis Astar Network

:::tip

- **Utilisez un compte Astar Natif pour envoyer des jetons vers des exchanges qui supportent le réseau Astar Network**
- **Utilisez un compte Astar EVM pour envoyer des jetons vers des exchanges qui supportent le réseau Astar Network EVM**

:::

:::caution

En accord avec les instructions ci-dessous, veuillez lire attentivement toutes les instructions fournies par l'exchange (adresse, format, etc).

:::

1. Copiez une adresse d'un exchange vers lequel vous souhaitez effectuer un transfert.
2. Allez sur le [Portail](https://portal.astar.network/) et connectez le réseau à Astar/Shiden (Astar Network est pour ASTR et Shiden Network est pour le jeton SDN).
3. Connectez votre portefeuille (Native ou EVM dépend des exhanges) - si vous ne l'avez pas encore fait, veuillez revenir à [Créer des comptes Astar].
4. Cliquez sur le bouton de transfert. <img width="1000" alt="Transfert-d'Asset-Natif" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png" />
5. Ajoutez l'adresse de destination de l'exchange et le montant que vous souhaitez transférer. <img width="1000" alt="Adresse-de-destination-locale-Native" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png" />

<br />

## Envoi d'ASTR/SDN vers Astar EVM depuis Astar Natif (ou n'importe quel jeton sur le compte)

Comme mentionné ci-dessus, La plupart des exchanges ne prennent en charge qu'Astar Natif et vous devrez transférer des jetons ASTR vers Astar EVM si vous souhaitez interagir avec les projets EVM.

1. Allez sur le [Portail](https://portal. astar. network/) et copiez l'adresse EVM Astar. <img width="1000" alt="Compte-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png" />

2. Vous pouvez également ouvrir l'extension Metamask et copier l'adresse. <img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png" />

3. Connectez-vous au compte Astar natif.

4. Appuyez sur le bouton de transfert à côté du jeton ASTR. <img width="1000" alt="Copie-du-compte" src="https://user-images.githubusercontent.com/77480847/188531419-78d95073-be4e-4020-a40b-cb64150dcdf6.png" />

5. Vous êtes maintenant sur la page de transfert. Ajoutez l'adresse de destination et le montant que vous souhaitez transférer, puis appuyez sur le bouton de confirmation. <img width="1000" alt="Adresse-de-destination-locale-Native" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png" />

<br />

## Envoi d'ASTR/SDN vers Astar Natif depuis Astar EVM

Veuillez suivre les étapes ci-dessous lorsque vous souhaitez transférer des jetons ASTR/SDN vers Astar Natif.

:::caution

xcAssets (jetons XCM compatibles avec le réseau EVM) ne peuvent pas être transférés vers un compte natif (même si vous les avez peut-être transféré depuis un compte natif). Vous devrez effectuer un transfert cross-chain (XCM) vers les chaînes d'origine et effectuer un nouveau transfert XCM vers Astar Native. Veuillez suivre [ces étapes](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

:::  
:::danger

**Veuillez noter que la plupart des exchanges ne prennent en charge que les adresses Astar Natif, donc n'utilisez pas cette méthode pour transférer des jetons vers les exchanges, à moins que l'exchange ne prenne en charge Astar EVM.**

:::

1. Allez sur le [Portail](https://portal. astar. network/) et connectez-vous au compte Astar natif pour copier l'adresse que vous souhaitez utiliser. <img width="1000" alt="Copie-du-compte" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png" />

2. Connectez-vous au compte Astar EVM en changeant les chaînes à partir du bouton d'en-tête. <img width="1000" alt="Basculer-vers-EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png" />

3. Appuyez sur le bouton de transfert à côté du jeton que vous souhaitez envoyer. <img width="1000" alt="Transfert-EVM" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png" />

4. Vous êtes maintenant sur la page de transfert. Ajoutez l'adresse Astar native de destination et le montant que vous souhaitez transférer, puis appuyez sur le bouton de confirmation. **Cette transaction est d'envoyer des jetons vers l'EVM Deposit.**

<img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188536340-5a59d4e6-290d-451e-b9fd-6d6e424ee76d.png" />　

5. Vous devrez retirer l'EVM Deposit avant de pouvoir utiliser les jetons.

6. Retourner sur le compte natif et appuyer sur le bouton Retrait. <img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png" />

7. La fenêtre modale va apparaître et vous pourrez retirer vos fonds. <img width="945" alt="depo-retrait" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png" />

<br />

## Cross-chain Transfer (XCM)

Il y a quelques points que vous devez préparer avant d'effectuer un transfert.

:::note

- Lors du transfert de jetons natifs vers les chaînes d'origine, nous vous recommandons de laisser un certain montant dans le compte. Sinon, vous pourriez avoir besoin de quelques jetons de gaz pour effectuer de nouvelles transactions.

- Le Min.Balance est généralement appliqué aux jetons dans l'écosystème Polkadot et le Portail d'Astar ne fera les transactions que pour des montants supérieurs au Min.Balance.

:::

<br />

## Transfert d'actifs Cross-chain (XCM) vers le réseau Astar

1. Allez sur le [Portail](https://portal. astar. network/) et connectez-vous au compte Astar natif **(le dépôt vers Astar EVM est uniquement possible via le compte Astar Natif)**

2. Choisissez le jeton que vous souhaitez déposer sur Astar Network.

3. Cliquez sur Transfert et allez vers la page de transfert. Choisissez l’onglet Transfert Cross-chain. <img width="1000" alt="Native-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png" />

Un compte Astar Natif, qui est fait à partir de Polkadot.js, a toutes les adresses Polkadot et parachains correspondantes. Ici nous sommes dans sur le compte Astar Network mais vous pouvez voir la balance des jetons DOT sur la chaîne Polkadot. Vous pouvez apporter vos actifs en un clic.

:::caution

Nous avons défini le solde DOT Min.balance de Polkadot à 1.1DOT, et nous avons fixé le montant Min.Transfer de 1.1 DOT. Vous devrez avoir au moins 2.2DOT + gaz pour effectuer un transfert. Ceci est pour protéger les fonds de l'utilisateur contre la disparation dû au Dépôt Existentiel (ED) (pour plus d'informations sur l'ED, veuillez aller sur [le Wiki de Polkadot](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

:::

4. Si vous souhaitez que les jetons arrivent sur le réseau Astar EVM, changez la destination en Astar (EVM) et saisissez l'adresse EVM.

<img width="1000" alt="Sélection-de-chaîne" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png" />
<img width="1000" alt="XCM-Native-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png" />

1. Entrez le montant que vous souhaitez envoyer vers Astar Network, puis appuyez sur le bouton de confirmation.

2. La recherche de transactions XCM peut être délicate. Le portail a maintenant un historique de navigation qui vous mènera à la bonne transaction que vous avez effectuée.

<img width="1000" alt="historique" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png" />

<br />

## Transfert d'actifs Cross-chain (XCM) vers d'autres chaînes depuis Astar Network

1. Allez sur le [Portail](https://portal. astar. network/) et connectez-vous au compte natif ou EVM.

:::tip

Si vous souhaitez envoyer des actifs cross-chain(XCM) vers des comptes Astar Natifs depuis des comptes Astar EVM, vous devrez d'abord renvoyer les jetons vers les chaînes d'origine et effectuer un autre transfert de Cross-chain (XCM) vers un compte Astar Natif.

:::

2. Choisissez le jeton que vous souhaitez retirer du réseau Astar vers d'autres chaînes.

3. Cliquez sur Transfert et allez vers la page de transfert. Choisissez l’onglet Transfert Cross-chain (XCM).

4. Si vous êtes sur Astar EVM, indiquez l'adresse de destination. Vous auriez besoin de l'adresse [de la chaîne d'origine](https://docs. astar. network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses). <img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png" />

5. Si vous êtes sur Astar Natif et que vous êtes satisfait de transférer le jeton vers le même compte, vous n’avez pas besoin de changer ici mais simplement d’inverser la commande. Cependant, vous pouvez entrer manuellement l’adresse d’un autre compte si vous le souhaitez. <img width="1000" alt="Inversion-XCM" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png" />

<img width="1000" alt="Entrée-manuelle" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png" />

6. Entrez le montant que vous souhaitez envoyer vers Astar Network, puis appuyez sur le bouton de confirmation.
