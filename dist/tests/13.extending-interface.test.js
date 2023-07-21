// interface bisa melanjutkan (extends) ke interface lain
// secara otomatis attribute interface yang di lanjutkan dimiliki oleh interface tersebut
// membuat kita lebih mudah membuat data yang kompleks
describe('Extanding Interface', function () {
    it('should support ', function () {
        const employee = {
            id: "1",
            name: "Zeta",
            division: "IT"
        };
        const manager = {
            id: "2",
            name: "Roid",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
});
export {};
