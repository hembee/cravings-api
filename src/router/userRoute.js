const express = require("express");
const userController = require("../controller/userController.js");
const tryCatchHandler = require("../utils/tryCatchHandler.js");

const userRouter = express.Router();

userRouter.get("/", () => {
  res.send("Welcome to cravings meals, satisfy your cravings.");
});
userRouter.post(
  "/signup",
  tryCatchHandler(userController.userSignupController)
);
userRouter.post("/login", tryCatchHandler(userController.userLoginController));

module.exports = userRouter;
