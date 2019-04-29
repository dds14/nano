const bcrypt = require("bcryptjs");

// Main Account Signup
const signup = async (req, res) => {
  const db = req.app.get("db");
  // console.log(req.body);
  const { username, email, password, influencer } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const result = await db
    .signup([username, email, hash, influencer])
    .catch(err => {
      res.status(400).json("Username already exists");
    });
  req.session.user = { username: result[0].username };
  res.json(result);
};

// Main Account Login
const login = async (req, res) => {
  const db = req.app.get("db");

  const results = await db.login(req.body.username);
  if (results[0]) {
    const isMatch = await bcrypt.compare(
      req.body.password,
      results[0].password
    );
    if (isMatch) {
      req.session.user = {
        username: results[0].username
      };
      console.log(results);
      res.json({ username: results[0].username });
    } else {
      res.status(403).json("Error: Wrong password");
      // console.log("wrong pw");
    }
  } else {
    res.status(403).json("Error: Wrong username.");
    // console.log("wrong un");
  }
};

const influencerSignUp = async (req, res) => {
  const db = req.app.get("db");
  // console.log(req.body);
  const {
    igAccountName,
    atName,
    profilePicture,
    accountDescription,
    followerCount,
    averageLikes,
    averageComments,
    engagementRate,
    audienceBreakdown,
    pricePerPost,
    contactInfo
  } = req.body;
  const result = await db
    .influencerSignUp([
      igAccountName,
      atName,
      profilePicture,
      accountDescription,
      followerCount,
      averageLikes,
      averageComments,
      engagementRate,
      audienceBreakdown,
      pricePerPost,
      contactInfo
    ])
    .catch(err => {
      res.status(400).json("Username already exists");
    });
  req.session.igAccountName = { igAccountName: result[0].igAccountName };
  res.json(result);
};

module.exports = {
  signup,
  login,
  influencerSignUp
};
