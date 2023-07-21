// menggunakan tipe data Any sebenarnya tidak di rekomendasikan
// pada khasus jika kita membuat tipe data js object sendiri, kita bisa membuat alias untuk stuktur tipe data objectnya

import { Category, Product } from "../src/type-alias";

describe('Type Alias', function () {
    
    it("should support alias", function () {
        const category : Category = {
            id: "1",
            name: "Vtuber",
            description: "Youtuber Virtual" //optional
        };

        const product: Product = {
            id: "1",
            name: "Mousepad Zeta",
            price: 2000,
            category: category,
        };

        console.info(category);
        console.info(product);
    });

});