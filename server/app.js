const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();
const ErrorMessageHandlerClass = require("./user/utils/ErrorMessageHandlerClass");
const errorController = require("./user/utils/errorController");
const userRouter = require("./user/userRouter");

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

const limiter = rateLimit({
  max: 20,
  windowMs: 1 * 60 * 1000,
  message:
    "Too many requests from this IP, please try again or contact support",
});
