const express = require("express");
const app = require("../app");

const apiRouter = express.Router();
app.use("/api", apiRouter);

module.exports = apiRouter;
