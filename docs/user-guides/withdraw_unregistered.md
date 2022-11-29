---
sidebar_position: 9
---

# Prelevare lo Stake dal Contratto non registrato

Occasionalmente, ma raramente, alcuni progetti possono decidere di cambiare l'indirizzo del contratto sul portale oppure  essere rimossi. In questi casi, gli stake non vengono rimossi automaticamente. È necessario ritirare manualmente il vostro stake. Questo tutorial ti guiderà su come ritirare il tuo stake da una dApp che è stata rimossa dal portale.

**Il modo più semplice**, è quello di connettersi al portale con l'indirizzo usato per lo staking sulla dApp non registrata e fare clic su 'Claim'. Cliccando su Claim i token saranno sbloccati ed entreranno nel periodo di unbonding. Nel caso in cui questo non funzioni, puoi seguire la guida qui sotto.

---

## Passo 1: Trovare l'indirizzo del contratto usato per lo staking
1. Vai su [Polkadot.js web app](https://polkadot.js.org/apps/#/chainstate).
2. Assicurati di essere connesso con la chain corretta (Astar/Shiden/Shibuya).
3. Assicurati di essere connesso con il portafoglio corretto.
4. Clicca su `Developer` e `Chain State`.
5. Nel menu a discesa a sinistra, seleziona `dappsStaking`.
6. Nel menu a discesa a destra, seleziona `generalStakerInfo`.
7. Deseleziona l'opzione `include`.
8. Clicca sul segno **+**. ![image](https://user-images.githubusercontent.com/37278708/199924502-e833a53e-ce7f-4b7d-bdee-b2ea1b377904.png)

9. Ora sei in grado di vedere tutti i contratti con i quali stai facendo lo staking. ![image](https://user-images.githubusercontent.com/37278708/199924710-61d994f3-ddae-4dfb-b4c3-f186138d86de.png)

10. Lascia la pagina così com'è.
11. Apri un'altra scheda del browser e vai su [Astar Portal](https://portal. astar. network/#/astar/dapp-staking/discover).
12. Connettiti usando lo stesso portafoglio.
13. Vai su dApp Staking -> My dApps.
14. Puoi vedere la lista delle dApp sulle quali sei in staking. ![image](https://user-images.githubusercontent.com/37278708/199926165-909fa598-d9b2-4811-8619-f3ae414b9fb3.png)

15. Vai sulle informazioni di ogni dApp su cui sei in staking per vedere l'indirizzo del contratto. ![image](https://user-images.githubusercontent.com/37278708/199926265-f1913a1a-0635-4ed2-9f9b-91e7c8e0a2ec.png)

16. Controlla gli indirizzi dei contratti con quelli che hai sull'app web di Polkadot.js. Se ti imbatti in un indirizzo del contratto disponibile sull'app Web Polkadot.js ma non disponibile su Astar Portal, questo è il contratto che è stato rimosso, ed è quello che stai cercando.
17. Copia l'indirizzo del contratto e incollalo in una nota come riferimento per le fasi successive.

---

## Passo 2: Richiedi tutte le reward non riscosse
1. Apri una nuova scheda del browser e vai su [Polkadot.js web app](https://polkadot.js.org/apps/#/extrinsics).
2. Assicurati di essere connesso con la chain corretta (Astar/Shiden/Shibuya).
3. Assicurati di essere connesso con il portafoglio corretto.
4. Clicca su `Developer` e `Extrinsics`.
5. Nel menu a sinistra, seleziona `dappsStaking`.
6. Nel menu a destra, seleziona `claimStaker`.
7. Su EVM: H16O, incolla l'indirizzo del contratto che hai precedentemente salvato sulle note, per esempio `0xaab44542c72f88f7b98fffda418e3efe94bc13af`.
8. Invia la transazione e aggiungi una mancia prima di firmare la transazione.
9. Se si dispone di un enorme backlog, è necessario ripetere questa operazione più volte fino a quando tutte le reward non sono reclamate. Altrimenti, non sarai in grado di procedere con il passo successivo.
![image](https://user-images.githubusercontent.com/37278708/199938229-92e8eb7d-46fa-450f-a16f-d583da7bf48c.png)
---

## Passo 3: Prelievo dello stake dal contratto
1. Rimani sullo stesso browser.
2. Nel menu a discesa a sinistra, seleziona `dappsStaking`.
3. Nel menu a discesa a destra, seleziona `withdrawFromUnregistered`.
4. Su EVM: H16O, incolla l'indirizzo del contratto che hai precedentemente salvato sulle note, per esempio `0xaab44542c72f88f7b98fffda418e3efe94bc13af`.
5. Invia la transazione e aggiungi una piccola fee di mancia prima di firmare la transazione. ![image](https://user-images.githubusercontent.com/37278708/199930565-fff88330-bc9d-4680-aea3-de8d52052c00.png)

6. Il tuo stake è ora prelevato dal contratto rimosso.

---

È tutto! In caso di problemi, contatta uno dei membri del team o un ambasciatore su [Discord](https://discord.gg/2FGq5KqwBh).



