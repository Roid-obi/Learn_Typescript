import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello Roid', function () {
        expect(sayHello('roid')).toBe('hello roid');
    });
});
