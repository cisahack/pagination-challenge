const { reqIndex } = require("../pagination");

test("reqIndex returns 0 for id=1", () => {
  expect(reqIndex("id", 1)).toBe(0);
});

test("reqIndex returns 0 for name=my-app-001", () => {
  expect(reqIndex("name", "my-app-001")).toBe(0);
});
