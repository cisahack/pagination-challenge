const express = require("express");

const app = express();

const paginateApps = require("./pagination");

app.get("/", (req, res) => {
  res.send("Welcome to Pagination API");
});

app.get("/apps", (req, res) => {
  const { by, start, end, max, order } = req.query;

  const filteredApps = paginateApps(by, start, end, max, order);

  res.json({ apps: filteredApps });
});

app.listen(3000, () => {
  console.log("server is listening in port 3000");
});
