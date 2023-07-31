const { BadUserRequestError, NotFoundError } = require("../error/error.js");
const User = require("../model/userModel.js");
const {userSignUpValidator, userLoginValidator} = require("../validators/userValidator.js");

const bcrypt = require("bcrypt");

const userController = {
  userSignupController: async (req, res) => {
    const { error } = userSignUpValidator.validate(req.body);
    if (error) throw error;
    const { firstName, lastName, email, password } = req.body;
    const emailExists = await User.find({ email });
    if (emailExists.length > 0)
      throw new BadUserRequestError(
        "An account with this email already exists"
      );
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "A new user has been created successfully",
      status: "Success",
      data: {
        user: newUser,
      },
    });
  },
  userLoginController: async (req, res) => {},
};

module.exports = userController;
