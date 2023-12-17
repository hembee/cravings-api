const jwt = require("jsonwebtoken");
const { config } = require("../config/index");

const generateToken = (user) => {
  const payload = {
    email: user.email,
  };
  const token = jwt.sign(payload, config.jwt_secret_key, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, config.jwt_secret_key);
};

module.exports = { generateToken, verifyToken };
