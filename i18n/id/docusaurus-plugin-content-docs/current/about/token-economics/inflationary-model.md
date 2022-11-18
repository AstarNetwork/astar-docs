---
sidebar_position: 4
---

# Tokenomics & Model Inflasi

:::note
Berikut termasuk konten lanjutan.
:::

:::tip
Model yang digunakan untuk Astar & Shiden adalah sama namun ada beberapa perbedaan konfigurasi. Dalam bagian berikut, kami hanya akan menjelaskan Astar Network dan token ASTR namun gambaran yang sama juga berlaku untuk Shiden Network dan token SDN.
:::

Model tokenomics dari [Astar Network][] disusun untuk memberikan dukungan terhadap para developer melalui mekanisme dApps Staking. Token ASTR mempunyai beberapa peran penting sebagai berikut:

1. Sebagai pembayaran untuk biaya transaksi
2. Melakukan staking terhadap dApps
3. Imbalan terhadap developer dApps Staking & imbalan terhadap Collator

## Model Inflasi

### Pandangan Umum

Bagian sebelumnya menjelaskan distribusi awal token ASTR. Namun, Astar menggunakan model tokenomics dengan inflasi (supply tidak terbatas) dimana token dicetak setiap ada block baru dihasilkan. Token tersebut akan mendorong mekanisme sistem dApps staking dan digunakan sebagai imbalan untuk para pengguna yang melakukan stake dan juga para Collator.

Disetiap block yang diproduksi, Astar akan mengeluarkan token dengan jumlah tetap. Angka tersebut digunakan untuk mendapatkan hitungan akurat pada kisaran 10% inflasi untuk tahun pertama, dengan asumsi setiap block diproduksi setiap **12** detik.

| Network | Cetakan Per Block |
| ------- | ----------------- |
| Astar   | 266.4 ASTR        |
| Shiden  | 2.664 SDN         |

Para pembaca mungkin menyadari bahwa Astar mengeluarkan 100 kali lebih banyak token pada setiap block yang diproduksi daripada Shiden. Hal ini dikarenakan Astar mempunyai supply awal 100 kali lebih banyak dibanding Shiden.

### Penerima

Setiap imbalan dari produksi block didistribusikan kepada beragam pihak penerima. ​
#### > Para Collator

Para Collator adalah pihak yang bertanggung jawab menghasilkan block dan akan menerima porsi imbalan khusus untuk **Collator**. Ini adalah insentif finansial utama untuk para Collator. Porsinya sudah dikonfigurasi sesuai persentase dari total imbalan yang dihasilkan setiap block dan nilainya selalu sama per block kecuali dirubah secara manual.

Tambahannya, mereka juga akan menerima fee dari user untuk transaksi yang tercatat di dalam block yang sudah diproduksi. Untuk Shiden, sejumlah token sebanyak **20%** dari fee akan dihancurkan (burn) untuk menambah kekuatan deflasi (atau menekan laju inflasi) dalam model tokenomic dengan inflasi seperti ini. Hal yang sama mungkin akan segera diadopsi oleh Astar.

#### > On-chain Treasury (Perbendaharaan On-chain)

Treasury menerima porsi bervariasi dari imbalan block. Digunakan sebagai cadangan untuk memenangkan lelang slot parachain selanjutnya dan untuk mendukung beberapa project dan aktivitas di dalam ekosistem Astar.

#### > dApps Staking

`dApps staking`, sebuah mekanisme pemberian insentif yang merupakan inovasi dari Astar, menerima imbalan dengan porsi bervariatif yang bergantung kepada **total value locked** (atau **TVL** in further text) di dalam dApps staking.

Sebagian imbalan ditujukan kepada dApp developer sedangkan bagian lainnya ditujukan kepada para Staker yang mengunci token ASTR mereka untuk *stake* atau *vote* kepada dApp pilihannya.

### Gambaran Model

Sebelumnya dijelaskan bahwa inflasi per block berjumlah tetap - namun, distribusi imbalan untuk para pihak penerima bersifat dinamis dan bergantung pada parameter tertentu. Penting untuk ditekankan bahwa terkait semua parameter pada model ini dapat dibaca dari data on-chain - **tidak ada** data yang dihadirkan secara off-chain. Hal ini membuat aman dan mudah diverifikasi.

Ada dua hal utama untuk dimengerti sebelum jauh mendalami kedalam model tersebut - **TVL** dan **konfigurasi parameter untuk imbalan setiap block**.

#### TVL

Variabel utama dalam sistem yang fluktuatif dari block ke block, berdasarkan tindakan dari user adalah **TVL** dari dApps Staking. :::note  
TVL dalam konteks ini tidak mempertimbangkan token non-ASTR yang dikunci oleh protokol yang dibangun di atas Astar (contoh protokol DeFI) dan tidak ada efek apapun terhadap skema distribusi imbalan.
:::

Kami tertarik terutama pada **persentase TVL**
- $total\_issuance$ - jumlah total token **ASTR** yang dicetak
- $TVL$ - julmah total tokens yang terkunci di dalam dApps-staking
- $TVL_{\%} = {total \over TVL}$

Sebagai contoh **total_issuance** sama dengan 1000 dan **TVL** adalah 242, **persentase TVL ** menjadi `24.2%`.

#### Konfigurasi Parameter

Berbagai parameter berikut yang berpengaruh terhadap distribusi imbalan dari setiap block.

| Nama                    | Keterangan                                                                                   | Contoh Nilai |
| ----------------------- | -------------------------------------------------------------------------------------------- | ------------ |
| Collators Percent       | Persentase tetap terhadap para Collator                                                      | 10%          |
| Base Treasury Percent   | Persentase minimal yang akan selalu masuk ke perbendaharaan                                  | 10 %         |
| Base Staker Percent     | Persentase minimal imbalan yang akan selalu dibagikan kepada para staker di dApp-staking     | 20 %         |
| dApps Percent           | Persentase tetap yang akan masuk kepada para developer di dApp-staking                       | 15 %         |
| Adjustable Percent      | Persentase yang akan dibagi antara perbendaharaan dan para staker, tergantung pada nilai TVL | 45 %         |
| Ideal dApps-staking TVL | Persentase TVL yang dianggap ideal                                                           | 60%          |

Jumlah yang diterima oleh para staker dan perbendaharaan adalah dinamis dan tergantung dari nilai TVL. Namun, ada batas bawah dari seberapa jumlah yang didistribusikan kepada mereka. Ini adalah parameter *dasar*. Untuk Collator dan developer dApp akan selalu menerima imbalan dengan persentase tetap.

##### Adjustable Percent

Untuk pembagian imbalan block antara para staker dan perbendaharaan **persentasenya dapat dirubah** tergantung dengan nilai TVL saat itu. $$ \begin{aligned} a&djustable_{staker} = min(1, {TVL_{\%} \over TVL_{ideal}}) * adjustable_{\%} \newline\newline t&otal_{staker} = base_{staker} + adjustable_{staker} \newline\newline t&otal_{treasury} = base_{treasury} + (adjustable_{\%} - adjustable_{staker}) \end{aligned} $$

Semakin banyak token yang dikunci dalam dApp staking dan nilai TVL meningkat, maka porsi imbalan para staker juga akan meningkat untuk memberi kompensasi karena apabila tidak, maka staking akan menjadi semacam *zero-sum-game*. Peningkatan ini linier hingga titik tertentu, $TVL_{ideal}$, setelah itu maka akan jenuh. Peningkatan nilai TVL lebih lanjut tidak akan berlanjut dengan meningkatnya imbalan kepada para staker.

Sebagai catatan dalam model Polkadot, ketika TVL sudah dinilai ideal, maka imbalan untuk para staker akan menurun secara eksponensial. Dalam kasus kami, akan menjadi jenuh, menjadikan ini menjadi *zero-sum-game*. Motivasi dibalik metode kami adalah kesederhanaan.

##### Interest Rate

Menggunakan parameter sebelumnya, kami dapat menyimpulkan tingkat suku bunga tahunan kami kepada para staker: $$ i = {inflation_{anual} * total_{staker} \over TVL_{\%}} $$

Sebagai contoh, apabila $total_{staker} = 55\%$ dan $TVL_{\%} = 40\%$, keluar hasil ${0.1 * 0.55 \over 0.4}$ jadi tingkat suku bunga tahunan sebesar `13.75%`.

Namun, inflasi melemahkan tingkat bunga sehingga lebih tepat untuk mempertimbangkan *tingkat bunga tahunan yang disesuaikan dengan inflasi*.

$$ i_{adjusted} = {i + 1 \over inflation_{anual} + 1} - 1 $$

Mengikuti contoh di atas, nilai *inflasi yang disesuaikan* menjadi ${0.1375 + 1 \over 0.1 + 1} - 1$ yaitu `3.4%`.

### Visualisasi Model

Grafik selanjutnya akan menjelaskan visualisasi dari model tersebut.

* garis hijau adalah tingkat suku bunga $i$
* garis biru adalah total inflasi staker $total_{staker}$
* garis merah adalah tingkat inflasi suku bunga yang disesuaikan $i_{adjusted}$

![visualisasi_model_tokenomics](img/tokenomics_1.png)

Pembaca dapat langsung melihat dan mengkonfigurasikan sendiri [di sini](https://www.desmos.com/calculator/cjjkt6smk5).

[Astar Network]: https://astar.network/
