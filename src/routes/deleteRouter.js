const express = require("express");
const apiRouter = require("./apiRouter");

const deleteRouter = express.Router();
apiRouter.use("/delete", deleteRouter)

module.exports = deleteRouter;