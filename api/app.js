const express = require("express");
const cors = require("cors");
const rankRouter = require("./routes/rankRoutes");
const wordRouter = require("./routes/wordsRoutes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/words", wordRouter);
app.use("/rank", rankRouter);

module.exports = app;
