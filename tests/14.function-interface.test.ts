// implementasi dari interface di js sebenarnya dalah sebuah object
// kita juga bisa menambahkan function sebagai attribute di object (seperti di js)


describe('Function Interfae', function () {
    it('should support interface person', function () {
        interface Person {
            name: string;
            sayHello(name: string): string;
        }

        const person: Person = {
            name: "Roid",
            sayHello: function (name: string): string {
                return `Hello ${name}, My name is ${this.name}`;
            }
        };

        console.info(person.sayHello("Zeta"));
    });
});