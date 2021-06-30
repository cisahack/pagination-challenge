const { getIndex } = require("../pagination");

test("GetIndex returns 0 for id=1", () => {
  expect(getIndex("id", 1)).toBe(0);
});

test("GetIndex returns 0 for name=my-app-001", () => {
  expect(getIndex("name", "my-app-001")).toBe(0);
});
