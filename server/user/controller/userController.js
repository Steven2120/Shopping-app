const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/User");

async function signup(req, res, next) {
  const { username, email, password, firstName, lastName } = req.body;
  const { errorObj } = res.locals;

  if (Object.keys(errorObj).length > 0) {
    return res.status(500).json({ message: "failure", payload: errorObj });
  }

  try {
    let salt = await bcrypt.genSalt(12);
    let hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    });

    let savedUser = await createdUser.save();
    res.json({ message: "success", data: savedUser });
  } catch (e) {
    next(e);
  }
}
