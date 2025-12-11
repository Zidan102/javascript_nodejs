export function hitungGajiBersih(gajiPokok, potongan) {
    return gajiPokok - potongan;
}

export function kategoriJabatan(gajiPokok) {
    if (gajiPokok >= 10000000) {
        return "Manajer";
    } else if (gajiPokok >= 5000000 && gajiPokok < 10000000) {
        return "Supervisor";
    } else {
        return "Staf";
    }
}


// main js
// export function hitungRataRata(nilaiArray) {
//     let total = 0;
//     for (const n of nilaiArray) {
//         total += n;
//     }
//     return total / nilaiArray.length;
// }

// export function kategoriNilai(nilai) {
//     if (nilai >= 85) {
//         return "A";
//     } else if (nilai >= 70) {
//         return "B";
//     } else if (nilai >= 55) {
//         return "C";
//     } else {
//         return "D";
//     }
// }
// nilai js
import { hitungRataRata, kategoriNilai } from "./nilai.js";

const mahasiswa = [
    { nama: "Andi", nilai: 90 },
    { nama: "Budi", nilai: 75 },
    { nama: "Citra", nilai: 60 },
    { nama: "Dinda", nilai: 40 }
];

console.log("=== Data Nilai Mahasiswa ===");

for (const m of mahasiswa) {
    const kategori = kategoriNilai(m.nilai);
    console.log(`${m.nama} - Nilai: ${m.nilai} - Kategori: ${kategori}`);
}

// Hitung rata-rata kelas
const semuaNilai = mahasiswa.map(m => m.nilai);
const rataRata = hitungRataRata(semuaNilai);

console.log(`\nRata-rata kelas: ${rataRata}`);
// main js