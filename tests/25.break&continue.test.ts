// sama seperti js

describe('Break and Continue', function () {
    it('should support Break Continue', function () {
    
        let counter = 0;
        do{
            counter++;
            if (counter == 10) {
                break; // berhenti
            }
            
            if (counter % 2 == 0) { // ganjil
                continue; // di skip
            }

            console.info(counter);

        } while (true);

    });
});