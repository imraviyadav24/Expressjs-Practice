//INTRODUCTION
// const express = require("express");
// const app = express();

// app.get("/", function (request, response) {
//   response.send("Hello World");
// });

// app.get("/ravi", function (request, response) {
//   response.send("My name is khan");
// });

// app.listen(700);

//ROUTING

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to ExpressJS Tutorial");
});

app.listen(80);
