---
sidebar_position: 10
---

# Polkadot.Js で dApp Staking 報酬の手動請求
Portal では1度に50件の請求制限があります。 これを超えると、報酬を請求することができなくなり、Polkadot.jsで手動で行う必要があります。 例：

1. あなたは１つのdAppにステークしており、50 era 以上の未請求の報酬をのこしている
2. あなたは5つのdAppにステークしており、10 era 以上の未請求の報酬をのこしている

この状況になった場合、このチュートリアルではPolkadot.jsで報酬を受け取る方法をご案内します。

---

**ステップ 1: あなたがステークキングしているコントラクトアドレスを確認する**
1. [Portal] (https://portal.astar.network/) に移動し、目的のネットワークに接続します。
2. dApp Staking に移動し、「Re-Stake after claiming」をオフにします。 ![image] (https://user-images.githubusercontent.com/37278708/201064005-8f8f6a84-f509-46d4-b0a0-493dba981957.png)
3. My dAppsに移動します。
4. あなたがステーキングしているdAppsのリストを見ることができます。
5. ステークされている各dAppの情報に移動し、コントラクトアドレスをコピーします。
6. 次のステップの参照としてコントラクトアドレスを保存しておきます。 ![image] (https://user-images.githubusercontent.com/37278708/201061933-81f7fe93-49f9-4c68-a1a1-ccdb6acf2e48.png)

---

**ステップ 2: Polkadot.js で報酬を受け取る**
1. 新しいブラウザタブを開き、 [Polkadot.js web app] (https://polkadot.js.org/apps/#/extrinsics) を開きます。
2. 正しいチェーン(Astar/Shiden/Shibuya) に接続していることを確認してください。
3. 正しいウォレットで接続していることを確認してください。
4. `Developer` 、`Extrinsics` とクリックします。
5. 左のドロップダウンメニューで `dappsStaking`を選択します。
6. 右のドロップダウンメニューで、 `claimStaker` を選択します。
7. EVM: H16O に、あなたが保存しておいたコントラクトアドレスを貼り付けます。 例：`0xaab44542c72f88f7b98fffda418e3efe94bc13af`
8. 「Submit Transaction」をクリックし、トランザクションにサインをする前にチップを追加します。
9. 大量のバックログがある場合は、すべての報酬が請求されるまで何度もこの手順を繰り返す必要があります。 ![image] (https://user-images.githubusercontent.com/37278708/199938229-92e8eb7d-46fa-450f-a16f-d583da7bf48c.png)
10. すべての報酬を請求した後、Portal に戻って「Re-Stake after claiming」をオンにすることができます。

---

以上です。こういった状況になるのを避けるために、定期的に報酬を請求してください。 何か問題が発生した場合は、 [Discord] (https://discord.gg/2FGq5KqwBh) のチームメンバーまたはアンバサダーにお問い合わせください。

