const userProfile = {
    firstname: 'Budi',
    lastname: 'Santoso',
    age: 30,
    email: 'budi.susanto@example.com',
    isActive: true,
    
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    },

    greet() {
        return 'Hello, saya ' + this.getFullName() + '.';
    }
};
const usia= userProfile["age"];
userProfile.lastname= "Jono";
let namabaru = "firstname";
userProfile[namabaru]= "Rudi";
console.log("Nama lengkap:", userProfile.getFullName());
console.log("Usia:", usia);
console.log("Status aktif:", userProfile['isActive']);
console.log(userProfile.greet());