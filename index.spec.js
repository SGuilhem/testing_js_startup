import { add, sub, mult } from "./index";

test("Returns the sum", () => {
  expect(add(4, 1)).toBe(5);
});

test("Returns the sub", () => {
  expect(sub(42, 50)).toBe(-8);
});

test("Returns the mult", () => {
  expect(mult(4, 5)).toBe(20);
});
