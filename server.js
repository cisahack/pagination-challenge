const express = require("express");

const app = express();

const apps = [
  { id: 1, name: "my-app-001" },
  { id: 2, name: "my-app-002" },
  { id: 3, name: "my-app-003" },
  { id: 4, name: "my-app-004" },
  { id: 5, name: "my-app-005" },
  { id: 6, name: "my-app-006" },
  { id: 7, name: "my-app-007" },
  { id: 8, name: "my-app-008" },
  { id: 9, name: "my-app-009" },
  { id: 10, name: "my-app-010" },
  { id: 11, name: "my-app-011" },
  { id: 12, name: "my-app-012" },
  { id: 13, name: "my-app-013" },
  { id: 14, name: "my-app-014" },
  { id: 15, name: "my-app-015" },
  { id: 16, name: "my-app-016" },
  { id: 17, name: "my-app-017" },
  { id: 18, name: "my-app-018" },
  { id: 19, name: "my-app-019" },
  { id: 20, name: "my-app-020" },
  { id: 21, name: "my-app-021" },
  { id: 22, name: "my-app-022" },
  { id: 23, name: "my-app-023" },
  { id: 24, name: "my-app-024" },
  { id: 25, name: "my-app-025" },
  { id: 26, name: "my-app-026" },
  { id: 27, name: "my-app-027" },
  { id: 28, name: "my-app-028" },
  { id: 29, name: "my-app-029" },
  { id: 30, name: "my-app-030" },
  { id: 31, name: "my-app-031" },
  { id: 32, name: "my-app-032" },
  { id: 33, name: "my-app-033" },
  { id: 34, name: "my-app-034" },
  { id: 35, name: "my-app-035" },
  { id: 36, name: "my-app-036" },
  { id: 37, name: "my-app-037" },
  { id: 38, name: "my-app-038" },
  { id: 39, name: "my-app-039" },
  { id: 40, name: "my-app-040" },
  { id: 41, name: "my-app-041" },
  { id: 42, name: "my-app-042" },
  { id: 43, name: "my-app-043" },
  { id: 44, name: "my-app-044" },
  { id: 45, name: "my-app-045" },
  { id: 46, name: "my-app-046" },
  { id: 47, name: "my-app-047" },
  { id: 48, name: "my-app-048" },
  { id: 49, name: "my-app-049" },
  { id: 50, name: "my-app-050" },
];

app.get("/apps", (req, res) => {
  res.json(apps);
});

app.get("/apps", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const result = apps.slice(startIndex, endIndex);
  res.json(result);
});

// const page = parseInt(req.query.page);

// const limit = parseInt(req.query.limit);

// const result = {};
// if (endIndex < users.length) {
//   result.next = {
//     page: page + 1,
//     limit: limit,
//   };
// }
// if (startIndex > 0) {
//   result.previous = {
//     page: page - 1,
//     limit: limit,
//   };
// }

// result.results = users.slice(startIndex, endIndex);
// res.json(result);

app.listen(3000, () => {
  console.log("server started on port 3000");
});