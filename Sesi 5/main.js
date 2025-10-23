import Pengguna from './user.js';

const newUser = new Pengguna('Aditya', 'aditya@mail.com');
console.log(`Informasi Pengguna: ${newUser.getInfo()}`);