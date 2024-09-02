const express = require("express");
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();
const cors = require("cors");

const URL =
  "mongodb+srv://tanishajat123:1rzcXtiPXGjShHha@expense-cluster.oovwu.mongodb.net/mern-expenses";

//!Connect to mongodb
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log(e);
  });

//!CORS Config
const corsOption = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOption));

//!Middleware
app.use(express.json());

//!Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

//!Error
app.use(errorHandler);

//!start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is up and running on....... ${PORT}`)
);
