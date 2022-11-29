---
sidebar_position: 1
---

# Creazione di un portafoglio Astar

## Account Astar

### Formato indirizzo

Il formato dell'indirizzo utilizzato nelle catene basate su Substrate come Astar è SS58. SS58 è una modifica di Base-58-check di Bitcoin con alcune modifiche minori. In particolare, il formato contiene un prefisso che identifica un indirizzo come appartenente a una rete specifica. L'ecosistema Astar è una parachain speciale dell'ecosistema Polkadot perché è l'unica parachain che supporta i smart contract sia EVM che WASM. Con l'uso di due diverse macchine virtuali si ottengono due diversi tipi di indirizzi.

- Un indirizzo nativo Astar o un indirizzo SS58
- Un indirizzo Astar EVM o un indirizzo H160 che inizia con 0x

<img width="800" alt="1" src="https://user-images.githubusercontent.com/77480847/186840773-5874ba05-a067-4204-b72f-3f1017de85b7.png" />
<img width="800" alt="2" src="https://user-images.githubusercontent.com/77480847/186840936-692dc1f3-c5a8-450f-813c-6067c60f8cc2.png" />

Interagirai con il nostro indirizzo nativo Astar durante l'utilizzo delle dApp WASM sulla pagina di staking delle dApp. L'utilizzo di questo indirizzo richiede un'estensione diversa da MetaMask. Si consiglia di utilizzare l'estensione PolkadotJS se si è nuovi nell'ecosistema di Polkadot.

## Astar Portal

[Astar Portal][] è il luogo ideale per fare qualsiasi cosa nel nostro ecosistema. Gli sviluppatori di Astar hanno creato un punto di riferimento per tutti coloro che vogliono interagire nel nostro ecosistema.

Attraverso il nostro portale, puoi connetterti a diverse reti dell'ecosistema Astar.

- **Astar Network**: parachain di Polkadot.
- **Shiden Network**: parachain di Kusama.
- **Shibuya**: parachain testnet

<img width="500" alt="2" src="https://user-images.githubusercontent.com/77480847/186842212-fa88eef0-b768-448e-995f-cc5834eb7c88.png" />

## Polkadot{.js} Browser Plugin

Il plug-in Polkadot{.js} fornisce un ottimo equilibrio tra sicurezza e usabilità. Fornisce un meccanismo locale separato per generare il tuo indirizzo e interagire con il portale Astar. Consigliamo agli utenti che sono nuovi nel nostro ecosistema e vogliono creare un indirizzo nativo Astar di utilizzare questo portafoglio. Se non hai l'estensione JS di Polkadot riceverai un popup nel nostro portale quando cerchi di connettere il tuo portafoglio.

### Installare il plugin del browser

Il plugin del browser è disponibile sia per [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (e per browser basati su Chromium come Brave) che [Firefox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension). Dopo aver installato il plugin, dovresti vedere il logo Polkadot{.js} arancione e bianco nella barra dei menu del browser.

![4](img/4.png)

### Creazione account

Apri l'estensione del browser Polkadot{.js} cliccando sul logo nella barra superiore del browser. Vedrai un popup del browser.

![6](img/6.png)

Clicca sul grande pulsante + - "Create new account". Il plug-in Polkadot{.js} utilizzerà quindi la casualità del sistema per creare una nuova seed phrase sotto forma di dodici parole.

![7](img/7.png)

Dovresti eseguire il backup di queste parole. Si prega di memorizzare la seed phrase in qualche luogo segreto e sicuro. Se non puoi accedere al tuo account tramite Polkadot{.js} per qualche motivo, è possibile reinserire la seed phrase attraverso il "Add account menu" selezionando "Import account from pre-existing seed".

![8](img/8.png)

È consigliato creare un account utilizzabile su qualsiasi catena nell'ecosistema Polkadot. Questo account può quindi essere utilizzato per Polkadot e Kusama. Il tuo account cambierà automaticamente formato connettendosi a una chain diversa.

Un nome **descrittivo del wallet** è arbitrario e solo per il tuo uso. Non è memorizzato sulla blockchain e non sarà visibile ad altri utenti che guardano il tuo indirizzo tramite un block explorer. Se stai utilizzando più account, è utile renderlo descrittivo e dettagliato secondo necessità.

La **password** verrà utilizzata per cifrare le informazioni di questo account. Dovrai reinserirla quando utilizzi l'account per qualsiasi tipo di transazione in uscita o quando per firmare crittograficamente un messaggio.

:::danger
Nota che questa password **NON** protegge la tua seed phrase. Se qualcuno conosce le dodici parole della mnemonic seed phrase, ha comunque il controllo sul tuo account anche se non conosce la password.
:::

Dopo aver cliccato su "Add the account with the generated seed", verrà creato il tuo account. Consigliamo anche di salvare il tuo account come file json al sicuro da qualche parte.

## Connettere il tuo portafoglio al portale Astar

Ritorna su [Astar Portal][] e aggiorna la pagina. Otterrai un popup che Polkadot JS deve essere autorizzato ad essere utilizzato sul nostro portale. Dai il permesso di estensione per farlo!

![9](img/9.png)

Dopo aver concesso l'autorizzazione all'estensione, connetti il portafoglio. Un popup verrà mostrato con tutte le estensioni possibili. Abbiamo appena creato un nuovo account con Polkadot JS, quindi selezioniamo questa estensione.

<img width="500" alt="10" src="https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png" />

Dopo aver cliccato su Polkadot JS, puoi selezionare il tuo nuovo account. Seleziona il tuo account e premi conferma.

<img width="530" alt="11" src="https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png" />

Ora hai collegato con successo un portafoglio Astar al nostro portale. Nota che puoi usare questo portafoglio su tutti i parachain nell'ecosistema Dotsama.

## Supporto

Nel caso in cui avete dei problemi. Unisciti alla nostra comunità e i nostri Ambasciatori ti aiuteranno. Ricorda che non ti invieremo mai un DM per primi! Se vieni avvicinato da qualcuno che finge di far parte del team, non fidarti di loro.

[Astar Portal]: https://portal.astar.network/
