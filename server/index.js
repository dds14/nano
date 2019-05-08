require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const nodemailer = require("nodemailer");
const { SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
const {
  signup,
  login,
  getinfluencerprofiles,
  getSession,
  getProfile
} = require("./controllers/authController");

const { addContactForm } = require("./controllers/contactForm");

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

// Login Authentication
app.post("/auth/signup", signup);
app.post("/auth/login", login);

// Influencer  - Displaying the information on the dashboard
app.get("/auth/influencerprofiles", getinfluencerprofiles);

// Sends Email
app.post("/api/contact", addContactForm);

// Gets profile information
app.get("/api/profile/:id", getProfile);

// Holds session
app.get("/api/users", getSession);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
