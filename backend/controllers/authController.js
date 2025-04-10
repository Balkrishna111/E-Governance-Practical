const User = require("../models/User");

const handleAuth = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(400);
  } else {
    try {
      const users = await User.find();
      const userFound = users.find((user) => user.email == email);
      if (userFound && userFound.password == password) {
        res
          .status(200)
          .json({ isLoggedIn: true, message: "Logged In Successfully." });
      } else {
        res
          .status(400)
          .json({
            isLoggedIn: false,
            message: "No user found with provided credentials.",
          });
      }
    } catch (error) {
      res.status(500).json({ isLoggedIn: false, message: error.message });
    }
  }
};

module.exports = { handleAuth };
