// sama seperti js

describe('For Loop', function () {
    it('should support For Loop', function () {
        const names = ["Roid", "Robih", "Vestia"];

        //for i
        for (let i = 0; i < names.length; i++) {
            console.info(names[i])
        }

        // for of 
        for (const name of names) {
            console.info(name);
        }

        // for in 
        for (const index in names) {
            console.info(names[index]);
        }


    });
});