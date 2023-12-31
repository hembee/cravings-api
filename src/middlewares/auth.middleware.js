const { UnAuthorizedError } = require("../error/error");
const { verifyToken } = require("../utils/jwt.utils");

const userAuthMiddleware = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token)
    throw new UnAuthorizedError("You must provide an authorization token");
  try {
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    throw new UnAuthorizedError("Access denied, invalid token");
  }
};

module.exports = { userAuthMiddleware };
