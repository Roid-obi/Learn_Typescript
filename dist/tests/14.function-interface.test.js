"use strict";
// implementasi dari interface di js sebenarnya dalah sebuah object
// kita juga bisa menambahkan function sebagai attribute di object (seperti di js)
describe('Function Interfae', function () {
    it('should support interface person', function () {
        const person = {
            name: "Roid",
            sayHello: function (name) {
                return `Hello ${name}, My name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Zeta"));
    });
});
