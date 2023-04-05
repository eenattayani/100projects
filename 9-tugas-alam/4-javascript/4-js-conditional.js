/*
SOAL No. 1

Kalian telah mempelajari cara menuliskan sebuah variabel dalam bahasa pemrograman JavaScript.
(let, const)
Buatlah beberapa variabel dengan detail sbb:

variable 'sentence' dengan isi string apapun
variable 'number' dengan isi number apapun
variable 'fixedSentence' dengan isi 'Saya belajar coding'
variable 'fixedNumber' dengan isi 20
variable 'isLearning' dengan isi boolean apapun
*/

// tulis code dibawah sini
let sentence = "Ini adalah senstence";
let number = 1001;
const fixedSentence = "Ini adalah fixed Sentence";
const fixedNumber = 1002;
let isLearning = true;

/*
SOAL No. 2

Kalian telah mempelajari cara melakukan reassignment/ mengganti nilai dalam Javascript (=), 
gunakan variabel di bawah untuk mendapatkan hasil yang diharapkan. 
(Wajib menggunakan variabel yang ada untuk reassignment/ mengganti nilai)

Contoh pengerjaan:

angkaSatu = angkaSatu + angkaDua + angkaTiga
console.log(angkaSatu) => expected output: 12
*/

let angkaSatu = 2;
let angkaDua = 4;
let angkaTiga = 5;
let angkaEmpat = 7;

// Tulis kode dibawah sini

// 1.
angkaSatu = angkaSatu + angkaTiga + angkaEmpat;
console.log(angkaSatu); // 14

// 2.
angkaDua = angkaDua + angkaSatu + angkaTiga + angkaEmpat;
console.log(angkaDua); // 18

// 3.
angkaTiga = angkaSatu + angkaDua;
console.log(angkaEmpat); // 32

/*
SOAL No. 3

Kalian telah mempelajari cara melakukan reassignment dan concantination (mengkombinasikan string) dalam Javascript (=), 
gunakan variabel di bawah untuk mendapatkan hasil yang diharapkan.

Gabungkanlah kumpulan kalimat-kalimat di bawah menjadi hasil yang diharapkan
*/

let result = "";
let nama = "Enry"; // isi dengan nama anda
const kalimatSatu = "Hai teman-teman! ";
const kalimatDua = "Aku adalah " + nama + ". ";
const kalimatTiga = "Hari ini aku sedang mempelajari ";
const kataPertama = "Javascript";

// Write your code below
result = kalimatSatu + kalimatDua + kalimatTiga + kataPertama;
console.log(result); // Hai teman-teman! Aku adalah [nama saya]. Hari ini aku sedang mempelajari Javascript

/*
SOAL No. 4

Kalian sudah mempelajari bagaimana cara melakukan pengkondisian menggunakan if else dan logical operator 
(===, ==, !==, !=, >, >=, <, <=).
Buatlah suatu kondisi if else dari variabel dibawah ini!

Ketika nilai uang bisa membeli sepatu, maka tampilkan 'Anda bisa membeli sepatu'. Jika tidak, tampilkan 'Anda tidak bisa membeli nya'
*/

let results = "";
const uang = 10000;
const hargaSepatu = 50000;

// Write your code below
if (uang >= hargaSepatu) {
  results = "Anda bisa membeli sepatu";
} else {
  results = "Anda tidak bisa membeli nya";
}
console.log(results); // Anda tidak bisa membeli nya

/*
SOAL No. 5

Kalian sudah mempelajari bagaimana cara melakukan pengkondisian menggunakan if else dan logical operator 
(&&, ||, ===, ==, !==, !=, >, >=, <, <=).
Buatlah suatu kondisi if else dari variabel dibawah ini!

Ada seorang pengendara motor yang melewati jalan raya, didepannya terdapat lampur rambu lalu lintas.
Pengendara harus mematuhi lampu tersebut sesuai dengan warna sebagai berikut:

1. Ketika lampu berwarna merah, maka tampilkan 'Anda harus berhenti. 
2. Ketika lampu berwarna kuning, maka tampilkan 'Anda harus berhati-hati'. 
3. Jika lampu berwarna hijau atau bukan merah dan kuning, maka tampilkan 'Silahkan jalan'.

*/

let resultss = "";
const lampu = "kuning";

// Write your code below
if (lampu === "merah") {
  resultss = "Anda harus berhenti";
} else if (lampu === "kuning") {
  resultss = "Anda harus berhati-hati";
} else if (lampu === "hijau") {
  resultss = "Silahkan Jalan";
}
console.log(resultss); // Anda harus berhati-hati

/*
SOAL No. 6

Kalian sudah mempelajari bagaimana cara melakukan pengkondisian menggunakan 
if else (conditional), logical operator, dan nested conditional 
(&&, ||, ===, ==, !==, !=, >, >=, <, <=).
Buatlah suatu kondisi if else dari variabel dibawah ini!

Seorang pelanggan tikipidiwi ingin membeli sebuah produk pada sebuah toko online. 
Namun seorang pelanggan ketika ingin membeli suatu produk perlu melakukan login terlebih dahulu.
Ketika pelanggan berhasil login, pelanggan akan mendapatkan diskon tertentu tergantung dari tipe member nya.
Diskon tersebut digunakan untuk memangkas harga dari barang tersebut.
Berikut adalah poin-poin yang perl diperhatikan saat pelanggan ingin membeli suatu produk:

1. Pelanggan wajib melakukan login terlebih dahulu, 
jika tidak login maka tampilkan: 'Anda harus login terlebih dahulu'

2. Platinum user akan mendapatkan diskon 35%, 
tampilkan: 'Hai pelanggan Platinum! Harga yang kamu perlu bayar adalah Rp. <harga_baru_yang_dipotong>'

3. Gold user akan mendapatkan diskon 30%,
tampilkan: 'Hai pelanggan Gold! Harga yang kamu perlu bayar adalah Rp. <harga_baru_yang_dipotong>'

4. Silver user akan mendapatkan diskon 25%,
tampilkan: 'Hai pelanggan Silver! Harga yang kamu perlu bayar adalah Rp. <harga_baru_yang_dipotong>'

5. Bronze user tidak akan mendapatkan diskon,
tampilkan: 'Hai pelanggan Bronze! Harga yang kamu perlu bayar masih tetap ya dengan harga Rp. <harga_tanpa_dipotong>'

*/

let resultsss = "";
let productPrice = 100000;
const userType = "Gold";
const isLogin = true;

// Write your code below here
if (isLogin) {
  if (userType === "Platinum") {
    productPrice === productPrice - (productPrice * 35) / 100;
    resultsss = "Hai Pelanggan " + userType + "! Harga yang kamu perlu bayar adalah Rp. " + productPrice;
  } else if (userType === "Gold") {
    productPrice = productPrice - (productPrice * 30) / 100;
    resultsss = "Hai Pelanggan " + userType + "! Harga yang kamu perlu bayar adalah Rp. " + productPrice;
  } else if (userType === "Silver") {
    productPrice = productPrice - (productPrice * 25) / 100;
    resultsss = "Hai Pelanggan " + userType + "! Harga yang kamu perlu bayar adalah Rp. " + productPrice;
  } else if (userType === "Bronze") {
    productPrice = productPrice - (productPrice * 20) / 100;
    resultsss = "Hai Pelanggan " + userType + "! Harga yang kamu perlu bayar masih tetap ya dengan harga Rp. " + productPrice;
  }
} else {
  resultsss = "Anda harus login terlebih dahulu";
}

console.log(resultsss); // 'Hai pelanggan Gold! Harga yang kamu perlu bayar adalah Rp. 70000'

// contoh nama: Andi
// pengecekkan nilai
// jika nilai diantara 85 - 100 => nilai Andi A
// jika nilai diantara 70 - 84 : nilai Andi B
// jika nilai diantara 60 - 69 : nilai Andi C
// jika nilai diantara 40 - 59 : nilai Andi D
// jika nilai diantara 0 - 39 : nilai Andi E
// jika nilai lebih dari 100 atau nilai kurang dari 0, maka => nilai harus antara 0 - 100

let namaa = "Anton";
let nilai = 54;

if (nilai <= 100 && nilai >= 0) {
  if (nilai >= 85 && nilai <= 100) {
    nilai = "A";
  } else if (nilai >= 70 && nilai <= 84) {
    nilai = "B";
  } else if (nilai >= 60 && nilai <= 69) {
    nilai = "C";
  } else if (nilai >= 40 && nilai <= 59) {
    nilai = "D";
  } else if (nilai >= 0 && nilai <= 39) {
    nilai = "E";
  }
  console.log("Nilai " + namaa + " " + nilai); // Nilai Anton C
} else {
  console.log("nilai harus antara 0 - 100");
}
