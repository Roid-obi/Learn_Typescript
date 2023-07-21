// terkadang mebuat alias terlalu bertele-tele, 
//kita juga bisa membuat tipe data js object secara langsung dengan mendeklarsikan detai type nye ketika membuat variable nya

// biasa digunakan dalam khasus sederhana

describe('Object Type', function () {
    it('should support object' , function () {
        const person: {id: string, name: string} = {
            id: "1",
            name: "Roid",
        };
        
        console.info(person);

        person.id = "2";
        person.name = "Zeta";

        console.info(person);
    });  
});