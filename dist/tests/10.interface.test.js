// interface adalah cara lain melakukan deklarasi data selain menggunakan Type 
// bedanya dengan Type adalah : interface bisa dikembangkan lebih mudah dibandingkan dengan Type
//oleh karna itu jika tipe datanya lebih kompleks, biasanya menggunakan inteface dibandingkan dengan Type
describe('interface', function () {
    it('should support inteface', function () {
        const seller = {
            id: 1,
            name: "Roid",
            nib: "101010",
            npwp: "101010",
        };
        seller.name = "Zeta";
        // seller.nib = "2020"; //error karena readonly(tidak bisa diubah)
        console.info(seller);
    });
});
export {};
