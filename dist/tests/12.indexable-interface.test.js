"use strict";
// interface bisa juga digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti array dan object
describe('Indexable interface', function () {
    it('should support indexable Array', function () {
        const names = ["Roid", "Robih", "Vestia"];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });
    it('should support indexable Object/for non number index', function () {
        const dictionary = {
            name: "Roid",
            address: "Solo"
        };
        console.info(dictionary["name"]);
        console.info(dictionary["address"]);
        expect(dictionary["name"]).toBe("Roid");
        expect(dictionary["address"]).toBe("Solo");
    });
});
