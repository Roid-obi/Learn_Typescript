// interface bisa melanjutkan (extends) ke interface lain
// secara otomatis attribute interface yang di lanjutkan dimiliki oleh interface tersebut

import { Employee, Manager } from "../src/employee";

// membuat kita lebih mudah membuat data yang kompleks

describe('Extanding Interface', function() {
    it('should support ', function() {
        const employee: Employee = {
            id: "1",
            name: "Zeta",
            division: "IT"
        }

        const manager: Manager = {
            id: "2",
            name: "Roid",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager);

    });
});