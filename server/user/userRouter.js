const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  updateUser,
  fetchUserInfo,
} = require("./controller/userController");
