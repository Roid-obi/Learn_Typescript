// kadang kandang kita tahu tipe data yang kita gunakan, namun typescript tidak tahu tipe data tersebut
// biasanya khasus seperti ini saat di return tipe datanya berubah menjadi any
// pada khasus seperti kita bisa gunakan kata kunci as (type assertions)

import { Person } from "../src/person";


describe('Type Assertion', function () {
    it('should support as', function () {

        const person: any = {
            name: "Roid",
            age: 17
        }

        const person2: Person = person as Person;
        // person2.sayHello("Roid"); //error

        console.info(person2);

    });
});

// type Assertion = mengubah tipe data