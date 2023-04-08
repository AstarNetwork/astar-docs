---
sidebar_position: 9
---

# 未登録コントラクトからステークの引き出し

まれに、プロジェクトはポータルのコントラクトアドレスを変更したり、プロジェクトが削除されることがあります。 この場合、一部のステークは自動的に削除されません。 ステーカーは手動でステークの引き出しをする必要があります。 このチュートリアルでは、ポータルから削除されたdAppからステークを引き出す方法について説明します。

**最も簡単な方法**は、未登録のdAppにステーキングしているアドレスでポータルに接続し、「Claim」をクリックすることです。 「Claim」をクリックすると、あなたの結合されたトークンは解除され、結合解除期間に入ります。 上記がうまくいかない場合は、以下のガイドに従ってください。

---

## ステップ 1: あなたがステークキングしているコントラクトアドレスを見つける
1. [Polkadot.js web app] (https://polkadot.js.org/apps/#/chainstate) に移動します。
2. 正しいチェーン(Astar/Shiden/Shibuya)に接続していることを確認してください。
3. 正しいウォレットで接続していることを確認してください。
4. `Developer` と `Chain State` をクリックします。
5. 左のドロップダウンメニューで `dappsStaking`を選択します。
6. 右のドロップダウンメニューで、 `generalStakerInfo` を選択します。
7. `include option` を選択解除します。
8. **+** 記号をクリックします。 ![image] (https://user-images.githubusercontent.com/37278708/199924502-e833a53e-ce7f-4b7d-bdee-b2ea1b377904.png)

9. これで、あなたがステーキングしているすべてのコントラクトを見ることができます。 ![image] (https://user-images.githubusercontent.com/37278708/199924710-61d994f3-ddae-4dfb-b4c3-f186138d86de.png)

10. そのページはそのままにしておきます。
11. 別のブラウザタブを開き、 [Astar Portal] (https://portal.astar.network/astar/dapp-staking/discover) に移動します。
12. 同じウォレットを使用して接続します。
13. dApp Staking -> My dApps. に移動します。
14. あなたがステーキングしているdAppsのリストを見ることができます。 ![image] (https://user-images.githubusercontent.com/37278708/199926165-909fa598-d9b2-4811-8619-f3ae414b9fb3.png)

15. ステーキングしている各dAppの情報に移動し、コントラクトアドレスを見ることができます。 ![image] (https://user-images.githubusercontent.com/37278708/199926265-f1913a1a-0635-4ed2-9f9b-91e7c8e0a2ec.png)

16. Polkadot.js web app でコントラクトアドレスを確認してください。 Polkadot.js web app では利用できるが、Astar Portal では利用できないコントラクトアドレスを見つけた場合、それは削除されたコントラクトアドレスであり、あなたが探しているものであることがわかります。
17. そのコントラクトアドレスをコピーし、次の手順の参照としてメモ帳に貼り付けておきます。

---

## ステップ 2: 未請求の報酬を請求する
1. 新しいブラウザタブを開き、 [Polkadot.js web app] (https://polkadot.js.org/apps/#/extrinsics) を開きます。
2. 正しいチェーン(Astar/Shiden/Shibuya)に接続していることを確認してください。
3. 正しいウォレットで接続していることを確認してください。
4. `Developer` と `Chain State` をクリックします。
5. 左のドロップダウンメニューで `dappsStaking`を選択します。
6. 右のドロップダウンメニューで、 `generalStakerInfo` を選択します。
7. Evm: H16O に、あなたがメモ帳に記録していたコントラクトアドレスを貼り付けます。`0xaab44542c72f88f7b98fffda418e3efe94bc13af`
8. 「Submit Transaction」をクリックし、サインをする前にチップを追加します。
9. 大量のバックログがある場合は、すべての報酬が請求されるまで何度もこの手順を繰り返す必要があります。 そうしないと、次のステップに進むことはできません。
![image] (https://user-images.githubusercontent.com/37278708/199938229-92e8eb7d-46fa-450f-a16f-d583da7bf48c.png)
---

## ステップ 3：コントラクトからステークを引き出す
1. 同じブラウザを使用してください。
2. 左のドロップダウンメニューで `dappsStaking`を選択します。
3. 右のドロップダウンメニューで、 `generalStakerInfo` を選択します。
4. Evm: H16O に、あなたがメモ帳に記録していたコントラクトアドレスを貼り付けます。`0xaab44542c72f88f7b98fffda418e3efe94bc13af`
5. 「Submit Transaction」をクリックし、サインをする前に小さいチップを追加します。 ![image] (https://user-images.githubusercontent.com/37278708/199930565-fff88330-bc9d-4680-aea3-de8d52052c00.png)

6. あなたのステークは今未登録のコントラクトから引き出されます。

---

以上です。 何か問題が発生した場合は、 [Discord] (https://discord.gg/2FGq5KqwBh) のチームメンバーまたはアンバサダーにお問い合わせください。



