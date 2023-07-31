const express = require("express");
const userController = require("../controller/userController.js");
const tryCatchHandler = require("../utils/tryCatchHandler.js");

const userRouter = express.Router();

userRouter.post(
  "/signup",
  tryCatchHandler(userController.userSignupController)
);

module.exports = userRouter;
