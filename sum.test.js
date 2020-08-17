const sum = require("./sum");

test("Adds up two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
