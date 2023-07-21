// di typescript, tika juga bisa membuat deklarasi function delam bentuk interface
// dengan membuat variabel yang berisi function, maka bisa dengan mudah menggunakan interface tersebut

describe('function interface', function () {
    it('should support function interface', function () {
        interface AddFunction {
            (value1: number, value2: number): number //return value di luar kurung
        }

        const add: AddFunction = (value1: number, value2: number):number => {
            return value1 + value2;
        }

        expect(add(2,2)).toBe(4);

        console.info(add(3,2));
    });
});



// jadi membuat deklarasi function, tipe datanya bisa gunakan interface juga