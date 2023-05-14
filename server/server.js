const express = require("express");
const app = express();


app.get("/", (req, res) => {
  // res.render("index.ejs");
  // res.sendFile(__dirname + "/views/index.ejs");
  res.send("ghfjhfk")
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
})

app.get("/register", (req, res) => {
  res.render("register.ejs");
})

app.listen(3001);