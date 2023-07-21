// sama seperti js

describe('While Loop', function () {
    // While
    it('should support While Loop', function () {
        
        let counter = 0;
        while (counter < 10) {
            console.info(counter);
            counter++;
        }

    });

    // do while
    it('should support Do While Loop', function () {
        
        let counter = 0;
        do{
            console.info(counter);
            counter++;
        } while (counter < 10);

    });
});