---
sidebar_position: 0
title: Hardhatを使用してスマートコントラクトをデプロイする
sidebar_label: Hardhatを使用してデプロイする
---
import Figure from '/src/components/figure'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Hardhatは、人気のあるスマートコントラクト開発フレームワークです。 このチュートリアルでは、Hardhatを使用して、Astar zkEVMテストネットにシンプルな、数を数えるスマートコントラクトをデプロイします。
サンプルコントラクトとそれをデプロイするスクリプトを使用したHardhatプロジェクトの作成の基本について説明します。

Hardhatの使い方については、[公式のHardhatドキュメント](https://hardhat.org/getting-started/)を参照してください。

## プロジェクトの新規作成

空のフォルダに移動し、npm プロジェクトの作成を開始するには、`npm init` を実行し、表示される指示に従います。 yarnのようなnpm以外のパッケージマネージャーを使用することは可能ですが、Hardhatプラグインをシンプルにインストールするため、npm 7以降を使用することがHardhatにより推奨されています。

## Hardhat スマートコントラクト

サンプルプロジェクトを作成するには、プロジェクトフォルダに`npx hardhat init` を実行します:

<Figure src={require('/docs/build/zkEVM/smart-contracts/img/hardhat-init.png').default} width="100%" />

- **Press** `<ENTER>` javascript、typescript、または空のプロジェクトを選択します
- **プレス** `<ENTER>` プロジェクトのルートを設定します
- **プレス** `<ENTER>` `.gitignore`を追加します
- **Press** `<ENTER>` hardhat @nomicfoundation/hard-toolbox\` をインストールします。

## デプロイ用のアカウントを作成

- プロジェクトのルートフォルダに`.env`ファイルを作成し、次の行を追加します:

```bash
ACCOUNT_PRIVATE_KEY='my private key'
```

- `.env` ファイルに秘密鍵を書き入れてください。 MetaMask から秘密鍵を取得できます。 MetaMaskから秘密鍵を取得する方法については、以下のセクションを参照してください。

<details>
<summary>MetaMaskから秘密鍵を取得する方法</summary>

- MetaMaskウィンドウの右上にある垂直方向の3つの点をクリックします

- **アカウントの詳細**を選択し、**秘密鍵を表示**をクリックしてください

- 秘密鍵を表示するには、メタマスクのパスワードを入力してください

- 秘密鍵をコピーし、`.env`ファイルに貼り付けます。

</details>

:::warning
**Do not commit your private key to a public repository!**

.gitignoreファイルに`.env`が含まれていることを確認して、秘密鍵が公開されているリポジトリにコミットされないようにしてください。
:::

## ハードハットの設定

- `hardhat.config.js`ファイルを開き、以下のコードを貼り付けてください:

<Tabs>
<TabItem value="javascript" label="Javascript" default>

```js
    require("dotenv").config();
    require("@nomicfoundation/hardhat-toolbox");

    module.exports = {
        solidity: "0.8.19",
        paths: {
            artifacts: "./src",
        },
        networks: {
            zKatana: {
            url: `https://rpc.zkatana.gelato.digital`,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            },
            astarZkEvm: {
            url: `https://rpc.startale.com/astar-zkevm`,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            },
        },
    };
```
</TabItem>
<TabItem value="typescript" label="Typescript" >

```js
    import { HardhatUserConfig } from "hardhat/config";
    import "@nomicfoundation/hardhat-toolbox";
    import * as dotenv from "dotenv";

    dotenv.config({ path: __dirname + "/.env" });
    const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || "";
    console.log("PrivateKey set:", !!ACCOUNT_PRIVATE_KEY)

    const config: HardhatUserConfig = {
        solidity: "0.8.19",
        paths: {
        artifacts: "./src",
        },
        networks: {
            zKatana: {
            url: `https://rpc.zkatana.gelato.digital`,
            accounts: [ACCOUNT_PRIVATE_KEY]
            },
            astarZkEvm: {
            url: `https://rpc.startale.com/astar-zkevm`,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            },
        },
    };

    export default config;
```

</TabItem>
</Tabs>

## スマートコントラクトの作成
:::info
**注意:** サンプルプロジェクトで用いる既存のスマートコントラクトコードは、`Lock.sol`コントラクトです。 削除しても、残しておいても全く問題ありません。
:::
- コントラクトフォルダに`Counter.sol`という名前の新しいファイルを作成します。

```solidity
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
uint256 currentCount = 0;

    function increment() public {
        currentCount = currentCount + 1;
    }

    function retrieve() public view returns (uint256){
        return currentCount;
    }
}
```

- 以下のコードをコピーして `Counter.sol` コントラクトコードに貼り付けます:

```js
    const hre = require("hardhat");

    async function main() {
        const deployedContract = await hre.ethers.deployContract("Counter");
        await deployedContract.waitForDeployment();
        console.log(
            `Counter contract deployed to https://zkatana.blockscout.com/address/${deployedContract.target}`
        );
    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
```

## デプロイするスクリプトを作成

- `scripts/deploy.js` ファイルの内容を削除し、以下のコードを追加します:

```js
    const hre = require("hardhat");

    async function main() {
        const deployedContract = await hre.ethers.deployContract("Counter");
        await deployedContract.waitForDeployment();
        console.log(
            `Counter contract deployed to https://zkatana.blockscout.com/address/${deployedContract.target}`
        );
    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
```

## コントラクトのコンパイル
- dotenv パッケージのインストール: `npm install dotenv`
- コントラクトコードをコンパイルします。(CLIのプロジェクトルートに戻り、実行します。)
    ```bash
    npx hardhat compile
    ```

## コントラクトのデプロイ

- デプロイするスクリプトを実行:
    ```bash
    npx hardhat run scripts/deploy.js --network zKatana
    ```

    出力例:

    ```bash
    Counter contract deployed to https://zkatana.blockscout.com/address/0x8731DC57f9C7e01f5Ba733E7a10692cA540862f8
    ```
