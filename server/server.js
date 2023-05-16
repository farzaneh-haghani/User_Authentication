const express = require("express");
const cors = require("cors");
const users = require("./users.json");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
// app.options('*', cors());
// app.use(cors({ origin: true, credentials: true }));

const fs = require("fs").promises;
const bcrypt = require("bcrypt");

app.use(express.urlencoded({ extended: false }));


app.use(bodyParser.json());



app.get("/register", (req, res) => {
  res.send("test");
})


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = {
    name, email, hashPassword
  }

  users.push(newUser);

  fs.writeFile("./users.json", JSON.stringify(users, null, 2), (err) => res.status(500).json({ Error: err }));
  res.status(200).json({ data: newUser });

});

app.listen(4000, () => {
  console.log("Server started on port 4000")
});
