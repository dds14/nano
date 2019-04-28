require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const { SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
const { signup } = require("./controllers/authController");

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("database connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.post("/auth/signup", signup);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
