const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  updateUser,
  fetchUserInfo,
} = require("./controller/userController");

const jwtMiddleware = require("./utils/jwtMiddleware");

const checkIsUndefined = require("./helpers/checkIsUndefined");

const checkIsStrongPasswordFunc = require("./helpers/checkIsStrongPasswordFunc");

const checkIsEmptyFunc = require("./helpers/checkIsEmptyFunc");

const {
  checkIsEmailFunc,
  checkIsAlphaFunc,
  checkIsAlphaNumericFunc,
} = require("./helpers/authMiddleware");

router.post(
  "/sign-up",
  checkIsUndefined,
  checkIsStrongPasswordFunc,
  checkIsEmptyFunc,
  checkIsEmailFunc,
  checkIsAlphaFunc,
  checkIsAlphaNumericFunc,
  signup
);

router.post(
  "/login",
  checkIsEmptyFunc,
  checkIsUndefined,
  checkIsEmailFunc,
  login
);

router.put("/update-user", jwtMiddleware, updateUser);

router.get("/get-user-info", jwtMiddleware, fetchUserInfo);

module.exports = router;
