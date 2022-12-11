---
sidebar_position: 4
---

# トークンを転送する方法

このチュートリアルでは、ポータルを使用してトークンを転送する方法と、ポータルにトークンを送信する方法を説明します。

<br />

- [Astarのアカウント(Native と EVM)を作成](#create-astar-accountsnative-and-evm)

- [中央取引所から Astar Network にASTR/SDNを送信](#sending-astrsdn-to-astar-network-from-central-exchanges)

- [Astar Network から中央取引所にASTR/SDNを送信](#sending-astrsdn-to-central-exchanges-from-astar-network)

- [Astar Native から Astar EVM にASTR/SDNを送信](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)

- [Astar EVM から Astar Native にASTR/SDNを送信](#sending-astrsdn-to-astar-native-from-astar-evm)

- [クロスチェーン転送（XCM）](#cross-chain-transferxcm)

- [クロスチェーン（XCM）資産を Astar Network に転送](#transferring-cross-chainxcm-assets-into-astar-network)

- [Astar Network から他のチェーンにクロスチェーン（XCM）資産を転送](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

<br />

## Astarのアカウント(Native と EVM)を作成

Astarは異なるフォーマットで2つのアドレスを持っています。

- Astar Native アドレスー dApps Staking やWASMプロジェクトと連携するためのアドレス
- Astar EVM アドレスー EVMプロジェクトと連携するためのアドレス

あなたが Astar Native アカウントを作成する必要がある場合は、 [こちらのページ](create-wallet.md) でアカウントを作成することができます。

もし、MetamaskにAstar Network を追加していない場合は、とてもシンプルです ー [ポータル](https://portal.astar.network/) に行き、Metamaskを選択してください。 Metamaskは、Astar Network の追加許可を求めてくるでしょう。 別の方法や、ネットワーク追加の詳細については、 [こちら](setup-metamask.md) を参照してください。

<br />

## 中央取引所から Astar Network にASTR/SDNを送信

Astar(EVM)をサポートするGate.ioを除き、ほとんどの取引所はAstar Network(Native)のみをサポートしています。 あなたが ASTRトークンを受け取るにはAstar Native アカウントが必要で、必要に応じて Astar EVM アカウントにトークンを送信することもできます。

:::TIP

ほとんどの取引所は、彼らがサポートするネットワークが Astar Native であるという意味で Astar Network と言及しているだけです。

:::

:::危険

**サポートされているネットワークを再確認してください。Astar (EVM) と書かれている場合、Astar EVMアカウントにのみトークンを転送できます**。

:::

1. [ポータル](https://portal.astar.network/) に移動します。

2. ネットワークをAstar/Shidenに接続します(Astar NetworkはASTR用、Shiden NetworkはSDN用)。

<img width="1000" alt="network" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png" />

3. Poladot.js ウォレットを接続してください ー まだ完了していない場合は、 [Astar アカウントを作成](#create-wallet/#astar-accounts) に戻ってください。

<img width="1000" alt="wallet" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png" />　

4. これはあなたの Astar Native アカウントの資産ページです。 上部にアドレスが表示されています。 アドレスをコピーします。

<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png" />

5. ASTRトークンを取得した取引所に移動し、上記のアドレスへの引き出しを行います。

6. トランザクションが完了したら、ポータルに戻って残高を確認してください。

<br />

## Astar Network から中央取引所にASTR/SDNを送信

::: TIP

- **Astar Native アカウントを使用して、Astar Networkをサポートする取引所にトークンを送信する**
- **Astar EVMアカウントを使用して、Astar EVMをサポートする取引所にトークンを送信する**

:::

:::警告

以下の手順に従って、取引所が提供するすべての手順(アドレス、フォーマットなど)もよくお読みください。

:::

1. 転送先の取引所からアドレスをコピーします。
2. [ポータル](https://portal.astar.network/) に移動し、ネットワークをAstar/Shidenに接続します(Astar NetworkはASTR用、Shiden NetworkはSDN用)。
3. ウォレットを接続します(NativeかEVMかは取引所によって異なります)。まだウォレットを作成していない場合は、[ Astarのアカウント(Native と EVM) の作成 ] へ戻ってください。
4. 「Transfer」ボタンをクリックしてください。 <img width="1000" alt="Native-Asset-transfer" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png" />
5. 取引所の宛先アドレスと転送したい額を追加してください。 <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png" />

<br />

## Astar Native から Astar EVM にASTR/SDNを送信（またはアカウント内の任意のトークン）

前述の通り、ほとんどの取引所は Astar Native のみをサポートしており、EVMプロジェクトとやり取りしたい場合はASTRをAstar EVMに転送する必要があります。

1. [ポータル](https://portal.astar.network/) に移動し、Astar EVMアドレスをコピーします。 <img width="1000" alt="account-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png" />

2. １の他の方法として、Metamaskのエクステンションをチェックしてアドレスをコピーしてもかまいません。 <img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png" />

3. Astar Native アカウントに接続します。

4. ASTR の横にある「Transfer」ボタンを押します。 <img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188531419-78d95073-be4e-4020-a40b-cb64150dcdf6.png" />

5. 転送ページに移動します。 転送先アドレスと転送したい額を追加し、「Confirm」ボタンを押します。 <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png" />

<br />

## Astar EVM から Astar Native にASTR/SDNを送信

ASTR/SDNをAstar Nativeに転送する場合は、以下の手順に従ってください。

:::警告

XcAssets (EVMネットワークで互換性のあるXCMトークン) は現在、Native アカウントに戻すことができません (たとえあなたがNative アカウントから転送した場合も同様です)。 オリジンチェーンにクロスチェーン（XCM）転送を行い、さらに Astar Nativeに別のXCM転送を行う必要があります。 [ここの手順](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network) に従ってください

:::  
:::危険

**ほとんどの取引所は Astar Native アドレスのみをサポートしているため、取引所がAstar EVMをサポートしていない限り、トークンを取引所に転送するのにこの方法は使用しないことに注意してください。**

:::

1. [ポータル](https://portal.astar.network/) に移動し、Astar Native アカウントに接続して使用したいアドレスをコピーします。 <img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png" />

2. ヘッダーボタンからチェーンを切り替えて、Astar EVMアカウントに接続します。 <img width="1000" alt="Switch-to-EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png" />

3. 送信したいトークンの横にある「Transfer」ボタンを押してください。 <img width="1000" alt="EVM-transfer" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png" />

4. 転送ページに移動します。 転送先の Native アドレスと転送したい額を追加し、「Confirm」ボタンを押します。 **このトランザクションはトークンをEVM Depositに送信することです。**

<img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188536340-5a59d4e6-290d-451e-b9fd-6d6e424ee76d.png" />　

5. トークンを使用する前に、EVM Depositを引き出す必要があります。

6. Astar Native アカウントに接続し、「Withdraw」ボタンを押してください。 <img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png" />

7. モーダルウインドウが表示され、署名することで引き出しをすることができます。 <img width="945" alt="depo-withdraw" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png" />

<br />

## クロスチェーン転送（XCM）

転送を行う前に準備に必要なポイントがいくつかあります。

:::NOTE

- オリジンチェーンのNativeトークンを転送する場合は、そのアカウントにいくらか残しておくことをお勧めします。 そうでなければ、さらにトランザクションを行うためにいくらかガストークンが必要になるかもしれません。

- Min.Balance は通常、Polkadot エコシステムに適用され、 Astar Portal は Min.Balance より大きい額のトランザクションのみを行います。

:::

<br />

## クロスチェーン（XCM）資産を Astar Network に転送

1. [ポータル](https://portal.astar.network/) にアクセスし、Astar Native アカウントに接続します。**(Astar EVM からの入金は、Astar Native アカウントを通じてのみ可能です) **

2. Astar Networkに入金したいトークンを選択します。

3. 「Transfer」をクリックし、「転送ページ」に移動します。 「 Cross-chain Transfer（XCM）」タブを選択します。 <img width="1000" alt="Native-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png" />

Polkadot.jsで作られたAstar Native アカウントでは、すべてのPolkadotとパラチェーンに対応するアドレスがあります。 ここにはAstar Networkアカウントがありますが、Polkadot チェーンののDOTの残高が表示されます。 あなたはワンクリックであなたの資産をもってくることができます。

:::警告

PolkadotのDOTの Min.balance を1.1DOTに設定し、Min.Transfer 量を1.1に設定しました。 最小の転送を行うには、少なくとも2.2DOT +ガスが必要です。 これは、実存残高（Existential Deposit = ED）の仕組みによってユーザーの資金が奪われるのを防ぐためです（EDの詳細については、[Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-)を参照してください）。

:::

4. トークンをAstar EVMに送りたい場合は、宛先をAstar(EVM)に変更し、EVMアドレスを入力します。

<img width="1000" alt="Chain-select" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png" />
<img width="1000" alt="XCM-Native-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png" />

1. Astar Networkに持ち込みたい額を入力し、「Confirm」ボタンを押します。

2. XCM のトランザクションを見つけるのは難しいことがあります。 ポータルにはあなたが行った正しいトランザクションにたどり着けるようブラウザの履歴があります。

<img width="1000" alt="history" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png" />

<br />

## Astar Network から他のチェーンにクロスチェーン（XCM）資産を転送

1. [ポータル](https://portal.astar.network/) に移動し、Native または EVM アカウントに接続します。

:::TIP

クロスチェーン(XCM)資産をAstar EVMアカウントからAstar Nativeアカウントに移行したい場合、まずトークンをオリジンチェーンに送信し、別のクロスチェーン(XCM)をAstar Native アカウントに転送する必要があります。

:::

2. Astar Networkから他のチェーンへ引き出したいトークンを選択します。

3. 「Transfer」をクリックし、「転送ページ」に移動します。 「 Cross-chain Transfer（XCM）」タブを選択します。

4. Astar EVMを使用しているとき、宛先EVMアドレスを入力します。 あなたは[オリジンチェーンのアドレス](https://docs.astar.network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses)が必要です。 <img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png" />

5. もし、Astar Nativeを使用しているのであれば、順序を逆にするだけで、同じアカウント内でトークンを転送することができ、他のアカウントのアドレスに転送するのであれば手動で入力することもできます。 <img width="1000" alt="XCM-reverse" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png" />

<img width="1000" alt="Input-manually" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png" />

6. Astar Networkに持ち込みたい額を入力し、「Confirm」ボタンを押します。
