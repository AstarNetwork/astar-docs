---
sidebar_position: 1
---

# Créer un portefeuille Astar

## Comptes Astar

### Format d'adresse

Le format d'adresse utilisé par les chaînes basées sur Substrate comme Astar est le SS58. SS58 est une modification de la vérification de la base 58 de Bitcoin avec quelques modifications mineures. Notamment, le format contient un préfixe du type d'adresse qui identifie une adresse comme appartenant à un réseau spécifique. L'écosystème Astar est une parachain spéciale de l'écosystème Polkadot, car c'est la seule parachain qui supporte EVM comme contrat intelligent WASM. Avec l'utilisation de deux machines virtuelles différentes vient deux types d'adresses différentes.

- Une adresse Astar native ou une adresse SS58
- Une adresse Astar EVM ou H160 qui commence par 0x

<img width="800" alt="1" src="https://user-images.githubusercontent.com/77480847/186840773-5874ba05-a067-4204-b72f-3f1017de85b7.png" />
<img width="800" alt="2" src="https://user-images.githubusercontent.com/77480847/186840936-692dc1f3-c5a8-450f-813c-6067c60f8cc2.png" />

Vous interagirez avec une adresse native Astar lorsque vous utiliserez des dApps WASM ou en utilisant la page de dApps Staking . L'utilisation de cette adresse nécessite une autre extension que Metamask. Nous vous recommandons d'utiliser l'extension Polkadot JS si vous êtes nouveau dans l'écosystème.

## Portail d'Astar

Le [portail d'Astar][] est l'endroit idéal pour faire quoi que ce soit dans notre écosystème. Les développeurs d'Astar ont créé un lieu unique pour tous ceux qui veulent interagir dans notre écosystème.

Grâce à notre portail, vous pouvez vous connecter à différents réseaux de l'écosystème Astar.

- **Astar Network**: parachain sur Polkadot.
- **Shiden Network**: parachain sur Kusama.
- **Shibuya**: parachain testnet

<img width="500" alt="2" src="https://user-images.githubusercontent.com/77480847/186842212-fa88eef0-b768-448e-995f-cc5834eb7c88.png" />

## Recommandé : Plugin de navigateur Polkadot{.js}

Le plugin Polkadot{.js} offre un équilibre raisonnable entre sécurité et utilisabilité. Il fournit un mécanisme local distinct pour générer votre adresse et interagir avec le portail d'Astar. Nous recommandons aux utilisateurs qui sont nouveaux dans notre écosystème et qui veulent créer une adresse native Astar d'utiliser ce portefeuille. Si vous n'avez pas l'extension JS de Polkadot, vous recevrez une popup dans notre portail lorsque vous tenterez de connecter votre portefeuille.

### Installer le Plugin sur votre navigateur

Le plugin est disponible pour [Google Chrome] (https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (et les navigateurs basés sur Chromium comme Brave) et [FireFox] (https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension). Après avoir installé le plugin, vous devriez voir le logo Polkadot{.js} en orange et blanc dans la barre de menu de votre navigateur.

![4] (img/4.png)

### Créer un Compte

Ouvrez l'extension de navigateur Polkadot{.js} en cliquant sur le logo dans la barre supérieure de votre navigateur. Vous verrez une fenêtre popup.

![6] (img/6.png)

Cliquez sur le gros bouton plus - "Créer un nouveau compte". Le plugin Polkadot{.js} utilisera alors un système aléatoire pour créer une nouvelle clef pour vous et vous l'afficher sous la forme de douze mots.

![7] (img/7.png)

Vous devriez sauvegarder ces mots. Veuillez stocker la clef privée dans un endroit sûr, secret et sécurisé. Si vous ne pouvez pas accéder à votre compte via Polkadot{.js} pour une raison quelconque, vous pouvez ré-entrer votre clef dans le menu "Ajouter un compte" en sélectionnant "Importer le compte à partir de la clef préexistante".

![8] (img/8.png)

Mieux vaut créer un compte autorisé sur n'importe quelle chaîne de l'écosystème Polkadot. Ce compte peut ensuite être utilisé pour Polkadot et Kusama. Votre compte changera automatiquement de format lorsque vous serez connecté à une autre chaîne.

Un **nom descriptif** est arbitraire et pour votre usage seulement. Il n'est pas stocké sur la blockchain et ne sera pas visible pour les autres utilisateurs qui regardent votre adresse via un explorateur de blocs. Si vous jonglez avec plusieurs comptes, cela vous aide à le rendre aussi descriptif et détaillé que nécessaire.

Le **mot de passe** sera utilisé pour chiffrer les informations de ce compte. Vous devrez le saisir à nouveau lorsque vous utilisez le compte pour n'importe quelle transaction sortante ou lorsque vous l'utilisez pour signer cryptographiquement un message.

:::danger
Notez que ce mot de passe ne protège **PAS** votre clef privée. Si quelqu'un connaît les douze mots de votre clef mnémonique, il aura le contrôle sur votre compte même s'il ne connaît pas le mot de passe.
:::

Après avoir cliqué sur "Ajouter le compte avec la clef générée", votre compte est créé. Nous vous recommandons également d'enregistrer votre compte en tant que fichier json dans un endroit sûr.

## Connectez votre portefeuille au portail d'Astar

Retournez sur le [Portail d'Astar ][] et actualisez la page. Vous verrez une popup Polkadot JS qui doit être autorisée pour être utilisée sur notre portail. Donnez la permission à l'extension pour le faire!

![9] (img/9.png)

Lorsque vous avez donné l'autorisation à l'extension, connectons le portefeuille. Une popup s'affichera avec toutes les extensions possibles. Nous avons juste créé un nouveau compte avec Polkadot JS, alors sélectionnons cette extension.

<img width="500" alt="10" src="https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png" />

Une fois que vous avez cliqué sur Polkadot JS, vous pouvez sélectionner votre nouveau compte. Sélectionnez votre compte et appuyez sur confirmer.

<img width="530" alt="11" src="https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png" />

Vous avez maintenant connecté avec succès un portefeuille Astar à notre portail. Notez que vous pouvez utiliser ce portefeuille sur tous les parachains de l'écosystème Dotsama.

## Support

En cas de problème, rejoignez notre communauté et nos ambassadeurs vous aideront. Rappelez-vous que nous ne vous enverrons jamais de DM en premier! Si vous êtes approché par quelqu'un qui prétend faire partie de l'équipe, ne lui faites pas confiance.

[portail d'Astar]: https://portal.astar.network/

[Portail d'Astar ]: https://portal.astar.network/
