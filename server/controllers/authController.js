const bcrypt = require("bcryptjs");

// Main Account Signup
const signup = async (req, res) => {
  const db = req.app.get("db");
  // console.log(req.body);
  const {
    username,
    email,
    password,
    igaccountname,
    atname,
    profilepicture,
    accountdescription,
    followercount,
    averagelikes,
    averagecomments,
    engagementrate,
    audiencebreakdown,
    priceperpost,
    contactinfo
  } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const result = await db
    .signup([
      username,
      email,
      hash,
      igaccountname,
      atname,
      profilepicture,
      accountdescription,
      followercount,
      averagelikes,
      averagecomments,
      engagementrate,
      audiencebreakdown,
      priceperpost,
      contactinfo
    ])
    .catch(err => {
      res.status(400).json("Username already exists");
    });
  req.session.user = {
    username: result[0].username,
    userId: result[0].id
  };

  res.json(req.session.user);
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
        username: results[0].username,
        userId: results[0].id
      };
      // THE GOOD SPOT
      // console.log(req.session.user.userId);
      // console.log(results);
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

// Gets the influencer profiles to be displayed on the home page
const getinfluencerprofiles = (req, res) => {
  const db = req.app.get("db");
  db.getInfluencerProfiles().then(nano_influencers =>
    res.status(200).json(nano_influencers)
  );
};

const getSession = function(req, res, next) {
  const { session } = req;
  if (!session.user) {
    session.user = { username: "", userId };
  }
  res.json(session.user);
};

const getProfile = (req, res) => {
  // console.log(req.params.id);
  const db = req.app.get("db");
  db.getprofile(+req.params.id).then(profile => res.status(200).json(profile));
};

const logout = (req, res) => {
  // console.log("LOGGED OUT");
  req.session.destroy();
  res.sendStatus(200).json("logged out");
};

const editprofile = (req, res) => {
  console.log("HIT!!");
  const {
    profilepicture,
    atname,
    followercount,
    averagelikes,
    averagecomments,
    engagementrate,
    priceperpost,
    audiencebreakdown,
    accountdescription,
    email
  } = req.body;
  const db = req.app.get("db");
  db.editprofile(
    profilepicture,
    atname,
    followercount,
    averagelikes,
    averagecomments,
    engagementrate,
    priceperpost,
    audiencebreakdown,
    accountdescription,
    email,
    req.session.user.userId
  ).then(nano_influencers => res.status(200).json(nano_influencers));
};

module.exports = {
  signup,
  login,
  getinfluencerprofiles,
  getSession,
  getProfile,
  logout,
  editprofile
};
