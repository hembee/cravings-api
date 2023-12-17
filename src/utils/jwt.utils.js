const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const payload = {
    email: user.email,
  };
  const token = jwt.sign(payload, secretKey, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, verifyToken };
