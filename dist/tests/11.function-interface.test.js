"use strict";
// di typescript, tika juga bisa membuat deklarasi function delam bentuk interface
// dengan membuat variabel yang berisi function, maka bisa dengan mudah menggunakan interface tersebut
describe('function interface', function () {
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
        console.info(add(3, 2));
    });
});
// jadi membuat deklarasi function, tipe datanya bisa gunakan interface juga
