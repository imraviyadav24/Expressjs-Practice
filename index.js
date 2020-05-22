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

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello from ExpressJS Website.");
// });

// app.get("/profile/:id", function (req, res) {
//   res.send("Profile ID: " + req.params.id);
// });

// app.get("/:course_name/courses/:id", function (req, res) {
//   res.send("Course Name: " + req.params.course_name + ", ID: " + req.params.id);
// });

// app.get("/message/:phone_number([0-9]{10})", function (req, res) {
//   res.send("Message To " + req.params.phone_number);
// });

// //NOTE: Expressjs always reads the file from top to bottom
// //so always write the "*" code at the end of the code otherwise
// //it will always show Page Not Found

// app.get("*", function (req, res) {
//   res.send("Page Not Found....");
// });

// app.listen(100);

// // NOTE: Install Pug it is a template engine used in expressjs

// const express = require("express");
// const app = express();

// function logInfo(req, res, next) {
//   console.log("Hello from logInfo() Middleware....");
//   next();
// }

// function addData(req, res, next) {
//   var person = {
//     name: "Sandeep Ganguly",
//     city: "Kanpur",
//   };
//   req.person = person;
//   next();
// }

// app.use(logInfo);
// app.use(addData);

// app.use("/profile/:id([0-3]{1})", function (req, res, next) {
//   var names = ["Sandeep", "Amit", "Deepak", "Aman"];
//   req.name = names[req.params.id];
//   next();
// });

// app.get("/", function (req, res) {
//   res.send("Welcome to Index page....");
// });

// app.get("/person", function (req, res) {
//   res.send("Name: " + req.person.name + ", City: " + req.person.city);
// });

// app.get("/profile/:id([0-3]{1})", function (req, res) {
//   res.send("Name: " + req.name);
// });

// app.listen(80);

//NOTE: First HTML Page using PUG

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

// app.get("/", function (req, res) {
//   res.render("example", {
//     //Passing Values using Javascript Object into PUG File
//     name: "Sandeep Ganguly",
//     url: "https://www.facebook.com",
//     skills: ["Android", "ExpressJS", "Vue.JS"],
//   });
// });

//NOTE: If-Else Condition in PUG

app.get("/", function (req, res) {
  var person = {
    name: "Ravi Yadav",
    city: "Kanpur",
    tutorial: "ExpressJS",
  };
  res.render("example", {
    data: person,
  });
});

app.listen(80);
