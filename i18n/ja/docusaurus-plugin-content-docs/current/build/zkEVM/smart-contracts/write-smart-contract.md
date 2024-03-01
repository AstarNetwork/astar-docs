---
sidebar_position: 0
title: OpenZeppelinウィザードを使用してスマートコントラクトを作成する
sidebar_label: コントラクトの作成
---
import Figure from '/src/components/figure'

このドキュメントでは、OpenZeppelinウィザードを使用してスマートコントラクトのコードを自動的に書く方法を説明します。 作成されたスマートコントラクトのコードは、**Open in Remix** ボタンをクリックしてRemix と統合したり、クリップボードにコピーして、使用したいIDE に貼り付けたりできます。

## はじめに

ブラウザで [OpenZeppelin Wizard](https://wizard.openzeppelin.com) に移動します。 最初に注意すべきことは、 **Solidity Wizard** と **Cairo Wizard** ボタンがあることです。

以下に挙げるいずれかのタブを選択し、Solidity (EVMチェーンの場合)またはCairolang(Starknetで使用可能)のすぐに使用可能なスマートコントラクトコードの作成を始めることができます。 These are:

- ERC20: ERC-20トークンのスマートコントラクト作成用
- ERC721: NFT トークンのスマートコントラクト作成用
- ERC1155:ERC-1155トークンのスマートコントラクト作成用
- Governor：DAOの作成用
- Custom: カスタマイズされたスマートコントラクトの作成用

## NFT コントラクトの作成

視覚的にわかりやすいよう、NFT スマートコントラクトを作成します。 `Mintable` かつ `Burnable`な`ERC721`トークンを作成し、適切なライセンスを指定したいとします。

1. **ERC721** タブを選択します。

2. `Name` と `Symbol`のフィールドを入力し、NFT に名前とシンボルを与えてください。

3. 左側のチェックボックスを使用してトークンの機能を選択してください

- `Mintable`チェックボックスにチェックを入れてください
- `Auto Increment Ids` チェックボックスにチェックを入れると、ミントされるNFTの唯一性が担保されます。
- `Burnable`チェックボックスにチェックを入れてください
- **デフォルトのMIT license**を残すか、ご自身の選択でライセンスを入力してください

機能が選択されるたびに新しいコード行が自動的に書き込まれることに注目してください。

## コントラクトが完成しました

結果として生成されるコード行で、Solidity で書かれたNFT トークンのコントラクトが完成しました。 上記のように、このソースコードをお好みのIDEに移植するか、Remixで直接開くことができます。

以下の図は、自動書き込みにより作成されたNFT スマートコントラクトのコードを示しています。

<Figure caption="The End-Product NFT Source Code" src={require('/docs/build/zkEVM/smart-contracts/img/end-product-nft-code.png').default} width="100%" />
