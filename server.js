const express = require("express");

const server = express();

server.listen(3000, () => {
  console.log("server is listening in port 3000");
});
