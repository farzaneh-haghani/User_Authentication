const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.urlencoded({ extended: false }));

const users = [];


app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    users.push({
      id: Date.now().toString(),
      name,
      email,
      password: hashPassword
    });
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.redirect("/register");
  }
});


app.get("/", (req, res) => {
  // app.set("views", path.join(__dirname, "views"));
  // app.use(express.static(path.join(__dirname, "public")))
  res.render("/Users/admin/Documents/GitHub/userauth/client//index.html");
});

app.listen(4000, () => {
  console.log("Server started on port 4000")
});
