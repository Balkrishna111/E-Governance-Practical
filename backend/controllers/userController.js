const User = require("../models/User");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const user = await User.create({ name, email, password });
      return res.status(201).json({ message: "user created successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = { createUser };
