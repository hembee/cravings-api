const dotenv = require("dotenv");

dotenv.config();

const development = {
  MONGODB_CONNECTION_URL: process.env.DEV_MONGODB_CONNECTION_URL,
  bcrypt_salt_round: process.env.DEV_BCRYPT_SALT_ROUND,
  PORT: process.env.PORT,
};

module.exports = development;
