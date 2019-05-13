require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const nodemailer = require("nodemailer");
const { SERVER_PORT, SESSION_SECRET } = process.env;
const path = require("path"); // Usually moved to the start of file

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(express.json());
const {
  signup,
  login,
  getinfluencerprofiles,
  getSession,
  getProfile,
  logout,
  editprofile
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

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

// Log out
app.get("/auth/logout", logout);

// Edit Profile
app.put("/api/editprofile", editprofile);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
