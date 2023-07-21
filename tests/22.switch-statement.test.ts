// sama seperti js

describe('Switch', function () {
    it('should suppert switch', function () {
        function sayHello(name: string) {
            switch (name) {
                case "Roid":
                    return "Hi Roid";
                case "Zeta":
                    return "Hi Zeta";
                default:
                    return "Hello";
            }
        }

        console.info(sayHello("Zeta"));
        console.info(sayHello("Roid"));
        console.info(sayHello("Kobo"));
    });
});