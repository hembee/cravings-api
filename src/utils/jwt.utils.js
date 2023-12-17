const jwt = require("jsonwebtoken");
// require("dotenv").config();

const secretKey =
  "bbed6a88dce1374ca635eaf2059400e437ad9ec38c1e56d0fdeaacf8e78aae13cacd0ee9a8de6c7771bd4de09877e9f7574566fbad1d77f42ae00a3320ac3c2c";

const generateToken = (user) => {
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
