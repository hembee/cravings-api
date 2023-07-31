const Joi = require("joi");

const userSignUpValidator = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string(),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    )
    .message(
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
});

const userLoginValidator = Joi.object({
  email: Joi.string().email(),
  password: Joi.string(),
});

module.exports = {
  userSignUpValidator,
  userLoginValidator,
};
