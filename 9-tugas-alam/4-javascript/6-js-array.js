/*
Buatlah sebuah proses yang akan menambahkan 1 data baru ke dalam array. Aplikasi memiliki 2 input arr (array), val (berbagai tipe data);

contoh:
input:
- arr: [1, 2, 3, 4, 5]
- val: "enam"

output:
[1, 2, 3, 4, 5, "enam"]
*/

let arr = [1, 2, 3, 4, 5];
let val = "enam";

arr.push(val);

console.log(arr);

// ==================================================== //
/*
Buatlah sebuah proses yang menerima 1 input arr (array). Aplikasi ini akan menghasilkan sebuah array baru yang urutannya dibalik dari belakang ke depan

contoh:
input:
- arr: [1, 2, 3, 4, 5];

output:
[5, 4, 3, 2, 1]
*/

let arr1 = [1, 2, 3, 4, 5, 8, 10];
let newArr1 = Array();

for (let i = arr1.length - 1; i >= 0; i--) {
  newArr1.push(arr1[i]);
}

console.log(newArr1);

// ==================================================== //
/*
Buatlah sebuah Aplikasi yang menerima 1 parameter arr (array). Aplikasi ini akan mengeluarkan output jumlah atau kombinasi dari semua data di dalam array

contoh;
input:
- arr : [1, 2, 3, 4, 5]

output: 
15

hasil dari 1 + 2 + 3 + 4 + 5
*/

let arr2 = [1, 2, 3, 4, 5, 20];
let jumlahArr2 = 0;

for (let i = 0; i < arr2.length; i++) {
  jumlahArr2 += arr2[i];
}

console.log(jumlahArr2);

// ==================================================== //
/*
Buatlah sebuah Aplikas yang menerima 2 input arr (array) dan index (number). Aplikas akan menghasilkan sebuah ARRAY BARU yang berisikan semua data di arr kecuali data yang berada di parameter index

contoh:
input: 
- arr: [1, 2, 3, 4, 5, 6]
- index: 3

output:
[1, 2, 3, 5, 6]

karena angka 4 berada di index ke 3, sehingga tidak dimasukkan ke dalam array baru
Nb: diasumsikan input selalu benar
*/

let arr3 = [1, 2, 3, 4, 5, 6];
let index = 3;
let newArr3 = Array();

for (let i = 0; i < arr3.length; i++) {
  if (i == index) continue;
  newArr3.push(arr3[i]);
}

console.log(newArr3);

// ==================================================== //
/*
    buatlah sebuah Aplikasi split yang akan menerima 2 parameter, str (string) dan param (string). Aplikasi ini berfungsi untuk memisahkan string menjadi array dimana param adalah parameter pemisahnya.

    contoh
    input: 
    - str: 'i love javascript'
    - param: ' '
    output: ['i', 'love', 'javascript'];

    contoh 2
    input:
    - str: 'javascript is so cool'
    - param: 'i'
    output: ['javascr', 'pt ', 's so cool']

    // s so cool
    // [javascr, pt , s so cool]
*/

// let str = "i love javascript";
// let param = " ";

let str = "javascript is so cool";
let param = "i";

let newArr4 = Array();

newArr4 = str.split(param);
console.log(newArr4);

// ==================================================== //
/*
Buatlah sebuah Aplikasi yang menerima 2 parameter angka (array) dan param (string), Aplikasi akan menghasilkan 1 array baru yang sudah terfilter berdasarkan param yang dikirimkan

contoh
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'genap'

ourput: 
[2, 4, 6, 8]

========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'ganjil'

ourput: 
[1, 3, 5, 7]
========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'test'

ourput: 
'param harus genap atau ganjil'
*/

let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let param1 = "text";
let newArrGenap = Array();
let newArrGanjil = Array();

function buatArrayBaru() {
  if (param1 !== "ganjil" && param1 !== "genap") return "param1 harus genap atau ganjil";

  for (let i = 0; i < angka.length; i++) {
    angka[i] % 2 === 0 ? newArrGenap.push(angka[i]) : newArrGanjil.push(angka[i]);
  }

  if (param1 === "genap") return newArrGenap;

  return newArrGanjil;
}

console.log(buatArrayBaru());

// ==================================================== //
/*
Buatlah sebuah Aplikasi yang menerima 1 parameter arr (array multidimensi), Aplikasi akan mengembalikan sebuah number yang merupakan hasil penjumlahan semua angka yang terdapat di array
*/

let data = [
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3],
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90],
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10],
  ],
];

let total = 0;
// tulis kode disini

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    for (let k = 0; k < data[i][j].length; k++) {
      total += data[i][j][k];
    }
  }
}

console.log(total); // 316

// ==================================================== //

/*
Buatlah sebuah Aplikasi untuk mendapatkan angka terbesar dan terkecil dari sebuah array multidimensi
*/

let data1 = [
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3],
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90],
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10],
  ],
];

// tulis kode disini
let terbesar = data1[0][0][0];
let terkecil = data1[0][0][0];

// ekspektasi output: [1, 90] => 1 yang terkecil dan 90 yang terbesar

let newArr5 = Array();

for (let i = 0; i < data1.length; i++) {
  for (let j = 0; j < data1[i].length; j++) {
    for (let k = 0; k < data1[i][j].length; k++) {
      const angkaPembanding = data1[i][j][k];
      terbesar < angkaPembanding ? (terbesar = angkaPembanding) : (terbesar = terbesar);
      terkecil > angkaPembanding ? (terkecil = angkaPembanding) : (terkecil = terkecil);
    }
  }
}

newArr5 = [terkecil, terbesar];

console.log(newArr5);
