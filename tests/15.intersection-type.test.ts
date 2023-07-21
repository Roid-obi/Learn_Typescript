// intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
// hal ini sangat cocok ketika kita tidak bisa melakukan extending pada interface

//kita bisa membuat type dengan menggunakan kata kunci & (dan)

describe('Intersection Type', function () {
    it('should support intersection Type', function () {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        //extending interface
        // interface Person extends HasName, HasId { // menggabungkan 2 interface dan ingin menabah value lagi
        // }

        // intersection type 
        type Domain = HasId & HasName; //lebih simple


        const domain: Domain = {
            id: "1",
            name: "Roid"
        }

        console.info(domain);

    });
});