//sama seperti js, yang membedakan pada parameter kita perlu menentukan tipe data,
// dan pada function kita perlu menentukan tipe data return valuenya

// jika function tidak mengembalikan value, bisa menggunakan tipe data void atau tidak perlu diisi

describe('function', function () {
    it('should support function', function () {

        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello("Roid")).toBe("Hello Roid");


        function printHello(name: string): void { // void = tidak mengembalikan data apapun
            console.info(`Hello ${name}`)
        }

        console.info(printHello("Zeta"));
    });


    // function parameter
    it('should support Function Parameter', function () {
        // sama seperti js function bisa memiliki banyak parameter
        // di typescript setiap parameter wajib diisi, kecuali kita rentukan sebagai optional menggunakan ?(tanda tanya)

        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`
        }

        expect(sayHello("Roid")).toBe("Hello Roid");
        expect(sayHello()).toBe("Hello Guest");
    });


    
    it("should support rest parameter", function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15);
    });

    it('should support opsional parameter', function () {
        function sayHello(firstName : string, lastName? : string): string {
            if(lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }
        
        expect(sayHello("Roid")).toBe("Hello Roid");
        expect(sayHello("Roid", "Robih")).toBe("Hello Roid Robih");
        // console.info(sayHello("Roid"));
    });
});