describe("Union Type", function () {
  it("should support union types", function () {
    //membuat variable yang bisa berubah bentuk type datanya

    let sample: number | string | boolean = "Roid Robih";
    console.log(sample);

    sample = 100;
    console.log(sample);

    sample = true;
    console.log(sample);
  });

  it('should support union types function', function () {
    // union type
    //catatan : hati-tahi ketika memanggil method terhadap variable tersebut, hal ini karna tipe datanya bisa berubah
    // untuk itu cek tipe datanya menggunakan typeof
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase(); //
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Roid")).toBe("ROID");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
