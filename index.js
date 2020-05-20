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

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Welcome to ExpressJS Tutorial");
// });

// app.get("/courses", function (req, res) {
//   res.send("Welcome to courses");
// });

// app.get("/courses/android", function (req, res) {
//   res.send("Welcome to Android Tutorial");

//   app.post("/post_test", function (req, res) {
//     res.send("Hello from POST Method");
//   });

//   app.all("/all_test", function (req, res) {
//     res.send("Hello from all() Routing Function.");
//   });
// });

// app.listen(80);

//HOW TO CREATE AND USE ROUTER IN EXPRESSJS

// const courses = require("./courses");

// app.use("/courses", courses);

// app.get("/", function (req, res) {
//   res.send("Welcome To Ganguly Tech Tutorial.");
// });

// app.listen(80);

//URL BUILDING

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello from ExpressJS Website.");
});

app.get("/profile/:id", function (req, res) {
  res.send("Profile ID: " + req.params.id);
});

app.get("/:course_name/courses/:id", function (req, res) {
  res.send("Course Name: " + req.params.course_name + ", ID: " + req.params.id);
});

app.get("/message/:phone_number([0-9]{10})", function (req, res) {
  res.send("Message To " + req.params.phone_number);
});

//NOTE: Expressjs always reads the file from top to bottom
//so always write the "*" code at the end of the code otherwise
//it will always show Page Not Found

app.get("*", function (req, res) {
  res.send("Page Not Found....");
});

app.listen(100);
