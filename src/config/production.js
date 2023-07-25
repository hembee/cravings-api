import dotenv from "dotenv";

dotenv.config({ path: "./configenv.env" });

const production = {
  MONGODB_CONNECTION_URL: process.env.PRODUCTION_MONGODB_CONNECTION_URL,
  bcrypt_salt_round: process.env.PRODUCTION_BCRYPT_SALT_ROUND,
  PORT: process.env.PORT,
};

export default production;
