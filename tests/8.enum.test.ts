// enum, yaitu tipe data yang nilainya sudah pasti
// tipe data ini tidak dimiliki js
// secara default tipe data enum ini akan dikonversi menjadi data string di js, namun bisa juga dikonversi menjadi number

import { Custommer, CustommerType } from "../src/enum";


describe('Enum', function () {
    it('should support enum in typescript', function () {
        const custommer: Custommer = {
            id: 1,
            name: "Zeta",
            type: CustommerType.PLATINUM // menggunakan enum
        }

        console.info(custommer)
    });
})