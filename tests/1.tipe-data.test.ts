// satu variable hanya bisa satu type data 

describe('tipe Type', function () {
    it('should must declare', function () {
        const name: string = "Roid Robih";
        const balance: number = 100;
        const isVip:boolean = true;

        console.log(name);
        console.log(balance);
        console.log(isVip);
    });
})