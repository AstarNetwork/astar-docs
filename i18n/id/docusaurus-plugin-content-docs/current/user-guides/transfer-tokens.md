---
sidebar_position: 4
---

# Bagaimana Mengirim Token

Dalam panduan ini kami akan mengajarkan kepada anda bagaimana cara memindahkan atau mengirimkan token anda melalui Portal Astar dan mengirimkan token menuju Portal Astar.

<br />

- [Membuat Akun Astar (Native dan EVM)](#create-astar-accountsnative-and-evm)

- [Mengirim ASTR/SDN menuju Astar Network dari Bursa Tersentralisasi (Centralized Exchange/CEX)](#sending-astrsdn-to-astar-network-from-central-exchanges)

- [Mengirim ASTR/SDN dariAstar Network menuju Bursa Tersentralisasi (Centralized Exchange/CEX)](#sending-astrsdn-to-central-exchanges-from-astar-network)

- [Mengirim ASTR/SDN menuju Astar EVM dari Astar Native](#sending-astrsdn-to-astar-evm-from-astar-native-or-any-tokens-in-the-account)

- [Mengirim ASTR/SDN dari Astar EVM menuju Astar Native](#sending-astrsdn-to-astar-native-from-astar-evm)

- [Cross-chain Transfer(XCM)](#cross-chain-transferxcm)

- [Mengirim aset lintas jaringan cross-chain (XCM) menuju Astar Network](#transferring-cross-chainxcm-assets-into-astar-network)

- [Mengirim aset lintas jaringan cross-chain (XCM) dari Astar Network](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

<br />

## Membuat Akun Astar (Native dan EVM)

Astar mempunyai dua alamat dalam format yang berbeda.

- Address Astar Native - untuk melakukan staking dalam dApp Staking dan interaksi dengan proyek WASM
- Address Astar EVM - untuk interaksi dengan proyek EVM

Apabila anda membutuhkan untuk membuat akun Astar Native, [panduan ini](create-wallet.md) akan membantu anda.

Apabila anda belum menambahkan Astar Network dalam Metamask anda, cara mudahnya - buka [Portal kami](https://portal.astar.network/) dan pilih MetaMask. Metamask akan menanyakan ijin anda untuk menambahkan Astar Network. Selain itu, silahkan [lihat di sini](setup-metamask.md) untuk detail jaringan lebih lanjut.

<br />

## Mengirim ASTR/SDN menuju Astar Network dari Bursa Tersentralisasi (Centralized Exchange/CEX)

Kebanyakan bursa hanya mendukung Astar Native kecuali Gate.io yang juga mendukung Astar EVM. Anda membutuhkan akun Astar Native untuk menerima token ASTR dan anda dapat mengirimkan ke akun Astar EVM anda sesuai yang anda mau.

:::tip

Kebanyakan bursa hanya menyebut Astar Network yang artinya mereka hanya mendukung Astar Native.

:::

:::danger

**Selalu perhatikan network yang didukung, apabila dikatakan Astar (EVM) maka anda hanya akan dapat mengirim token menuju akun Astar EVM **.

:::

1. Buka [Portal Astar](https://portal.astar.network/).

2. Hubungkan Astar/Shiden (Astar Network untuk ASTR dan Shiden Network untuk SDN).

<img width="1000" alt="network" src="https://user-images.githubusercontent.com/77480847/188528854-79fd1c65-52e1-4289-ba1c-e3e0f00d8b1d.png" />

3. Hubungkan wallet Polkadot.js anda -apabila anda belum mempunyai silahkan lihat [di sini](#create-wallet/#astar-accounts).

<img width="1000" alt="wallet" src="https://user-images.githubusercontent.com/77480847/188529014-3309a569-8ceb-4fc0-b12b-7bf44316f592.png" />　

4. Ini adalah halaman semua aset anda dalam akun Astar Native anda. Anda akan menemukan address anda di atas. Salin address anda.

<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188529472-444c5335-2f6a-4b6e-8584-fe638bf3614a.png" />

5. Buka bursa (exchange) dimana token ASTR tersedia dan kirimkan pada address di atas.

6. Saat transaksi sudah dilakukan, lihat kembali ke Portal dan perhatikan saldo anda sudah bertambah.

<br />

## Mengirim ASTR/SDN dariAstar Network menuju Bursa Tersentralisasi (Centralized Exchange/CEX)

:::tip

- **Gunakan akun Astar Native untuk mengirim token ke bursa yang mendukung Astar Network**
- **Gunakan akun Astar EVM untuk mengirim token ke bursa yang mendukung Astar EVM**

:::

:::caution

Searah dengan panduan di bawah, mohon perhatikan dengan benar semua instruksi yang diminta oleh bursa (seperti address, format, dsb).

:::

1. Salin address akun bursa tujuan anda.
2. Buka [Portal](https://portal.astar.network/) dan hubungkan ke Astar/Shiden (ASTR untuk Astar Network dan SDN untuk Shiden Network).
3. Hubungkan wallet anda (tergantung yang diminta oleh bursa antara akun Astar Native atau Astar EVM) - Lihat kembali [Membuat Akun Astar] untuk keterangan lebih lanjut.
4. Klik tombol Transfer. <img width="1000" alt="Native-Asset-transfer" src="https://user-images.githubusercontent.com/77480847/188530698-e799a412-a21b-49c7-a868-2fcb4e69fd4e.png" />
5. Masukkan address akun bursa tujuan yang anda salin tadi dan masukkan jumlah yang hendak ditransfer. <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531182-9222121b-1c4b-4515-992f-407462a5ae42.png" />

<br />

## Mengirim ASTR/SDN menuju Astar EVM dari Astar Native (atau token lainnya dalam akun tersebut)

Seperti yang tertulis di atas, kebanyakan bursa hanya mendukung Astar Native dan anda harus memindahkan token ASTR ke akun Astar EVM apabila anda hendak berinteraksi dengan proyek EVM.

1. Buka [Portal](https://portal.astar.network/) dan salin address Astar EVM anda. <img width="1000" alt="account-EVM" src="https://user-images.githubusercontent.com/77480847/188531249-c6b3299b-7520-4136-9651-429b420fded7.png" />

2. Atau, buka extension Metamask dan salin alamat anda. <img width="355" alt="MM" src="https://user-images.githubusercontent.com/77480847/188531287-20dfc966-076d-44fc-805a-502f326708cc.png" />

3. Hubungkan akun Astar Native.

4. Klik tombol Transfer pada token ASTR.<img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188531419-78d95073-be4e-4020-a40b-cb64150dcdf6.png" />

5. Anda sekarang berada pada halaman Transfer. Masukkan address EVM yang anda salin tadi dan jumlah yang hendak ditransfer, kemudian tekan tombol Confirm. <img width="1000" alt="Native-local-destination-address" src="https://user-images.githubusercontent.com/77480847/188531500-38c2755e-691d-4bc9-bf21-470e98dec4f5.png" />

<br />

## Mengirim ASTR/SDN dari Astar EVM menuju Astar Native

Ikuti langkah-langkah di bawah apabila anda hendak transfer token ASTR/SDN ke akun Astar Native.

:::caution

xcAssets (token XCM yang kompatibel dengan EVM network) saat ini belum dapat ditransfer kembali ke akun Native (walaupun anda sebelumnya mengirim dari akun Native anda sendiri). Anda membutuhkan cross-chain transfer (XCM) ke chain awalnya dan melakukan transfer XCM lagi menuju akun Astar Native anda. Ikuti [langkah-langkahnya di sini.](#transferring-cross-chainxcm-assets-to-other-chains-from-astar-network)

:::  
:::danger

**Harap diingat kebanyakan bursa hanya mendukung akun address Astar Native jadi jangan menggunakan metode ini apabila hendak mentransfer kembali ke bursa kecuali apabila bursa tersebut mendukung jaringan Astar EVM.**

:::

1. Buka [Portal](https://portal.astar.network/) dan hubungkan akun Astar Native anda kemudian salin address anda. <img width="1000" alt="Account-copy" src="https://user-images.githubusercontent.com/77480847/188532843-8be68dcf-edce-4c72-b8c9-4877f45c72d2.png" />

2. Hubungkan akun Astar EVM anda dengan melakukan switch chain dari tombol di atas halaman.<img width="1000" alt="Switch-to-EVM" src="https://user-images.githubusercontent.com/77480847/188532949-3ae37836-acd2-424b-b398-8e06ad76271c.png" />

3. Klik tombol Transfer dari token yang hendak anda kirim. <img width="1000" alt="EVM-transfer" src="https://user-images.githubusercontent.com/77480847/188533050-6a8508da-049e-4697-be86-1f61b2d4c0e3.png" />

4. Anda saat ini berada dalam halaman Transfer. Masukkan address Astar Native yang anda salin tadi dan jumlah yang hendak ditransfer, kemudian tekan tombol Confirm. **Transaksi ini mengirim token tersebut ke dalam EVM Deposit.**

<img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188536340-5a59d4e6-290d-451e-b9fd-6d6e424ee76d.png" />　

5. Anda harus melakukan penarikan dari EVM Deposit sebelum anda dapat menggunakan token tersebut.

6. Kembali ke akun Astar Native anda dan klik Withdraw pada tulisan EVM Deposit. <img width="1137" alt="EVM-depo" src="https://user-images.githubusercontent.com/77480847/188534362-3182f4bf-cc32-4d54-a6a9-5624036df905.png" />

7. Sebuah layar konfirmasi akan muncul dan tekan tombol Confirm. <img width="945" alt="depo-withdraw" src="https://user-images.githubusercontent.com/77480847/188534447-70873ad8-f597-46da-a8b1-3808f3802c0d.png" />

<br />

## Cross-chain Transfer(XCM)

Ada beberapa hal penting yang harus anda siapkan sebelum memulai sebuah transfer.

:::note

- Ketika melakukan transfer token native dari chain asalnya, kami merekomendasikan meninggalkan sedikit token di akun tersebut. Karena anda mungkin membutuhkan token tersebut sebagai gas fee apabila ada transaksi lagi ke depannya.

- Saldo minimal biasanya diwajibkan untuk semua ekosistem Polkadot dan portal Astar hanya akan melakukan transaksi apabila jumlahnya lebih besar daripada saldo minimal yang diwajibkan.

:::

<br />

## Mengirim aset lintas jaringan cross-chain (XCM) menuju Astar Network

1. Buka [Portal Astar](https://portal.astar.network/) dan hubungkan akun Astar Native **(Deposit ke Astar EVM hanya mungkin terjadi melalui akun Astar Native) **

2. Pilih token dan jaringan yang hendak anda pilih untuk anda pindahkan ke Astar Network.

3. Klik Transfer dan pindah ke halaman Transfer. Pilih tab Cross-chain Transfer (XCM). <img width="1000" alt="Native-XCM" src="https://user-images.githubusercontent.com/77480847/188534616-5980f599-a5ba-4516-983f-108939ce87e6.png" />

Dengan akun Astar Native yang dibuat di Polkadot.js, maka akun tersebut juga dapat digunakan untuk semua parachain dalam ekosistem Polkadot. Kita sedang berada dalam akun Astar Network, namun kita juga dapat melihat saldo token DOT dari blockchain Polkadot. Anda dapat transfer aset anda tersebut hanya dengan sekali klik.

:::caution

Kami memberlakukan saldo minimal 1.1 DOT dan minimal jumlah transfer sebanyak 1.1 DOT. Artinya anda harus memiliki minimal 2.2 DOT + ditambah sedikit untuk gas fee agar dapat melakukan transfer. Ini kami berlakukan untuk melindungi dana user kami agar dana user kami tidak terkena kebijakan Existensial Deposit (ED) dari Polkadot Network (selanjutnya mengenai ED, silahkan pelajari di [Polkadot Wiki](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-).

:::

4. Apabila anda menginginkan token anda dalam Astar EVM rubahlah tujuan menjadi To: Astar(EVM) dan masukkan address EVM anda.

<img width="1000" alt="Chain-select" src="https://user-images.githubusercontent.com/77480847/188534777-ef3c57cb-6f0f-40da-8f5e-5b4058d3e946.png" />
<img width="1000" alt="XCM-Native-EVM" src="https://user-images.githubusercontent.com/77480847/188534889-ae0086d0-0b47-4016-9e8a-83f2bc928f56.png" />

1. Masukkan jumlah yang anda kehendaki untuk dibawa menuju Astar Network, kemudian tekan tombol Confirm.

2. Menemukan jejak transaksi XCM sedikit sulit. Saat ini Portal kami sudah mempunyai browser history yang menandai riwayat transaksi yang pernah anda lakukan sebelumnya.

<img width="1000" alt="history" src="https://user-images.githubusercontent.com/77480847/188534964-529b4933-3a60-48ec-a71c-afeb99ff2ade.png" />

<br />

## Mengirim aset lintas jaringan cross-chain (XCM) dari Astar Network

1. Buka [Portal Astar](https://portal.astar.network/) dan hubungkan akun Astar Native atau akun Astar EVM anda.

:::tip

Apabila anda hendak memindahkan aset cross-chain(XCM) menuju akun Astar Native dari akun Astar EVM, anda HARUS mengirim token tersebut ke chain asalnya dan melakukan transfer cross-chain(XCM) menuju akun Astar Native.

:::

2. Pilih token yang hendak anda kirim dari Astar Network ke chain lainnya.

3. Klik Transfer dan pindah ke halaman Transfer. Pilih tab Cross-chain Transfer (XCM).

4. Apabila anda di dalam Astar EVM, masukan address tujuan. Anda akan membutuhkan [alamat chain awal (origin chain’s address)](https://docs.astar.network/docs/xcm/faq#q-where-can-i-find-other-chains-addresses). <img width="1390" alt="EVM-XCM" src="https://user-images.githubusercontent.com/77480847/188535089-d594bdc6-9978-4b7b-a6a2-c165f51e8a6e.png" />

5. Apabila anda di Astar Native dan anda ingin transfer ke dalam akun yang sama anda tidak perlu merubah tetapi hanya menukar pilihannya dan juga anda dapat memasukkan address lain secara manual. <img width="1000" alt="XCM-reverse" src="https://user-images.githubusercontent.com/77480847/188535198-27aaf6e9-6b15-4e6f-bc6a-84febcd78de0.png" />

<img width="1000" alt="Input-manually" src="https://user-images.githubusercontent.com/77480847/188535225-6a7afe9d-83db-4fa9-a519-def33c30391a.png" />

6. Masukkan jumlah yang anda kehendaki, kemudian tekan tombol Confirm.
