const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
};
