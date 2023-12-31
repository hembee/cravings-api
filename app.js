const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const globalErrorHandler = require("./src/utils/globalErrorHandler.js");
const userRouter = require("./src/router/userRoute.js");
const config = require("./src/config/index.js");
dotenv.config();

const mongoURI =
  "mongodb+srv://cash2go:cash2go@blax.sa6yubn.mongodb.net/cravings?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI)
  .then(console.log("Database connection is established"))
  .catch((err) => console.log(err.message));
const port = config.PORT || 4000;
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", userRouter);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// error handler
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
