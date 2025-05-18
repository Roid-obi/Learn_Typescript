// generic adalah fitur yang memungkinkan kita untuk membuat kode yang lebih fleksibel dan dapat digunakan secara lebih umum.
// Dengan menggunakan generic, kita dapat menentukan tipe data yang akan digunakan oleh suatu fungsi, kelas, atau antarmuka pada saat penggunakan, bukan pada saat deklarasinya.
// Hal ini memungkinkan kita untuk menghindari pengulangan kode dan memaksimalkan penggunaan kembali kode.

describe("Typescript Generic", function () {
    it("should support Function Generic", function () {

        // Contoh fungsi generik untuk menggabungkan dua elemen dalam sebuah array
        function combine<T>(input1: T, input2: T): T[] {
            return [input1, input2];
        }

        // Contoh penggunaan fungsi generik dengan tipe data string
        const resultString = combine<string>('Hello', 'World');
        console.log(resultString); // Output: ['Hello', 'World']

        // Contoh penggunaan fungsi generik dengan tipe data number
        const resultNumber = combine<number>(1, 2);
        console.log(resultNumber); // Output: [1, 2]

    });
} );