// di ts tipe data Array bisa menggunakan tanda TipeData[] atau Array<TipeData>
describe('Array', function() {
    it('should same with javascript', function() {

        const names: string[] = ["Roid" , "Zeta" , "Komi"];
        const values: number[] = [1,2,3];

        console.log(names);
        console.log(values);

    });

    it('should support readonly Array', function() {

        // read only array (tidak bisa diubah lagi datanya)
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.log(hobbies);
        console.log(hobbies[0]);

        // hobbies[0] = "Nonton Anime"; //error karna tidak bisa diubah

    });

    it('should support', function() {

        // Tuple (panjang dan tipe data tiap index sudah ditentukan)
        const person: readonly [string, string,number] = ["Roid", "Robih", 18];

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "Zeta"; // error karna readonly

    });

    
});
