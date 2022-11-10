---
sidebar_position: 4
---

# Como transferir tokens

Neste tutorial, vamos te guiar como transferir tokens usando o Portal e enviar tokens para o Portal.

<br />

- [Criar Contas Astar (Nativa e EVM)](#create-astar-accountsnative-and-evm)

- [Enviando ASTR/SDN para a Astar Network através de Corretoras](#sending-astrsdn-to-astar-network-from-central-exchanges)

- [Enviando ASTR/SDN para Corretoras de rede Astar Network](#sending-astrsdn-to-central-exchanges-from-astar-network)

- [Enviando ASTR/SDN para Astar EVM de Astar Nativa](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)

- [Enviando ASTR/SDN para Astar Nativa de Astar EVM](#sending-astrsdn-to-astar-native-from-astar-evm)

- [Transferência Cross-chain (XCM)](#cross-chain-transferxcm)

- [Transferindo ativos cross-chain(XCM) para a Rede Astar](#transferring-cross-chainxcm-assets-into-astar-network)

- [Transferindo ativos cross-chain(XCM) para outras cadeias de Rede Astar](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

<br />

## Criar Contas Astar (Nativa e EVM)

Astar tem dois endereços em formatos diferentes.

- Um endereço nativo de Astar - para o dApps Staking e interagir com os projetos WASM
- Um endereço Astar EVM - para interagir com os projetos EVM

Se você precisa criar uma conta nativa de Astar, [esta página](create-wallet.md) irá ajudá-lo a criar as contas.

Se você não adicionou a rede Astar à MetaMask, é muito simples - por favor, vá para nosso [Portal](https://portal.astar.network/) e escolha MetaMask. MetaMask irá lhe pedir permissão para adicionar Astar Network. Como alternativa, consulte [aqui](setup-metamask.md) para mais detalhes da Rede.

<br />

## Enviando ASTR/SDN para Astar Network através de Corretoras

A maioria das corretoras só suportam a Rede Astar (Nativa) hoje, exceto Gate.io que suporta Astar (EVM). Você vai precisar de uma Conta Nativa Astar para receber tokens ASTR e você pode enviar tokens para uma conta Astar EVM como desejar.

:::dica

A maioria das corretoras mencionam apenas a rede Astar o que significa que a rede que eles suportam é a Astar Nativa.

:::

:::perigo

**Verifique a rede suportada, se ela diz Astar (EVM), você só pode transferir tokens para a conta Astar EVM**.

:::

1. Vá para o nosso [Portal](https://portal.astar.network/).

2. Conecte a rede à Astar/Shiden (Astar Network para ASTR e Shiden para SDN token).

<img width="1000" alt="rede" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png" />

3. Conecte sua carteira Polkadot.js - se você ainda não a fez, por favor volte para [Criar Contas Astar](#create-wallet/#astar-accounts).

<img width="1000" alt="carteira" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png" />　

4. Esta é a página de ativos da sua conta Nativa Astar. Você verá o endereço no topo. Copie o endereço.

<img width="1000" alt="Copiar-conta" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png" />

5. Vá para a corretora onde você possui os tokens ASTR e faça o saque para o endereço acima.

6. Uma vez que uma transação é feita, volte para Portal e verifique o saldo.

<br />

## Enviando ASTR/SDN para Corretoras de Astar Network

:::dica

- **Use a conta Nativa de Astar para enviar tokens para corretoras que suportam Astar Network**
- **Use a conta Astar EVM para enviar tokens para corretoras que suportam Astar EVM**

:::

:::cuidado

Em conformidade com as instruções abaixo, por favor, leia cuidadosamente todas as instruções fornecidas também pela Corretora (endereço, formato, etc).

:::

1. Copie o endereço da corretora para o qual você deseja fazer uma transferência.
2. Vá para [Portal](https://portal.astar.network/) e conecte a rede à Astar/Shiden (Astar Network para ASTR e Shiden Network para SDN token).
3. Conecte sua carteira (Nativa ou EVM depende da corretora) - se você ainda não fez isso, por favor volte para [Criar Contas Astar].
4. Clique no botão de transferência. <img width="1000" alt="Transferência-Ativos-Nativos" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png" />
5. Adicione o endereço de destino da corretora e a quantia que você deseja transferir. <img width="1000" alt="Endereço-destino-local-nativo" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png" />

<br />

## Enviando ASTR/SDN para Astar EVM de Astar Nativa (ou qualquer tokens na conta)

Como mencionado acima, a maioria das corretoras só suportam Astar Nativa e você precisará transferir tokens ASTR para Astar EVM se você quiser interagir com os projetos EVM.

1. Vá para [Portal](https://portal.astar.network/) e copie o endereço de Astar EVM. <img width="1000" alt="conta-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png" />

2. Alternativamente, verifique a extensão MetaMask e copie o endereço. <img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png" />

3. Conectar à conta Nativa de Astar.

4. Pressione o botão de transferência ao lado do token ASTR. <img width="1000" alt="Copiar-conta" src="https://user-images.githubusercontent.com/77480847/188531419-78d95073-be4e-4020-a40b-cb64150dcdf6.png" />

5. Agora você está na página de transferências. Adicione o endereço de destino e a quantia que você deseja transferir, depois pressione o botão de confirmar. <img width="1000" alt="Endereço-destino-local-nativo" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png" />

<br />

## Enviando ASTR/SDN para Astar Nativa de Astar EVM

Por favor, siga os passos abaixo quando você quiser transferir tokens ASTR/SDN para Astar Nativa.

:::cuidado

xcAssets (tokens XCM compatíveis com EVM) atualmente são incapazes de serem transferidos de volta para uma conta nativa (até mesmo se tiver sido transferido de uma conta nativa). Você precisará transferir cross-chain (XCM) para as cadeias de origem e fazer outra transferência XCM para Astar Nativa. Por favor, siga [os passos aqui](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

:::  
:::perigo

**Por favor, note que a maioria das corretoras suportam apenas endereços Nativos de Astar então não use este método para transferir tokens para corretoras, a menos que a corretora suporte Astar EVM.**

:::

1. Vá para o [Portal](https://portal.astar.network/) e conecte à conta Astar Nativa para copiar o endereço que você deseja usar. <img width="1000" alt="Copiar-Conta" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png" />

2. Conecte à conta EVM de Astar ao mudar as cadeias no botão do cabeçalho. <img width="1000" alt="Alternar-para-EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png" />

3. Pressione o botão de transferência ao lado do token que você deseja enviar. <img width="1000" alt="EVM-transfer" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png" />

4. Agora você está na página de transferências. Adicione o endereço Nativo de Astar destino e o montante que você deseja transferir e, em seguida, pressione o botão de confirmar. **Esta transação é para enviar tokens para depósito EVM.**

<img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188536340-5a59d4e6-290d-451e-b9fd-6d6e424ee76d.png" />　

5. Você precisará sacar o depósito EVM antes de poder usar os tokens.

6. Volte para a conta nativa e pressione o botão Sacar. <img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png" />

7. O modal irá aparecer e você poderá sacar assinando. <img width="945" alt="depósito-saque" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png" />

<br />

## Transferência Cross-chain (XCM)

Há alguns pontos que você precisa se preparar antes de fazer uma transferência.

:::nota

- Ao transferir tokens nativos para cadeias de origem, recomendamos deixar algum valor na conta. Caso contrário, você pode precisar de alguns tokens para gas ao fazer transações adicionais.

- Min.Balance é geralmente aplicado aos tokens no Ecossistema Polkadot e o Portal Astar só fará transações para valores maiores que o Min.Balance.

:::

<br />

## Transferindo ativos cross-chain(XCM) para Astar Nework

1. Vá para [Portal](https://portal.astar.network/) e conecte à conta Nativa de Astar **(Depósito em Astar EVM só é possível através da conta Nativa de Astar) **

2. Escolha o token que você deseja depositar em Astar Network.

3. Clique em Transferir e vá para a Página de Transferência. Escolha a aba de Transferência Cross-chain. <img width="1000" alt="Nativo-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png" />

Como a conta Nativa de Astar que é criada na Polkadot.js tem todos endereços correspondentes de Polkadot e de parachains. Aqui estamos na conta Astar Network mas você pode ver o saldo do token DOT da cadeia de Polkadot. Você pode trazer seus ativos em um clique.

:::cuidado

Definimos o valor DOT Min.balance de Polkadot para 1.1DOT e estabelecemos Min.Transferência para 1.1. Você terá que ter pelo menos 2.2DOT + gás para fazer uma transferência mínima. Isto é para proteger os fundos do usuário de serem cortados pelo Depósito Existencial(ED) (mais informações sobre ED, por favor acesse [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

:::

4. Se você gostaria que os tokens chegassem em Astar EVM em seguida, altere o destino para Astar(EVM) e insira o endereço EVM.

<img width="1000" alt="Seleção de cadeia" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png" />
<img width="1000" alt="XCM-Nativo-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png" />

1. Digite a quantidade que você gostaria de trazer à rede Astar e, em seguida, pressione o botão de confirmar.

2. Encontrar transações do XCM pode ser complicado. O Portal agora tem um histórico do navegador que irá levá-lo para a transação que você fez.

<img width="1000" alt="histórico" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png" />

<br />

## Transferindo ativos cross-chain(XCM) de Astar Network para outras cadeias

1. Vá para [Portal](https://portal.astar.network/) e copie o endereço de Astar EVM.

:::dica

Se você deseja mover os ativos cross-chain(XCM) para contas Nativas Astar a partir de contas Astar EVM, primeiro você precisará enviar tokens de volta para as cadeias de origem e fazer outra transferência cross-chain(XCM) para a conta Nativa Astar.

:::

2. Escolha o token que deseja sacar de Astar Network para outras cadeias.

3. Clique em Transferir e vá para a Página de Transferência. Escolha a aba Transferência Cross-chain (XCM).

4. Se você estiver em Astar EVM, coloque o endereço de destino. Você precisará do [endereço da cadeia de origem](https://docs.astar.network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses). <img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png" />

5. Se você estiver em Astar Nativa e feliz em transferir o token dentro da mesma conta quando você não precisa alterar aqui, mas apenas reverter o pedido, você pode inserir manualmente o endereço de outra conta. <img width="1000" alt="XCM-reverso" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png" />

<img width="1000" alt="Entrada-manualmente" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png" />

6. Digite a quantidade que você gostaria de trazer para Astar Network e, em seguida, pressione o botão de confirmar.
