const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const secretKey = a3fG6bPZ2nQcR8eY;

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
