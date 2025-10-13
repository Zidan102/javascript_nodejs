const movie = {
    judul: "Interstellar",
    tahunRilis: 2014,
    sutradara: "Christopher Nolan",
    genre: ["Sci-fi", "Adventure", "Drama"],

    detail: function() {
        return `Judul: ${this.judul}
Tahun Rilis: ${this.tahunRilis}
Sutradara: ${this.sutradara}
Genre: ${this.genre.join(", ")}`;
    }
};

console.log("Sutradara:", movie.sutradara);
console.log("Genre:", movie.genre.join(", "));
console.log(movie.detail());