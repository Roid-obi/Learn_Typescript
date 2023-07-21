// menggunakan tipe data Any sebenarnya tidak di rekomendasikan
// pada khasus jika kita membuat tipe data js object sendiri, kita bisa membuat alias untuk stuktur tipe data objectnya
describe('Type Alias', function () {
    it("should support alias", function () {
        const category = {
            id: "1",
            name: "Vtuber",
            description: "Youtuber Virtual" //optional
        };
        const product = {
            id: "1",
            name: "Mousepad Zeta",
            price: 2000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
