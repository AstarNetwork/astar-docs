---
sidebar_position: 1
---

# Membuat Wallet Astar

## Akun Astar

### Format Alamat (Address)

Format address dalam jaringan blockchain berbasis Substrate seperti Astar adalah SS58. SS58 adalah modifikasi dari Base-58-check dari Bitcoin dengan sedikit modifikasi. Khususnya, format berisi awalan (prefix) jenis address yang mengidentifikasi address sebagai milik network tertentu. Ekosistem Astar adalah parachain unik di ekosistem Polkadot karena hanya satu-satunya parachain yang mendukung smart contract EVM sebagai smart contract WASM. Dengan dua jenis Virtual Machine maka ada dua jenis address.

- Address Astar Native atau SS58 Address
- Address Astar EVM atau H160 yang dimulai dengan awalan 0x

<img width="800" alt="1" src="https://user-images.githubusercontent.com/77480847/186840773-5874ba05-a067-4204-b72f-3f1017de85b7.png" />
<img width="800" alt="2" src="https://user-images.githubusercontent.com/77480847/186840936-692dc1f3-c5a8-450f-813c-6067c60f8cc2.png" />

Anda akan berinteraksi dengan address Astar Native ketika menggunakan dApp berbasis WASM yang telah disiapkan dalam halaman dApp staking. Menggunakan address ini membutuhkan extension lainnya selain MetaMask. Kami merekomendasikan Polkadot JS extension jika anda baru masuk dalam ekosistem ini.

## Portal Astar

[Portal Astar][] adalah tempat untuk melakukan segalanya dalam ekosistem kami. Para developer dari Astar telah menciptakan suatu tempat untuk semuanya yang ingin berinteraksi dengan ekosistem kami.

Melalui portal kammi, anda dapat terhubung dengan network yang berbeda dalam ekosistem Astar.

- **Astar Network**: parachain di atas Polkadot.
- **Shiden Network**: parachain di atas Kusama.
- **Shibuya**: testnet untuk parachain

<img width="500" alt="2" src="https://user-images.githubusercontent.com/77480847/186842212-fa88eef0-b768-448e-995f-cc5834eb7c88.png" />

## Rekomendasi: Polkadot{.js} Browser Plugin

Plugin Polkadot{.js} plugin menyediakan keseimbangan antara kegunaan dan keamanan. Ini menyediakan mekanisme lokal terpisah untuk menciptakan address dan berinteraksi dengan portal Astar. Kami merekomendasikan para pengguna yang baru masuk dalam ekosistem kami dan hendak membuat address Astar Native menggunakan wallet extension ini. Apabila anda tidak mempunyai extension Polkadot JS maka anda akan menerima sebuah pesan pop up pada portal kami ketika anda hendak menghubungkan wallet.

### Memasang Plugin Browser

Plugin browser tersedia baik untuk [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (dan browser berbasis Chromium seperti Brave) dan [Firefox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension). Setelah memasang plugin, anda seharusnya dapat melihat logo Polkadot{.js} berwarna oranye dan putih pada menu browser anda.

![4](img/4.png)

### Menciptakan Akun

Buka extension Polkadot{.js} dengan klik pada logo di bagian atas browser anda. Anda akan melihat penampakan sebuah menu.

![6](img/6.png)

Klik pada tombol plus - "Create new account". Polkadot{.js} kemudian akan menggunakan sistemasi acak untuk menciptakan kata kunci (seed) dan menampilkan dalam bentuk 12 kata.

![7](img/7.png)

Anda harus menyimpan kata-kata kunci tersebut. Simpanlah kata kunci tersebut di tempat yang aman dan rahasia. Apabila anda tidak dapat mengakses akun anda melalui Polkadot{.js} karena sesuatu hal, maka anda dapat memasukkan kata-kata kunci tersebut dengan cara "Add account menu" dan kemudian pilih "Import account from pre-existing seed".

![8](img/8.png)

Sebaiknya ciptakan sebuah akun yang dapat digunakan untuk semua parachain dalam ekosistem Polkadot. Akun ini kemudian dapat digunakan juga pada Polkadot dan Kusama. Format akun anda akan berubah secara otomatis apabila terhubung pada parachain tertentu.

**Descriptive name** hanya untuk kebutuhan anda saja. Ini tidak disimpan di dalam blockchain dan tidak akan terlihat oleh pengguna lain yang melihat akun anda melalui block explorer. Namun jika anda memiliki beberapa akun, ini akan membantu anda mengenali akun tersebut.

**Password** akan digunakan untuk melakukan enkripsi terhadap informasi akun ini. Anda harus memasukkan password anda untuk semua transaksi atau apabila hendak menandatangani sebuah pesan.

:::danger
Harap diingat password ini **TIDAK** melindungi kata-kata rahasia anda (seed phrase). Apabila ada orang lain mengetahui 12 kata rahasia tersebut, mereka akan memiliki kontrol penuh atas akun anda walaupun mereka tidak mengetahui password anda.
:::

Setelah klik pada "Add the account with the generated seed", maka akun anda akan tercipta. Kami juga merekomendasikan untuk menyimpan akun anda dalam bentuk file.json di tempat yang aman.

## Menghubungkan wallet anda ke Portal Astar

Kembali ke [Astar Portal][] dan refresh halaman tersebut. Anda akan mendapatkan pesan pop up untuk melakukan otorisasi untuk Polkadot JS agar dapat digunakan dalam portal kami. Berikan izin kepada extension.

![9](img/9.png)

Saat anda sudah mengizinkan extension tersebut, mari kita hubungkan wallet anda. Pesan pop up akan muncul kembali dengan semua extension yang tersedia. Gunakan akun yang baru diciptakan dengan Polkadot JS, jadi kita pilih extension ini.

<img width="500" alt="10" src="https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png" />

Saat anda sudah klik pada Polkadot JS, anda dapat memilih akun yang baru diciptakan sebelumnya. Pilih dan tekan confirm.

<img width="530" alt="11" src="https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png" />

Anda sudah sukses mengubungkan wallet Astar anda dengan portal kami. Sebagai pengingat, anda dapat menggunakan wallet ini di semua parachain dalam ekosistem Polkadot dan ekosistem Kusama.

## Dukungan

Apabila anda mempunyai masalah. Bergabunglah dengan komunitas kami dan para Ambassador kami akan membantu anda. Harap diingat kami tidak akan mengontak anda secara personal terlebih dahulu! Apabila anda dihubungi terlebih dahulu oleh seseorang yang mengaku sebagai bagian dari kami, jangan percaya.

[Portal Astar]: https://portal.astar.network/

[Astar Portal]: https://portal.astar.network/
