"use strict";
// function sebagai parameter
// di typescript juga kita bisa gunakan function sebagai parameter
// hal ini sering kita ketika memanggil function yang membutuhkan callback function lainnya
describe('Function sebagai parameter', function () {
    it('should support Function as parameter', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Roid", toUpper)).toBe("Hello ROID");
        // console.info(sayHello("ROID", toUpper));
    });
    // anonymous function
    it('should support Anonymous Function', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        expect(sayHello("Roid", function (name) {
            return name.toUpperCase(); // toUpperCase untuk mengubah char string menjadi kapital
        })).toBe("Hello ROID");
    });
    // arrow function
    it('should support Arrow Function', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        expect(sayHello("Roid", (name) => name.toUpperCase()))
            .toBe("Hello ROID");
    });
});
