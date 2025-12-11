export function hitungRataRata(nilaiArray) {
    let total = 0;
    for (const n of nilaiArray) {
        total += n;
    }
    return total / nilaiArray.length;
}

export function kategoriNilai(nilai) {
    if (nilai >= 85) {
        return "A";
    } else if (nilai >= 70) {
        return "B";
    } else if (nilai >= 55) {
        return "C";
    } else {
        return "D";
    }
}