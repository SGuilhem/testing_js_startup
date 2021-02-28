import MyMath from "./demoClass";

describe("'add' from MyMath", () => {
  const cases = [
    [2, 2, 2, 6],
    [0, -1, -1, -2],
    [42, -42, 42, 42],
    [16, 18, -8, 26],
  ];
  test.each(cases)(
    "given init value %p and add %p and add %p then current value should be %p",
    (initValue, firstValueToAdd, secondValueToAdd, expectedResult) => {
      var sut = new MyMath(initValue);
      sut.add(firstValueToAdd);
      sut.add(secondValueToAdd);

      expect(sut.getCurrentValue()).toEqual(expectedResult);
    }
  );
});
