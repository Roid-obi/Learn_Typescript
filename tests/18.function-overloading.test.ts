// function overloading adalah kemampuan untuk membuat dengan nama yang sama, namun dengan parameter input yang berbeda



//kemampuan overloading  pada typescript membuat pembuatan function lebih aman

describe('Function Overloading', function() {
    it('should support Function Overloading', function () {

        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any) {
            if (typeof value === "string") {
                return value;
            } else if (typeof value === "number") {
                return value;
            }
        }

        expect(callMe(100)).toBe(100);
        expect(callMe("Zeta")).toBe("Zeta");

    });
});