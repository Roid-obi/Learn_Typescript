// sama seperti js

describe('If Statement', function () {
    it('should support If Statement', function () {

        const examValue = 90;

        if (examValue > 80) {
            console.info("Good");
        } else if( examValue > 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }

    });
});