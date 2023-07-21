"use strict";
describe('Null undefined', function () {
    it('should support undefined and undefined', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info(`hello`);
            }
        }
        sayHello('Roid');
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
