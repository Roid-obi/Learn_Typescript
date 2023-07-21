"use strict";
// intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
// hal ini sangat cocok ketika kita tidak bisa melakukan extending pada interface
//kita bisa membuat type dengan menggunakan kata kunci & (dan)
describe('Intersection Type', function () {
    it('should support intersection Type', function () {
        const domain = {
            id: "1",
            name: "Roid"
        };
        console.info(domain);
    });
});
