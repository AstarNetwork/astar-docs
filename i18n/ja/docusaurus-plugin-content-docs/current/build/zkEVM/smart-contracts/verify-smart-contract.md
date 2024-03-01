---
sidebar_position: 4
title: スマートコントラクトのVerify
sidebar_label: コントラクトの認証
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Figure from '/src/components/figure'

zKatana testnetにデプロイされたスマートコントラクトは、デプロイのフレームワークやコントラクトの複雑さに応じて様々な方法で検証することが可能です。 ここでの目的は、具体例を用いて、デプロイされたスマートコントラクトを手動で認証する方法を説明することです。

このガイドに沿って作業する間、ウォレットが接続されているようにしてください。 このチュートリアルでは、MetaMaskウォレットを使用します。
スマートコントラクトの検証方法詳細については、[Blockscoutドキュメント](https://docs.blockscout.com/for-developers/verify-contracts)を参照してください。

## 手動認証

スマートコントラクトを正常にコンパイルした後、次の手順に従ってスマートコントラクトを認証します。

1. スマートコントラクトがデプロイされている**アドレス**をコピーします。

2. [zKatana Explorer](https://zkatana.blockscout.com)に移動し、コントラクトアドレスを検索ボックスに貼り付けます。 これにより、**コントラクトの詳細**というラベルの付いたウィンドウが開きます。

3. **Transactions**、**Token transfers**、**Internal txns**、**Coin Balance History**、**Contract**と表示されたタブのあるボックスまでスクロールします。

4. **Contract**タブを選択し、**Verify and Publish**ボタンをクリックします。

5. コントラクトコードを提出するには3つの方法があります。 その内、次の2つの選択肢について説明します:
   - Solidity, Flattenedソースコード
   - Solidity, 標準入力のJSON

### Solidity, Flattenedソースコード

1. **via Flatened Source Code** オプションを選択して **Next** をクリックします。
2. コントラクトのコンパイラーバージョンに基づいて、**コンパイラー** をアップデートするには、

   - ↓ をクリックしてコンパイラーバージョンのリストを確認します。

   - 対応するバージョンを選択してください。 たとえば、コードに`pragma solidity^0.8.9;`と書かれている場合は`v0.8.9+commit.e5eed63a`を選択してください。
3. コントラクトの最適化設定に基づいて最適化オプションを選択します。
4. フレームワークには、ソースコードをflattenする特別な方法を持っているものがあります。 例えば、**Hardhat**、**Remix**、**Foundry**などがそうです。 1つのファイルからなるコントラクトを使用していて、import がない場合は、ファイルをflattenする必要はありません。

<Tabs>
<TabItem value="hardhat" label="Hardhat" default>
Hardhatを用いてコントラクトコードをflattenするには、次のコマンドを実行するだけで大丈夫です: 

```bash
npx hardhat flatten
```
結果は標準出力に表示されます。 `>`リダイレクト演算子を使用して、flattenされたソースコードを含むファイルを作成することができます。

```bash
npx hardhat flatten > flattened.sol
```
新しい`flatented.sol`ファイルの内容をコピーし、エクスプローラの`Contract code`フィールドに貼り付けます。 
</TabItem>

<TabItem value="remix" label="Remix">
Remixでコントラクトコードをflattenするためには、コントラクト名を右クリックし、表示されるドロップダウンメニューから **Flatten** オプションを選択するだけです。 以下の図を参考にしてください。

<Figure caption="Selecting the flatten code option" src={require('/docs/build/zkEVM/smart-contracts/img/flatten-code-remix.png').default} width="100%" />

**Flatten**を選択すると、拡張子`_flatten.sol`を持つ新しい`.sol`ファイルが自動的に作成されます。 新しい`<Original-Name>_flatten.sol`ファイルの内容をコピーし、エクスプローラの`Contract code`フィールドに貼り付けます。 
</TabItem>

<TabItem value="foundry" label="Foundry">
Foundryを使用してコードをflattenするためには、以下のコマンドを使用してください: 

```bash
forge flatten src/<Contract-Name> -o <Any-Name-For-Flattened-Code>.sol
```

このコマンドを使用すると、flattened codeは、`<Any-Name-For-Flattened-Code>.sol`ファイルに保存されます。 新しい`<Any-Name-For-Flattened-Code>.sol`ファイルの内容をコピーし、エクスプローラの`Contract code`フィールドに貼り付けます。

コントラクトのコンパイラーバージョンに基づいて、コンパイラーをアップデートするには、 たとえば、コードに`pragma solidity^0.8.9;`と書かれている場合は`v0.8.9+commit.e5eed63a`を選択してください。
コントラクトの最適化設定に基づいて最適化オプションを選択します。 
</TabItem> 
</Tabs>

### Solidity、標準JSON入力

**via Standard JSON Input** オプションを選択して **Next** をクリックします。

1. コントラクトのコンパイラーバージョンに基づいて、**コンパイラー** をアップデートするには、

   - ↓ をクリックしてコンパイラーバージョンのリストを確認します。

   - 対応するバージョンを選択してください。 たとえば、コードに`pragma solidity^0.8.9;`と書かれている場合は`v0.8.9+commit.e5eed63a`を選択してください。

2. **Standard Input JSON** ファイルを _standard input JSON ファイルをドロップするか、ここをクリック_と書かれたフィールドに貼り付けます。 standard input JSONファイルはローカルのプロジェクトフォルダにあります。

<details>
<summary>標準入力のJSONファイルを見つけるには</summary>

1. Hardhatプロジェクトの場合は、`src/build-info`フォルダに移動し、`.json`ファイルを開きます。

<Figure src={require('/docs/build/zkEVM/smart-contracts/img/json.png').default} width="35%" />

2. `input` JSON オブジェクトを探します。 json ファイルをフォーマットして読みやすくします。

3. `input` JSON オブジェクトの値だけを新しいファイルにコピーします

<Figure src={require('/docs/build/zkEVM/smart-contracts/img/input-object.png').default} width="35%" />

4. この新しいファイルを**Drop file of Click here**フィールドにドラッグ&ドロップします。

</details>

5. **Verify & Publish**ボタンをクリックして、デプロイ済みのスマートコントラクトを認証してください。