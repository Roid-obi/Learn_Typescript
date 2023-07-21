"use strict";
describe('any', function () {
    //untuk menggunakan tipe data yang bebas maka gunakan any (tanpa ketentuan/seperti js)
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "Roid Robih",
            age: 18,
        };
        person.age = 17;
        person.name = "Vestia Zeta";
        person.address = "Sekai";
        console.info(person);
    });
});
