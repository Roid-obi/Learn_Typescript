
describe('Null undefined', function () {
    it('should support undefined and undefined', function () {
        function sayHello(name?: string | null) {
            if(name) {
                console. info(`Hello ${name}`);
            } else {
                console.info(`hello`);
            }
        }

        sayHello('Roid');
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    }); 
})