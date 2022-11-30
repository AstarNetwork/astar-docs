---
sidebar_position: 4
---

# Come trasferire i token

In questo tutorial ti spiegheremo come trasferire i token utilizzando il portale e come inviare i token al portale.

<br />

- [Creazione account Astar (Nativi ed EVM)](#create-astar-accountsnative-and-evm)

- [Invio ASTR/SDN a Astar Network da Exchange Centralizzati](#sending-astrsdn-to-astar-network-from-central-exchanges)

- [Invio di ASTR/SDN agli Exchange Centralizzati da Astar Network](#sending-astrsdn-to-central-exchanges-from-astar-network)

- [Invio di ASTR/SDN ad Astar EVM da Astar Native](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)

- [Invio di ASTR/SDN ad Astar Native da Astar EVM](#sending-astrsdn-to-astar-native-from-astar-evm)

- [Trasferimento Cross-chain (XCM)](#cross-chain-transferxcm)

- [Trasferimento di risorse cross-chain (XCM) sulla rete Astar Network](#transferring-cross-chainxcm-assets-into-astar-network)

- [Trasferimento di risorse cross-chain (XCM) verso altre chain da Astar Network](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

<br />

## Crea un account Astar (Nativo ed EVM)

Astar ha due indirizzi in formati diversi.

- Un indirizzo Astar Native - per utilizzare dApps Staking e interagire con i progetti WASM
- Un indirizzo Astar EVM - per interagire con i progetti EVM

Se hai bisogno di creare un account Astar Native, [questa pagina](create-wallet.md) ti aiuterà nella creazione.

Se non hai aggiunto Astar Network a MetaMask, è molto semplice - Vai al nostro [Portale](https://portal.astar.network/) e scegli MetaMask. MetaMask ti chiederà l'autorizzazione per aggiungere Astar Network. In alternativa, consulta [qui](setup-metamask.md) per maggiori dettagli del network.

<br />

## Invio ASTR/SDN a Astar Network da Exchange Centralizzati

La maggior parte degli exchange supporta solo Astar Network (Nativo) tranne Gate.io che supporta Astar (EVM). Avrai bisogno di un account nativo Astar per ricevere token ASTR che potrai inviare ad un account EVM Astar.

:::tip

La maggior parte degli exchange menziona solo Astar Network che significa che la rete che supportano è Astar Native.

:::

:::danger

**Controlla la rete supportata, se dice Astar (EVM) puoi trasferire solo i token agli account Astar EVM**.

:::

1. Vai al nostro [Portale](https://portal.astar.network/).

2. Collega il network ad Astar/Shiden (Astar Network è per ASTR e Shiden Network è per il token SDN).

<img width="1000" alt="network" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png" />

3. Collega il tuo portafoglio Polkadot.js - se non l'hai ancora fatto, torna a [Crea account Astar](#create-wallet/#astar-accounts).

<img width="1000" alt="portafoglio" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png" />　

4. Questa è la pagina degli asset del tuo account nativo Astar. Vedrai l'indirizzo in alto. Copia l'indirizzo.

<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png" />

5. Vai all'exchange sul quale hai comprato i token ASTR ed effettua un prelievo all'indirizzo copiato.

6. Una volta effettuata una transazione, torna al Portale e controlla il saldo.

<br />

## Invio di ASTR/SDN agli Exchange Centralizzati da Astar Network

:::tip

- **Usa l'account Astar Nativo per inviare token agli exchange che supportano Astar Network**
- **Usa l'account Astar EVM per inviare token agli exchange che supportano Astar EVM**

:::

:::caution

In linea con le istruzioni riportate di seguito, si prega di leggere attentamente tutte le istruzioni fornite anche dagli Exchange (indirizzo, formato, ecc).

:::

1. Copia l'indirizzo dell'exchange a cui si desidera effettuare un trasferimento.
2. Vai al [Portale](https://portal.astar.network/) e connettiti alla rete Astar/Shiden (Astar Network è per ASTR e Shiden Network è per il token SDN).
3. Collega il tuo portafoglio (Nativo o EVM dipende dall'exchange) - se non l'hai ancora fatto, torna a [Crea account Astar].
4. Clicca sul pulsante di trasferimento. <img width="1000" alt="Native-Asset-transfer" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png" />
5. Aggiungi l'indirizzo di destinazione dell'exchange e l'importo che desideri trasferire. <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png" />

<br />

## Invio di ASTR/SDN ad Astar EVM da Astar Nativo (o qualsiasi altro token nell'account)

Come accennato in precedenza, la maggior parte degli exchange supporta solo Astar Nativo e dovresti trasferire i token ASTR su Astar EVM se desideri interagire con i progetti EVM.

1. Vai al [Portale](https://portal.astar.network/) e copia l'indirizzo Astar EVM. <img width="1000" alt="account-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png" />

2. In alternativa, vai sull'estensione di MetaMask e copia l'indirizzo. <img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png" />

3. Connettiti con Astar Native account.

4. Premi il pulsante di trasferimento accanto al token ASTR. <img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188531419-78d95073-be4e-4020-a40b-cb64150dcdf6.png" />

5. Ora sei nella pagina di trasferimento. Aggiungere l'indirizzo di destinazione e l'importo che si desidera trasferire, quindi premere il pulsante di conferma. <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png" />

<br />

## Invio di ASTR/SDN ad Astar Nativo da Astar EVM

Si prega di seguire i passaggi seguenti quando si desidera trasferire i token ASTR/SDN ad Astar Nativo.

:::caution

xcAssets (token XCM compatibili nella rete EVM) attualmente non possono essere trasferiti indietro all'account nativo Dovrai trasferire l'asset di cross-chain transfer(XCM) alla chain di origine e fare un altro trasferimento XCM ad Astar Nativo. Segui [i passaggi qui](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

:::  
:::danger

**Tieni presente che la maggior parte degli exchange supporta solo gli indirizzi nativi Astar, quindi non utilizzare questo metodo per trasferire i token agli exchange a meno che l'exchange non supporti Astar EVM.**

:::

1. Vai al [Portale](https://portal.astar.network/) e connettiti all'account Astar Native per copiare l'indirizzo che desideri utilizzare. <img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png" />

2. Collegati all'account Astar EVM cambiando la chain dal pulsante del log in. <img width="1000" alt="Passa a EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png" />

3. Premi il pulsante di trasferimento accanto al token che desideri inviare. <img width="1000" alt="Trasferimento EVM" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png" />

4. Ora sei nella pagina di trasferimento. Aggiungi l'indirizzo Astar Nativo di destinazione e l'importo che desideri trasferire, quindi premi il pulsante di conferma. **Questa transazione serve per inviare token a EVM Deposit.**

<img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188536340-5a59d4e6-290d-451e-b9fd-6d6e424ee76d.png" />　

5. Dovrai prelevare il deposito EVM prima di poter utilizzare i token.

6. Torna all'account nativo e premi il pulsante Preleva. <img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png" />

7. Apparirà una finestra dove firmando la transazione potrai prelevare i token <img width="945" alt="depo-prelievo" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png" />

<br />

## Trasferimento Cross-chain (XCM)

Ci sono alcuni requisiti che dovete preparare prima di effettuare un trasferimento.

:::note

- Quando si trasferiscono i token nativi sulle chain di origine, si consiglia di lasciare una piccola quantità nell'account. Sono necessari per pagare le gas fees e per poter effettuare ulteriori transazioni.

- Il Min.Balance viene solitamente applicato ai token nell'ecosistema Polkadot e Astar Portal effettuerà transazioni solo per importi superiori al Min.Balance.

:::

<br />

## Trasferimento di asset cross-chain (XCM) sulla rete Astar

1. Vai al [Portale](https://portal.astar.network/) e connettiti con l'accaunt Astar Nativo **(Il deposito ad Astar EVM è possibile solo tramite l'account Nativo di Astar) **

2. Scegli il token che desideri depositare su Astar Network.

3. Clicca su Trasferimento e passare alla pagina di trasferimento. Scegli la scheda Trasferimento Cross-chain. <img width="1000" alt="Native-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png" />

Con l'accaunt Nativo Astar che è realizzato in Polkadot.js si hanno tutti gli indirizzi corrispondenti di Polkadot e delle parachain. Qui ci troviamo nell'account di rete Astar, ma puoi vedere il saldo token DOT della catena Polkadot. Puoi spostare il tuo asset con un clic.

:::caution

Abbiamo impostato il Min.balance di DOT a 1.1 DOT e abbiamo impostato il Min.Transfer al 1.1. Sono necessari almeno 2.2DOT + gas per effettuare un trasferimento minimo. Questo serve per proteggere i fondi dell'utente dal essere prelevati dall'ammontare necessario (1DOT) per il Deposito Esistenziale (ED) maggiori informazioni su ED, si prega di andare su [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

:::

4. Se desideri che i token arrivino su Astar EVM, cambia la destinazione in Astar(EVM) e inserisci l'indirizzo EVM.

<img width="1000" alt="Chain-select" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png" />
<img width="1000" alt="XCM-Native-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png" />

1. Inserisci l'importo che desideri trasferire su Astar Network, quindi premi il pulsante di conferma.

2. Trovare transazioni di XCM può essere complicato. Il portale ora ha la cronologia del browser che ti porterà alla transazione che hai effettuato.

<img width="1000" alt="cronologia" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png" />

<br />

## Trasferimento di asset cross-chain (XCM) verso altre chain da Astar Network

1. Vai al [Portale](https://portal.astar.network/) e connettiti con l'Account Nativo o EVM.

:::note

Se desideri spostare asset cross-chain (XCM) sull'account Nativo Astar dall'account Astar EVM, dovrai prima inviare i token alla chain di origine ed effettuare un altro trasferimento cross-chain (XCM) all'account Astar Nativo.

:::

2. Scegli il token che desideri prelevare da Astar Network su un'altra chain.

3. Clicca su Trasferimento per passare alla pagina di trasferimento. Scegli la scheda Trasferimento Cross-chain.

4. Se sei su Astar EVM, inserisci l'indirizzo di destinazione. Avrai bisogno dell'indirizzo [della catena di origine](https://docs.astar.network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses). <img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png" />

5. Se sei sull'accaunt Nativo Astar e vuoi trasferire il token all'interno dello stesso account non è necessario modificare qui, ma basta invertire l'ordine. È possibile inserire manualmente l'indirizzo di un altro account. <img width="1000" alt="XCM-reverse" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png" />

<img width="1000" alt="Input-manually" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png" />

6. Inserisci l'importo che desideri trasferire su Astar Network, quindi premi il pulsante di conferma.
