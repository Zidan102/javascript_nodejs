const karyawan = {
    namaLengkap: "Alex Chandra",
    jabatan: "Web Developer",
    aktif: true,
    tahunBergabung: 2022,

    sapa: function() {
        return "Halo, saya " + this.namaLengkap + ", seorang " + this.jabatan + ".";
    },

    masaKerja(tahunsekarang) {
        return tahunsekarang - this.tahunBergabung;
    }
};
const { namaLengkap, jabatan } = karyawan;
console.log(namaLengkap);
console.log(jabatan);