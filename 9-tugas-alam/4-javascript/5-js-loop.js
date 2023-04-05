/* 
Buatlah sebuah proses yang menerima 1 input suhu berupa number, outputnya merupakan string yang menggambarkan dari suhu tersebut apakah orang tersebut sakit atau sehat. Apabila suhunya diatas 37 maka tampilkan pesan 'anda sakit', jika tidak maka 'anda sehat'

input
suhu = 38
output : anda sakit
*/

let suhu = 34;

if (suhu > 37) {
  console.log("anda sakit");
} else {
  console.log("anda sehat");
}

/*
Buatlah sebuah proses yang memiliki 1 input nilai berupa number dan akan menghasilkan output string seperti aturan dibawah ini :
Jika nilai lebih dari atau sama dengan 100, sistem akan mengeluarkan “nilai anda 100 keatas”. Jika nilai tidak 100 keatas tapi di atas 80, Maka sistem akan mengeluarkan “nilai anda diatas 80”. Tapi, jika nilai tidak lebih besar dari 80, maka sistem mengeluarkan “nilai anda 80 kebawah” .
*/

let nilai1 = 96;

if (nilai1 >= 100) {
  console.log("nilai anda 100 keatas");
} else if (nilai1 > 80) {
  console.log("nilai anda di atas 80");
} else {
  console.log("nilai anda 80 ke bawah");
}

/*
Buatlah sebuah proses yang akan menerima 1 input angka berupa number, dan akan menghasilkan sebuat output berupa string dengan aturan seperti yang dijelaskan di bawah ini:
- input number harus angka 1 - 4
- apabila angka adalah 1 maka outputnya 'Januari'
- apabila angka adalah 2 maka outputnya 'Februari'
- apabila angka adalah 3 maka outputnya 'Maret'
- apabila angka adalah 4 maka outputnya 'April'
- apabila angka selain 1 - 4 maka outputnya 'Nomor bulan harus 1 - 4'
*/

let angka = 4;

switch (angka) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("Februari");
    break;
  case 3:
    console.log("Maret");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Nomor bulan harus 1 - 4");
    break;
}

/*
Buatlah sebuah proses yang menerima 1 input nilai berupa number. Aplikasi ini akan menghasilkan output berupa string yang menjelaskan apakah nilai tersebut bernilai ganjil atau genap

contoh input:
nilai = 5
output: '5 merupakan angka ganjil'

nilai = 10
output: '10 merupakan angka genap'
*/

let nilai2 = 1283901829046;

if (nilai2 % 2 === 0) {
  console.log(`${nilai2} merupakan angka genap`);
} else {
  console.log(`${nilai2} merupakan angka ganjil`);
}

/*
Baby Boomer, Gen X, Gen Y, Gen Z

Berikut adalah beberapa istilah generasi berdasarkan tahun kelahirannya:

Baby boomer, kelahiran 1944 s.d 1964
Generasi X, kelahiran 1965 s.d 1979
Generasi Y (Millenials), kelahiran 1980 s.d 1994
Generasi Z, kelahiran 1995 s.d 2015
Buat sebuah proses yang menerima 2 input berupa nama (string) dan tahun (number). function akan mengeluarkan output berupa string berisikan nama dan generasinya seperti pada contoh output berikut.

input:
- nama: Santi
- tahun: 1994
output: 'Santi, berdasarkan tahun lahir anda tergolong Generasi Y'
*/

let nama = "Santi";
let tahun = 1994;
let generasi = "Baby boomer";

if (tahun >= 1944 && tahun <= 1964) {
  generasi = "Baby boomer";
} else if (tahun >= 1965 && tahun <= 1979) {
  generasi = "Generasi X";
} else if (tahun >= 1980 && tahun <= 1994) {
  generasi = "Generasi Y (Millenials)";
} else if (tahun >= 1995 && tahun <= 2015) {
  generasi = "Generasi Z";
}

console.log(`${nama}, berdasarkan tahun lahir anda tergolong ${generasi}`);

/*
Tiap huruf di dalam string memiliki indeks agar dapat diakses 1 per 1
Indeks di dalam string dimulai dari hitungan 0

string = 'Hallo Sir' 
index =>  012345678

dalam string di atas hurf H terdapat di index ke 0
dan huruf o terdapat di index ke 4

untuk dapat mengakses tiap huruf menggunakan index, dapat ditulis dengan cara seperti berikut:
- untuk mendapatkan kata pertama dari string ('Hallo') dapat menggunakan cara 
let kataPertama = string[0] + string[1] + string[2] + string[3] = string[4]
// huruf yang diakses    H           a           l           l           o    => 'Hallo'

Buatlah sebuah proses untuk menyusun kata yang urutannya terbalik dengan mengakses huruf per huruf menggunakan index nya
*/

let string = "so is cool Javascript";
// susun menjadi 'Javascript is so cool'

let kataPertama = string[11] + string[12] + string[13] + string[14] + string[15] + string[16] + string[17] + string[18] + string[19] + string[20]; // silahkan di isi dengan karakter yang tepat
let kataKedua = string[3] + string[4]; // silahkan di isi dengan karakter yang tepat
let kataKetiga = string[0] + string[1];
let kataKeempat = string[6] + string[7] + string[8] + string[9]; // silahkan di isi dengan karakter yang tepat

console.log(`${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`);

/*
Buatlah sebuah proses untuk membuat looping yang akan mencetak tulisan 'Javascript is so cool' sebanyak 20 kali dengan format sebagai berikut:

'[hitungan loop] - Javascript is so cool' 
*/

// tulis kode disini

// eksepektasi output
// 1 - Javascript is so cool
// 2 - Javascript is so cool
// 3 - Javascript is so cool
// 4 - Javascript is so cool
// 5 - Javascript is so cool
// 6 - Javascript is so cool
// 7 - Javascript is so cool
// 8 - Javascript is so cool
// 9 - Javascript is so cool
// 10 - Javascript is so cool
// 11 - Javascript is so cool
// 12 - Javascript is so cool
// 13 - Javascript is so cool
// 14 - Javascript is so cool
// 15 - Javascript is so cool
// 16 - Javascript is so cool
// 17 - Javascript is so cool
// 18 - Javascript is so cool
// 19 - Javascript is so cool
// 20 - Javascript is so cool
for (let hitungan = 1; hitungan <= 20; hitungan++) {
  console.log(`${hitungan} - Javascript is so cool`);
}

/*
Buatlah sebuah proses yang menerima 2 buat input kata (string) dan juga huruf (string). Aplikasi ini akan menghasilkan output berupa string beserta number yang mendeskripsikan total dari huruf yang dicari;

    contoh
    input: 
    - kata: 'i love javascript'
    - huruf: 'a'
    output: 'jumlah huruf a ada 2'

    contoh 2
    input: 
    - kata: 'javascript is so cool'
    - huruf: 'o'
    output: 'jumlah huruf o ada 3'
*/

let kata = "javascript is so cool";
let huruf = "o";
let totalHurufYangDicari = 0;

for (let hurufKe = 0; hurufKe < kata.length; hurufKe++) {
  if (kata[hurufKe] === huruf) {
    totalHurufYangDicari++;
  }
}

console.log(`jumlah huruf ${huruf} adalah ${totalHurufYangDicari}`);

/*
    Buatlah sebuah proses yang menerima 2 buat input kata (string) dan juga huruf (string). Aplikasi ini akan menghasilkan output berupa number yang mendeskripsikan index dari huruf yang dicari;

    contoh
    input: 
    - kata: 'i love javascript'
    - huruf: 'a'
    output: 'huruf a yang pertama terdapat di index 8'

    contoh 2
    input: 
    - kata: 'javascript is so cool'
    - huruf: 'o'
    output: 'huruf o yang pertama terdapat di index 15'

    contoh 3
    input:
    - kata: 'my car'
    - huruf: 'o'
    output: 'huruf o tidak ditemukan'
*/

let kata1 = "i love javascript";
let huruf1 = "a";
let hasil = -1;

for (let hurufKe = 0; hurufKe < kata1.length; hurufKe++) {
  if (kata1[hurufKe] === huruf1) {
    hasil = hurufKe;
    break;
  }
}

if (hasil < 0) {
  console.log(`huruf ${huruf1} tidak ditemukan`);
} else {
  console.log(`huruf ${huruf1} yang pertama terdapat di index ${hasil}`);
}

/*
Buatlah sebuah proses yang menerima 2 input kata1 (string) dan kata2(string), dan akan mengeluarkan output jumlah setiap huruf di kata2 yang terdapat di kata1

contoh
input:
- kata1: 'npt'
- kata2: 'nt'
output: 5
penjelasan =>
- jumlah huruf a di dalam kata1 : 2
- jumlah huruf i di dalam kata1 : 2
- jumlah huruf n di dalam kata1 : 0
- jumlah huruf t di dalam kata1 : 1
total : 2 + 2 + 1 = 5
*/

let kata1a = "javascript is so cool";
let kata2 = "aioue";
let totalHurufYangDicari1 = 0;

for (let hurufKata2 = 0; hurufKata2 < kata2.length; hurufKata2++) {
  for (let hurufKata1 = 0; hurufKata1 < kata1a.length; hurufKata1++) {
    if (kata1a[hurufKata1] === kata2[hurufKata2]) {
      totalHurufYangDicari1++;
    }
  }
}
console.log(totalHurufYangDicari1);
