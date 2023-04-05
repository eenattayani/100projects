function konversiMenit(detikInput) {
  let detik = detikInput % 60;
  let menit = detikInput / 60;

  menit = Math.floor(menit);

  detik < 10 ? (detik = "0" + detik) : detik;
  menit < 10 ? (menit = "0" + menit) : menit;
  return menit + ":" + detik;
}

console.log(konversiMenit(121)); // 02:01
console.log(konversiMenit(21)); // 00:21
console.log(konversiMenit(98)); // 01:38
console.log(konversiMenit(942)); // 15:42

// kerjakan function di bawah hanya apabila function konversi menit sudah selesai
function konversiJam(detikInput) {
  let detik = detikInput % 3600;
  let jam = detikInput / 3600;

  jam = Math.floor(jam);
  jam < 10 ? (jam = "0" + jam) : jam;
  menitDanDetik = konversiMenit(detik);

  return jam + ":" + menitDanDetik;
}

console.log(konversiJam(9342)); // 02:35:42
