// secara default, saat kita membuat attribute di Object atau Type, maka attribute tersebut wajib diisi nilainya
// tapi kadang tidak semua wajib diisi
// pada khasus tidak wajib diisi, kita bisa tambahkan tanda ? untuk menandakan bahwa itu optional


describe('Optional Propertied', function () {
    it('should support Optional', function () {
        const person: { id: string, name: string, hobbies?: string[] } = {
            id: "1",
            name: "Roid",
        }
        console.info(person);

        person.id = "2";
        person.name = "Zeta";

        console.info(person);
    });
});