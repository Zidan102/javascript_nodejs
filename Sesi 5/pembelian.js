import { hitungDiskon, hitungPajak } from './calculator.js';

const hargaAwal = 1000;

const hargaSetelahDiskon = hitungDiskon(hargaAwal, 10);
console.log(`Harga setelah diskon: ${hargaSetelahDiskon}`);

const hargaAkhir = hitungPajak(hargaSetelahDiskon, 5);
console.log(`Harga akhir setelah pajak 5%: ${hargaAkhir}`);

hitungDiskon('seribu', 10);