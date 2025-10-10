let siswa = [
  {nama: "Asep", tugas: 80, uts: 95, uas: 85},
  {nama: "Iwan", tugas: 75, uts: 75, uas: 90},
  {nama: "Cepi", tugas: 70, uts: 80, uas: 90},
  {nama: "Agus", tugas: 65, uts: 40, uas: 55},
  {nama: "Dadang", tugas: 60, uts: 70, uas: 60}
];

console.log("NO | NAMA SISWA | TUGAS | UTS | UAS | NA");
console.log("-----------------------------------------------------");

siswa.forEach((data, index) => {
  let na = (0.4 * data.tugas) + (0.3 * data.uts) + (0.3 * data.uas);
  console.log(
    `${index + 1}  | ${data.nama.padEnd(10)} | ${data.tugas}   | ${data.uts}  | ${data.uas}  | ${na.toFixed(1)}`
  );
});