import * as config from './config.js';

function fetchData(endpoint) {
    const url = `${config.BASE_URL}/${endpoint}`;
    console.log(`Mengambil data dari: ${url}`);
    console.log(`Menggunakan kunci API: ${config.API_KEY}`);
    console.log(`Batasan per halaman: ${config.MAX_ITEMS_PER_PAGE}`);
}

fetchData('products');